"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[47730],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,c=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?a.createElement(c,i(i({ref:t},d),{},{components:n})):a.createElement(c,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45366:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"db.person.find( { 'role' : 'DBA' } )",categories:"nosql mongodb ops devops"},s=void 0,p={permalink:"/blog/2014/03/28/dbpersonfind-role-dba",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2014-03-28-dbpersonfind-role-dba.md",source:"@site/blog/2014-03-28-dbpersonfind-role-dba.md",title:"db.person.find( { 'role' : 'DBA' } )",description:"Wow! it has been a while since I posted something on my blog post. I have been very busy, moving to MongoDB, learning, learning, learning\u2026finally I can breath a little and answer some questions.",date:"2014-03-28T00:00:00.000Z",formattedDate:"March 28, 2014",tags:[],readingTime:5.24,truncated:!1,authors:[],prevItem:{title:"Introduction to MongoDB Geospatial feature",permalink:"/blog/2014/08/21/introduction-to-mongodb-geospatial-feature"},nextItem:{title:"Pagination with Couchbase",permalink:"/blog/2013/10/01/pagination-with-couchbase"}},d={authorsImageUrls:[]},u=[{value:"What! I still need DBA?",id:"what-i-still-need-dba",children:[]},{value:"&quot;Great, but the DBA is slowing down my development!&quot;",id:"great-but-the-dba-is-slowing-down-my-development",children:[]},{value:"A new era for operations and development teams",id:"a-new-era-for-operations-and-development-teams",children:[]},{value:"Resources",id:"resources",children:[]}],h={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Wow! it has been a while since I posted something on my blog post. I have been very busy, moving to MongoDB, learning, learning, learning\u2026finally I can breath a little and answer some questions."),(0,r.kt)("p",null,"Last week I have been helping my colleague Norberto to deliver a MongoDB Essentials Training in Paris. This was a very nice experience, and I am impatient to deliver it on my own. I was happy to see that the audience was well balanced between developers and operations, mostly DBA."),(0,r.kt)("h3",{id:"what-i-still-need-dba"},"What! I still need DBA?"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://ct.fra.bz/ol/fz/sw/i53/5/6/8/frabz-what-if-i-told-you-you-dont-need-to-know-sql-to-be-a-dba-85380e.jpg",alt:null})),(0,r.kt)("p",null,"This is a good opportunity to raise a point, or comment a wrong idea: the fact that you are using MongoDB, or any other NoSQL datastore does not mean that you do not need a DBA\u2026 Like any project, an administrator is not mandatory, but if you have one it is better. So even when MongoDB is pushed by development team it is very important to understand the way the database works, and how to administer, monitor it."),(0,r.kt)("p",null,"If you are lucky enough to have real operations teams, with good system and database administrators use them! They are very important for your application."),(0,r.kt)("p",null,"Most DBA/System Administrators have been maintaining systems in production for many years. They know how to keep your application up and running. They also most of the time experienced many \u201cdisasters\u201d, and then recover (I hope)."),(0,r.kt)("p",null,"Who knows, you may encounter big issues with your application and you will be happy to have them on your side at this moment."),(0,r.kt)("h3",{id:"great-but-the-dba-is-slowing-down-my-development"},'"Great, but the DBA is slowing down my development!"'),(0,r.kt)("p",null,"I hear this, sometimes, and I had this feeling in the past to as developer in large organization. Is it true?"),(0,r.kt)("p",null,"Developers and DBA are today, not living in the same worlds:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Developers want to integrate new technologies as soon as possible, not only because it is fun and they can brag about it during meetups/conferences; but because these technologies, most of the time, are making them more productive, and offer better service/experience to the consumer"),(0,r.kt)("li",{parentName:"ul"},"DBA, are here to keep the applications up and running! So every time they do not feel confident about a technology they will push back. I think this is natural and I would be probably the same in their position. Like all geeks, they would love to adopt new technologies but they need to understand and trust it before.")),(0,r.kt)("p",null,"System administrators, DBAS look at the technology with a different angle than developers."),(0,r.kt)("p",null,"Based on this assumption, it is important to bring the operation team as early as possible when  the development team wants to integrate MongoDB or any new data store. Having the operation team in the loop early will ease the global adoption of MongoDB in the company."),(0,r.kt)("p",null,"Personally, and this will show my age, I have seen a big change in the way developers and DBAs are working together."),(0,r.kt)("p",null,"Back in the 90's, when the main architecture was based on client/server architecture  developers and DBAs where working pretty well togethers; probably because they were speaking the same language: SQL was everywhere.  I had regular meetings wit"),(0,r.kt)("p",null,'Then, since mid 2000, mots of applications have moved to a web based architecture , with for example Java middleware, and the developers stopped working with DBAs. Probably because the abstraction data layer provided by the ORM exposed the database as a "commodity" service that is supposed to work: "Hey Mr DBA, my application has been written with the best middleware technology on the market, so now deal with the performance and scalability! I am done!"'),(0,r.kt)("p",null,"Yes it is a clich\xe9, but I am sure that some of you will recognize that."),(0,r.kt)("p",null,"Nevertheless each time I can, I have been pushing developers to talk more to administrators and look closely to their database!"),(0,r.kt)("h3",{id:"a-new-era-for-operations-and-development-teams"},"A new era for operations and development teams"),(0,r.kt)("p",null,"The fast adoption of MongoDB by developers, is a great opportunity to fix what we have broken 10 years ago in large information systems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Let's talk again!")),(0,r.kt)("p",null,"MongoDB has been built first for developers. The document oriented approach gives lot of flexibility to quickly adapt to change. So anytime your business users need a new feature you can implement it, even if this change impact the data structure. Your data model is now driven and controlled by the application, not the database engine."),(0,r.kt)("p",null,"However, the applications still need to be available 24x7, and performs well. These topics are managed - and shared- by administrator and developers! This has been always the case but, as I described it earlier, it looks like some of us have forgotten that."),(0,r.kt)("p",null,"Schemas design, change velocity, are driven by the application, so the business and development teams, but all this impacts the database, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How storage will grow ?"),(0,r.kt)("li",{parentName:"ul"},"Which indexes must be created to speed up my application?"),(0,r.kt)("li",{parentName:"ul"},"How to organize my cluster to leverage the infrastructure properly:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Replica-Set organization (and related write concerns, managed by developer)"),(0,r.kt)("li",{parentName:"ul"},"Sharding options"))),(0,r.kt)("li",{parentName:"ul"},"And the most important of them : backup/recovery strategies")),(0,r.kt)("p",null,"So many things that could be managed by the project team, but if you have an operation team with you, it will be better to do that as a single team."),(0,r.kt)("p",null,"You, the developer, are convinced that MongoDB is the best database for your projects! Now it is time to work with the ops team and convince them too.  So you should for sure explain why MongoDB is good for you as developer, but also you should highlight all the benefits for the operations, starting with built-in high-availability with replica sets, and easy scalability with sharding. MongoDB is also here to make the life of the administrator easier! I have shared in the next paragraph a lit of resources that are interesting for operations people."),(0,r.kt)("p",null,"Let\u2019s repeat it another time, try to involve the operation team as soon as possible, and use that as an opportunity to build/rebuild the relationship between developers and system administrators!"),(0,r.kt)("h3",{id:"resources"},"Resources"),(0,r.kt)("p",null,"You can find many good resources on the Site to helps operations or learn about this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documentation : ",(0,r.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/administration/"},"Operations")),(0,r.kt)("li",{parentName:"ul"},"Online Training :",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://education.mongodb.com/courses/10gen/M102/2014_May/about"},"M102: MongoDB for DBAs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://education.mongodb.com/courses/10gen/M202/2014_April/about"},"M202: MongoDB Advanced Deployment and Operations")))),(0,r.kt)("li",{parentName:"ul"},"And many others such as White Papers and ",(0,r.kt)("a",{parentName:"li",href:"http://www.mongodb.com/webinars"},"Webinars"),".")))}m.isMDXComponent=!0}}]);