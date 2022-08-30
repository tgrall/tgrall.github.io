(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[16333],{3905:function(e,t,o){"use strict";o.d(t,{Zo:function(){return c},kt:function(){return m}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)o=l[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=s(o),m=n,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||l;return o?a.createElement(d,r(r({ref:t},c),{},{components:o})):a.createElement(d,r({ref:t},c))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=o.length,r=new Array(l);r[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,r[1]=i;for(var s=2;s<l;s++)r[s]=o[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,o)}h.displayName="MDXCreateElement"},62909:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return m}});var a=o(22122),n=o(19756),l=(o(67294),o(3905)),r=["components"],i={title:"SQL to NoSQL : Copy your data from MySQL to Couchbase",categories:"couchbase nosql sql"},u=void 0,s={permalink:"/blog/2013/07/03/sql-to-nosql-copy-your-data-from-mysql-to-couchbase",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2013-07-03-sql-to-nosql-copy-your-data-from-mysql-to-couchbase.md",source:"@site/blog/2013-07-03-sql-to-nosql-copy-your-data-from-mysql-to-couchbase.md",title:"SQL to NoSQL : Copy your data from MySQL to Couchbase",description:"TL;DR: Look at the project on Github.",date:"2013-07-03T00:00:00.000Z",formattedDate:"July 3, 2013",tags:[],readingTime:5.34,truncated:!1,authors:[],prevItem:{title:"Deploy your Node/Couchbase application to the cloud with Clever Cloud",permalink:"/blog/2013/07/11/deploy-your-node-slash-couchbase-application-to-the-cloud-with-clever-cloud"},nextItem:{title:"Create a Couchbase cluster in less than a minute with Ansible",permalink:"/blog/2013/05/31/create-a-couchbase-cluster-in-less-than-a-minute-with-ansible"}},c={authorsImageUrls:[]},p=[{value:"Introduction",id:"introduction",children:[]},{value:"The Tool: Couchbase SQL Importer",id:"the-tool-couchbase-sql-importer",children:[]},{value:"The Code: How it works?",id:"the-code-how-it-works",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:p};function m(e){var t=e.components,o=(0,n.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"TL;DR:")," Look at the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-sql-importer"},"project on Github"),"."),(0,l.kt)("h3",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"During my last interactions with the Couchbase community, I had the question how can I easily import my data from my current database into Couchbase. And my answer was always the same:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Take an ETL such as Talend to do it"),(0,l.kt)("li",{parentName:"ul"},"Just write a small program to copy the data from your RDBMS to Couchbase...")),(0,l.kt)("p",null,"So I have written this small program that allows you to import the content of a RDBMS into Couchbase. This tools could be used as it is, or you can look at the code to adapt it to your application."),(0,l.kt)("iframe",{width:"675",height:"380",src:"https://www.youtube.com/embed/xzqBjhYKCLY",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("h3",{id:"the-tool-couchbase-sql-importer"},"The Tool: Couchbase SQL Importer"),(0,l.kt)("p",null,"The Couchbase SQL Importer, available ",(0,l.kt)("a",{parentName:"p",href:"http://github.com/tgrall/couchbase-sql-importer"},"here"),", allows you with a simple command line to copy all -or part of- your SQL schema into Couchbase. Before explaining how to run this command, let's see how the data are stored into Couchbase when they are imported:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Each table row is imported a single JSON document",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"where each table column becomes a JSON attribute"))),(0,l.kt)("li",{parentName:"ul"},"Each document as a key made of the name of the table and a counter (increment)")),(0,l.kt)("p",null,"The following concrete example, based on the ",(0,l.kt)("a",{parentName:"p",href:"http://dev.mysql.com/doc/world-setup/en/index.html"},"MySQL World sample database"),", will help you to understand how it works. This database contains 3 tables : City, Country, CountryLanguage. The City table looks like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+-------------+----------+------+-----+---------+----------------+\n| Field       | Type     | Null | Key | Default | Extra          |\n+-------------+----------+------+-----+---------+----------------+\n| ID          | int(11)  | NO   | PRI | NULL    | auto_increment |\n| Name        | char(35) | NO   |     |         |                |\n| CountryCode | char(3)  | NO   |     |         |                |\n| District    | char(20) | NO   |     |         |                |\n| Population  | int(11)  | NO   |     | 0       |                |\n+-------------+----------+------+-----+---------+----------------+\n")),(0,l.kt)("p",null,"The JSON document that matches this table looks like the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'city:3805\n{\n  "Name": "San Francisco",\n  "District": "California",\n  "ID": 3805,\n  "Population": 776733,\n  "CountryCode": "USA"\n}\n')),(0,l.kt)("p",null,'You see that here I am simply taking all the rows and "moving" them into Couchbase. This is a good first step to play with your dataset into Couchbase, but it is probably not the final model you want to use for your application; most of the time you will have to see when to use embedded documents, list of values, .. into your JSON documents.'),(0,l.kt)("p",null,"In addition to the JSON document the tool create views based on the following logic:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'a view that list all imported documents with the name of the "table" (aka type) as key'),(0,l.kt)("li",{parentName:"ul"},"a view for each table with the primary key columns")),(0,l.kt)("p",null,"View: all/by_type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "rows": [\n  {"key": "city", "value": 4079},\n  {"key": "country", "value": 239},\n  {"key": "countrylanguage", "value": 984}\n  ]\n}\n')),(0,l.kt)("p",null,"As you can see this view allows you to get with a single Couchbase query the number of document by type."),(0,l.kt)("p",null,'Also for each table/document type, a view is created where the key of the index is built from the table primary key. Let\'s for example query the "City" documents.'),(0,l.kt)("p",null,"View: city/by_pk?reduce=false","&","limit=5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "total_rows": 4079,\n  "rows": [\n  {"id": "city:1", "key": 1, "value": null},\n  {"id": "city:2", "key": 2, "value": null},\n  {"id": "city:3", "key": 3, "value": null},\n  {"id": "city:4", "key": 4, "value": null},\n  {"id": "city:5", "key": 5, "value": null}\n  ]\n}\n')),(0,l.kt)("p",null,"The index key matches the value of the ",(0,l.kt)("inlineCode",{parentName:"p"},"City.ID")," column.  When the primary key is made of multiple columns the key looks like:"),(0,l.kt)("p",null,"View: CountryLanguage/by_pk?reduce=false","&","limit=5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "total_rows": 984,\n  "rows": [\n  {"id": "countrylanguage:1", "key": ["ABW", "Dutch"], "value": null},\n  {"id": "countrylanguage:2", "key": ["ABW", "English"], "value": null},\n  {"id": "countrylanguage:3", "key": ["ABW", "Papiamento"], "value": null},\n  {"id": "countrylanguage:4", "key": ["ABW", "Spanish"], "value": null},\n  {"id": "countrylanguage:5", "key": ["AFG", "Balochi"], "value": null}\n  ]\n}\n')),(0,l.kt)("p",null,"This view is built from the CountryLanguage table primary key made of ",(0,l.kt)("inlineCode",{parentName:"p"},"CountryLanguage.CountryCode and  "),"CountryLanguage.Language` columns."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+-------------+---------------+------+-----+---------+-------+\n| Field       | Type          | Null | Key | Default | Extra |\n+-------------+---------------+------+-----+---------+-------+\n| CountryCode | char(3)       | NO   | PRI |         |       |\n| Language    | char(30)      | NO   | PRI |         |       |\n| IsOfficial  | enum('T','F') | NO   |     | F       |       |\n| Percentage  | float(4,1)    | NO   |     | 0.0     |       |\n+-------------+---------------+------+-----+---------+-------+\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How to use Couchbase SQL Importer tool? ")),(0,l.kt)("p",null,"The importer is a simple Java based command line utility, quite simple to use:"),(0,l.kt)("p",null,"1- Download the ",(0,l.kt)("a",{parentName:"p",href:"http://goo.gl/IF89e"},"CouchbaseSqlImporter.jar file from here"),". This file is contains all the dependencies to work with Couchbase: the Java Couchbase Client, and GSON.\n2- Download the JDBC driver for the database you are using as data source. For this example I am using MySQL and I have download the driver for MySQL Site.\n3- Configure the import using a properties file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"## SQL Information ##\nsql.connection=jdbc:mysql://192.168.99.19:3306/world\nsql.username=root\nsql.password=password\n\n## Couchbase Information ##\ncb.uris=http://localhost:8091/pools\ncb.bucket=default\ncb.password=\n\n## Import information\nimport.tables=ALL\nimport.createViews=true\nimport.typefield=type\nimport.fieldcase=lower\n")),(0,l.kt)("p",null,"This sample properties file contains three sections :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The two first sections are used to configure the connections to your SQL database and Couchbase cluster (note that the bucket must be created first)"),(0,l.kt)("li",{parentName:"ul"},"The third section allow you to configure the import itself")),(0,l.kt)("p",null,"4- Run the tool !"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'java -cp "./CouchbaseSqlImporter.jar:./mysql-connector-java-5.1.25-bin.jar" com.couchbase.util.SqlImporter import.properties\n')),(0,l.kt)("p",null,"So you run the Java command with the proper classpath (-cp parameter)."),(0,l.kt)("p",null,"And you are done, you can get your data from your SQL database into Couchbase."),(0,l.kt)("p",null,"If you are interested to see how it is working internally, you can take a look to the next paragraph."),(0,l.kt)("h3",{id:"the-code-how-it-works"},"The Code: How it works?"),(0,l.kt)("p",null,"The main class of the tool is really simple  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-sql-importer/blob/master/sql-importer-lib/src/main/java/com/couchbase/util/SqlImporter.java"},"com.couchbase.util.SqlImporter"),", the process is:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Connect to the SQL database"),(0,l.kt)("li",{parentName:"ol"},"Connect to Couchbase"),(0,l.kt)("li",{parentName:"ol"},"Get the list of tables"),(0,l.kt)("li",{parentName:"ol"},'For each tables execute a "select * from table"\n4.1. Analyze the ResultSetMetadata to get the list of columns\n4.2. Create a Java map for each rows where the key is the name of the columns and the value\u2026is the value\n4.3. Serialize this Map into a GSON document and save it into Couchbase')),(0,l.kt)("p",null,"The code is available in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tgrall/couchbase-sql-importer/blob/master/sql-importer-lib/src/main/java/com/couchbase/util/SqlImporter.java#L212"},"ImportTable(String table)")," Java method."),(0,l.kt)("p",null,"One interesting point is that you can use and extend the code to deal with your application."),(0,l.kt)("h3",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"I have created this tool quickly to help some people in the community, if you are using it and need new features, let me know, using comment or pull request."))}m.isMDXComponent=!0}}]);