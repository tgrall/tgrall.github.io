(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[16221],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=u(a),h=l,m=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20635:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return h}});var n=a(22122),l=a(19756),o=(a(67294),a(3905)),i=["components"],r={title:"Couchbase 101 : install, store and query data",categories:"nosql couchbase rest json"},s=void 0,u={permalink:"/blog/2012/07/06/couchbase-101-install-store-and-query-data",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2012-07-06-couchbase-101-install-store-and-query-data.md",source:"@site/blog/2012-07-06-couchbase-101-install-store-and-query-data.md",title:"Couchbase 101 : install, store and query data",description:"Introduction",date:"2012-07-06T00:00:00.000Z",formattedDate:"July 6, 2012",tags:[],readingTime:7.01,truncated:!1,authors:[],prevItem:{title:"Create a Simple Node.js and Couchbase application... on OS X",permalink:"/blog/2012/09/24/create-a-simple-node-dot-js-and-couchbase-application-dot-dot-dot-on-os-x"},nextItem:{title:"eXo Platform: Internationalization of content",permalink:"/blog/2012/05/11/exo-platform-internationalization-of-content"}},c={authorsImageUrls:[]},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Couchbase 101 : Insert and Query data",id:"couchbase-101--insert-and-query-data",children:[{value:"Installation",id:"installation",children:[]},{value:"Start and Configure Couchbase Server",id:"start-and-configure-couchbase-server",children:[]},{value:"Insert Data",id:"insert-data",children:[]},{value:"Query Data",id:"query-data",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],p={toc:d};function h(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this post I just want to show how easily is to get\nstarted with Couchbase, and also explain how to \u201cquery\u201d the data. The basic\nsteps of this tutorial are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install Couchbase"),(0,o.kt)("li",{parentName:"ol"},"Create Data"),(0,o.kt)("li",{parentName:"ol"},"Query Data")),(0,o.kt)("p",null,"I will try to post more articles, if I have time to show how to use Couchbase from your applications (starting with Java)."),(0,o.kt)("p",null,"Prerequisites :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Could not be simpler : Couchbase 2.0 available ",(0,o.kt)("a",{parentName:"li",href:"http://www.couchbase.com/downloads-all"},"here"),". (Currently in Developer Preview)")),(0,o.kt)("h2",{id:"couchbase-101--insert-and-query-data"},"Couchbase 101 : Insert and Query data"),(0,o.kt)("h3",{id:"installation"},"Installation"),(0,o.kt)("p",null,"I am using Couchbase on Mac OS X, so let me describe the installation in this environment. If you are using other operating system just take a look to the Couchbase documentation."),(0,o.kt)("p",null,"Couchbase installation is very (very!) fast:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the Mac OS X Zip file."),(0,o.kt)("li",{parentName:"ol"},"Double-click the downloaded Zip installation file to extract the contents. This will create a single file, the Couchbase.app application."),(0,o.kt)("li",{parentName:"ol"},"Drag and Drop the Couchbase.app to your chosen installation folder, such as the system Applications folder.")),(0,o.kt)("h3",{id:"start-and-configure-couchbase-server"},"Start and Configure Couchbase Server"),(0,o.kt)("p",null,"To start Couchbase Server, just double click on the Couchbase Server. Once the server is started, a new icon is added in the OS X Menu to indicate that the Server is up and running."),(0,o.kt)("p",null,"You can now configure your Couchbase instance, for this you just need to access the Admin Console, available at the following location ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:8091/"},"http://127.0.0.1:8091")," (change the IP address if needed) or simply by going in the Couchbase menu and click on Open Admin Console entry."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-UokiHs1DlFw/T_VpJHmn8KI/AAAAAAAAAUo/oy7bh5w9nOw/s1600/couchbase-menu.png",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Welcome Screen : Click Setup"),(0,o.kt)("li",{parentName:"ol"},"Set the disk and cluster configuration. On my instance I keep the default location for the on disk storage. Just configure the size of the memory usage for your instance, for example 800Mb. So far, we have a single instance, so no need to join a cluster."),(0,o.kt)("li",{parentName:"ol"},"Choose to generate sample data. This will be interesting to learn more about data and views."),(0,o.kt)("li",{parentName:"ol"},"Create ",(0,o.kt)("inlineCode",{parentName:"li"},"the default")," bucket (use for testing only). A bucket is used by Couchbase to store data. It could be compared to a \u201cdatabase\u201d in RDBMS world."),(0,o.kt)("li",{parentName:"ol"},"Configure update notifications to be alerted when new version of Couchbase is released"),(0,o.kt)("li",{parentName:"ol"},"Configure the server with a final step with the administrator username and password"),(0,o.kt)("li",{parentName:"ol"},"When this is done you are automatically redirected to the Admin Console.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-_a1iynqdk8w/T_VpTwa5qEI/AAAAAAAAAUw/ZGBHZsC6x_8/s320/install-step8.png",alt:null})),(0,o.kt)("p",null,"This is it! You are ready to use your Couchbase server."),(0,o.kt)("p",null,"Couchbase has many interesting features, especially around scalability and elasticity but for not in this article let's focus on the basics :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Insert some data and query them")),(0,o.kt)("h3",{id:"insert-data"},"Insert Data"),(0,o.kt)("p",null,"Couchbase has many ways to manipulate data from you favorite programming language using the different client libraries : Java, Python, PHP, Ruby, .Net, C. For now let's use the Admin Console to create and query data."),(0,o.kt)("p",null,"Couchbase can store any type of data, but when you need to manipulate some data with a structure the best way is to use JSON Documents. So let's use the console and create documents."),(0,o.kt)("p",null,'To create new documents in your database, click on the "Data Buckets" tab. If you have installed the sample you see 2 buckets: ',(0,o.kt)("inlineCode",{parentName:"p"},"default")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gamesim-sample"),"."),(0,o.kt)("p",null,"Let's create a new documents in the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," bucket:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on Documents button"),(0,o.kt)("li",{parentName:"ol"},"Click on Create Document"),(0,o.kt)("li",{parentName:"ol"},"Since each document must have an id for example 100."),(0,o.kt)("li",{parentName:"ol"},"Couchbase save the document and add some metadata such as ","_","rev, $flags, expiration"),(0,o.kt)("li",{parentName:"ol"},"Add new attributes to the document that describe an employee : Name, Departement and Salary, then save it. You just need to update the JSON object with values")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n      "_id": "100",\n      "name": "Thomas",\n      "dept": "Sales",\n      "salary": 5000\n  }\n')),(0,o.kt)("p",null,"Repeat the operation with some other employees :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"  200,Jason,Technology,5500\n  300,Mayla,Technology,7000\n  400,Nisha,Marketing,9500\n  500,Randy,Technology,6000\n  501,Ritu,Accounting,5400\n")),(0,o.kt)("p",null,"You have now a list of employees in your database. That was easy isn't? Let's now query them."),(0,o.kt)("h3",{id:"query-data"},"Query Data"),(0,o.kt)("p",null,"Access document directly from its ID"),(0,o.kt)("p",null,"First of all you can quickly access a document using a simple HTTP request using its id. For example to access the Mayla with the id 300 just enter the following URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:8092/default/300"),"  ")),(0,o.kt)("p",null,"In this URL you have :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"8092")," is the Couch API REST port used to access data (where 8091 is the port for the Admin console)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default")," is the bucket in which the document is stored"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"300")," is the id of the document")),(0,o.kt)("h4",{id:"search-your-data-with-queries"},"Search your data with queries"),(0,o.kt)("p",null,"So we have seen how you can access one document. But what if my need is :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Give me all the employee of the Technology department"')),(0,o.kt)("p",null,"To achieve such query it is necessary to create views. The views are used by Couchbase server to index and search your data. A view is a Map function written in JavaScript, that will generate a key value list that is compliant with logic you put in the Map function. Note that this key,value is now indexed and sorted by key. This is important when you query your data."),(0,o.kt)("p",null,"So let's create a new view from the Admin Console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Click on the Views tab (be sure you are on the default bucket)"),(0,o.kt)("li",{parentName:"ol"},'Click on the "Create Development View"'),(0,o.kt)("li",{parentName:"ol"},"Enter the Document and View name:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Document Name : _design/dev_dept"),(0,o.kt)("li",{parentName:"ul"},"View Name : dept")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Cick Save"),(0,o.kt)("li",{parentName:"ol"},"Click on your View to edit it")),(0,o.kt)("p",null,"Since we need to provide the list of employees that are part of a the Technology department, we need to create a view that use the ",(0,o.kt)("u",null,"department as key"),", so the map function looks like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function (doc) {\n    emit(doc.dept, null);\n}\n")),(0,o.kt)("p",null,"Save the view"),(0,o.kt)("p",null,'This function takes the document and create a list that contains the "dept" as key and null as value. The value itself is not that important in our case. A simple rule will be : do not put too much data in the value since at the end Couchbase server creates an index with this map. Will see that Couchbase allows developer to easily get the document information when accessing a view.'),(0,o.kt)("p",null,'Click on the "Show Results" button, the result will look like:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"total_rows":6,"rows":[\n  {"id":"501","key":"Accounting","value":null},\n  {"id":"400","key":"Marketing","value":null},\n  {"id":"100","key":"Sales","value":null},\n  {"id":"200","key":"Technology","value":null},\n  {"id":"300","key":"Technology","value":null},\n  {"id":"500","key":"Technology","value":null}\n  ]\n}\n')),(0,o.kt)("p",null,"As we have seen in earlier it is possible to access the document using a single URL, it is the same for views. You can for example access the view we have just created using the following URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8092/default/_design/dev_dept/_view/dept"},"http://127.0.0.1:8092/default/_design/dev_dept/_view/dept\n"))),(0,o.kt)("p",null,"Now it is possible to use query parameter to filter the results using the key parameter with the value entered using a JSON String :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8092/default/_design/dev_dept/_view/dept?key=%22Technology%22"},'http://127.0.0.1:8092/default/_design/dev_dept/_view/dept?key="Technology"'))),(0,o.kt)("p",null,"The result of this query is now :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"total_rows":6,"rows":[\n  {"id":"200","key":"Technology","value":null},\n  {"id":"300","key":"Technology","value":null},\n  {"id":"500","key":"Technology","value":null}\n  ]\n}\n')),(0,o.kt)("p",null,"You have many other parameters you can use when accessing a view to control the size, the time out, .... One of them is quite interesting is include_docs that ask Couchbase to include the full content of the document in the result. So if you call :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8092/default/_design/dev_dept/_view/dept?key=%22Technology%22&include_docs=true"},'http://127.0.0.1:8092/default/_design/dev_dept/_view/dept?key="Technology"',"&","include_docs=true"))),(0,o.kt)("p",null,"The result is :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"total_rows":6,"rows":[\n  {"id":"200","key":"Technology","value":null,"doc":  {"_id":"200","_rev":"1-1de6e6751608eada0000003200000000","$flags":0,"$expiration":0,"name":"Jason","dept":"Technology","salary":5500}},\n  {"id":"300","key":"Technology","value":null,"doc":{"_id":"300","_rev":"1-f3e44cee742bfae10000003200000000","$flags":0,"$expiration":0,"name":"Mayla","dept":"Technology","salary":7000}},\n  {"id":"500","key":"Technology","value":null,"doc":  {"_id":"500","_rev":"1-05780359aac8f3790000003200000000","$flags":0,"$expiration":0,"name":"Randy","dept":"Technology","salary":6000}}\n]\n}\n')),(0,o.kt)("p",null,"Let's now create a little more complicated view to answer the following business requirement:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Give me all the employee with a salary between 5000 and 6000"')),(0,o.kt)("p",null,"So now you know that you need to create a new view with the salary as key let's with the following Map function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function (doc) {\n  emit(doc.salary, null);\n}\n")),(0,o.kt)("p",null,"Couchbase is automatically sorting the key when creating/updating the index so, let's use the ",(0,o.kt)("inlineCode",{parentName:"p"}," startkey"),"  and  ",(0,o.kt)("inlineCode",{parentName:"p"},"endkey")," parameter when calling the view. So let's call the view with from the following URL:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://127.0.0.1:8092/default/_design/dev_salary/_view/salary?startkey=5000&endkey=6000&include_docs=true"},"http://127.0.0.1:8092/default/_design/dev_salary/_view/salary?startkey=5000","&","endkey=6000","&","include_docs=true"))),(0,o.kt)("p",null,"The result is :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"total_rows":6,"rows":[\n {"id":"100","key":5000,"value":null,"doc":{"_id":"100","_rev":"1-0f33580d780014060000002e00000000","$flags":0,"$expiration":0,"name":"Thomas","dept":"Sales","salary":5000}},\n {"id":"501","key":5400,"value":null,"doc":{"_id":"501","_rev":"1-b1fe5bc79637720e0000003100000000","$flags":0,"$expiration":0,"name":"Ritu","dept":"Accounting","salary":5400}},\n {"id":"200","key":5500,"value":null,"doc":{"_id":"200","_rev":"1-1de6e6751608eada0000003200000000","$flags":0,"$expiration":0,"name":"Jason","dept":"Technology","salary":5500}},\n {"id":"500","key":6000,"value":null,"doc":{"_id":"500","_rev":"1-05780359aac8f3790000003200000000","$flags":0,"$expiration":0,"name":"Randy","dept":"Technology","salary":6000}}\n]\n}\n')),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this short article you have learn how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Couchbase*   Create data using the Admin Console"),(0,o.kt)("li",{parentName:"ul"},"Query data with views")),(0,o.kt)("p",null,"When I get more time I will write another article that do the same from Java, and other languages."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Note from @ingenthr"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Nice blog! Note that while querying the REST interface directly is okay, we've really tried to make it easy by having high-level language support for queries in each of the official client libraries. They're all listed over at ",(0,o.kt)("a",{parentName:"p",href:"http://www.couchbase.com/develop"},"http://www.couchbase.com/develop"))))}h.isMDXComponent=!0}}]);