"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[22878],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),g=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=g(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=g(n),m=r,d=h["".concat(s,".").concat(m)]||h[m]||u[m]||i;return n?o.createElement(d,a(a({ref:t},c),{},{components:n})):o.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var g=2;g<i;g++)a[g]=n[g];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},72893:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return g},assets:function(){return c},toc:function(){return u},default:function(){return m}});var o=n(87462),r=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"OC4J: Sending system level message in the console window",categories:"oc4j oracle"},s=void 0,g={permalink:"/blog/2006/11/28/oc4j-sending-system-level-message-in-the-console-window",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-11-28-oc4j-sending-system-level-message-in-the-console-window.md",source:"@site/blog/2006-11-28-oc4j-sending-system-level-message-in-the-console-window.md",title:"OC4J: Sending system level message in the console window",description:"OracleAS 10gR3, so OC4J standalone, is using the standard Java logging framework. Some of the",date:"2006-11-28T00:00:00.000Z",formattedDate:"November 28, 2006",tags:[],readingTime:1.93,truncated:!1,authors:[],prevItem:{title:"Calling a Web Services Protected using HTTP Basic",permalink:"/blog/2006/12/04/calling-a-web-services-protected-using-http-basic"},nextItem:{title:"Download the The Oracle Technology Network (OTN) 'Greatest Hits'",permalink:"/blog/2006/11/20/download-the-the-oracle-technology-network-otn-greatest-hits"}},c={authorsImageUrls:[]},u=[],h={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"OracleAS 10gR3, so OC4J standalone, is using the standard ",(0,i.kt)("a",{parentName:"p",href:"http://java.sun.com/j2se/1.4.2/docs/guide/util/logging/overview.html"},"Java logging framework"),". Some of the\nbenefits are easy configuration, and extensibility. The configuration of the level of logging of the different loggers has been exposes in\nthe Oracle Application Server Console. To see the logger configuration, click on the Administration Tab and then Logger Configuration, you can then configure the different loggers."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://static.flickr.com/106/304730770_8db9728d3a_o.png",alt:null})),(0,i.kt)("p",null,"By default the logger will write all the information in the default log.xml file, and for application lever logger it will go in the application.log. You may want to send the information in the console during development to debug/analyze your application. This is done using the configuration of the Handler. This information is currently not available in the Application Server Console, so I am documenting in the next steps how\nto send the information in the console (terminal window)."),(0,i.kt)("p",null,"The configuration of the OracleAS Logging is saved in the ",(0,i.kt)("inlineCode",{parentName:"p"},"$ORACLE_HOME/j2ee/home/config/j2ee-logging.xml")," file. In this file you  can see that Oracle has defined\nvarious handlers where information can be sent:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"console-handler")," : Log the information in the console (the one we want to use in this sample)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oc4j-handler")," : the default handler for most of the loggers, saving the information in the $ORACLE_HOME/j2ee/home/log/oc4j/log.xml using the Oracle Logger formatting"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oracle-webservices-management-auditing-handler")," : the handler used by the Web Services Auditing feature in the $ORACLE_HOME/j2ee/home/log/wsmgmt/auditing/log.xml"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oracle-webservices-management-logging-handler")," : the handler used by the Web Service Logging feature in the $ORACLE_HOME/j2ee/home/log/wsmgmt/logging/log.xml")),(0,i.kt)("p",null,"As you may know, OracleAS Web Service provides out of the box support for Auditing of the SOAP messages. You just need to go in the administration page of the Web Service and enable the auditing. By default the messages are logged in the auditing log pointed above. But during development it is really interesting to see the SOAP Messages in the console without having to configure a Proxy to capture the request/response. The easiest way to do that is to edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"j2ee-logging.xml")," file and associate the ",(0,i.kt)("inlineCode",{parentName:"p"},"console-handler")," to the auditing logger using the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<logger name="oracle.webservices.management.auditing" level="NOTIFICATION:1" useParentHandlers="false">\n<handler name="oracle-webservices-management-auditing-handler"/>\n<handler name="console-handler"/>\n</logger>\n')),(0,i.kt)("p",null,"by doing this you will see the SOAP Message in the OC4J console that is running in your system."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://static.flickr.com/103/308538842_ed574a1c08_o.png",alt:null})),(0,i.kt)("p",null,"You can also use this configuration with any loggers available in OC4J."))}m.isMDXComponent=!0}}]);