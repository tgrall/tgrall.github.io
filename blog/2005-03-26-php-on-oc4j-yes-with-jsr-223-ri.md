---
title: "PHP on OC4J??? Yes with JSR 223 RI"
categories: [oc4j, oracle, php ,java]
---
In this entry I am explaining how to use the JSR-223 Reference Implementation into Oracle Containers for J2EE (OC4J).

Note: I have done this only on Windows XP Platform, I did not test on Unix/Linux yet.

1-The first thing to do is to download the [JSR-223 Reference Implementation from the JCP Web site](http://jcp.org/aboutJava/communityprocess/pr/jsr223/index.html).

2- Unzip the _sjp-1_0-ea-windows-i586.zip_ in a directory let say _d:\java\jsr223-ri_.

3- You can choose here to do a proper installation (requires perl) or not. The *proper* installation preconfigure Apache Tomcat and the JSR-223 command line demonstration. Since what we are trying to achieve is to install the RI inside OC4J you do not need to do the installation.

4- Download

[this zip file](http://www.grallandco.com/blog/archives/ant-jsr223.zip)
that contains a Ant task and various files to configure and deploy the JSR223 sample into OC4J.

&nbsp;&nbsp;&nbsp;4.1 To execute the Ant script you must start to set the following environman variables:
*   JAVA_HOME that points to the JDK home
*   ORACLE_HOME that points to the OC4J home (eg: d:\oracle\oc4j)
*   JSR223_HOME that points to directory where you have unzipped the JSR223 RI (eg d:\java\jsr223)

&nbsp;&nbsp;&nbsp;4.2 Create a startup script for OC4J using the command

```
ant
```

The default target create a script names _start-jsr223.bat_ in the %ORACLE_HOME%\bin directory. This script set various environment variable and start OC4J with the correct system parameters to load correctly the PHP scrip engine from Java.

&nbsp;&nbsp;&nbsp;4.3 Start OC4J using the created script

```
%ORACLE_HOME%\bin\start-jsr223.bat
```

&nbsp;&nbsp;&nbsp;4.4 Package and Deploy the Sample Application

```
ant deploy
```

This target packacge the Web samples from the reference implementation in a ear/war file, modifying the _web.xml_ to define the different servlet mapping needed by JSR223.

5 Use the sample application

`http://localhost:8888/jsr-223`

You can start to use PHP in OC4J ;-)  Take some time to read the sample code and specifications. JSR-223 is not only for Web container but also for JS2E, it is so interesting that the JSR-223 will probably be part of Mustang...
