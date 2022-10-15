---
title: "Getting started with Apache Flink and Mapr Streams"

categories: streaming flink mapr
---

## Introduction

[Apache Flink](https://flink.apache.org/) is an open source platform for distributed stream and batch data processing. Flink is a streaming data flow engine with several APIs to create data streams oriented application.

It is very common for Flink applications to use [Apache Kafka](http://kafka.apache.org/) for data input and output.

This article will guide you into  the steps to use Apache Flink with [MapR Streams](https://www.mapr.com/products/mapr-streams). MapR Streams is a distributed messaging system for streaming event data at scale, and it’s integrated into the [MapR Converged Data Platform](https://www.mapr.com/products/mapr-converged-data-platform), based on the Apache Kafka API (0.9.0), 
this article use the same code and approach than the [Flink and Kafka Getting Started](http://tgrall.github.io/blog/2016/10/12/getting-started-with-apache-flink-and-kafka/).

![MapR Streams and Flink](http://tgrall.github.io/images/posts/flink-kafka/flink-mapr-streams.png).

<!-- truncate -->

### Prerequisites

* MapR 5.2
  * You can use [MapR Converged Data Platform Sandbox](https://www.mapr.com/products/mapr-sandbox-hadoop)
* MapR Client installed on your development host
  *  [Installation and Configuration steps](http://maprdocs.mapr.com/home/AdvancedInstallation/SettingUptheClient-install-mapr-client.html)
* Git
* Maven 3.x or later




## Create your Flink Streaming Project

The first step is to create an Java application, the easiest is to use the flink-quickstart-java archetype, that contains the core dependencies and packaging tasks. This article is similar with the [Apache Flink Quick Start Example](https://ci.apache.org/projects/flink/flink-docs-release-1.1/quickstart/run_example_quickstart.html), with a clear focus on data input and output with MapR Streams. 

In this application we will create two jobs:

* `WriteToKafka` : that generates random string and post them to a MapR Streams Topic using the Kafka Flink Connector and its Producer API.
* `ReadFromKafka` : that reads the same topic and print the messages in the standard output using the Kafka Flink Connector and its Consumer. API.

The full project is available on GitHub:

* [MapR Streams Flink Demo](https://github.com/mapr-demos/mapr-streams-flink-demo)



Let’s create the project using Apache Maven:

```
mvn archetype:generate \
      -DarchetypeGroupId=org.apache.flink\
      -DarchetypeArtifactId=flink-quickstart-java \
      -DarchetypeVersion=1.1.2 \
      -DgroupId=com.mapr.demos \
      -DartifactId=mapr-streams-flink-demo \
      -Dversion=1.0-SNAPSHOT \
      -DinteractiveMode=false 

```

Maven will create the following structure:

```
$ tree mapr-streams-flink-demo/
mapr-streams-flink-demo/
├── pom.xml
└── src
    └── main
        ├── java
        │   └── com
        │       └── mapr
        │           └── demos
        │               ├── BatchJob.java
        │               ├── SocketTextStreamWordCount.java
        │               ├── StreamingJob.java
        │               └── WordCount.java
        └── resources
            └── log4j.properties
```   

This project is configured to create a Jar file that contains your flink project code and also includes all dependencies needed to run it.

The project contains some other sample jobs, we do not need them for this article, you can either keep them to educational purposes or simply remove them from the project.

## Add Kafka & MapR Streams Dependencies

Open the `pom.xml` and add the following dependencies to your project:

**1- Add MapR Maven Repository**

In the `<repositories>` element add :

```
   <repository>
     <id>mapr-releases</id>
     <url>http://repository.mapr.com/maven/</url>
     <snapshots><enabled>false</enabled></snapshots>
     <releases><enabled>true</enabled></releases>
   </repository>
```

**2- Add MapR Streams libraries**

In the `<dependencies>` element:

```
 <dependency>
   <groupId>com.mapr.streams</groupId>
   <artifactId>mapr-streams</artifactId>
   <version>5.2.0-mapr</version>
 </dependency>
 <dependency>
   <groupId>org.apache.kafka</groupId>
   <artifactId>kafka-clients</artifactId>
   <version>0.9.0.0-mapr-1602</version>
 </dependency>
```


**3- Add Flink Kafka Connector libraries**
	
As a first step, we have to add the Flink Kafka connector as a dependency so that we can use the Kafka sink. Add this to the pom.xml file in the dependencies section:

You must add now the Flink Kafka Connector dependency to use the Kafka sink. Add the following entry in the `<dependencies>` element:

```
 <dependency>
      <groupId>org.apache.flink</groupId>
      <artifactId>flink-connector-kafka-0.9_2.10</artifactId>
      <version>${flink.version}</version>
 </dependency>
```

**4- Exclude Kafka Client to allow use of MapR Streams Client**

As you may know, MapR Streams uses the Kafka 0.9.0 API to produce and consume messages. So we need now to remove (exclude) tha Apache Kafka Client API to be sure that Flink use MapR Streams.

In the Flink Kafka Connector dependency add the following exclusion:

```
  <dependency>
    <groupId>org.apache.flink</groupId>
    <artifactId>flink-connector-kafka-0.9_2.10</artifactId>
    <version>${flink.version}</version>
      <exclusions>
        <exclusion>
          <groupId>org.apache.kafka</groupId>
          <artifactId>kafka-clients</artifactId>
        </exclusion>
        <exclusion>
          <groupId>org.apache.kafka</groupId>
          <artifactId>kafka_2.10</artifactId>
        </exclusion>
      </exclusions>
  </dependency>
```

The Flink project is now ready to use the DataStream using the Kafka Connector so you can send and receive messages from MapR Streams.

Let’s now create a Stream in MapR and write some simple Flink code to use it.

## Create the MapR Streams and Topic

A stream is a collection of topics that you can manage as a group by:

1. Setting security policies that apply to all topics in that stream
2. Setting a default number of partitions for each new topic that is created in the stream
3. Set a time-to-live for messages in every topic in the stream

You can find more information about MapR Streams concepts in the [documentation](http://maprdocs.mapr.com/51/MapR_Streams/concepts.html).

On your Mapr Cluster or Sandbox run the following commands: 

```
$ maprcli stream create -path /apps/application-stream -produceperm p -consumeperm p -topicperm p
$ maprcli stream topic create -path /apps/application-stream -topic flink-demo 
```


### Install and use MapR Kafka utilities

Install `the mapr-kafka` package on your cluster :

```
yum install mapr-kafka
```

Open two terminal windows and run the producer and consumer kafka utilities using the following commands:

Producer

```
/opt/mapr/kafka/kafka-0.9.0/bin/kafka-console-producer.sh --broker-list this.will.be.ignored:9092 --topic /apps/application-stream:flink-demo
```

Consumer

```
/opt/mapr/kafka/kafka-0.9.0/bin/kafka-console-consumer.sh --new-consumer --bootstrap-server this.will.be.ignored:9092 --topic /apps/application-stream:flink-demo
```

In the producer window, you can post some messages and see them in the consumer windows. We will use these tools to follow the interactions between MapR Streams and Flink.


## Write your Flink application

Let’s now use the Flink Kafka Connector to send messages to MapR Streams and consume them.

### Producer

The producer generates messages using the `SimpleStringGenerator()` class and send the string to the `/apps/application-stream:flink-demo` topic.

```
  public static void main(String[] args) throws Exception {
    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

    Properties properties = new Properties();
    // properties.setProperty("bootstrap.servers", "<kafka-broker>:9092"); // not used by MapR Streams
    properties.setProperty("streams.buffer.max.time.ms", "200");

    DataStream<String> stream = env.addSource(new SimpleStringGenerator());
    stream.addSink(new FlinkKafkaProducer09<>("/apps/application-stream:flink-demo", new SimpleStringSchema(), properties));

    env.execute();
  }
    
```

The `SimpleStringGenerator()` method code is available [here](https://github.com/mapr-demos/mapr-streams-flink-demo/blob/master/src/main/java/com/mapr/demos/WriteToKafka.java#L46-L61).


The main steps are:

* create a new `StreamExecutionEnvironment` the basis of any Flink application
* create a new `DataStream` in the application environment, the `SimpleStringGenerator` class implements the `[SourceFunction](https://ci.apache.org/projects/flink/flink-docs-release-1.1/api/java/)` the base interface for all streams data sources in Flink.
* add the `FlinkKafkaProducer09` sink to the streams; since MapR Streams is based on Kafka API 0.9, it is possible to use the FlinkKafkaProducer09 class; with 2 small differences:
	* the broker list (first parameter) is not used since MapR Streams use the cluster location defined in the `/opt/mapr/conf/mapr-clusters.conf` class.
	* the topic name include the path and name of the MapR Stream stream in which the topic is located for example `/apps/application-stream:flink-demo`

### Consumer

The consumer simply reads the messages from the `/apps/application-stream:flink-demo` topic, and print them into the console.

```
  public static void main(String[] args) throws Exception {
    // create execution environment
    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

    Properties properties = new Properties();
    // properties.setProperty("bootstrap.servers", "<kafka-broker>:9092"); // not used by MapR Streams
    properties.setProperty("group.id", "flink_consumer");

    DataStream<String> stream = env.addSource(new FlinkKafkaConsumer09<>(
    	"/apps/application-stream:flink-demo", new SimpleStringSchema(), properties) );

    stream.map(new MapFunction<String, String>() {
      private static final long serialVersionUID = -6867736771747690202L;

      @Override
      public String map(String value) throws Exception {
        return "Stream Value: " + value;
      }
    }).print();

    env.execute();
  }
  ```
  
The main steps are:

* create a new `StreamExecutionEnvironment` the basis of any Flink application
* create a set of properties with the consumer information, in this application we can only set the consumer `group.id`. Note that the `bootstrap.servers` property is not used by MapR Streams, so no need to set it.
* use the `FlinkKafkaConsumer09` to get the message from the MapR Streams topic `/apps/application-stream:flink-demo`



## Build and Run the application

Let’s run the application directly from Maven (or from your favorite IDE).

1- Build the project:

```
$ mvn clean package
```

2- Run the Flink Producer Job

```
$ mvn exec:java -Dexec.mainClass=com.mapr.demos.WriteToKafka
```

3- Run the Flink Consumer Job

```
$ mvn exec:java -Dexec.mainClass=com.mapr.demos.ReadFromKafka
```

In the terminal, you should see the messages generated from the producer


You can now deploy and execute this job on your Flink cluster.

## Conclusion

In this article you have learned how to use Flink with MapR Streams to write and read data streams. The key element is the configuration of the Maven Dependencies to configure the project to use MapR Streams libraries instead of Kafka ones.

This was originally published on the [MapR blog here](https://www.mapr.com/blog/getting-started-apache-flink-and-mapr-streams).

Learn about what Apache Flink can do and how it maintains consistency and provides flexibility in the "[Introduction to Apache Flink](https://www.mapr.com/introduction-to-apache-flink)" ebook.