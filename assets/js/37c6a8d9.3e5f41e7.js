"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[44046],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||r;return n?o.createElement(d,l(l({ref:t},u),{},{components:n})):o.createElement(d,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],i={title:"Oracle BPEL: Debugging 'internal' SOAP Messages",categories:"bpel soa"},s=void 0,p={permalink:"/blog/2006/04/23/oracle-bpel-debugging-internal-soap-messages",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-04-23-oracle-bpel-debugging-internal-soap-messages.md",source:"@site/blog/2006-04-23-oracle-bpel-debugging-internal-soap-messages.md",title:"Oracle BPEL: Debugging 'internal' SOAP Messages",description:"When you develop applications",date:"2006-04-23T00:00:00.000Z",formattedDate:"April 23, 2006",tags:[],readingTime:3.975,truncated:!1,authors:[],prevItem:{title:"Grails on Oracle (OracleAS and OracleXE)",permalink:"/blog/2006/05/03/grails-on-oracle-oracleas-and-oraclexe"},nextItem:{title:"Google Data APIs",permalink:"/blog/2006/03/23/google-data-apis"}},u={authorsImageUrls:[]},c=[],h={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you develop applications\nthat use SOAP based Web Services you very often use an HTTP proxy to\ncapture the request and response that are exchanged between the clients\nand servers. For this you can use the Oracle HTTP Analyzer that is part\nof the toolset of Oracle JDeveloper, Axis TCP Monitor, or a packaged\nversion of it that you have with Oracle BPEL Process Manager."),(0,r.kt)("p",null,"BPELs are making extensive usage of SOAP messages, and it could be\ninteresting to debug the different call to the partnerlinks. Oracle\nBPEL PM, to avoid HTTP calls and make optimized SOAP message when the\npartnerlink that you are invoking is deployed as a BPEL. So in the\ndefault configuration you do not see the different calls. In this\narticle I explain how you can configure the server to be able to do it."),(0,r.kt)("p",null,"For this I will be using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Oracle BPEL Process Manager developer install running in an OC4J 10g Stand Alone (10.1.2.0.2)"),(0,r.kt)("li",{parentName:"ul"},"obtunnel, that is a package version of Axis TCP Monitor located in ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;BPEL_HOME&gt;\\bin\\obtunnel.bat")),(0,r.kt)("li",{parentName:"ul"},"LoanFlow demo that you can install in 2 steps:")),(0,r.kt)("h4",{id:"starting-the-oralce-bpel-tunneling-tool"},"Starting the Oralce BPEL Tunneling tool:"),(0,r.kt)("p",null,"Just run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"&lt;BPEL_HOME&gt;\\bin\\obtunnel.bat")," You will see the following application:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://static.flickr.com/46/133968437_aa0d5804f6_o.png",alt:null})),(0,r.kt)("p",null,"By default the TCPMonitor launched from BPEL listens on the port 1234\nand proxies for the default Oracle BPEL port 9700. So in this context\nyou will capture all the requests is you access the server on the port\n1234."),(0,r.kt)("p",null,"It is not sufficiant here since the different partnerlinks endpoint are\nnot dynamique and are set to the port 9700. So in this case you wont's\nsee the request coming from the BPEL to a local partner link (and I am\nnot talking about the SOAP Optimization yet)."),(0,r.kt)("p",null,"One way that I use to work around this issue in development ",(0,r.kt)("em",{parentName:"p"},"--maybe we have more simple\nsolutions, but this is the one that I use--")," is to change\nthe port of the OC4J and make the proxy listening on the port 9700. In\nthis case you will be able to capture the requests made from BPEL to\nits partnerlinks."),(0,r.kt)("h4",{id:"changing-the-port-of-oc4j-and-the-tcp-monitor"},"Changing the Port of OC4J and the TCP Monitor"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"I. Change the HTTP port of OC4J used by BPEL")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open ",(0,r.kt)("inlineCode",{parentName:"li"},"&lt;BPEL_HOME&gt;\\system\\appserver\\oc4j\\j2ee\\home\\config\\http-web-site.xml")),(0,r.kt)("li",{parentName:"ol"},"Edit the ",(0,r.kt)("inlineCode",{parentName:"li"},"port")," attribute of the root element ",(0,r.kt)("inlineCode",{parentName:"li"},"web-site")," to enter a different value")),(0,r.kt)("p",null,"eg: ",(0,r.kt)("inlineCode",{parentName:"p"},'&lt;web-site port="9701"...'),".  Stop your BPEL Process Manager"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"II. Start a new TCPMonitor on port 9700")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the TCPMonitor sceen click on the Admin Tab"),(0,r.kt)("li",{parentName:"ol"},'Enter 9700 for the "Listen Port #" field (since we want to be sure the partnerlinks are called correctly)'),(0,r.kt)("li",{parentName:"ol"},'Enter 9701 (or the value you entered for the HTTP port) for "Target Port #".'),(0,r.kt)("li",{parentName:"ol"},"Click Add"),(0,r.kt)("li",{parentName:"ol"},'Click on the new tab "Port 9700". If you have an error message like "',(0,r.kt)("em",{parentName:"li"},"java.net.BindException: Address Already in use: JVM_Bind"),'" this is simply because your BPEL process manager is not stopped. In this case stop the BPEL server, and start the TCPMonitor by clicking the Start button.')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"III. Restart you BPEL Server")),(0,r.kt)("p",null,"Nothing special here you just need to start your server, and check that the BPEL PM is now listening on the HTTP port that you have entered, in my case 9701:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:9701/BPELConsole"))),(0,r.kt)("p",null,"You can now go on the test page of the LoanFlow process (either on the port 9700 or 9701) and invoke the process. I am using 9701 since I want to capture the calls make by the Business Process to its partnerlinks."),(0,r.kt)("p",null,"You can see some HTTP activities in your TCPMonitor, but if you look in\ndetails you only see request to the different WSDLs used by the\nLoanFlow..."),(0,r.kt)("p",null,"I was like you expecting to be able to see the different SOAP requests\nand response, but BPEL does some optimization around local SOAP calls.\nSo to be able to capture these requests you just need to turn of this\noptimization."),(0,r.kt)("h4",{id:"turning-off-the-soap-shortcut"},"Turning Off the SOAP Shortcut"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'In the BPEL console, click on the "',(0,r.kt)("em",{parentName:"li"},"Manage BPEL Domain"),'" link (topright)'),(0,r.kt)("li",{parentName:"ol"},"You arrive in the configuration tab, look for the ",(0,r.kt)("inlineCode",{parentName:"li"},"optSoapShortcut")," property and set it to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("inlineCode",{parentName:"li"},"Apply")," You can now go on the test page of the LoanFlow process (either on the port 9700 or 9701) and invoke the process. I am using 9701 since I want to capture the calls make by the Business Process to its partnerlinks.")),(0,r.kt)("p",null,"Now you can see all the SOAP requests and responses between the LoanFlow BPEL and its partnerlinks."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://static.flickr.com/46/133968438_d0dc761af0.jpg?v=0",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://static.flickr.com/46/133968438_d0dc761af0_o.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Update on 08/02/2007")),(0,r.kt)("p",null,"For people that are currently using ",(0,r.kt)("strong",{parentName:"p"},"Oracle BPEL 10.1.3.1")," the ",(0,r.kt)("em",{parentName:"p"},"optSoapShortcut")," is not visible anymore in the console, but it is still possible to configure this by adding it manually in the domain configuration file available at:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$BPEL_HOME/domains/<domain>/config/domain.xml")))}m.isMDXComponent=!0}}]);