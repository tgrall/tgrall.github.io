(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[12040],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32553:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return m}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],l={title:"Some cool stuff about JSP 2.0",categories:["javaEE","jsp"]},s=void 0,u={permalink:"/blog/2004/11/26/some-cool-stuff-about-jsp-2-dot-0",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2004-11-26-some-cool-stuff-about-jsp-2-dot-0.md",source:"@site/blog/2004-11-26-some-cool-stuff-about-jsp-2-dot-0.md",title:"Some cool stuff about JSP 2.0",description:"J2EE 1.4 introduces a major release of JSP: 2.0.",date:"2004-11-26T00:00:00.000Z",formattedDate:"November 26, 2004",tags:[],readingTime:2.305,truncated:!0,authors:[],prevItem:{title:"Article: Transaction Processing in Distributed Service-Oriented Applications",permalink:"/blog/2004/11/29/article-transaction-processing-in-distributed-service-oriented-applications"},nextItem:{title:"New Oracle White Paper: Accelerate Development and Deployment of Service-Oriented Applications",permalink:"/blog/2004/11/19/new-oracle-white-paper-accelerate-development-and-deployment-of-service-oriented-applications"}},p={authorsImageUrls:[]},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"J2EE 1.4 introduces a major release of JSP: 2.0."),(0,o.kt)("p",null,"Here some of the cool new features:"),(0,o.kt)("h5",{id:"direct-usage-of-expression-language-el-in-your-jsp"},"Direct usage of Expression Language (EL) in your JSP"),(0,o.kt)("p",null,"You do not need to put the EL in any tag now, just use it as needed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<html>\n<head><title>JSP 2.0 new features</title></head>\n<body>\nHello ${param.name}\n</body>\n</html>\n")),(0,o.kt)("p",null,"Find more about JSP 2.0 Expression Language in ",(0,o.kt)("a",{parentName:"p",href:"http://java.sun.com/j2ee/1.4/docs/tutorial/doc/JSPIntro7.html"},"the J2EE 1.4 tutorial"),"."),(0,o.kt)("h5",{id:"easy-tags-creation-with-tag-files"},"Easy tags creation with .tag files"),(0,o.kt)("p",null,"It is now easier to create your own tags.\nYou just need to create a new .tag file (or .tagx if you want to use XML syntax) in the WEB-INF/tags directory of your Web application; or META-INF/tags if you want to package the Tags in Jar file. So creating a .tag file is easy, using the attribute directive. The following example is a new tag named mytag.tag that prints a title set using the attribute title, in the color specified in the attribute textColor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<%@ attribute name="title" required="true" description="Title of the document"%>\n<%@ attribute name="textColor" required="true" description="Color of the Title"%>\n<h1 style="color:${textColor}">${title}</h1>\n')),(0,o.kt)("p",null,"Here is the JSP that uses this new Tag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<%@ taglib tagdir="/WEB-INF/tags/" prefix="tags"%>\n<html>\n<head>\n</head>\n<body>\n<p>\n<tags:mytag title="My new JSP" textColor="blue"/>\n</p>\n<p>\nHello World${param.name}\n</p>\n</body>\n</html>\n')),(0,o.kt)("h5",{id:"easy-header-and-footer-template-using-the-prelude-and-coda-includes"},"Easy header and footer template using the prelude and coda includes"),(0,o.kt)("p",null,"In most of the Web application that I have built, I started by creating template for my HTML pages; most of them to handle header and footer. Oracle JSP implementation provides this for a while using the ",(0,o.kt)("a",{parentName:"p",href:"http://download-west.oracle.com/docs/cd/B10464_01/web.904/b10320/trandepl.htm#1005780"},"Global Include feature"),". JSP 2.0 introduces a standard way of doing that using prelude and coda includes. I ",(0,o.kt)("em",{parentName:"p"},"hate")," the choice made by the spec to call that prelude and coda. May be good Java developer are necessary musicians, since this is commonly used there? Why not simply header/footer or using a prefix like pre.../post.... Anyway, that is not the point."),(0,o.kt)("p",null,"The way you can set a prelude and/or coda include to your JSPs is done with the new Web Descriptor tag: ",(0,o.kt)("inlineCode",{parentName:"p"},"<jsp-property-group>"),". This new tag allows you to configure a set of JSP that matches a specific URL. Part of the subtags of ",(0,o.kt)("inlineCode",{parentName:"p"},"<jsp-property-group>")," are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<include-coda>")," : the path to JSP fragment (.jspf) to include in the beginning all the JSP that matched the URL."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<include-prelude>"),":the path to the JSP fragment to include in the end all the JSP that matched the URL.")),(0,o.kt)("p",null,"An example configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"<jsp-config>\n<jsp-property-group>\n<url-pattern>*.jsp</url-pattern>\n<include-prelude>/WEB-INF/includes/prelude.jsp</include-prelude>\n<include-coda>/WEB-INF/includes/coda.jsp</include-coda>\n</jsp-property-group>\n</jsp-config>\n")),(0,o.kt)("p",null,"This 3 new features of JSP 2.0 are just a very small list of the features introduced in JSP and Servlet in J2EE 1.4, but are my favorites. They are very easy to test and to adopt."))}m.isMDXComponent=!0}}]);