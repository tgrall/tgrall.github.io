---
title: "Using HTTPS with Web Services"

categories: ws
---
*Prerequisites:*

In this article you have

* already a Web Service deployed in OC4J that is running on the default HTTP port. The WSDL and Endpoint are available. In my sample
the non secure Web Service endpoint is: `http://127.0.0.1:8888/math-service/MathServiceSoapHttpPort`

#### Add HTTPS to OC4J

##### Creating of the Keystore

The first thing to do to secure OC4J would be to create a new keystore
that will contain the different certificates. The easiest way to do
that for a Java developer is to use [SUN's keytool](http://java.sun.com/j2se/1.5.0/docs/tooldocs/solaris/keytool.html):

```
keytool -genkey -alias oracle-server -dname "CN=Tug Grall, OU=Blog O=Grall And Co L=Redwood Shores, S=CA, C=US" -keyalg RSA -keypass welcome -storepass welcome -keystore server.keystore
```

You can copy the `server.keystore` into the `$ORACLE_HOME/j2ee/home/config` to simplify the next steps.



#### Configuring OC4J

OC4J stand alone is using the notion of Web-Site to expose HTTP resources (Web Applications). The default-web-site is define is he
`$ORACLE_HOME/j2ee/home/config/default-web-site.xml`. To secure an OC4J you can follow the steps describe in the [OC4J Security guide](http://download.oracle.com/docs/cd/B25221_04/web.1013/b14429/configssl.htm) that I have summarized in the following section.

What we want to achieve for the purpose of the demonstration is to have OC4J using HTTP and HTTPS, on port 8888 and 4443 for example.

1. Copy `default-web-site.xml` to `secure-web-site.xml`
2. Edit the secure-web-site.xml:
    * Change the `web-site` tag by changing the port to `4443` and adding the element `secure="true"`
    * Add the `ssl-config` element and point this to the new created keystore.

The file looks like:

``` xml
<web-site   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:noNamespaceSchemaLocation="http://xmlns.oracle.com/oracleas/schema/web-site-10_0.xsd"
  port="4443"
  secure="true"
  display-name="OC4J 10g (10.1.3) Default Web Site"
  schema-major-version="10"
  schema-minor-version="0" >
  ...
  <ssl-config keystore="server.keystore" keystore-password="welcome" />
  ...
</web-site>
```

3. Import the new Web site in your OC4J instance by editing the `$ORACLE_HOME/j2ee/home/server.xml`
file. You need to add or replace the web-site tag. In my case I want to
add the secure web site to my instance so the configuration looks like:

``` xml
...
<web-site default="true" path="./default-web-site.xml" />
<web-site path="./secure-web-site.xml" />
...
```

Since we have copied the file from the default-web-site, all applications are available using HTTP and HTTPS

#### Start OC4J and test the HTTPS port

Start OC4J using the standard Java command or shell script, I am adding the Java Network debug flag that would help you to see what is
happening at the SSL level.

```
java -Djavax.net.debug=ssl -jar oc4j.jar
```

You should be able to access the service WSDL using the HTTPS port for example in my case:

* `https://127.0.0.1:4443/math-service/MathServiceSoapHttpPort?WSDL`

### Consuming the Service using HTTPS

#### Generate and configure a client Keystore

Event if this is possible to use the same keystore for the server and the client, I will guide you in the steps to create a client
certificate and import the certificate from the existing -server- one.

Here the command *to create* a new keystore:

```
keytool -genkey -alias oracle-client -dname "CN=John Doe, OU=Blog O=MyDummyClient, S=CA, C=US" -keyalg RSA -keypass welcomeClient -storepass welcomeClient -keystore client.keystore
```

The next step is *to export* the certificate from the server keystore to be able to import it in the client:

```
keytool -keystore server.keystore -export -alias oracle-server -file server.cer
```

You can now *import the cerificate* in the client keystore:

```
keytool -keystore client.keystore -import -file server.cer
```

### Generate the proxy

You have now the client certificate so you can use the Oracle Web
Service Assembler to generate the proxy. The only specific thing you
have to do is to specify which key store to use when running the tool.
The command to use when generating the proxy is:

```
java -Djavax.net.ssl.trustStore=/Users/tgrall/ssl/client.keystore
    -Djavax.net.ssl.keyStore=/Users/tgrall/ssl/client.keystore
    -Djavax.net.ssl.trustStorePassword=welcomeClient
    -Djavax.net.ssl.keyStorePassword=welcomeClient
    -jar $ORACLE_HOME/webservices/lib/wsa.jar
    -genProxy
    -wsdl https://127.0.0.1:4443/math-service/MathServiceSoapHttpPort?WSDL

```

### Calling the Service using secure endpoint

Configure the Java Environment to use the client store is made using the following System properties:

*   javax.net.ssl.trustStore
*   javax.net.ssl.keyStore
*   javax.net.ssl.trustStorePassword
*   javax.net.ssl.keyStorePassword

This could be done using different approach, property file, -D command
line parameter or programmatically. To simply the example I am using
the programmatic approach, the following code is part of the main
method of the Client class:

``` java
...
System.setProperty("javax.net.ssl.trustStore", "/Users/tgrall/ssl/client.keystore");
System.setProperty("javax.net.ssl.keyStore", "/Users/tgrall/ssl/client.keystore");
System.setProperty("javax.net.ssl.trustStorePassword", "welcomeClient");
System.setProperty("javax.net.ssl.keyStorePassword", "welcomeClient");
...
// Adding Debug information
System.setProperty("javax.net.debug", "ssl");
...
```

It is possible to change the Endpoint dynamically in the Proxy using the `setEndpoint` method.

``` java
...
democlient.proxy.MathServiceSoapHttpPortClient myPort = new democlient.proxy.MathServiceSoapHttpPortClient();
...
String ep = "https://127.0.0.1:4443/math-service/MathServiceSoapHttpPort";
myPort.setEndpoint(ep);
System.out.println("Result of the operation is "+ myPort.add(2,2));
...
```

You should now be able to run the client and call the service using HTTPS. This would look like:

{% img http://static.flickr.com/86/268580831_c24ec07d89_o.png )
