---
title: "Getting started with MapR-DB Table Replication"

categories: nosql maprdb mapr replication
---

## Introduction

MapR-DB Table Replication allows data to be replicated to another table that could be on on the same cluster or in another cluster. This is different from the automatic and intra-cluster replication that copies the data into different physical nodes for high availability and prevent data loss.

This tutorial focuses on the MapR-DB Table Replication that replicates data between tables on different clusters.

Replicating data between different clusters allows you to:

* provide another level of disaster recovery that protects your data and applications against global data center failure,
* push data close to the applications and users, 
* aggregate the data from mutliple datacenters.

**Replication Topologies**

MapR-DB Table Replication provides various topologies to adapt the replication to the business and technical requirements:

* *Master-slave replication* : in this topology, you replicate one way from source tables to replicas. The replicas can be in a remote cluster or in the cluster where the source tables are located.
* *Multi-Master replication* : in this replication topology, there are two master-slave relationships, with each table playing both the role of a master and a slave. Client applications update both tables and each table replicates updates to the other.

In this example you will learn how to setup multi-master replication.

<!-- truncate -->

### Prerequisites

* 2 MapR Clusters 5.x with Enterprise Edition license
    * in this demonstration they are called `cluster1` and `cluster2`

## Setting Up Replication

In the next steps you will configure your clusters to enable mutip-master replication as follow:

![Architecture](http://tgrall.github.io/images/posts/maprdb-replication/replication.png)



### Configuring the clusters

Each node of the source cluster must communicate with the destination cluster's CLDB nodes. On each node of your source cluster edit the `mapr-clusters.conf` file and add the destination cluster information.

*Cluster 1 Configuration*

In all the nodes of `cluster1`, edit the  `/opt/mapr/conf/mapr-clusters.conf` file and add the `cluster2` configuration. The file should look like the following:

```
cluster1 secure=false cluster1-node1:7222 cluster1-node2:7222 cluster1-node2:7222

cluster2 secure=false cluster2-node1:7222 cluster2-node2:7222 cluster2-node3:7222
```

*Cluster 2 Configuration*

In all the nodes of `cluster2`, edit the  `/opt/mapr/conf/mapr-clusters.conf` file and add the `cluster1` configuration. The file should look like the following:

```
cluster2 secure=false cluster2-node1:7222 cluster2-node2:7222 cluster2-node3:7222

cluster1 secure=false cluster1-node1:7222 cluster1-node2:7222 cluster1-node2:7222
```

You can find information about the `mapr-clusters.conf` format in [the documentation](http://maprdocs.mapr.com/home/ReferenceGuide/mapr-clusters.conf.html).

Open a terminal window on one of the `cluster1` node using `mapr` user, and do the following:

```
$ ls /mapr/cluster1/
apps   hbase  installer  opt  tmp  user  var

$ ls /mapr/cluster2/
apps   hbase  installer  opt  tmp  user  var

```

### Installing and Configuring the MapR Gateway

A MapR gateway mediates one-way communication between a source MapR cluster and a destination MapR cluster. In this example you will use mult-master replication, this means that data will be replicated from `cluster1` to `cluster2` and from `cluster2` to `cluster1`.

The good practice is to install the MapR-Gateway to the destination cluster, so in our case let's install one gateway on one of the `cluster1` node, and one gateway on one of the `cluster2` node. Note that this configuration will not be highly available, and usually you will deploy more than 1 gateway by cluster.


#### Installing the MapR-Gateway

As root on one node of the `cluster1`, adapt the command to your linux environment, for example on the node `cluster1-node2`

```
$ yum install mapr-gateway


# Update MapR configuration
$ /opt/mapr/server/configure.sh -N cluster1 -C cluster1-node1:7222,cluster1-node2:7222,cluster1-node3:7222 -R

```

Do the same on `cluster2`, for example on the node `cluster2-node2`:


```
$ yum install mapr-gateway


# Update MapR configuration
$ /opt/mapr/server/configure.sh -N cluster1 -C cluster2-node1:7222,cluster2-node2:7222,cluster2-node3:7222 -R

```


#### Registering the Gateway to the Clusters

Now that we have a gateway running on each cluster, you have to ***register the gateway*** in each cluster.

On `cluster1` run the following command to register the `cluster2` gateway as destination:

```
$ maprcli cluster gateway set -dstcluster cluster2 -gateways cluster2-node2

# Check the configuration
$ maprcli cluster gateway list
```

On `cluster2` run the following command to register the `cluster1` gateway as destination:

```
$ maprcli cluster gateway set -dstcluster cluster1 -gateways cluster1-node2

# Check the configuration
$ maprcli cluster gateway list
```


### Creating Table with Replication

In a terminal window, as `mapr` user on `cluster1`, create a table and insert documents:

```
$ maprcli table create -path /apps/user_profiles  -tabletype json

```
This create a new JSON table; it is also possible to use `/mapr/cluster1/apps/user_profiles`.

Let's now add documents using MapR-DB Shell:

```
$ mapr dbshell

maprdb mapr:> insert /apps/user_profiles --value '{"_id":"user001" , "first_name":"John", "last_name":"Doe"}'

maprdb mapr:> find /apps/user_profiles

```

#### Adding Table Replication

Let's now enable replication between `user_profiles` on `cluster1` to a `user_profiles` table in `cluster2`.

In `cluster1`, on a terminal window as `mapr` run the following command:

```
$ maprcli table replica autosetup -path /apps/user_profiles -replica /mapr/cluster2/apps/user_profiles -multimaster yes
```

You can get information about the replication configuration for the table using the following command:

```
$ maprcli table replica list -path /apps/user_profiles -json
```


#### Testing Replication

Open another terminal in `cluster2` and use MapR-DB Shell to look at the replicated data:

```
$ mapr dbshell

maprdb mapr:> find /apps/user_profiles
{"_id":"user001","first_name":"John","last_name":"Doe"}
1 document(s) found.

```
You can also use the full path `/mapr/cluster2/apps/user_profiles`

In `cluster1` add a new document using MapR-DB Shell:

```
$ mapr dbshell

maprdb mapr:> insert /apps/user_profiles --value '{"_id":"user002" , "first_name":"Simon", "last_name":"Dupont"}'

maprdb mapr:> find /apps/user_profiles
```

Do a find in `cluster2` table, and you will see that the data have been replicated.

You can insert or delete a document in `cluster2` and do a find in `cluster1`, you will see that the new document is also replicated in the other direction.

Note, for this demonstration, we use 2 terminals connected to each cluster you can do some test using the Global Namespace in a single MapR-DB Shell. 

## Conclusion

In this tutorial you have learned how to setup the MapR-DB Multi-Master replication to have data automatically replicated between 2 clusters.

MapR-DB Table Replication provides many options, not only in term of topology (master-slave/mult-master), but also some options and commands to:

* replicate some columns/attributes or column family
* configure replication in a secured cluster
* pause replication.

You can find more information about the MapR-DB Table Replication, and MapR-Gateway in the documentation:

* [Table Replication](http://maprdocs.mapr.com/home/MapR-DB/ReplicatingMapR-DBTables.html) 
* [Setting up Table Replication](http://maprdocs.mapr.com/home/MapR-DB/ConfiguringMapRClustersForTR.html)
* [Configuring and Managing MapR Gateways](http://maprdocs.mapr.com/home/Gateways/MapRGateways.html)