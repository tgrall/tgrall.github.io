(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[25208],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=a,f=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50577:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return g}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={title:"Grails 0.4 Released...",categories:"groovy grails"},s=void 0,p={permalink:"/blog/2007/01/31/grails-0-dot-4-released-dot-dot-dot",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-01-31-grails-0-dot-4-released-dot-dot-dot.md",source:"@site/blog/2007-01-31-grails-0-dot-4-released-dot-dot-dot.md",title:"Grails 0.4 Released...",description:"The Grails developer team is pleased to announce the release 0.4 of Grails. The release can be",date:"2007-01-31T00:00:00.000Z",formattedDate:"January 31, 2007",tags:[],readingTime:.72,truncated:!1,authors:[],prevItem:{title:"New Groovy Plugin for Oracle JDeveloper 10g",permalink:"/blog/2007/02/07/new-groovy-plugin-for-oracle-jdeveloper-10g"},nextItem:{title:"Oracle JDeveloper (10.1.3.2) / WebCenter available for download",permalink:"/blog/2007/01/30/oracle-jdeveloper-10-dot-1-3-dot-2-slash-webcenter-available-for-download"}},c={authorsImageUrls:[]},u=[],d={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://grails.codehaus.org/images/grails_logo.jpg",alt:null}),"The Grails developer team is pleased to announce the release 0.4 of ",(0,o.kt)("a",{parentName:"p",href:"http://grails.codehaus.org/"},"Grails"),". The release can be\nobtained from the ",(0,o.kt)("a",{parentName:"p",href:"http://grails.org/Download"},"downloads page"),"."),(0,o.kt)("p",null,"Notable improvements include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ORM enhancements with support for more relationship types, easy transactions and criteria building, constraints to SQL schema mappings, and upgrade to Hibernate 3.2"),(0,o.kt)("li",{parentName:"ul"},"All-new non-invasive plugin system for writing reusable plugins for Grails applications"),(0,o.kt)("li",{parentName:"ul"},"Greater Spring integration thanks to a new syntax for scripting Spring (",(0,o.kt)("a",{parentName:"li",href:"http://grails.org/Spring+Bean+Builder"},"http://grails.org/Spring+Bean+Builder"),") and an upgrade to Spring 2.0"),(0,o.kt)("li",{parentName:"ul"},"Easier unit testing of controllers and custom taglibs"),(0,o.kt)("li",{parentName:"ul"},"Validation improvements, including support for inherited constraints and simplified size constraint handling"),(0,o.kt)("li",{parentName:"ul"},"Automatic encoding of unsafe HTML characters and URL parameters in all scaffolding and taglibs"),(0,o.kt)("li",{parentName:"ul"},"Fixes to support Grails on more containers such as GlassFish and over 200 issues and bugs resolved in JIRA"),(0,o.kt)("li",{parentName:"ul"},"Grails now ships with Groovy 1.0!")))}g.isMDXComponent=!0}}]);