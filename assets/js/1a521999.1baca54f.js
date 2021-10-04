(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[28199],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,m=k["".concat(p,".").concat(d)]||k[d]||u[d]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},12007:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],l={title:"Getting started with Apache Flink and Kafka",categories:"kafka flink streaming how-to"},p=void 0,s={permalink:"/blog/2016/10/12/getting-started-with-apache-flink-and-kafka",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2016-10-12-getting-started-with-apache-flink-and-kafka.md",source:"@site/blog/2016-10-12-getting-started-with-apache-flink-and-kafka.md",title:"Getting started with Apache Flink and Kafka",description:"Introduction",date:"2016-10-12T00:00:00.000Z",formattedDate:"October 12, 2016",tags:[],readingTime:4.805,truncated:!0,authors:[],prevItem:{title:"Getting started with Apache Flink and Mapr Streams",permalink:"/blog/2016/10/17/getting-started-with-apache-flink-and-mapr-streams"},nextItem:{title:"Streaming Analytics in a Digitally Industrialized World",permalink:"/blog/2016/09/26/streaming-analytics-in-a-digitally-industrialized-world"}},c={authorsImageUrls:[]},u=[{value:"Introduction",id:"introduction",children:[{value:"Prerequisites",id:"prerequisites",children:[]}]},{value:"Create your Flink Streaming Project",id:"create-your-flink-streaming-project",children:[]},{value:"Add Kafka Connector",id:"add-kafka-connector",children:[]},{value:"Install and Start Kafka",id:"install-and-start-kafka",children:[]},{value:"Write your Flink application",id:"write-your-flink-application",children:[{value:"Producer",id:"producer",children:[]},{value:"Consumer",id:"consumer",children:[]}]},{value:"Build and Run the application",id:"build-and-run-the-application",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],k={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://flink.apache.org/"},"Apache Flink")," is an open source platform for distributed stream and batch data processing. Flink is a streaming data flow engine with several APIs to create data streams oriented application."),(0,i.kt)("p",null,"It is very common for Flink applications to use ",(0,i.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Apache Kafka")," for data input and output. This article will guide you into  the steps to use Apache Flink with Kafka."),(0,i.kt)("p",null,"![]( center /images/posts/flink-kafka/flink-kafka.png Flink-Kafka )"),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apache Kafka 0.9.x"),(0,i.kt)("li",{parentName:"ul"},"Git"),(0,i.kt)("li",{parentName:"ul"},"Maven 3.x or later")),(0,i.kt)("h2",{id:"create-your-flink-streaming-project"},"Create your Flink Streaming Project"),(0,i.kt)("p",null,"The first step is to create an Java application, the easiest is to use the flink-quickstart-java archetype, that contains the core dependencies and packaging tasks. This article is similar with the ",(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.1/quickstart/run_example_quickstart.html"},"Apache Flink Quick Start Example"),", with a clear focus on data input and output with MapR Streams. "),(0,i.kt)("p",null,"In this application we will create two jobs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WriteToKafka")," : that generates random string and post them to a MapR Streams Topic using the Kafka Flink Connector and its Producer API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ReadFromKafka")," : that reads the same topic and print the messages in the standard output using the Kafka Flink Connector and its Consumer. API.")),(0,i.kt)("p",null,"The full project is available on GitHub:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgrall/kafka-flink-101"},"Flink and Kakfa Application"))),(0,i.kt)("p",null,"Let\u2019s create the project using Apache Maven:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn archetype:generate \\\n      -DarchetypeGroupId=org.apache.flink\\\n      -DarchetypeArtifactId=flink-quickstart-java \\\n      -DarchetypeVersion=1.1.2 \\\n      -DgroupId=com.grallandco.demos \\\n      -DartifactId=kafka-flink-101 \\\n      -Dversion=1.0-SNAPSHOT \\\n      -DinteractiveMode=false \n\n")),(0,i.kt)("p",null,"Maven will create the following structure:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tree kafka-flink-101/\nkafka-flink-101/\n\u251c\u2500\u2500 pom.xml\n\u2514\u2500\u2500 src\n    \u2514\u2500\u2500 main\n        \u251c\u2500\u2500 java\n        \u2502\xa0\xa0 \u2514\u2500\u2500 com\n        \u2502\xa0\xa0     \u2514\u2500\u2500 grallandco\n        \u2502\xa0\xa0         \u2514\u2500\u2500 demos\n        \u2502\xa0\xa0             \u251c\u2500\u2500 BatchJob.java\n        \u2502\xa0\xa0             \u251c\u2500\u2500 SocketTextStreamWordCount.java\n        \u2502\xa0\xa0             \u251c\u2500\u2500 StreamingJob.java\n        \u2502\xa0\xa0             \u2514\u2500\u2500 WordCount.java\n        \u2514\u2500\u2500 resources\n            \u2514\u2500\u2500 log4j.properties\n\n7 directories, 6 files\n")),(0,i.kt)("p",null,"This project is configured to create a Jar file that contains your flink project code and also includes all dependencies needed to run it."),(0,i.kt)("p",null,"The project contains some other sample jobs, we do not need them for this article, you can either keep them to educational purposes or simply remove them from the project."),(0,i.kt)("h2",{id:"add-kafka-connector"},"Add Kafka Connector"),(0,i.kt)("p",null,"Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"pom.xml")," and add the following dependencies to your project:"),(0,i.kt)("p",null,"As a first step, we have to add the Flink Kafka connector as a dependency so that we can use the Kafka sink. Add this to the pom.xml file in the dependencies section:"),(0,i.kt)("p",null,"You must add now the Flink Kafka Connector dependency to use the Kafka sink. Add the following entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<dependencies>")," element:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," <dependency>\n      <groupId>org.apache.flink</groupId>\n      <artifactId>flink-connector-kafka-0.9_2.10</artifactId>\n      <version>${flink.version}</version>\n </dependency>\n")),(0,i.kt)("p",null,"The Flink project is now ready to use the DataStream using the Kafka Connector so you can send and receive messages from Apache Kafka."),(0,i.kt)("h2",{id:"install-and-start-kafka"},"Install and Start Kafka"),(0,i.kt)("p",null,"Download Kafka, enter the following commands in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O http://www.us.apache.org/dist/kafka/0.9.0.0/kafka_2.11-0.9.0.0.tgz\ntar -xzf kafka_2.11-0.9.0.0.tgz\ncd kafka_2.11-0.9.0.0\n")),(0,i.kt)("p",null,"Kafka uses ZooKeeper, if you do not have Zookeeper running, you can start it using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/zookeeper-server-start.sh config/zookeeper.properties\n")),(0,i.kt)("p",null,"Start a Kafka broker by running the following command in a new terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/kafka-server-start.sh config/server.properties\n")),(0,i.kt)("p",null,"In another terminal, run the following command to create a Kafka topic called ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-demo"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic flink-demo\n\n")),(0,i.kt)("p",null,"Use the Kafka tools to post and consume messages to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-demo")," topic."),(0,i.kt)("p",null,"Producer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/kafka-console-producer.sh --broker-list localhost:9092 --topic flink-demo\n")),(0,i.kt)("p",null,"Consumer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic flink-demo --from-beginning\n")),(0,i.kt)("p",null,"In the producer window, you can post some messages and see them in the consumer windows. We will use these tools to follow the interactions between Kafka and Flink."),(0,i.kt)("h2",{id:"write-your-flink-application"},"Write your Flink application"),(0,i.kt)("p",null,"Let\u2019s now use the Flink Kafka Connector to send messages to Kafka and consume them."),(0,i.kt)("h3",{id:"producer"},"Producer"),(0,i.kt)("p",null,"The producer generates messages using the ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleStringGenerator()")," class and send the string to the ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-demo")," topic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  public static void main(String[] args) throws Exception {\n    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n\n    Properties properties = new Properties();\n    properties.setProperty("bootstrap.servers", \u201clocalhost:9092"); \n\n    DataStream<String> stream = env.addSource(new SimpleStringGenerator());\n    stream.addSink(new FlinkKafkaProducer09<>("flink-demo", new SimpleStringSchema(), properties));\n\n    env.execute();\n  }\n    \n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SimpleStringGenerator()")," method code is available ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tgrall/kafka-flink-101/blob/master/src/main/java/com/grallandco/demos/WriteToKafka.java#L45-L60"},"here"),"."),(0,i.kt)("p",null,"The main steps are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamExecutionEnvironment")," the basis of any Flink application"),(0,i.kt)("li",{parentName:"ul"},"create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"DataStream")," in the application environment, the ",(0,i.kt)("inlineCode",{parentName:"li"},"SimpleStringGenerator")," class implements the ",(0,i.kt)("a",{parentName:"li",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.1/api/java/"},"SourceFunction")," the base interface for all streams data sources in Flink."),(0,i.kt)("li",{parentName:"ul"},"add the ",(0,i.kt)("inlineCode",{parentName:"li"},"FlinkKafkaProducer09")," sink to the topic. ")),(0,i.kt)("h3",{id:"consumer"},"Consumer"),(0,i.kt)("p",null,"The consumer simply reads the messages from the ",(0,i.kt)("inlineCode",{parentName:"p"},"flink-demo")," topic, and print them into the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  public static void main(String[] args) throws Exception {\n    // create execution environment\n    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();\n\n    Properties properties = new Properties();\n    properties.setProperty("bootstrap.servers", \u201clocalhost:9092");\n    properties.setProperty("group.id", "flink_consumer");\n\n    DataStream<String> stream = env.addSource(new FlinkKafkaConsumer09<>(\n        "flink-demo", new SimpleStringSchema(), properties) );\n\n    stream.map(new MapFunction<String, String>() {\n      private static final long serialVersionUID = -6867736771747690202L;\n\n      @Override\n      public String map(String value) throws Exception {\n        return "Stream Value: " + value;\n      }\n    }).print();\n\n    env.execute();\n  }\n\n')),(0,i.kt)("p",null,"The main steps are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"StreamExecutionEnvironment")," the basis of any Flink application"),(0,i.kt)("li",{parentName:"ul"},"create a set of properties with the consumer information, in this application we can only set the consumer ",(0,i.kt)("inlineCode",{parentName:"li"},"group.id"),". "),(0,i.kt)("li",{parentName:"ul"},"use the ",(0,i.kt)("inlineCode",{parentName:"li"},"FlinkKafkaConsumer09")," to get the message from the topic ",(0,i.kt)("inlineCode",{parentName:"li"},"flink-demo"))),(0,i.kt)("h2",{id:"build-and-run-the-application"},"Build and Run the application"),(0,i.kt)("p",null,"Let\u2019s run the application directly from Maven (or from your favorite IDE)."),(0,i.kt)("p",null,"1- Build the project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mvn clean package\n")),(0,i.kt)("p",null,"2- Run the Flink Producer Job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mvn exec:java -Dexec.mainClass=com.mapr.demos.WriteToKafka\n")),(0,i.kt)("p",null,"3- Run the Flink Consumer Job"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mvn exec:java -Dexec.mainClass=com.mapr.demos.ReadFromKafka\n")),(0,i.kt)("p",null,"In the terminal, you should see the messages generated from the producer"),(0,i.kt)("p",null,"You can now deploy and execute this job on your Flink cluster."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article you have learned how to use Flink with kafka to write and read data streams."),(0,i.kt)("p",null,'Learn about what Apache Flink can do and how it maintains consistency and provides flexibility in the "',(0,i.kt)("a",{parentName:"p",href:"https://www.mapr.com/introduction-to-apache-flink"},"Introduction to Apache Flink"),'" ebook.'))}d.isMDXComponent=!0}}]);