"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[32186],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Using HTTPS with Web Services",categories:"ws"},l=void 0,i={permalink:"/blog/2006/10/13/using-https-with-web-services",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-10-13-using-https-with-web-services.md",source:"@site/blog/2006-10-13-using-https-with-web-services.md",title:"Using HTTPS with Web Services",description:"Prerequisites:",date:"2006-10-13T00:00:00.000Z",formattedDate:"October 13, 2006",tags:[],readingTime:3.695,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Using HTTPS with Web Services",categories:"ws"},prevItem:{title:"JDeveloper: What are my System Properties?",permalink:"/blog/2006/10/13/jdeveloper-what-are-my-system-properties"},nextItem:{title:"Come to Oracle Open World and watch Mr Spring and Mr Apache speak",permalink:"/blog/2006/10/12/come-to-oracle-open-world-and-watch-mr-spring-and-mr-apache-speak"}},s={authorsImageUrls:[]},p=[{value:"Add HTTPS to OC4J",id:"add-https-to-oc4j",level:4},{value:"Creating of the Keystore",id:"creating-of-the-keystore",level:5},{value:"Configuring OC4J",id:"configuring-oc4j",level:4},{value:"Start OC4J and test the HTTPS port",id:"start-oc4j-and-test-the-https-port",level:4},{value:"Consuming the Service using HTTPS",id:"consuming-the-service-using-https",level:3},{value:"Generate and configure a client Keystore",id:"generate-and-configure-a-client-keystore",level:4},{value:"Generate the proxy",id:"generate-the-proxy",level:3},{value:"Calling the Service using secure endpoint",id:"calling-the-service-using-secure-endpoint",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Prerequisites:")),(0,a.kt)("p",null,"In this article you have"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"already a Web Service deployed in OC4J that is running on the default HTTP port. The WSDL and Endpoint are available. In my sample\nthe non secure Web Service endpoint is: ",(0,a.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8888/math-service/MathServiceSoapHttpPort"))),(0,a.kt)("h4",{id:"add-https-to-oc4j"},"Add HTTPS to OC4J"),(0,a.kt)("h5",{id:"creating-of-the-keystore"},"Creating of the Keystore"),(0,a.kt)("p",null,"The first thing to do to secure OC4J would be to create a new keystore\nthat will contain the different certificates. The easiest way to do\nthat for a Java developer is to use ",(0,a.kt)("a",{parentName:"p",href:"http://java.sun.com/j2se/1.5.0/docs/tooldocs/solaris/keytool.html"},"SUN's keytool"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'keytool -genkey -alias oracle-server -dname "CN=Tug Grall, OU=Blog O=Grall And Co L=Redwood Shores, S=CA, C=US" -keyalg RSA -keypass welcome -storepass welcome -keystore server.keystore\n')),(0,a.kt)("p",null,"You can copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"server.keystore")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ORACLE_HOME/j2ee/home/config")," to simplify the next steps."),(0,a.kt)("h4",{id:"configuring-oc4j"},"Configuring OC4J"),(0,a.kt)("p",null,"OC4J stand alone is using the notion of Web-Site to expose HTTP resources (Web Applications). The default-web-site is define is he\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ORACLE_HOME/j2ee/home/config/default-web-site.xml"),". To secure an OC4J you can follow the steps describe in the ",(0,a.kt)("a",{parentName:"p",href:"http://download.oracle.com/docs/cd/B25221_04/web.1013/b14429/configssl.htm"},"OC4J Security guide")," that I have summarized in the following section."),(0,a.kt)("p",null,"What we want to achieve for the purpose of the demonstration is to have OC4J using HTTP and HTTPS, on port 8888 and 4443 for example."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy ",(0,a.kt)("inlineCode",{parentName:"li"},"default-web-site.xml")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"secure-web-site.xml")),(0,a.kt)("li",{parentName:"ol"},"Edit the secure-web-site.xml:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Change the ",(0,a.kt)("inlineCode",{parentName:"li"},"web-site")," tag by changing the port to ",(0,a.kt)("inlineCode",{parentName:"li"},"4443")," and adding the element ",(0,a.kt)("inlineCode",{parentName:"li"},'secure="true"')),(0,a.kt)("li",{parentName:"ul"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl-config")," element and point this to the new created keystore.")))),(0,a.kt)("p",null,"The file looks like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<web-site   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:noNamespaceSchemaLocation="http://xmlns.oracle.com/oracleas/schema/web-site-10_0.xsd"\n  port="4443"\n  secure="true"\n  display-name="OC4J 10g (10.1.3) Default Web Site"\n  schema-major-version="10"\n  schema-minor-version="0" >\n  ...\n  <ssl-config keystore="server.keystore" keystore-password="welcome" />\n  ...\n</web-site>\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Import the new Web site in your OC4J instance by editing the ",(0,a.kt)("inlineCode",{parentName:"li"},"$ORACLE_HOME/j2ee/home/server.xml"),"\nfile. You need to add or replace the web-site tag. In my case I want to\nadd the secure web site to my instance so the configuration looks like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'...\n<web-site default="true" path="./default-web-site.xml" />\n<web-site path="./secure-web-site.xml" />\n...\n')),(0,a.kt)("p",null,"Since we have copied the file from the default-web-site, all applications are available using HTTP and HTTPS"),(0,a.kt)("h4",{id:"start-oc4j-and-test-the-https-port"},"Start OC4J and test the HTTPS port"),(0,a.kt)("p",null,"Start OC4J using the standard Java command or shell script, I am adding the Java Network debug flag that would help you to see what is\nhappening at the SSL level."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -Djavax.net.debug=ssl -jar oc4j.jar\n")),(0,a.kt)("p",null,"You should be able to access the service WSDL using the HTTPS port for example in my case:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://127.0.0.1:4443/math-service/MathServiceSoapHttpPort?WSDL"))),(0,a.kt)("h3",{id:"consuming-the-service-using-https"},"Consuming the Service using HTTPS"),(0,a.kt)("h4",{id:"generate-and-configure-a-client-keystore"},"Generate and configure a client Keystore"),(0,a.kt)("p",null,"Event if this is possible to use the same keystore for the server and the client, I will guide you in the steps to create a client\ncertificate and import the certificate from the existing -server- one."),(0,a.kt)("p",null,"Here the command ",(0,a.kt)("em",{parentName:"p"},"to create")," a new keystore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'keytool -genkey -alias oracle-client -dname "CN=John Doe, OU=Blog O=MyDummyClient, S=CA, C=US" -keyalg RSA -keypass welcomeClient -storepass welcomeClient -keystore client.keystore\n')),(0,a.kt)("p",null,"The next step is ",(0,a.kt)("em",{parentName:"p"},"to export")," the certificate from the server keystore to be able to import it in the client:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"keytool -keystore server.keystore -export -alias oracle-server -file server.cer\n")),(0,a.kt)("p",null,"You can now ",(0,a.kt)("em",{parentName:"p"},"import the cerificate")," in the client keystore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"keytool -keystore client.keystore -import -file server.cer\n")),(0,a.kt)("h3",{id:"generate-the-proxy"},"Generate the proxy"),(0,a.kt)("p",null,"You have now the client certificate so you can use the Oracle Web\nService Assembler to generate the proxy. The only specific thing you\nhave to do is to specify which key store to use when running the tool.\nThe command to use when generating the proxy is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -Djavax.net.ssl.trustStore=/Users/tgrall/ssl/client.keystore\n    -Djavax.net.ssl.keyStore=/Users/tgrall/ssl/client.keystore\n    -Djavax.net.ssl.trustStorePassword=welcomeClient\n    -Djavax.net.ssl.keyStorePassword=welcomeClient\n    -jar $ORACLE_HOME/webservices/lib/wsa.jar\n    -genProxy\n    -wsdl https://127.0.0.1:4443/math-service/MathServiceSoapHttpPort?WSDL\n\n")),(0,a.kt)("h3",{id:"calling-the-service-using-secure-endpoint"},"Calling the Service using secure endpoint"),(0,a.kt)("p",null,"Configure the Java Environment to use the client store is made using the following System properties:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"javax.net.ssl.trustStore"),(0,a.kt)("li",{parentName:"ul"},"javax.net.ssl.keyStore"),(0,a.kt)("li",{parentName:"ul"},"javax.net.ssl.trustStorePassword"),(0,a.kt)("li",{parentName:"ul"},"javax.net.ssl.keyStorePassword")),(0,a.kt)("p",null,"This could be done using different approach, property file, -D command\nline parameter or programmatically. To simply the example I am using\nthe programmatic approach, the following code is part of the main\nmethod of the Client class:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'...\nSystem.setProperty("javax.net.ssl.trustStore", "/Users/tgrall/ssl/client.keystore");\nSystem.setProperty("javax.net.ssl.keyStore", "/Users/tgrall/ssl/client.keystore");\nSystem.setProperty("javax.net.ssl.trustStorePassword", "welcomeClient");\nSystem.setProperty("javax.net.ssl.keyStorePassword", "welcomeClient");\n...\n// Adding Debug information\nSystem.setProperty("javax.net.debug", "ssl");\n...\n')),(0,a.kt)("p",null,"It is possible to change the Endpoint dynamically in the Proxy using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEndpoint")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'...\ndemoclient.proxy.MathServiceSoapHttpPortClient myPort = new democlient.proxy.MathServiceSoapHttpPortClient();\n...\nString ep = "https://127.0.0.1:4443/math-service/MathServiceSoapHttpPort";\nmyPort.setEndpoint(ep);\nSystem.out.println("Result of the operation is "+ myPort.add(2,2));\n...\n')),(0,a.kt)("p",null,"You should now be able to run the client and call the service using HTTPS. This would look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://static.flickr.com/86/268580831_c24ec07d89_o.png",alt:null})))}u.isMDXComponent=!0}}]);