(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[15763],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82184:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return g}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={title:"Google Data APIs",categories:null},s=void 0,c={permalink:"/blog/2006/03/23/google-data-apis",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-03-23-google-data-apis.md",source:"@site/blog/2006-03-23-google-data-apis.md",title:"Google Data APIs",description:"Google has published a new set of API (and format) to update and access data. It looks really interesting. These services are published using the REST paradigm and XML.",date:"2006-03-23T00:00:00.000Z",formattedDate:"March 23, 2006",tags:[],readingTime:.865,truncated:!1,authors:[],prevItem:{title:"Oracle BPEL: Debugging 'internal' SOAP Messages",permalink:"/blog/2006/04/23/oracle-bpel-debugging-internal-soap-messages"},nextItem:{title:"Oracle Industrial Telnet Server (ITS): The OracleAS Hidden Treasure..",permalink:"/blog/2006/03/13/oracle-industrial-telnet-server-its-the-oracleas-hidden-treasure-dot"}},p={authorsImageUrls:[]},u=[],d={toc:u};function g(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://www.google.com/logos/Logo*25wht.gif",alt:null}),(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/apis/gdata/overview.html"},"Google has published a new set of API")," (and format) to update and access data. It looks really interesting. These services are published using the ",(0,o.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Representational*State*Transfer"},"REST")," paradigm and XML."),(0,o.kt)("p",null,"Based on this protocol Google is now exposing its ",(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/apis/gdata/calendar.html"},"Calendar"),". I am currently playing around with it, really fun. A good opportunity for portlets and widgets developments..."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note for Oracle JDeveloper 10g (10.1.3) users:"),' I have define the GData and Calendar API as new library inside Oracle JDeveloper. But I had some issue compiling when I start to use any of the class coming from these library with the default configuration on Windows XP. I just switch from Oracle JVM to the standard JDK compiler in my project to avoid this "',(0,o.kt)("em",{parentName:"p"},"Error: Internal compilation error, terminated with a fatal exception"),'".  To do this it is quite simple. Double click on your project, choose compiler in the left tree, and check the "Use Javac" option to force JDeveloper to use the standard javac command. ',(0,o.kt)("em",{parentName:"p"},"(I will have to find where this issue come from...)")))}g.isMDXComponent=!0}}]);