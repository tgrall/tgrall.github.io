"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[8288],{3905:(t,e,o)=>{o.d(e,{Zo:()=>p,kt:()=>g});var r=o(67294);function i(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function n(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){i(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,r,i=function(t,e){if(null==t)return{};var o,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(i[o]=t[o]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(i[o]=t[o])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var o=t.components,i=t.mdxType,n=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=s(o),g=i,d=m["".concat(c,".").concat(g)]||m[g]||u[g]||n;return o?r.createElement(d,a(a({ref:e},p),{},{components:o})):r.createElement(d,a({ref:e},p))}));function g(t,e){var o=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=o.length,a=new Array(n);a[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var s=2;s<n;s++)a[s]=o[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},29886:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var r=o(87462),i=(o(67294),o(3905));const n={title:"Creating a CSV from SQL statements with GitHub Copilot",description:"GitHub Copilot assists in creating a CSV from an SQL statements.",tags:["coding with copilot","github","copilot","python","images"],keywords:["coding with copilot","github","copilot","sql","csv"],image:"/images/posts/2024-02-10/header.png",date:"2024-02-10T06:12"},a=void 0,l={permalink:"/blog/2024/02/10/github-copilot-create-csv-from-sql",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2024-02-10-github-copilot-create-csv-from-sql.md",source:"@site/blog/2024-02-10-github-copilot-create-csv-from-sql.md",title:"Creating a CSV from SQL statements with GitHub Copilot",description:"GitHub Copilot assists in creating a CSV from an SQL statements.",date:"2024-02-10T06:12:00.000Z",formattedDate:"February 10, 2024",tags:[{label:"coding with copilot",permalink:"/blog/tags/coding-with-copilot"},{label:"github",permalink:"/blog/tags/github"},{label:"copilot",permalink:"/blog/tags/copilot"},{label:"python",permalink:"/blog/tags/python"},{label:"images",permalink:"/blog/tags/images"}],readingTime:.65,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Creating a CSV from SQL statements with GitHub Copilot",description:"GitHub Copilot assists in creating a CSV from an SQL statements.",tags:["coding with copilot","github","copilot","python","images"],keywords:["coding with copilot","github","copilot","sql","csv"],image:"/images/posts/2024-02-10/header.png",date:"2024-02-10T06:12"},nextItem:{title:"Rapid Prototyping with GitHub Copilot: A Quick Journey into Image Processing",permalink:"/blog/2024/01/13/github-copilot-implementing-an-ide-in-mn"}},c={authorsImageUrls:[]},s=[],p={toc:s};function u(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"During one of my test I had to create some CSV files, and needed some data. I could have used Copilot directly to generate random data, but I wanted to test something else. "),(0,i.kt)("p",null,"In my SpringBoot PetClinic application, I have a SQL file that contains some data, and I wanted to use this data to create a CSV file, directly from the insert statements without any code."),(0,i.kt)("p",null,"The Copilot then effortlessly executed the specified tasks, as demonstrated in the accompanying video:"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/_YFS7Wbzurc?si=Hy7sKxxPNpzIjS4b",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",fullscreen:!0}),(0,i.kt)("p",null,"Note, I could have also use Copilot to do it directly from the database, but just wanted to see if Copilot could extract the data from the SQL file, and it did it!.."))}u.isMDXComponent=!0}}]);