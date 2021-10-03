---
title: "Calling a Web Services Protected using HTTP Basic"

categories:  ws java
---
WS-Security provides a way to protect Web Services at the message level (SOAP) and it is
independent of the protocol used (HTTP, JMS, ...). However, some services are still using HTTP based authentication for protection. JAX-RPC and its Oracle implementation provides a way to set the username
and password in the client (Stub) using some properties on the Stub.


``` java
((Stub)port)._setProperty(Stub.USERNAME_PROPERTY, "username");
((Stub)port)._setProperty(Stub.PASSWORD_PROPERTY, "password");  
```

That's it...

Theses properties are shortcuts to the standard JAX-RPC properties:

``` java
javax.xml.rpc.security.auth.username
javax.xml.rpc.security.auth.password
```

This code is the same when you are using the Call interface.
