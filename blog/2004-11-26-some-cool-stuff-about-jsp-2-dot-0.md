---
title: "Some cool stuff about JSP 2.0"
categories: [javaEE, jsp]
---
J2EE 1.4 introduces a major release of JSP: 2.0.

Here some of the cool new features:

<!-- truncate -->

##### Direct usage of Expression Language (EL) in your JSP
You do not need to put the EL in any tag now, just use it as needed:

``` html
<html>
<head><title>JSP 2.0 new features</title></head>
<body>
Hello ${param.name}
</body>
</html>
```
Find more about JSP 2.0 Expression Language in [the J2EE 1.4 tutorial](http://java.sun.com/j2ee/1.4/docs/tutorial/doc/JSPIntro7.html).

##### Easy tags creation with .tag files
It is now easier to create your own tags.
You just need to create a new .tag file (or .tagx if you want to use XML syntax) in the WEB-INF/tags directory of your Web application; or META-INF/tags if you want to package the Tags in Jar file. So creating a .tag file is easy, using the attribute directive. The following example is a new tag named mytag.tag that prints a title set using the attribute title, in the color specified in the attribute textColor.

``` html
<%@ attribute name="title" required="true" description="Title of the document"%>
<%@ attribute name="textColor" required="true" description="Color of the Title"%>
<h1 style="color:${textColor}">${title}</h1>
```

Here is the JSP that uses this new Tag:

``` html
<%@ taglib tagdir="/WEB-INF/tags/" prefix="tags"%>
<html>
<head>
</head>
<body>
<p>
<tags:mytag title="My new JSP" textColor="blue"/>
</p>
<p>
Hello World${param.name}
</p>
</body>
</html>
```

##### Easy header and footer template using the prelude and coda includes

In most of the Web application that I have built, I started by creating template for my HTML pages; most of them to handle header and footer. Oracle JSP implementation provides this for a while using the [Global Include feature](http://download-west.oracle.com/docs/cd/B10464_01/web.904/b10320/trandepl.htm#1005780). JSP 2.0 introduces a standard way of doing that using prelude and coda includes. I *hate* the choice made by the spec to call that prelude and coda. May be good Java developer are necessary musicians, since this is commonly used there? Why not simply header/footer or using a prefix like pre.../post.... Anyway, that is not the point.

The way you can set a prelude and/or coda include to your JSPs is done with the new Web Descriptor tag: `<jsp-property-group>`. This new tag allows you to configure a set of JSP that matches a specific URL. Part of the subtags of `<jsp-property-group>` are:

* `<include-coda>` : the path to JSP fragment (.jspf) to include in the beginning all the JSP that matched the URL.
* `<include-prelude>`:the path to the JSP fragment to include in the end all the JSP that matched the URL.

An example configuration:

``` html
<jsp-config>
<jsp-property-group>
<url-pattern>*.jsp</url-pattern>
<include-prelude>/WEB-INF/includes/prelude.jsp</include-prelude>
<include-coda>/WEB-INF/includes/coda.jsp</include-coda>
</jsp-property-group>
</jsp-config>
```

This 3 new features of JSP 2.0 are just a very small list of the features introduced in JSP and Servlet in J2EE 1.4, but are my favorites. They are very easy to test and to adopt.
