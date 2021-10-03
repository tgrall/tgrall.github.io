---
title: "Google Data APIs"

categories:
---
![](http://www.google.com/logos/Logo*25wht.gif )[Google has published a new set of API](http://code.google.com/apis/gdata/overview.html) (and format) to update and access data. It looks really interesting. These services are published using the [REST](http://en.wikipedia.org/wiki/Representational*State*Transfer) paradigm and XML.

Based on this protocol Google is now exposing its [Calendar](http://code.google.com/apis/gdata/calendar.html). I am currently playing around with it, really fun. A good opportunity for portlets and widgets developments...

*Note for Oracle JDeveloper 10g (10.1.3) users:* I have define the GData and Calendar API as new library inside Oracle JDeveloper. But I had some issue compiling when I start to use any of the class coming from these library with the default configuration on Windows XP. I just switch from Oracle JVM to the standard JDK compiler in my project to avoid this "*Error: Internal compilation error, terminated with a fatal exception*".  To do this it is quite simple. Double click on your project, choose compiler in the left tree, and check the "Use Javac" option to force JDeveloper to use the standard javac command. *(I will have to find where this issue come from...)*
