"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[34818],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>b});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(i),b=o,m=g["".concat(p,".").concat(b)]||g[b]||u[b]||a;return i?n.createElement(m,r(r({ref:t},c),{},{components:i})):n.createElement(m,r({ref:t},c))}));function b(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<a;s++)r[s]=i[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},12019:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=i(87462),o=(i(67294),i(3905));const a={title:"Seamless Internationalization with GitHub Copilot",description:"How GitHub Copilot helped me translate my website in seconds",tags:["github","copilot","javascript","typescript","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-15/header.png"},r=void 0,l={permalink:"/blog/2023/12/15/github-copilot-internationalisation",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2023-12-15-github-copilot-internationalisation.md",source:"@site/blog/2023-12-15-github-copilot-internationalisation.md",title:"Seamless Internationalization with GitHub Copilot",description:"How GitHub Copilot helped me translate my website in seconds",date:"2023-12-15T00:00:00.000Z",formattedDate:"December 15, 2023",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"copilot",permalink:"/blog/tags/copilot"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"typescript",permalink:"/blog/tags/typescript"},{label:"coding with copilot",permalink:"/blog/tags/coding-with-copilot"}],readingTime:.985,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Seamless Internationalization with GitHub Copilot",description:"How GitHub Copilot helped me translate my website in seconds",tags:["github","copilot","javascript","typescript","coding with copilot"],keywords:["github","copilot","javascript","typescript"],image:"/images/posts/2023-12-15/header.png"},prevItem:{title:"Quarkus: Database Projection with Panache",permalink:"/blog/2023/12/16/quarkus-database-projection-with-panache"},nextItem:{title:"Simplifying Data Generation with GitHub Copilot",permalink:"/blog/2023/12/13/github-copilot-assist-generate-test-data"}},p={authorsImageUrls:[]},s=[],c={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In the course of developing using NextJS, the integration of internationalization became a pivotal requirement on my checklist. The aim was to enable seamless translation of the application into multiple languages, leveraging the native i18n features provided by NextJS, as outlined in the ",(0,o.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/app/building-your-application/routing/internationalization"},"official documentation"),"."),(0,o.kt)("p",null,"To facilitate this, I organized a set of JSON files, each containing translations for the application in a specific language. For simplicity, I adopted a one-file-per-language approach, ensuring uniformity by maintaining identical keys across all files. The translation process involves replacing the values associated with each key."),(0,o.kt)("p",null,"To expedite this crucial task, I turned to GitHub Copilot for assistance. Witness the efficiency and precision of Copilot in action by watching the following video:"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/C-UfSQrmI_8?si=NVZepFaOa-9yl1Jb",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),(0,o.kt)("p",null,"Yet again, GitHub Copilot proves to be the hero of my coding journey \u2013 making my day, one efficient line of code at a time!"),(0,o.kt)("p",null,"PS: In this video I am translating the full file, but you can also translate a single key, or a set of keys, as you type them in the IDE, GitHub Copilot completion will propose you the translation."))}u.isMDXComponent=!0}}]);