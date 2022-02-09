"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[60617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42399:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},assets:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={title:"Working on a large XML or SOA project: think about 'separation of concerns'",categories:"soa"},s=void 0,l={permalink:"/blog/2007/12/10/working-on-a-large-xml-or-soa-project-think-about-separation-of-concerns",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-12-10-working-on-a-large-xml-or-soa-project-think-about-separation-of-concerns.md",source:"@site/blog/2007-12-10-working-on-a-large-xml-or-soa-project-think-about-separation-of-concerns.md",title:"Working on a large XML or SOA project: think about 'separation of concerns'",description:"With XML and SOA becoming mainstream in the enterprise XML operation such as Schema validations, XSL transformations are now very common. These specific operations are CPU intensive and could become a performance bottleneck when directly applied on the middleware. It could be even worst now when using SOAP based Web Services and their related WS-* standards. For example with WS-Security, XML encryption and signature is now more and more used in SOA based applications.",date:"2007-12-10T00:00:00.000Z",formattedDate:"December 10, 2007",tags:[],readingTime:3.73,truncated:!0,authors:[],prevItem:{title:"Web Services and Files Exchange",permalink:"/blog/2007/12/20/web-services-and-files-exchange"},nextItem:{title:"Portal Project: Time to Think about your Social Networking Enterprise Strategy",permalink:"/blog/2007/12/03/portal-project-time-to-think-about-your-social-networking-enterprise-strategy"}},p={authorsImageUrls:[]},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With XML and SOA becoming mainstream in the enterprise XML operation such as Schema validations, XSL transformations are now very common. These specific operations are CPU intensive and could become a performance bottleneck when directly applied on the middleware. It could be even worst now when using SOAP based Web Services and their related WS-* standards. For example with WS-Security, XML encryption and signature is now more and more used in SOA based applications."),(0,a.kt)("p",null,"This is why many enterprise architects are bow looking for solutions to improve performances of XML centric applications."),(0,a.kt)("p",null,"One of the think we learn when developing application, and that Aspect Oriented Programming has highlighted is the concept of \u201cseparation of concerns\u201d. It is key to keep that in mind also in global architecture in our case by separating the XML processing from the business logic. Hopefully it is most of the time done directly by the various Web Services framework you are using, you do not code the SOAP request/response, it is hidden by the Web Services framework."),(0,a.kt)("p",null,"However, in the current application server, the full XML treatment is made directly in the container, for example the XML Encryption is made in the same container that the place where the pure business logic is executed. So let\u2019s find a solution to extract the most intensive XML processing into another part of the system."),(0,a.kt)("p",null,"Vendors have now in their catalog appliances that could do the job. The same way that today we are using SSL accelerators to deal with SSL encryption/decryption, we can put XML appliance to deal with the intensive CPU processing operation: XML validations, transformation, Ws-Security enforcing point,..."))}d.isMDXComponent=!0}}]);