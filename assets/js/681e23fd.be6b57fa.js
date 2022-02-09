"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[66077],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66240:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Getting Started With MapR-DB JSON REST API",tags:["api","maprdb","nosql","rest"]},p=void 0,u={permalink:"/blog/2018/05/23/getting-started-with-mapr-db-json-rest-api",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2018-05-23-getting-started-with-mapr-db-json-rest-api.md",source:"@site/blog/2018-05-23-getting-started-with-mapr-db-json-rest-api.md",title:"Getting Started With MapR-DB JSON REST API",description:"Introduction",date:"2018-05-23T00:00:00.000Z",formattedDate:"May 23, 2018",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"maprdb",permalink:"/blog/tags/maprdb"},{label:"nosql",permalink:"/blog/tags/nosql"},{label:"rest",permalink:"/blog/tags/rest"}],readingTime:2.82,truncated:!0,authors:[],prevItem:{title:"Getting Started with Redis Streams and Java",permalink:"/blog/2019/09/02/getting-with-redis-streams-and-java"},nextItem:{title:"Getting started with MapR-DB Table Replication",permalink:"/blog/2017/08/08/getting-started-with-mapr-db-table-replication"}},s={authorsImageUrls:[]},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Discover the MapR-DB JSON REST API",id:"discover-the-mapr-db-json-rest-api",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this project you will learn how to use the MapR-DB JSON REST API to:"),(0,i.kt)("p",null,"Create and Delete tables\nCreate, Read, Update and Delete documents (CRUD)\nMapR Extension Package 5.0 (MEP) introduced the MapR-DB JSON REST API that allow application to use REST to interact with MapR-DB JSON."),(0,i.kt)("p",null,"You can find information about the MapR-DB JSON REST API in the documentation: ",(0,i.kt)("a",{parentName:"p",href:"https://maprdocs.mapr.com/home/MapR-DB/JSON_DB/UsingMapRDBJSONRESTAPI.html"},"Using the MapR-DB JSON REST API")),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You system should have the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running MapR 6.0.1 & MEP 5.0 cluster with the MapR-DB REST API service installed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"curl")," or equivalent tool")),(0,i.kt)("h2",{id:"discover-the-mapr-db-json-rest-api"},"Discover the MapR-DB JSON REST API"),(0,i.kt)("p",null,"The easiest way to discover it, is to use curl command (or equivalent)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1 - Create a table")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X PUT \\\n  'https://mapr-node:8243/api/v2/table/%2Fapps%2Femp' \\\n  -u root:mapr \\\n  -k\n")),(0,i.kt)("p",null,"In this command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the MapR-DB REST Service (MapR Data Access Gateway) is running on the mapr-node host with the default port ",(0,i.kt)("inlineCode",{parentName:"li"},"8243")," using HTTPS"),(0,i.kt)("li",{parentName:"ul"},"the HTTP verb ",(0,i.kt)("inlineCode",{parentName:"li"},"PUT")," on ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v2/table/")," endoint creates a new table"),(0,i.kt)("li",{parentName:"ul"},"the protocol is HTTP since HTTPS is not enabled on this cluster"),(0,i.kt)("li",{parentName:"ul"},"the new table will be created wit the path ",(0,i.kt)("inlineCode",{parentName:"li"},"/apps/emp")," that is encoded to ",(0,i.kt)("inlineCode",{parentName:"li"},"%2Fapps%2Femp")),(0,i.kt)("li",{parentName:"ul"},"the user ",(0,i.kt)("inlineCode",{parentName:"li"},"root")," with the password ",(0,i.kt)("inlineCode",{parentName:"li"},"mapr")," is used for authentication, using basic authentication"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"-k")," parameter is used to indicate to turn off curl\u2019s verification of the certificate.")),(0,i.kt)("p",null,"In this example, you use the basic authentication, it is also possible to use ",(0,i.kt)("a",{parentName:"p",href:"https://jwt.io/introduction/"},"JSON Web Token"),". You will learn more about this when you will write an application in Go."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2 - Insert Documents")),(0,i.kt)("p",null,"Insert one document"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://mapr-node:8243/api/v2/table/%2Fapps%2Femp\' \\\n  -u root:mapr \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"_id":"user001","first_name":"John","last_name":"Doe", "age" : 28}\' \\\n  -k\n')),(0,i.kt)("p",null,"In this command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v2/table/{path}")," with the verb ",(0,i.kt)("inlineCode",{parentName:"li"},"GET")," is used with a ",(0,i.kt)("inlineCode",{parentName:"li"},"condition")," query parameter"),(0,i.kt)("li",{parentName:"ul"},"the OJAI JSON syntax is used to express the condition: ",(0,i.kt)("inlineCode",{parentName:"li"},'{"$eq":{"last_name":"Doe"}}'))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3 - Update a document")),(0,i.kt)("p",null,"The following example will increment the age by 1 and update the last name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -X POST \\\n  \'https://mapr-node:8243/api/v2/table/%2Fapps%2Femp%2F/document/user001\' \\\n  -u root:mapr \\\n  -H \'Content-Type: application/json\' \\\n  -d \'{"$set" : {"last_name" : "New Doe"}, "$increment" : {"age":1}}\' \\\n  -k\n')),(0,i.kt)("p",null,"In this comamnd:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the URL points to the document ",(0,i.kt)("inlineCode",{parentName:"li"},"_id")," to update"),(0,i.kt)("li",{parentName:"ul"},"the HTTP verb ",(0,i.kt)("inlineCode",{parentName:"li"},"POST")," is used to modify the resource"),(0,i.kt)("li",{parentName:"ul"},"the request body ",(0,i.kt)("inlineCode",{parentName:"li"},"-d")," is the OJAI JSON Mutation that update the last name and increment the age.")),(0,i.kt)("p",null,"You can check that the document has been updated using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X GET \\\n  'https://mapr-node:8243/api/v2/table/%2Fapps%2Femp%2F/document/user001' \\\n  -u root:mapr \\\n  -k\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4 - Delete a document")),(0,i.kt)("p",null,"Delete the document with the ",(0,i.kt)("inlineCode",{parentName:"p"},"_id")," user001."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X DELETE \\\n  'https://mapr-node:8243/api/v2/table/%2Fapps%2Femp%2F/document/user001' \\\n  -u root:mapr \\\n  -k\n")),(0,i.kt)("p",null,"In this command:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the URI ",(0,i.kt)("inlineCode",{parentName:"li"},"/api/v2/table/{path}/document/{id}")," with the HTTP verb ",(0,i.kt)("inlineCode",{parentName:"li"},"DELETE")," is used to delete the document")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5 - Delete the MapR-DB JSON table")),(0,i.kt)("p",null,"The last step of this tutorial is to delete the table using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -X DELETE \\\n  'https://mapr-node:8243/api/v2/table/%2Fapps%2Femp' \\\n  -u root:mapr \\\n  -k\n")),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this tutorial you have learned how to use the MapR-DB JSON REST API to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a table"),(0,i.kt)("li",{parentName:"ul"},"Insert and query documents"),(0,i.kt)("li",{parentName:"ul"},"Update and delete documents"),(0,i.kt)("li",{parentName:"ul"},"Drop table")),(0,i.kt)("p",null,"You can now use the API to create MapR-DB JSON Application using your favorite language."))}d.isMDXComponent=!0}}]);