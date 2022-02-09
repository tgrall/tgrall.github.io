"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[47342],{3905:function(t,e,o){o.d(e,{Zo:function(){return c},kt:function(){return h}});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var s=n.createContext({}),u=function(t){var e=n.useContext(s),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},c=function(t){var e=u(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=u(o),h=a,f=m["".concat(s,".").concat(h)]||m[h]||p[h]||r;return o?n.createElement(f,i(i({ref:e},c),{},{components:o})):n.createElement(f,i({ref:e},c))}));function h(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,i=new Array(r);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},59862:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={title:"How to Write Custom GitHub Action (Part 1)",tags:["github","actions","automation","javascript"]},s=void 0,u={permalink:"/blog/2021/10/30/how-to-write-a-github-action",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2021-10-30-how-to-write-a-github-action.md",source:"@site/blog/2021-10-30-how-to-write-a-github-action.md",title:"How to Write Custom GitHub Action (Part 1)",description:"Automation is a key element of modern software development and deployment. GitHub with GitHub Actions allows you to automate many tasks, starting with your continuous integration and continuous deployment... but GitHub Actions a lot more than a CI/CD, you can use it for provisioning your environments, automating some project management tasks. However, it is not the purpose of this post, where I want to focus on the development of your own Github Action!",date:"2021-10-30T00:00:00.000Z",formattedDate:"October 30, 2021",tags:[{label:"github",permalink:"/blog/tags/github"},{label:"actions",permalink:"/blog/tags/actions"},{label:"automation",permalink:"/blog/tags/automation"},{label:"javascript",permalink:"/blog/tags/javascript"}],readingTime:9.055,truncated:!0,authors:[],prevItem:{title:"Write GitHub Action: Checks and Annotations API (Part 2)",permalink:"/blog/2021/11/07/how-to-write-a-github-action-annotation-api"},nextItem:{title:"Simple caching service with Redis",permalink:"/blog/2020/05/16/simple-caching-service-with-redis"}},c={authorsImageUrls:[]},p=[],m={toc:p};function h(t){var e=t.components,l=(0,a.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Automation is a key element of modern software development and deployment. GitHub with GitHub Actions allows you to automate many tasks, starting with your ",(0,r.kt)("strong",{parentName:"p"},"continuous integration")," and ",(0,r.kt)("strong",{parentName:"p"},"continuous deployment"),"... but GitHub Actions a lot more than a CI/CD, you can use it for provisioning your environments, automating some project management tasks. However, it is not the purpose of this post, where I want to focus on the development of your own Github Action!"),(0,r.kt)("p",null,'An "Action" is the reusable component of a workflow, and when you create your automation you will start by searching the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/marketplace?type=actions"},"GitHub Marketplace")," to look for actions to achieve a specific task. In addition to the thousands of actions available on the marketplace, and available in open source communities, you can create your own actions. "),(0,r.kt)("p",null,'This blog post will guide you using a concrete example, through the steps to create your actions, and this is just "my version" of the official ',(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/creating-actions"},"Creating Actions")," documentation chapter."),(0,r.kt)("p",null,"Let's say for example that you want to enforce the fact that your repositories have always a ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md "),"and a ",(0,r.kt)("inlineCode",{parentName:"p"},"LICENSE")," file. And when the repository is not compliant with these rules the workflow should fail and provide clear information to the user."),(0,r.kt)("p",null,"The following screenshot shows messages and alerts raised by the actions during an integration workflow:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workflow Checks",src:o(72078).Z})),(0,r.kt)("p",null,"\ud83d\udcd5 In this first post, you will learn how to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an action"),(0,r.kt)("li",{parentName:"ol"},"Publish the action"),(0,r.kt)("li",{parentName:"ol"},"Use the action in a workflow"),(0,r.kt)("li",{parentName:"ol"},"Add some logic to control the workflow's success or failure.")),(0,r.kt)("p",null,"\ud83d\udcd7 In a second post, you will learn how to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create custom Checks"),(0,r.kt)("li",{parentName:"ol"},"Add some detailed annotation with reference to source code (lines) with error"),(0,r.kt)("li",{parentName:"ol"},"Deploy the action")),(0,r.kt)("p",null,'If you prefer a video version of it, take a look to "',(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/embed/kKbIEPsLj88"},"Build Your Own Action"),'" on YouTube.'),(0,r.kt)("p",null,"It is time now to dive into the example!"))}h.isMDXComponent=!0},72078:function(t,e,o){e.Z=o.p+"assets/images/001-checks-f08ed584e3c2e02bab7997770ecbfbc0.png"}}]);