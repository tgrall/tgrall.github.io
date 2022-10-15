---
title: "Which Version I am running ?"
---

Today I was helping a customer on a deployment issue...


The first question that I have asked is:

"*Which version of OC4J are you using ?*".

And he has no idea !


So let me give you some tips to know the version of Oracle components that you are using...

<!-- truncate -->

====
OC4J

In the j2ee/home directory:

>`java -jar oc4j.jar -version`

====
JPDK

Go in the provider test page

>`http://server:port/context/providers/your-provider`

You can see the version of the in the bottom of the page. In the JPDK you can also use the `HttpCommonConstants.COMPONENT_VERSIONS` to access it programmatically.


Also if you  are looking for a version of a specific component, Oracle development often use a 'version file' into the jar file of this component.This is the case for example for:


* Portals: ptlshare.jar, wsrp-container.jar, wsrp-container.jar, pdkjava.jar, portaltools.jar
* Oracle XML: xmlparserv2.jar,oraclexsql.jar, xsqlserializers.jar
* UIX: uix2.jar, jewt4.jar
* BI Bean: bigraphbean.jar

*Update following Markus comments:*

Markus made me realized that I forgot to mention the standard way of checking the version of a product. It is also possible, and done by most of the Oracle components, to put the version number into the Manifest file of any archive. So take a look to the manifest, and if it is not available you can look for a version file into the archive.


So next time somebody ask you which version of the product you are using you will be all set !
