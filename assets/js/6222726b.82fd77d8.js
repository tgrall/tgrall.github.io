(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[42133],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=d;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57249:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),l=n(59943),r=["components"],s={title:"How to create a pub/sub application with MongoDB ? Introduction",tags:["code","mongodb","node.js","scala","java"]},c=void 0,p={permalink:"/blog/2015/01/12/how-to-create-a-pub-slash-sub-application-with-mongodb-introduction",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2015-01-12-how-to-create-a-pub-slash-sub-application-with-mongodb-introduction.md",source:"@site/blog/2015-01-12-how-to-create-a-pub-slash-sub-application-with-mongodb-introduction.md",title:"How to create a pub/sub application with MongoDB ? Introduction",description:"In this article we will see how to create a pub/sub application (messaging, chat, notification), and this fully based on MongoDB (without any message broker like RabbitMQ, JMS, ... ).",date:"2015-01-12T00:00:00.000Z",formattedDate:"January 12, 2015",tags:[{label:"code",permalink:"/blog/tags/code"},{label:"mongodb",permalink:"/blog/tags/mongodb"},{label:"node.js",permalink:"/blog/tags/node-js"},{label:"scala",permalink:"/blog/tags/scala"},{label:"java",permalink:"/blog/tags/java"}],readingTime:4.58,truncated:!0,authors:[],prevItem:{title:"Nantes MUG : Event #2",permalink:"/blog/2015/01/21/nantes-mug-event-number-2"},nextItem:{title:"Big Data... Is Hadoop the good way to start?",permalink:"/blog/2014/11/25/big-data-dot-dot-dot-is-hadoop-the-good-way-to-start"}},u={authorsImageUrls:[]},d=[{value:"Collections and Tailable Cursors",id:"collections-and-tailable-cursors",children:[]},{value:"Building a very basic application",id:"building-a-very-basic-application",children:[{value:"Add some user interface",id:"add-some-user-interface",children:[]},{value:"Conclusion",id:"conclusion",children:[]}]}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this article we will see how to create a pub/sub application (messaging, chat, notification), and this fully based on MongoDB (without any message broker like RabbitMQ, JMS, ... )."),(0,i.kt)("p",null,"So, what needs to be done to achieve such thing:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'an application "publish" a message. In our case, we simply save a document into MongoDB'),(0,i.kt)("li",{parentName:"ul"},"another application, or thread, subscribe to these events and will received message automatically. In our case this means that the application should automatically receive newly created document out of MongoDB")),(0,i.kt)("p",null,"All this is possible with some very cool MongoDB features: ",(0,i.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/core/capped-collections/"},"capped collections")," and ",(0,i.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/tutorial/create-tailable-cursor/"},"tailable cursors"),","),(0,i.kt)("h2",{id:"collections-and-tailable-cursors"},"Collections and Tailable Cursors"),(0,i.kt)("p",null,"As you can see in the documentation, Capped Collections are fixed sized collections, that work in a way similar to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents."),(0,i.kt)("p",null,"MongoDB Capped Collections can be queried using Tailable Cursors, that are similar to the unix ",(0,i.kt)("inlineCode",{parentName:"p"},"tail -f"),' command. Your application continue to retrieve documents as they are inserted into the collection. I also like to call this a "continuous query".'),(0,i.kt)("p",null,"Now that we have seen the basics, let's implement it."),(0,i.kt)("h2",{id:"building-a-very-basic-application"},"Building a very basic application"),(0,i.kt)("h4",{id:"create-the-collection"},"Create the collection"),(0,i.kt)("p",null,"The first thing to do is to create a new capped collection:"),(0,i.kt)(l.Z,{id:"f16b1d3b5bcc12a4270a",file:"capped-collection",mdxType:"Gist"}),(0,i.kt)("p",null,"For simplicity, I am using the MongoDB Shell to create the ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," collection in the ",(0,i.kt)("inlineCode",{parentName:"p"},"chat")," database."),(0,i.kt)("p",null,"You can see on line #7 how to create a capped collection, with 2 options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"capped : true")," : this one is obvious"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"size : 10000")," : this is a mandatory option when you create a capped collection. This is the maximum size in bytes. (will be raised to a multiple of 256)")),(0,i.kt)("p",null,"Finally, on line #9, I insert a dummy document, this is also mandatory to be able to get the tailable cursor to work."),(0,i.kt)("h4",{id:"write-an-application"},"Write an application"),(0,i.kt)("p",null,"Now that we have the collection, let's write some code. First in ",(0,i.kt)("em",{parentName:"p"},"node.js"),":"),(0,i.kt)(l.Z,{id:"f16b1d3b5bcc12a4270a",file:"app.js",mdxType:"Gist"}),(0,i.kt)("p",null,"From lines #1 to 5 I just connect to my local mongoDB instance."),(0,i.kt)("p",null,"Then on line #7, I get the ",(0,i.kt)("inlineCode",{parentName:"p"},"messages")," collection."),(0,i.kt)("p",null,"And on line #10, I execute a find, using a tailable cursor, using specific options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"{}")," : no filter, so all documents will be returned"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tailable : true")," : this one is clear, to say that we want to create a tailable cursor"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"awaitdata : true")," : to say that we wait for data before returning no data to the client"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"numberOfRetries : -1")," : The number of times to retry on time out, -1 is infinite, so the application will keep trying")),(0,i.kt)("p",null,"Line #11 just force the sort to the natural order."),(0,i.kt)("p",null,"Then on line #12, the cursor returns the data, and the document is printed in the console each time it is inserted."),(0,i.kt)("h4",{id:"test-the-application"},"Test the Application"),(0,i.kt)("p",null,"Start the application"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"node app.js")),(0,i.kt)("p",null,"Insert documents in the messages collection, from the shell or any other tool."),(0,i.kt)("p",null,"You can find below a screencast showing this very basic application working:"),(0,i.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/uSuiYvssKuo",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("p",null,"The source code of this sample application in this Github repository, take the step-01 branch; clone this branch using:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git clone -b step-01 https://github.com/tgrall/mongodb-realtime-pubsub.git")),(0,i.kt)("p",null,"I have also created a gist showing the same behavior in ",(0,i.kt)("em",{parentName:"p"},"Java"),":"),(0,i.kt)(l.Z,{id:"f16b1d3b5bcc12a4270a",file:"MyApp.java",mdxType:"Gist"}),(0,i.kt)("p",null,"Mathieu Ancelin has written it in ",(0,i.kt)("em",{parentName:"p"},"Scala"),":"),(0,i.kt)(l.Z,{id:"f16b1d3b5bcc12a4270a",file:"App.scala",mdxType:"Gist"}),(0,i.kt)("h3",{id:"add-some-user-interface"},"Add some user interface"),(0,i.kt)("p",null,"We have the basics of a publish subscribe based application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"publish by inserting document into MongoDB"),(0,i.kt)("li",{parentName:"ul"},"subscribe by reading document using a tailable cursor")),(0,i.kt)("p",null,"Let's now push the messages to a user using for example socket.io. For this we need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"add socket.io dependency to our node project"),(0,i.kt)("li",{parentName:"ul"},"add HTML page to show messages")),(0,i.kt)("p",null,"The following gists shows the updated version of the app.js and index.html, let's take a look:"),(0,i.kt)(l.Z,{id:"d8c2acfdc416abcc5d18",file:"app.js",mdxType:"Gist"}),(0,i.kt)("p",null,"The node application has been updated with the following features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"lines #4-7: import of http, file system and socket.io"),(0,i.kt)("li",{parentName:"ul"},"lines #10-21: configure and start the http server. You can see that I have created a simple handler to serve static html file"),(0,i.kt)("li",{parentName:"ul"},"lines #28-39: I have added support to Web socket using socket.io where I open the tailable cursor, and push/emit the messages on the socket.")),(0,i.kt)("p",null,"As you can see, the code that I have added is simple. I do not use any advanced framework, nor manage exceptions, this for simplicity and readability."),(0,i.kt)("p",null,"Let's now look at the client (html page)."),(0,i.kt)(l.Z,{id:"d8c2acfdc416abcc5d18",file:"index.html",mdxType:"Gist"}),(0,i.kt)("p",null,"Same as the server, it is really simple and does not use any advanced libraries except socket.io client (line #18) and JQuery (line #19), and used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"on line #22 to received messages ans print them in the page using JQuery on line #23")),(0,i.kt)("p",null,"I have created a screencast of this version of the application:"),(0,i.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/N9fDxuohdy8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("p",null,"You can find the source code in this Github repository, take the step-02 branch; clone this branch using:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"git clone -b step-02 https://github.com/tgrall/mongodb-realtime-pubsub.git")),(0,i.kt)("h3",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this first post, we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"learned about tailable cursor and capped collection"),(0,i.kt)("li",{parentName:"ul"},"see how it can be used to develop a pub/sub application"),(0,i.kt)("li",{parentName:"ul"},"expose this into a basic web socket based application")),(0,i.kt)("p",null,"In the next article we will continue to develop a bigger application using these features."))}m.isMDXComponent=!0},59943:function(e,t,n){"use strict";var a=n(67294);n(45697);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,o=a.document;a.contentDocument?o=a.contentDocument:a.contentWindow&&(o=a.contentWindow.document);var i='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";o.open(),o.writeln(i),o.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,o=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:o?"gist-"+n+"-"+o:"gist-"+n})},t}(a.PureComponent);t.Z=l}}]);