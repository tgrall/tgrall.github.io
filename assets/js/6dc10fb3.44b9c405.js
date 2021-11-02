(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[99373],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48834:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},assets:function(){return s},toc:function(){return p},default:function(){return f}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={title:"Java 101: Generate a unique identifier with java.util.UUID",categories:"java"},u=void 0,c={permalink:"/blog/2007/08/07/java-101-generate-a-unique-identifier-with-java-dot-util-dot-uuid",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-08-07-java-101-generate-a-unique-identifier-with-java-dot-util-dot-uuid.md",source:"@site/blog/2007-08-07-java-101-generate-a-unique-identifier-with-java-dot-util-dot-uuid.md",title:"Java 101: Generate a unique identifier with java.util.UUID",description:"A friend of mine was asking me how to generate a unique ID for his application... As you probably already know Java SE 5 has introduced the java.util.UUID class to easily generate Universally Unique Identifier (UUID). As usual  Wikipedia is a great starting point to learn more about UUID.",date:"2007-08-07T00:00:00.000Z",formattedDate:"August 7, 2007",tags:[],readingTime:.52,truncated:!1,authors:[],prevItem:{title:"Prototype Windows: the best way to create 'Web 2.0' windows",permalink:"/blog/2007/09/15/prototype-windows-the-best-way-to-create-web-2-dot-0-windows"},nextItem:{title:"OracleAS OC4J and Java EE releases....",permalink:"/blog/2007/08/02/oracleas-oc4j-and-java-ee-releases-dot-dot-dot"}},s={authorsImageUrls:[]},p=[],d={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A friend of mine was asking me how to generate a unique ID for his application... As you probably already know Java SE 5 has introduced the java.util.UUID class to easily generate Universally Unique Identifier (UUID). As usual  ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/UUID"},"Wikipedia")," is a great starting point to learn more about UUID."),(0,i.kt)("p",null,"Generating the unique ID is as simple as calling the method ",(0,i.kt)("inlineCode",{parentName:"p"},"UUID.randomUUID()")," in the class. This will give a new instance of UUID that you can now manipulate; for example do a toString() to get the UUID string representation as describe in the specifications; for example ",(0,i.kt)("inlineCode",{parentName:"p"},"5462dc18-4653-42d1-b4e4-22fc970a6ce5")),(0,i.kt)("p",null,"Resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://en.wikipedia.org/wiki/UUID"},"UUID on Wikipedia")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://java.sun.com/javase/6/docs/api/java/util/UUID.html"},"java.util.UUID Documentation"))))}f.isMDXComponent=!0}}]);