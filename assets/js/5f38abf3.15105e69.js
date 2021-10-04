(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[81923],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),d=o,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},61717:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var i=n(22122),o=n(19756),r=(n(67294),n(3905)),a=["components"],s={title:"How to implement Document Versioning with Couchbase",categories:"couchbase java nosql json"},l=void 0,c={permalink:"/blog/2013/07/18/how-to-implement-document-versioning-with-couchbase",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2013-07-18-how-to-implement-document-versioning-with-couchbase.md",source:"@site/blog/2013-07-18-how-to-implement-document-versioning-with-couchbase.md",title:"How to implement Document Versioning with Couchbase",description:"Introduction",date:"2013-07-18T00:00:00.000Z",formattedDate:"July 18, 2013",tags:[],readingTime:6.54,truncated:!0,authors:[],prevItem:{title:"Pagination with Couchbase",permalink:"/blog/2013/10/01/pagination-with-couchbase"},nextItem:{title:"Deploy your Node/Couchbase application to the cloud with Clever Cloud",permalink:"/blog/2013/07/11/deploy-your-node-slash-couchbase-application-to-the-cloud-with-clever-cloud"}},u={authorsImageUrls:[]},p=[{value:"Introduction",id:"introduction",children:[]},{value:"Design",id:"design",children:[]},{value:"Implementing the versioning",id:"implementing-the-versioning",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,'Developers are often asking me how to "version" documents with Couchbase 2.0. The short answer is: the clients and server do not expose such feature, but it is quite easy to implement.'),(0,r.kt)("p",null,"In this article I will use a basic approach, and you will be able to extend it depending of your business requirements."),(0,r.kt)("h3",{id:"design"},"Design"),(0,r.kt)("p",null,'The first thing to do is to select how to "store/organize" the versions of your document, and for this you have different designs:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"copy the versions the document into new documents"),(0,r.kt)("li",{parentName:"ul"},"copy the versions of the document into a list of embedded documents"),(0,r.kt)("li",{parentName:"ul"},"store the list of attributes that have been changed into a embedded element (or new documents)"),(0,r.kt)("li",{parentName:"ul"},'store the "delta"'),(0,r.kt)("li",{parentName:"ul"},"\u2026")),(0,r.kt)("p",null,"You will have to chose the design based on your application requirements (business logic, size of the dataset, ...).  For this article, let's use one of the most simplistic approach: create new document for each version with the following rules for the keys:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The current version is is a simple Key/Document, no change to the key."),(0,r.kt)("li",{parentName:"ol"},"The version is a copy of the document, and the version number is added to the key.")),(0,r.kt)("p",null,"This looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Current Version   mykey\nVersion 1         mykey::v1\nVersion 2         mykey::v2\n...               ...\n")),(0,r.kt)("p",null,"With this approach, existing applications will always use the current version of the document, since the key is not changed. But this approach creates new documents that will be indexed by existing views."),(0,r.kt)("p",null,"For example, in the Beer Sample application, the following view is used to list the beer by name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function (doc, meta) {\n  if(doc.type &amp;&amp; doc.type == "beer") {\n    emit(doc.name);\n  }\n}\n')),(0,r.kt)("p",null,'It is quite simple to "support" versioning without impacting the existing code, except the view itself. The new view needs to emit keys,value only for the current version of the document. This is the new view code:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'function (doc, meta) {\n  if(doc.type &amp;&amp; doc.type == "beer" &amp;&amp; (meta.id).indexOf("::v") == -1   ) {\n    emit(doc.name);\n  }\n}\n')),(0,r.kt)("p",null,"With this change the existing applications that are using this view will continue to work with the same behavior."),(0,r.kt)("h3",{id:"implementing-the-versioning"},"Implementing the versioning"),(0,r.kt)("p",null,"Based on this design, when the application needs to version the document, the following logic should happen:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get the current version of the document"),(0,r.kt)("li",{parentName:"ol"},"Increment the version number (for example using another key that maintains the version number for each document)"),(0,r.kt)("li",{parentName:"ol"},'Create the version with the new key  "mykey::v1"'),(0,r.kt)("li",{parentName:"ol"},"Save the document current version")),(0,r.kt)("p",null,"Let's look at the code in Java"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object obj = client.get(key);\nif (obj != null) {\n  // get the next version, create or use the key: mykey_version\n  long version = client.incr(key + "_version", 1, 1);\n  String keyForVersion = key + "::v" + version; // mykey::v1\n  try {\n    client.set(keyForVersion, obj).get();\n    } catch (Exception e) {\n      logger.severe("Cannot save version "+ version + " for key "+ key +" - Error:"+ e.getMessage() );\n    }\n  }\n  client.set(key, value);\n')),(0,r.kt)("p",null,"Quite simple isn't?"),(0,r.kt)("p",null,"The application can access the document using the key, but also get one version or the list of all versions, this is one of the reasons why it is interesting to create a key (",(0,r.kt)("inlineCode",{parentName:"p"},"mykey_version"),"), and use it also to delete documents and related versions."),(0,r.kt)("p",null,"Based on the previous comment, the delete operation looks like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Object obj = client.get(key);\n// need to delete all the version first\nObject vObject = this.get(key + "_version");\nif (vObject != null) {\n  long biggerVersion = Long.parseLong((String) vObject);\n  try {\n    // delete all the versions\n    for (int i = 1; i <= biggerVersion; i++) {\n      String versionKey = key + "::v" + i;\n      client.delete(versionKey).get();\n    }\n    // delete the counter\n    client.delete(key + "_version").get();\n  } catch (InterruptedException e) {\n    e.printStackTrace();\n  } catch (ExecutionException e) {\n    e.printStackTrace();\n  }\n}\nclient.delete(key);\n')),(0,r.kt)("h4",{id:"use-versioning"},"Use versioning"),(0,r.kt)("p",null,"As an example, I have created a small library available on GitHub ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-how-to-versioning"},"https://github.com/tgrall/couchbase-how-to-versioning"),", this library extends the Couchbase Client and overrides some of the operations : set, replace and delete. (the basic one: no TLL, no durability) As I said before this is just an example."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Build and Install")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/tgrall/couchbase-how-to-versioning.git\ncd how-to-versioning\nmvn clean install\n")),(0,r.kt)("p",null,"Then add this library to your project in addition to Couchbase Java Client, for example in your pom.xml"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"...\n<dependency>\n  <groupid>com.couchbase.howtos</groupid>\n  <artifactid>couchbase-how-to-versioning</artifactid>\n  <version>1.0-SNAPSHOT</version>\n</dependency>\n<dependency>\n  <groupid>couchbase</groupid>\n  <artifactid>couchbase-client</artifactid>\n  <version>1.1.8</version>\n</dependency>\n\n...\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Code your application")),(0,r.kt)("p",null,"Create a document and version it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<uri> uris = new LinkedList<uri>();\nuris.add(URI.create("http://127.0.0.1:8091/pools"));\nCouchbaseClientWithVersioning client = null\ntry {\n  client = new CouchbaseClientWithVersioning(uris, "default", "");\n  String key = "key-001";\n  client.set(key, "This is the original version");\n  System.out.printf("Original \'%s\' .\\n", client.get(key));\n  client.set(key, "This is a new version", true); // create a new version\n  System.out.printf("Current Version \'%s\' .\\n", client.get(key));\n  System.out.printf("Version 1 \'%s\' .\\n", client.get(key, 1));\n  client.set(key, "This is another version", true); // create a new version\n  System.out.printf("All versions %s .\\n", client.getAllVersions(key));\n  client.deleteVersion(key, 1); // create a new version\n  System.out.printf("All versions %s (after delete 1 version).\\n", client.getAllVersions(key));\n  client.delete(key); // create a new version\n  System.out.printf("All versions %s (after delete the main key).\\n", client.getAllVersions(key));\n} catch (Exception e) {\n  e.printStackTrace();\n}\nif (client !=null) {\n  client.shutdown();\n}\n')),(0,r.kt)("p",null,"Quick explanation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Line 5: instead of using the ",(0,r.kt)("inlineCode",{parentName:"li"},"CouchbaseClient"),", the application uses the extended ",(0,r.kt)("inlineCode",{parentName:"li"},"CouchbaseClientWithVersioning")," class."),(0,r.kt)("li",{parentName:"ul"},"Line 7: create a new entry"),(0,r.kt)("li",{parentName:"ul"},'Line 9: create a new version, the boolean value to "true" force the versioning of the document'),(0,r.kt)("li",{parentName:"ul"},"The application use other methods such as get a specific version (line 11), get all versions (line 13), delete a specific version (line 14), and finally delete the key and all versions (line 16).")),(0,r.kt)("p",null,"So using this approach the developer controls explicitly when to create a version, since he has to add the boolean parameter in the set operation. In this small sample library it is also possible to do auto versioning, in this case all set and replace calls will create a version, to achieve that the developer just needs to call the setAutoVersioning(true) method. Something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'client = new CouchbaseClientWithVersioning(uris, "default", "");\nclient.setAutomaticVersionning(true);\n')),(0,r.kt)("p",null,"With this approach you can provide versioning to your application with minimal code change. You can test it in the Beer Sample application, just do not forget to change the views as documenter above to only return ",(0,r.kt)("em",{parentName:"p"},"current")," version of the documents."),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"As you can see doing versioning in Couchbase is not that complicated, but it is something that must be done by your application based on its requirements and constraints. You have many different solution and none of these options is perfect for all use cases."),(0,r.kt)("p",null,'In this specific sample code, I am working with a simple design where I create a copy of the documents for each version. With this approach also, it is interesting to mention that you can version "anything", not only JSON document but also any values.  As I said before, this is one possible approach, and like any design, it has some impact on the application or database, in this case most the database:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Increase the number of keys and documents"),(0,r.kt)("li",{parentName:"ul"},"Double - or more- the number of operations, for example when updating a document, the application needs to get the current value, create a version, save the current version."),(0,r.kt)("li",{parentName:"ul"},"Consistency management when adding new version and incrementing the version number (need to deal with errors when creating a new version, deleting the versions and counter....)")),(0,r.kt)("p",null,"Many features could be added to this easily, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Limit to a specific number of version,"),(0,r.kt)("li",{parentName:"ul"},"Enable the versioning only of replace() operation"),(0,r.kt)("li",{parentName:"ul"},"Add specific attribute about versions in JSON document (for example date of the version)"),(0,r.kt)("li",{parentName:"ul"},"....")),(0,r.kt)("p",null,"If you are using versioning in your Couchbase application feel free to comment or write a small article that describes the way your are doing it."))}d.isMDXComponent=!0}}]);