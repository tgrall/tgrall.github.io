"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[83995],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),h=n,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={title:"How to use SSL/TLS with Redis Enterprise",tags:["nosql","redis","security","java","node","python","authentication","ssl"]},i=void 0,l={permalink:"/blog/2020/01/02/how-to-use-ssl-slash-tls-with-redis-enterprise",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2020-01-02-how-to-use-ssl-slash-tls-with-redis-enterprise.md",source:"@site/blog/2020-01-02-how-to-use-ssl-slash-tls-with-redis-enterprise.md",title:"How to use SSL/TLS with Redis Enterprise",description:"In this article, I will explain how to secure your Redis databases using SSL (Secure Sockets Layer). In production, it is a good practice to use SSL to protect the data that are moving between various computers (client applications and Redis servers). Transport Level Security (TLS) guarantees that only allowed applications/computers are connected to the database, and also that data is not viewed or altered by a middle man process.",date:"2020-01-02T00:00:00.000Z",formattedDate:"January 2, 2020",tags:[{label:"nosql",permalink:"/blog/tags/nosql"},{label:"redis",permalink:"/blog/tags/redis"},{label:"security",permalink:"/blog/tags/security"},{label:"java",permalink:"/blog/tags/java"},{label:"node",permalink:"/blog/tags/node"},{label:"python",permalink:"/blog/tags/python"},{label:"authentication",permalink:"/blog/tags/authentication"},{label:"ssl",permalink:"/blog/tags/ssl"}],readingTime:6,hasTruncateMarker:!0,authors:[],frontMatter:{title:"How to use SSL/TLS with Redis Enterprise",tags:["nosql","redis","security","java","node","python","authentication","ssl"]},prevItem:{title:"Simple caching service with Redis",permalink:"/blog/2020/05/16/simple-caching-service-with-redis"},nextItem:{title:"Redis Rolling Upgrade on Pivotal Cloud Foundry (PCF)",permalink:"/blog/2019/09/19/redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf"}},s={authorsImageUrls:[]},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(77973).Z,width:"900",height:"600"})),(0,n.kt)("p",null,"In this article, I will explain how to secure your Redis databases using SSL (Secure Sockets Layer). In production, it is a good practice to use SSL to protect the data that are moving between various computers (client applications and Redis servers). Transport Level Security (TLS) guarantees that only allowed applications/computers are connected to the database, and also that data is not viewed or altered by a middle man process."),(0,n.kt)("p",null,"You can secure the connections between your client applications and Redis cluster using:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One-Way SSL: the client (your application) get the certificate from the server (Redis cluster), validate it, and then all communications are encrypted"),(0,n.kt)("li",{parentName:"ul"},"Two-Way SSL: (aka mutual SSL) here both the client and the server authenticate each other and validate that both ends are trusted.")),(0,n.kt)("p",null,"In this article, I will focus on the Two-Way SSL, and using Redis Enterprise."))}u.isMDXComponent=!0},77973:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/000_header-1e7e2d24525b6d38705cdbca9b008b78.jpeg"}}]);