---
title: "JavaOne and Apple WWDC 2004"
tags: [java, javaEE]
---

I have been working on the JavaOne Oracle Demo Ground where I was demonstrating OracleAS Portal 10*g*. I also attend several sessions (EJB 3.0 & CMP Persistence, J2EE 1.4 Web Services, AOP) and Thomas Kurian and James Gosling keynotes.

Also Tuesday afternoon I have been on duty on the Oracle Pod in the Apple developer conference, where I was demonstrating Oracle RDMS and JDeveloper 10g.  

*JavaOne*

Oracle had a very nice and big demo ground, with the best location: in the front of the main entrance. The main theme was Racing Cars. Oracle organized racing contest using Sony Play Station with Gran Turismo 3.

The 10 stations demonstrated the same application that recall the main theme since user can create easily a new racing team. To summarize, we have developed   a J2EE 1.3/1.4 application using ADF and POJO (Toplink) but also we integrated  JSF for the view, Web Service call and integration with business process using the new [Oracle BPEL Process Manager](http://otn.oracle.com/bpel). (Oracle announced the acquisition of Collaxa).


On the Portal station, the demo showed how easy it is to integrate existing MVC application(Struts, ADF, ...) using the Oracle JPDK. Portal teal also built a nice demonstration that shows the same portlet -business logic and view- developed using proprietary APIs (JPDK) and standard based implementation (WSRP & JSR-168). Lot of people stop by the portal pod, and I was pleased with the quality of the questions:


* Portlet Standards: Oracle provides a JSR-168/WSRP container but also a [Developer Preview of the OracleAS 10g Portal](http://otn.oracle.com/software/products/ias/preview.html) that allows you to register and executes WSRP based portlet.
* Struts, ADF, ad JSF integration: The [Oracle PDK provides a Struts integration](http://portalstudio.oracle.com/pls/ops/docs/FOLDER/COMMUNITY/PDK/ARTICLES/pdkstruts/portal-struts-wp.html) based on extension of the Struts Tags and has a specific Portlet Renderer.

* Web Services & Portal: OmniPortlet and Coded Portlets allow developer to easily integrate Web Services into Portal.. and for example it is easy to create a portlet that will kick-off a Business Process that is running inside the Oracle BPEL Process Manager.

Linda DiMichel's session about EJB 3.0 was a big one, the room was packed. EJB is taking the good path. Simplification of the objects no need to multiply the artifacts and deployment descriptors: EJB 3.0 will use Java annotations. 3.0 will use POJO -Plain Old Java Objects- and allow native SQL. This is just a very short summary of the new spec that looks very very good ! (and similar to what Toplink is doing for years)

AOP was also on of the think I wanted to see during this event. I was really pleased by the AOP Panel of Wednesday afternoon. James Gosling, Graham Hamilton, Cedric Beust and Gregor Kiczales presented and discussed AOP in general and AOP in J2EE/Java in particular. My interpretation of the whole discussion is:

Everybody thinks that AOP is interesting, and will make code cleaner; but we have a lot to do to simplify the development. Like Cedric and James said, I am "conflicted" about AOP, and I think the reason is because we see the benefits of AOP in simple case such as logging... But harder to implement cleanly when the aspects are complex such as authentication/authorization or persistence. The Java community still need to work on this to be sure that developers will develop better code; AOP will give it, just have to find the good way ! I have also watched Alex Vasseur and Jonas Boner's session about AOP and J2EE, mainly focus on [AspectWerkz](http://aspectwerkz.codehaus.org/). I really liked the paper with lot of demonstration that show simple and concrete example of AOP within J2EE container.

Like lot of us I will continue to invest into AOP and experiment it within the J2EE world. James Strachan - JSR 241 Lead- session was also a very popular one. This session introduced the Groovy Programming Language that leverage the Java Language but using a concise and object oriented scripting language. I will not detail the content of groovy here, it will be better for you to take a quick look to the [Groovy Web Site](http://groovy.codehaus.org/) knowing that you can download the language and start to develop script with it.


*Apple WWDC 2004*


I was not able to attend any session... not event Steve Job's keynote. But I worked on the Oracle demo pod Tuesday afternoon.

We had 2 dual G5 with 'old' cinema displays -hope that next year we will have the [30 inches display!](http://www.apple.com/displays/)-, these machines were used to run Oracle 10*g* database and JDeveloper, currently available to developer, you can download them from [OTN](http://otn.oracle.com/macos).

But the big news is the fact that these products will be production on Mac OS X soon:

  * Oracle 10*g* server production in fall

  * Oracle 10*g* JDeveloper production in September
