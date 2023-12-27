"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[71290],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(a),g=o,b=d["".concat(c,".").concat(g)]||d[g]||u[g]||n;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function g(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",description:"See how Copilot has helped me to extract a value from a list of objects and update the state of a React component.",tags:["github","copilot","javascript","typescript","next","react","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-27/header.png",date:"2023-12-27T10:12"},i=void 0,l={permalink:"/blog/2023/12/27/github-copilot-update-react-state",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-27-github-copilot-update-react-state.md",source:"@site/blog/2023-12-27-github-copilot-update-react-state.md",title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",description:"See how Copilot has helped me to extract a value from a list of objects and update the state of a React component.",date:"2023-12-27T10:12:00.000Z",formattedDate:"December 27, 2023",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"copilot",permalink:"/blog/tags/copilot"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"next",permalink:"/blog/tags/next"},{label:"react",permalink:"/blog/tags/react"},{label:"coding with copilot",permalink:"/blog/tags/coding-with-copilot"}],readingTime:.705,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Seamless React State Updates: Mastering Lists with GitHub Copilot",description:"See how Copilot has helped me to extract a value from a list of objects and update the state of a React component.",tags:["github","copilot","javascript","typescript","next","react","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-27/header.png",date:"2023-12-27T10:12"},nextItem:{title:"Quarkus: Simplifying Cloud File Uploads",permalink:"/blog/2023/12/24/quarkus-uploading-image-to-the-cloud"}},c={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In my Next.js project, I encountered a challenge while working on a form that involved managing a list of values. Being a beginner, I found myself unsure about the logic required to extract the selected value from the list and update the state of the component."),(0,o.kt)("p",null,"Fortunately, as I delved into coding, GitHub Copilot came to my aid with a suggested code snippet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'if (field === "brand.id") {\n    let brand = brands.find(brand => brand.id === value);\n    setBoard({\n        ...board,\n        brand: brand\n    });\n    return;\n}\n')),(0,o.kt)("p",null,"Experience the efficiency and precision of Copilot in action by watching the video demonstration below:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/mctuEXSbQsg?si=hv953HevedK3aQWY",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("p",null,"Yet again, GitHub Copilot proves to be the hero of my coding journey \u2013 making my day, one efficient line of code at a time!"))}u.isMDXComponent=!0}}]);