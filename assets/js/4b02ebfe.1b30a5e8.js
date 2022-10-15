"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[69292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={title:"Installing Memcached on Mac OS X and using it in Java",categories:"java memcached osx"},l=void 0,i={permalink:"/blog/2011/11/20/installing-memcached-on-mac-os-x-and-using-it-in-java",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2011-11-20-installing-memcached-on-mac-os-x-and-using-it-in-java.md",source:"@site/blog/2011-11-20-installing-memcached-on-mac-os-x-and-using-it-in-java.md",title:"Installing Memcached on Mac OS X and using it in Java",description:"Introduction",date:"2011-11-20T00:00:00.000Z",formattedDate:"November 20, 2011",tags:[],readingTime:5.68,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Installing Memcached on Mac OS X and using it in Java",categories:"java memcached osx"},prevItem:{title:"How to watch YouTube videos offline (on OS X)?",permalink:"/blog/2011/12/05/how-to-watch-youtube-videos-offline-on-os-x"},nextItem:{title:"JAX-RS: Jersey and JSON single element arrays",permalink:"/blog/2011/09/02/jax-rs-jersey-and-json-single-element-arrays"}},c={authorsImageUrls:[]},s=[{value:"Introduction",id:"introduction",level:3},{value:"Installation and Configuration",id:"installation-and-configuration",level:3},{value:"Simple Java Application with Memcached",id:"simple-java-application-with-memcached",level:3}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this article I will explain how you can:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install and Configure Memcached on Mac OS X"),(0,o.kt)("li",{parentName:"ol"},"Use Memcached in your Java Application")),(0,o.kt)("p",null,"I won't go in too much detail about the benefits of using a distributed cache in your applications, but let's at least provide some use cases for applications that are running in the context of an enterprise portal, eXo Platform in my case - ",(0,o.kt)("em",{parentName:"p"},"surprising isn't?")," And I will show this in another post."),(0,o.kt)("p",null,"We have many reasons to use a cache (distributed or not), in the context of enterprise portal, let's take a look to some of these reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A portal is used to aggregate data in a single page. These data could come from different sources : Web Services, Database, ERP, ..... and accessing the data in real time could be costly. So it will be quite interesting to cache the result of the call when possible."),(0,o.kt)("li",{parentName:"ul"},"If the portal is used to aggregate many data from many sources, it is sometime necessary to jump into another application to continue some operation. A distributed and shared cache could be used to manage some context between different applications running in different processes (JVM or even technologies)\nThese are two example where a shared cache could be interesting for your portal based applications, we can find many other reason.")),(0,o.kt)("p",null,"Note that the Portlet API (JSR-286) contains already a cache mechanism that cache the HTML fragment, and that eXo Platform also provide a ",(0,o.kt)("a",{parentName:"p",href:"http://docs.jboss.org/exojcr/1.14.0-CR4/developer/en-US/html/ch-cache.html"},"low level cache"),", based on ",(0,o.kt)("a",{parentName:"p",href:"http://www.jboss.org/jbosscache"},"JBoss Cache"),"."),(0,o.kt)("h3",{id:"installation-and-configuration"},"Installation and Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Installing Memcached from sources")),(0,o.kt)("p",null,"You can find some information about Memcached installation on the Memcached ",(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/p/memcached/wiki/NewStart"},"Wiki"),". The following steps are the steps that I have used on my environment."),(0,o.kt)("p",null,'As far as I know, Memached is not available as package for Mac OS X. I am still on Snow Leopard (10.6.8), and I have installed XCode and all development tools. I have use the article "Installing memcached 1.4.1 on Mac OS X 10.6 Snow Leopard" from ',(0,o.kt)("a",{parentName:"p",href:"https://wincent.com/wiki/Installing_memcached_1.4.1_on_Mac_OS_X_10.6_Snow_Leopard"},"wincent.com"),". For simplicity reason I have duplicate the content and updated to the latest releases."),(0,o.kt)("p",null,"1- Create a working directory :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir memcachedbuild\n$ cd memcachebuild\n")),(0,o.kt)("p",null,"2- Install ",(0,o.kt)("a",{parentName:"p",href:"http://libevent.org/"},"libevent")," that is mandatory for memcached"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -O http://www.monkey.org/~provos/libevent-1.4.14-stable.tar.gz\n$ tar xzvf libevent-1.4.14-stable.tar.gz\n$ cd libevent-1.4.14-stable\n$ ./configure\n$ make\n$ make verify\n$ sudo make install&nbsp;\n")),(0,o.kt)("p",null,"3- Install memcached"),(0,o.kt)("p",null,"Go back to your install directory (",(0,o.kt)("em",{parentName:"p"},"memcachedbuild"),")"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ curl -O http://memcached.googlecode.com/files/memcached-1.4.10.tar.gz\n$ tar xzvf memcached-1.4.10.tar.gz\n$ cd memcached-1.4.10\n$ ./configure\n$ make\n$ make test\n$ sudo make install\n")),(0,o.kt)("p",null,"You are now ready to use memcached that is available at ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/memcached"),"."),(0,o.kt)("p",null,"This allows you to avoid changing to the pre-installed memcached located in /usr/bin, if you want to replace it instead of having you own install, just run the configure command with the following parameter: ",(0,o.kt)("inlineCode",{parentName:"p"},"./configure --prefix=/usr")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Starting and testing Memcached")),(0,o.kt)("p",null,"Start the memcached server, using the following command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ /usr/local/bin/memcached -d -p 11211\n")),(0,o.kt)("p",null,"This command starts the memcached server as demon (-d parameter), on the TCP port 11211 (this is the default value). You can find more about the memcached command using ",(0,o.kt)("inlineCode",{parentName:"p"},"man memcached"),"."),(0,o.kt)("p",null,"It is possible to connect and test your server using a telnet connection. Once connected you can set and get object in the cache, take a look to the following paragraph."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ telnet 127.0.0.1 11211\nTrying 127.0.0.1...\nConnected to tgrall-server.\nEscape character is '^]'.\nset KEY 0 600 16\nThis is my value\nSTORED\nget KEY\nVALUE KEY 0 16\nThis is my value\nEND\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," command allows you to put a new value in the cache using the following syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"set <key>  <flags> <expiration_time>  <number_of_bytes> [noreply] \\n\\n\n\n<value>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"key : the key used to store the data in the cache"),(0,o.kt)("li",{parentName:"ul"},"flags : a 32 bits unsigned integer that memcached stored with the data"),(0,o.kt)("li",{parentName:"ul"},"expiration_time : expiration time in seconds, if you put 0 this means no delay"),(0,o.kt)("li",{parentName:"ul"},"number_if_bytes : number of bytes in the data block"),(0,o.kt)("li",{parentName:"ul"},"noreply : option to tell the server to not return any value"),(0,o.kt)("li",{parentName:"ul"},"value : the value to store and associate to the key.")),(0,o.kt)("p",null,"This is a short view of the documentation located in your source directory ",(0,o.kt)("inlineCode",{parentName:"p"},"/memcachedbuild/memcached-1.4.10/doc/protocol.txt"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," command allows you to access the value that is associated with the key."),(0,o.kt)("p",null,"You can check the version of memcahed you are running by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"stats")," command in your telnet session."),(0,o.kt)("p",null,"Your memcached server is up and running, you can now start to use it inside your applications."),(0,o.kt)("h3",{id:"simple-java-application-with-memcached"},"Simple Java Application with Memcached"),(0,o.kt)("p",null,"The easiest way to use memcached from your Java applications is to use a client library. You can find many ",(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/p/memcached/wiki/Clients#Java"},"client libraries"),". In this example I am using ",(0,o.kt)("a",{parentName:"p",href:"http://code.google.com/p/spymemcached/"},"spymemcached")," developped by the people from ",(0,o.kt)("a",{parentName:"p",href:"http://www.couchbase.com/"},"Couchbase"),"."),(0,o.kt)("p",null,"1- Adding SpyMemcached to your Maven project"),(0,o.kt)("p",null,"Add the repository to you pom.xml (or you setting.xml)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<repository>\n  <id>spy</id>\n  <name>Spy Repository</name>\n  <layout>default</layout>\n  <url>http://files.couchbase.com/maven2/</url>\n</repository>\n")),(0,o.kt)("p",null,"then the dependency to your pom.xml"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupid>spy</groupid>\n  <artifactid>spymemcached</artifactid>\n  <version>2.7.3</version>\n</dependency>\n")),(0,o.kt)("p",null,"2- Use SpyMemcache client in your application"),(0,o.kt)("p",null,"The following code is a simple Java class that allows you to enter the key and the value and set it in the cache."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package com.grallandco.blog;\n\nimport java.io.BufferedReader;\nimport java.io.IOException;\nimport java.io.Console;\nimport java.io.InputStreamReader;\nimport java.util.Date;\nimport java.util.logging.Level;\nimport java.util.logging.Logger;\nimport net.spy.memcached.AddrUtil;\nimport net.spy.memcached.MemcachedClient;\n\npublic class Test {\n\n  public static void main(String[] args) {\n    try {\n\n      System.out.print("Enter the new key : ");\n      BufferedReader reader = new BufferedReader( new InputStreamReader(System.in));\n      String key = null;\n      key = reader.readLine();\n\n      System.out.print("Enter the new value : ");\n      String value = null;\n      value = reader.readLine();\n\n      MemcachedClient cache = new MemcachedClient(AddrUtil.getAddresses("127.0.0.1:11211"));\n\n      // read the object from memory\n      System.out.println("Get Object before set :"+ cache.get(key)  );\n\n      // set a new object\n      cache.set(key, 0, value );\n\n      System.out.println("Get Object after set :"+ cache.get(key)  );\n\n\n    } catch (IOException ex) {\n      Logger.getLogger(Test.class.getName()).log(Level.SEVERE, null, ex);\n      System.exit(0);\n    }\n\n\n    System.exit(0);\n\n  }\n}\n\n')),(0,o.kt)("p",null,"So when executing the application you will see something like :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Enter the new key : CITY\nEnter the new value : Paris, France\n2011-11-16 15:22:09.928 INFO net.spy.memcached.MemcachedConnection:  Added {QA sa=/127.0.0.1:11211, #Rops=0, #Wops=0, #iq=0, topRop=null, topWop=null, toWrite=0, interested=0} to connect queue\n2011-11-16 15:22:09.932 INFO net.spy.memcached.MemcachedConnection:  Connection state changed for sun.nio.ch.SelectionKeyImpl@5b40c281\nGet Object before set :null\nGet Object after set :Paris, France\n\n")),(0,o.kt)("p",null,"You can also access the object from a Telnet session:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"get CITY\nVALUE CITY 0 13\nParis, France\nEND\n")),(0,o.kt)("p",null,"You can use any Java class in your application, the only thing to do is to make this class serializable."),(0,o.kt)("p",null,"This is it for the first post about memcached and Java,","\xa0"," I am currently working on a small example integrating Web Services call, Portlets and memcached."))}p.isMDXComponent=!0}}]);