---
title: "Exposing a Database as a Web Service... with OracleAS and DB"

categories: ws oracle
---
I am just cross posting this entry to react to this very interesting article:

* [Exposing a Database as a Web Service](http://www.developer.com/db/article.php/3735771) a developer.com article...

####  Oracle Application Server Web Services

If you are an Oracle Application Server user, you may know that it is possible to expose database resources as Web Services using the OracleAS Web Services stack. You can for example using JAX-RPC based Web Service create service on a PL/SQL stored procedure, a SQL statement and even poste message on a queue (AQ). This is available in the Web Service Assembler (wsa) tool and also JDeveloper.

At the end when you have executed the wizard, you have a complete JavaEE application ready to be deloyed. All the JDBC calls and PL type mapping are done automatically by the wizard... very neat Take a look to the [Assembling Database Web Services](http://download.oracle.com/docs/cd/B32110_01/web.1013/b28974/devdbase.htm#BDCCBHFG) documentation.

Here the archtecture schema of OracleAS Database Web Services:

![]( http://1.bp.blogspot.com/_aoQgQ1obiyE/R-ni1lmTTxI/AAAAAAAAADc/Os4eMkzOGXM/s320/aswsv009.gif )

It is important to mention that such service can leverage the WS-* support of OracleAS and any JAX-RPC handler you want to add to the service.

####  BPEL PM and Database Resources

In addition to a pure Java developer approach it is also possible to expose database resource as Web Service using Oracle BPEL PM, yeah... it could be overloaded, but still it is possible and very easy to do. See the chapter [BPEL: Communicating with a Database](http://download.oracle.com/docs/cd/B31017_01/core.1013/b28764/bpel006.htm#CIHCIDGF)

#### Oracle RDBMS 11 NDWS

Orale RDBMS introduced a new feature that is called: Native Oracle XML DB Web Services, that allows developer to directly expose Web Services from the DB. Take a look to the chapter [Using Native Oracle XML DB Web Services](http://download.oracle.com/docs/cd/B28359_01/appdev.111/b28369/xdb_web_services.htm#ADXDB3900).

Note that in this case you do not have any WS-* support without another technical solution that could be Oracle Web Service Manager or any other solutions (such as a SOA appliance like for example IBM dataPower)

hmm I have not used that much this feature since I have left Oracle... I wonder when Oracle will provide a OS X release that will allow me to use my computer without any VM...
