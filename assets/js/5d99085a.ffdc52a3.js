"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[42261],{3905:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,o(o({ref:e},s),{},{components:r})):n.createElement(d,o({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9142:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],p={title:"Getting started with Apache Flink and Mapr Streams",categories:"streaming flink mapr"},l=void 0,c={permalink:"/blog/2016/10/17/getting-started-with-apache-flink-and-mapr-streams",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2016-10-17-getting-started-with-apache-flink-and-mapr-streams.md",source:"@site/blog/2016-10-17-getting-started-with-apache-flink-and-mapr-streams.md",title:"Getting started with Apache Flink and Mapr Streams",description:"Introduction",date:"2016-10-17T00:00:00.000Z",formattedDate:"October 17, 2016",tags:[],readingTime:6.67,truncated:!0,authors:[],prevItem:{title:"Getting Started with MQTT and Java",permalink:"/blog/2017/01/02/getting-started-with-mqtt"},nextItem:{title:"Getting started with Apache Flink and Kafka",permalink:"/blog/2016/10/12/getting-started-with-apache-flink-and-kafka"}},s={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",children:[]}],f={toc:u};function m(t){var e=t.components,r=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," is an open source platform for distributed stream and batch data processing. Flink is a streaming data flow engine with several APIs to create data streams oriented application."),(0,i.kt)("p",null,"It is very common for Flink applications to use ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Apache Kafka")," for data input and output."),(0,i.kt)("p",null,"This article will guide you into  the steps to use Apache Flink with ",(0,i.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-streams"},"MapR Streams"),". MapR Streams is a distributed messaging system for streaming event data at scale, and it\u2019s integrated into the ",(0,i.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-converged-data-platform"},"MapR Converged Data Platform"),", based on the Apache Kafka API (0.9.0),\nthis article use the same code and approach than the ",(0,i.kt)("a",{parentName:"p",href:"http://tgrall.github.io/blog/2016/10/12/getting-started-with-apache-flink-and-kafka/"},"Flink and Kafka Getting Started"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://tgrall.github.io/images/posts/flink-kafka/flink-mapr-streams.png",alt:"MapR Streams and Flink"}),"."))}m.isMDXComponent=!0}}]);