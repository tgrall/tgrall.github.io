"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[7782],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5930:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return c},toc:function(){return d},default:function(){return m}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],l={title:"Introduction to MongoDB Security",categories:"mongodb nosql security"},s=void 0,u={permalink:"/blog/2015/02/04/introduction-to-mongodb-security",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-02-04-introduction-to-mongodb-security.md",source:"@site/blog/2015-02-04-introduction-to-mongodb-security.md",title:"Introduction to MongoDB Security",description:"Last week at the Paris MUG, I had a quick chat about security and MongoDB, and I have decided to create this post that explains how to configure out of the box security available in MongoDB.",date:"2015-02-04T00:00:00.000Z",formattedDate:"February 4, 2015",tags:[],readingTime:5.825,truncated:!0,authors:[],prevItem:{title:"MongoDB : Playing with Arrays",permalink:"/blog/2015/04/21/mongodb-playing-with-arrays"},nextItem:{title:"Moving my beers from Couchbase to MongoDB",permalink:"/blog/2015/02/01/moving-my-beers-from-couchbase-to-mongodb"}},c={authorsImageUrls:[]},d=[{value:"1. Start MongoDB",id:"1-start-mongodb",children:[{value:"Connect with the Admnistrator user",id:"connect-with-the-admnistrator-user",children:[]}]},{value:"3. Create Application User",id:"3-create-application-user",children:[{value:"Connect with the application user",id:"connect-with-the-application-user",children:[]}]},{value:"Create a reporting user (Read Only)",id:"create-a-reporting-user-read-only",children:[]},{value:"Add new role to a user",id:"add-new-role-to-a-user",children:[]},{value:"Create and use custom roles",id:"create-and-use-custom-roles",children:[]},{value:"Roles and Privileges",id:"roles-and-privileges",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],p={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Last week at the Paris MUG, I had a quick chat about security and MongoDB, and I have decided to create this post that explains how to configure out of the box security available in MongoDB."),(0,r.kt)("p",null,"You can find all information about MongoDB Security in following documentation chapter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/security/"},"http://docs.mongodb.org/manual/security/"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(21738).Z})),(0,r.kt)("p",null,"In this post, ",(0,r.kt)("em",{parentName:"p"},"I won't go")," into the detail about how to deploy your database in a secured environment (DMZ/Network/IP/Location/...)"),(0,r.kt)("p",null,"I will focus on ",(0,r.kt)("strong",{parentName:"p"},"Authentication")," and ",(0,r.kt)("strong",{parentName:"p"},"Authorization"),", and provide you the steps to secure the access to your database and data."),(0,r.kt)("p",null,"I have to mention that by default, when you install and start MongoDB, security is not enabled. Just to make it easier to work with."),(0,r.kt)("p",null,"The first part of the security is the ",(0,r.kt)("strong",{parentName:"p"},"Authentication"),", you have multiple choices documented ",(0,r.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/core/authentication/"},"here"),'. Let\'s focus on "MONGODB-CR" mechanism.'),(0,r.kt)("p",null,"The second part is ",(0,r.kt)("strong",{parentName:"p"},"Authorization")," to select what a user can do or not once he is connected to the database. The documentation about authorization is available ",(0,r.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/manual/core/authorization/"},"here"),"."),(0,r.kt)("p",null,"Let's now document how-to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an Administrator User"),(0,r.kt)("li",{parentName:"ol"},"Create Application Users")),(0,r.kt)("p",null,"For each type of users I will show how to grant specific permissions."),(0,r.kt)("h2",{id:"1-start-mongodb"},"1. Start MongoDB"),(0,r.kt)("p",null,"As I said before, by default security is not enabled when you start MongoDB; so the first think to do is to enable it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth")," parameter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> mkdir /data/db\n\n> mongod --auth\n\n....\n....\n2015-02-04T06:56:37.875+0100 [conn1] note: no users configured in admin.system.users, allowing localhost access\n...\n\n")),(0,r.kt)("p",null,"MongoDB is starting, and until you have created a user you can connect from localhost to create some users (especially the administrator one). This is what is called the ",(0,r.kt)("em",{parentName:"p"},"localhost exception"),"."),(0,r.kt)("p",null,"Note: I am here documenting security in simple configuration, I invite you to look to the documentation when deploying a ",(0,r.kt)("a",{parentName:"p",href:"http://docs.mongodb.org/v2.2/administration/sharded-clusters/#sharded-cluster-security-considerations"},"Sharded cluster"),"."),(0,r.kt)("p",null,"Now that we have started MongoDB, we can create users."),(0,r.kt)("p",null,"##2. Create Admin User"),(0,r.kt)("p",null,"The first thing is to create an admin user, that can also create users, So we have to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"go to the mongo shell"),(0,r.kt)("li",{parentName:"ol"},"connect to the `admin' database"),(0,r.kt)("li",{parentName:"ol"},"create a user and assign him the role ",(0,r.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/reference/built-in-roles/#userAdminAnyDatabase"},(0,r.kt)("strong",{parentName:"a"},"userAdminAnyDatabase")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'use admin\n\nvar user = {\n    "user" : "admin",\n    "pwd" : "manager",\n    roles : [\n        {\n            "role" : "userAdminAnyDatabase",\n            "db" : "admin"\n        }\n    ]\n}\n\ndb.createUser(user);\n\nexit\n')),(0,r.kt)("p",null,"Now that you have created a user, in a MongoDB running with ",(0,r.kt)("inlineCode",{parentName:"p"},"--auth"),", anonymous connections won't be able to do do anything with the database."),(0,r.kt)("p",null,"You can test for example to execute ",(0,r.kt)("inlineCode",{parentName:"p"},"show dbs")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"db.coll.insert({'x':0})")," commands, you'll see authorization errors."),(0,r.kt)("h3",{id:"connect-with-the-admnistrator-user"},"Connect with the Admnistrator user"),(0,r.kt)("p",null,"Now that we have an admin user you can connect to the database with this user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n> mongo admin -u admin -p\n\n\n")),(0,r.kt)("p",null,"Our admin user, has the role ",(0,r.kt)("strong",{parentName:"p"},"userAdminAnyDatabase"),". With this role you can manage user; but this role cannot read/write data from application datatabases/collections."),(0,r.kt)("p",null,'So we need now to create a new user for our "eCommerce" application.'),(0,r.kt)("h2",{id:"3-create-application-user"},"3. Create Application User"),(0,r.kt)("p",null,"Now we will create a new user ",(0,r.kt)("em",{parentName:"p"},"website")," that is responsible of the ecommerce database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> mongo admin -u admin -p\n\nuse ecommerce\n\nvar user = {\n    "user" : "website",\n    "pwd" : "abc123",\n    roles : [\n        {\n            "role" : "readWrite",\n            "db" : "ecommerce"\n        }\n    ]\n}\n\ndb.createUser(user);\n\nexit\n\n')),(0,r.kt)("p",null,"This user will be able to read/write on the ",(0,r.kt)("em",{parentName:"p"},"ecommerce")," database"),(0,r.kt)("h3",{id:"connect-with-the-application-user"},"Connect with the application user"),(0,r.kt)("p",null,"Using the mongo shell you can now connect and create/query data"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> mongo ecommerce -u website -p\n\ndb.products.insert({ "title" : "MongoDB in Action"  });\n\ndb.products.findOne();\n\ndb.products.update({}, {"$set" : { "type" : "book" } })\n\n')),(0,r.kt)("p",null,"As you can see this user has the perfect profile for your application."),(0,r.kt)("p",null,"Note, that if you try to query or modify another database with this user you will receive authorization exceptions."),(0,r.kt)("h2",{id:"create-a-reporting-user-read-only"},"Create a reporting user (Read Only)"),(0,r.kt)("p",null,"You may need in your application, user that can only read data, let's say in all databases. For this you just need to assign the role ",(0,r.kt)("strong",{parentName:"p"},"readAnyDatabase"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n> mongo admin -u admin -p\n\nvar user = {\n    "user" : "reporting",\n    "pwd" : "abc123",\n    roles : [\n        {\n            "role" : "readAnyDatabase",\n            "db" : "admin"\n        }\n    ]\n}\n\ndb.createUser(user);\n\nexit\n')),(0,r.kt)("p",null,"This user will be able to query all the databases and collections, including ",(0,r.kt)("inlineCode",{parentName:"p"},"show dbs")," command."),(0,r.kt)("p",null,"Let's connect with the reporting user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> mongo admin -u reporting -p\n\nshow dbs\n\nuse ecommerce\n\ndb.products.find();\n\n\n")),(0,r.kt)("p",null,"If you try to inser/update/delete document you will receive an exception."),(0,r.kt)("h2",{id:"add-new-role-to-a-user"},"Add new role to a user"),(0,r.kt)("p",null,"Let's now see how to add a new role to a user. For example I want to let the admin the power of read and write any database. For this I just need to add the role ",(0,r.kt)("strong",{parentName:"p"},"readWriteAnyDatabase")," to the admin user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'> mongo admin -u admin -p\n\ndb.grantRolesToUser(\n    "admin",\n    [{ "role" : "readWriteAnyDatabase", "db" : "admin" }]\n)\n\ndb.getUser("admin");\n\n')),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"db.grantRolesToUser")," command I have added the role to the admin user, and using the ",(0,r.kt)("inlineCode",{parentName:"p"},"db.getUser")," I can look at the user profile."),(0,r.kt)("p",null,"Now, admin user should be able to create new databases, collections and documents, let's try:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'use hr\n\ndb.employees.insert({ "name":"John Doe", "hire_date" : new Date() });\n\ndb.organization.insert({ "name" : "Development" });\n\ndb.employees.findOne();\n\n')),(0,r.kt)("h2",{id:"create-and-use-custom-roles"},"Create and use custom roles"),(0,r.kt)("p",null,"Another feature that is used a lot around security is related to the roles. In some case you want to provide multiple roles to a user, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all permission on database ",(0,r.kt)("em",{parentName:"li"},"ecommerce")),(0,r.kt)("li",{parentName:"ul"},"read the collection ",(0,r.kt)("em",{parentName:"li"},"employees")," in database ",(0,r.kt)("em",{parentName:"li"},"hr"))),(0,r.kt)("p",null,"For this you can create a role that provide all the permissions and assign it to users. Let's do that using admin user."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'use admin\n\nvar role = {\n    "role"  : "webSiteManagerRole",\n    privileges : [\n        {\n            "resource": {"db" : "hr", "collection" : "employees"},\n            "actions": ["find"]\n        }\n    ],\n    "roles" : [\n        {\n            "role" : "readWrite",\n            "db" : "ecommerce"\n        }\n    ]\n}\n\ndb.createRole( role );\n\nvar user = {\n    "user" : "master",\n    "pwd" : "abc123",\n    roles : [\n        {\n            "role" : "webSiteManagerRole",\n            "db" : "admin"\n        }\n    ]\n}\n\ndb.createUser(user);\n\nexit\n\n')),(0,r.kt)("p",null,'If you connect now with the user "master", you will see that, the user:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can do anything you want in the ecommerce database"),(0,r.kt)("li",{parentName:"ul"},'can read the "hr.employees" collection, on only this'),(0,r.kt)("li",{parentName:"ul"},"cannot do anything else.")),(0,r.kt)("h2",{id:"roles-and-privileges"},"Roles and Privileges"),(0,r.kt)("p",null,"As you have seen in the previous section, you can create roles, and assign privileges to these roles. This is very powerful and you can really control each action on the database."),(0,r.kt)("p",null,"I am inviting you to look in detail to the built-in roles and privileges, this will help you a lot to select the proper ones for your application:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/reference/built-in-roles/"},"Built-in Roles")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://docs.mongodb.org/manual/reference/privilege-actions/"},"Privileges"))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this blog post I quickly explained, how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use MongoDB Authentication"),(0,r.kt)("li",{parentName:"ul"},"Create Users"),(0,r.kt)("li",{parentName:"ul"},"Assign Roles and Privileges for Users.")),(0,r.kt)("p",null,"It is interesting to know that everything that I have showed you in the shell could be done from a user interface in ",(0,r.kt)("a",{parentName:"p",href:"http://mms.mongodb.com"},"MMS")))}m.isMDXComponent=!0},21738:function(e,t,n){t.Z=n.p+"assets/images/password-fc053174fc2f9406cb0b83d9f368c094.jpg"}}]);