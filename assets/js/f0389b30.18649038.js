"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[74120],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),b=o,g=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2946:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return b}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={title:"Use Private Actions with your Team",tags:["github","actions","automation","javascript"]},l=void 0,c={permalink:"/blog/2022/01/24/share-private-actions-enterprise",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2022-01-24-share-private-actions-enterprise.md",source:"@site/blog/2022-01-24-share-private-actions-enterprise.md",title:"Use Private Actions with your Team",description:"A long-awaited feature is now available on GitHub: share actions in your workflows in your enterprise from Internal Repositories \ud83e\udd16 !",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"actions",permalink:"/blog/tags/actions"},{label:"automation",permalink:"/blog/tags/automation"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:.735,truncated:!1,authors:[],prevItem:{title:"Getting Started with GitHub Releases",permalink:"/blog/2022/02/08/getting-started-with-github-releases"},nextItem:{title:"Write GitHub Action: Checks and Annotations API (Part 2)",permalink:"/blog/2021/11/07/how-to-write-a-github-action-annotation-api"}},p={authorsImageUrls:[]},u=[],m={toc:u};function b(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A long-awaited feature is now available on GitHub: share ",(0,a.kt)("strong",{parentName:"p"},"actions")," in your workflows in your enterprise from Internal Repositories \ud83e\udd16 !"),(0,a.kt)("p",null,"When a developer does not find a suitable GitHub Action in the ",(0,a.kt)("a",{parentName:"p",href:"http://github.com/marketplace"},"Marketplace"),', they can create their own, something that I have documented in the "',(0,a.kt)("a",{parentName:"p",href:"/blog/2021/10/30/how-to-write-a-github-action"},"How to Write Custom GitHub Action"),'" post.'),(0,a.kt)("p",null,"Until today, Actions had to be stored in a public repository, to allow other repositories to use them in workflows ",(0,a.kt)("em",{parentName:"p"},"(or take a complex approach)"),". This has changed \ud83c\udf89."),(0,a.kt)("p",null,"Now you can put your actions in an ",(0,a.kt)("a",{parentName:"p",href:"https://docs.github.com/en/enterprise-cloud@latest/repositories/creating-and-managing-repositories/about-repositories#about-internal-repositories"},"internal")," repository; repositories visible to your whole enterprise."),(0,a.kt)("p",null,'Once your repository visibility is set to "Internal", in the ',(0,a.kt)("strong",{parentName:"p"},"Settings")," pages, click in the ",(0,a.kt)("strong",{parentName:"p"},"Actions")," section and select the proper ",(0,a.kt)("strong",{parentName:"p"},"Access")," configuration:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"GitHub Actions Access",src:r(86841).Z})),(0,a.kt)("p",null,"The following video shows this feature in action:"),(0,a.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/IC58NsaiOuI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}b.isMDXComponent=!0},86841:function(e,t,r){t.Z=r.p+"assets/images/01-action-access-0963bddec60ab934f92635662808ba03.png"}}]);