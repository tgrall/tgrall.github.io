"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[60220],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(a),d=o,f=g["".concat(s,".").concat(d)]||g[d]||u[d]||n;return a?i.createElement(f,r(r({ref:t},p),{},{components:a})):i.createElement(f,r({ref:t},p))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<n;c++)r[c]=a[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}g.displayName="MDXCreateElement"},27206:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(87462),o=(a(67294),a(3905));const n={title:"Simplifying Data Generation with GitHub Copilot",description:"How GitHub Copilot is helping me to generate sample test data.",tags:["github","copilot","java","coding with copilot"],keywords:["github","copilot","java"]},r=void 0,l={permalink:"/blog/2023/12/13/github-copilot-assist-generate-test-data",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-13-github-copilot-assist-generate-test-data.md",source:"@site/blog/2023-12-13-github-copilot-assist-generate-test-data.md",title:"Simplifying Data Generation with GitHub Copilot",description:"How GitHub Copilot is helping me to generate sample test data.",date:"2023-12-13T00:00:00.000Z",formattedDate:"December 13, 2023",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"copilot",permalink:"/blog/tags/copilot"},{label:"java",permalink:"/blog/tags/java"},{label:"coding with copilot",permalink:"/blog/tags/coding-with-copilot"}],readingTime:1.04,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Simplifying Data Generation with GitHub Copilot",description:"How GitHub Copilot is helping me to generate sample test data.",tags:["github","copilot","java","coding with copilot"],keywords:["github","copilot","java"]},prevItem:{title:"Quarkus: Database Projection with Panache",permalink:"/blog/2023/12/16/quarkus-database-projection-with-panache"},nextItem:{title:"Quarkus: Default Values for Panache Entity Fields",permalink:"/blog/2023/12/09/quarkus-entity-default-value"}},s={authorsImageUrls:[]},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Copilot Helping ",src:a(57244).Z,width:"1704",height:"910"})),(0,o.kt)("p",null,'In the process of crafting an updated version of the product catalog for WindR.org, the need to generate sample data arises. Leveraging the power of Quarkus and Panache, I find myself tasked with creating entities that embody various technical specifications for "windsurfing boards" \u2013 encompassing attributes like size, volume, width, and more.'),(0,o.kt)("p",null,"Recognizing the potential tedium associated with manually creating this data, I turned to GitHub Copilot for assistance. The approach I took involved visiting a public website housing a comprehensive list of windsurfing boards. Here, I extracted the specifications of a specific board and seamlessly fed them into the GitHub Copilot Chat window. I then prompted Copilot to not only generate sample Java entities but also produce the corresponding SQL script for creating database rows."),(0,o.kt)("p",null,"The efficiency and effectiveness of GitHub Copilot in this scenario are showcased in the accompanying video. Witness firsthand how this tool streamlines the often laborious task of data generation, saving valuable time and effort in the development process:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/XEE7mi3ZGJU?si=6zPKgmxgS3NqwuID",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("p",null,"Yet again, GitHub Copilot proves to be the hero of my coding journey \u2013 making my day, one efficient line of code at a time!"))}u.isMDXComponent=!0},57244:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/header-ffee6a76691d15070f0fa68998a2da5c.png"}}]);