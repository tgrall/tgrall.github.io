---
title: "Oracle donates Toplink to Eclipse"

categories: eclipse jpa toplink
---
Oracle has announced yesterday during  [EclipseCon](http://www.eclipsecon.org/) in Santa Clara (California) that it *open-sources* Oracle Toplink as part of the Eclipse Project.

The idea is to open source all the features of Toplink (ORM/JPA, OXM/JAXB, and EIS support), but also features that are currently under development and will be part of the Eclipse project:

*   Service Data Objects (SDO) implementation and SDO Data Access Service (DAS) that leverages JPA for use with SDO.*   XR (XML-Relational) that provides a completely metadata driven approach to obtaining relational data as XML.
*   DBWS which exposes XR as a web service. With DBWS, you can easily build web services that access relational data without any programming.

One part will be kept by Oracle, this is the "glue" code that is used for the integration with OracleAS that is probably not useful for anybody but Oracle.
For details check out the [press release](http://www.oracle.com/corporate/press/2007_mar/OpenSource-TopLink.html) and the [FAQ](http://www.oracle.com/technology/tech/eclipse/pdf/eclipselink-faq.pdf).

If you are at EclipseCon do not hesitate to visit the Oracle booth to learn more about this great news for the Java developers.
