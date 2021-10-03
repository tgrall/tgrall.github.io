---
title: "Oracle BPEL: Debugging 'internal' SOAP Messages"

categories: bpel soa
---

When you develop applications
that use SOAP based Web Services you very often use an HTTP proxy to
capture the request and response that are exchanged between the clients
and servers. For this you can use the Oracle HTTP Analyzer that is part
of the toolset of Oracle JDeveloper, Axis TCP Monitor, or a packaged
version of it that you have with Oracle BPEL Process Manager.

BPELs are making extensive usage of SOAP messages, and it could be
interesting to debug the different call to the partnerlinks. Oracle
BPEL PM, to avoid HTTP calls and make optimized SOAP message when the
partnerlink that you are invoking is deployed as a BPEL. So in the
default configuration you do not see the different calls. In this
article I explain how you can configure the server to be able to do it.

For this I will be using:

* Oracle BPEL Process Manager developer install running in an OC4J 10g Stand Alone (10.1.2.0.2)
* obtunnel, that is a package version of Axis TCP Monitor located in `&lt;BPEL_HOME&gt;\bin\obtunnel.bat`
* LoanFlow demo that you can install in 2 steps:

#### Starting the Oralce BPEL Tunneling tool:

Just run the command `&lt;BPEL_HOME&gt;\bin\obtunnel.bat` You will see the following application:

![](http://static.flickr.com/46/133968437_aa0d5804f6_o.png )


By default the TCPMonitor launched from BPEL listens on the port 1234
and proxies for the default Oracle BPEL port 9700. So in this context
you will capture all the requests is you access the server on the port
1234.

It is not sufficiant here since the different partnerlinks endpoint are
not dynamique and are set to the port 9700. So in this case you wont's
see the request coming from the BPEL to a local partner link (and I am
  not talking about the SOAP Optimization yet).

One way that I use to work around this issue in development _--maybe we have more simple
  solutions, but this is the one that I use--_ is to change
  the port of the OC4J and make the proxy listening on the port 9700. In
  this case you will be able to capture the requests made from BPEL to
  its partnerlinks.

#### Changing the Port of OC4J and the TCP Monitor

*I. Change the HTTP port of OC4J used by BPEL*

1.  Open `&lt;BPEL_HOME&gt;\system\appserver\oc4j\j2ee\home\config\http-web-site.xml`
2.  Edit the `port` attribute of the root element `web-site` to enter a different value

eg: `&lt;web-site port="9701"...`.  Stop your BPEL Process Manager

*II. Start a new TCPMonitor on port 9700*

1.  In the TCPMonitor sceen click on the Admin Tab
2.  Enter 9700 for the "Listen Port #" field (since we want to be sure the partnerlinks are called correctly)
3.  Enter 9701 (or the value you entered for the HTTP port) for "Target Port #".
4.  Click Add
5.  Click on the new tab "Port 9700". If you have an error message like "*java.net.BindException: Address Already in use: JVM_Bind*" this is simply because your BPEL process manager is not stopped. In this case stop the BPEL server, and start the TCPMonitor by clicking the Start button.


*III. Restart you BPEL Server*

Nothing special here you just need to start your server, and check that the BPEL PM is now listening on the HTTP port that you have entered, in my case 9701:

* `http://localhost:9701/BPELConsole`

You can now go on the test page of the LoanFlow process (either on the port 9700 or 9701) and invoke the process. I am using 9701 since I want to capture the calls make by the Business Process to its partnerlinks.

You can see some HTTP activities in your TCPMonitor, but if you look in
        details you only see request to the different WSDLs used by the
        LoanFlow...

I was like you expecting to be able to see the different SOAP requests
        and response, but BPEL does some optimization around local SOAP calls.
        So to be able to capture these requests you just need to turn of this
        optimization.

#### Turning Off the SOAP Shortcut

1.  In the BPEL console, click on the "*Manage BPEL Domain*" link (topright)
2.  You arrive in the configuration tab, look for the `optSoapShortcut` property and set it to `false`.
3.  Click `Apply` You can now go on the test page of the LoanFlow process (either on the port 9700 or 9701) and invoke the process. I am using 9701 since I want to capture the calls make by the Business Process to its partnerlinks.

Now you can see all the SOAP requests and responses between the LoanFlow BPEL and its partnerlinks.

![](http://static.flickr.com/46/133968438_d0dc761af0.jpg?v=0 )


![](http://static.flickr.com/46/133968438_d0dc761af0_o.png )


*Update on 08/02/2007*

For people that are currently using **Oracle BPEL 10.1.3.1** the *optSoapShortcut* is not visible anymore in the console, but it is still possible to configure this by adding it manually in the domain configuration file available at:

`$BPEL_HOME/domains/<domain>/config/domain.xml`
