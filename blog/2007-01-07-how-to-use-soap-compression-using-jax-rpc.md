---
title: "How to use SOAP Compression using JAX-RPC"

categories:
---
HTTP compression has improved a lot the download time of content from
servers. In the context of Web Service it could be very interesting to
also use HTTP compression to improve the network traffic. Firs, I am
explaining how to compress a SOAP response when you have a Web Service
running in Oracle Containers for J2EE (OC4J) using a generic servlet
filter. I have to give credit to [http://www.thomas-bayer.com/](http://www.thomas-bayer.com/)
since he has created the Filter and documented how to do such thing
using Axis.&nbsp;

So you can take a look to the following article for more details, you
can read the 2 following article, or jump to the next paragraph that
explains how to configure your JAX-RPC based service to send compressed
HTTP response.

*   [How to Use SOAP Compression with Apache Axis](http://www.thomas-bayer.com/soap-compression-howto.htm)
*   [2Way HTTP Compression Servlet Filter](http://www.thomas-bayer.com/gzip-compression-filter.htm)

In this sample I am showing how to compress the SOAP response
using a servlet filter, it is also possible to use some other Oracle
infrastructure element to achieve that such as Oracle HTTP
Server/Apache, or Oracle Webcache.

#### 1- Install the compression filter library in your application

Download the compression filter library [2wayfilter-1.2.jar](http://www.thomas-bayer.com/resources/gzip-compression-filter/2wayfilter-1.2.jar)
and copy it into the Web application's` WEB-INF/lib` folder

#### 2- Configure your application to use the filter

The configuration of a servlet filter is done using
the web.xml where you reference which servlet or URL will be using the
filter. As you may knowin JAX-RPC, the HTTP endpoint of a service are
exposed as servlet and defined in the web.xml. You can choose to
compress all the endpoint/URL or create a new servlet mapping, that
will become a new SOAP endpoint and only compress this one. If you take
the option of creating a new endpoint keep in mind that it will not be
added to the WSDL automatically, so the client application will have to
point explicitly to the compressed endpoint URL to take benefits of it.

``` xml
<web-app xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd"
  version="2.4">
  <servlet>
    <description>Web Service CustomerServiceSoapHttpPort</description>
    <display-name>Web Service CustomerServiceSoapHttpPort</display-name>
    <servlet-name>CustomerServiceSoapHttpPort</servlet-name>
    <servlet-class>demo.oracle.CustomerServiceImpl</servlet-class>
    <load-on-startup>1</load-on-startup>
  </servlet>
  <servlet-mapping>
    <servlet-name>CustomerServiceSoapHttpPort</servlet-name>
    <url-pattern>CustomerServiceSoapHttpPort</url-pattern>
  </servlet-mapping>

  <!-- New servlet mapping to handle compressed SOAP Messages -->
  <servlet-mapping>
    <servlet-name>CustomerServiceSoapHttpPort</servlet-name>
    <url-pattern>CompressedCustomerServiceSoapHttpPort</url-pattern>
  </servlet-mapping>


  <!-- Filter definition with mapping on the compressed endpoint -->
  <filter>
    <filter-name>2WayFilter</filter-name>
    <filter-class>com.osmoticweb.gzipfilter.GZIP2WayFilter</filter-class>
  </filter>
  <filter-mapping>
    <filter-name>2WayFilter</filter-name>
    <url-pattern>CompressedCustomerServiceSoapHttpPort</url-pattern>
  </filter-mapping>

</web-app>
```

You can now package and deploy your application.

#### 3- Create & Invoke the service

In this basic configuration you have only changed the servlet that is
the HTTP endpoint of your service. So the compressed endpoint is not
present in the WSDL, but you can use any of the URL to create your
proxy.

When you have created your proxy, if you want to access the endpoint
that will return the compressed response you must be sure that you are
calling the correct endpoint. You can set the endpoint using the `setEndpoint` method, of your Web
Service client.

This is it!

I will in a next post explain how you can using the Oracle Web Service
client API send a compressed request that will have to be uncompressed
on the server using the same filter.
