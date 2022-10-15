---
title: "Publishing SQL and DML as Web Service"
tags: [ws ,oracle]
---
This morning I have been talking about the Oracle Database and Web Services. If you are
Oracle 10g developer (Database or Application Server) you
probably already know that you can publish PL/SQL stored procedure as
Web Services... One of the new feature of our OracleAS 10.1.3 release
is the fact that now you can publish SQL and DML as well. In this post
I am quickly explaining the basic steps to publish a query as Web
Service.

<!-- truncate -->

#### Oracle Web Service Assembler

If you are not familiar with the Oracle Web Services tools, or if you
are using Oracle JDeveloper to generate your services and client, I
would like to use the Oracle WS command line utility to do the work
here. The Oracle Web Services Assembler, aka WSA, allows you to
generate
client and server using Oracle JAX-RPC implementation and extensions.

WSA is a Java utility that can be used as command line or with Apache
Ant, basically it is a Jar file located in <span
class="code">$ORACLE_HOME/webservices/lib/wsa.jar</span>.
Type the following command in a terminal to learn more about WSA.

```
java -jar $ORACLE_HOME/webservices/lib/wsa.jar -help
  Usage:
  java -jar wsa.jar -<command> -debug -help
  where command can be one of:
    analyze
    annotationAssemble
    aqAssemble
    assemble
    corbaAssemble
    dbJavaAssemble
    ejbAssemble
    fetchWsdl
    genApplicationDescriptor
    genConcreteWsdl
    genDDs
    genGatewayService
    genInterface
    genProxy
    genQosWsdl
    genValueType
    genWsdl
    help
    jmsAssemble
    plsqlAssemble
    sqlAssemble
    topDownAssemble
    version
```


As you can see with the different command options, Oracle WAS allowsyou to do "everything" Web Services related, for example creating a WS
from an EJB using `ejbAssemble`, from a stored procedure using `plsqlAssemble`... and I let you guess, we will be using `sqlAssemble` for this specific demo.

To have the detail of all the parameters of each command you can just
enter

```
java -jar $ORACLE_HOME/webservices/lib/wsa.jar -[command] -help
```

#### Generating the Web Service from a SQL

So you can easily generate a Web Service using WSA from multiple SQL
statements, to do it, just use the following command:

```
java -jar wsa.jar -sqlAssemble
    -appName my-soaql-application
    -dataSource jdbc/MyDBServices
    -sqlStatement "getAllEmp=select ename, sal from emp"
    -sqlStatement "getEmpByDept=select ename, sal from emp where DEPTNO = :{dept NUMBER}"
    -dbConnection jdbc:oracle:thin:@localhost:1521:orcl
    -dbUser scott/tiger
```

So WSA has created the different classes needed by the Web Service but
also packaged in a EAR file that you can now deploy to your
OracleAS instance. The appName parameter is used to generate the
different application name and files (EAR and WAR). The sqlStatement
used to specify the different queries you want to publish as operation.

#### Deploying the application

You can either use Oracle EM Application Server Control to deploy the
application or using the command line utility, `admin.jar`

```
java -jar $ORACLE_HOME/j2ee/home/admin.jar ormi://hostName[:ormiPort] oc4jadmin password -deploy -file my-soaql-application -deploymentName my-soaql-application

java -jar $ORACLE_HOME/j2ee/home/admin.jar ormi://hostName[:ormiPort] oc4jadmin password  -bindWebApp my-soaql-application my-soaql-application-web default-web-site /soaql
```

Also be sure that you have a datasource defined in your application server that match the parameters set when you ran the WSA command, in my case
it will be `jdbc/MyDBServices` that connection to my local database using the SCOTT schema.

You should now be able to access the service using the following URL:

* `http://youserver:port/soaql/my-soaql-application`

#### What is going on?

When you are running the Web Service that is deployed inside OracleAS
the flow is quite simple:

1.  A client is sending a request to the server using SOAP. So it uses the different typed as defined in the payload
2.  The JAX-RPC Servlet processes the request and deserializes the message
3.  The generated classes use the OC4J DataSource to connect to the database and execute the statement using JDBC
4.  The database sends the data to the classes, and servlet that creates a SOAP response

When you access the test page (
  http://youserver:port/soaql/my-soaql-application )  or when
  you are viewing the generated WSDL you probably notice that each query
  is published with 3 different operations. These operations return the
  same data but using different formats:

  * &lt;operationName&gt;Bean : returns the data as serialize Javabean
  * &lt;operationName&gt;XML : returns the data in the SOAP body as Rowset/Row structure
  * &lt;operationName&gt;XMLRowSet : returns the data in the SOAP body using the WebRowset format ([JSR-114](http://jcp.org/en/jsr/detail?id=114))

#### Summary

In this small article you have learnt how to pulish a SQL statement as Web Service. It is interesting to take a look closely to the WSA tools that give you several way of building Web Services, starting from SQL, Stored Procedure, Java, EJB, or using a contract based approach starting from the WSDL.
