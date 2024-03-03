"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[71290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=r,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||n;return a?o.createElement(m,i(i({ref:t},s),{},{components:a})):o.createElement(m,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(87462),r=(a(67294),a(3905));const n={title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",description:"See how Copilot has helped me to extract a value from a list of objects and update the state of a React component.",tags:["github","copilot","javascript","typescript","next","react","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-27/header.png",date:"2023-12-27T10:12"},i=void 0,l={permalink:"/blog/2023/12/27/github-copilot-update-react-state",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-27-github-copilot-update-react-state.md",source:"@site/blog/2023-12-27-github-copilot-update-react-state.md",title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",description:"See how Copilot has helped me to extract a value from a list of objects and update the state of a React component.",date:"2023-12-27T10:12:00.000Z",formattedDate:"December 27, 2023",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"copilot",permalink:"/blog/tags/copilot"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"next",permalink:"/blog/tags/next"},{label:"react",permalink:"/blog/tags/react"},{label:"coding with copilot",permalink:"/blog/tags/coding-with-copilot"}],readingTime:.705,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",description:"See how Copilot has helped me to extract a value from a list of objects and update the state of a React component.",tags:["github","copilot","javascript","typescript","next","react","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-27/header.png",date:"2023-12-27T10:12"},prevItem:{title:"Resize multiple Next.js components with GitHub Copilot",permalink:"/blog/2023/12/28/github-copilot-resize-nextjs-components"},nextItem:{title:"Quarkus: Simplifying Cloud File Uploads",permalink:"/blog/2023/12/24/quarkus-uploading-image-to-the-cloud"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In my Next.js project, I encountered a challenge while working on a form that involved managing a list of values. Being a beginner, I found myself unsure about the logic required to extract the selected value from the list and update the state of the component."),(0,r.kt)("p",null,"Fortunately, as I delved into coding, GitHub Copilot came to my aid with a suggested code snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'if (field === "brand.id") {\n    let brand = brands.find(brand => brand.id === value);\n    setBoard({\n        ...board,\n        brand: brand\n    });\n    return;\n}\n')),(0,r.kt)("p",null,"Experience the efficiency and precision of Copilot in action by watching the video demonstration below:"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/mctuEXSbQsg?si=hv953HevedK3aQWY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,r.kt)("p",null,"Yet again, GitHub Copilot proves to be the hero of my coding journey \u2013 making my day, one efficient line of code at a time!"))}u.isMDXComponent=!0}}]);