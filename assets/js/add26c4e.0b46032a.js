(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[64137],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=o,f=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42391:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],s={title:"How to use SOAP Compression using JAX-RPC",categories:null},l=void 0,p={permalink:"/blog/2007/01/07/how-to-use-soap-compression-using-jax-rpc",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2007-01-07-how-to-use-soap-compression-using-jax-rpc.md",source:"@site/blog/2007-01-07-how-to-use-soap-compression-using-jax-rpc.md",title:"How to use SOAP Compression using JAX-RPC",description:"HTTP compression has improved a lot the download time of content from",date:"2007-01-07T00:00:00.000Z",formattedDate:"January 7, 2007",tags:[],readingTime:2.575,truncated:!1,authors:[],prevItem:{title:"Oracle JDeveloper Features Matrix",permalink:"/blog/2007/01/08/oracle-jdeveloper-features-matrix"},nextItem:{title:"Groovy 1.0 released",permalink:"/blog/2007/01/02/groovy-1-dot-0-released"}},c={authorsImageUrls:[]},u=[],m={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"HTTP compression has improved a lot the download time of content from\nservers. In the context of Web Service it could be very interesting to\nalso use HTTP compression to improve the network traffic. Firs, I am\nexplaining how to compress a SOAP response when you have a Web Service\nrunning in Oracle Containers for J2EE (OC4J) using a generic servlet\nfilter. I have to give credit to ",(0,a.kt)("a",{parentName:"p",href:"http://www.thomas-bayer.com/"},"http://www.thomas-bayer.com/"),"\nsince he has created the Filter and documented how to do such thing\nusing Axis.","\xa0"),(0,a.kt)("p",null,"So you can take a look to the following article for more details, you\ncan read the 2 following article, or jump to the next paragraph that\nexplains how to configure your JAX-RPC based service to send compressed\nHTTP response."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.thomas-bayer.com/soap-compression-howto.htm"},"How to Use SOAP Compression with Apache Axis")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.thomas-bayer.com/gzip-compression-filter.htm"},"2Way HTTP Compression Servlet Filter"))),(0,a.kt)("p",null,"In this sample I am showing how to compress the SOAP response\nusing a servlet filter, it is also possible to use some other Oracle\ninfrastructure element to achieve that such as Oracle HTTP\nServer/Apache, or Oracle Webcache."),(0,a.kt)("h4",{id:"1--install-the-compression-filter-library-in-your-application"},"1- Install the compression filter library in your application"),(0,a.kt)("p",null,"Download the compression filter library ",(0,a.kt)("a",{parentName:"p",href:"http://www.thomas-bayer.com/resources/gzip-compression-filter/2wayfilter-1.2.jar"},"2wayfilter-1.2.jar"),"\nand copy it into the Web application's",(0,a.kt)("inlineCode",{parentName:"p"}," WEB-INF/lib")," folder"),(0,a.kt)("h4",{id:"2--configure-your-application-to-use-the-filter"},"2- Configure your application to use the filter"),(0,a.kt)("p",null,"The configuration of a servlet filter is done using\nthe web.xml where you reference which servlet or URL will be using the\nfilter. As you may knowin JAX-RPC, the HTTP endpoint of a service are\nexposed as servlet and defined in the web.xml. You can choose to\ncompress all the endpoint/URL or create a new servlet mapping, that\nwill become a new SOAP endpoint and only compress this one. If you take\nthe option of creating a new endpoint keep in mind that it will not be\nadded to the WSDL automatically, so the client application will have to\npoint explicitly to the compressed endpoint URL to take benefits of it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<web-app xmlns="http://java.sun.com/xml/ns/j2ee" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-app_2_4.xsd"\n  version="2.4">\n  <servlet>\n    <description>Web Service CustomerServiceSoapHttpPort</description>\n    <display-name>Web Service CustomerServiceSoapHttpPort</display-name>\n    <servlet-name>CustomerServiceSoapHttpPort</servlet-name>\n    <servlet-class>demo.oracle.CustomerServiceImpl</servlet-class>\n    <load-on-startup>1</load-on-startup>\n  </servlet>\n  <servlet-mapping>\n    <servlet-name>CustomerServiceSoapHttpPort</servlet-name>\n    <url-pattern>CustomerServiceSoapHttpPort</url-pattern>\n  </servlet-mapping>\n\n  \x3c!-- New servlet mapping to handle compressed SOAP Messages --\x3e\n  <servlet-mapping>\n    <servlet-name>CustomerServiceSoapHttpPort</servlet-name>\n    <url-pattern>CompressedCustomerServiceSoapHttpPort</url-pattern>\n  </servlet-mapping>\n\n\n  \x3c!-- Filter definition with mapping on the compressed endpoint --\x3e\n  <filter>\n    <filter-name>2WayFilter</filter-name>\n    <filter-class>com.osmoticweb.gzipfilter.GZIP2WayFilter</filter-class>\n  </filter>\n  <filter-mapping>\n    <filter-name>2WayFilter</filter-name>\n    <url-pattern>CompressedCustomerServiceSoapHttpPort</url-pattern>\n  </filter-mapping>\n\n</web-app>\n')),(0,a.kt)("p",null,"You can now package and deploy your application."),(0,a.kt)("h4",{id:"3--create--invoke-the-service"},"3- Create & Invoke the service"),(0,a.kt)("p",null,"In this basic configuration you have only changed the servlet that is\nthe HTTP endpoint of your service. So the compressed endpoint is not\npresent in the WSDL, but you can use any of the URL to create your\nproxy."),(0,a.kt)("p",null,"When you have created your proxy, if you want to access the endpoint\nthat will return the compressed response you must be sure that you are\ncalling the correct endpoint. You can set the endpoint using the ",(0,a.kt)("inlineCode",{parentName:"p"},"setEndpoint")," method, of your Web\nService client."),(0,a.kt)("p",null,"This is it!"),(0,a.kt)("p",null,"I will in a next post explain how you can using the Oracle Web Service\nclient API send a compressed request that will have to be uncompressed\non the server using the same filter."))}h.isMDXComponent=!0}}]);