(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[5489],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=o,d=m["".concat(p,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8e4:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return s},toc:function(){return u},default:function(){return h}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],l={title:"PHP on OC4J??? Yes with JSR 223 RI",categories:["oc4j","oracle","php","java"]},p=void 0,c={permalink:"/blog/2005/03/26/php-on-oc4j-yes-with-jsr-223-ri",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2005-03-26-php-on-oc4j-yes-with-jsr-223-ri.md",source:"@site/blog/2005-03-26-php-on-oc4j-yes-with-jsr-223-ri.md",title:"PHP on OC4J??? Yes with JSR 223 RI",description:"In this entry I am explaining how to use the JSR-223 Reference Implementation into Oracle Containers for J2EE (OC4J).",date:"2005-03-26T00:00:00.000Z",formattedDate:"March 26, 2005",tags:[],readingTime:1.625,truncated:!1,authors:[],prevItem:{title:"New Oracle Products on OTN",permalink:"/blog/2005/03/27/new-oracle-products-on-otn"},nextItem:{title:"Blog Beginner: check out w.bloggar and other desktop tools",permalink:"/blog/2005/03/16/blog-beginner-check-out-w-dot-bloggar-and-other-desktop-tools"}},s={authorsImageUrls:[]},u=[],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In this entry I am explaining how to use the JSR-223 Reference Implementation into Oracle Containers for J2EE (OC4J)."),(0,a.kt)("p",null,"Note: I have done this only on Windows XP Platform, I did not test on Unix/Linux yet."),(0,a.kt)("p",null,"1-The first thing to do is to download the ",(0,a.kt)("a",{parentName:"p",href:"http://jcp.org/aboutJava/communityprocess/pr/jsr223/index.html"},"JSR-223 Reference Implementation from the JCP Web site"),"."),(0,a.kt)("p",null,"2- Unzip the ",(0,a.kt)("em",{parentName:"p"},"sjp-1_0-ea-windows-i586.zip")," in a directory let say ",(0,a.kt)("em",{parentName:"p"},"d:\\java\\jsr223-ri"),"."),(0,a.kt)("p",null,"3- You can choose here to do a proper installation (requires perl) or not. The ",(0,a.kt)("em",{parentName:"p"},"proper")," installation preconfigure Apache Tomcat and the JSR-223 command line demonstration. Since what we are trying to achieve is to install the RI inside OC4J you do not need to do the installation."),(0,a.kt)("p",null,"4- Download"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.grallandco.com/blog/archives/ant-jsr223.zip"},"this zip file"),"\nthat contains a Ant task and various files to configure and deploy the JSR223 sample into OC4J."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","4.1 To execute the Ant script you must start to set the following environman variables:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JAVA_HOME that points to the JDK home"),(0,a.kt)("li",{parentName:"ul"},"ORACLE_HOME that points to the OC4J home (eg: d:\\oracle\\oc4j)"),(0,a.kt)("li",{parentName:"ul"},"JSR223_HOME that points to directory where you have unzipped the JSR223 RI (eg d:\\java\\jsr223)")),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","4.2 Create a startup script for OC4J using the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ant\n")),(0,a.kt)("p",null,"The default target create a script names ",(0,a.kt)("em",{parentName:"p"},"start-jsr223.bat")," in the %ORACLE_HOME%\\bin directory. This script set various environment variable and start OC4J with the correct system parameters to load correctly the PHP scrip engine from Java."),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","4.3 Start OC4J using the created script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"%ORACLE_HOME%\\bin\\start-jsr223.bat\n")),(0,a.kt)("p",null,"\xa0","\xa0","\xa0","4.4 Package and Deploy the Sample Application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ant deploy\n")),(0,a.kt)("p",null,"This target packacge the Web samples from the reference implementation in a ear/war file, modifying the ",(0,a.kt)("em",{parentName:"p"},"web.xml")," to define the different servlet mapping needed by JSR223."),(0,a.kt)("p",null,"5 Use the sample application"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8888/jsr-223")),(0,a.kt)("p",null,"You can start to use PHP in OC4J ;-)  Take some time to read the sample code and specifications. JSR-223 is not only for Web container but also for JS2E, it is so interesting that the JSR-223 will probably be part of Mustang..."))}h.isMDXComponent=!0}}]);