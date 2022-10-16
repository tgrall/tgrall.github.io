"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[15533],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(a),f=n,h=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3631:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"Convert a CSV File to Apache Parquet with Drill",categories:"drill parquet hadoop bigdata"},l=void 0,i={permalink:"/blog/2015/08/17/convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-08-17-convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill.md",source:"@site/blog/2015-08-17-convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill.md",title:"Convert a CSV File to Apache Parquet with Drill",description:"A very common use case when working with Hadoop is to store and query simple files (CSV, TSV, ...); then to get better performance and efficient storage convert these files into more efficient format, for example Apache Parquet.",date:"2015-08-17T00:00:00.000Z",formattedDate:"August 17, 2015",tags:[],readingTime:2.93,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Convert a CSV File to Apache Parquet with Drill",categories:"drill parquet hadoop bigdata"},prevItem:{title:"Using Apache Drill REST API to build ASCII Dashboard with node",permalink:"/blog/2015/12/10/using-apache-drill-rest-api-to-build-ascii-dashboard-with-node"},nextItem:{title:"Apache Drill : How to create a new function?",permalink:"/blog/2015/07/21/apache-drill-how-to-create-a-new-function"}},s={authorsImageUrls:[]},u=[{value:"How to convert CSV files into Parquet files?",id:"how-to-convert-csv-files-into-parquet-files",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Querying the CSV file",id:"querying-the-csv-file",level:4},{value:"Query Parquet Files",id:"query-parquet-files",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A very common use case when working with Hadoop is to store and query simple files (CSV, TSV, ...); then to get better performance and efficient storage convert these files into more efficient format, for example ",(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Apache Parquet"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Apache Parquet")," is a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Column-oriented_DBMS"},"columnar storage format")," available to any project in the Hadoop ecosystem. Apache Parquet has the following characteristics:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Self-describing"),(0,n.kt)("li",{parentName:"ul"},"Columnar format"),(0,n.kt)("li",{parentName:"ul"},"Language-independent")),(0,n.kt)("p",null,"Let's take a concrete example, you can find many interesting Open Data sources that distribute data as CSV files- or equivalent format-. So you can store them into your distributed file system and use them in your applications/jobs/analytics queries. This is not the most efficient way especially when we know that these data won't move that often. So instead of simply storing the CSV let's copy this information into Parquet."),(0,n.kt)("h3",{id:"how-to-convert-csv-files-into-parquet-files"},"How to convert CSV files into Parquet files?"),(0,n.kt)("p",null,"You can use code to achieve this, as you can see in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Parquet/parquet-compatibility/blob/master/parquet-compat/src/test/java/parquet/compat/test/ConvertUtils.java"},"ConvertUtils")," sample/test class. You can use a simpler way with Apache Drill. Drill allows you save the result of a query as Parquet files."),(0,n.kt)("p",null,"The following steps will show you how to do convert a simple CSV into a Parquet file using Drill."),(0,n.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Apache Drill : Standalone ",(0,n.kt)("a",{parentName:"li",href:"https://drill.apache.org/"},"Apache Drill")," or using ",(0,n.kt)("a",{parentName:"li",href:"https://www.mapr.com/products/mapr-sandbox-hadoop/download-sandbox-drill"},"Apache Drill Sandbox from MapR")),(0,n.kt)("li",{parentName:"ul"},"Some CSV Files: for example ",(0,n.kt)("a",{parentName:"li",href:"http://www.flysfo.com/media/facts-statistics/air-traffic-statistics"},"Passenger Dataset from SFO Air Traffic Statistics"))),(0,n.kt)("h4",{id:"querying-the-csv-file"},"Querying the CSV file"),(0,n.kt)("p",null,"Let's execute a basic query:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT *\nFROM dfs.`/opendata/Passenger/SFO_Passenger_Data/MonthlyPassengerData_200507_to_201503.csv`\nLIMIT 5;\n\n["200507","ATA Airlines","TZ","ATA Airlines","TZ","Domestic","US","Deplaned","Low Fare","Terminal 1","B","27271\\r"]\n...\n...\n')),(0,n.kt)("p",null,"As you can see, by default Drill processes each line as an array of columns, all values being simple String. So if you need to do some operations with these values (projection or where clause) you must use the column index, and cast the value to the proper type. You can see a simple example below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"SELECT\ncolumns[0] as `DATE`,\ncolumns[1] as `AIRLINE`,\nCAST(columns[11] AS DOUBLE) as `PASSENGER_COUNT`\nFROM dfs.`/opendata/Passenger/SFO_Passenger_Data/*.csv`\nWHERE CAST(columns[11] AS DOUBLE) < 5\n;\n\n+---------+-----------------------------------+------------------+\n|  DATE   |              AIRLINE              | PASSENGER_COUNT  |\n+---------+-----------------------------------+------------------+\n| 200610  | United Airlines - Pre 07/01/2013  | 2.0              |\n...\n...\n")),(0,n.kt)("p",null,'We are now ready to create our Parquet files using the "Create Table As Select" (aka ',(0,n.kt)("a",{parentName:"p",href:"http://drill.apache.org/docs/create-table-as-ctas-command/"},"CTAS"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"alter session set `store.format`='parquet';\n\n\nCREATE TABLE dfs.tmp.`/stats/airport_data/` AS\nSELECT\nCAST(SUBSTR(columns[0],1,4) AS INT)  `YEAR`,\nCAST(SUBSTR(columns[0],5,2) AS INT) `MONTH`,\ncolumns[1] as `AIRLINE`,\ncolumns[2] as `IATA_CODE`,\ncolumns[3] as `AIRLINE_2`,\ncolumns[4] as `IATA_CODE_2`,\ncolumns[5] as `GEO_SUMMARY`,\ncolumns[6] as `GEO_REGION`,\ncolumns[7] as `ACTIVITY_CODE`,\ncolumns[8] as `PRICE_CODE`,\ncolumns[9] as `TERMINAL`,\ncolumns[10] as `BOARDING_AREA`,\nCAST(columns[11] AS DOUBLE) as `PASSENGER_COUNT`\nFROM dfs.`/opendata/Passenger/SFO_Passenger_Data/*.csv`\n\n")),(0,n.kt)("p",null,"That's it! You have now a Parquet file, a single file in our case since our dataset is really small. Apache Drill will create multiples files for the tables depending of the size and configuration your environment."),(0,n.kt)("p",null,"I invite you to read this Chapter in the Apache Drill documentation to learn more about ",(0,n.kt)("a",{parentName:"p",href:"https://drill.apache.org/docs/parquet-format/"},"Drill and Parquet"),"."),(0,n.kt)("h3",{id:"query-parquet-files"},"Query Parquet Files"),(0,n.kt)("p",null,"Now that you have created your Parquet files you can use them in any of your Hadoop processes, but you can also use them in Drill, as follow:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nSELECT *\nFROM dfs.tmp.`/stats/airport_data/*`\n\n")),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"In this article you have learned how to convert a CSV file using an Apache Drill query."),(0,n.kt)("p",null,"You can do that with any source supported by Drill, for example from JSON to Parquet, or even a complex join query between multiple data sources. You can also chose a different output format for example JSON, or a CSV."))}p.isMDXComponent=!0}}]);