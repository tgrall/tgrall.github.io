"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[88094],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,h=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47743:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return g}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],c={title:"Accessing User Principal in a Web Service",categories:"ws java"},l=void 0,s={permalink:"/blog/2006/09/21/accessing-user-principal-in-a-web-service",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2006-09-21-accessing-user-principal-in-a-web-service.md",source:"@site/blog/2006-09-21-accessing-user-principal-in-a-web-service.md",title:"Accessing User Principal in a Web Service",description:"WS-Security provides a standard way to secure Web Services. Since based on SOAP it is agnostic of the stack you are using. When using JAX-RPC implementation, you are running in a J2EE container. In this post I am giving a tip to access the Principal object.",date:"2006-09-21T00:00:00.000Z",formattedDate:"September 21, 2006",tags:[],readingTime:1.19,truncated:!1,authors:[],prevItem:{title:"Come to Oracle Open World and watch Mr Spring and Mr Apache speak",permalink:"/blog/2006/10/12/come-to-oracle-open-world-and-watch-mr-spring-and-mr-apache-speak"},nextItem:{title:"Choose a scripting language? Groovy or JRuby?",permalink:"/blog/2006/09/16/choose-a-scripting-language-groovy-or-jruby"}},p={authorsImageUrls:[]},u=[],m={toc:u};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"WS-Security provides a standard way to secure Web Services. Since based on SOAP it is agnostic of the stack you are using. When using JAX-RPC implementation, you are running in a J2EE container. In this post I am giving a tip to access the Principal object."),(0,i.kt)("p",null,"I have a service service, and I need to access some user information in its implementation class ( ",(0,i.kt)("inlineCode",{parentName:"p"},"org.tug.ws.sample.SimpleServiceImpl")," ). This service is secure with WS-Security, with for example simple authentication, the following screenshot, is the configuration of inbound security in OracleAS 10gR3:"),(0,i.kt)("p",null,"![](",(0,i.kt)("a",{parentName:"p",href:"http://static.flickr.com/92/248919057_ce2ba6a5f7_o.png"},"http://static.flickr.com/92/248919057_ce2ba6a5f7_o.png")," Web Services Management )"),(0,i.kt)("p",null,"So the service is secured, here the","\xa0","code that you have to add in your service implementation (or handlers) to access the Principal object."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Implement ",(0,i.kt)("a",{parentName:"li",href:"http://java.sun.com/j2ee/1.4/docs/api/javax/xml/rpc/server/ServiceLifecycle.html"},(0,i.kt)("inlineCode",{parentName:"a"},"javax.xml.rpc.server.ServiceLifecycle"))),(0,i.kt)("li",{parentName:"ol"},"Implement the init(Object context) method to access\nthe ",(0,i.kt)("a",{parentName:"li",href:"http://java.sun.com/j2ee/1.4/docs/api/javax/xml/rpc/server/ServletEndpointContext.html"},(0,i.kt)("inlineCode",{parentName:"a"},"ServletEndpointContext")),",\nthat you can for example put as a local member of your implementation\nclass.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public void init(Object context) {\n  _servleContext = (ServletEndpointContext)context;\n}\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Then you can access the principal object using the ",(0,i.kt)("inlineCode",{parentName:"li"},"getUserPrincipal()")," method:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"...\nif (_servleContext.getUserPrincipal() != null ) {\n  Principal userPrincipal = _servleContext.getUserPrincipal();\n  ...\n}\n...\n")),(0,i.kt)("p",null,"You can find more information about the Security in J2EE 1.4 Web Services in the ",(0,i.kt)("a",{parentName:"p",href:"http://java.sun.com/blueprints/guidelines/designing_webservices/html/security.html#1045527"},"Designing Web Services with the J2EE 1.4 Platform")," tutorial."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Update on Wednesday october 4th:")," Frank Nimphius, has use this entry to create a more detail article about ",(0,i.kt)("a",{parentName:"p",href:"http://www.orablogs.com/fnimphius/archives/001815.html"},"End to End Security with Web Services Security"),"."))}g.isMDXComponent=!0}}]);