"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[12994],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Moving my beers from Couchbase to MongoDB",categories:"mongodb nosql couchbase java"},s=void 0,c={permalink:"/blog/2015/02/01/moving-my-beers-from-couchbase-to-mongodb",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-02-01-moving-my-beers-from-couchbase-to-mongodb.md",source:"@site/blog/2015-02-01-moving-my-beers-from-couchbase-to-mongodb.md",title:"Moving my beers from Couchbase to MongoDB",description:"Few days ago I have posted a joke on Twitter",date:"2015-02-01T00:00:00.000Z",formattedDate:"February 1, 2015",tags:[],readingTime:6.875,truncated:!0,authors:[],prevItem:{title:"Introduction to MongoDB Security",permalink:"/blog/2015/02/04/introduction-to-mongodb-security"},nextItem:{title:"Everybody says \u201cHackathon\u201d!",permalink:"/blog/2015/01/23/everybody-says-hackathon"}},u={authorsImageUrls:[]},p=[{value:"Moving the data",id:"moving-the-data",children:[]},{value:"Updating the application code",id:"updating-the-application-code",children:[]},{value:"Adding new features",id:"adding-new-features",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Few days ago I have posted a ",(0,r.kt)("em",{parentName:"p"},"joke")," on Twitter"),(0,r.kt)("blockquote",{class:"twitter-tweet",lang:"en"},(0,r.kt)("p",null,"Moving my Java from Couchbase to MongoDB ",(0,r.kt)("a",{href:"http://t.co/Wnn3pXfMGi"},"pic.twitter.com/Wnn3pXfMGi")),"\u2014 Tugdual Grall (@tgrall) ",(0,r.kt)("a",{href:"https://twitter.com/tgrall/status/559664540041117696"},"January 26, 2015")),(0,r.kt)("script",{async:!0,src:"//platform.twitter.com/widgets.js",charset:"utf-8"}),(0,r.kt)("p",null,"So I decided to move it from a simple picture to a ",(0,r.kt)("em",{parentName:"p"},"real")," project. Let's look at the two phases of this so called project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Moving the data from Couchbase to MongoDB"),(0,r.kt)("li",{parentName:"ul"},"Updating the application code to use MongoDB")),(0,r.kt)("p",null,"Look at this screencast to see it in action:"),(0,r.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/Fpl74Z0HbC0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"moving-the-data"},"Moving the data"),(0,r.kt)("p",null,"I have created a replication server, that uses the Couchbase XDCR protocol to get the document out and insert them into MongoDB. This server use the Couchbase CAPI Server project available ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/couchbaselabs/couchbase-capi-server"},"here"),"."),(0,r.kt)("p",null,"This server will receive all the mutations made in the Couchbase:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a document is inserted or updated the full document is sent"),(0,r.kt)("li",{parentName:"ul"},"When a document is deleted, only the medata are sent"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"replication server"),", save the data into MongoDB (inserts and/or updates - no delete), and then return the list to Couchbase as part of the XDCR Protocol.")),(0,r.kt)("p",null,'One of the challenges is the fact Couchbase does not have the notion of "types" or "collections". You put everything in a ',(0,r.kt)("em",{parentName:"p"},"bucket")," and the application code knows how to deal with the data. Not necessary a problem, just a choice of implementation, but make it sometime harder than expected when you want to write tools. So here the logic that I apply in my replication server, to organize the data in multiple collections when it makes sense ",(0,r.kt)("em",{parentName:"p"},"(and when it is possible)"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If the JSON document does not contains a ",(0,r.kt)("em",{parentName:"li"},"type field"),", all the documents will be saved in a single collection"),(0,r.kt)("li",{parentName:"ul"},"If the JSON document contains a ",(0,r.kt)("em",{parentName:"li"},"type field")," then a collection will be created for each type and documents will be inserted/updated in these collections"),(0,r.kt)("li",{parentName:"ul"},"MongoDB does not allow attributes key to have . and $ signs, so it is necessary to change the name with alternative characters. This is done automatically during the copy of the data.")),(0,r.kt)("p",null,"All this, and more is configurable in the tool."),(0,r.kt)("p",null,"As you can see in the screencast this is straightforward.",(0,r.kt)("em",{parentName:"p"},"(note that I have only tested very simple use cases and deployment)")),(0,r.kt)("p",null,"You can download the tool and the source code here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/tgrall/mongodb-cb-replicator"},"https://github.com/tgrall/mongodb-cb-replicator")),(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"http://goo.gl/WkuHBk"},"MongoCBReplicator.jar")," file.")),(0,r.kt)("h2",{id:"updating-the-application-code"},"Updating the application code"),(0,r.kt)("p",null,"The next step is to use these data in an application. For this I simply use the Beer Sample Java application available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/couchbaselabs/beersample-java"},"Couchbase repository"),"."),(0,r.kt)("p",null,"I just recreated the project and modified few things, to get the application up and running:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Change the connection string"),(0,r.kt)("li",{parentName:"ul"},"Remove the code that generate views"),(0,r.kt)("li",{parentName:"ul"},"Replace set/get by MongoDB operations"),(0,r.kt)("li",{parentName:"ul"},"Replace call to the views by simple queries")),(0,r.kt)("p",null,"The code of the MongoDBeer application is available here:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"[https://github.com/tgrall/mongodbeer]")),(0,r.kt)("p",null,"I did not change any business logic, or added features, or even replaced the way navigation and page rendition is made. I just focused on the database access, for example :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n// Couchbase Query\nView view = client.getView("beer", "by_name");\n    Query query = new Query();\n    query.setIncludeDocs(true).setLimit(20);\n    ViewResponse result = client.query(view, query);\n\n    ArrayList<HashMap<String, String>> beers =\n      new ArrayList<HashMap<String, String>>();\n    for(ViewRow row : result) {\n      HashMap<String, String> parsedDoc = gson.fromJson(\n        (String)row.getDocument(), HashMap.class);\n\n      HashMap<String, String> beer = new HashMap<String, String>();\n      beer.put("id", row.getId());\n      beer.put("name", parsedDoc.get("name"));\n      beer.put("brewery", parsedDoc.get("brewery_id"));\n      beers.add(beer);\n    }\n    request.setAttribute("beers", beers);\n\n\n// MongoDB Query\nDBCursor cursor = db.getCollection("beer").find()\n                                                   .sort( BasicDBObjectBuilder.start("name",1).get() )\n                                                   .limit(20);\n     ArrayList<HashMap<String, String>> beers =\n             new ArrayList<HashMap<String, String>>();\n     while (cursor.hasNext()) {\n         DBObject row = cursor.next();\n         HashMap<String, String> beer = new HashMap<String, String>();\n         beer.put("id", (String)row.get("_id"));\n         beer.put("name", (String)row.get("name"));\n         beer.put("brewery", (String)row.get("brewery_id"));\n         beers.add(beer);\n     }\n\n\n\n// Couchbase update\nclient.set(beerId, 0, gson.toJson(beer));\n\n// MongoDB update\ndb.getCollection("beer").save(new BasicDBObject(beer));\n\n')),(0,r.kt)("p",null,"I did not attend to optimize the MongoDB code,  but just to replace as few lines of code as possible."),(0,r.kt)("p",null,"Note: I have not created any index during the process. Obviously if your application have more and more data and you do intense work with it you must analyze your application/queries to see which indexes must be created."),(0,r.kt)("h2",{id:"adding-new-features"},"Adding new features"),(0,r.kt)("p",null,"Once you have the data into MongoDB you can do a lot more without anything more than MongoDB:"),(0,r.kt)("h4",{id:"full-text-search"},"Full Text Search"),(0,r.kt)("p",null,"You can create a Text index on various fields in the collection to provide advanced search capabilities to your users."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'db.brewery.ensureIndex(\n  {\n    "name" : "text",\n    "description" : "text"\n  },\n  {\n    "weights" :\n    {\n      "name" : 10,\n      "description" : 5\n    },\n    "name" : "TextIndex"\n  }\n\n);\n')),(0,r.kt)("p",null,"Then you can query the database using the ",(0,r.kt)("inlineCode",{parentName:"p"},"$text")," operation, for example all breweries with ",(0,r.kt)("em",{parentName:"p"},"Belgium")," and without ",(0,r.kt)("em",{parentName:"p"},"Ale")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'db.brewery.find( { "$text" : { "$search" : "belgium -ale" }   }  , { "name" : 1  } );\n{ "_id" : "daas", "name" : "Daas" }\n{ "_id" : "chimay_abbaye_notre_dame_de_scourmont", "name" : "Chimay (Abbaye Notre Dame de Scourmont)" }\n{ "_id" : "brasserie_de_cazeau", "name" : "Brasserie de Cazeau" }\n{ "_id" : "inbev", "name" : "InBev" }\n{ "_id" : "new_belgium_brewing", "name" : "New Belgium Brewing" }\n{ "_id" : "palm_breweries", "name" : "Palm Breweries" }\n')),(0,r.kt)("h4",{id:"some-analytics"},"Some analytics"),(0,r.kt)("p",null,"Not sure these queries really make sense, but it is just to show that now you can leverage your documents without the need of any 3rd party tool."),(0,r.kt)("p",null,"Number of beer by category, from the most common to the less one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'db.beer.aggregate([\n  {"$group" : { "_id" : "$category","count" : {"$sum" : 1 } } },\n  {"$sort" : { "count" : -1 } },\n  {"$project" : {   "category" : "$_id", "count" : 1, "_id" : 0 } }\n]);\n\n{ "count" : 1996, "category" : "North American Ale" }\n{ "count" : 1468, "category" : null }\n{ "count" : 564, "category" : "North American Lager" }\n{ "count" : 441, "category" : "German Lager" }\n...\n...\n')),(0,r.kt)("p",null,"Number of beer of a specific ABV by brewery, for example: top 3 breweries with the most beer with an abv greather or equals to a value, let's say 5:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'db.beer.aggregate([\n... { "$match" : { "abv" : { "$gte" : 5 }  } },\n... { "$group" : { "_id" : "$brewery_id", "count" : { "$sum" : 1} }},\n... { "$sort" : { "count" : -1 } },\n... { "$limit" : 3 }\n... ])\n\n{ "_id" : "midnight_sun_brewing_co", "count" : 53 }\n{ "_id" : "troegs_brewing", "count" : 33 }\n{ "_id" : "rogue_ales", "count" : 31 }\n')),(0,r.kt)("h4",{id:"geospatial-queries"},"Geospatial queries"),(0,r.kt)("p",null,"The first thing to do with the data is to change the data structure to save the various data into a GeoJSON format, for this we can simply use a script into the MongoDB Shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'>mongo\n\nuse beers\n\ndb.brewery.find().forEach(\n  function( doc ) {\n    var loc = { type : "Point" };\n    if (doc.geo && doc.geo.lat && doc.geo.lon) {\n      loc.coordinates = [ doc.geo.lon , doc.geo.lat  ];\n      db.brewery.update( { _id : doc._id } , {$set : { loc : loc } }  );\n    }\n  }\n);\n\ndb.brewery.ensureIndex( { "loc" : "2dsphere" } );\n\n')),(0,r.kt)("p",null,"This call take all the breweries and add a new attribute, name ",(0,r.kt)("inlineCode",{parentName:"p"},"loc")," as a GeoJSON point. I could also chose to remove the old geo information using a '$unset', but I did not; let's imagine that some API/applications are using it. This is a good example of flexible schema."),(0,r.kt)("p",null,"Now I can search for all the brewery that are at less than 30km from the Golden Gate in San Francisco: ","[-122.478255,37.819929]"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'db.brewery.find(\n  { "loc" :\n    { "$near" :\n      { "$geometry" :\n        {\n          "type" : "Point",\n          "coordinates" : [-122.478255,37.819929]\n        },\n        "$maxDistance" : 20000\n\n      }\n    }\n  }\n  , { name : 1 }  \n)\n')),(0,r.kt)("p",null,"You can also use Geospatial indexes and operators in the aggregation queries used above"),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"As as said in the introduction, this week end project started as a joke on Twitter, and finished with a small blog post and Gitub repositories."),(0,r.kt)("p",null,"My goal here is not to compare the two solutions -I made my choice few months back-  but simply show how you can move from one to the other with almost no effort, not only the data but also the application code."))}h.isMDXComponent=!0}}]);