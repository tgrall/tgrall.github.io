---
title: "Java 101: Generate a unique identifier with java.util.UUID"

categories: java
---
A friend of mine was asking me how to generate a unique ID for his application... As you probably already know Java SE 5 has introduced the java.util.UUID class to easily generate Universally Unique Identifier (UUID). As usual  [Wikipedia](http://en.wikipedia.org/wiki/UUID) is a great starting point to learn more about UUID.

Generating the unique ID is as simple as calling the method `UUID.randomUUID()` in the class. This will give a new instance of UUID that you can now manipulate; for example do a toString() to get the UUID string representation as describe in the specifications; for example `5462dc18-4653-42d1-b4e4-22fc970a6ce5`

Resources:

*   [UUID on Wikipedia](http://en.wikipedia.org/wiki/UUID)
*   [java.util.UUID Documentation](http://java.sun.com/javase/6/docs/api/java/util/UUID.html)
