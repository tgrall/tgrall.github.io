---
title: "Installing Blojsom on OracleAS 10g (10.1.3)"
tags: [java, oc4j, oracle]
---
I am using internally Blojsom for blogging about the product I am
taking care of: OC4J and especially the Web Services stack. In this
post I am quickly documenting, as the title says, how to install
Blojsom on OracleAS 10g.

##### 1-Download

The first thing to do is to download the product itself, just download the Blojsom quickstart from sourceforge.

##### 2-Deploy

Since, Blojsom is distributed as a WAR file you have nothing special to do, just deploy it. Anyway I have created a [viewlet &nbsp;that shows step by step deployment using Oracle Enterprise Manager](http://www.grallandco.com/blog/archives/viewlet/blojsom-install.swf).

So the application link will be: `http://localhost:8888/blojsom/`

Note: if you want to use the command line utility (admin.jar) or the
Ant deployment task, you should package the Web archive in an EAR file.

##### 3-Update the home page

The easiest way will be to just change the index.html page to redirect
to the default blog. The index.html page to be modified is in:

*  `$ORACLE_HOME/j2ee/home/application/blojsom/blojsomXXXX/index.html`
where `blojsomXXXX` is the name of the Web application generated during deployment.

##### 4- Start blogging...

This is it...
