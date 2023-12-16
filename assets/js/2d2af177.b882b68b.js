"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[97005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,h=m["".concat(p,".").concat(f)]||m[f]||c[f]||a;return n?r.createElement(h,l(l({ref:t},u),{},{components:n})):r.createElement(h,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"Which Version I am running ?"},l=void 0,i={permalink:"/blog/2004/07/12/which-version-i-am-running",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2004-07-12-which-version-i-am-running.md",source:"@site/blog/2004-07-12-which-version-i-am-running.md",title:"Which Version I am running ?",description:"Today I was helping a customer on a deployment issue...",date:"2004-07-12T00:00:00.000Z",formattedDate:"July 12, 2004",tags:[],readingTime:1.2,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Which Version I am running ?"},prevItem:{title:"Struts 1.2.1 Beta available /  JDeveloper 10g How-To",permalink:"/blog/2004/07/12/struts-1-dot-2-1-beta-available-slash-jdeveloper-10g-how-to"},nextItem:{title:"Opening the Black Box of Integration",permalink:"/blog/2004/07/09/opening-the-black-box-of-integration"}},p={authorsImageUrls:[]},s=[],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Today I was helping a customer on a deployment issue..."),(0,o.kt)("p",null,"The first question that I have asked is:"),(0,o.kt)("p",null,'"',(0,o.kt)("em",{parentName:"p"},"Which version of OC4J are you using ?"),'".'),(0,o.kt)("p",null,"And he has no idea !"),(0,o.kt)("p",null,"So let me give you some tips to know the version of Oracle components that you are using..."),(0,o.kt)("p",null,"====\nOC4J"),(0,o.kt)("p",null,"In the j2ee/home directory:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"java -jar oc4j.jar -version"))),(0,o.kt)("p",null,"====\nJPDK"),(0,o.kt)("p",null,"Go in the provider test page"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"http://server:port/context/providers/your-provider"))),(0,o.kt)("p",null,"You can see the version of the in the bottom of the page. In the JPDK you can also use the ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpCommonConstants.COMPONENT_VERSIONS")," to access it programmatically."),(0,o.kt)("p",null,"Also if you  are looking for a version of a specific component, Oracle development often use a 'version file' into the jar file of this component.This is the case for example for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Portals: ptlshare.jar, wsrp-container.jar, wsrp-container.jar, pdkjava.jar, portaltools.jar"),(0,o.kt)("li",{parentName:"ul"},"Oracle XML: xmlparserv2.jar,oraclexsql.jar, xsqlserializers.jar"),(0,o.kt)("li",{parentName:"ul"},"UIX: uix2.jar, jewt4.jar"),(0,o.kt)("li",{parentName:"ul"},"BI Bean: bigraphbean.jar")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Update following Markus comments:")),(0,o.kt)("p",null,"Markus made me realized that I forgot to mention the standard way of checking the version of a product. It is also possible, and done by most of the Oracle components, to put the version number into the Manifest file of any archive. So take a look to the manifest, and if it is not available you can look for a version file into the archive."),(0,o.kt)("p",null,"So next time somebody ask you which version of the product you are using you will be all set !"))}c.isMDXComponent=!0}}]);