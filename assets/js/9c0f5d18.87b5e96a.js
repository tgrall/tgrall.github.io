"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[25208],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),g=n,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50577:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={title:"Grails 0.4 Released...",categories:"groovy grails"},l=void 0,i={permalink:"/blog/2007/01/31/grails-0-dot-4-released-dot-dot-dot",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-01-31-grails-0-dot-4-released-dot-dot-dot.md",source:"@site/blog/2007-01-31-grails-0-dot-4-released-dot-dot-dot.md",title:"Grails 0.4 Released...",description:"The Grails developer team is pleased to announce the release 0.4 of Grails. The release can be",date:"2007-01-31T00:00:00.000Z",formattedDate:"January 31, 2007",tags:[],readingTime:.72,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Grails 0.4 Released...",categories:"groovy grails"},prevItem:{title:"New Groovy Plugin for Oracle JDeveloper 10g",permalink:"/blog/2007/02/07/new-groovy-plugin-for-oracle-jdeveloper-10g"},nextItem:{title:"Oracle JDeveloper (10.1.3.2) / WebCenter available for download",permalink:"/blog/2007/01/30/oracle-jdeveloper-10-dot-1-3-dot-2-slash-webcenter-available-for-download"}},s={authorsImageUrls:[]},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://grails.codehaus.org/images/grails_logo.jpg",alt:null}),"The Grails developer team is pleased to announce the release 0.4 of ",(0,n.kt)("a",{parentName:"p",href:"http://grails.codehaus.org/"},"Grails"),". The release can be\nobtained from the ",(0,n.kt)("a",{parentName:"p",href:"http://grails.org/Download"},"downloads page"),"."),(0,n.kt)("p",null,"Notable improvements include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ORM enhancements with support for more relationship types, easy transactions and criteria building, constraints to SQL schema mappings, and upgrade to Hibernate 3.2"),(0,n.kt)("li",{parentName:"ul"},"All-new non-invasive plugin system for writing reusable plugins for Grails applications"),(0,n.kt)("li",{parentName:"ul"},"Greater Spring integration thanks to a new syntax for scripting Spring (",(0,n.kt)("a",{parentName:"li",href:"http://grails.org/Spring+Bean+Builder"},"http://grails.org/Spring+Bean+Builder"),") and an upgrade to Spring 2.0"),(0,n.kt)("li",{parentName:"ul"},"Easier unit testing of controllers and custom taglibs"),(0,n.kt)("li",{parentName:"ul"},"Validation improvements, including support for inherited constraints and simplified size constraint handling"),(0,n.kt)("li",{parentName:"ul"},"Automatic encoding of unsafe HTML characters and URL parameters in all scaffolding and taglibs"),(0,n.kt)("li",{parentName:"ul"},"Fixes to support Grails on more containers such as GlassFish and over 200 issues and bugs resolved in JIRA"),(0,n.kt)("li",{parentName:"ul"},"Grails now ships with Groovy 1.0!")))}u.isMDXComponent=!0}}]);