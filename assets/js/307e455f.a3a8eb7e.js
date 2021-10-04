(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[69471],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(r),m=o,h=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40470:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return m}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],l={title:"Convert a CSV File to Apache Parquet with Drill",categories:"drill parquet hadoop bigdata"},c=void 0,s={permalink:"/blog/2015/08/17/convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2015-08-17-convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill.md",source:"@site/blog/2015-08-17-convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill.md",title:"Convert a CSV File to Apache Parquet with Drill",description:"A very common use case when working with Hadoop is to store and query simple files (CSV, TSV, ...); then to get better performance and efficient storage convert these files into more efficient format, for example Apache Parquet.",date:"2015-08-17T00:00:00.000Z",formattedDate:"August 17, 2015",tags:[],readingTime:2.93,truncated:!0,authors:[],prevItem:{title:"Using Apache Drill REST API to build ASCII Dashboard with node",permalink:"/blog/2015/12/10/using-apache-drill-rest-api-to-build-ascii-dashboard-with-node"},nextItem:{title:"Apache Drill : How to create a new function?",permalink:"/blog/2015/07/21/apache-drill-how-to-create-a-new-function"}},u={authorsImageUrls:[]},p=[{value:"How to convert CSV files into Parquet files?",id:"how-to-convert-csv-files-into-parquet-files",children:[]}],f={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A very common use case when working with Hadoop is to store and query simple files (CSV, TSV, ...); then to get better performance and efficient storage convert these files into more efficient format, for example ",(0,a.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Apache Parquet"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://parquet.apache.org/"},"Apache Parquet")," is a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Column-oriented_DBMS"},"columnar storage format")," available to any project in the Hadoop ecosystem. Apache Parquet has the following characteristics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Self-describing"),(0,a.kt)("li",{parentName:"ul"},"Columnar format"),(0,a.kt)("li",{parentName:"ul"},"Language-independent")),(0,a.kt)("p",null,"Let's take a concrete example, you can find many interesting Open Data sources that distribute data as CSV files- or equivalent format-. So you can store them into your distributed file system and use them in your applications/jobs/analytics queries. This is not the most efficient way especially when we know that these data won't move that often. So instead of simply storing the CSV let's copy this information into Parquet."),(0,a.kt)("h3",{id:"how-to-convert-csv-files-into-parquet-files"},"How to convert CSV files into Parquet files?"),(0,a.kt)("p",null,"You can use code to achieve this, as you can see in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Parquet/parquet-compatibility/blob/master/parquet-compat/src/test/java/parquet/compat/test/ConvertUtils.java"},"ConvertUtils")," sample/test class. You can use a simpler way with Apache Drill. Drill allows you save the result of a query as Parquet files."),(0,a.kt)("p",null,"The following steps will show you how to do convert a simple CSV into a Parquet file using Drill."))}m.isMDXComponent=!0}}]);