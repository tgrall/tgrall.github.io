"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[95564],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81066:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={title:"Calling a Web Services Protected using HTTP Basic",categories:"ws java"},s=void 0,l={permalink:"/blog/2006/12/04/calling-a-web-services-protected-using-http-basic",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-12-04-calling-a-web-services-protected-using-http-basic.md",source:"@site/blog/2006-12-04-calling-a-web-services-protected-using-http-basic.md",title:"Calling a Web Services Protected using HTTP Basic",description:"WS-Security provides a way to protect Web Services at the message level (SOAP) and it is",date:"2006-12-04T00:00:00.000Z",formattedDate:"December 4, 2006",tags:[],readingTime:.47,truncated:!1,authors:[],prevItem:{title:"Web Conference: Groovy &amp; Grails UG London",permalink:"/blog/2006/12/05/web-conference-groovy-and-grails-ug-london"},nextItem:{title:"OC4J: Sending system level message in the console window",permalink:"/blog/2006/11/28/oc4j-sending-system-level-message-in-the-console-window"}},u={authorsImageUrls:[]},p=[],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"WS-Security provides a way to protect Web Services at the message level (SOAP) and it is\nindependent of the protocol used (HTTP, JMS, ...). However, some services are still using HTTP based authentication for protection. JAX-RPC and its Oracle implementation provides a way to set the username\nand password in the client (Stub) using some properties on the Stub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'((Stub)port)._setProperty(Stub.USERNAME_PROPERTY, "username");\n((Stub)port)._setProperty(Stub.PASSWORD_PROPERTY, "password");  \n')),(0,a.kt)("p",null,"That's it..."),(0,a.kt)("p",null,"Theses properties are shortcuts to the standard JAX-RPC properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"javax.xml.rpc.security.auth.username\njavax.xml.rpc.security.auth.password\n")),(0,a.kt)("p",null,"This code is the same when you are using the Call interface."))}d.isMDXComponent=!0}}]);