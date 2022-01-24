"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[1983],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44609:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Web UI: What's behind AJAX? Simple use cases using XMLHttpRequest",tags:["ajax"]},s=void 0,u={permalink:"/blog/2005/05/09/web-ui-whats-behind-ajax-simple-use-cases-using-xmlhttprequest",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2005-05-09-web-ui-whats-behind-ajax-simple-use-cases-using-xmlhttprequest.md",source:"@site/blog/2005-05-09-web-ui-whats-behind-ajax-simple-use-cases-using-xmlhttprequest.md",title:"Web UI: What's behind AJAX? Simple use cases using XMLHttpRequest",description:'I am sure you already heard about AJAX, the "new" way of building Web',date:"2005-05-09T00:00:00.000Z",formattedDate:"May 9, 2005",tags:[{label:"ajax",permalink:"/blog/tags/ajax"}],readingTime:8.68,truncated:!0,authors:[],prevItem:{title:"Oracle SQL Developer Express",permalink:"/blog/2005/05/12/oracle-sql-developer-express"},nextItem:{title:"Which kind of developer are you? A software terrorist?",permalink:"/blog/2005/05/03/which-kind-of-developer-are-you-a-software-terrorist"}},c={authorsImageUrls:[]},p=[],m={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'I am sure you already heard about AJAX, the "new" way of building Web\napplication where using HTML, Javascript, DOM, and XML you can\n',"\xa0","build very interactive Web applications, some examples of\nthis interactivity are Google (suggest, local, mail), MSN, Amazon, ....."),(0,a.kt)("p",null,"If the term ","\xa0","Ajax is\nrelatively new, the technologies used are quite old now. And you do not\nneed anything new to be able to leverage this approach in your current\ndevelopment, and since it is mainly a client (browser) based technology\nthis can be used whether you develop your application in Java, PHP, or\nor even PL/SQL for the Web. In the same time, you do not want to have\nto develop too much of the client side to handle user interaction, this\nis where new frameworks that provide support of this technologies,\nlet's say AJAX based, are very interesting. It is now possible to\ncreate very interactive Web application without passing 80% of your\ntime in the client side development - that could be generated from your\nserver obviously."),(0,a.kt)("p",null,"In the same time, before adopting such framework, it is important to\nunderstand what is happening. This is why I am creating this quick\nintroduction based on 2 simple use cases:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.grallandco.com/blog/archives/ajax/demo-2.html"},"loading message"),":\n","\xa0","you often want to provide some\nfeedback to your user when your browser is processing some data"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.grallandco.com/blog/archives/ajax/demo-3.html"},"dependent lists"),":\nhow you can easily create dependent lists, in lot of application you\nwant to drive a selection list from another")))}d.isMDXComponent=!0}}]);