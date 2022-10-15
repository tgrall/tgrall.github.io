"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[62990],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(y,i(i({ref:t},c),{},{components:a})):n.createElement(y,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={title:"Groovy 101: Importing XML in your database",categories:"groovy"},i=void 0,l={permalink:"/blog/2007/02/18/groovy-101-importing-xml-in-your-database",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2007-02-18-groovy-101-importing-xml-in-your-database.md",source:"@site/blog/2007-02-18-groovy-101-importing-xml-in-your-database.md",title:"Groovy 101: Importing XML in your database",description:"A friend of mine was looking for an easy way to import some XML content in his database. You have many ways to do it. But the easiest for a Java/Groovy developer is to use Groovy, and I have create this small example for him.",date:"2007-02-18T00:00:00.000Z",formattedDate:"February 18, 2007",tags:[],readingTime:1.325,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Groovy 101: Importing XML in your database",categories:"groovy"},prevItem:{title:"Groovy 101: Extracting XML from your database",permalink:"/blog/2007/02/20/groovy-101-extracting-xml-from-your-database"},nextItem:{title:"Oracle Application Server 10gR3: iHat",permalink:"/blog/2007/02/15/oracle-application-server-10gr3-ihat"}},s={authorsImageUrls:[]},p=[],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A friend of mine was looking for an easy way to import some XML content in his database. You have many ways to do it. But the easiest for a Java/Groovy developer is to use Groovy, and I have create this small example for him."),(0,r.kt)("p",null,"Groovy provides really simple solution to parse XML and manipulate your database. The following sample reads an RSS new feed and import the title and link in a table named NEWS that contains two columns TITLE and LINK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'import groovy.sql.Sql;\n\ndef rssFeed = "http://www.javablogs.com/ViewDaysBlogs.action?view=rss";\ndef xmlFeed      = new XmlParser().parse(rssFeed);\n\ndef sql = Sql.newInstance("jdbc:oracle:thin:@//tgrall-linux:1521/XE",\n"GROOVY",\n"GROOVY",\n"oracle.jdbc.driver.OracleDriver")\ndef set = sql.dataSet("NEWS");\n\n(0..&lt; xmlFeed.channel.item.size()).each {\n  def item = xmlFeed.channel.item.get(it);\n  def title = item.title.value[0];\n  def link = item.link.value[0];\n  println("Importing $title ...");\n  set.add(TITLE: title, LINK: link);\n}\n\n')),(0,r.kt)("p",null,"First I create a Groovy SQL object and a DataSet to manipulate my data ",(0,r.kt)("inlineCode",{parentName:"p"},'sql.dataSet("NEWS")'),". Do not forget, if like me you are using Oracle database, to add the Oracle JDBC driver to your classpath ;-)"),(0,r.kt)("p",null,"Then I create a loop on each items of the RSS feed I am using: ",(0,r.kt)("inlineCode",{parentName:"p"},"(0..&gt; xmlFeed.channel.item.size()).each {...}"),". As you see, Groovy XML help me to parse, and navigate the XML document."),(0,r.kt)("p",null,'Like any Groovy iterator you have access to an implicit object available in the loop "',(0,r.kt)("inlineCode",{parentName:"p"},"it"),'", so I can get the item using the Groovy XML : ',(0,r.kt)("inlineCode",{parentName:"p"},"xmlFeed.channel.item.get(it)")),(0,r.kt)("p",null,"Then you can get the different values you want of the  item element.Using the dataset.add method, you can insert them in the table.This is done using the  value pairs notation ",(0,r.kt)("em",{parentName:"p"},"column:value"),", this looks like: ",(0,r.kt)("inlineCode",{parentName:"p"},"set.add(TITLE: title, LINK: link)")))}m.isMDXComponent=!0}}]);