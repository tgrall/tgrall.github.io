(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[9170],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47846:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),i=["components"],o={title:"Apache Drill : How to create a new function?",categories:"Drill, UDF, SQL, Java"},u=void 0,s={permalink:"/blog/2015/07/21/apache-drill-how-to-create-a-new-function",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2015-07-21-apache-drill-how-to-create-a-new-function.md",source:"@site/blog/2015-07-21-apache-drill-how-to-create-a-new-function.md",title:"Apache Drill : How to create a new function?",description:"Apache Drill allows users to explore any type of data using ANSI SQL. This is great, but Drill goes even further than that and allows you to create custom functions to extend the query engine. These custom functions have all the performance of any of the Drill primitive operations, but allowing that performance makes writing these functions a little trickier than you might expect.",date:"2015-07-21T00:00:00.000Z",formattedDate:"July 21, 2015",tags:[],readingTime:7.425,truncated:!1,authors:[],prevItem:{title:"Convert a CSV File to Apache Parquet with Drill",permalink:"/blog/2015/08/17/convert-csv-file-to-apache-parquet-dot-dot-dot-with-drill"},nextItem:{title:"MongoDB : Playing with Arrays",permalink:"/blog/2015/04/21/mongodb-playing-with-arrays"}},p={authorsImageUrls:[]},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Dependencies",id:"dependencies",children:[]},{value:"Source",id:"source",children:[{value:"Package",id:"package",children:[]},{value:"Run !",id:"run-",children:[]}]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://drill.apache.org/"},"Apache Drill")," allows users to explore ",(0,l.kt)("em",{parentName:"p"},"any type of")," data using ANSI SQL. This is great, but Drill goes even further than that and allows you to create custom functions to extend the query engine. These custom functions have all the performance of any of the Drill primitive operations, but allowing that performance makes writing these functions a little trickier than you might expect."),(0,l.kt)("p",null,"In this article, I'll explain step by step how to create and deploy a new function using a very basic example. Note that you can find lot of information about ",(0,l.kt)("a",{parentName:"p",href:"https://drill.apache.org/docs/develop-custom-functions-introduction/"},"Drill Custom Functions in the documentation"),"."),(0,l.kt)("p",null,"Let's create a new function that allows you to mask some characters in a string, and let's make it very simple. The new function will allow user to hide ",(0,l.kt)("em",{parentName:"p"},"x")," number of characters from the start and replace then by any characters of their choice. This will look like:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"MASK( 'PASSWORD' , '#' , 4 ) => ####WORD\n")),(0,l.kt)("p",null,"You can find the full project in the following ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tgrall/drill-simple-mask-function"},"Github Repository"),"."),(0,l.kt)("p",null,"As mentioned before, we could imagine many advanced features to this, but my goal is to focus on the steps to write a custom function, not\nso much on what the function does."),(0,l.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("p",null,"For this you will need:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java Developer Kit 7 or later"),(0,l.kt)("li",{parentName:"ul"},"Apache Drill 1.1 or later"),(0,l.kt)("li",{parentName:"ul"},"Maven 3.0 or later")),(0,l.kt)("h2",{id:"dependencies"},"Dependencies"),(0,l.kt)("p",null,"The following Drill dependency should be added to your maven project"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n      <groupId>org.apache.drill.exec</groupId>\n      <artifactId>drill-java-exec</artifactId>\n      <version>1.1.0</version>\n</dependency>\n")),(0,l.kt)("h2",{id:"source"},"Source"),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Mask")," function is an implementation of the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/drill/blob/master/exec/java-exec/src/main/java/org/apache/drill/exec/expr/DrillSimpleFunc.java"},(0,l.kt)("inlineCode",{parentName:"a"},"DrillSimpleFunc")),"."),(0,l.kt)("p",null,"Developers can create 2 types of custom functions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simple Functions: these functions have a single row as input and produce a single value as output"),(0,l.kt)("li",{parentName:"ul"},"Aggregation Functions: that will accept multiple rows as input and produce one value as output")),(0,l.kt)("p",null,"Simple functions are often referred to as UDF's which stands for user defined function.  Aggregation functions are referred to as UDAF which\nstands for user defined aggregation function."),(0,l.kt)("p",null,"In this example, we just need to transform the value of a column on each row, so a simple function is enough."),(0,l.kt)("h4",{id:"create-the-function"},"Create the function"),(0,l.kt)("p",null,"The first step is to implement the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/drill/blob/master/exec/java-exec/src/main/java/org/apache/drill/exec/expr/DrillSimpleFunc.java"},(0,l.kt)("inlineCode",{parentName:"a"},"DrillSimpleFunc"))," interface."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'package org.apache.drill.contrib.function;\n\nimport org.apache.drill.exec.expr.DrillSimpleFunc;\nimport org.apache.drill.exec.expr.annotations.FunctionTemplate;\n\n@FunctionTemplate(\n        name="mask",\n        scope= FunctionTemplate.FunctionScope.SIMPLE,\n        nulls = FunctionTemplate.NullHandling.NULL_IF_NULL\n)\npublic class SimpleMaskFunc implements DrillSimpleFunc{\n\n    public void setup() {\n\n    }\n\n    public void eval() {\n\n    }\n}\n\n')),(0,l.kt)("p",null,"The behavior of the function is driven by annotations (line 6-10)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Name")," of the function"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Scope")," of the function, in our case Simple"),(0,l.kt)("li",{parentName:"ul"},"What to do when the value is NULL, in this case Reverse will just returns NULL")),(0,l.kt)("p",null,"Now we need to implement the logic of the function using ",(0,l.kt)("inlineCode",{parentName:"p"},"setup()")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"eval()")," methods."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"setup")," is self-explanatory, and in our case we do not need to setup anything."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"eval")," that is the core of the function. As you can see this method does not have any parameter, and return void. So how does it work?")),(0,l.kt)("p",null,"In fact the function will be generated dynamically (see ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/apache/drill/blob/master/exec/java-exec/src/main/java/org/apache/drill/exec/expr/fn/DrillSimpleFuncHolder.java#L42"},"DrillSimpleFuncHolder"),"), and the input parameters and output holders are defined using holders by annotations. Let's look into this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'import io.netty.buffer.DrillBuf;\nimport org.apache.drill.exec.expr.DrillSimpleFunc;\nimport org.apache.drill.exec.expr.annotations.FunctionTemplate;\nimport org.apache.drill.exec.expr.annotations.Output;\nimport org.apache.drill.exec.expr.annotations.Param;\nimport org.apache.drill.exec.expr.holders.IntHolder;\nimport org.apache.drill.exec.expr.holders.NullableVarCharHolder;\nimport org.apache.drill.exec.expr.holders.VarCharHolder;\n\nimport javax.inject.Inject;\n\n\n@FunctionTemplate(\n        name = "mask",\n        scope = FunctionTemplate.FunctionScope.SIMPLE,\n        nulls = FunctionTemplate.NullHandling.NULL_IF_NULL\n)\npublic class SimpleMaskFunc implements DrillSimpleFunc {\n\n    @Param\n    NullableVarCharHolder input;\n\n    @Param(constant = true)\n    VarCharHolder mask;\n\n    @Param(constant = true)\n    IntHolder toReplace;\n\n    @Output\n    VarCharHolder out;\n\n    @Inject\n    DrillBuf buffer;\n\n    public void setup() {\n    }\n\n    public void eval() {\n\n    }\n\n}\n\n')),(0,l.kt)("p",null,"We need to define the parameters of the function. In this case we have 3 parameters, each defined using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Param")," annotation.  In addition, we also have to define the returned value using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Output")," annotation."),(0,l.kt)("p",null,"The parameters of our mask function are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A nullable string"),(0,l.kt)("li",{parentName:"ul"},"The mask char or string"),(0,l.kt)("li",{parentName:"ul"},"The number of characters to replace starting from the first")),(0,l.kt)("p",null,"The function returns :"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A string")),(0,l.kt)("p",null,"For each of these parameters you have to use an holder class. For the ",(0,l.kt)("inlineCode",{parentName:"p"},"String"),", this is managed by a ",(0,l.kt)("inlineCode",{parentName:"p"},"VarCharHolder")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"NullableVarCharHolder")," -lines 21, 24,30- that provides a buffer to manage larger objects in a efficient way. Since we are manipulating a ",(0,l.kt)("inlineCode",{parentName:"p"},"VarChar")," you also have to inject another buffer that will be used for the output -line 33-. Note that Drill doesn't actually use the Java heap for data being processed in a query but instead keeps this data off the heap and manages the life-cycle for us without using the Java\ngarbage collector."),(0,l.kt)("p",null,"We are almost done since we have the proper class, the input/output object, we just need to implement the ",(0,l.kt)("inlineCode",{parentName:"p"},"eval()")," method itself, and use these objects."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"public void eval() {\n\n    // get the value and replace with\n    String maskValue = org.apache.drill.exec.expr.fn.impl.StringFunctionHelpers.getStringFromVarCharHolder(mask);\n    String stringValue = org.apache.drill.exec.expr.fn.impl.StringFunctionHelpers.toStringFromUTF8(input.start, input.end, input.buffer);\n\n    int numberOfCharToReplace = Math.min(toReplace.value, stringValue.length());\n\n    // build the mask substring\n    String maskSubString = com.google.common.base.Strings.repeat(maskValue, numberOfCharToReplace);\n    String outputValue = (new StringBuilder(maskSubString)).append(stringValue.substring(numberOfCharToReplace)).toString();\n\n    // put the output value in the out buffer\n    out.buffer = buffer;\n    out.start = 0;\n    out.end = outputValue.getBytes().length;\n    buffer.setBytes(0, outputValue.getBytes());\n}\n")),(0,l.kt)("p",null,"The code is quite simple:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Get the mask itself - line 4"),(0,l.kt)("li",{parentName:"ul"},"Get the value - line 5"),(0,l.kt)("li",{parentName:"ul"},"Get the number of character to replace - line 7"),(0,l.kt)("li",{parentName:"ul"},"Generate a new string with masked values - lines 10/11"),(0,l.kt)("li",{parentName:"ul"},"Create and populate the output buffer - lines 14 to 17")),(0,l.kt)("p",null,"This code does, however, look a bit strange to somebody used to reading Java code. This strangeness arises because the final code that is executed in a query will actually be generated on the fly. This allows Drill to leverage Java's just-in-time (JIT) compiler for maximum speed. To make this work, you have to respect some basic rules:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Do not use imports, but instead use the fully qualified class name"),", this is what is done on line 10 with the ",(0,l.kt)("inlineCode",{parentName:"li"},"Strings")," class. (coming from the Google Guava API packaged in Apache Drill)"),(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"ValueHolders")," classes, in our case ",(0,l.kt)("inlineCode",{parentName:"li"},"VarCharHolder")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"IntHolder")," should be manipulated like structs, so you must call helper methods, for example ",(0,l.kt)("inlineCode",{parentName:"li"},"getStringFromVarCharHolder")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"toStringFromUTF8"),". Calling methods like ",(0,l.kt)("inlineCode",{parentName:"li"},"toString")," will result in very bad problems.")),(0,l.kt)("p",null,"Starting in Apache Drill 1.3.x, it is mandatory to specify the package name of your function in the ",(0,l.kt)("inlineCode",{parentName:"p"},"./resources/drill-module.conf")," file as follow:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"drill {\n  classpath.scanning {\n    packages : ${?drill.classpath.scanning.packages} [\n      org.apache.drill.contrib.function\n    ]\n  }\n}\n")),(0,l.kt)("p",null,"We are now ready to deploy and test this new function."),(0,l.kt)("h3",{id:"package"},"Package"),(0,l.kt)("p",null,"Once again since, Drill will generate source, ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"you must prepare your package in a way that classes and sources of the function are present in the classpath")),". This is different from the way that Java code is normally packaged but is necessary for Drill to be able to do the necessary code generation. Drill uses the compiled code to access the annotations and uses the source code to do code generation."),(0,l.kt)("p",null,"An easy way to do that is to use maven to build your project, and, in particular, use the ",(0,l.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-source-plugin/"},"maven-source-plugin")," like this in your ",(0,l.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<plugin>\n    <groupId>org.apache.maven.plugins</groupId>\n    <artifactId>maven-source-plugin</artifactId>\n    <version>2.4</version>\n    <executions>\n        <execution>\n            <id>attach-sources</id>\n            <phase>package</phase>\n            <goals>\n                <goal>jar-no-fork</goal>\n            </goals>\n        </execution>\n    </executions>\n</plugin>\n")),(0,l.kt)("p",null,"Now, when you build using ",(0,l.kt)("inlineCode",{parentName:"p"},"mvn package"),", Maven will generate 2 jars:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The default jar with the classes and resources (",(0,l.kt)("em",{parentName:"li"},"drill-simple-mask-1.0.jar"),")"),(0,l.kt)("li",{parentName:"ul"},"A second jar with the sources (",(0,l.kt)("em",{parentName:"li"},"drill-simple-mask-1.0-sources.jar"),")")),(0,l.kt)("p",null,"Finally you must add a ",(0,l.kt)("inlineCode",{parentName:"p"},"drill-module.conf")," file in the resources folder of your project, to tell Drill that your jar contains a custom function. If you have no specific configuration to set for your function you can keep this file empty."),(0,l.kt)("p",null,"We are all set, you can now package and deploy the new function, just package and copy the Jars into the Drill 3rd party folder; $DRILL_HOME/jars/3rdparty , where $DRILL_HOME being your Drill installation folder."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"mvn clean package\n\ncp target/*.jar  $DRILL_HOME/jars/3rdparty\n\n")),(0,l.kt)("p",null,"Restart drill."),(0,l.kt)("h3",{id:"run-"},"Run !"),(0,l.kt)("p",null,"You should now be able to use your function in your queries:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"SELECT MASK(first_name, '*' , 3) FIRST , MASK(last_name, '#', 7) LAST  FROM cp.`employee.json` LIMIT 5;\n+----------+------------+\n|  FIRST   |    LAST    |\n+----------+------------+\n| ***ri    | ######     |\n| ***rick  | #######    |\n| ***hael  | ######     |\n| ***a     | #######ez  |\n| ***erta  | #######    |\n+----------+------------+\n")),(0,l.kt)("h2",{id:"conclusion"},"Conclusion"),(0,l.kt)("p",null,"In this simple project you have learned how to write, deploy and use a custom Apache Drill Function. You can now extend this to create your own function."),(0,l.kt)("p",null,"One important thing to remember when extending Apache Drill (using a custom function, storage plugin or format), is that Drill runtime is generating dynamically lot of code. This means you may have to use a very specific pattern when writing and deploying your extensions. With our basic function this meant we had to:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"deploy ",(0,l.kt)("strong",{parentName:"li"},"classes AND sources")),(0,l.kt)("li",{parentName:"ul"},"use ",(0,l.kt)("strong",{parentName:"li"},"fully Qualified Class Names")),(0,l.kt)("li",{parentName:"ul"},"use value holder classes and helper methods to manipulate parameters"),(0,l.kt)("li",{parentName:"ul"})))}d.isMDXComponent=!0}}]);