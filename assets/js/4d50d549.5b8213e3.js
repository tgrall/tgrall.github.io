(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[74116],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=a,g=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},97124:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={title:"HTML/Javascript tip: Refreshing an image not the full page"},c=void 0,s={permalink:"/blog/2004/11/08/html-javascript-tip-refreshing-an-image-not-the-full-page",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2004-11-08-html-javascript-tip-refreshing-an-image-not-the-full-page.md",source:"@site/blog/2004-11-08-html-javascript-tip-refreshing-an-image-not-the-full-page.md",title:"HTML/Javascript tip: Refreshing an image not the full page",description:"I was discussing with a friend about the creation of a monitoring dashboard in HTML. As any monitoring tool you want to be able to see the information in real-time, so you need to refresh the content....",date:"2004-11-08T00:00:00.000Z",formattedDate:"November 8, 2004",tags:[],readingTime:.66,truncated:!1,authors:[],prevItem:{title:"Windows User finally you will be able to use Konfabulator",permalink:"/blog/2004/11/15/windows-user-finally-you-will-be-able-to-use-konfabulator"},nextItem:{title:"First contact with Oracle Database XE",permalink:"/blog/2004/10/31/first-contact-with-oracle-database-xe"}},u={authorsImageUrls:[]},p=[],f={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I was discussing with a friend about the creation of a monitoring dashboard in HTML. As any monitoring tool you want to be able to see the information in ",(0,o.kt)("em",{parentName:"p"},"real-time"),", so you need to refresh the content...."),(0,o.kt)("p",null,"One way of doing it is to refresh the whole page and this is easy, just use the meta tag:\n",(0,o.kt)("inlineCode",{parentName:"p"},'<META HTTP-EQUIV="Refresh" CONTENT="5; URL=http://www.grallandco.com/" >'),"\nwhere 5 is the number of seconds between each refresh."),(0,o.kt)("p",null,"Javascript allows you to easily refresh a specific image of your page (a chart for example):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<img src=\"myChartServlet\" name=\"chart1\"/>\n<script language=\"JavaScript\">\n  function loadImage() {\n    var now = new Date();\n    if (document.images) {\n      document.images.chart1.src = 'myChartServlet?time='+now.getTime(); // add the time to avoid caching\n    }\n    setTimeout('loadImage()',1000);\n  }\n  setTimeout('loadImage()',1000);\n<\/script>\n")),(0,o.kt)("p",null,"You can obviously make the whole think dynamic and configurable..."))}m.isMDXComponent=!0}}]);