"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[71934],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,g=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},54340:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return f}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={title:"Save MapR Streams messages into MapR DB JSON",categories:"kafka streams howto maprdb json mapr"},l=void 0,p={permalink:"/blog/2016/03/30/save-mapr-streams-messages-into-mapr-db-json",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2016-03-30-save-mapr-streams-messages-into-mapr-db-json.md",source:"@site/blog/2016-03-30-save-mapr-streams-messages-into-mapr-db-json.md",title:"Save MapR Streams messages into MapR DB JSON",description:"In this article you will learn how to create a MapR Streams Consumer that saves all the messages into a MapR-DB JSON Table.",date:"2016-03-30T00:00:00.000Z",formattedDate:"March 30, 2016",tags:[],readingTime:3.005,truncated:!0,authors:[],prevItem:{title:"Setting up Spark Dynamic Allocation on MapR",permalink:"/blog/2016/09/01/setting-up-spark-dynamic-allocation-on-mapr"},nextItem:{title:"Getting Started with MapR Streams",permalink:"/blog/2016/03/10/getting-started-with-mapr-streams"}},c={authorsImageUrls:[]},m=[],u={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article you will learn how to create a MapR Streams Consumer that saves all the messages into a ",(0,o.kt)("a",{parentName:"p",href:"http://maprdocs.mapr.com/51/#MapR-DB/JSON_DB/mapr_db_json_top.html"},"MapR-DB JSON Table"),"."))}f.isMDXComponent=!0}}]);