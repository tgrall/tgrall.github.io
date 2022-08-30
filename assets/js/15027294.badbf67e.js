(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[37807],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36841:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l=["components"],i={title:"Oracle Industrial Telnet Server (ITS): The OracleAS Hidden Treasure..",categories:"oracle jdeveloper"},s=void 0,c={permalink:"/blog/2006/03/13/oracle-industrial-telnet-server-its-the-oracleas-hidden-treasure-dot",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-03-13-oracle-industrial-telnet-server-its-the-oracleas-hidden-treasure-dot.md",source:"@site/blog/2006-03-13-oracle-industrial-telnet-server-its-the-oracleas-hidden-treasure-dot.md",title:"Oracle Industrial Telnet Server (ITS): The OracleAS Hidden Treasure..",description:"When I was working in Oracle Consulting I was surprised to see how many customers are using character mode applications, base on Oracle Forms. Lot of applications in wharehouses, harbour, ... are using telnet terminal, usually remote/mobile using RF networks.",date:"2006-03-13T00:00:00.000Z",formattedDate:"March 13, 2006",tags:[],readingTime:.92,truncated:!1,authors:[],prevItem:{title:"Google Data APIs",permalink:"/blog/2006/03/23/google-data-apis"},nextItem:{title:"Oracle Fusion Middleware and Microsoft Interoperability - Developer's Guide",permalink:"/blog/2006/03/02/oracle-fusion-middleware-and-microsoft-interoperability-developers-guide"}},u={authorsImageUrls:[]},p=[],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When I was working in Oracle Consulting I was surprised to see how many customers are using character mode applications, base on Oracle Forms. Lot of applications in wharehouses, harbour, ... are using telnet terminal, usually remote/mobile using RF networks."),(0,o.kt)("p",null,"Moving to Java on the server was very hard for them because of the lack of support for easy character mode development based solutions."),(0,o.kt)("p",null,"OracleAS 10",(0,o.kt)("em",{parentName:"p"},"g"),"/ADFprovides such support with the ",(0,o.kt)("em",{parentName:"p"},"Industrial Telnet Server (ITS)"),".  ITS is the telnet server running in a J2EE container as a J2CA adaptor, and uses JavaServer Faces to render the user interface. The advantage of using JSF for the UI, it allows developer to leverage automatically different renderers (HTML, Mobile and telnet) without changing the application."),(0,o.kt)("p",null,"Here an example of the different renderer provided by Oracle ADF Faces (Instant Messaging, PDA, HTML and Telnet)\n",(0,o.kt)("a",{parentName:"p",href:"http://farm1.static.flickr.com/172/388762316_44c01f4260_o.png"},(0,o.kt)("img",{parentName:"a",src:"http://farm1.static.flickr.com/172/388762316_44c01f4260_o.png",alt:"jsf-renderer.PNG"}))),(0,o.kt)("p",null,"If you are looking for more information around Oracle ITS:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technology/products/iaswe/adfmb.html"},"Oralce ADF Mobile")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technology/products/jdev/101/howtos/telnet/index.html"},"How To Install, Configure, and Manage the Industrial Telnet Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technology/products/iaswe/adfmb/mbl_pits3pinstall.html"},"How To Install the Industrial Telnet Server on Third-Party Containers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.oracle.com/technology/products/iaswe/adfmb/tiki-download_file.php152_telnet.swf"},"Demonstration: Using JDeveloper to create Telnet Applications"),"(flash)")))}m.isMDXComponent=!0}}]);