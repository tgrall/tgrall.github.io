"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[40092],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(c,".").concat(d)]||u[d]||s[d]||a;return n?o.createElement(f,l(l({ref:t},m),{},{components:n})):o.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},25938:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Add columns to OmniPortlet"},l=void 0,i={permalink:"/blog/2003/11/03/add-columns-to-omniportlet",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2003-11-03-add-columns-to-omniportlet.md",source:"@site/blog/2003-11-03-add-columns-to-omniportlet.md",title:"Add columns to OmniPortlet",description:"I had some questions about the limitation to 5 columns of the",date:"2003-11-03T00:00:00.000Z",formattedDate:"November 3, 2003",tags:[],readingTime:.525,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Add columns to OmniPortlet"},prevItem:{title:"How to configure Web Cache to cache remote portlet content",permalink:"/blog/2003/11/16/how-to-configure-web-cache-to-cache-remote-portlet-content"},nextItem:{title:"Looking for Portlets ?",permalink:"/blog/2003/10/27/looking-for-portlets"}},c={authorsImageUrls:[]},p=[],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I had some questions about the limitation to 5 columns of the\nOmniPortlet tabular layout. Here is a tip to add more columns to this\nlayout:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"backup the current OmniPortlet provider.xml\n",(0,r.kt)("inlineCode",{parentName:"p"},"/OC4J_HOME/applications/portalTools/omniPortlet/WEB-INF/providers/omniPortlet"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now open the file, and look for the tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<dataField")))),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"You can add new fields, by copying the existing ",(0,r.kt)("inlineCode",{parentName:"li"},"<dataField>")," tag and\nchange the value of the ",(0,r.kt)("inlineCode",{parentName:"li"},"<name>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<displayName>"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<dataField class="oracle.webdb.reformlet.definition.DataFieldDefinition">\n<name>Field6</name>\n<displayName>Column6</displayName>\n<description>Field6</description>\n<text>##column##</text>\n\n<alignment>left</alignment>\n<displayAs>hidden</displayAs>\n<type>linebreak</type>\n<font>Arial.3.Plain.None</font>\n\n<color>#000000</color>\n<style>none</style>\n<styleType>custom</styleType>\n</dataField>\n')),(0,r.kt)("p",null,"The same logic could be used to add parameters or events to the OmniPortlet."))}s.isMDXComponent=!0}}]);