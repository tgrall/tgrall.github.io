(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[47692],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(d,l(l({ref:t},u),{},{components:n})):a.createElement(d,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38431:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return u},toc:function(){return c},default:function(){return h}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=["components"],o={title:"Getting Started with MQTT and Java",categories:"iot java mqtt streaming"},s=void 0,p={permalink:"/blog/2017/01/02/getting-started-with-mqtt",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2017-01-02-getting-started-with-mqtt.md",source:"@site/blog/2017-01-02-getting-started-with-mqtt.md",title:"Getting Started with MQTT and Java",description:"MQTT (MQ Telemetry Transport) is a lightweight publish/subscribe messaging protocol.",date:"2017-01-02T00:00:00.000Z",formattedDate:"January 2, 2017",tags:[],readingTime:3.485,truncated:!0,authors:[],prevItem:{title:"Getting Started with Kafka REST Proxy for MapR Streams",permalink:"/blog/2017/01/20/getting-started-with-kafka-rest-proxy-for-mapr-streams"},nextItem:{title:"Getting started with Apache Flink and Mapr Streams",permalink:"/blog/2016/10/17/getting-started-with-apache-flink-and-mapr-streams"}},u={authorsImageUrls:[]},c=[{value:"Install and Start a MQTT Broker",id:"install-and-start-a-mqtt-broker",children:[]},{value:"Publish and Consume messages",id:"publish-and-consume-messages",children:[]},{value:"Write your first MQTT Application",id:"write-your-first-mqtt-application",children:[]},{value:"Build and Run the Application",id:"build-and-run-the-application",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MQTT (MQ Telemetry Transport) is a lightweight publish/subscribe messaging protocol.\nMQTT is used a lot in the Internet of Things applications, since it has been designed to\nrun on remote locations with system with small footprint."),(0,i.kt)("p",null,"The MQTT 3.1 is an OASIS standard, and you can find all the information at ",(0,i.kt)("a",{parentName:"p",href:"http://mqtt.org/"},"http://mqtt.org/")),(0,i.kt)("p",null,"This article will guide you into the various steps to run your first MQTT application:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install and Start a MQTT Broker"),(0,i.kt)("li",{parentName:"ol"},"Write an application that publishes messages"),(0,i.kt)("li",{parentName:"ol"},"Write an application that consumes messages")),(0,i.kt)("p",null,"The source code of the sample application is available on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tgrall/mqtt-sample-java"},"GitHub"),"."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Apache Maven 3.x"),(0,i.kt)("li",{parentName:"ul"},"Git")),(0,i.kt)("h3",{id:"install-and-start-a-mqtt-broker"},"Install and Start a MQTT Broker"),(0,i.kt)("p",null,"You can find many MQTT Brokers, for this example I will use one of the most common broker ",(0,i.kt)("a",{parentName:"p",href:"https://mosquitto.org"},"Mosquitto"),"."),(0,i.kt)("p",null,"You can download and install from the ",(0,i.kt)("a",{parentName:"p",href:"https://mosquitto.org/download/"},"binary package"),". I have used ",(0,i.kt)("a",{parentName:"p",href:"http://brew.sh/"},"Homebrew")," to install it on my Mac:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ brew install mosquitto\n")),(0,i.kt)("p",null,"Start the MQTT Broker with the default configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ /usr/local/sbin/mosquitto\n")),(0,i.kt)("h3",{id:"publish-and-consume-messages"},"Publish and Consume messages"),(0,i.kt)("p",null,"Open two terminal windows and run the following commands :"),(0,i.kt)("p",null,"Consume"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mosquitto_sub -h 127.0.0.1 -t iot_data\n")),(0,i.kt)("p",null,"Publish"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ mosquitto_pub -h 127.0.0.1 -t iot_data -m "Hello world"\n')),(0,i.kt)("p",null,"You should see the message ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello world")," in the consumer/subscriber window."),(0,i.kt)("h3",{id:"write-your-first-mqtt-application"},"Write your first MQTT Application"),(0,i.kt)("p",null,"For this example I will write a small Java application, since it is the language\nthat I am using in my global project."),(0,i.kt)("h4",{id:"maven-dependencies"},"Maven Dependencies"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("a",{parentName:"p",href:"https://eclipse.org/paho/"},"Eclipse Paho")," dependency to your Maven project"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.eclipse.paho</groupId>\n  <artifactId>org.eclipse.paho.client.mqttv3</artifactId>\n  <version>1.1.0</version>\n</dependency>\n\n")),(0,i.kt)("h4",{id:"publishing-a-message"},"Publishing a Message"),(0,i.kt)("p",null,"Publishing a message is quite easy, create a MqttClient and use it to post on a topic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'MqttClient client = new MqttClient("tcp://localhost:1883", MqttClient.generateClientId());\nclient.connect();\nMqttMessage message = new MqttMessage();\nmessage.setPayload("Hello world from Java".getBytes());\nclient.publish("iot_data", message);\nclient.disconnect();\n')),(0,i.kt)("p",null,"You have many other options, configurations that you can use when posting a message\nsuch as security, quality of service (QoS), and more; but in this post I want to simply\nshow how easy is to publish and consume MQTT messages."),(0,i.kt)("h4",{id:"consuming-messages"},"Consuming messages"),(0,i.kt)("p",null,"To consume messages you need to implement a ",(0,i.kt)("inlineCode",{parentName:"p"},"org.eclipse.paho.client.mqttv3.MqttCallback")," that will receive the message and used this Callback class in the MqttClient of the Subscriber application."),(0,i.kt)("p",null,"The Callback class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class SimpleMqttCallBack implements MqttCallback {\n\n  public void connectionLost(Throwable throwable) {\n    System.out.println("Connection to MQTT broker lost!");\n  }\n\n  public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {\n    System.out.println("Message received:\\n\\t"+ new String(mqttMessage.getPayload()) );\n  }\n\n  public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {\n    // not used in this example\n  }\n}\n')),(0,i.kt)("p",null,"This Callback class is used in the Subscriber application as follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'MqttClient client=new MqttClient("tcp://localhost:1883", MqttClient.generateClientId());\nclient.setCallback( new SimpleMqttCallBack() );\nclient.connect();\n')),(0,i.kt)("p",null,"Like for the publisher, I am using the broker and client without any option (QoS, security)."),(0,i.kt)("h2",{id:"build-and-run-the-application"},"Build and Run the Application"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1- Get the Sample Code")),(0,i.kt)("p",null,"Clone the project from GitHub"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git clone https://github.com/tgrall/mqtt-sample-java.git\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2- Build the project with Apache Maven:")),(0,i.kt)("p",null,"This project is a simple Java application that runs a publisher and subscriber using the ",(0,i.kt)("a",{parentName:"p",href:"https://eclipse.org/paho/"},"Eclipse Paho library"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ mvn clean package\n")),(0,i.kt)("p",null,"For convenience, the example programs project is set up so that the maven package target produces a single executable,\n",(0,i.kt)("inlineCode",{parentName:"p"},"/mqtt-sample "),", that includes all of the example programs and dependencies."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3- Run the Subscriber")),(0,i.kt)("p",null,"The subscriber will receive and print all messages published on the ",(0,i.kt)("inlineCode",{parentName:"p"},"iot_data")," topic."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./target/mqtt-sample subscriber\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4- Run the Publisher")),(0,i.kt)("p",null,"Run the publisher with the following command, the second parameter is the message to publish"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ./target/mqtt-sample publisher "My first MQTT message..."\n')),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article you have learned how to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Install and start a MQTT Broker, Mosquitto"),(0,i.kt)("li",{parentName:"ul"},"Create a publisher and subscriber developed in Java")),(0,i.kt)("p",null,"This article is very simple by choice, to quickly run your first MQTT Application. I wrote this article as part of a global IoT project I am working on that will capture devices data, publish them into MapR Converged Data Platform using MQTT and MapR Streams; this is why I used Java for the application. You can use any MQTT client library to build the publishers and subscribers."))}h.isMDXComponent=!0}}]);