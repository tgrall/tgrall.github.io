---
title: "Web Services and Files Exchange"

categories: ws soq
---

SOAP based Web Services are now very common in the enterprise architecture, and quite often, applications that consume or publish services would need to send binary content such as images, PDF or Word documents (or anything you have in mind...). The SOAP and XML provide different way to achieve this. So what are the challenges around binary data exchange using SOAP based Web Services:

* The main goal of Web Services is **interoperability**; so when you are offering a service, you need to be careful about the technical choice you are making. SOAP has been one great success in term of interoperability. I am aware that REST is also a very good fit for that but since I talk about SOAP and later WS-* standards, I do not want to talk about REST more in this post, the only thing that you can put in your mind is before choosing to implement SOAP based Web Services, ask the following question to yourself: "do I really need SOAP services or REST would be enough?"... That said let's continue on SOAP and binary content exchange. When talking about binary content, the interoperability comes with some trade off around for example performance/message sized or impact on developer. This will be discussed later, but always keep in mind that interoperability is the key point of Web Services. If this is not the case on your project, that means you probably do not need to use SOAP that has an important overhead in general.
* **Performance** and **Scalability** is also quite important when you are building a service based application. Especially that often you cannot predict exactly how much a service will be used. We have to keep in mind that often services are build to be reusable, it is one of the basic best practices of development, so if the service is really "reused" it is important to keep it running with acceptable performances. This is why when talking about binary content, with SOAP it is important to talk about the impact of it on the size of the message and the processing cost.
* When using SOAP **Composability** is also quite important. In the context of binary content exchange with XML/SOAP it is important to support composability of the WS-* standard, and this in a performant manner. An example would be that a services that is  sing WS-Security to sign part of the messages should be able to sign the PDF document using the same standard.
* **Impact on development**: it is interesting also when choosing the way binary content should be exchanged with SOAP, to see how much impact it has on the development itself. Does a developer must import specific API to be sure that the binary content is properly sent/consumed by the server or client. Note: I will talk about Java here, and particularly about JAX-WS/JAX-RPC since it is the stacks that I know the much, but the remarks would be the same on all technologies.Let's now dive into the different options that are offered to a developer/architect to exchange document using SOAP:

* XML Base64 encoding
* SOAP With Attachment (SwA) using MIME (Multipurpose Internet Mail Extensions)
* ~~SOAP With Attachment using DIME (Direct Internet Message Encapsulation)~~
* Message Transmission Optimization Mechanism (MTOM)

First of all, I will not talk in detail about the 3rd point around SOAP with Attachment with DIME, for a simple reason: this approach has been pushed by Microsoft around 2003/2004 and it is now deprecated in favor of MTOM.

### Base64 Encoding

Base64 is part of the core XML capabilities, and when using it to exchange binary content in a SOAP message it has some very good advantages:

* Since it is part of XML itself, it has a **great interoperability**, I can say that all stacks will be able to consume or send messaged that contains Base64 data.
* For the same reason it **does not have any impact on development**, most of the Java stacks will automatically use base64 encoding when byte[] paramters will be present.
* Always because of the fact that is it 100% XML based, the **composability** with other XML/WS-* standard **is very good**.
* So far everything looks great for this approach, but the trade off is the following:
Base64 encoding **is not efficient**, since "lot of" CPU will be used to encode and decode the binary content. In addition the size of the encoded data would be around 30% bigger than the binary content itself. (It can still be used for small dataset)

### SOAP with Attachment (SwA)

The SOAP with Attachment specification is the first effort of the Web Services industry to solve the problem of binary content with SOAP. The idea is to  In addition to the W3C Note, the WS-Interoperability organization, has extend this recommendation to create a basic attachment profile to enforce the interoperability of it, using the SOAP with Attachment Reference (swaRef).

* The good part of SwA and is the fact that it has been noted by the W3C but also adopted by the WS-I organization. But in fact the<span style="font-weight: bold;"> interoperability is not that great</span>, mainly because none of the Microsoft Web Services solution support SwA. It is true that most of the Java stacks, starting with the standard JAX-RPC/JAX-WS is supporting SwA and swaRef but it is not enough to call it a good interoperability.
* The reason why Microsoft refused to implement it, and why it is only a W3C note (and not a recommendation) it is because  **SOAP with Attachment has poor composability**. The reason why it is hard to use WS-* standard with SwA, it is because it breaks some part of the model by ignoring the SOAP/XML processing and just put the document in the MIME header, and a simple reference to it into the SOAP message.
* **SOAP with Attachment is efficient*, because of the previous point. The SOAP stack does not really deal with the content and just stream it into the MIME header.
* When it is used with JAX-RPC and JAX-WS, **has an impact on the developer**, that must use specific Java API to build it service and put specific data types in the WSDL. The impact on development is not large, but still developper has to think about providing the good method signature or WSDL entry to enforce the use of SwA/swaRef in its service. Where I do believe most developers would expect this to be transparent.

### Message Transmission Optimization Mechanism (MTOM)

The last mechanism is also based on MIME on the wire to exchange the binary content, but the way the message (SOAP+MIME) is build is totally different from the previous SwA approach. MTOM has been based on the "experience" of the others mechanisms, to be able to support composability without impacting the performance and the development.

* **Interoperability is virtually great**. It is great because it has been pushed by major vendors such as IBM, Microsoft, BEA, Oracle and it is a [W3C recommendation](http://www.w3.org/TR/soap12-mtom/), so interoperability should be good. I put a "virtually", because to be interoperable the various Web Services stack must implement it, and it is not the case yet. Today, most of the latest stacks are supporting MTOM so it should not be an issue if you are starting a project.
* **Composability is perfect**, since MTOM does use the SOAP envelop but it provides an automatic and transparent optimization to put the binary content  on the MIME header. During the serialization of the message, the SOAP engine is working with the content with a temporary base64 representation of the content allowing all the WS-* operation needed, for example an XML signature, but without the overhead of dealing with base64 over the wire.
* **MTOM appears like the most efficient** way of dealing with large document and SOAP.
* Because MTOM is using the same approach than the pure XML base64 process, **it does not have any impact on development**. In fact this the the Web Service stack that choose to use base64 (embedding the document) or MTOM over the wire. And this could be done in conjunction with a WS-Policy. As you can see in the [WS-MTOMPolicy](http://www.w3.org/Submission/WS-MTOMPolicy/) this is not under the control of the developer but more under the control of the administrator and then the applications to choose or not to use MTOM.

### But... Which one I should use?

Based on the different points described earlier is looks like **MTOM is the way to go**; even if this is true it cannot be summarized to this. First of all MTOM is not supported by all the stacks, so if you cannot control the consumers of your services and cannot impose a modern stack, MTOM may not be the best approach. For me, the second on the list is the Base64 approach, because of high interoperability but it is important to remember that has an impact on performance/processing. I personnally would not push SwA because of its non support in the Microsoft world... As you know the world is not yet 100% Java based ;).

Let's take a look on which stacks are supporting MTOM today:

* JAX-WS reference implementation (and Metro)
* IBM Websphere 6.x with SOA Feature Pack
* BEA Weblogic 10* OracleAS 10gR3 (10.1.3.1) JAX-RPC and FWM 11 preview (JAX-RPC and JAX-WS)
* Axis2
* XFire
* JBossWSYou can find more information on these comparison matrices : [Apache WS Stack Comparison](http://wiki.apache.org/ws/StackComparison) and [Xfire Comparison Matrix](http://xfire.codehaus.org/Stack+Comparison). (these two are probably very interesting to keep... unfortunately they do not contains any MSFT data. I had one in the past, but cannot find it... if you have such matrix feel free to post it in comment.)
