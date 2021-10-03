---
title: "What to do if your Couchbase Server does not start?"

categories: nosql couchbase windows
---

Working with the Couchbase 2.0.0 release you may have issues when trying to access the Web Admin Console or simply starting the server. This is due to the way Couchbase Server uses the IP address/hostname during the installation process. So when you have one of the following errors :

* On Windows, Server is not working at all, even after installation. You can access the sever on port 8092 (Couchbase API port), but cannot on port 8091
* You have the following error when accessing the console `"[10:02:02] IP address seems to have changed. Unable to listen on 'ns_1@10.0.2.15'"`

![]( http://2.bp.blogspot.com/-OXj1bGEZTGg/UNs8QBx6X-I/AAAAAAAAAaI/TproFMOQXcE/s320/cb-20-ip-address-error.png )

* When you try to restart the server it does not start and you have the following error message in the error log :
`"Configured address '10.0.2.15' seems to be invalid. Will refuse to start for safety reasons"`

Some of these issues are related to a known issue on Windows ( see [MB-7417](http://www.couchbase.com/issues/browse/MB-7417) that will be fixed in 2.0.1) or the fact that Couchbase server does not support change of the IP address after installation.  This is documented in the section “[Using Couchbase in the Cloud: Handling Changes in IP Addresses](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-bestpractice-cloud-ip.html)” of the Couchbase Server Manual. This article explains what should be done when configuring Couchbase Server on Windows, but you can do equivalent steps on any platform using the shell scripts available on Linux and/or Mac OS X.

Once you have installed Couchbase, you can see in the console that the IP address of your server is used :
  ![]( http://3.bp.blogspot.com/-7wJEnnsZNlA/ULzAYBU09tI/AAAAAAAAAZk/PxZGdUbqo6k/s320/Screen+Shot+2012-12-03+at+4.07.03+PM.png )

Typically the address 192.168.0.97 is stored in the configuration of Couchbase. If your server receives a new address from the DHCP server, Couchbase will not work anymore. In this article you will see how you can configure Couchbase to use another IP address or Hostname.

**Important:** The steps that follow will completely destroy any data and configuration from the node, so it is best to start with a fresh Couchbase install. If you can not, you should backup your data using the file based backup-restore documented [here](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-backup-restore.html).

<!-- truncate -->

### Setting up a hostname in hosts file

The best practice is to register Couchbase using a hostname instead of an IP Address. For this you will need to associate this hostname to an IP address in the `hosts` file.

Since the `hosts` file is part of the system, *you need to edit it as administrator*. You have different approaches to achieve this:

The following steps explain the easiest way to do it:  

1.  Click “Start Menu”
2.  Navigate to “All Programs &gt; Accessories”
3.  “Right Click” on “Notepad” (or your favorite text editor)
4.  Click “Run as Administrator”

![]( http://4.bp.blogspot.com/-gxd-rAWLqd8/ULy-vIxak3I/AAAAAAAAAZc/00pNi3Iu0uc/s320/Screen+Shot+2012-12-03+at+3.57.16+PM.png )

You can now open the file `C:\Windows\System21\drivers\etc\hosts`

Add a new entry with a host name that will be used by Couchbase Server for example something like :

`127.0.0.1    couchbase-node1.mycompany.com`

Here I am using the local address (127.0.0.1) like that I won't have to change it even when my IP address changes. (This is useful when you are working in a single node mode)

### Configure Couchbase to use the hostname or new IP address

During the installation Couchbase has been registered as a Windows Service. To be able to associate Couchbase to the new hostname (or IP address) the service needs to re-configured and reinstalled.

This could be done using the scripts provided with the product. To run the scripts you need to do it as administrators, you can do it with one of the following methods:

* Search for the file and right click and select `Run as Administrator` (documented below)
* Run the terminal as administrator and run all the command from there (documented below)
* Search for the file and run it using `Ctrl+Shift+Enter`

#### Option 1 : Using the Start Menu and Search Program

**Stop Couchbase Server Windows Service**

The first thing to do, is to stop this service that is automatically started after the installation:

1.  Click `Start Menu`
2.  Type `Services` in the Search Program form
3.  Click on `Services`
4.  In the Services Application navigate to `CouchbaseServer`
5.  Right Click and Click on `Stop`
6.  Couchbase is now stopped.

**Edit the Service Register script**

Note: Due to a small formatting issue (See [MB-7322](http://www.couchbase.com/issues/browse/MB-7322)), Notepad could not be used, a solution is to take [Notepad++](http://notepad-plus-plus.org/) or any other advanced editing tool.


1.  As Administrator, open the `C:\Program Files\Couchbase\Server\bin\service_register.bat` file with your favorite editor. To open the editor as Administrator you can use the approach described in the previous step.
2.  Edit the line 9 to replace `%IP_ADDR%` by your hostname, the line should look like: `NS_NAME=ns_1@couchbase-node1.mycompany.com`
3.  Save the file

**Delete existing configuration and logs**

1.  Using the file explorer, go into: `C:\Program Files\Couchbase\Server\var\lib\couchbase\mnesia`
2.  Delete its content (Select All and Right Click)


**Register the new Configuration as Service**

1.  Using the file explorer, go into: `C:\Program Files\Couchbase\Server\bin`
2.  Right Click on `service_reregister.bat`
3.  Click on `Run as Administrator`

This script recreates the Couchbase Server Windows Service and starts it automatically.


**Check the configuration**

1.  Launch your Internet Browser
2.  Go to http://localhost:8091
3.  Follow the Couchbase Installation Steps
4.  Once install connect to the console
5.  Go to `Server Nodes` tab
6.  Check that the server name is now `couchbase-node1.mycompany.com`

![]( http://3.bp.blogspot.com/-tAn4jv_cdrk/ULzOA53roDI/AAAAAAAAAZ0/r8gts5uSdbU/s320/Screen+Shot+2012-12-03+at+5.06.07+PM.png )

Your Couchbase node is now configured to use the hostname of your server.


#### Option 2 : Using the Command Line

**Launch Command Prompt as Administrator**

1.  Click `Start Menu`
2.  Type `Command Prompt` in the Search program form
3.  Type `Ctrl+Shift+Enter`
4.  Go to `C:\Program Files\Couchbase\Server\bin` (or other location if you have chosen another location during installation)

You are now ready to do the administration tasks.

1.  Execute the `service_stop.bat`
2.  Edit the Service Register script

1.  Open `service_register.bat`
2.  Edit the line 9 to replace `%IP_ADDR%`` by your hostname (or your IP address), the line should look like: `set NS_NAME=ns_1@couchbase-node1.mycompany.com`
3.  Save the file3.  Delete the content of: `C:\Program Files\Couchbase\Server\var\lib\couchbase\mnesia`
4.  Execute the `service_reregister.bat

This script recreates the Couchbase Server Windows Service and starts it automatically.

**Check the configuration**

1.  Launch your Internet Browser
2.  Go to http://localhost:8091
3.  Follow the Couchbase Installation Steps
4.  Once install connect to the console
5.  Go to `Server Nodes` tab
6.  Check that the server name is now `couchbase-node1.mycompany.com`

![]( http://3.bp.blogspot.com/-tAn4jv_cdrk/ULzOA53roDI/AAAAAAAAAZ0/r8gts5uSdbU/s320/Screen+Shot+2012-12-03+at+5.06.07+PM.png )

Your Couchbase node is now configured to use the hostname of your server.
