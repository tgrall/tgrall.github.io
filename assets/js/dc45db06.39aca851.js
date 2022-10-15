"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[55714],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,g=m["".concat(c,".").concat(d)]||m[d]||u[d]||n;return r?a.createElement(g,l(l({ref:t},s),{},{components:r})):a.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var a=r(87462),o=(r(67294),r(3905));const n={title:"Using Eclipse WTP and OracleAS/OC4J",tags:["oc4j","oracle","eclipse"]},l=void 0,i={permalink:"/blog/2005/11/11/using-eclipse-wtp-and-oracleas-slash-oc4j",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2005-11-11-using-eclipse-wtp-and-oracleas-slash-oc4j.md",source:"@site/blog/2005-11-11-using-eclipse-wtp-and-oracleas-slash-oc4j.md",title:"Using Eclipse WTP and OracleAS/OC4J",description:"You have probably heard about Web Tools Platform (WTP), this project",date:"2005-11-11T00:00:00.000Z",formattedDate:"November 11, 2005",tags:[{label:"oc4j",permalink:"/blog/tags/oc-4-j"},{label:"oracle",permalink:"/blog/tags/oracle"},{label:"eclipse",permalink:"/blog/tags/eclipse"}],readingTime:1.395,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Using Eclipse WTP and OracleAS/OC4J",tags:["oc4j","oracle","eclipse"]},prevItem:{title:"Oracle 10g: Oracle Open World Top 10 presentations",permalink:"/blog/2005/11/22/oracle-10g-oracle-open-world-top-10-presentations"},nextItem:{title:"Installing Blojsom on OracleAS 10g (10.1.3)",permalink:"/blog/2005/10/27/installing-blojsom-on-oracleas-10g-10-dot-1-3"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You have probably heard about ",(0,o.kt)("a",{parentName:"p",href:"http://www.eclipse.org/webtools/"},"Web Tools Platform (WTP)"),", this project\nextends Eclipse with various tools for developping J2EE applications.\nIt contains editors for HTML, JSP, XML and so more... In addition to\nvarious wizards to create Web Services, EJB, Connector and more... WTP\nallows developers to package the application using J2EE standard\npackagind: EAR,WAR,RAR,JAR and deploy and run the application from the\nIDE."),(0,o.kt)("p",null,"The challenge here is not how\nyou build J2EE components using an IDE, but more how do you package,\ndeploy and run your application easily from the IDE. Eclipse WTP allows\nyou like Oracle JDeveloper does, to package the various J2EE components\nin standard archives (JAR, WAR, EAR, RAR, ...) and deploy them to a\nJ2EE container. WTP project has a very nice list of containers you\ncan deploy to: Oracle, IBM, BEA, JBoss, Tomcat, ..."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.grallandco.com/blog/archives/wtp/wtp-server.html"},(0,o.kt)("img",{parentName:"a",src:"http://www.grallandco.com/blog/archives/wtp/wtp-server-thumb.PNG",alt:null}))),(0,o.kt)("p",null,"With the latest build of Eclipse WTP (Release 1.0M8), Oracle\nApplication Server 10g is now part of the default server list. So if\nyour are an OracleAS user you can now use WTP and start to run and\ndebut your application running in OracleAS from Eclipse."),(0,o.kt)("p",null,"What do you need to start using WTP and OracleAS:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download and install Eclipse WTP 1.0M8 from ",(0,o.kt)("a",{parentName:"li",href:"http://www.eclipse.org/webtools/"},"Eclipse")," site."),(0,o.kt)("li",{parentName:"ol"},"Download and install OracleAS 10g (OC4J 10.1.3 Developer Preview 4) from ",(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technology/tech/java/oc4j/1013/index.html"},"OTN")),(0,o.kt)("li",{parentName:"ol"},"You must set a administrator password for OC4J using the start command"),(0,o.kt)("li",{parentName:"ol"},"Done! You can now use OC4J\nand Eclipse.","\xa0",(0,o.kt)("a",{parentName:"li",href:"http://www.grallandco.com/blog/archives/wtp/wtp-oc4j.swf"},"I have a viewlet that shows the basic steps to create and run your first Web application"),".")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.grallandco.com/blog/archives/wtp/wtp-server-conf.html"},(0,o.kt)("img",{parentName:"a",src:"http://www.grallandco.com/blog/archives/wtp/wtp-server-conf-thumb.png",alt:null}))),(0,o.kt)("p",null,"OC4J configuration"),(0,o.kt)("p",null,"Update ",(0,o.kt)("em",{parentName:"p"},"(Nov,18)")," : I forgot to mention the ",(0,o.kt)("a",{parentName:"p",href:"http://www.eclipse.org/webtools/community/tutorials/OracleServerAdapter/OracleServerAdapter.html"},"Oracle Application  Server Adapter tutorial")," from the Web Tools project."))}u.isMDXComponent=!0}}]);