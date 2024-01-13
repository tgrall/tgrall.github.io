"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[44905],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var o=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,l=function(e,t){if(null==e)return{};var r,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),g=l,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||n;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var p=2;p<n;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59018:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(87462),l=(r(67294),r(3905));const n={title:"Redis Rolling Upgrade on Pivotal Cloud Foundry (PCF)",tags:["redis","nosql","cloud","cf","pivotal","java","cluster","failover","ha"]},a=void 0,i={permalink:"/blog/2019/09/19/redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2019-09-19-redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf.md",source:"@site/blog/2019-09-19-redis-rolling-upgrade-on-pivotal-cloud-foundry-pcf.md",title:"Redis Rolling Upgrade on Pivotal Cloud Foundry (PCF)",description:"Introduction",date:"2019-09-19T00:00:00.000Z",formattedDate:"September 19, 2019",tags:[{label:"redis",permalink:"/blog/tags/redis"},{label:"nosql",permalink:"/blog/tags/nosql"},{label:"cloud",permalink:"/blog/tags/cloud"},{label:"cf",permalink:"/blog/tags/cf"},{label:"pivotal",permalink:"/blog/tags/pivotal"},{label:"java",permalink:"/blog/tags/java"},{label:"cluster",permalink:"/blog/tags/cluster"},{label:"failover",permalink:"/blog/tags/failover"},{label:"ha",permalink:"/blog/tags/ha"}],readingTime:6.59,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Redis Rolling Upgrade on Pivotal Cloud Foundry (PCF)",tags:["redis","nosql","cloud","cf","pivotal","java","cluster","failover","ha"]},prevItem:{title:"How to use SSL/TLS with Redis Enterprise",permalink:"/blog/2020/01/02/how-to-use-ssl-slash-tls-with-redis-enterprise"},nextItem:{title:"Multi-Nodes Redis Cluster with Docker",permalink:"/blog/2019/09/04/multi-nodes-redis-cluster-with-docker"}},s={authorsImageUrls:[]},p=[{value:"Introduction",id:"introduction",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"In this article, I will show you how to update Redis Enterprise on PCF and see how Redis Enterprise cluster will guarantee a service continuity using out of the box failover."),(0,l.kt)("p",null,"If you need a Cloud Foundry application that calls Redis automatically you can use this ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tgrall/simple-redis-spring-demo-pcf"},"project simple-redis-spring-demo-pcf"),"."),(0,l.kt)("p",null,"For this article, I will upgrade ",(0,l.kt)("a",{parentName:"p",href:"https://docs.pivotal.io/partners/redis-labs-enterprise-pack/index.html"},"Redis Enterprise for PCF")," from the version v5.4.2400147 to the latest version, currently v5.4.40700169."))}u.isMDXComponent=!0}}]);