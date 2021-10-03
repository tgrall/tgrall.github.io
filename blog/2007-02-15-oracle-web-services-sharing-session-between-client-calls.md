---
title: "Oracle Web Services: Sharing Session between client calls"
categories: ws java
---

OracleAS Web Services Runtime provides a support for stateful Web Services that is based on HTTP /Servlet session. Some people will probably say that Web Services should not be stateful, or at least not based on the protocol... However, today most of Web Services are using HTTP, and in some specific cases it is very useful to be able to have a state.

In this post, I am not explaining how to enable stateful services and clients, since it is documented in the [Java Classes and Stateful Web Wervices](http://download.oracle.com/docs/cd/B31017_01/web.1013/b28974/devjavaclass.htm#BEIDDAFG) chapter of the developer guide. Here I am show you how you can using client side programming share the same state (session) between different web services calls (even different services running in the same server side application).

The tip used here is about the association of cookies to the client instance (JAX-WS Stub or Call object). Here the code you have to write to do that using DII, will be very similar when using static Stub

1- Enable the state management

``` java
...
Service service = sf.createService(qName);
QName port = new QName("CartService");
Call call = service.createCall(port);
call.setProperty(Stub.SESSION_MAINTAIN_PROPERTY, Boolean.valueOf(true));  // this is necessary to be able to manipulate cookie
...

```

 2- Create a Map that contains the Cookies and assign it to the call (or Stub)

``` java

...
 Map cookieMap = new HashMap();
call.setProperty(ClientConstants.COOKIE_MAP, cookieMap);
...

```

This specific step associates a map that will contains all the cookie with the call/stub instance. You will be able then to manipulate the Map to get or set the cookies.

 3- How to get the `JSESSION` cookie

``` java
private Cookie getJSessionCookie(Call call) {
  Map cookies = (Map)call.getProperty(ClientConstants.COOKIE_MAP);

  if (cookies != null && !cookies.isEmpty()) {
    Iterator it =  cookies.values().iterator();
    while (it.hasNext()) {
      Cookie cookie = (Cookie)it.next();
      if (cookie.getName().equals("JSESSIONID")) {
        return cookie;
      }
    }
  }

  return null;
}
```

Note that the Cookie object is an instance of Oracle `HTTPClient.Cookie`.

4- Utilizing the Cookie

So now you have all the information to be able to get the Session information when the stateful conversation has started;

In this example each time the call.invoke() is done, a counter is incremented on the server.

``` java
Call call = service.createCall(port);
call.setProperty(Stub.SESSION_MAINTAIN_PROPERTY, Boolean.valueOf(true));  // this is necessary to be able to manipulate cookie
Map cookieMap = new HashMap();
call.setProperty(ClientConstants.COOKIE_MAP, cookieMap);
... // The session will only be created after the first invoke
call.invoke(...); // counter = 1 call.invoke(...); // counter = 2 since on the same session

... // the session is now created so you can get the cookie
Cookie mySession = getJSessionCookie(call)
...
```


You can now use the cookie in another call using the following code:

``` java
mySession ..  // was extracted from the call #1
...// now I am creating a new call instance (myNewCall) that could be in another class
Call myNewCall = service.createCall(port);
myNewCall.setProperty(Stub.SESSION_MAINTAIN_PROPERTY, Boolean.valueOf(true));  // this is necessary to be able to manipulate cookie
Map cookieMap = new HashMap();
// add the cookie to the map this will add the cookie to the HTTP request so it will be associated to the same session (/state)
cookieMap.put(mySession,mySession);// associate the cookie Map to the call
myNewCall.setProperty(ClientConstants.COOKIE_MAP, cookieMap);
...
myNewCall.invoke;  // counter = 3 since we share the same session
...

```


Using this sample you have 2 instances of a client calling a service and reusing the same session -state-.  You can also use the same approach to have 2 different clients talking to different services and share the same session. To do that you will have on the server side to use the HTTP Session directly to store your data between calls, and share it between services.
