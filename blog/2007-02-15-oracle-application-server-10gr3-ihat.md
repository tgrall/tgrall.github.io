---
title: "Oracle Application Server 10gR3: iHat"

categories: oracle
---
When preparing a complex topology, where you have multiple HTTP servers ,talking with many OC4J instances, it is sometimes hard to understand what is going on. Oracle Application Server Control provides the complete view of your topologies in different pages. If you want to have a quick overview of your topology, you may want a more graphical view of your Oracle Application Server instance.

One of the tool that I use a lot to present OracleAS and its components is [OracleAS Hi-Av Tool 10g (10.1.3)](http://www.oracle.com/technology/products/ias/utilities/ihat1013.zip) also known as **iHat**. This utility uses Oracle Process & Notification Manager (OPMN) to gather information of all the components used in your topology, representing it in a nice graphical viewer. In addition to use iHat to show the different components, I do also use that to validate my configuration.

{% img http://2.bp.blogspot.com/_aoQgQ1obiyE/RdSOpbcqAJI/AAAAAAAAAAk/huSO5c9xg9o/s1600/ihat001.png iHat Grid View )

In this case I am showing a specific instance, that contains 3 OC4Js instance, with 2 of them that are in the same group.  When using iHat you will notice that you can, in addition to have some monitoring information start, stop, restart the different components directly from the view.

*How do you install and start iHat?*


1- Download iHat from  [<span class="topstoryhead">Utilities for Oracle Application Server 10_g_ OTN page</span>](http://www.oracle.com/technology/products/ias/utilities/index.html)

2- Unzip it, and this becomes the <span style="font-family:courier new;">$IHAT_HOME</span>

3- You have an ORACLE_HOME that is pointing to one of the OracleAS instance, so you can start iHat using the follling command:

```
java -cp $ORACLE_HOME/opmn/lib/optic.jar:$IHAT_HOME/ihat.jar oracle.ias.opmn.ihat.WebServer 8181 $ORACLE_HOME
```

Using this command, iHat is starting an HTTP server on port 8181, and use the OPMN configuration of the `$ORACLE_HOME` that I you have entered as parameter. iHat provided other parameters such as the host-name and OPMN port if you want to connect remotely without dependency on the `$ORACLE_HOME`. All this, is documented in the readme file located in the iHat folder.
