"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[16606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),g=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=g(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=g(r),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var g=2;g<o;g++)s[g]=r[g];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},76055:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var a=r(87462),n=(r(67294),r(3905));const o={title:"Java: Using MessageFormat to Generate JSON",description:"How to use MessageFormat to generate JSON",tags:["java"],keywords:["java"],image:"https://tgrall.github.io/images/posts/2023-12-21-java-generating-json-with-messageformat/header.png",date:new Date("2023-12-21T12:34:56.000Z")},s=void 0,i={permalink:"/blog/2023/12/21/java-generating-json-with-messageformat",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-21-java-generating-json-with-messageformat.md",source:"@site/blog/2023-12-21-java-generating-json-with-messageformat.md",title:"Java: Using MessageFormat to Generate JSON",description:"How to use MessageFormat to generate JSON",date:"2023-12-21T12:34:56.000Z",formattedDate:"December 21, 2023",tags:[{label:"java",permalink:"/blog/tags/java"}],readingTime:1.275,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Java: Using MessageFormat to Generate JSON",description:"How to use MessageFormat to generate JSON",tags:["java"],keywords:["java"],image:"https://tgrall.github.io/images/posts/2023-12-21-java-generating-json-with-messageformat/header.png",date:"2023-12-21T12:34:56.000Z"},prevItem:{title:"Quarkus: Simplifying Cloud File Uploads",permalink:"/blog/2023/12/24/quarkus-uploading-image-to-the-cloud"},nextItem:{title:"Creating a Typescript Class from a JSON file",permalink:"/blog/2023/12/18/github-copilot-typescript-class-from-json"}},l={authorsImageUrls:[]},g=[],c={toc:g};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Java: Using MessageFormat to Generate JSON",src:r(85681).Z,width:"1200",height:"628"})),(0,n.kt)("p",null,"As developers, we often encounter situations where we need to generate a JSON string for debugging purposes, especially when dealing with REST services. While frameworks like Spring Boot or Quarkus typically handle this task seamlessly, there are instances where manual intervention is required."),(0,n.kt)("p",null,"In a recent scenario, I found myself faced with this challenge. Traditionally, I had relied on string concatenation for such tasks. However, eager to explore more efficient alternatives, I turned to Java's java.text.MessageFormat to simplify the process."))}p.isMDXComponent=!0},85681:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/header-0fba131892d0472042fe256753a3e577.png"}}]);