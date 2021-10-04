(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[63432],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96662:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return d},toc:function(){return p},default:function(){return u}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),s=["components"],o={title:"Streaming Analytics in a Digitally Industrialized World",categories:"streaming analytics bigdata"},l=void 0,c={permalink:"/blog/2016/09/26/streaming-analytics-in-a-digitally-industrialized-world",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2016-09-26-streaming-analytics-in-a-digitally-industrialized-world.md",source:"@site/blog/2016-09-26-streaming-analytics-in-a-digitally-industrialized-world.md",title:"Streaming Analytics in a Digitally Industrialized World",description:"Get an introduction to streaming analytics, which allows you real-time insight from captured events and big data. There are applications across industries, from finance to wine making, though there are two primary challenges to be addressed.",date:"2016-09-26T00:00:00.000Z",formattedDate:"September 26, 2016",tags:[],readingTime:3.69,truncated:!0,authors:[],prevItem:{title:"Getting started with Apache Flink and Kafka",permalink:"/blog/2016/10/12/getting-started-with-apache-flink-and-kafka"},nextItem:{title:"Setting up Spark Dynamic Allocation on MapR",permalink:"/blog/2016/09/01/setting-up-spark-dynamic-allocation-on-mapr"}},d={authorsImageUrls:[]},p=[{value:"The benefits of big data",id:"the-benefits-of-big-data",children:[]},{value:"Analysis of big event streams",id:"analysis-of-big-event-streams",children:[]},{value:"Streaming analytics in practice",id:"streaming-analytics-in-practice",children:[]},{value:"Two primary challenges with streaming analytics",id:"two-primary-challenges-with-streaming-analytics",children:[]}],m={toc:p};function u(e){var t=e.components,a=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Get an introduction to streaming analytics, which allows you real-time insight from captured events and big data. There are applications across industries, from finance to wine making, though there are two primary challenges to be addressed."),(0,r.kt)("p",null,"Did you know that a plane flying from Texas to London can generate 30 million data points per flight? As Jim Daily of GE Aviation notes, that equals ",(0,r.kt)("a",{parentName:"p",href:"https://www.ge.com/digital/blog/industrial-iot-improving-airline-economics"},"10 billion data points")," in one year. And we\u2019re talking about one plane alone. So you can understand why ",(0,r.kt)("a",{parentName:"p",href:"http://cloudblog.ericsson.com/cloud-scalability-combined-with-speed-inside-ges-cloud-transformation"},"another top GE executive recently told Ericsson Business Review"),' that "Cloud is the future of IT," with a focus on supporting challenging applications in industries such as aviation and energy.'),(0,r.kt)("h3",{id:"the-benefits-of-big-data"},"The benefits of big data"),(0,r.kt)("p",null,"Today, thanks to modern big data platforms, many companies are able to take advantage of the same methods as industry giant GE to store, process, and analyze massive amounts of data. This means that you can also capture core business data, such as that coming from a CRM system, or traffic sensors, or say jet engines, and associate it to other data such as social, application, blog or industrial data. Ultimately, this will result in greater data insights and can enable things like better customer segmentation and prediction."),(0,r.kt)("p",null,"Sounds great, right? There\u2019s a catch. The challenge is that these data are processed in batch mode, meaning that you have to wait a few hours or even days to access relevant KPI\u2019s and insights. Not only is there a delay, but analysis is based on data that\u2019s out of date \u2013 even if only by a few hours."),(0,r.kt)("h3",{id:"analysis-of-big-event-streams"},"Analysis of big event streams"),(0,r.kt)("p",null,"That\u2019s where streaming analytics comes in. Streaming analytics is the ",(0,r.kt)("a",{parentName:"p",href:"http://searchcloudapplications.techtarget.com/opinion/Streaming-analytics-lets-you-view-the-past-to-see-the-future?utm_medium=EM&asrc=EM_NLN_58517129&utm_campaign=20160606_Seeing%20the%20future...with%20the%20past?_fchurchville&utm_source=NLN&track=NL-1839&ad=908120&src=908120"},"analysis of large event streams"),", which is data that is in constant movement. These streams can include actions that can be incredibly small, say one click, yet result in an explosion of data. The benefit is that you can capture events and data as they happen, delivering value to the enterprise in near real time."),(0,r.kt)("p",null,"What does streaming analytics look like regarding the previously mentioned CRM system? It means that an enterprise can get immediate feedback on something like a specific marketing campaign, website update, or product alteration. When a user clicks within one of these realms and an order is immediately processed, that information is pushed out in real time to various tools, allowing the enterprise to adjust its customer interaction."),(0,r.kt)("h3",{id:"streaming-analytics-in-practice"},"Streaming analytics in practice"),(0,r.kt)("p",null,"Where else is streaming analytics applicable? Think about the benefits of fraud detection in the financial sector, or the growth of sensors in manufacturing, or collection of data from large scale machines. One example is where Ericsson has collaborated with ",(0,r.kt)("a",{parentName:"p",href:"http://cloudblog.ericsson.com/can-the-networked-society-and-iot-make-better-wine"},"vintners in Germany, using IoT to improve traditional harvesting methods")," through greater precision and speed of response to outside factors. In these streaming analytics scenarios, the key is \u201c",(0,r.kt)("a",{parentName:"p",href:"https://www.mapr.com/blog/lets-get-real-acting-data-real-time"},"High-Frequency Decisioning,"),"\u201d where you move from knowing to doing in real-time synergy. Time to action is compressed, resulting in dramatic results like achieving greater user satisfaction, higher revenue, or reduced risk."),(0,r.kt)("h3",{id:"two-primary-challenges-with-streaming-analytics"},"Two primary challenges with streaming analytics"),(0,r.kt)("p",null,"Streaming analytics is not without challenges. Systems must capture events in near real time, at scale, and in a distributed fashion. And of course, events must be stored and processed in real time. Since big data is generated one event at a time, you need to have an incredibly powerful storage and processing layer, which can provide deep analytics and rich features like machine learning systems."),(0,r.kt)("p",null,"To take on the first challenge, new messaging systems like ",(0,r.kt)("a",{parentName:"p",href:"http://kafka.apache.org"},"Apache Kafka")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-streams"},"MapR Streams")," provide a common API for developers to publish and subscribe to any event. And to process and store data in real-time, one of the most efficient methods would be to use a ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-fs"},"distributed file system")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/mapr-db-in-hadoop-nosql"},"NoSQL databases"),". This provides horizontal scalability and flexibility. A storage system must also process and do analytics calculations in real time in a distributed manner."),(0,r.kt)("p",null,"Tools such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.mapr.com/products/apache-spark"},"Apache Spark")," and ",(0,r.kt)("a",{parentName:"p",href:"http://flink.apache.org"},"Flink")," come to mind, which provide rich analytical functions that can be integrated with any tool, including real time alerting systems. It is also interesting to mention that all the events, data, that are now stored in real time continue to be accessible with traditional analytics tools; thanks to the distributed, and scalable distributed SQL Engines provided in modern big data platforms."),(0,r.kt)("p",null,"This was originally published on the ",(0,r.kt)("a",{parentName:"p",href:"http://cloudblog.ericsson.com/streaming-analytics-of-big-data-in-real-time"},"Ericsson Cloud blog here"),"."))}u.isMDXComponent=!0}}]);