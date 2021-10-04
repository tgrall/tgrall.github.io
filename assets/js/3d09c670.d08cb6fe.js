(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[54200],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},33763:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l=["components"],i={title:"Administer and Monitor OC4J using JConsole",tags:["oc4j","jmx"]},c=void 0,s={permalink:"/blog/2005/09/16/administer-and-monitor-oc4j-using-jconsole",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2005-09-16-administer-and-monitor-oc4j-using-jconsole.md",source:"@site/blog/2005-09-16-administer-and-monitor-oc4j-using-jconsole.md",title:"Administer and Monitor OC4J using JConsole",description:"OC4J 10g",date:"2005-09-16T00:00:00.000Z",formattedDate:"September 16, 2005",tags:[{label:"oc4j",permalink:"/blog/tags/oc-4-j"},{label:"jmx",permalink:"/blog/tags/jmx"}],readingTime:1.16,truncated:!1,authors:[],prevItem:{title:"Oracle Open World: Sunday",permalink:"/blog/2005/09/18/oracle-open-world-sunday"},nextItem:{title:"Beta Version of Zend Core for Oracle available",permalink:"/blog/2005/09/02/beta-version-of-zend-core-for-oracle-available"}},p={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"OC4J 10",(0,a.kt)("em",{parentName:"p"},"g"),"\n(10.1.3) is a J2EE 1.4 containers, so as part of the specifications, it\nsupports JMX for management and deployment. One of the benefits of JMX\nis the fact that finally Java applications, and in our case the J2EE\ncontainers, have a standard based interface to be administered. OC4J\nexposes using its MBean Server system and application lever management\nbeans (MBeans) that you can monitor and control from the Oracle\nApplication Server Control (ASC) that is pre-deployed; but you can use\nany JMX client application. Sun has included as part of Java 5 JMX but\nalso provides a standard JMX client called JConsole. This post is\nsimply explaining how you can use the Sun's JConsole with OC4J."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Set the environment:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ORACLE_HOME to the OC4J home\n\n$JAVA_HOME your JDK home\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Start the OC4J with the following property set")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$JAVA_HOME/bin/java -Dcom.sun.management.jmxremote -jar oc4j.jar\n\n")),(0,a.kt)("p",null,"The -Dcom.sun.management.jmxremote system property creates an RMI\nconnector to the MBeanServer, we will use this RMI connector from the\nconsole iself."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Start the JConsole, with the\nfollowing command, adding the OC4J administration class to the\nclasspath.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$JAVA_HOME/bin/jconsole -J-Djava.class.path=$JAVA_HOME/lib/jconsole.jar:$JAVA_HOME/lib/tools.jar;$ORACLE_HOME/lib/adminclient.jar\n\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"The console will\nautomatically ask you to connect to the OC4J process and you can start\nto monitor and administer your OC4J instance")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://farm1.static.flickr.com/139/388744041_9cbbb6734f_o.png",alt:null})),(0,a.kt)("p",null,"Connection to the OC4J MBean Server"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://farm1.static.flickr.com/148/388744045_1bb6e9c149_o.png",alt:null})),(0,a.kt)("p",null,"Java 5 JConsole browsing the OC4J MBeans"))}f.isMDXComponent=!0}}]);