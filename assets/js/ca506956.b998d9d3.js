"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[65813],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>m});var n=o(67294);function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function a(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?a(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function c(t,e){if(null==t)return{};var o,n,r=function(t,e){if(null==t)return{};var o,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||(r[o]=t[o]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)o=a[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(r[o]=t[o])}return r}var l=n.createContext({}),u=function(t){var e=n.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},s=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var o=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,i(i({ref:e},s),{},{components:o})):n.createElement(h,i({ref:e},s))}));function m(t,e){var o=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=o.length,i=new Array(a);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:r,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},21751:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const a={title:"Introduction to MongoDB Security",categories:"mongodb nosql security"},i=void 0,c={permalink:"/blog/2015/02/04/introduction-to-mongodb-security",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-02-04-introduction-to-mongodb-security.md",source:"@site/blog/2015-02-04-introduction-to-mongodb-security.md",title:"Introduction to MongoDB Security",description:"Last week at the Paris MUG, I had a quick chat about security and MongoDB, and I have decided to create this post that explains how to configure out of the box security available in MongoDB.",date:"2015-02-04T00:00:00.000Z",formattedDate:"February 4, 2015",tags:[],readingTime:5.825,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Introduction to MongoDB Security",categories:"mongodb nosql security"},prevItem:{title:"MongoDB : Playing with Arrays",permalink:"/blog/2015/04/21/mongodb-playing-with-arrays"},nextItem:{title:"Moving my beers from Couchbase to MongoDB",permalink:"/blog/2015/02/01/moving-my-beers-from-couchbase-to-mongodb"}},l={authorsImageUrls:[]},u=[],s={toc:u};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last week at the Paris MUG, I had a quick chat about security and MongoDB, and I have decided to create this post that explains how to configure out of the box security available in MongoDB."),(0,r.kt)("p",null,"You can find all information about MongoDB Security in following documentation chapter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/security/"},"http://docs.mongodb.org/manual/security/"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(31756).Z,width:"400",height:"400"})),(0,r.kt)("p",null,"In this post, ",(0,r.kt)("em",{parentName:"p"},"I won't go")," into the detail about how to deploy your database in a secured environment (DMZ/Network/IP/Location/...)"),(0,r.kt)("p",null,"I will focus on ",(0,r.kt)("strong",{parentName:"p"},"Authentication")," and ",(0,r.kt)("strong",{parentName:"p"},"Authorization"),", and provide you the steps to secure the access to your database and data."),(0,r.kt)("p",null,"I have to mention that by default, when you install and start MongoDB, security is not enabled. Just to make it easier to work with."),(0,r.kt)("p",null,"The first part of the security is the ",(0,r.kt)("strong",{parentName:"p"},"Authentication"),", you have multiple choices documented ",(0,r.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/core/authentication/"},"here"),'. Let\'s focus on "MONGODB-CR" mechanism.'),(0,r.kt)("p",null,"The second part is ",(0,r.kt)("strong",{parentName:"p"},"Authorization")," to select what a user can do or not once he is connected to the database. The documentation about authorization is available ",(0,r.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/core/authorization/"},"here"),"."),(0,r.kt)("p",null,"Let's now document how-to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an Administrator User"),(0,r.kt)("li",{parentName:"ol"},"Create Application Users")),(0,r.kt)("p",null,"For each type of users I will show how to grant specific permissions."))}p.isMDXComponent=!0},31756:(t,e,o)=>{o.d(e,{Z:()=>n});const n=o.p+"assets/images/password-fc053174fc2f9406cb0b83d9f368c094.jpg"}}]);