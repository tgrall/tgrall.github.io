"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[66004],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>b});var r=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,o=function(e,t){if(null==e)return{};var i,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var i=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(i),b=o,m=g["".concat(c,".").concat(b)]||g[b]||u[b]||n;return i?r.createElement(m,a(a({ref:t},s),{},{components:i})):r.createElement(m,a({ref:t},s))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=i.length,a=new Array(n);a[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<n;p++)a[p]=i[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}g.displayName="MDXCreateElement"},23880:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=i(87462),o=(i(67294),i(3905));const n={title:"Accelerating REST Development with GitHub Copilot",description:"How GitHub Copilot helped me write a REST Client in seconds",tags:["github","copilot","javascript","typescript","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-11-github-copilot-assist-writing-a-rest-client/header.png"},a=void 0,l={permalink:"/blog/2023/12/11/github-copilot-assist-writing-a-rest-client",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-11-github-copilot-assist-writing-a-rest-client.md",source:"@site/blog/2023-12-11-github-copilot-assist-writing-a-rest-client.md",title:"Accelerating REST Development with GitHub Copilot",description:"How GitHub Copilot helped me write a REST Client in seconds",date:"2023-12-11T00:00:00.000Z",formattedDate:"December 11, 2023",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"copilot",permalink:"/blog/tags/copilot"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"coding with copilot",permalink:"/blog/tags/coding-with-copilot"}],readingTime:.665,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Accelerating REST Development with GitHub Copilot",description:"How GitHub Copilot helped me write a REST Client in seconds",tags:["github","copilot","javascript","typescript","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-11-github-copilot-assist-writing-a-rest-client/header.png"},prevItem:{title:"Simplifying Data Generation with GitHub Copilot",permalink:"/blog/2023/12/13/github-copilot-assist-generate-test-data"},nextItem:{title:"Quarkus: Default Values for Panache Entity Fields",permalink:"/blog/2023/12/09/quarkus-entity-default-value"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the process of constructing a product catalog within NextJS, I found myself in need of seamlessly interfacing with my backend using REST APIs, each adorned with a variety of URIs and parameters."),(0,o.kt)("p",null,"The typical structure of these URLs, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/v1/products?category=shoes&color=red&size=10"),", prompted me to harness the power of GitHub Copilot to expedite the creation of functions with the appropriate parameters. Copilot not only assists in generating the function but also crafts the necessary fetch code for calling the API with precision."),(0,o.kt)("p",null,"Watch this video to witness the rapid development in action:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/-WWwTHudP4I?si=-TrVAxgW_OjtF2WB",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("p",null,"Yet again, GitHub Copilot proves to be the hero of my coding journey \u2013 making my day, one efficient line of code at a time!"))}u.isMDXComponent=!0}}]);