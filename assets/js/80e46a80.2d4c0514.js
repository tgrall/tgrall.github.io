"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[26064],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return y}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return y}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={title:"JAX-RS: Jersey and JSON single element arrays",categories:"java rest json"},s=void 0,p={permalink:"/blog/2011/09/02/jax-rs-jersey-and-json-single-element-arrays",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2011-09-02-jax-rs-jersey-and-json-single-element-arrays.md",source:"@site/blog/2011-09-02-jax-rs-jersey-and-json-single-element-arrays.md",title:"JAX-RS: Jersey and JSON single element arrays",description:"Last week I have been struggling with a small issue while developing a service using Jersey.",date:"2011-09-02T00:00:00.000Z",formattedDate:"September 2, 2011",tags:[],readingTime:1.675,truncated:!0,authors:[],prevItem:{title:"Installing Memcached on Mac OS X and using it in Java",permalink:"/blog/2011/11/20/installing-memcached-on-mac-os-x-and-using-it-in-java"},nextItem:{title:"How to create a new Content List Template for eXo Platform 3",permalink:"/blog/2011/08/31/how-to-create-a-new-content-list-template-for-exo-platform-3"}},c={authorsImageUrls:[]},m=[],u={toc:m};function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Last week I have been struggling with a small issue while developing a service using Jersey."),(0,o.kt)("p",null,"The goal of this service is to provide JSON object to my Web application, so called directly from the browser. This service returns in a JSON array a list of Employees, something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"employee":[\n{"email":"jdoe@example.com","firstName":"John","lastName":"Doe"},\n{"email":"mmajor@example.com","firstName":"Mary","lastName":"Major"}\n]}\n')),(0,o.kt)("p",null,'So an "employee" array, this is perfect and expected, but when my service returns a single element the returned object looks like:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"employee":{"email":"jdoe@example.com","firstName":"John","lastName":"Doe"}}\n')),(0,o.kt)("p",null,"As you can see brackets ",(0,o.kt)("strong",{parentName:"p"},"[...]")," are missing around the employee item. This is an issue since your client code is expecting an array."),(0,o.kt)("h4",{id:"a-solution"},"A solution..."),(0,o.kt)("p",null,"My application is using Jersey, the JAX-RS Reference Implementation, and JAXB for the serialization of Java Objects to JSON, as I have explained in a ",(0,o.kt)("a",{parentName:"p",href:"http://tugdualgrall.blogspot.com/2010/02/create-and-deploy-jax-rs-rest-service.html"},"previous blog post"),". I found a solution to this by creating a new ",(0,o.kt)("a",{parentName:"p",href:"http://jersey.java.net/nonav/documentation/latest/json.html#d4e919"},"JAXB Context Resolver"),"."),(0,o.kt)("p",null,"In this resolver I can control how the JSON object should be generated, here is my implementation :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.grallandco.employee.service.converter.EmployeeConverter;\nimport javax.ws.rs.ext.ContextResolver;\nimport javax.ws.rs.ext.Provider;\nimport javax.xml.bind.JAXBContext;\n\nimport com.sun.jersey.api.json.JSONConfiguration;\nimport com.sun.jersey.api.json.JSONJAXBContext;\n\n@Provider\npublic class JAXBContextResolver implements ContextResolver &lt; JAXBContext &gt; {\n\n  private JAXBContext context;\n  private Class[] types = {EmployeeConverter.class};\n\n  public JAXBContextResolver() throws Exception {\n    this.context = new JSONJAXBContext(JSONConfiguration.mapped().arrays("employee").build(),\n    types);\n\n  }\n\n  public JAXBContext getContext(Class objectType) {\n    for (Class type : types) {\n      if (type == objectType) {\n        return context;\n      }\n    }\n    return null;\n  }\n}\n\n')),(0,o.kt)("p",null,"First of all I declare this new class as a ",(0,o.kt)("a",{parentName:"p",href:"http://jersey.java.net/nonav/apidocs/1.7/jersey/index.html?javax/ws/rs/ext/Provider.html"},(0,o.kt)("inlineCode",{parentName:"a"},"@Provider"))," to say that it this class is of interest to the JAX-RS runtime."),(0,o.kt)("p",null,"I put in the ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," array the list of the Java classes that are concerned by the serialization (line#13). Then I create the ContextResolved with the different options that fulfill my requirements. You can take a look to the ",(0,o.kt)("a",{parentName:"p",href:"http://jersey.java.net/nonav/apidocs/1.7/jersey/index.html?com/sun/jersey/api/json/JSONJAXBContext.html"},(0,o.kt)("inlineCode",{parentName:"a"},"JAXBContextResolver"))," Javadoc to see all the possible options available."),(0,o.kt)("p",null,"With this class, the service now returned the following JSON String:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{"employee":[{"email":"jdoe@example.com","firstName":"John","lastName":"Doe"}]}\n')),(0,o.kt)("p",null,"You can find a complete example (NetBeans project) ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tgrall/Sample-REST-Service-using-JSON"},"here"),"."))}y.isMDXComponent=!0}}]);