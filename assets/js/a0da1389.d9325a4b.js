(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[31342],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||c;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<c;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},41399:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return f}});var n=r(22122),o=r(19756),c=(r(67294),r(3905)),a=["components"],i={title:"How to configure Web Cache to cache remote portlet content"},l=void 0,u={permalink:"/blog/2003/11/16/how-to-configure-web-cache-to-cache-remote-portlet-content",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2003-11-16-how-to-configure-web-cache-to-cache-remote-portlet-content.md",source:"@site/blog/2003-11-16-how-to-configure-web-cache-to-cache-remote-portlet-content.md",title:"How to configure Web Cache to cache remote portlet content",description:"Some portlet developers have hard time to set up a correct environment to use",date:"2003-11-16T00:00:00.000Z",formattedDate:"November 16, 2003",tags:[],readingTime:1.79,truncated:!0,authors:[],prevItem:{title:"OmniPortlet tip: use stored procedure with the SQL data source",permalink:"/blog/2003/11/19/omniportlet-tip-use-stored-procedure-with-the-sql-data-source"},nextItem:{title:"Add columns to OmniPortlet",permalink:"/blog/2003/11/03/add-columns-to-omniportlet"}},p={authorsImageUrls:[]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Some portlet developers have hard time to set up a correct environment to use\ninvalidation based cache with portlets. The summary is often:",(0,c.kt)("br",null),"\n",(0,c.kt)("em",{parentName:"p"},'"it is working with the PDK Example provided in Oracle 9iAS but every\ntime that I want to do it myself from Oracle JDeveloper or a stand alone OC4J\nthe portlet is not cached !"')))}f.isMDXComponent=!0}}]);