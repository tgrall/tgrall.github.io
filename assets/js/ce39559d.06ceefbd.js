"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[3869],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var l=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,l,a=function(t,e){if(null==t)return{};var n,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)n=r[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=l.createContext({}),s=function(t){var e=l.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return l.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},c=l.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=s(n),k=a,h=c["".concat(u,".").concat(k)]||c[k]||p[k]||r;return n?l.createElement(h,i(i({ref:e},d),{},{components:n})):l.createElement(h,i({ref:e},d))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91497:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return c},default:function(){return h}});var l=n(87462),a=n(63366),r=(n(67294),n(3905)),i=n(59943),o=["components"],u={title:"Pagination with Couchbase",categories:"couchbase nosql json"},s=void 0,d={permalink:"/blog/2013/10/01/pagination-with-couchbase",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2013-10-01-pagination-with-couchbase.md",source:"@site/blog/2013-10-01-pagination-with-couchbase.md",title:"Pagination with Couchbase",description:'If you have to deal with a large number of documents when doing queries against a Couchbase cluster it is important to use pagination to get rows by page. You can find some information in the documentation in the chapter "Pagination", but I want to go in more details and sample code in this article.',date:"2013-10-01T00:00:00.000Z",formattedDate:"October 1, 2013",tags:[],readingTime:6.055,truncated:!1,authors:[],prevItem:{title:"db.person.find( { 'role' : 'DBA' } )",permalink:"/blog/2014/03/28/dbpersonfind-role-dba"},nextItem:{title:"How to implement Document Versioning with Couchbase",permalink:"/blog/2013/07/18/how-to-implement-document-versioning-with-couchbase"}},p={authorsImageUrls:[]},c=[{value:"Using skip / limit Parameters",id:"using-skip--limit-parameters",children:[]},{value:"Using startkey / startkey_docid parameters",id:"using-startkey--startkey_docid-parameters",children:[]},{value:"Couchbase Java SDK Paginator",id:"couchbase-java-sdk-paginator",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],k={toc:c};function h(t){var e=t.components,n=(0,a.Z)(t,o);return(0,r.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'If you have to deal with a large number of documents when doing queries against a Couchbase cluster it is important to use pagination to get rows by page. You can find some information in the documentation in the chapter "',(0,r.kt)("a",{parentName:"p",href:"http://docs.couchbase.com/couchbase-manual-2.2/#pagination"},"Pagination"),'", but I want to go in more details and sample code in this article.'),(0,r.kt)("p",null,"For this example I will start by creating a simple view based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"beer-sample")," dataset, the view is used to find brewery by country:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function (doc, meta) {\n  if (doc.type == "brewery" &amp;&amp; doc.country){\n    emit(doc.country);\n  }\n}\n')),(0,r.kt)("p",null,"This view list all the breweries by country, the index looks like:"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Doc id"),(0,r.kt)("th",null,"Key"),(0,r.kt)("th",null,"Value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bersaglier"),(0,r.kt)("td",null,"Argentina"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"cervecera_jerome"),(0,r.kt)("td",null,"Argentina"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"brouwerij_nacional_balashi"),(0,r.kt)("td",null,"Aruba"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"australian_brewing_corporation"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"carlton_and_united_breweries"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"coopers_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"foster_s_australia_ltd"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"gold_coast_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"lion_nathan_australia_hunter_street"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"little_creatures_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"malt_shovel_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"matilda_bay_brewing"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"yellowstone_valley_brewing"),(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"yuengling_son_brewing"),(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"zea_rotisserie_and_brewery"),(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fosters_tien_gang"),(0,r.kt)("td",null,"Viet Nam"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"hue_brewery"),(0,r.kt)("td",null,"Viet Nam"),(0,r.kt)("td",null,"null")))),(0,r.kt)("p",null,"So now you want to navigate in this index with a page size of 5 rows."),(0,r.kt)("h3",{id:"using-skip--limit-parameters"},"Using skip / limit Parameters"),(0,r.kt)("p",null,"The most simplistic approach is to use ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"skip")," parameters for example:"),(0,r.kt)("p",null,"Page 1 : ",(0,r.kt)("inlineCode",{parentName:"p"},"?limit=5&amp;skip0"),(0,r.kt)("br",{parentName:"p"}),"\n","Page 2 : ",(0,r.kt)("inlineCode",{parentName:"p"},"?limit=5&amp;skip=5"),"\n...\nPage x : ",(0,r.kt)("inlineCode",{parentName:"p"},"?limit=5&amp;skip(limit*(page-1))")),(0,r.kt)("p",null,"You can obviously use any other parameters you need to do range or key queries (",(0,r.kt)("inlineCode",{parentName:"p"},"startkey/endkey, key, keys"),") and sort option (",(0,r.kt)("inlineCode",{parentName:"p"},"descending"),")."),(0,r.kt)("p",null,"This is simple but not the most efficient way, since the query engine has to read all the rows that match the query, until the skip value is reached."),(0,r.kt)("p",null,"Some code sample in python that paginate using this view :"),(0,r.kt)(i.Z,{id:"6174762",mdxType:"Gist"}),(0,r.kt)("p",null,"This application loops on all the pages until the end of the index."),(0,r.kt)("p",null,"As I said before this is not the best approach since the system must read all the values until the skip is reached. The following example shows a better way to deal with this."),(0,r.kt)("h3",{id:"using-startkey--startkey_docid-parameters"},"Using startkey / startkey_docid parameters"),(0,r.kt)("p",null,"To make this pagination more efficient it is possible to take another approach. This approach uses the  ",(0,r.kt)("inlineCode",{parentName:"p"},"startkey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"startkey_docid"),"  to select the proper documents."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"The startkey"),' parameter will be the value of the key where the query should start to read (based on the last key of the "previous page"'),(0,r.kt)("li",{parentName:"ul"},'Since for a key for example "Germany" you may have one or more ids (documents) it is necessary to say to Couchbase query engine where to start, for this you need to use the ',(0,r.kt)("inlineCode",{parentName:"li"},"startkey_docid")," parameter, and ignore this id since it is the last one of the previous page.")),(0,r.kt)("p",null,"So if we look at the index, and add a row number to explain the pagination"),(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Row num"),(0,r.kt)("th",null,"Doc id"),(0,r.kt)("th",null,"Key"),(0,r.kt)("th",null,"Value")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"4"},(0,r.kt)("br",null),"Query for page 1",(0,r.kt)("br",null),"`?limit=5`")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"1"),(0,r.kt)("td",null),(0,r.kt)("td",null,"bersaglier"),(0,r.kt)("td",null,"Argentina"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"2"),(0,r.kt)("td",null),(0,r.kt)("td",null,"cervecera_jerome"),(0,r.kt)("td",null,"Argentina"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"3"),(0,r.kt)("td",null),(0,r.kt)("td",null,"brouwerij_nacional_balashi"),(0,r.kt)("td",null,"Aruba"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"4"),(0,r.kt)("td",null),(0,r.kt)("td",null,"australian_brewing_corporation"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"5"),(0,r.kt)("td",null),(0,r.kt)("td",null,"carlton_and_united_breweries"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"4"},"Query for page 2",(0,r.kt)("br",null),'`?limit=5&startkey="Australia"&startkey_docid=carlton_and_united_breweries&skip=1`')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"6"),(0,r.kt)("td",null),(0,r.kt)("td",null,"coopers_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"7"),(0,r.kt)("td",null),(0,r.kt)("td",null,"foster_s_australia_ltd"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"8"),(0,r.kt)("td",null),(0,r.kt)("td",null,"gold_coast_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"9"),(0,r.kt)("td",null),(0,r.kt)("td",null,"lion_nathan_australia_hunter_street"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"10"),(0,r.kt)("td",null),(0,r.kt)("td",null,"little_creatures_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"4"},(0,r.kt)("br",null),"Query for page 3",(0,r.kt)("br",null),'`?limit=5&startkey="Australia"&startkey_docid=little_creatures_brewery``&skip=1`')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"11"),(0,r.kt)("td",null),(0,r.kt)("td",null,"malt_shovel_brewery"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"12"),(0,r.kt)("td",null),(0,r.kt)("td",null,"matilda_bay_brewing"),(0,r.kt)("td",null,"Australia"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"..."),(0,r.kt)("td",null,"...")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null),(0,r.kt)("td",null,"yellowstone_valley_brewing"),(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null),(0,r.kt)("td",null,"yuengling_son_brewing"),(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null),(0,r.kt)("td",null,"zea_rotisserie_and_brewery"),(0,r.kt)("td",null,"United States"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null),(0,r.kt)("td",null,"fosters_tien_gang"),(0,r.kt)("td",null,"Viet Nam"),(0,r.kt)("td",null,"null")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"..."),(0,r.kt)("td",null),(0,r.kt)("td",null,"hue_brewery"),(0,r.kt)("td",null,"Viet Nam"),(0,r.kt)("td",null,"null")))),(0,r.kt)("p",null,"So as you can see in the examples above, the query uses the startkey, a document id, and just passes it using skip=1."),(0,r.kt)("p",null,"Let's now look at the application code, once again in Python"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from couchbase import Couchbase\ncb = Couchbase.connect(bucket=\'beer-sample\')\n\nhasRow = True\nrowPerPage = 5\npage = 0\ncurrentStartkey=""\nstartDocId=""\n\nwhile hasRow :\n    hasRow = False\n    skip = 0 if page == 0 else 1\n    page = page + 1\n    print "-- Page %s --" % (page)\n    rows = cb.query("test", "by_country", limit=rowPerPage, skip=skip, startkey=currentStartkey, startkey_docid=startDocId)\n    for row in rows:\n        hasRow = True\n        print "Country: \\"%s\\" \\t Id: \'%s\'" % (row.key, row.docid)\n        currentStartkey = row.key\n        startDocId = row.docid\n    print " -- -- -- -- \\n"\n')),(0,r.kt)("p",null,"This application loops on all the pages until the end of the index"),(0,r.kt)("p",null,"Using this approach, the application start to read the index at a specific key (",(0,r.kt)("inlineCode",{parentName:"p"},"startkey")," parameter), and only loop on the necessary entry in the index. This is more efficient than using the simple skip approach.  "),(0,r.kt)("h4",{id:"views-with-reduce-function"},"Views with Reduce function"),(0,r.kt)("p",null,"When your view is using a reduce function, if you want to paginate on the various keys only (with the reduce function) you need to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"skip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," parameters."),(0,r.kt)("p",null,"When you are using the  paramater ",(0,r.kt)("inlineCode",{parentName:"p"},"startkey_docid")," with a reduce function it will calculate the reduce only to the subset of document ids that are part of your query."),(0,r.kt)("h3",{id:"couchbase-java-sdk-paginator"},"Couchbase Java SDK Paginator"),(0,r.kt)("p",null,"In the previous examples, I have showed how to do pagination using the various query parameters. The Java SDK provides a Paginator object to help developers to deal with pagination. The following example is using the same view with the Paginator API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.couchbase.devday;\n\nimport com.couchbase.client.CouchbaseClient;\nimport com.couchbase.client.protocol.views.*;\nimport java.net.URI;\nimport java.util.HashMap;\nimport java.util.LinkedList;\nimport java.util.List;\nimport java.util.Properties;\nimport java.util.concurrent.TimeUnit;\nimport java.util.logging.ConsoleHandler;\nimport java.util.logging.Handler;\nimport java.util.logging.Level;\nimport java.util.logging.Logger;\n\npublic class JavaPaginatorSample {\n\npublic static void main(String[] args) {\n\n    configure();\n    System.out.println("--------------------------------------------------------------------------");\n    System.out.println("\\tCouchbase - Paginator");\n    System.out.println("--------------------------------------------------------------------------");\n\n    List<URI> uris = new LinkedList<URI>();\n    uris.add(URI.create("http://127.0.0.1:8091/pools"));\n\n    CouchbaseClient cb = null;\n    try {\n        cb = new CouchbaseClient(uris, "beer-sample", "");\n        System.out.println("--------------------------------------------------------------------------");\n        System.out.println("Breweries (by_name) with docs & JSON parsing");\n        View view = cb.getView("test", "by_country");\n        Query query = new Query();\n        int docsPerPage = 5;\n\n        Paginator paginatedQuery = cb.paginatedQuery(view, query, docsPerPage);\n        int pageCount = 0;\n        while(paginatedQuery.hasNext()) {\n            pageCount++;\n            System.out.println(" -- Page "+ pageCount +" -- ");\n            ViewResponse response = paginatedQuery.next();\n            for (ViewRow row : response) {\n                System.out.println(row.getKey() + " : " + row.getId());\n            }\n            System.out.println(" -- -- -- ");\n        }\n        \n        System.out.println("\\n\\n");\n        cb.shutdown(10, TimeUnit.SECONDS);\n    } catch (Exception e) {\n        System.err.println("Error connecting to Couchbase: " + e.getMessage());\n    }\n}\n\n\n\nprivate static void configure() {\n\n    for(Handler h : Logger.getLogger("com.couchbase.client").getParent().getHandlers()) {\n        if(h instanceof ConsoleHandler) {\n            h.setLevel(Level.OFF);\n        }\n    }\n    Properties systemProperties = System.getProperties();\n    systemProperties.put("net.spy.log.LoggerImpl", "net.spy.memcached.compat.log.SunLogger");\n    System.setProperties(systemProperties);\n\n    Logger logger = Logger.getLogger("com.couchbase.client");\n    logger.setLevel(Level.OFF);\n    for(Handler h : logger.getParent().getHandlers()) {\n        if(h instanceof ConsoleHandler){\n            h.setLevel(Level.OFF);\n        }\n    }\n}\n\n}\n')),(0,r.kt)("p",null,"So as you can see you can easily paginate on the results of a Query using the Java Paginator."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"At the line #37, the Paginator is created from using the view and query objects and a page size is specified"),(0,r.kt)("li",{parentName:"ul"},"Then you just need to use the hasNext() and next() methods to navigate in the results.")),(0,r.kt)("p",null,"The Java Paginator  is aware of the fact that they query is using a reduce or not, so you can use it with all type of queries - Internally it will switch between the skip/limit approach and the doc_id approaches. You can ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/couchbase/couchbase-java-client/blob/1.1.9/src/main/java/com/couchbase/client/protocol/views/Paginator.java#L176-L195"},"see how it is done in the Paginator class"),"."),(0,r.kt)("p",null,"Note that if you want to do that in a Web application between HTTP request you must keep the Paginator object in the user session since the current API keeps the current page in its state."),(0,r.kt)("h3",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this blog post you have  learned how to deal with pagination in Couchbase views; to summarize"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The pagination is based on some specific parameters that you send when executing a query."),(0,r.kt)("li",{parentName:"ul"},"Java developers can use the ",(0,r.kt)("a",{parentName:"li",href:"http://www.couchbase.com/autodocs/couchbase-java-client-1.2.0/com/couchbase/client/protocol/views/Paginator.html"},"Paginator")," class that simplifies pagination.")),(0,r.kt)("p",null,"I am inviting you to look at the new Couchbase Query Language N1QL, still under development, that will provide more options to developers including pagination, using LIMIT ","&"," OFFSET parameters, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT fname, age\nFROM tutorial\nWHERE age > 30\nLIMIT 2\nOFFSET 2\n")),(0,r.kt)("p",null,"If you want to learn more about N1QL:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://query.couchbase.com/"},"N1QL on Couchbase Community Portal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://query.pub.couchbase.com/tutorial/"},"N1QL Online Tutorial"))))}h.isMDXComponent=!0},59943:function(t,e,n){var l=n(67294);n(45697);function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var i=function(t){function e(){return a(this,e),r(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.componentDidMount=function(){this._updateIframeContent()},e.prototype.componentDidUpdate=function(t,e){this._updateIframeContent()},e.prototype._defineUrl=function(){var t=this.props,e=t.id,n=t.file;return"https://gist.github.com/"+e+".js"+(n?"?file="+n:"")},e.prototype._updateIframeContent=function(){var t=this.props,e=t.id,n=t.file,l=this.iframeNode,a=l.document;l.contentDocument?a=l.contentDocument:l.contentWindow&&(a=l.contentWindow.document);var r='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+e+"-"+n:"gist-"+e)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";a.open(),a.writeln(r),a.close()},e.prototype.render=function(){var t=this,e=this.props,n=e.id,a=e.file;return l.createElement("iframe",{ref:function(e){t.iframeNode=e},width:"100%",frameBorder:0,id:a?"gist-"+n+"-"+a:"gist-"+n})},e}(l.PureComponent);e.Z=i}}]);