"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[70064],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76027:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"BPEL in Cluster: In which node my process is working",categories:"soa oracle"},o=void 0,l={permalink:"/blog/2007/07/10/bpel-in-cluster-in-which-node-my-process-is-working",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-07-10-bpel-in-cluster-in-which-node-my-process-is-working.md",source:"@site/blog/2007-07-10-bpel-in-cluster-in-which-node-my-process-is-working.md",title:"BPEL in Cluster: In which node my process is working",description:"I was helping a customer with his BPEL in cluster and we needed to follow the flow and on which machine the instance was running.",date:"2007-07-10T00:00:00.000Z",formattedDate:"July 10, 2007",tags:[],readingTime:.565,hasTruncateMarker:!1,authors:[],frontMatter:{title:"BPEL in Cluster: In which node my process is working",categories:"soa oracle"},prevItem:{title:"Visiting Paris with Velib (new bike transit system)",permalink:"/blog/2007/07/18/visiting-paris-with-velib-new-bike-transit-system"},nextItem:{title:"Using your Built-In iSight with Parallels (and VMWare)",permalink:"/blog/2007/06/04/using-your-built-in-isight-with-parallels-and-vmware"}},s={authorsImageUrls:[]},c=[],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"I was helping a customer with his BPEL in cluster and we needed to follow the flow and on which machine the instance was running."),(0,a.kt)("p",null,"I simply use a ",(0,a.kt)("inlineCode",{parentName:"p"},"bpel:exec")," activity with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'java.net.InetAddress addr = null;\n\ntry {\n  addr = java.net.InetAddress.getLocalHost();\n}\ncatch (Exception e) {\n  System.out.println("EXCEPTION :"+ e);\n}\nsetVariableData("HostNameVariable", addr.getCanonicalHostName());\n')),(0,a.kt)("p",null,"This code is just an example of what could be done. Here I am using java.net code API and put the result in a BPEL global variable using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setVariableData()")," method. Obviously you will use appropriate code to differenciate the different nodes for example the name of the OC4J instance, hostname, ... or any interesting value."))}u.isMDXComponent=!0}}]);