---
title: "Create a Couchbase cluster in less than a minute with Ansible"

categories: couchbase nosql devops
---

**TL;DR:** Look at the Couchbase Ansible Playbook on my [Github](https://github.com/tgrall/couchbase-ansible-playbook).


### Introduction  

When I was looking for a more effective way to create my cluster I asked some sysadmins which tools I should use to do it. The answer I got during [OSDC](http://www.netways.de/osdc) was not [Puppet](https://puppetlabs.com/), nor [Chef](http://www.opscode.com/chef/), but was [Ansible](http://ansible.cc/).

This article shows you how you can easily configure and create a Couchbase cluster deployed and many linux boxes...and the only thing you need on these boxes is an SSH Server!

Thanks to [Jan-Piet Mens](http://jpmens.net/) that was one of the person that convinced me to use Ansible and answered questions I had about Ansible.

You can watch the demonstration below, and/or look at all the details in the next paragraph.

<iframe width="675" height="380" src="https://www.youtube.com/embed/COb6y89xcYY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Ansible

#### Ansible is an open-source software that allows administrator to configure and manage many computers over SSH.


I won't go in all the details about the installation, just follow the steps documented in the [Getting Started Guide](http://ansible.cc/docs/gettingstarted.html). As you can see from this guide, you just need Python and few other libraries and clone Ansible project from Github. So I am expecting that you have Ansible working with your various servers on which you want to deploy Couchbase.

Also for this first scripts I am using **root** on my server to do all the operations. So be sure you have register the root ssh keys to your administration server, from where you are running the Ansible scripts.


### Create a Couchbase Cluster

So before going into the details of the Ansible script it is interesting to explain how you create a Couchbase Cluster. So here are the 5 steps to create and configure a cluster:

1.  Install Couchbase on each nodes of the cluster, as documented [here](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-getting-started-install-ubuntu.html).
2.  Take one of the node and "initialize" the cluster,  using [cluster-init command](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-cli-other-examples.html).
3.  Add the other nodes to the cluster, using [server-add command](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-cli-other-examples.html).
4.  Rebalance, using [rebalance command](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-cli-other-examples.html).
5.  Create a Bucket, using [bucket-create command](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-cli-other-examples.html).

So the goal now is to create an Ansible Playbook that does these steps for you.




#### Ansible Playbook for Couchbase


The first think you need is to have the list of hosts you want to target, so I have create a [hosts file](https://github.com/tgrall/couchbase-ansible-playbook/blob/master/hosts) that contains all my server organized in 2 groups:

```
[couchbase-main]
vm1.grallandco.com

[couchbase-nodes]
vm2.grallandco.com
vm3.grallandco.com
```


The group [couchbase-main] group is just one of the node that will drive the installation and configuration, as you probably already know, Couchbase does not have any master... All nodes in the cluster are identical.

To ease the configuration of the cluster, I have create another file that contains all parameters that must be sent to all the various commands. This file is located in the [group_vars/all](https://github.com/tgrall/couchbase-ansible-playbook/blob/master/group_vars/all) see the section [Splitting Out Host and Group Specific Data](http://ansible.cc/docs/patterns.html#splitting-out-host-and-group-specific-data) in the documentation.

```
# Adminisrator user and password
admin_user: Administrator
admin_password: password

# ram quota for the cluster
cluster_ram_quota: 1024

# bucket and replicas
bucket_name: ansible
bucket_ram_quota: 512
num_replicas: 2
```

Use this file to configure your cluster.




Let's describe the [playbook file](https://github.com/tgrall/couchbase-ansible-playbook/blob/master/couchbase.yml) :

```
- name: Couchbase Installation
hosts: all
user: root

tasks:

- name: download Couchbase package
get_url: url=http://packages.couchbase.com/releases/2.0.1/couchbase-server-enterprise_x86_64_2.0.1.deb dest=~/.

- name: Install dependencies
apt: pkg=libssl0.9.8 state=present

- name: Install Couchbase .deb file on all machines
shell: dpkg -i ~/couchbase-server-enterprise_x86_64_2.0.1.deb
```

As expected, the installation has to be done on **all** servers as **root** then we need to execute 3 tasks:

1.  Download the product, the get_url command will only download the file if not already present
2.  Install the dependencies with the apt command, the state=present allows the system to only install this package if not already present
3.  Install Couchbase with a simple shell command. (here I am not checking if Couchbase is already installed)

So we have now installed Couchbase on all the nodes. Let's now configure the first node and add the others:

```
- name: Initialize the cluster and add the nodes to the cluster
hosts: couchbase-main
user: root

tasks:
- name: Configure main node
shell: /opt/couchbase/bin/couchbase-cli cluster-init -c 127.0.0.1:8091  --cluster-init-username=${admin_user} --cluster-init-password=${admin_password} --cluster-init-port=8091 --cluster-init-ramsize=${cluster_ram_quota}

- name: Create shell script for configuring main node
action: template src=couchbase-add-node.j2 dest=/tmp/addnodes.sh mode=750

- name: Launch config script
action: shell /tmp/addnodes.sh

- name: Rebalance the cluster
shell: /opt/couchbase/bin/couchbase-cli rebalance -c 127.0.0.1:8091 -u ${admin_user} -p ${admin_password}

- name: create bucket ${bucket_name} with ${num_replicas} replicas
shell: /opt/couchbase/bin/couchbase-cli bucket-create -c 127.0.0.1:8091 --bucket=${bucket_name} --bucket-type=couchbase --bucket-port=11211 --bucket-ramsize=${bucket_ram_quota}  --bucket-replica=${num_replicas} -u ${admin_user} -p ${admin_password}
```

Now we need to execute specific taks on the "main" server:

* Initialization of the cluster using the Couchbase CLI, on line 06 and 07

Then the system needs to ask all other server to join the cluster. For this the system needs to get the various IP and for each IP address execute the add-server command with the IP address. As far as I know it is not possible to get the IP address from the main playbook YAML file, so I ask the system to generate a shell script to add each node and execute the script.

This is done from the line 09 to 13.





To generate the shell script, I use [Ansible Template](http://ansible.cc/docs/modules.html#template), the template is available in the [couchbase-add-node.j2](https://github.com/tgrall/couchbase-ansible-playbook/blob/master/couchbase-add-node.j2) file.


```sh
{% for host in groups['couchbase-nodes'] %}
/opt/couchbase/bin/couchbase-cli server-add -c 127.0.0.1:8091 -u ${admin_user} -p ${admin_password} --server-add={{ hostvars[host]['ansible_eth0']['ipv4']['address'] }}:8091 --server-add-username=${admin_user} --server-add-password=${admin_password}
{% endfor %}
```

As you can see this script loop on each server in the [couchbase-nodes] group and use its IP address to add the node to the cluster.

Finally the script rebalance the cluster (line 16) and add a new bucket (line 19).

You are now ready to execute the playbook using the following command :

```
./bin/ansible-playbook -i ./couchbase/hosts ./couchbase/couchbase.yml -vv
```

I am adding the -vv parameter to allow you to see more information about what's happening during the execution of the script.

This will execute all the commands described in the playbook, and after few seconds you will have a new cluster ready to be used! You can for example open a browser and go to the Couchase Administration Console and check that your cluster is configured as expected.

 ![]( http://1.bp.blogspot.com/-L-3yeJZECwY/Uaj_PA_aVUI/AAAAAAAAAcg/fKBZ47Nhd4M/s320/Screen+Shot+2013-05-31+at+9.50.44+PM.png )

As you can see it is really easy and fast to create a new cluster using Ansible.

I have also create a script to uninstall properly the cluster.. just launch

```
./bin/ansible-playbook -i ./couchbase/hosts ./couchbase/couchbase-uninstall.yml
```
