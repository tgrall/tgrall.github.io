---
title: "Working on a large XML or SOA project: think about 'separation of concerns'"

categories: soa
---
With XML and SOA becoming mainstream in the enterprise XML operation such as Schema validations, XSL transformations are now very common. These specific operations are CPU intensive and could become a performance bottleneck when directly applied on the middleware. It could be even worst now when using SOAP based Web Services and their related WS-* standards. For example with WS-Security, XML encryption and signature is now more and more used in SOA based applications.

This is why many enterprise architects are bow looking for solutions to improve performances of XML centric applications.

One of the think we learn when developing application, and that Aspect Oriented Programming has highlighted is the concept of “separation of concerns”. It is key to keep that in mind also in global architecture in our case by separating the XML processing from the business logic. Hopefully it is most of the time done directly by the various Web Services framework you are using, you do not code the SOAP request/response, it is hidden by the Web Services framework.

However, in the current application server, the full XML treatment is made directly in the container, for example the XML Encryption is made in the same container that the place where the pure business logic is executed. So let’s find a solution to extract the most intensive XML processing into another part of the system.

Vendors have now in their catalog appliances that could do the job. The same way that today we are using SSL accelerators to deal with SSL encryption/decryption, we can put XML appliance to deal with the intensive CPU processing operation: XML validations, transformation, Ws-Security enforcing point,...

<!-- truncate -->

### Architecture Overview

The overall architecture could be represented using the following schema :

![]( http://3.bp.blogspot.com/_aoQgQ1obiyE/R11pWKMLwEI/AAAAAAAAACU/Bvo623h0JCA/s400/soa-appliance.png )

The role of the XML/SOA Appliance varies a lot depending of your project:

* *Simple XML firewall* to check the validity of the XML/SOAP messages
* *Web Services access control*: lookup enterprise directory to check authentication and authorization. This could be based on the WS-Security standards and its various tokens (username, SAML, ...)
* *Content generation and transformation*: the appliance can be used to serve various devices for example WAP cell phone or simple HTML Web Client. the XSL transformation is done in a very efficient way in the appliance directly.
* *Services Virtualization* : it is possible to route the different messages to various end point depending of simple rules. (business or IT system rules)

As you can see from an architecture point of view, XML appliances are very interesting to distribute the heavy processing of XML to some specific hardware. I have noticed that sometimes developers/architects hesitate to put another piece of hardware/software in their design, but I do think that in this specific case it is probably a good move.

Separating the concern is quite easy and very clean when dealing with XML processing, but also it will allow the overall architecture to be managed in a better way. This kind of appliance will allow administrators to centralize the management of policies, and transformations. But also a side effect of this is the simple fact that when dealing with Web Services, you can easily add WS-* support to many stacks that do not support "them".

### XML/SOA Appliances Offering

I have said earlier that vendors are offering such products, here some of the product that I have met or pushed:

*   [IBM DataPower](http://www.ibm.com/software/integration/datapower/)
*   [Bee Ware i-Sentry](http://www.bee-ware.net/en/product/i-sentry/)
*   [Vordel](http://www.vordel.com/products/)
*   [Layer 7 XML Appliances](http://www.layer7tech.com/)

###What's next?

Some of you would probably raise the fact that the application server, especially when dealing with Web Services, must parse the XML/SOAP request even if this has been done by the appliance. Yes it is true, but I am sure that in a next future the vendors of such solution would optimize it by providing for example support for binary XML, or any other solution that will improve even more the performance of the overall IT in complex enterprise architecture. But for this application server must support binary XML first to avoid proprietary approaches.

Another point of view that I have not talk about is the possible support of such appliance around Web 2.0/Ajax optimization. I have not yet dive into this, but I am sure we can do very interesting things too.

Finally if you have experiences with any XML/SOA appliance feel free to post a comment about it, it will help the readers to see the interest (or not) around this topic.
