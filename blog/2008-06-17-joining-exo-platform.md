---
title: "Joining eXo Platform"

categories: portal exo
---
I am very excited to say that this week is my first week as an employee
of eXo Platorm. Excited for many reasons.... I'll pass on the
excitement of a new job, we are all excited about that... So what are
the others reasons:

* working for open source
* be part of a visionary team/product.

#### Working for open source

Some of you know that I have been working for Oracle from 1999 to 2007,
and lately for Sogeti (Cap Gemini Group) that is one of the biggest
IBM's partner... So moving to eXo Platform an open source company is
definitively a big shift for me. Anyway, I was looking for more “agile”
working environment....

I am pleased to work for a product where users can follow on a daily
basis what is the exact status of the different features, not from
marketing slides but directly from the source trunk... But also where
any user can influence the product either by providing direct feedback
to the developers using mailing lists, tracking tools and wikis; even
more if they want to participate to the development itself.

So being open source, will avoid some kind of lock-in, but this is not
the only point: standards is another important point. eXo Platform,
since its first release in 2003, has been great about defining,
supporting and implementing standards. So eXo Portal is a great
implementation of a JSR-168 portlet container, and it is today also one
of the first portal and portlet container supporting the new JSR-286
Java Portlet API. In addition to the Java Portlet API support, it is
also possible to consume remote portlet using WSRP 1&amp;2. As you
can see eXo Portal is a great solution to implement and integrate an
enterprise portal based on standards. In addition to portal standard,
eXo is also providing a powerful ECM that is based on a Java Content
Repostory (JCR/JSR-170) implementation.

Based on the fact that eXo is open source and support industry
standard
it is a great tool to use; and it has been chosen by some other
projects for example:

* NovaForge: an innovative Forge platform that aggregates and
glue
several Open Source tools used for Software Developments such as SVN
repositories, Bug trackers, Continuous build… It used eXo WebOS and ECM
to provide a single access points to all the resources as you can see
in the following screenshot.

![](http://farm4.static.flickr.com/3087/2586150929_85d1f80644_m.jpg Novaforge and eXo WeboS )


* Bonita: is an open source workflow and BPM that is using
eXo WebOS to
expose its console, as you can see in the following screenshot

You also have other softwares that are using various part of the product from te JCR to the Portlet Container... it depends a lot of your needs...

#### Working with visionary team and product

eXo Platform is a lot more than en enterprise portal. The core architecture of eXo is based on an internal SOA built at the top of an IoC container (Pico Container). This architecture has been leveraged in many point to expose new services and assemble all the components of the eXo Platform suite.

Let's take a quick look to the components of eXo Platform:

* eXo Portal 2.0: create and publish your portal
using a simple
and powerful Ajax based user interface
* eXo ECM 2.0: manage all your digital assets that are stored
in the JCR,
and expose them using many protocols (WebDac, FTP, CIFS, ...)* eXo CS 1.0: collaborate inside and outside your enterprise
using shared
calendars, WebMail, Forums and Contact Management
* eXo WebOS 1.0: virtualize your desktop in this revolutionary user
interface, where you can expose portlets and widgets and run any Web
applications.

![](http://farm4.static.flickr.com/3262/2586521963_56fece571a_m.jpg )

In addition to these component that are available today in the eXo Ultimate distribution or as stand alone solution, you can see in the source trunk:

* LiveRoom: a Web based real time collaborative tools allowing shared whiteboard, visioconference/VoIP using once again your browser, (in fact we have been implementing  it using Flash/Flex)
*  WCM: Web CMS System that is extending the ECM to facilitate Web site publishing.
* and many other features...

One last example of the vision of the eXo Platform is the fact that all services could be exposed either as REST Services using the JSR-311(JAX-RS) or as SOAP Services using the JSR-181 (Annotations based services).

One of the feature that I am currently watching closely is the implementation and support of Open Social standard, that allows easy integration of "social-applications" with other very hot subjects for
    the “Enterprise 2.0” such as social networks, mashups and so on...

Stay tuned, and take the time to download and install eXo Platform...

As a closure, I just invite you to take a look to eXo and contact me if you have any question about the product or if you have.
