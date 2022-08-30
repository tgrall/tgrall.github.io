(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[28859],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),p=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,m=h["".concat(r,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=h;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16331:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return p},metadata:function(){return u},assets:function(){return c},toc:function(){return h},default:function(){return m}});var a=n(22122),i=n(19756),o=(n(67294),n(3905)),l=n(59943),s=["components"],r={title:"Easy application development with Couchbase, Angular and Node",categories:"couchbase node nosql angular"},p=void 0,u={permalink:"/blog/2013/03/06/easy-application-development-with-couchbase-angular-and-node",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2013-03-06-easy-application-development-with-couchbase-angular-and-node.md",source:"@site/blog/2013-03-06-easy-application-development-with-couchbase-angular-and-node.md",title:"Easy application development with Couchbase, Angular and Node",description:"Note : This article has been written in March 2013, since Couchbase and its drivers have a changed a lot. I am not working with/for Couchbase anymore, with no time to update the code.",date:"2013-03-06T00:00:00.000Z",formattedDate:"March 6, 2013",tags:[],readingTime:13.28,truncated:!1,authors:[],prevItem:{title:"Screencast : Fun with Couchbase MapReduce and Twitter",permalink:"/blog/2013/04/29/screencast-fun-with-couchbase-mapreduce-and-twitter"},nextItem:{title:"How to get the latest document by date/time field?",permalink:"/blog/2013/02/18/how-to-get-the-latest-document-by-date-slash-time-field"}},c={authorsImageUrls:[]},h=[{value:"Model your documents",id:"model-your-documents",children:[]},{value:"Create Views",id:"create-views",children:[]},{value:"Create Services",id:"create-services",children:[]},{value:"Create the UI",id:"create-the-ui",children:[]},{value:"Version and Upgrade Management",id:"version-and-upgrade-management",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],d={toc:h};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note : This article has been written in March 2013, since Couchbase and its drivers have a changed a lot. I am not working with/for Couchbase anymore, with no time to update the code.")),(0,o.kt)("p",null,"A friend of mine wants to build a simple system to capture ideas, and votes. Even if you can find many online services to do that, I think it is a good opportunity to show how easy it is to develop new application using a Couchbase and Node.js."),(0,o.kt)("p",null,"So how to start?"),(0,o.kt)("p",null,"Some of us will start with the UI, other with the data, in this example I am starting with the model. The basics steps are :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Model your documents"),(0,o.kt)("li",{parentName:"ol"},"Create Views"),(0,o.kt)("li",{parentName:"ol"},"Create Services"),(0,o.kt)("li",{parentName:"ol"},"Create the UI"),(0,o.kt)("li",{parentName:"ol"},"Improve your application by iteration")),(0,o.kt)("p",null,"The sources of this sample application are available in Gihub :"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-node-ideas"},"https://github.com/tgrall/couchbase-node-ideas")),(0,o.kt)("p",null,"Use the following command to clone the project locally :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/tgrall/couchbase-node-ideas.git\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," my goal is not to provide a complete application, but to describe the key steps to develop an application."),(0,o.kt)("h3",{id:"model-your-documents"},"Model your documents"),(0,o.kt)("p",null,"For this application you need 3 types of document :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ideas : describes the idea with a author, title and description"),(0,o.kt)("li",{parentName:"ul"},"Vote : the author and a comment - note that it is a choice to not put a value for the vote, in this first version if the vote exists this means user like the idea."),(0,o.kt)("li",{parentName:"ul"},"User : contains all the information about the user (not used in this first version of the application)")),(0,o.kt)("p",null,"You can argue that it is possible to put the votes as a list of element inside the idea document. In this case I prefer to use different document and reference the idea in the vote since we do not know how many votes/comments will have. Using different documents is also interesting in this case for the following reasons :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'No "concurrent" access, when a user wants to vote he does not change the idea document itself, so no need to put an optimistic locking in place.'),(0,o.kt)("li",{parentName:"ul"},"The size of the document will be smaller and easier to cache in memory.")),(0,o.kt)("p",null,"So documents will look like:"),(0,o.kt)(l.Z,{id:"79f57b13e7a637c7e62e",mdxType:"Gist"}),(0,o.kt)("p",null,"What I really like is the fact that I can quickly create a small dataset to validate that it is correct and help me to design the view. The way I do it, I start my server, launch the Couchbase Administration Console, create a bucket, and finally insert document manually and validate the model and views."),(0,o.kt)("h3",{id:"create-views"},"Create Views"),(0,o.kt)("p",null,"Now that I have created some documents, I can think about the way I want to get the information out of the database. For this application I need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The list of ideas"),(0,o.kt)("li",{parentName:"ul"},"The votes by ideas")),(0,o.kt)("p",null,"The list of idea for this first version is very simple, we just need to emit the title:"),(0,o.kt)(l.Z,{id:"989a5450811dec8f305e",mdxType:"Gist"}),(0,o.kt)("p",null,"For the votes by ideas, I choose to create a collated view, this will give me some interesting options when I will expose them into an API/View layer. I am also for this view using ",(0,o.kt)("inlineCode",{parentName:"p"},"sum()")," reduce function to be sure I capture the number of votes."),(0,o.kt)(l.Z,{id:"5fe945cbc12cc59e9dbd",mdxType:"Gist"}),(0,o.kt)("p",null,"I have my documents, I have some views that allow me to retrieve the list of ideas, the number of vote by idea and count the vote... So I am ready to expose all these informations to the application using a simple API layer."),(0,o.kt)("h3",{id:"create-services"},"Create Services"),(0,o.kt)("p",null,"Lately I have been playing a lot with Node.js, just because it is nice to learn new stuff and also because it is really easy to use with Couchbase. Think about it Couchbase loves JSON, and Node.js object format is JSON, this means I do not have any marshaling/unmarshaling to do."),(0,o.kt)("p",null,"My API layer is quite simple, I just need to create a set of REST endpoint to deal with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CRUD operation on each type of document"),(0,o.kt)("li",{parentName:"ul"},"List the different Documents")),(0,o.kt)("p",null,"The code of the services is available in branch ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-node-ideas/tree/01-simple-services"},"01-simple-services"),":"),(0,o.kt)("p",null,"You can run the application ","\xa0","with simple services using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> git checkout -f 01-simple-services\n> node app.js\n")),(0,o.kt)("p",null,"and go to you browser using the ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1:3000"},"http://127.0.0.1:3000")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"About the project")),(0,o.kt)("p",null,"For this project I am using only 2 node modules ",(0,o.kt)("a",{parentName:"p",href:"http://expressjs.com/"},"Express")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/couchbase/couchnode"},"Couchbase"),". The package.json file looks like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "couchbase-ideas-management",\n  "version": "0.0.1",\n  "private": true,\n  "dependencies":\n  {\n    "express": "3.x",\n    "couchbase": "0.0.11"\n  }\n}\n')),(0,o.kt)("p",null,"After running the install, let's code the new API interface, as said before I am using an iterative approach so for now I am not dealing with the security, I just want to get the basic actions to work."),(0,o.kt)("p",null,"I am starting with the endpoints to get and set the documents. I am creating a generic endpoints that take the type as URI parameter allowing user/application to do a get/post on ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/vote"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/idea"),". The following code captures this:"),(0,o.kt)(l.Z,{id:"42f0b936a55fd2dcefac",mdxType:"Gist"}),(0,o.kt)("p",null,"In each case I start to test if the URI is one of the supported types (idea, vote, user) and if this is the case I call the ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert()")," method that will do the call to Couchbase."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert()")," methods are using more or less the same approach. I test if the document exists, if the type is correct and do the operation to Couchbase. Let's focus on the ",(0,o.kt)("inlineCode",{parentName:"p"},"upsert()`` method. I call it "),"upsert()` since the same operation is used to create and update the document."),(0,o.kt)(l.Z,{id:"91858dcad51affdf3521",mdxType:"Gist"}),(0,o.kt)("p",null,"In this function I start by testing if the document contains a type and if the type is the one expected (line 3)."),(0,o.kt)("p",null,"Then I check if the document id is present, to see if I need to create it or not. This is one of the reason why I like to keep the id/key in the document, yes I duplicate it, but it makes the development really easy. So if I have to create a new document I have to generate a new id. I chose to create a counter for each type. this is why I call the incr function (line 7) and then use the returned value to create the document (line 10)."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:"),' as you can see, my documents contain the an ID as part of the attributes. This ID is the same value that the one used to set the document (the "key"). It is not necessary a good practice to duplicate this information, and in many case the application only use the document key itself. I personally like to put the ID in the document itself too, because it simplifies a lot the development.'),(0,o.kt)("p",null,"If the ID is present, I just call the update operation to save the document. (line 15)"),(0,o.kt)("p",null,"The delete operation is equivalent to the get, using the delete HTTP operation."),(0,o.kt)("p",null,"So now I can get, insert and update the documents. I still need to do some work to deal with the lists. As you can guess, here I need to call the views. I won't go in the detail of the simple list of ideas. Let's focus on the view that shows the result of the votes."),(0,o.kt)(l.Z,{id:"6468058737ff53553ae1",mdxType:"Gist"}),(0,o.kt)("p",null,"For this part of the application I use a small trick to use the collated view. The ",(0,o.kt)("inlineCode",{parentName:"p"},"/api/results/")," call returns the list of ideas with their title and the total number of votes. The result looks like the following:"),(0,o.kt)(l.Z,{id:"6cfdedf1410ca99744bd",mdxType:"Gist"}),(0,o.kt)("p",null,"Note that it is also possible to select only one idea , you just need to pass the id to the call for example."),(0,o.kt)("p",null,"If you look in more detail the function, not only I call the view, but I build an array in which I put the idea id, label, then on the next loop, I add the number of vote. This is possible because the view is a collated view of the ideas and its votes."),(0,o.kt)("p",null,"I have now my REST Services, including advanced query capabilities. It is time now to use these services and build the user interface."),(0,o.kt)("h3",{id:"create-the-ui"},"Create the UI"),(0,o.kt)("p",null,"For the view I am using AngularJS, that I am packaging in the same node.js application for simplicity reason"),(0,o.kt)("h4",{id:"simple-ui-without-loginsecurity"},"Simple UI without Login/Security"),(0,o.kt)("p",null,"The code of the application without login is available branch in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-node-ideas/tree/02-simple-ui-no-login"},"02-simple-ui-no-login")),(0,o.kt)("p",null,"You can run the application ","\xa0","with simple services using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git checkout -f 02-simple-ui-no-login\n> node app.js\n")),(0,o.kt)("p",null,"The application is based on AngularJS and Twitter Boostrap."),(0,o.kt)("p",null,"I am using basic feature and packaging for Angular :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/public/js/app.js")," contains the module declaration and all the routes to the different views/controllers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/public/js/controllers.js")," contains all the controller. I will show some of them but basically this is where that I call the services that I have created above."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/views/partials/")," contains the different pages/screens used by the application.")),(0,o.kt)("p",null,"Because the application is quite simple I have not done any packaging of directive, or other functions. This is true at for AngularJS and Node.js parts."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Dummy user management")),(0,o.kt)("p",null,"In this first version of the UI I have not yet integrated any login/security, so I fake the user login using a global scope variable that ",(0,o.kt)("inlineCode",{parentName:"p"},"$scope.user")," that you can see in the controller ",(0,o.kt)("inlineCode",{parentName:"p"},"AppCtrl()"),'. Since I have not yet implemented the login/security, I have added at the bottom of the page a textfield where you can enter a "dummy" username to test the application. This field is inserted in the ',(0,o.kt)("inlineCode",{parentName:"p"},"/views/index.html")," page."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"List Views and Number of Votes")),(0,o.kt)("p",null,"The home page of the application contains the list of ideas and number of votes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-tniNkr_Pl0Q/USidTLKHw1I/AAAAAAAAAbQ/BWtfTaAWG1w/s320/ideas-home-page.png",alt:null})),(0,o.kt)("p",null,"Look at the EntriesListCtrl controller and the ",(0,o.kt)("inlineCode",{parentName:"p"},"view/index.html")," file. As you can guess this is based on the Couchbase collated view that return the list of ideas and number of vote."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Create/Edit an idea")),(0,o.kt)("p",null,"When the user click on the New link in the navigation, the application call the view ",(0,o.kt)("inlineCode",{parentName:"p"},"/view/partials/idea-form.html"),". ","\xa0",'This form is called using the "/#/idea/new" URL.'),(0,o.kt)("p",null,"Just look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"IdeaFormCtrl")," controller to see what is happening :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function IdeaFormCtrl($rootScope, $scope, $routeParams, $http, $location) {\n  $scope.idea = null;\n    if ($routeParams.id ) {\n        $http({method: 'GET', url: '/api/idea/'+ $routeParams.id }).success(function(data, status, headers, config) {           \n                $scope.idea = data;\n            });\n    }\n \n    $scope.save = function() {          \n        $scope.idea.type = \"idea\"; // set the type\n        $scope.idea.user_id = $scope.user;\n        $http.post('/api/idea',$scope.idea).success(function(data) {\n            $location.path('/');\n        });\n    }\n    $scope.cancel = function() {\n        $location.path('/');\n    }\n \n}\nIdeaFormCtrl.$inject = ['$rootScope', '$scope', '$routeParams','$http', '$location'];\n")),(0,o.kt)("p",null,"First of all I test if the controller is called with a idea identifier in the URL ( ",(0,o.kt)("inlineCode",{parentName:"p"},"$routeParams.id")," - line 3) . If the ID is present, I call the REST API to get the idea and set it into the ",(0,o.kt)("inlineCode",{parentName:"p"},"$scope.idea")," variable."),(0,o.kt)("p",null,"Then on line 9, you can see the ",(0,o.kt)("inlineCode",{parentName:"p"},"$scope.save()")," function that calls the REST API to save/update the idea to Couchbase. I use the line 10 and 11 to set the user and the type of data to the idea."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," It is interesting to look at these lines, by adding the two attributes (user ","&",' type) I modify the "schema" of my data. I am adding new fields to my document that will be stored as it is in Couchbase. Once again, you see here that I drive the data type from my application. I could take another approach and force the type in the service layer. For this example I chose to put that in the application layer, that is supposed to send the proper data types.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Other Interactions")),(0,o.kt)("p",null,"The same approach is used to create a vote associated to a user/idea as you can see in the ",(0,o.kt)("inlineCode",{parentName:"p"},"VoteFormCtrl"),"  controller."),(0,o.kt)("p",null,"I won't go in all the details of all operations, I am just inviting you to look at the code of the application, and feel free to add comment to this blog post if I need to clarify other part of the application."),(0,o.kt)("h4",{id:"iterative-development--adding-a-value-to-the-vote"},"Iterative Development : adding a value to the vote!"),(0,o.kt)("p",null,"The code of the services is available in branch 01-simple-services:"),(0,o.kt)("p",null,"You can run the application with simple services using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"> git checkout -f 03-vote-with-value\n> node app.js\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Adding the field in the form")),(0,o.kt)("p",null,"Something that I really like about working with AngularJS, Node and Couchbase is the fact that the developer uses JSON from the database to the browser."),(0,o.kt)("p",null,"So let's implement a new feature, where instead of having only a comment the user can give a rate to its vote from 1 to 5. Doing that is quite easy, here are the steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modify the UI : adding a new field"),(0,o.kt)("li",{parentName:"ul"},"Modify the Couchabe View to use the new field")),(0,o.kt)("p",null,"This is it! AngularJS deals with the binding of the new field, so I just need to edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"/views/partials/idea-form.html")," to add this. For this I need to add the list of values in the controller and expose it into a select box in form."),(0,o.kt)("p",null,"The list of value located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"$scope.ratings")," variable :"),(0,o.kt)(l.Z,{id:"fe7c8625a6f54dfd2425",mdxType:"Gist"}),(0,o.kt)("p",null,"Once this is done you can add a select box into your view using the following code :"),(0,o.kt)(l.Z,{id:"d4115c3dbdd5a25614d9",mdxType:"Gist"}),(0,o.kt)("p",null,"To add the select box into the form, I just use AngularJS features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the list of value described in my controller using the ",(0,o.kt)("inlineCode",{parentName:"li"},"ng-options")," attribute"),(0,o.kt)("li",{parentName:"ul"},"the binding to the vote.rating field object using ",(0,o.kt)("inlineCode",{parentName:"li"},"ng-model")," attribute.")),(0,o.kt)("p",null,"I am adding the field in my form, I bind this field to my Javascript object; and... nothing else! Since my REST API is just consuming the JSON object as it is, AngularJS will send the vote object with the new attribute."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Update the view to use the rating")),(0,o.kt)("p",null,"Now that my database is dealing with a new attribute in the vote, I need to update my view to use this in the sum function. (I could calculate an average too, but here I want the sum of all the vote/ratings)."),(0,o.kt)(l.Z,{id:"c2fb3f9a3127df75e454",mdxType:"Gist"}),(0,o.kt)("p",null,"The only line that I have changed is the line number 7. The logic is simple, if the rating is present I emit it, if not I emit a 2, that is a medium rating for an idea."),(0,o.kt)("p",null,"This is a small tip that allow me to have a working view/system without having to update all the existing document if I have some."),(0,o.kt)("p",null,"I'll stop here for now, and will add new feature later such as User Authentication and User Management using for example ",(0,o.kt)("a",{parentName:"p",href:"http://passportjs.org/"},"Passport"),"."),(0,o.kt)("h3",{id:"version-and-upgrade-management"},"Version and Upgrade Management"),(0,o.kt)("p",null,"If you looked closely to the code of the application the views are automatically imported from the app.js file when the application is starting."),(0,o.kt)("p",null,"In fact I have added a small function that check the current version installed and update the views with the correct version when needed."),(0,o.kt)("p",null,"You can look at the function ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-node-ideas/blob/03-vote-with-value/app.js#L21"},(0,o.kt)("inlineCode",{parentName:"a"},"initApplication()"))," :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Load the version number from Couchbase (document with ID "',(0,o.kt)("inlineCode",{parentName:"li"},"app.version"),'")'),(0,o.kt)("li",{parentName:"ul"},"Check the version of if this is different"),(0,o.kt)("li",{parentName:"ul"},"Update/Create the view (I am doing it in production mode here, in real application it will be better to use dev mode - just prefix the design document ID with ",(0,o.kt)("inlineCode",{parentName:"li"},'"dev_"')," )"),(0,o.kt)("li",{parentName:"ul"},"Once the view is created update/create the ",(0,o.kt)("inlineCode",{parentName:"li"},'"app.version"')," document with the new ID.")),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article we have seen how you can quickly develop your application/prototype and leverage the flexibility of NoSQL for developers. The steps to do this are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Design your document model and API (REST)"),(0,o.kt)("li",{parentName:"ol"},"Create the UI that consumes the API"),(0,o.kt)("li",{parentName:"ol"},"Modify your model by simply adding field into the UI"),(0,o.kt)("li",{parentName:"ol"},"Update the view to adapt your lists to your new model")),(0,o.kt)("p",null,"In addition to this, I have also quickly explain how you can from your code control the version of your application and deploy new views (and other things) automatically."),(0,o.kt)("p",null,"I will post another blog post in few days to explain how you can easily integrate user management, security to your application and database easily"))}m.isMDXComponent=!0},59943:function(e,t,n){"use strict";var a=n(67294);n(45697);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var l=function(e){function t(){return i(this,t),o(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){this._updateIframeContent()},t.prototype.componentDidUpdate=function(e,t){this._updateIframeContent()},t.prototype._defineUrl=function(){var e=this.props,t=e.id,n=e.file;return"https://gist.github.com/"+t+".js"+(n?"?file="+n:"")},t.prototype._updateIframeContent=function(){var e=this.props,t=e.id,n=e.file,a=this.iframeNode,i=a.document;a.contentDocument?i=a.contentDocument:a.contentWindow&&(i=a.contentWindow.document);var o='<html><head><base target="_parent"><style>*{font-size:12px;}</style></head><body '+("onload=\"parent.document.getElementById('"+(n?"gist-"+t+"-"+n:"gist-"+t)+"').style.height=document.body.scrollHeight + 'px'\"")+">"+('<script type="text/javascript" src="'+this._defineUrl()+'"><\/script>')+"</body></html>";i.open(),i.writeln(o),i.close()},t.prototype.render=function(){var e=this,t=this.props,n=t.id,i=t.file;return a.createElement("iframe",{ref:function(t){e.iframeNode=t},width:"100%",frameBorder:0,id:i?"gist-"+n+"-"+i:"gist-"+n})},t}(a.PureComponent);t.Z=l}}]);