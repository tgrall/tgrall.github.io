(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[44554],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96165:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(22122),r=a(19756),o=(a(67294),a(3905)),l=["components"],i={title:"Publishing SQL and DML as Web Service",tags:["ws","oracle"]},s=void 0,c={permalink:"/blog/2005/09/27/publishing-sql-and-dml-as-web-service",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2005-09-27-publishing-sql-and-dml-as-web-service.md",source:"@site/blog/2005-09-27-publishing-sql-and-dml-as-web-service.md",title:"Publishing SQL and DML as Web Service",description:"This morning I have been talking about the Oracle Database and Web Services. If you are",date:"2005-09-27T00:00:00.000Z",formattedDate:"September 27, 2005",tags:[{label:"ws",permalink:"/blog/tags/ws"},{label:"oracle",permalink:"/blog/tags/oracle"}],readingTime:3.705,truncated:!0,authors:[],prevItem:{title:"Can I do SOA with Web Services today?",permalink:"/blog/2005/10/20/can-i-do-soa-with-web-services-today"},nextItem:{title:"Oracle Developer Day: September/October Sessions",permalink:"/blog/2005/09/20/oracle-developer-day-september-slash-october-sessions"}},p={authorsImageUrls:[]},u=[],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This morning I have been talking about the Oracle Database and Web Services. If you are\nOracle 10g developer (Database or Application Server) you\nprobably already know that you can publish PL/SQL stored procedure as\nWeb Services... One of the new feature of our OracleAS 10.1.3 release\nis the fact that now you can publish SQL and DML as well. In this post\nI am quickly explaining the basic steps to publish a query as Web\nService."),(0,o.kt)("h4",{id:"oracle-web-service-assembler"},"Oracle Web Service Assembler"),(0,o.kt)("p",null,"If you are not familiar with the Oracle Web Services tools, or if you\nare using Oracle JDeveloper to generate your services and client, I\nwould like to use the Oracle WS command line utility to do the work\nhere. The Oracle Web Services Assembler, aka WSA, allows you to\ngenerate\nclient and server using Oracle JAX-RPC implementation and extensions."),(0,o.kt)("p",null,"WSA is a Java utility that can be used as command line or with Apache\nAnt, basically it is a Jar file located in ",(0,o.kt)("span",{class:"code"},"$ORACLE_HOME/webservices/lib/wsa.jar"),".\nType the following command in a terminal to learn more about WSA."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar $ORACLE_HOME/webservices/lib/wsa.jar -help\n  Usage:\n  java -jar wsa.jar -<command> -debug -help\n  where command can be one of:\n    analyze\n    annotationAssemble\n    aqAssemble\n    assemble\n    corbaAssemble\n    dbJavaAssemble\n    ejbAssemble\n    fetchWsdl\n    genApplicationDescriptor\n    genConcreteWsdl\n    genDDs\n    genGatewayService\n    genInterface\n    genProxy\n    genQosWsdl\n    genValueType\n    genWsdl\n    help\n    jmsAssemble\n    plsqlAssemble\n    sqlAssemble\n    topDownAssemble\n    version\n")),(0,o.kt)("p",null,'As you can see with the different command options, Oracle WAS allowsyou to do "everything" Web Services related, for example creating a WS\nfrom an EJB using ',(0,o.kt)("inlineCode",{parentName:"p"},"ejbAssemble"),", from a stored procedure using ",(0,o.kt)("inlineCode",{parentName:"p"},"plsqlAssemble"),"... and I let you guess, we will be using ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlAssemble")," for this specific demo."),(0,o.kt)("p",null,"To have the detail of all the parameters of each command you can just\nenter"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar $ORACLE_HOME/webservices/lib/wsa.jar -[command] -help\n")),(0,o.kt)("h4",{id:"generating-the-web-service-from-a-sql"},"Generating the Web Service from a SQL"),(0,o.kt)("p",null,"So you can easily generate a Web Service using WSA from multiple SQL\nstatements, to do it, just use the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'java -jar wsa.jar -sqlAssemble\n    -appName my-soaql-application\n    -dataSource jdbc/MyDBServices\n    -sqlStatement "getAllEmp=select ename, sal from emp"\n    -sqlStatement "getEmpByDept=select ename, sal from emp where DEPTNO = :{dept NUMBER}"\n    -dbConnection jdbc:oracle:thin:@localhost:1521:orcl\n    -dbUser scott/tiger\n')),(0,o.kt)("p",null,"So WSA has created the different classes needed by the Web Service but\nalso packaged in a EAR file that you can now deploy to your\nOracleAS instance. The appName parameter is used to generate the\ndifferent application name and files (EAR and WAR). The sqlStatement\nused to specify the different queries you want to publish as operation."),(0,o.kt)("h4",{id:"deploying-the-application"},"Deploying the application"),(0,o.kt)("p",null,"You can either use Oracle EM Application Server Control to deploy the\napplication or using the command line utility, ",(0,o.kt)("inlineCode",{parentName:"p"},"admin.jar")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"java -jar $ORACLE_HOME/j2ee/home/admin.jar ormi://hostName[:ormiPort] oc4jadmin password -deploy -file my-soaql-application -deploymentName my-soaql-application\n\njava -jar $ORACLE_HOME/j2ee/home/admin.jar ormi://hostName[:ormiPort] oc4jadmin password  -bindWebApp my-soaql-application my-soaql-application-web default-web-site /soaql\n")),(0,o.kt)("p",null,"Also be sure that you have a datasource defined in your application server that match the parameters set when you ran the WSA command, in my case\nit will be ",(0,o.kt)("inlineCode",{parentName:"p"},"jdbc/MyDBServices")," that connection to my local database using the SCOTT schema."),(0,o.kt)("p",null,"You should now be able to access the service using the following URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://youserver:port/soaql/my-soaql-application"))),(0,o.kt)("h4",{id:"what-is-going-on"},"What is going on?"),(0,o.kt)("p",null,"When you are running the Web Service that is deployed inside OracleAS\nthe flow is quite simple:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A client is sending a request to the server using SOAP. So it uses the different typed as defined in the payload"),(0,o.kt)("li",{parentName:"ol"},"The JAX-RPC Servlet processes the request and deserializes the message"),(0,o.kt)("li",{parentName:"ol"},"The generated classes use the OC4J DataSource to connect to the database and execute the statement using JDBC"),(0,o.kt)("li",{parentName:"ol"},"The database sends the data to the classes, and servlet that creates a SOAP response")),(0,o.kt)("p",null,"When you access the test page (\nhttp://youserver:port/soaql/my-soaql-application )  or when\nyou are viewing the generated WSDL you probably notice that each query\nis published with 3 different operations. These operations return the\nsame data but using different formats:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"<","operationName",">","Bean : returns the data as serialize Javabean"),(0,o.kt)("li",{parentName:"ul"},"<","operationName",">","XML : returns the data in the SOAP body as Rowset/Row structure"),(0,o.kt)("li",{parentName:"ul"},"<","operationName",">","XMLRowSet : returns the data in the SOAP body using the WebRowset format (",(0,o.kt)("a",{parentName:"li",href:"http://jcp.org/en/jsr/detail?id=114"},"JSR-114"),")")),(0,o.kt)("h4",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this small article you have learnt how to pulish a SQL statement as Web Service. It is interesting to take a look closely to the WSA tools that give you several way of building Web Services, starting from SQL, Stored Procedure, Java, EJB, or using a contract based approach starting from the WSDL."))}d.isMDXComponent=!0}}]);