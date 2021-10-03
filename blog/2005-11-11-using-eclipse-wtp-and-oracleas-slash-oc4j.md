---
title: "Using Eclipse WTP and OracleAS/OC4J"
tags: [oc4j, oracle, eclipse]
---
You have probably heard about [Web Tools Platform (WTP)](http://www.eclipse.org/webtools/), this project
extends Eclipse with various tools for developping J2EE applications.
It contains editors for HTML, JSP, XML and so more... In addition to
various wizards to create Web Services, EJB, Connector and more... WTP
allows developers to package the application using J2EE standard
packagind: EAR,WAR,RAR,JAR and deploy and run the application from the
IDE.

The challenge here is not how
you build J2EE components using an IDE, but more how do you package,
deploy and run your application easily from the IDE. Eclipse WTP allows
you like Oracle JDeveloper does, to package the various J2EE components
in standard archives (JAR, WAR, EAR, RAR, ...) and deploy them to a
J2EE container. WTP project has a very nice list of containers you
can deploy to: Oracle, IBM, BEA, JBoss, Tomcat, ...

[![](http://www.grallandco.com/blog/archives/wtp/wtp-server-thumb.PNG)](http://www.grallandco.com/blog/archives/wtp/wtp-server.html)


With the latest build of Eclipse WTP (Release 1.0M8), Oracle
Application Server 10g is now part of the default server list. So if
your are an OracleAS user you can now use WTP and start to run and
debut your application running in OracleAS from Eclipse.

What do you need to start using WTP and OracleAS:

1.  Download and install Eclipse WTP 1.0M8 from [Eclipse](http://www.eclipse.org/webtools/) site.
2.  Download and install OracleAS 10g (OC4J 10.1.3 Developer Preview 4) from [OTN](http://www.oracle.com/technology/tech/java/oc4j/1013/index.html)
3.  You must set a administrator password for OC4J using the start command
4.  Done! You can now use OC4J
and Eclipse.&nbsp;[I have a viewlet that shows the basic steps to create and run your first Web application](http://www.grallandco.com/blog/archives/wtp/wtp-oc4j.swf).

[![](http://www.grallandco.com/blog/archives/wtp/wtp-server-conf-thumb.png)](http://www.grallandco.com/blog/archives/wtp/wtp-server-conf.html)

OC4J configuration


Update _(Nov,18)_ : I forgot to mention the [Oracle Application  Server Adapter tutorial](http://www.eclipse.org/webtools/community/tutorials/OracleServerAdapter/OracleServerAdapter.html) from the Web Tools project.
