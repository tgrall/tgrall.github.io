---
title: "Oracle JAX-RPC: How to change the Character Encoding?"

categories: ws java
---

By default Oracle Web Service client is sending the SOAP messages using an UTF-8 encoding. This is the recommendation of WS-I Basic Profile. To be exact it says UTF-8 or UTF-16.

It is quite simple to change this encoding...

First you have to know that the JAX-RPC container will return the same character encoding than the one that is received. To change the character encoding, you just need to set the `ClientConstants.CHARACTER_SET_ENCODING` to the value you want to use. Here some simple client code:

``` java
Stub stub = (Stub)myPort.getPort();
stub._setProperty(oracle.webservices.ClientConstants.CHARACTER_SET_ENCODING, "UTF-16");
```

Most of the Web Services stacks are offering the same kind of utility to do that, for example here the property you must set to do the same in IBM's JAX-RPC implementation: `com.ibm.wsspi.webservices.Constants.MESSAGE_CHARACTER_SET_ENCODING`.
