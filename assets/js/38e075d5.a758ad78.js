"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[95564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),m=a,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},81066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"Calling a Web Services Protected using HTTP Basic",categories:"ws java"},i=void 0,s={permalink:"/blog/2006/12/04/calling-a-web-services-protected-using-http-basic",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-12-04-calling-a-web-services-protected-using-http-basic.md",source:"@site/blog/2006-12-04-calling-a-web-services-protected-using-http-basic.md",title:"Calling a Web Services Protected using HTTP Basic",description:"WS-Security provides a way to protect Web Services at the message level (SOAP) and it is",date:"2006-12-04T00:00:00.000Z",formattedDate:"December 4, 2006",tags:[],readingTime:.47,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Calling a Web Services Protected using HTTP Basic",categories:"ws java"},prevItem:{title:"Web Conference: Groovy &amp; Grails UG London",permalink:"/blog/2006/12/05/web-conference-groovy-and-grails-ug-london"},nextItem:{title:"OC4J: Sending system level message in the console window",permalink:"/blog/2006/11/28/oc4j-sending-system-level-message-in-the-console-window"}},l={authorsImageUrls:[]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"WS-Security provides a way to protect Web Services at the message level (SOAP) and it is\nindependent of the protocol used (HTTP, JMS, ...). However, some services are still using HTTP based authentication for protection. JAX-RPC and its Oracle implementation provides a way to set the username\nand password in the client (Stub) using some properties on the Stub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'((Stub)port)._setProperty(Stub.USERNAME_PROPERTY, "username");\n((Stub)port)._setProperty(Stub.PASSWORD_PROPERTY, "password");  \n')),(0,a.kt)("p",null,"That's it..."),(0,a.kt)("p",null,"Theses properties are shortcuts to the standard JAX-RPC properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"javax.xml.rpc.security.auth.username\njavax.xml.rpc.security.auth.password\n")),(0,a.kt)("p",null,"This code is the same when you are using the Call interface."))}u.isMDXComponent=!0}}]);