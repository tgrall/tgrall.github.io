"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[71934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=i(r),f=n,g=u["".concat(p,".").concat(f)]||u[f]||c[f]||o;return r?a.createElement(g,s(s({ref:t},m),{},{components:r})):a.createElement(g,s({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={title:"Save MapR Streams messages into MapR DB JSON",categories:"kafka streams howto maprdb json mapr"},s=void 0,l={permalink:"/blog/2016/03/30/save-mapr-streams-messages-into-mapr-db-json",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2016-03-30-save-mapr-streams-messages-into-mapr-db-json.md",source:"@site/blog/2016-03-30-save-mapr-streams-messages-into-mapr-db-json.md",title:"Save MapR Streams messages into MapR DB JSON",description:"In this article you will learn how to create a MapR Streams Consumer that saves all the messages into a MapR-DB JSON Table.",date:"2016-03-30T00:00:00.000Z",formattedDate:"March 30, 2016",tags:[],readingTime:3.005,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Save MapR Streams messages into MapR DB JSON",categories:"kafka streams howto maprdb json mapr"},prevItem:{title:"Setting up Spark Dynamic Allocation on MapR",permalink:"/blog/2016/09/01/setting-up-spark-dynamic-allocation-on-mapr"},nextItem:{title:"Getting Started with MapR Streams",permalink:"/blog/2016/03/10/getting-started-with-mapr-streams"}},p={authorsImageUrls:[]},i=[],m={toc:i};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this article you will learn how to create a MapR Streams Consumer that saves all the messages into a ",(0,n.kt)("a",{parentName:"p",href:"http://maprdocs.mapr.com/51/#MapR-DB/JSON_DB/mapr_db_json_top.html"},"MapR-DB JSON Table"),"."))}c.isMDXComponent=!0}}]);