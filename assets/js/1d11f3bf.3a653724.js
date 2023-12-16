"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[93848],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=n,b=d["".concat(s,".").concat(h)]||d[h]||p[h]||o;return a?r.createElement(b,i(i({ref:t},u),{},{components:a})):r.createElement(b,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"Quarkus: Database Projection with Panache",description:"Learn how to use Database Projection with Panache.",tags:["quarkus","panache","java","orm"],keywords:["quarkus","panache","java","orm"]},i=void 0,l={permalink:"/blog/2023/12/16/quarkus-database-projection-with-panache",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-16-quarkus-database-projection-with-panache.md",source:"@site/blog/2023-12-16-quarkus-database-projection-with-panache.md",title:"Quarkus: Database Projection with Panache",description:"Learn how to use Database Projection with Panache.",date:"2023-12-16T00:00:00.000Z",formattedDate:"December 16, 2023",tags:[{label:"quarkus",permalink:"/blog/tags/quarkus"},{label:"panache",permalink:"/blog/tags/panache"},{label:"java",permalink:"/blog/tags/java"},{label:"orm",permalink:"/blog/tags/orm"}],readingTime:4.79,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Quarkus: Database Projection with Panache",description:"Learn how to use Database Projection with Panache.",tags:["quarkus","panache","java","orm"],keywords:["quarkus","panache","java","orm"]},nextItem:{title:"Simplifying Data Generation with GitHub Copilot",permalink:"/blog/2023/12/13/github-copilot-assist-generate-test-data"}},s={authorsImageUrls:[]},c=[{value:"Understanding the data model",id:"understanding-the-data-model",level:3}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Quarkus: Database Projection with Panache",src:a(90739).Z,width:"1200",height:"628"})),(0,n.kt)("p",null,"Welcome back to the second installment of our exploration into Quarkus and Panache! In the previous blog post, we delved into ",(0,n.kt)("a",{parentName:"p",href:"/blog/2023/12/09/quarkus-entity-default-value"},"setting default values for Panache entity fields"),". Now, as we continue refining the WindR.org website with Quarkus integration, our primary focus shifts to implementing ",(0,n.kt)("strong",{parentName:"p"},"Database Projection with Panache"),"."),(0,n.kt)("p",null,"Code Example on GitHub:"),(0,n.kt)("p",null,"To accompany this discussion, I've published the complete code example on GitHub, providing you with a hands-on reference for learning and experimentation."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/tgrall/learning-quarkus/tree/main/projection-with-panache"},"GitHub Repository: Learning Quarkus: Database Projection with Panache")),(0,n.kt)("h3",{id:"understanding-the-data-model"},"Understanding the data model"),(0,n.kt)("p",null,"For this illustrative example, we'll work with a straightforward data model consisting of two tables: 'boards' and 'brands.' The 'boards' table contains a list of windsurfing boards, while the 'brands' table serves as a reference, linked to the 'boards' table through a foreign key relationship."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Quarkus: Default Values for Panache Entity Fields",src:a(82073).Z,width:"1047",height:"430"})))}p.isMDXComponent=!0},82073:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/database-model-c2db7ed0a65fe13a8ae7e40aea6d8dc4.png"},90739:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/header-42bc2166b984a752399c6dff775136d3.png"}}]);