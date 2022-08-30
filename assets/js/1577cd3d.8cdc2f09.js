(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[76286],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66116:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return m}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),r=["components"],l={title:"Introduction to MongoDB Geospatial feature",categories:"mongodb nosql json geo"},s=void 0,p={permalink:"/blog/2014/08/21/introduction-to-mongodb-geospatial-feature",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2014-08-21-introduction-to-mongodb-geospatial-feature.md",source:"@site/blog/2014-08-21-introduction-to-mongodb-geospatial-feature.md",title:"Introduction to MongoDB Geospatial feature",description:"This post is a quick and simple introduction to Geospatial feature of MongoDB 2.6 using simple dataset and queries.",date:"2014-08-21T00:00:00.000Z",formattedDate:"August 21, 2014",tags:[],readingTime:8.11,truncated:!1,authors:[],prevItem:{title:"Big Data... Is Hadoop the good way to start?",permalink:"/blog/2014/11/25/big-data-dot-dot-dot-is-hadoop-the-good-way-to-start"},nextItem:{title:"db.person.find( { 'role' : 'DBA' } )",permalink:"/blog/2014/03/28/dbpersonfind-role-dba"}},u={authorsImageUrls:[]},c=[{value:"Storing Geospatial Informations",id:"storing-geospatial-informations",children:[]},{value:"Querying Geospatial Informations",id:"querying-geospatial-informations",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This post is a quick and simple introduction to Geospatial feature of MongoDB 2.6 using simple dataset and queries."),(0,i.kt)("h3",{id:"storing-geospatial-informations"},"Storing Geospatial Informations"),(0,i.kt)("p",null,"As you know you can store any type of data, but if you want to query them you need to use some coordinates, and create index on them. MongoDB supports three types of indexes for GeoSpatial queries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/core/2d/"},"2d Index")," : uses simple coordinate (longitude, latitude). As stated in the documentation: ",(0,i.kt)("em",{parentName:"li"},"The 2d index is intended for legacy coordinate pairs used in MongoDB 2.2 and earlier"),". For this reason, I won't detail anything about this in this post. Just for the record 2d Index are used to query data stored as points on a two-dimensional plane"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/core/2dsphere/"},"2d Sphere Index")," : support queries of any geometries on an-earth-like sphere, the data can be stored as GeoJSON and legacy coordinate pairs (longitude, latitude). For the rest of the article I will use this type of index and focusing on GeoJSON."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/core/geohaystack/"},"Geo Haystack")," : that are used to query on very small area. It is today less used by applications and I will not describe it in this post.\nSo this article will focus now on the 2d Sphere index with GeoJSON format to store and query documents.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"So what is GeoJSON?")),(0,i.kt)("p",null,"You can look at the ",(0,i.kt)("a",{parentName:"p",href:"http://geojson.org/"},"http://geojson.org/")," site, let's do a very short explanation. GeoJSON is a format for encoding, in JSON, a variety of geographic data structures, and support the following types:  Point , LineString , Polygon , MultiPoint , MultiLineString , MultiPolygon and Geometry."),(0,i.kt)("p",null,"The GeoJSON format  is quite straightforward based, for the simple geometries, on two attributes: type and coordinates. Let's take some examples:"),(0,i.kt)("p",null,"The city where I spend all my childhood, Pleneuf Val-Andr\xe9, France, has the following coordinates (from Wikipedia)"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"48\xb0 35\u2032 30.12\u2033 N, 2\xb0 32\u2032 48.84\u2033 W")),(0,i.kt)("p",null,"This notation is a point, based on a latitude ","&"," longitude using the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/World_Geodetic_System"},"WGS 84")," (Degrees, Minutes, Seconds) system. Not very easy to use by application/code, this is why it is also possible to represent the exact same point using the following values for latitude ","&"," longitude:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"48.5917, -2.5469")),(0,i.kt)("p",null,"This one uses the ",(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/World_Geodetic_System"},"WGS 84")," (Decimal Degrees) system. This is the coordinates you see use in most of the application/API you are using as developer (eg: Google Maps/Earth for example)"),(0,i.kt)("p",null,"By default GeoJSON, and MongoDB use these values but ",(0,i.kt)("strong",{parentName:"p"},"the coordinates must be stored in the longitude, latitude order"),", so this point in GeoJSON will look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "Point",\n  "coordinates": [\n  -2.5469,  \n  48.5917\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-0GfvAvSgLM8/U_NwAR_BCpI/AAAAAAAAArI/INweKtutfDQ/s1600/01-geojson-point.png",alt:null})),(0,i.kt)("p",null,'This is a simple "Point", let\'s now for example look at a line, a very nice walk on the beach :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "LineString",\n  "coordinates": [\n    [-2.551082,48.5955632],\n    [-2.551229,48.594312],\n    [-2.551550,48.593312],\n    [-2.552400,48.592312],\n    [-2.553677, 48.590898]\n  ]\n  }\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://1.bp.blogspot.com/-dg_myaJAG-c/U_Nv80jrncI/AAAAAAAAArA/utmCcBlQeqY/s1600/02-geojson-linestring.png"},"http://1.bp.blogspot.com/-dg_myaJAG-c/U_Nv80jrncI/AAAAAAAAArA/utmCcBlQeqY/s1600/02-geojson-linestring.png")," )"),(0,i.kt)("p",null,"So using the same approach you will be able to create MultiPoint, MultiLineString, Polygon, MultiPolygon. It is also possible to mix all these in a single document using a GeometryCollection. The following example is a Geometry Collection of MultiLineString and Polygon over Central Park:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "GeometryCollection",\n  "geometries" : [\n    {\n      "type" : "Polygon",\n      "coordinates" : [\n[\n  [ -73.9580, 40.8003 ],\n  [ -73.9498, 40.7968 ],\n  [ -73.9737, 40.7648 ],\n  [ -73.9814, 40.7681 ],\n  [ -73.9580, 40.8003  ]\n]\n      ]\n    },\n    {\n      "type" : "MultiLineString",\n      "coordinates" : [\n[ [ -73.96943, 40.78519 ], [ -73.96082, 40.78095 ] ],\n[ [ -73.96415, 40.79229 ], [ -73.95544, 40.78854 ] ],\n[ [ -73.97162, 40.78205 ], [ -73.96374, 40.77715 ] ],\n[ [ -73.97880, 40.77247 ], [ -73.97036, 40.76811 ] ]\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-tIxoUIeSMWw/U_SUsEJ_EDI/AAAAAAAAArY/2qelBrB1xRY/s1600/03-gejson-collection.png",alt:null})),(0,i.kt)("p",null,"Note: You can if you want test/visualize these JSON documents using the ",(0,i.kt)("a",{parentName:"p",href:"http://geojsonlint.com/"},"http://geojsonlint.com/")," service."),(0,i.kt)("h5",{id:"now-what-lets-store-data"},"Now what? Let's store data!"),(0,i.kt)("p",null,"Once you have a GeoJSON document you just need to store it into your document. For example if you want to store a document about JFK Airport with its location you can run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.airports.insert(\n{\n  "name" : "John F Kennedy Intl",\n  "type" : "International",\n  "code" : "JFK",\n  "loc" : {\n    "type" : "Point",\n    "coordinates" : [ -73.778889, 40.639722 ]\n  }\n}\n')),(0,i.kt)("p",null,"Yes this is that simple! You just save the GeoJSON as one of the attribute of the document, ",(0,i.kt)("inlineCode",{parentName:"p"},"loc")," in this example)"),(0,i.kt)("h3",{id:"querying-geospatial-informations"},"Querying Geospatial Informations"),(0,i.kt)("p",null,"Now that we have the data stored in MongoDB, it is now possible to use the geospatial information to do some interesting queries."),(0,i.kt)("p",null,"For this we need a sample dataset. I have created one using some open data found in various places. This dataset contains the following informations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"airports collection with the list of US airport (Point)"),(0,i.kt)("li",{parentName:"ul"},"states collection with the list of US states (MultiPolygon)")),(0,i.kt)("p",null,"I have created this dataset from various OpenData sources ( ",(0,i.kt)("a",{parentName:"p",href:"http://geocommons.com/"},"http://geocommons.com/")," , ",(0,i.kt)("a",{parentName:"p",href:"http://catalog.data.gov/dataset"},"http://catalog.data.gov/dataset")," ) and use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/mapbox/togeojson"},"toGeoJSON")," to convert them into the proper format."),(0,i.kt)("p",null,"Let's install the dataset:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download it from ",(0,i.kt)("a",{parentName:"li",href:"https://www.dropbox.com/s/yui7shcud2xbxt7/geo.zip"},"here")),(0,i.kt)("li",{parentName:"ol"},"Unzip geo.zip file"),(0,i.kt)("li",{parentName:"ol"},"Restore the data into your mongoDB instance, using the following command")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"mongorestore geo.zip\n")),(0,i.kt)("p",null,"MongoDB allows applications to do the following types of query on geospatial data:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"inclusion"),(0,i.kt)("li",{parentName:"ul"},"intersection"),(0,i.kt)("li",{parentName:"ul"},"proximity")),(0,i.kt)("p",null,"Obviously, you will be able to use all the other operator in addition to the geospatial ones. Let's now look at some concrete examples."),(0,i.kt)("h4",{id:"inclusion"},"Inclusion"),(0,i.kt)("p",null,"Find all the airports in California. For this you need to get the California location (Polygon) and use the command $geoWithin in the query. From the shell it will look like :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'use geo\nvar cal = db.states.findOne(  {code : "CA"}  );\n\ndb.airports.find(\n{\n  loc : { $geoWithin : { $geometry : cal.loc } }\n},\n{ name : 1 , type : 1, code : 1, _id: 0 }\n);\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "name" : "Modesto City - County", "type" : "", "code" : "MOD" }\n...\n{ "name" : "San Francisco Intl", "type" : "International", "code" : "SFO" }\n{ "name" : "San Jose International", "type" : "International", "code" : "SJC" }\n...\n')),(0,i.kt)("p",null,'So the query is using the "California MultiPolygon" and looks in the airports collection to find all the airports that are in these polygons. This looks like the following image on a map:'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-AO6C6fgsrYQ/U_Wyr2RHPWI/AAAAAAAAAro/hVn6YFJQtNI/s1600/04-geojson-cal-airport.png",alt:null})),(0,i.kt)("p",null,"You can use any other query features or criteria, for example you can limit the query to international airport only sorted by name :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.airports.find(\n{\n  loc : { $geoWithin : { $geometry : cal.loc } },\n  type : "International"\n},\n{ name : 1 , type : 1, code : 1, _id: 0 }\n).sort({ name : 1 });\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "name" : "Los Angeles Intl", "type" : "International", "code" : "LAX" }\n{ "name" : "Metropolitan Oakland Intl", "type" : "International", "code" : "OAK" }\n{ "name" : "Ontario Intl", "type" : "International", "code" : "ONT" }\n{ "name" : "San Diego Intl", "type" : "International", "code" : "SAN" }\n{ "name" : "San Francisco Intl", "type" : "International", "code" : "SFO" }\n{ "name" : "San Jose International", "type" : "International", "code" : "SJC" }\n{ "name" : "Southern California International", "type" : "International", "code" : "VCV" }\n')),(0,i.kt)("p",null,"I do not know if you have looked in detail, but we are querying these documents with no index. You can run a query with the ",(0,i.kt)("inlineCode",{parentName:"p"},"explain()")," to see what's going on. The ",(0,i.kt)("inlineCode",{parentName:"p"},"$geoWithin")," operator does not need index but your queries will be more efficient with one so let's create the index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.airports.ensureIndex( { "loc" : "2dsphere" } );\n')),(0,i.kt)("p",null,"Run the explain and you will se the difference."),(0,i.kt)("h4",{id:"intersection"},"Intersection"),(0,i.kt)("p",null,'Suppose you want to know what are all the adjacent states to California, for this we just need to search for all the states that have coordinates that "intersects" with California. This is done with the following query:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'var cal = db.states.findOne(  {code : "CA"}  );\ndb.states.find(\n{\n  loc : { $geoIntersects : { $geometry : cal.loc  }  } ,\n  code : { $ne : "CA"  }  \n},\n{ name : 1, code : 1 , _id : 0 }\n);\n')),(0,i.kt)("p",null,"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "name" : "Oregon", "code" : "OR" }\n{ "name" : "Nevada", "code" : "NV" }\n{ "name" : "Arizona", "code" : "AZ" }\n')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://3.bp.blogspot.com/--Kh1AzmsaSU/U_XreY-tRlI/AAAAAAAAAr4/cS1pgjgF2Pc/s1600/05-geojson-intersect.png",alt:null})),(0,i.kt)("p",null,"Same as before ",(0,i.kt)("inlineCode",{parentName:"p"},"$geoIntersect")," operator does not need an index to work, but it will be more efficient with the following index:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.states.ensureIndex( { loc : "2dsphere" } );\n')),(0,i.kt)("h4",{id:"proximity"},"Proximity"),(0,i.kt)("p",null,"The last feature that I want to highlight in this post is related to query with proximity criteria. Let's find all the international airports that are located at less than 20km from the reservoir in NYC Central Park. For this you will be using the ",(0,i.kt)("inlineCode",{parentName:"p"},"$near")," operator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'db.airports.find(\n{\n  loc : {\n    $near : {\n      $geometry : {\n        type : "Point" ,\n        coordinates : [-73.965355,40.782865]  \n      },\n      $maxDistance : 20000\n    }\n  },\n  type : "International"\n},\n{\n  name : 1,\n  code : 1,\n  _id : 0\n}\n);\n')),(0,i.kt)("p",null,"Results:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "name" : "La Guardia", "code" : "LGA" }\n{ "name" : "Newark Intl", "code" : "EWR"}\n')),(0,i.kt)("p",null,"So this query returns 2 airports, the closest being La Guardia, since the ",(0,i.kt)("inlineCode",{parentName:"p"},"$near")," operator sorts the results by distance. Also it is important to raise here that the ",(0,i.kt)("inlineCode",{parentName:"p"},"$near")," operator requires an index."),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this first post about geospatial feature you have learned:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the basic of GeoJSON"),(0,i.kt)("li",{parentName:"ul"},"how to query documents with inclusion, intersection and proximity criteria.")),(0,i.kt)("p",null,"You can now play more with this for example integrate this into an application that expose data into some UI, or see how you can use the geospatial operators into a aggregation pipeline."))}m.isMDXComponent=!0}}]);