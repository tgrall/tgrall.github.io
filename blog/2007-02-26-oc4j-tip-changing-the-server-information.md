---
title: "OC4J tip: changing the server information"

categories: oc4j
---
When you are running OC4J in stand alone mode you are using the HTTP server that is bundle with it. This HTTP server returns by default for the HTTP information the following information: *Server: Oracle Containers for J2EE*

If you want to change that you just need to set the `http.server.header` property. For example,

```
java -Dhttp.server.header="My blog on Oracle" -jar oc4j.jar
```

will now look like:

```
HTTP/1.1 200 OK
Date: Mon, 26 Feb 2007 21:52:53 GMT
Server: My blog on Oracle
Last-Modified: Mon, 09 Oct 2006 19:17:10 GMT
Accept-Ranges: bytes
Content-Length: 19882
Connection: close
Content-Type: text/html
```


Thanks to James Kirsh for this *very useful* tip...
