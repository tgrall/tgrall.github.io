"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[41157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,y=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},75041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={title:"Can I do SOA with Web Services today?",tags:["soa"]},o=void 0,s={permalink:"/blog/2005/10/20/can-i-do-soa-with-web-services-today",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2005-10-20-can-i-do-soa-with-web-services-today.md",source:"@site/blog/2005-10-20-can-i-do-soa-with-web-services-today.md",title:"Can I do SOA with Web Services today?",description:"I am just coming back for Toronto where I have been presenting Oracle",date:"2005-10-20T00:00:00.000Z",formattedDate:"October 20, 2005",tags:[{label:"soa",permalink:"/blog/tags/soa"}],readingTime:3.73,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Can I do SOA with Web Services today?",tags:["soa"]},prevItem:{title:"PHP will beat Java? Not sure about it...",permalink:"/blog/2005/10/24/php-will-beat-java-not-sure-about-it-dot-dot-dot"},nextItem:{title:"Publishing SQL and DML as Web Service",permalink:"/blog/2005/09/27/publishing-sql-and-dml-as-web-service"}},l={authorsImageUrls:[]},c=[{value:"Why I have answered Yes?",id:"why-i-have-answered-yes",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I am just coming back for Toronto where I have been presenting Oracle\nDeveloper Day: SOA for J2EE Developers. As part of this exercise I have\nintroduced Web Services and related technologies/standards."),(0,r.kt)("p",null,"A person in the audience asked me:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"But can I do SOA Today?\nAre Web Services are mature enough?")),(0,r.kt)("p",null,"I think that is a very interesting and valid question. The answer is\ncertainly:","\xa0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Yes you can, and I would add, yes you should!!"))),(0,r.kt)("p",null,"Web Services are ","\xa0","definitively big actors in Service Oriented\nArchitecture since by definition they are loosely coupled,\nimplementation agnostic and facilitate reusability. In the same time\nthe concern of this person are justified since some important pieces of\ninfrastructure are yet available in vendors solutions. Or if they exist\nthey are proprietary and won't allow interoperability of the service\nwith other stack... Losing interoperability is a big deal when you talk\nabout Web Services since most of the time, if the designers want to use\nWeb Services it is to be able to reuse it in various applications,\nindependently of the platform where this application is running."),(0,r.kt)("h4",{id:"why-i-have-answered-yes"},"Why I have answered Yes?"),(0,r.kt)("p",null,"Why I am so positive when I answered this person? Just simply because\nWeb Services are today mature enough. But like any development of\napplications/systems the development should start with a clear\ndefinition of the requirements. When the development team will start to\nwrite down the requirement it will be clear of not what are the\nimportant pieces in term of services. Beside the business requirements,\nlots of requirements are technical/IT related such as security,\nperformance, manageability, reliability, and transaction management,\nperformance... So when you design your system do not forgot to clarify\nwhat are the different infrastructure services you need...."),(0,r.kt)("p",null,"It is then easy to match your infrastructure requirement list to the\ndifferent quality of services supported by the platform you will\nimplementing on, and as important, the platform(s) you will have to\nintegrate with.","\xa0"," For example today it is possible to easily\ncreate SOA/Web Services application that are secured because\nWS-Security is a standard supported by most of the vendors. At the\nopposite it may be very challenging to create SOA/WS based application\nthat involve a very complex transaction model with various applications\nand system since no standard have been implemented in a real\ninteroperable manner. But no worry the WS brains are here and work on\nit, take some time to read more about WS-Transactions and other related\nstandardization effort."),(0,r.kt)("p",null,"Based on the previous example with security and transaction, it is also\nimportant to keep in mind that the Web Services is a mature technology\nbut it is still evolving -based on real life requirements-. So in the\nsame time your application/system will evolve -it is one of your goal\nwhen you do SOA, it is to build a more agile system that can react to\nbusiness, or technological changes quicker-, do not forget that your\nvendor are continuously working to not only define the standard but\nalso implement them in their product. So you may put as a requirement\nfrom the beginning a specific infrastructure services that are not\navailable in today's product but the important question to ask you\nbefore dropping SOA/Web Service is when I really need this feature?\nWhen this feature will be available in my platform?"),(0,r.kt)("p",null,'This is why also it is important to understand the strategy of your\nvendor in term of flexibility and adaptability of their solution to the\ndifferent standards, and how it can help you to take care of legacy\nservices that need to integrate with your new applications. One nice\nexample is the usage of Oracle Web Services Manager. Even if\nWS-Security is one of the first standard around "Enterprise Web\nServices" it has not been in the different stack for long so lot of\nexisting WS do not support WS-Sec. Oracle Web Services Manager allow\nyou using agents and/or gateway to add security in a standard way to\nexisting services, and enrich you SOA with a better quality of\nservices.',"\xa0"," So do not say no to SOA/SOA because a standard does\nnot exist or exist but not implemented, it will come -take a look to\nall the WS-* effort-, and this standards will be able to extend the\nsystem that you are building as you need.... SOA is all about agility,\nto be sure that it will be agile enough to provide you more services as\nyou go!"))}d.isMDXComponent=!0}}]);