---
title: "How to configure Web Cache to cache remote portlet content"
---

Some portlet developers have hard time to set up a correct environment to use
invalidation based cache with portlets. The summary is often:<br/>
*"it is working with the PDK Example provided in Oracle 9iAS but every
time that I want to do it myself from Oracle JDeveloper or a stand alone OC4J
the portlet is not cached !"*

<!-- truncate -->

This is most of the case due to a bad understanding of the different components
that are involved.

When we talk about invalidation based caching for Remote Portlet, we talk about
a portlet that caches its content in a Web Cache that __is between the
Portal Midtier and the Web Provider Midtier__. This is a first important
point. That also means that you have to register your remote Web provider using
a URL that points to this Web Cache.

![](http://www.grallandco.com/images/blog/webcache.png 461 287 PPE, Web Cache and Web Provider)

So when you are developing a portlet within Oracle JDeveloper or deploying
a portlet to an OC4J or an AS and you want to use invalidation based caching
you have to put a Web Cache between the PPE and the Application Server that
you are using. Let's take an example based on a execution of the Web Provider
inside JDeveloper -embedded OC4J-, a URL like: `http://dev-machine:port/application/providers`.

So to cache the content of the portlets that are running in
this OC4J you have to configure Web Cache using Web Cache Manager and:

1. create an Application Web Server that is the embedded OC4J
1. create a new Site Definition, this will create a new HTTP port, that you'll
use to register your provider.
1. finally you have to create a "Site to server mapping", where you
associate the OC4J to the new HTTP port.

After the bounce of Web Cache you can use the HTTP port on the Web Cache server
to access your provider, and if the portlet is correctly configured -[see this Oracle article](http://portalstudio.oracle.com/pls/ops/docs/FOLDER/COMMUNITY/PDK/JPDK/V2/DOC/WEBCACHE/INSTALLINGINVALIDATIONCACHESAMPLE.HTML) -to support invalidation based caching; its content
will be automatically cached.

Note: *this tip is not limited to Portlet but to any application that you want to develop and enhance using invalidation based caching.*
