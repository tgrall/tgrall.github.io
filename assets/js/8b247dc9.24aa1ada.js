"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[85334],{3905:function(t,e,o){o.d(e,{Zo:function(){return p},kt:function(){return d}});var a=o(67294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,a)}return o}function i(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function s(t,e){if(null==t)return{};var o,a,n=function(t,e){if(null==t)return{};var o,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)o=r[a],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var l=a.createContext({}),u=function(t){var e=a.useContext(l),o=e;return t&&(o="function"==typeof t?t(e):i(i({},e),t)),o},p=function(t){var e=u(t.components);return a.createElement(l.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),c=u(o),d=n,m=c["".concat(l,".").concat(d)]||c[d]||h[d]||r;return o?a.createElement(m,i(i({ref:e},p),{},{components:o})):a.createElement(m,i({ref:e},p))}));function d(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,i=new Array(r);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},58867:function(t,e,o){o.r(e),o.d(e,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return p},toc:function(){return h},default:function(){return d}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),i=["components"],s={title:"Big Data... Is Hadoop the good way to start?",categories:"bigdata hadoop mongodb spark"},l=void 0,u={permalink:"/blog/2014/11/25/big-data-dot-dot-dot-is-hadoop-the-good-way-to-start",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2014-11-25-big-data-dot-dot-dot-is-hadoop-the-good-way-to-start.md",source:"@site/blog/2014-11-25-big-data-dot-dot-dot-is-hadoop-the-good-way-to-start.md",title:"Big Data... Is Hadoop the good way to start?",description:"In the past 2 years, I have met many developers, architects that are working on \u201cbig data\u201d projects. This sounds amazing, but quite often the truth is not that amazing.",date:"2014-11-25T00:00:00.000Z",formattedDate:"November 25, 2014",tags:[],readingTime:6.385,truncated:!0,authors:[],prevItem:{title:"How to create a pub/sub application with MongoDB ? Introduction",permalink:"/blog/2015/01/12/how-to-create-a-pub-slash-sub-application-with-mongodb-introduction"},nextItem:{title:"Introduction to MongoDB Geospatial feature",permalink:"/blog/2014/08/21/introduction-to-mongodb-geospatial-feature"}},p={authorsImageUrls:[]},h=[],c={toc:h};function d(t){var e=t.components,o=(0,n.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the past 2 years, I have met many developers, architects that are working on \u201cbig data\u201d projects. This sounds amazing, but quite often the truth is not that amazing."),(0,r.kt)("p",null,"####TL;TR\nYou believe that you have a big data project?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Do not start with the installation of an Hadoop Cluster -- the "',(0,r.kt)("em",{parentName:"li"},"how"),'"'),(0,r.kt)("li",{parentName:"ul"},'Start to talk to business people to understand their problem -- the "',(0,r.kt)("em",{parentName:"li"},"why"),'"'),(0,r.kt)("li",{parentName:"ul"},"Understand the data you must process"),(0,r.kt)("li",{parentName:"ul"},'Look at the volume -- very often it is not "that" big'),(0,r.kt)("li",{parentName:"ul"},"Then implement it, and take a simple approach, for example start with MongoDB + Apache Spark")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://cdn.meme.am/instances/500x/47510205.jpg",alt:"'Big Data'"})),(0,r.kt)("p",null,'##The infamous "big data project"'),(0,r.kt)("p",null,"A typical discussion would look like:"),(0,r.kt)("p",null,"Me: ",(0,r.kt)("em",{parentName:"p"},"\u201cCan you tell me more about this project, what do you do with your data?\u201d")),(0,r.kt)("p",null,"Mr. Big Bytes: ",(0,r.kt)("em",{parentName:"p"},'\u201cSure, we have a 40 nodes Hadoop cluster..."')),(0,r.kt)("p",null,"Me: ",(0,r.kt)("em",{parentName:"p"},'\u201cThis is cool but which type of data do you store, and what is the use case, business value?"')),(0,r.kt)("p",null,"Mr. Big Bytes: ",(0,r.kt)("em",{parentName:"p"},'\u201cWe store, all the logs of our applications, we have hundreds of gigabits\u2026"')),(0,r.kt)("p",null,"After a long blank: ",(0,r.kt)("em",{parentName:"p"},"\u201cWe have not yet started to analyze these data. For now it is jut  'us, the IT team,' we store the data, like that soon we will be able to do interesting things with them\"")),(0,r.kt)("p",null,"You can meet the same person few months later; the cluster is still sitting here, with no activity on it. I even met some consultants telling me they received calls from their customer asking the following:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},'\u201cHmmm, we have an Hadoop cluster installed, can you help us to find what to do with it?"')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Wrong! That is wrong!!!!!")," This means that the IT Team has spent lot of time for nothing, at least for the business; and I am not even sure the team has learned something technically."),(0,r.kt)("p",null,'###Start with the "Why" not with the "How"!'),(0,r.kt)("p",null,"The solution to this, could be obvious, start your \u201cbig data project\u201d answering the \u201cwhy/what\u201d questions first! The \u201chow\u201d, the implementation, will come later."),(0,r.kt)("p",null,"I am sure that most of the enterprises will benefit of a so called \u201cbig data project\u201d, but it is really important to understand the problems first. ",(0,r.kt)("em",{parentName:"p"},"And these problems are not technical\u2026")," at least at the beginning. So you must spend time with the business persons to understand what could help them. Let's take some examples."),(0,r.kt)("p",null,"You are working in a bank or insurance, business people will be more than happy to predict when/why customer will be leaving the company by doing some ",(0,r.kt)("em",{parentName:"p"},"churn analysis"),"; or it will be nice to be able to see when it makes lot of sense ",(0,r.kt)("em",{parentName:"p"},"to sell new contracts"),", service to existing customers."),(0,r.kt)("p",null,"You are working in retail/commerce, your business will be happy to see if they can ",(0,r.kt)("u",null,"adjust the price")," to the market, or ",(0,r.kt)("u",null,"provide precise recommendations")," to a user from an analysis of other customer behavior."),(0,r.kt)("p",null,'We can find many other examples. But as you can see we are not talking about technology, just business and possible benefits. In fact nothing new, compare with the applications you are building, you need first to have some requirements/ideas to build a product. Here we just need to have some "data input" to see ',(0,r.kt)("u",null,"how we can enrich the data")," with some business value."),(0,r.kt)("p",null,"Once you have started to ask all these questions you will start to see some input, and possible processing around them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are an insurance, you customers has no contact with your representative, or the customer satisfaction is medium/bad; you start to see some customer name in quotes coming from price comparison website\u2026. hmm you can guess that they are looking for a new insurance."),(0,r.kt)("li",{parentName:"ul"},"Still in the insurance, when your customer are close to the requirement age, or has teenagers learning how to drive, moving to college, you know that you have some opportunity to sell new contract, or adapt existing ones to the new needs"),(0,r.kt)("li",{parentName:"ul"},'In retail, you may want to look to all customers and what they have ordered, and based on this be able to recommend some products to a customer that "looks" the same.'),(0,r.kt)("li",{parentName:"ul"},"Another very common use case these days, you want to do some sentiment analysis of social networks to see how your brand is perceived by your community")),(0,r.kt)("p",null,"As you can see now, we can start to think about the data we have to use and the type of processing we have to do on them."),(0,r.kt)("p",null,'###Let\'s now talk about the "How"'),(0,r.kt)("p",null,"Now that you have a better idea about what you want to do, it does not mean that you should dive into a large cluster installation."),(0,r.kt)("p",null,"Before that, you should continue to analyze the data:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What is the structure of the data that I have to analyze?"),(0,r.kt)("li",{parentName:"ul"},"How big is my dataset?"),(0,r.kt)("li",{parentName:"ul"},"How much data I have to ingest on a period of time (minute, hour, day, ...)")),(0,r.kt)("p",null,'All these questions will help you to understand better your application. This is where it is often interesting too, and we realize that for most of us the "big data" is not that big!'),(0,r.kt)("p",null,"I was working the other day with a Telco company in Belgium, and I was talking about possible new project. I simply said:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Belgium is what, 11+ millions of people"),(0,r.kt)("li",{parentName:"ul"},"If you store a 50kb object for each person this represent:"),(0,r.kt)("li",{parentName:"ul"},"Your full dataset will be 524Gb, yes not even a Terabyte!")),(0,r.kt)("p",null,"Do you need a large Hadoop cluster to store and process this? You can use it, but you do not need to! You can find something smaller, and easier to start with."),(0,r.kt)("p",null,"Any database will do the job, starting with MongoDB. I think it is really interesting to start this project with a MongoDB cluster, not only because it will allow you to scale out as much as you need, but also because you will leverage the flexibility of the document model. This will allow you to store any type of data, and easily adapt the structure to the new data, or requirements."),(0,r.kt)("p",null,"Storing the data is only one part of the equation. The other part is how you achieve the data processing. Lately I am playing a lot with ",(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark"),". Spark provides a very powerful engine for large scale data processing, and it is a lot simpler than Map Reduce jobs. In addition to this, you can run Spark without Hadoop! This means you can connect you Spark to your MongoDB, with the ",(0,r.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/ecosystem/tools/hadoop/"},"MongoDB Hadoop Connector")," and other data sources and directly execute job on your main database."),(0,r.kt)("p",null,"What I like also about this approach, you can when you dataset starts to grow, and it become harder to process all the data on your operational database, you can easily add Hadoop; and keep most of your data processing layer intact, and only change the data sources information. In this case you will connect MongoDB and Hadoop to get/push the data into HDFS, once again using the MongoDB Hadoop Connector."),(0,r.kt)("p",null,"###Conclusion"),(0,r.kt)("p",null,"Too many times, projects are driven by technology instead of focusing on the business value. This is particularly true around big data projects. So be sure you start by understanding the business problem, and find the data that could help to solve it."),(0,r.kt)("p",null,"Once you have the business problem and the data, select the good technology, that could be very simple, simple files and python scripts, or more often a database like MongoDB with a data processing layer like Spark. And start to move to Hadoop when it is really mandatory... a very, very, very, large dataset."))}d.isMDXComponent=!0}}]);