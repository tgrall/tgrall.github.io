"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[27287],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(o),h=a,y=d["".concat(c,".").concat(h)]||d[h]||s[h]||l;return o?n.createElement(y,r(r({ref:t},p),{},{components:o})):n.createElement(y,r({ref:t},p))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,r=new Array(l);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<l;u++)r[u]=o[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7433:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=o(87462),a=(o(67294),o(3905));const l={title:"Deploy your Node/Couchbase application to the cloud with Clever Cloud",categories:"couchbase nosql nodejs cloud clevercloud"},r=void 0,i={permalink:"/blog/2013/07/11/deploy-your-node-slash-couchbase-application-to-the-cloud-with-clever-cloud",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2013-07-11-deploy-your-node-slash-couchbase-application-to-the-cloud-with-clever-cloud.md",source:"@site/blog/2013-07-11-deploy-your-node-slash-couchbase-application-to-the-cloud-with-clever-cloud.md",title:"Deploy your Node/Couchbase application to the cloud with Clever Cloud",description:"Introduction",date:"2013-07-11T00:00:00.000Z",formattedDate:"July 11, 2013",tags:[],readingTime:5.285,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Deploy your Node/Couchbase application to the cloud with Clever Cloud",categories:"couchbase nosql nodejs cloud clevercloud"},prevItem:{title:"How to implement Document Versioning with Couchbase",permalink:"/blog/2013/07/18/how-to-implement-document-versioning-with-couchbase"},nextItem:{title:"SQL to NoSQL : Copy your data from MySQL to Couchbase",permalink:"/blog/2013/07/03/sql-to-nosql-copy-your-data-from-mysql-to-couchbase"}},c={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",level:3},{value:"Setting up your Clever Cloud environment",id:"setting-up-your-clever-cloud-environment",level:3},{value:"Create your account",id:"create-your-account",level:4},{value:"Create a Couchbase instance",id:"create-a-couchbase-instance",level:4},{value:"Connect your Application to Couchbase@Clever-Cloud",id:"connect-your-application-to-couchbaseclever-cloud",level:4},{value:"Deploy your application on Clever Cloud",id:"deploy-your-application-on-clever-cloud",level:3},{value:"Add your SSH key",id:"add-your-ssh-key",level:4},{value:"Create your Application",id:"create-your-application",level:4},{value:"Deploy the Application",id:"deploy-the-application",level:4},{value:"Conclusion",id:"conclusion",level:3}],p={toc:u};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://www.clever-cloud.com/en/"},"Clever Cloud")," is the first PaaS to provide Couchbase as a service allowing developers to run applications in a fully managed environment. This article shows how to deploy an existing application to Clever Cloud."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://f.cl.ly/items/2L2M2k2O000e3g2N1z3z/couchbase_gradient_clever.png",alt:null})),(0,a.kt)("p",null,"I am using a very simple Node application that I have documented in a previous article: \u201c",(0,a.kt)("a",{parentName:"p",href:"http://tugdualgrall.blogspot.fr/2013/03/easy-application-development-with.html"},"Easy application development with Couchbase, Angular and Node"),"\u201d."),(0,a.kt)("p",null,"Clever Cloud provides support for various databases MySQL, PostgreSQL, but also and this is most important for me ",(0,a.kt)("a",{parentName:"p",href:"http://www.clever-cloud.com/en/services/couchbase.html"},"Couchbase"),". No only Clever Cloud allows you to use database services but also you can deploy and host your application that could be developed in the language/technology of your choice : Java, Node, Scala, Python, PHP, \u2026 and all this in a secure, scalable and managed environment."),(0,a.kt)("h3",{id:"setting-up-your-clever-cloud-environment"},"Setting up your Clever Cloud environment"),(0,a.kt)("h4",{id:"create-your-account"},"Create your account"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the Clever Cloud site :",(0,a.kt)("a",{parentName:"li",href:"http://www.clever-cloud.com/"}," http://www.clever-cloud.com/")),(0,a.kt)("li",{parentName:"ol"},"Click on \u201cLogin\u201d link and follow the steps to create your account."),(0,a.kt)("li",{parentName:"ol"},"After few seconds you will received an email and be redirected to the Clever Cloud Console.")),(0,a.kt)("h4",{id:"create-a-couchbase-instance"},"Create a Couchbase instance"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://console.clever-cloud.com/"},"Clever Cloud Console")," allows you to create your Couchbase Bucket in few clicks:"),(0,a.kt)("p",null,"1-  Cick on \u201cServices\u201d in the left menu"),(0,a.kt)("p",null,"2-  Click on \u201cAdd a Service\u201d in the left menu "),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-He8scPOrH5I/Uac5B_O2k3I/AAAAAAAAAcE/OZyn8jW-bV8/s320/clever-cloud-add-couchbase.png",alt:null})),(0,a.kt)("p",null,"3- Click on \u201cCouchbase\u201d button."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Select the size of the RAM quota for your bucket")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-V_GMolXLClI/Uac5CMdKQoI/AAAAAAAAAcM/vvGKJUXW-xQ/s320/Screen+Shot+2013-05-30+at+9.19.59+AM.png",alt:null})),(0,a.kt)("p",null,"The size of the RAM Quota for your bucket will have an impact on performance but also on the pricing."),(0,a.kt)("p",null,"5- Click \u201cAdd this Service\u201d"),(0,a.kt)("p",null,"You are done, you should receive an email with all the information to access your newly created bucket."),(0,a.kt)("p",null,"The mail from Clever Cloud contains the following information:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"db_host = xxxxxxxx.couchbase.clvrcld.net    Location of the database, this is where the endpoint is located.\ndb_name = yyyyyyyy  Name of the Couchbase bucket\ndb_username = xxxxxxxx  Not used in Couchbase context\ndb_password = zzzzzzzz  Password to connect to the Couchbase Bucket\n")),(0,a.kt)("p",null,"So you are now ready to use your bucket."),(0,a.kt)("p",null,"Note: In the current version of the Clever Cloud Couchbase Service you do not have access to a management console. If you want to get some information about the database or create views you need to do it from you application code."),(0,a.kt)("h4",{id:"connect-your-application-to-couchbaseclever-cloud"},"Connect your Application to Couchbase@Clever-Cloud"),(0,a.kt)("p",null,"The first step is to get some code, so let\u2019s clone the \u201cCouchbase Ideas Sample Application\u201d, and install the dependencies, using the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone -b 03-vote-with-value https://github.com/tgrall/couchbase-node-ideas.git\n\ncd couchbase-node-ideas\n\ngit branch mybranch\n\ngit checkout mybranch\n\nnpm install\n")),(0,a.kt)("p",null,"Open the app.js and edit the connection info to point your application to the Couchbase instance and modify the HTTP port of your application to 8080 - this is a mandatory step documented ",(0,a.kt)("a",{parentName:"p",href:"http://doc.clever-cloud.com/nodejs/nodejs/#requirements"},"here")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'dbConfiguration = {\n  "hosts": ["xxxxxxxxxxx.couchbase.clvrcld.net:8091"],\n  "bucket": "xxxxxxxxxxx",\n  "user": "xxxxxxxxxx",\n  "password": "yyyyyyyyyyyyyyyyyyyyyyyyy"\n};\n...\n...\n\nappServer = app.listen(8080, function() {\n  console.log("Express server listening on port %d in %s mode", appServer.address().port, app.settings.env);\n});\n')),(0,a.kt)("p",null,"Launch your application using"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node app.js\n")),(0,a.kt)("p",null,"Go to http://localhost:8080"),(0,a.kt)("p",null,"Your application is now using Couchbase on the cloud powered by Clever Cloud. Let\u2019s now deploy the application itself on Clever Cloud"),(0,a.kt)("h3",{id:"deploy-your-application-on-clever-cloud"},"Deploy your application on Clever Cloud"),(0,a.kt)("p",null,"The easiest way to deploy an application to Clever Cloud is using git. The first thing to do is to add your SSH public key into Clever Cloud Console. If you do not have any SSH yet, follow the steps described on Github : \u201c",(0,a.kt)("a",{parentName:"p",href:"https://help.github.com/articles/generating-ssh-keys"},"Generating SSH Keys"),"\u201d."),(0,a.kt)("h4",{id:"add-your-ssh-key"},"Add your SSH key"),(0,a.kt)("p",null,"Note: As you can guess this should be done only once"),(0,a.kt)("p",null,"Open the id_rsa.pub file with a text editor. This is your SSH key. Select all and copy to your clipboard."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to the Clever Cloud Console"),(0,a.kt)("li",{parentName:"ol"},"Click on \u201cProfile\u201d entry in the left menu"),(0,a.kt)("li",{parentName:"ol"},"Click on \u201cSSH Keys\u201d"),(0,a.kt)("li",{parentName:"ol"},"Click on \u201cAdd a SSH Key\u201d"),(0,a.kt)("li",{parentName:"ol"},"Enter a name (anything you want) and paste your key"),(0,a.kt)("li",{parentName:"ol"},"Click \u201cAdd\u201d button")),(0,a.kt)("p",null,"You are now ready to deploy applications to Clever Cloud. The next thing to do, is to create a new node application in Clever Cloud."),(0,a.kt)("h4",{id:"create-your-application"},"Create your Application"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click \u201cAdd an app\u201d in the Application menu in the top menu."),(0,a.kt)("li",{parentName:"ol"},"Give a name and description to this application"),(0,a.kt)("li",{parentName:"ol"},"Select the Instance type, in this case \u201cNode.js\u201d"),(0,a.kt)("li",{parentName:"ol"},"Configure your instances, you can keep the default values for now, click \u201cNext\u201d"),(0,a.kt)("li",{parentName:"ol"},"Check the configuration, and click \u201cCreate\u201d")),(0,a.kt)("p",null,"Your application is created, you are redirected to the generic information page, where you can find a Git URL that we will use to deploy the application."),(0,a.kt)("p",null,"You can navigate into the entries in the left menu to see more information about your application. In addition to the Information page, you can look at the following entries:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u201cDomain Names\u201d to configure the URL to access your application"),(0,a.kt)("li",{parentName:"ol"},"\u201cLogs\u201d to view the application logs")),(0,a.kt)("h4",{id:"deploy-the-application"},"Deploy the Application"),(0,a.kt)("p",null,"So we are almost there!"),(0,a.kt)("p",null,"The deployment to Clever Cloud is done using a Git push command, so you need to add the deployment URL as a remote repository to your application, using the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git remote add clever git+ssh://git@push.clever-cloud.com/app_[your_app_id].git\n\ngit commit -a -m \u201cCouchbase on Clever Cloud connection\u201d\n\ngit push clever mybranch:master\n")),(0,a.kt)("p",null,"Once you have added the application as remote repository you can commit and push your application."),(0,a.kt)("p",null,"The last command pushes the application  to Clever Cloud. It is important to note that Clever Cloud will always deploy the application on the \u201cmaster\u201d branch on the remote repository. The notation mybranch:master is used to mention it. If you work locally on your master branch just use \u201cmaster\u201d."),(0,a.kt)("p",null,"You can now go to the Clever Cloud console and look in the log and click on the URL in the \u201cDomain Names\u201d section to test your application."),(0,a.kt)("p",null,"You should be able to see your application, that is running on the Clever Cloud PaaS."),(0,a.kt)("p",null,"When you update your application, you just need to do a  git push and git commit."),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this tutorial you have learned how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create your Clever Cloud account"),(0,a.kt)("li",{parentName:"ul"},"Create a Couchbase instance"),(0,a.kt)("li",{parentName:"ul"},"Create and deploye a Node.js application")),(0,a.kt)("p",null,"Feel free to test this yourself, with Node or other technology, as you can see it is quite easy to setup."))}s.isMDXComponent=!0}}]);