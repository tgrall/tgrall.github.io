---
title: "Oracle Industrial Telnet Server (ITS): The OracleAS Hidden Treasure.."

categories: oracle jdeveloper
---
When I was working in Oracle Consulting I was surprised to see how many customers are using character mode applications, base on Oracle Forms. Lot of applications in wharehouses, harbour, ... are using telnet terminal, usually remote/mobile using RF networks.

Moving to Java on the server was very hard for them because of the lack of support for easy character mode development based solutions.

OracleAS 10_g_/ADFprovides such support with the _Industrial Telnet Server (ITS)_.  ITS is the telnet server running in a J2EE container as a J2CA adaptor, and uses JavaServer Faces to render the user interface. The advantage of using JSF for the UI, it allows developer to leverage automatically different renderers (HTML, Mobile and telnet) without changing the application.

Here an example of the different renderer provided by Oracle ADF Faces (Instant Messaging, PDA, HTML and Telnet)
[![jsf-renderer.PNG](http://farm1.static.flickr.com/172/388762316_44c01f4260_o.png)](http://farm1.static.flickr.com/172/388762316_44c01f4260_o.png)

If you are looking for more information around Oracle ITS:

*   [Oralce ADF Mobile](http://www.oracle.com/technology/products/iaswe/adfmb.html)
*   [How To Install, Configure, and Manage the Industrial Telnet Server](http://www.oracle.com/technology/products/jdev/101/howtos/telnet/index.html)
*   [How To Install the Industrial Telnet Server on Third-Party Containers](http://www.oracle.com/technology/products/iaswe/adfmb/mbl_pits3pinstall.html)
*   [Demonstration: Using JDeveloper to create Telnet Applications](http://www.oracle.com/technology/products/iaswe/adfmb/tiki-download_file.php152_telnet.swf)(flash)
