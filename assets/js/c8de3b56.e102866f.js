"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[94942],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38031:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return s},toc:function(){return u},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Oracle Application Server 10gR3: iHat",categories:"oracle"},c=void 0,p={permalink:"/blog/2007/02/15/oracle-application-server-10gr3-ihat",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-02-15-oracle-application-server-10gr3-ihat.md",source:"@site/blog/2007-02-15-oracle-application-server-10gr3-ihat.md",title:"Oracle Application Server 10gR3: iHat",description:"When preparing a complex topology, where you have multiple HTTP servers ,talking with many OC4J instances, it is sometimes hard to understand what is going on. Oracle Application Server Control provides the complete view of your topologies in different pages. If you want to have a quick overview of your topology, you may want a more graphical view of your Oracle Application Server instance.",date:"2007-02-15T00:00:00.000Z",formattedDate:"February 15, 2007",tags:[],readingTime:1.535,truncated:!1,authors:[],prevItem:{title:"Groovy 101: Importing XML in your database",permalink:"/blog/2007/02/18/groovy-101-importing-xml-in-your-database"},nextItem:{title:"Oracle Web Services: Sharing Session between client calls",permalink:"/blog/2007/02/15/oracle-web-services-sharing-session-between-client-calls"}},s={authorsImageUrls:[]},u=[],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When preparing a complex topology, where you have multiple HTTP servers ,talking with many OC4J instances, it is sometimes hard to understand what is going on. Oracle Application Server Control provides the complete view of your topologies in different pages. If you want to have a quick overview of your topology, you may want a more graphical view of your Oracle Application Server instance."),(0,a.kt)("p",null,"One of the tool that I use a lot to present OracleAS and its components is ",(0,a.kt)("a",{parentName:"p",href:"http://www.oracle.com/technology/products/ias/utilities/ihat1013.zip"},"OracleAS Hi-Av Tool 10g (10.1.3)")," also known as ",(0,a.kt)("strong",{parentName:"p"},"iHat"),". This utility uses Oracle Process & Notification Manager (OPMN) to gather information of all the components used in your topology, representing it in a nice graphical viewer. In addition to use iHat to show the different components, I do also use that to validate my configuration."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/_aoQgQ1obiyE/RdSOpbcqAJI/AAAAAAAAAAk/huSO5c9xg9o/s1600/ihat001.png",alt:"iHat View"})),(0,a.kt)("p",null,"In this case I am showing a specific instance, that contains 3 OC4Js instance, with 2 of them that are in the same group.  When using iHat you will notice that you can, in addition to have some monitoring information start, stop, restart the different components directly from the view."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"How do you install and start iHat?")),(0,a.kt)("p",null,"1- Download iHat from  ",(0,a.kt)("a",{parentName:"p",href:"http://www.oracle.com/technology/products/ias/utilities/index.html"},"Utilities for Oracle Application Server 10",(0,a.kt)("em",{parentName:"a"},"g")," OTN page")),(0,a.kt)("p",null,"2- Unzip it, and this becomes the ",(0,a.kt)("inlineCode",{parentName:"p"},"$IHAT_HOME")),(0,a.kt)("p",null,"3- You have an ORACLE_HOME that is pointing to one of the OracleAS instance, so you can start iHat using the follling command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"java -cp $ORACLE_HOME/opmn/lib/optic.jar:$IHAT_HOME/ihat.jar oracle.ias.opmn.ihat.WebServer 8181 $ORACLE_HOME\n")),(0,a.kt)("p",null,"Using this command, iHat is starting an HTTP server on port 8181, and use the OPMN configuration of the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ORACLE_HOME")," that I you have entered as parameter. iHat provided other parameters such as the host-name and OPMN port if you want to connect remotely without dependency on the ",(0,a.kt)("inlineCode",{parentName:"p"},"$ORACLE_HOME"),". All this, is documented in the readme file located in the iHat folder."))}h.isMDXComponent=!0}}]);