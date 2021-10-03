---
title: "JavaEE 5 Features of OracleAS 10gR3"

categories: javaee oracle oc4j
---
[OracleAS 10g R3 (10.1.3.x)](http://otn.oracle.com/products/oc4j) is a certified J2EE 1.4 container, but OracleAS provides already support to some of the features of the Java Enterprise Edition 5: JavaEE 5. One of the key driver of the new EE version was simplification of the development and deployment applications. Here is the list of the JavaEE 5 features that are supported in OracleAS 10gR3 that will simplify the development of applications *(in comparison to a standard J2EE 1.x development)*:

*   Java Persistence API (JPA) and EJB 3.0 ([documention](http://download-uk.oracle.com/docs/cd/B32110_01/web.1013/b28221/toc.htm))

*   Support of shared library at the EAR level (`&lt;library-directory&gt; / applib`). ([documentation](http://download.oracle.com/docs/cd/B31017_01/web.1013/b28952/classload.htm#BABGAABD)). This comes in addition to the OracleAS 10gR3 classloader framework that allows administrators to create, and version shared libraries that can be used into applications by referencing them in the deployment plan.

*   Annotations Based Web Services (JSR181)  that could be used for Java classes and EJB3 Session Beans ([documentation](http://download.oracle.com/docs/cd/B32110_01/web.1013/b28974/devannotation.htm#CHDFJBEH))

*   Referencing resources using annotations in the Web container: `@EJB, @Resource, @Resources, @PostConstruct, @PreDestroy, @PersistenceUnit, @PersistenceContext, @WebServiceRef, @DeclaresRoles, @RunAs`  ([documentation](http://download.oracle.com/docs/cd/B32110_01/web.1013/b28959/annotations.htm#sthref248))
Hope that this small summary will give you the opportunity to test some of the features of OracleAS 10g.
