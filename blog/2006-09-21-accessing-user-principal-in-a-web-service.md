---
title: "Accessing User Principal in a Web Service"

categories: ws java
---
WS-Security provides a standard way to secure Web Services. Since based on SOAP it is agnostic of the stack you are using. When using JAX-RPC implementation, you are running in a J2EE container. In this post I am giving a tip to access the Principal object.

I have a service service, and I need to access some user information in its implementation class ( `org.tug.ws.sample.SimpleServiceImpl` ). This service is secure with WS-Security, with for example simple authentication, the following screenshot, is the configuration of inbound security in OracleAS 10gR3:

![](http://static.flickr.com/92/248919057_ce2ba6a5f7_o.png Web Services Management )

So the service is secured, here the&nbsp;code that you have to add in your service implementation (or handlers) to access the Principal object.

1.  Implement [`javax.xml.rpc.server.ServiceLifecycle`](http://java.sun.com/j2ee/1.4/docs/api/javax/xml/rpc/server/ServiceLifecycle.html)
2.  Implement the init(Object context) method to access
the [`ServletEndpointContext`](http://java.sun.com/j2ee/1.4/docs/api/javax/xml/rpc/server/ServletEndpointContext.html),
that you can for example put as a local member of your implementation
class.
``` java
public void init(Object context) {
  _servleContext = (ServletEndpointContext)context;
}
```
3.  Then you can access the principal object using the `getUserPrincipal()` method:
``` java
...
if (_servleContext.getUserPrincipal() != null ) {
  Principal userPrincipal = _servleContext.getUserPrincipal();
  ...
}
...
```

You can find more information about the Security in J2EE 1.4 Web Services in the [Designing Web Services with the J2EE 1.4 Platform](http://java.sun.com/blueprints/guidelines/designing_webservices/html/security.html#1045527) tutorial.


* * *

*Update on Wednesday october 4th:* Frank Nimphius, has use this entry to create a more detail article about [End to End Security with Web Services Security](http://www.orablogs.com/fnimphius/archives/001815.html).
