"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[42133],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},57249:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),o=(a(67294),a(3905)),i=a(59943);const l={title:"How to create a pub/sub application with MongoDB ? Introduction",tags:["code","mongodb","node.js","scala","java"]},r=void 0,s={permalink:"/blog/2015/01/12/how-to-create-a-pub-slash-sub-application-with-mongodb-introduction",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-01-12-how-to-create-a-pub-slash-sub-application-with-mongodb-introduction.md",source:"@site/blog/2015-01-12-how-to-create-a-pub-slash-sub-application-with-mongodb-introduction.md",title:"How to create a pub/sub application with MongoDB ? Introduction",description:"In this article we will see how to create a pub/sub application (messaging, chat, notification), and this fully based on MongoDB (without any message broker like RabbitMQ, JMS, ... ).",date:"2015-01-12T00:00:00.000Z",formattedDate:"January 12, 2015",tags:[{label:"code",permalink:"/blog/tags/code"},{label:"mongodb",permalink:"/blog/tags/mongodb"},{label:"node.js",permalink:"/blog/tags/node-js"},{label:"scala",permalink:"/blog/tags/scala"},{label:"java",permalink:"/blog/tags/java"}],readingTime:4.58,hasTruncateMarker:!0,authors:[],frontMatter:{title:"How to create a pub/sub application with MongoDB ? Introduction",tags:["code","mongodb","node.js","scala","java"]},prevItem:{title:"Nantes MUG : Event #2",permalink:"/blog/2015/01/21/nantes-mug-event-number-2"},nextItem:{title:"Big Data... Is Hadoop the good way to start?",permalink:"/blog/2014/11/25/big-data-dot-dot-dot-is-hadoop-the-good-way-to-start"}},c={authorsImageUrls:[]},p=[{value:"Collections and Tailable Cursors",id:"collections-and-tailable-cursors",level:2},{value:"Building a very basic application",id:"building-a-very-basic-application",level:2},{value:"Create the collection",id:"create-the-collection",level:4},{value:"Write an application",id:"write-an-application",level:4},{value:"Test the Application",id:"test-the-application",level:4},{value:"Add some user interface",id:"add-some-user-interface",level:3},{value:"Conclusion",id:"conclusion",level:3}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In this article we will see how to create a pub/sub application (messaging, chat, notification), and this fully based on MongoDB (without any message broker like RabbitMQ, JMS, ... )."),(0,o.kt)("p",null,"So, what needs to be done to achieve such thing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'an application "publish" a message. In our case, we simply save a document into MongoDB'),(0,o.kt)("li",{parentName:"ul"},"another application, or thread, subscribe to these events and will received message automatically. In our case this means that the application should automatically receive newly created document out of MongoDB")),(0,o.kt)("p",null,"All this is possible with some very cool MongoDB features: ",(0,o.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/core/capped-collections/"},"capped collections")," and ",(0,o.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/tutorial/create-tailable-cursor/"},"tailable cursors"),","),(0,o.kt)("h2",{id:"collections-and-tailable-cursors"},"Collections and Tailable Cursors"),(0,o.kt)("p",null,"As you can see in the documentation, Capped Collections are fixed sized collections, that work in a way similar to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents."),(0,o.kt)("p",null,"MongoDB Capped Collections can be queried using Tailable Cursors, that are similar to the unix ",(0,o.kt)("inlineCode",{parentName:"p"},"tail -f"),' command. Your application continue to retrieve documents as they are inserted into the collection. I also like to call this a "continuous query".'),(0,o.kt)("p",null,"Now that we have seen the basics, let's implement it."),(0,o.kt)("h2",{id:"building-a-very-basic-application"},"Building a very basic application"),(0,o.kt)("h4",{id:"create-the-collection"},"Create the collection"),(0,o.kt)("p",null,"The first thing to do is to create a new capped collection:"),(0,o.kt)(i.Z,{id:"f16b1d3b5bcc12a4270a",file:"capped-collection",mdxType:"Gist"}),(0,o.kt)("p",null,"For simplicity, I am using the MongoDB Shell to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," collection in the ",(0,o.kt)("inlineCode",{parentName:"p"},"chat")," database."),(0,o.kt)("p",null,"You can see on line #7 how to create a capped collection, with 2 options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"capped : true")," : this one is obvious"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"size : 10000")," : this is a mandatory option when you create a capped collection. This is the maximum size in bytes. (will be raised to a multiple of 256)")),(0,o.kt)("p",null,"Finally, on line #9, I insert a dummy document, this is also mandatory to be able to get the tailable cursor to work."),(0,o.kt)("h4",{id:"write-an-application"},"Write an application"),(0,o.kt)("p",null,"Now that we have the collection, let's write some code. First in ",(0,o.kt)("em",{parentName:"p"},"node.js"),":"),(0,o.kt)(i.Z,{id:"f16b1d3b5bcc12a4270a",file:"app.js",mdxType:"Gist"}),(0,o.kt)("p",null,"From lines #1 to 5 I just connect to my local mongoDB instance."),(0,o.kt)("p",null,"Then on line #7, I get the ",(0,o.kt)("inlineCode",{parentName:"p"},"messages")," collection."),(0,o.kt)("p",null,"And on line #10, I execute a find, using a tailable cursor, using specific options:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"{}")," : no filter, so all documents will be returned"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"tailable : true")," : this one is clear, to say that we want to create a tailable cursor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"awaitdata : true")," : to say that we wait for data before returning no data to the client"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"numberOfRetries : -1")," : The number of times to retry on time out, -1 is infinite, so the application will keep trying")),(0,o.kt)("p",null,"Line #11 just force the sort to the natural order."),(0,o.kt)("p",null,"Then on line #12, the cursor returns the data, and the document is printed in the console each time it is inserted."),(0,o.kt)("h4",{id:"test-the-application"},"Test the Application"),(0,o.kt)("p",null,"Start the application"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"node app.js")),(0,o.kt)("p",null,"Insert documents in the messages collection, from the shell or any other tool."),(0,o.kt)("p",null,"You can find below a screencast showing this very basic application working:"),(0,o.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/uSuiYvssKuo",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"The source code of this sample application in this Github repository, take the step-01 branch; clone this branch using:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git clone -b step-01 https://github.com/tgrall/mongodb-realtime-pubsub.git")),(0,o.kt)("p",null,"I have also created a gist showing the same behavior in ",(0,o.kt)("em",{parentName:"p"},"Java"),":"),(0,o.kt)(i.Z,{id:"f16b1d3b5bcc12a4270a",file:"MyApp.java",mdxType:"Gist"}),(0,o.kt)("p",null,"Mathieu Ancelin has written it in ",(0,o.kt)("em",{parentName:"p"},"Scala"),":"),(0,o.kt)(i.Z,{id:"f16b1d3b5bcc12a4270a",file:"App.scala",mdxType:"Gist"}),(0,o.kt)("h3",{id:"add-some-user-interface"},"Add some user interface"),(0,o.kt)("p",null,"We have the basics of a publish subscribe based application:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"publish by inserting document into MongoDB"),(0,o.kt)("li",{parentName:"ul"},"subscribe by reading document using a tailable cursor")),(0,o.kt)("p",null,"Let's now push the messages to a user using for example socket.io. For this we need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"add socket.io dependency to our node project"),(0,o.kt)("li",{parentName:"ul"},"add HTML page to show messages")),(0,o.kt)("p",null,"The following gists shows the updated version of the app.js and index.html, let's take a look:"),(0,o.kt)(i.Z,{id:"d8c2acfdc416abcc5d18",file:"app.js",mdxType:"Gist"}),(0,o.kt)("p",null,"The node application has been updated with the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"lines #4-7: import of http, file system and socket.io"),(0,o.kt)("li",{parentName:"ul"},"lines #10-21: configure and start the http server. You can see that I have created a simple handler to serve static html file"),(0,o.kt)("li",{parentName:"ul"},"lines #28-39: I have added support to Web socket using socket.io where I open the tailable cursor, and push/emit the messages on the socket.")),(0,o.kt)("p",null,"As you can see, the code that I have added is simple. I do not use any advanced framework, nor manage exceptions, this for simplicity and readability."),(0,o.kt)("p",null,"Let's now look at the client (html page)."),(0,o.kt)(i.Z,{id:"d8c2acfdc416abcc5d18",file:"index.html",mdxType:"Gist"}),(0,o.kt)("p",null,"Same as the server, it is really simple and does not use any advanced libraries except socket.io client (line #18) and JQuery (line #19), and used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on line #22 to received messages ans print them in the page using JQuery on line #23")),(0,o.kt)("p",null,"I have created a screencast of this version of the application:"),(0,o.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/N9fDxuohdy8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,"You can find the source code in this Github repository, take the step-02 branch; clone this branch using:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"git clone -b step-02 https://github.com/tgrall/mongodb-realtime-pubsub.git")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this first post, we have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"learned about tailable cursor and capped collection"),(0,o.kt)("li",{parentName:"ul"},"see how it can be used to develop a pub/sub application"),(0,o.kt)("li",{parentName:"ul"},"expose this into a basic web socket based application")),(0,o.kt)("p",null,"In the next article we will continue to develop a bigger application using these features."))}d.isMDXComponent=!0},59943:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294);function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}const i=function(e){var t,a;function i(){return e.apply(this,arguments)||this}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,o(t,a);var l=i.prototype;return l.componentDidMount=function(){this._updateIframeContent()},l.componentDidUpdate=function(e,t){this._updateIframeContent()},l._defineUrl=function(){var e=this.props,t=e.id,a=e.file;return"https://gist.github.com/"+t+".js"+(a?"?file="+a:"")},l._updateIframeContent=function(){var e=this.props,t=e.id,a=e.file,n=this.iframeNode,o=n.document;n.contentDocument?o=n.contentDocument:n.contentWindow&&(o=n.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(a?"gist-"+t+"-"+a:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},l.render=function(){var e=this,t=this.props,a=t.id,o=t.file;return n.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+a+"-"+o:"gist-"+a})},i}(n.PureComponent)}}]);