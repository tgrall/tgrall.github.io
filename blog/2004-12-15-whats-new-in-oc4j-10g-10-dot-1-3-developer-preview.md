---
title: "What's new in OC4J 10g (10.1.3) Developer Preview"

---
###Application Server Control

Management and monitoring support is provided by a new version of Enterprise Manager Application Server Control which is included directly within the OC4J 10g (10.1.3) Developer Preview 3 release.

<!-- truncate -->

Application Server Control is is fully JMX based and provides management and monitoring capabilities for this J2EE 1.4 compliant version of OC4J. It features a JSR-88 based deployment client with a powerful deployment plan editor, as well as a generic
JMX MBean browser that is JSR-77 aware. Application (user-defined) MBeans are also supported to the same extent as system MBeans.

Other new areas of support include Web services management, TopLink session management, a JNDI browser, among many other new features.

* Provides a generic JMX MBean browser that gives users a full view into all system MBeans. The new MBean browser provides features such as:
  * Hierarchical view of all system MBeans based on JSR-77
naming hierarchy
  * Comprehensive search capabilities across MBean, attribute
and operation names, as well as support for searches using
the JMX query syntax
  * Ability to view all MBean properties, such as attributes,
operations, statistics, notifications
  * Ability to invoke operations. Users will be able to invoke operations that require complex types as input parameters based on String based constructors for those complex types where applicable
  * Ability to change attribute values where applicable
  * Ability to subscribe to JMX notifications
* Application (user-defined) MBeans are supported to the same extent as system MBeans (see above) and are accessible via a link from the individual application home page
* JMX Notifications that the user chooses to subscribe to will be received and listed on the Received Notifications page
* Deployment follows JSR-88 and provides the following new features:
  * A generic and powerful JSR-88 deployment plan editor.
  * Comprehensive deployment progress messages during application deployments.
* New Web service management capabilities providing features such as:
  * Enable/Disable
  * Performance
  * Logging
  * Auditing
  * Security
  * Reliability
* TopLink session monitoring and management support
* Improved log viewing and searching capabilities
* A JNDI browser let users view the overall JNDI namespace, as well as application context namespaces
* Many other new features in areas such as JMS, JTA, JDBC, etc.


###Configuration, Administration and Deployment

* Provides full support for JMX 1.2 and JMX Remote Access API (JSR-160)
* Implements Java2 Management Specification (JSR-77) to provide JMX MBean controls for configuration and monitoring of the server and deployed applications
* Implements Java2 Deployment API (JSR-88) to support standard deployment operations,uses a separate deployment plan to capture OC4J specific deployment details in a non intrusive manner. Deployment plans can be presented to server at deployment time to provide server with OC4J configuration set
* Fine grained security controls to facilitate administration at the system and application only levels
* A set of Ant tasks which utilize JSR-88 are provided to support deployment related operations from Ant scripts
* Flexible classloading implementation which allows for the deployment of shared-libraries which can be consumed by deployed applications. Using the shared-library mechanism, applications have complete control over which class libraries are loaded, enabling the use of different XML parsers and Oracle JDBC driver versions than what are provided by default by OC4J

###EJB

* Toplink is now fully integrated as the default persistence manager for performing Container Managed Persistence (CMP) with Entity EJBs
* Support for incremental EJB deployment, replacing individual class files instead of an
entire EJB module

###JMS

* JMS 1.1 compatible with OJMS and OracleAS JMS* A generic JMS JCA 1.5 Resource Adapter
* Complete integration of third party JMS providers into OC4J
* JMX based dynamic configuration, management and monitoring of JMS infrastructure

### Web Services

* Ant tasks for developing Web services including:
  * assemble - generate a Web service from a Java class
  * topdownAssemble - generate a Web service from a WSDL
  * annotationAssemble - generate a Web service from JSR 181 annotations
  * ejbAssemble - generate a Web service from an EJB 2.1
  * jmsAssemble - generate a Web service from a JMS queue or topic
  * plsqlAssemble - generate a Web service from a PLSQL package
  * sqlAssemble - generate a Web service from a sql statement
  * dbJavaAssemble - generate a Web service from a Java class located in the Oracle Database
  * genGatewayService - generate a gateway service for third party Web service WSDLs
  * genProxy - generate a client proxy from a WSDL to invoke a Web service

Information on these tasks and more is available in the OC4J 10.1.3
Developer Preview 3 [Documentation Library](http://download.oracle.com/otn/java/oc4j/1013/doc/).

* An extended command line WebServicesAssembler tool providing the same functionality as the Ant tasks
* A Web services management framework enabling users to SOAP auditing, content based logging, security and reliability. The framework enables administrators to enable and disable services as well as enable and disable management
characteristics applied to those services. This framework is used by Application Server Control to provide Web services management configurability to system administrators and by JDeveloper to enable Web services management configuration during development
* Support for the OASIS standard WS-Reliability
* Support for SOAP 1.1 and SOAP 1.2
* Support for a SOAP over JMS binding in addition to the existing SOAP over HTTP binding
* Support for the OASIS standard WS-Security including authentication tokens, XML encryption and digital signatures. More information is available in the Security Release Notes.
* This release of OC4J has been tested both as a consumer of OracleAS BPEL Process Manager business
process WSDLs as well as producer of Web services that can be used in OracleAS BPEL Process Manager BPEL processes.

###JCA

* Compliant to JCA 1.5, also supports JCA 1.0 for backwards compatibility
* Tested with Oracle and third-party Adapters
* Management - JMX support (both standard and extensions) and Application Server Control for deployment, configuration, administration and metrics monitoring operations.
* Persistence for JCA using Object-XML mapping in the Toplink component
* Deployment enhancements:deployment for oc4j-ra.xml
* 2PC recovery support including JCA

###Security -- JAAS/JAZN

* Implementation of Web Services security (OASIS WSS 1.0 specification)
* Ability to integrate Oracle JAZN with 3rd party LDAP providers such as Sun One or Microsoft Active Directory. Please refer to Oracle Application Server Containers for J2EE documentation for detailed instructions.

###Job Scheduler

The OracleAS Job Scheduler provides asynchronous scheduling services
for J2EE applications with the following features:

* API for submitting and controlling jobs
* Temporal- and trigger-based job execution
* Event listeners for monitoring job execution and status
* iCalendar recurrence expression support
* API-level JTA support for job submission and control
* Automatic retry of failed jobs
* Job blackout windows
* Configurable persistence for job definitions and configuration
* JMX monitoring and administration

For the latest documentation and sample applications see the Scheduler How-To's on OTN.

###Application Clustering

* Application clustering can be enabled on a specific application basis, enabling an OC4J instance to concurrently host both clustered and non clustered applications.
* Support has been added for additional replication protocols. The protocols provided are multicast and peer-to-peer for in memory based state replication. The peer replication protocol supports direct TCP based connections between the members of a cluster group. A database replication protocol is also provided which stores and retrieved
session state to and from a specified database instance.
* The policies which determine when replication takes place have been extended in this release. Support is now provided
for onCall, onChange, and onShutdown events. Web applications now default to using the onCall policy which queues up changes made to the HttpSession object within a method call and then send the change set when the method completes.
