(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[41450],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),m=s(n),h=o,g=m["".concat(p,".").concat(h)]||m[h]||u[h]||l;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,i[1]=r;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77646:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return h}});var a=n(22122),o=n(19756),l=(n(67294),n(3905)),i=["components"],r={title:"Create and Deploy a JAX-RS REST service on Google App Engine",categories:"java gae google cloud rest"},p=void 0,s={permalink:"/blog/2010/02/28/create-and-deploy-a-jax-rs-rest-service-on-google-app-engine",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2010-02-28-create-and-deploy-a-jax-rs-rest-service-on-google-app-engine.md",source:"@site/blog/2010-02-28-create-and-deploy-a-jax-rs-rest-service-on-google-app-engine.md",title:"Create and Deploy a JAX-RS REST service on Google App Engine",description:"In this article you will learn how to create a REST service using JAX-RS reference implementation (Jersey) and deploy it on Google AppEngine.",date:"2010-02-28T00:00:00.000Z",formattedDate:"February 28, 2010",tags:[],readingTime:8.96,truncated:!0,authors:[],prevItem:{title:"What Apple\u2019s Announcement Really Means to Java Developers",permalink:"/blog/2010/10/29/what-apples-announcement-really-means-to-java-developers"},nextItem:{title:"VirtualBox: How to clone a virtual machine?",permalink:"/blog/2010/02/24/virtualbox-how-to-clone-a-virtual-machine"}},c={authorsImageUrls:[]},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Creating new application",id:"creating-new-application",children:[]},{value:"Configuring the REST support in the application",id:"configuring-the-rest-support-in-the-application",children:[]},{value:"Creating a simple REST Service to test the environment",id:"creating-a-simple-rest-service-to-test-the-environment",children:[]},{value:"Ading XML and JSON support to the service",id:"ading-xml-and-json-support-to-the-service",children:[]},{value:"Test the service",id:"test-the-service",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"In this article you will learn how to create a REST service using JAX-RS reference implementation (Jersey) and deploy it on Google AppEngine."),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"For this tutorial you will need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a Google AppEngine account : ",(0,l.kt)("a",{parentName:"li",href:"http://code.google.com/appengine/"},"http://code.google.com/appengine/")),(0,l.kt)("li",{parentName:"ul"},"Eclipse Galileo (3.5.x)"),(0,l.kt)("li",{parentName:"ul"},"Google App Engine SDK for Java")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Install the Google Plugin for Eclipse as documented ",(0,l.kt)("a",{parentName:"li",href:"http://code.google.com/eclipse/docs/install-eclipse-3.5.html"},"here")," (Check that you are using the release 1.3.1 of the GAE Java SDK, if not download it and configure the plugin to use it)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"it is also useful to have the AppEngine documentation locally, you can download it from ",(0,l.kt)("a",{parentName:"li",href:"http://code.google.com/appengine/downloads.html#Download_the_Google_App_Engine_Documentation"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},"JAX-RS Reference Implementation, be sure you take the\nJersey 1.1.5 release. You can download it from ",(0,l.kt)("a",{parentName:"li",href:"https://jersey.dev.java.net/"},"here"),"."),(0,l.kt)("li",{parentName:"ul"},"Unzip the file in a directory that we will call ",(0,l.kt)("inlineCode",{parentName:"li"},"$JERSEY_HOME")),(0,l.kt)("li",{parentName:"ul"},"JAXB 2.2 Implementation to simplify the marshalling/unmarshalling of the XML, and also facilitate the JSON support. Download it from ",(0,l.kt)("a",{parentName:"li",href:"https://jaxb.dev.java.net/"},"here"))))),(0,l.kt)("h3",{id:"creating-new-application"},"Creating new application"),(0,l.kt)("p",null,"To create a new App Engine project in Eclipse:"),(0,l.kt)("p",null,'1-  Click on the "',(0,l.kt)("strong",{parentName:"p"},"New Web Application Project"),'" button ',(0,l.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/_aoQgQ1obiyE/S4pv-VRkifI/AAAAAAAAAKc/cNoURwz9n8M/s320/new_app_button.png",alt:null})," in the toolbar . It is also possible to do it using the menu ",(0,l.kt)("strong",{parentName:"p"},"File ",">"," Web Application Project")),(0,l.kt)("p",null,'2-  The "Create a Web Application Project" wizard opens:'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Project Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"EmployeeService")),(0,l.kt)("li",{parentName:"ul"},"Package : ",(0,l.kt)("inlineCode",{parentName:"li"},"com.grallandco.employee.service")),(0,l.kt)("li",{parentName:"ul"},'Uncheck "',(0,l.kt)("inlineCode",{parentName:"li"},"Use Google Web Toolkit"),'"'),(0,l.kt)("li",{parentName:"ul"},'Check that the SDK version your are using is "',(0,l.kt)("inlineCode",{parentName:"li"},"App Engine 1.3.0"),'"; if not configure the project to use it.'),(0,l.kt)("li",{parentName:"ul"},"The screen should look like the following screen :")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://3.bp.blogspot.com/_aoQgQ1obiyE/S4pu9erB81I/AAAAAAAAAKE/ER3aDZKd520/s320/app-engine-wizard.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click Finish"),(0,l.kt)("li",{parentName:"ul"},"The project should look like the following screen :")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/_aoQgQ1obiyE/S4pvDuZVWQI/AAAAAAAAAKM/8I2aUTtx7Os/s320/project-structure.png",alt:null})),(0,l.kt)("h4",{id:"running-the-application"},"Running the application"),(0,l.kt)("p",null,"The App Egine SDK, installed with the Eclipse plugin contains a Web server (based on Jetty), that could be used for testing and debugging. To test that your application has been created correctly select the menu ",(0,l.kt)("strong",{parentName:"p"},"Run ",">"," Run As ",">"," Web Application"),". I personally most of the time run my server using the debug command ",(0,l.kt)("strong",{parentName:"p"},"Run ",">"," DebugAs ",">"," Web Application"),". In debug mode you can change source code and test is without restarting the server."),(0,l.kt)("p",null,"The web server is starting automatically, you should see the following messagein the Eclipse console"),(0,l.kt)("p",null,"The server is runningat ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/")),(0,l.kt)("p",null,"You can access the application, and the sample servlet that has been created using the URL: ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/employeeservice"),"."),(0,l.kt)("p",null,"To stop the server, click on the terminate button ",(0,l.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/_aoQgQ1obiyE/S4pvYft_VPI/AAAAAAAAAKU/UCNDdfNlEnM/s320/terminate_button.png",alt:null})," in the Eclipse console."),(0,l.kt)("h3",{id:"configuring-the-rest-support-in-the-application"},"Configuring the REST support in the application"),(0,l.kt)("p",null,"To be able to create and run REST services in your application you need to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Add the JAX-RS, JAXB Jars in your project and application"),(0,l.kt)("li",{parentName:"ul"},"Configure the web application (web.xml) to handle REST requests ",(0,l.kt)("strong",{parentName:"li"},"Add JAX-RS, JAXB to your project"))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Right click on the project and select menu entry ",(0,l.kt)("strong",{parentName:"li"},"Build Path ",">"," Configure Build Path...")),(0,l.kt)("li",{parentName:"ol"},"Click on the Add External JARs button"),(0,l.kt)("li",{parentName:"ol"},"Select all the JARs located in $JERSEY_HOME/lib and $JAXB_HOME/lib folders. You can for better visibility and reuse create a user library with all these JARs"),(0,l.kt)("li",{parentName:"ol"},"You also need to copy the JARs in the web-inf/lib directory of your application, this step is mandatory to be sure that the JARs are included in the application when deployed to App Engine.\n",(0,l.kt)("em",{parentName:"li"},"Note: I do not like this step. I would prefer to do that by configuration of the build path, to automatically add the JARs to the WEB-INF/lib directory when executing/deploying the application. Unfortunately I did not find the way to do it, so if you know it, feel free to post a comment and I will\nupdate the article."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Configure the web application")),(0,l.kt)("p",null,"In this step you will register a new URI to handle REST requests. To do that you need to register a new servlet that is using the Jersey API and configure it to a specific URI (eg: /ressources  and/or /rest) and configure what are the Java packages that contain the REST implementation classes. So you need to modify the web.xml of your application with the following entries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<servlet>\n  <servlet-name>Jersey Web Application</servlet-name>\n  <servlet-class>com.sun.jersey.spi.container.servlet.ServletContainer</servlet-class>\n  <init-param>\n    <param-name>com.sun.jersey.config.property.packages</param-name>\n    <param-value>com.grallandco.employee.service.rest.impl</param-value>\n  </init-param>\n  <load-on-startup>1</load-on-startup>\n</servlet>\n<servlet-mapping>\n  <servlet-name>Jersey Web Application</servlet-name>\n  <url-pattern>/resources/*</url-pattern>\n</servlet-mapping>\n<servlet-mapping>\n  <servlet-name>Jersey Web Application</servlet-name>\n  <url-pattern>/rest/*</url-pattern>\n</servlet-mapping>\n")),(0,l.kt)("p",null,"This servlet that will answer to the /resources/ and /rest/ URL. The configuration parameter ",(0,l.kt)("inlineCode",{parentName:"p"},"com.sun.jersey.config.property.packages")," is used by Jersey to list the packages where REST services implementation are located.Note that you can put as many package as you need to, you just need to separate the package names by a ; ."),(0,l.kt)("h3",{id:"creating-a-simple-rest-service-to-test-the-environment"},"Creating a simple REST Service to test the environment"),(0,l.kt)("p",null,"The project is now ready to contain REST service. It is time to create  one.Create for example the class ",(0,l.kt)("inlineCode",{parentName:"p"},"com.grallandco.employee.service.rest.impl.HelloWorldResource"),", be sure to use the package name that you have configured in the web.xml for the Jersey servlet, based on the configuration we have made in previous step the package is ",(0,l.kt)("inlineCode",{parentName:"p"},"com.grallandco.employee.service.rest.impl")),(0,l.kt)("p",null,"Here a sample class with the JAX-RS annotations:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.grallandco.employee.service.rest.impl;\nimport javax.ws.rs.Path;\nimport javax.ws.rs.GET;\nimport javax.ws.rs.Produces;\n@Path("/hr/")\npublic class EmployeeResource {\n\n  @GET\n  @Produces("text/plain")\n  @Path("/employee")\n  public String getEmployee() {\n    return "Hello World!";\n  }\n}\n')),(0,l.kt)("p",null,"You should be able to test it, stop the server and run it again, enter the following URL in your browser:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/resources/hr/employee")),(0,l.kt)("p",null,"or"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/rest/hr/employee")),(0,l.kt)("h4",{id:"deploying-the-application-to-google-app-engine"},"Deploying the application to Google App Engine"),(0,l.kt)("p",null,"Before deploying the application you need to register a new application in Google App Engine using the Administartion Console, see the documentation ",(0,l.kt)("a",{parentName:"p",href:"http://code.google.com/appengine/docs/theadminconsole.html"},"here"),'. In my example I have used "',(0,l.kt)("inlineCode",{parentName:"p"},"tugdual"),'" as Application ID.'),(0,l.kt)("p",null,'You can easily now deploy the application to Google App Engine by clicking on the  "Deploy App Engine Project" button "Deploy App Engine Project Button") available in the Eclipse toolbar.'),(0,l.kt)("p",null,"To be able to deploy your application to Google App Engine, you need to check that your application can be registered, the application ID is stored  in the ",(0,l.kt)("inlineCode",{parentName:"p"},"WEB-INF/lib/appengine-web.xml"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<appengine-web-app xmlns="http://appengine.google.com/ns/1.0">\n  <application>[your-application-id]</application>\n  <version>1</version>\n  \x3c!-- Configure java.util.logging --\x3e\n  <system-properties>\n    <property name="java.util.logging.config.file" value="WEB-INF/logging.properties"/>\n  </system-properties>\n</appengine-web-app>\n')),(0,l.kt)("p",null,"The App Engine deploy button prompts you for multiple informations: username (your Google account) and password."),(0,l.kt)("p",null,"When the deployment is complete you can access your application using the following URL:"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://[your-application-id].appspot.com/resources/hr/employee")),(0,l.kt)("p",null,"or"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://[your-application-id].appspot.com/rest/hr/employee")),(0,l.kt)("h3",{id:"ading-xml-and-json-support-to-the-service"},"Ading XML and JSON support to the service"),(0,l.kt)("p",null,"Let's now add new method to manipulate an \"Employee\" object using the service, and the data format should be based on JSON and XML. This is where JAXB is useful, since it allows easily to transform marshall/unmarshall Java objects in XML -obviously- and JSON (cool isn't!)"),(0,l.kt)("h4",{id:"creating-an-employee-class"},"Creating an Employee Class"),(0,l.kt)("p",null,"Start with the creation of a new class to manipulate Employee data, this is a very simple Java class that could look like the following code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.grallandco.employee.service.model;\nimport java.util.Date;\n\npublic class Employee {\n  private String firstName;\n  private String lastName;\n  private Date hireDate;\n  private String email;\n  public Employee(String firstName, String lastName, Date hireDate, String email) {\n    this.firstName = firstName;\n    this.lastName = lastName;\n    this.hireDate = hireDate;\n    this.email = email;\n  }\n  public Employee() {}\n    public String getFirstName() {\n      return firstName;\n    }\n    public void setFirstName(String firstName) {\n      this.firstName = firstName;\n    }\n    public String getLastName() {\n      return lastName;\n    }\n    public void setLastName(String lastName) {\n      this.lastName = lastName;\n    }\n    public Date getHireDate() {\n      return hireDate;\n    }\n    public void setHireDate(Date hireDate) {\n      this.hireDate = hireDate;\n    }\n    public String getEmail() {\n      return email;\n    }\n    public void setEmail(String email) {\n      this.email = email;\n    }\n    public String toString() {\n      StringBuffer sb = new StringBuffer();\n      sb.append("First: ").append(getFirstName());\n      sb.append(" - Last: ").append(getLastName());\n      sb.append(" - Date: ").append(getHireDate());\n      sb.append(" - Email: ").append(getEmail());\n      return sb.toString();\n    }\n  }\n')),(0,l.kt)("p",null,'When implementing your "real" application with some persistence layer\nthis POJO is the one as JDO/JPA entity.'),(0,l.kt)("h4",{id:"create-a-converter-class-for-your-entity"},"Create a Converter class for your entity"),(0,l.kt)("p",null,"I usually encapsulate all the transformation in some converter class, like that I do not directly couple my business class to the serialisation mechanism. (So I do that for classes and lists of classes). So instead of adding the JAXB annotations to the Employee class itself, let's create an EmployeeConverter class that will be responsible of the transformation and used by your REST service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.grallandco.employee.service.converter;\n\nimport java.util.Date;\nimport javax.xml.bind.annotation.XmlElement;\nimport javax.xml.bind.annotation.XmlRootElement;\nimport com.grallandco.employee.service.model.Employee;\n\n@XmlRootElement(name = "employee")\npublic class EmployeeConverter {\n  private Employee entity = null;\n  public EmployeeConverter() {\n    entity = new Employee();\n  }\n\n  public EmployeeConverter(Employee entity) {\n    this.entity = entity;\n  }\n\n  @XmlElement\n  public String getFirstName() {\n    return entity.getFirstName();\n  }\n\n  @XmlElement\n  public String getLastName() {\n    return entity.getLastName();\n  }\n\n  @XmlElement\n  public Date getHireDate() {\n    return entity.getHireDate();\n  }\n\n  @XmlElement\n  public String getEmail() {\n    return entity.getEmail();\n  }\n\n  public Employee getEmployee() {\n    return entity;\n  }\n\n  public void setFirstName(String firstName) {\n    entity.setFirstName(firstName);\n  }\n\n  public void setHireDate(Date hireDate) {\n    entity.setHireDate(hireDate);\n  }\n\n  public void setLastName(String email) {\n    entity.setEmail(email);\n  }\n\n  public void setEmail(String lastName) {\n    entity.setLastName(lastName);\n  }\n}\n\n')),(0,l.kt)("p",null,"You can now update your service to use this utility/converter class to return XML or JSON ojbect based on the content type of the request."),(0,l.kt)("h4",{id:"add-support-to-json-and-xml-to-your-rest-service"},"Add support to JSON and XML to your REST service"),(0,l.kt)("p",null,"You need to change the ",(0,l.kt)("inlineCode",{parentName:"p"},"EmployeeRessource")," class, to change the signature and add new annotations of the ",(0,l.kt)("inlineCode",{parentName:"p"},"getEmployee()")," method."),(0,l.kt)("p",null,"The annotation you are adding:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'@Produces({"application/xml", "application/json"})')," : indicates which type of content will be produced by the service. Based on the type of the request."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'@Path("/employee/{employeeEmail}/")')," : change the Path to indicate a Path parameter, here for example the URL can accept an email in the URI - not the best example, but you get the point..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},'public EmployeeConverter getEmployee( @PathParam ("employeeEmail") String email)')," : change the type returned by the method and take a parameter as String that match the Path param defined in the @Path annotation.")),(0,l.kt)("p",null,"Here the complete class code:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package com.grallandco.employee.service.rest.impl;\n\nimport javax.ws.rs.Path;\nimport javax.ws.rs.GET;\nimport javax.ws.rs.PathParam;\nimport javax.ws.rs.Produces;\nimport com.grallandco.employee.service.converter.EmployeeConverter;\nimport com.grallandco.employee.service.model.Employee;\n\n@Path("/hr/")\npublic class EmployeeRessource {\n\n\n  @GET\n  @Produces({"application/xml", "application/json"})\n  @Path("/employee/{employeeEmail}/")\n  public EmployeeConverter getEmployee( @PathParam ("employeeEmail") String email) {\n    //dummy code\n    Employee emp = new Employee();\n    emp.setEmail(email);\n    emp.setFirstName("John");\n    emp.setLastName("Doe");\n    EmployeeConverter converter = new EmployeeConverter(emp);\n    return converter;\n  }\n}\n\n')),(0,l.kt)("h3",{id:"test-the-service"},"Test the service"),(0,l.kt)("p",null,"You can now run the server locally and test the service"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:8080/resources/hr/employee/tug@grallandco.com")),(0,l.kt)("p",null,"This will return an XML document."),(0,l.kt)("p",null,"If you want to test the JSON call you have multiple choice:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using following command")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'tgrall$ curl -H "Accept: application/json" http://localhost:8080/resources/hr/employee/tug@grallandco.com\n    {"email":"tug@grallandco.com","firstName":"John","lastName":"Doe"}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Using an HTTP client that allows your to configure/set the HTTP request completely, I am using the ",(0,l.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/2691"},"Poster Firefox Plugin")),(0,l.kt)("li",{parentName:"ul"},"Using some Javascript code in an application")),(0,l.kt)("p",null,"You can repeat the test on your deployed application on Google AppEngine."),(0,l.kt)("h3",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"In this article you have learned how to create and deploy a new REST Service on Google App Engine. This service has been created with the JAX-RS Reference Implementation the Jersey project. In the next article you will learn how to add persistence and create a CRUD Rest service on Google App Engine."))}h.isMDXComponent=!0}}]);