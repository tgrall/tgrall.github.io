"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[42261],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),s=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),d=s(a),u=n,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return a?r.createElement(f,o(o({ref:e},c),{},{components:a})):r.createElement(f,o({ref:e},c))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in e)hasOwnProperty.call(e,l)&&(p[l]=e[l]);p.originalType=t,p.mdxType="string"==typeof t?t:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9142:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Getting started with Apache Flink and Mapr Streams",categories:"streaming flink mapr"},o=void 0,p={permalink:"/blog/2016/10/17/getting-started-with-apache-flink-and-mapr-streams",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2016-10-17-getting-started-with-apache-flink-and-mapr-streams.md",source:"@site/blog/2016-10-17-getting-started-with-apache-flink-and-mapr-streams.md",title:"Getting started with Apache Flink and Mapr Streams",description:"Introduction",date:"2016-10-17T00:00:00.000Z",formattedDate:"October 17, 2016",tags:[],readingTime:6.67,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Getting started with Apache Flink and Mapr Streams",categories:"streaming flink mapr"},prevItem:{title:"Getting Started with MQTT and Java",permalink:"/blog/2017/01/02/getting-started-with-mqtt"},nextItem:{title:"Getting started with Apache Flink and Kafka",permalink:"/blog/2016/10/12/getting-started-with-apache-flink-and-kafka"}},l={authorsImageUrls:[]},s=[{value:"Introduction",id:"introduction",level:2}],c={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," is an open source platform for distributed stream and batch data processing. Flink is a streaming data flow engine with several APIs to create data streams oriented application."),(0,n.kt)("p",null,"It is very common for Flink applications to use ",(0,n.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Apache Kafka")," for data input and output."),(0,n.kt)("p",null,"This article will guide you into  the steps to use Apache Flink with ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-streams"},"MapR Streams"),". MapR Streams is a distributed messaging system for streaming event data at scale, and it\u2019s integrated into the ",(0,n.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-converged-data-platform"},"MapR Converged Data Platform"),", based on the Apache Kafka API (0.9.0),\nthis article use the same code and approach than the ",(0,n.kt)("a",{parentName:"p",href:"http://tgrall.github.io/blog/2016/10/12/getting-started-with-apache-flink-and-kafka/"},"Flink and Kafka Getting Started"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://tgrall.github.io/images/posts/flink-kafka/flink-mapr-streams.png",alt:"MapR Streams and Flink"}),"."))}m.isMDXComponent=!0}}]);