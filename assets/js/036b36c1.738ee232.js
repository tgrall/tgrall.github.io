"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[44905],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59018:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),i=["components"],a={title:"Redis Rolling Upgrade on Pivotal Cloud Foundry (PCF)",tags:["redis","nosql","cloud","cf","pivotal","java","cluster","failover","ha"]},u=void 0,c={permalink:"/blog/2019/09/19/redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2019-09-19-redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf.md",source:"@site/blog/2019-09-19-redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf.md",title:"Redis Rolling Upgrade on Pivotal Cloud Foundry (PCF)",description:"Introduction",date:"2019-09-19T00:00:00.000Z",formattedDate:"September 19, 2019",tags:[{label:"redis",permalink:"/blog/tags/redis"},{label:"nosql",permalink:"/blog/tags/nosql"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"cf",permalink:"/blog/tags/cf"},{label:"pivotal",permalink:"/blog/tags/pivotal"},{label:"java",permalink:"/blog/tags/java"},{label:"cluster",permalink:"/blog/tags/cluster"},{label:"failover",permalink:"/blog/tags/failover"},{label:"ha",permalink:"/blog/tags/ha"}],readingTime:6.59,truncated:!0,authors:[],prevItem:{title:"How to use SSL/TLS with Redis Enterprise",permalink:"/blog/2020/01/02/how-to-use-ssl-slash-tls-with-redis-enterprise"},nextItem:{title:"Multi-Nodes Redis Cluster with Docker",permalink:"/blog/2019/09/04/multi-nodes-redis-cluster-with-docker"}},s={authorsImageUrls:[]},p=[{value:"Introduction",id:"introduction",children:[]}],d={toc:p};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"In this article, I will show you how to update Redis Enterprise on PCF and see how Redis Enterprise cluster will guarantee a service continuity using out of the box failover."),(0,l.kt)("p",null,"If you need a Cloud Foundry application that calls Redis automatically you can use this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tgrall/simple-redis-spring-demo-pcf"},"project simple-redis-spring-demo-pcf"),"."),(0,l.kt)("p",null,"For this article, I will upgrade ",(0,l.kt)("a",{parentName:"p",href:"https://docs.pivotal.io/partners/redis-labs-enterprise-pack/index.html"},"Redis Enterprise for PCF")," from the version v5.4.2400147 to the latest version, currently v5.4.40700169."))}f.isMDXComponent=!0}}]);