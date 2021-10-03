---
title: "Getting started with Apache Flink and Kafka"

categories: kafka flink streaming how-to
---


## Introduction

[Apache Flink](https://flink.apache.org/) is an open source platform for distributed stream and batch data processing. Flink is a streaming data flow engine with several APIs to create data streams oriented application.

It is very common for Flink applications to use [Apache Kafka](http://kafka.apache.org/) for data input and output. This article will guide you into  the steps to use Apache Flink with Kafka.

![]( center /images/posts/flink-kafka/flink-kafka.png Flink-Kafka )


<!-- truncate -->

### Prerequisites

* Apache Kafka 0.9.x
* Git
* Maven 3.x or later


## Create your Flink Streaming Project

The first step is to create an Java application, the easiest is to use the flink-quickstart-java archetype, that contains the core dependencies and packaging tasks. This article is similar with the [Apache Flink Quick Start Example](https://ci.apache.org/projects/flink/flink-docs-release-1.1/quickstart/run_example_quickstart.html), with a clear focus on data input and output with MapR Streams. 

In this application we will create two jobs:

* `WriteToKafka` : that generates random string and post them to a MapR Streams Topic using the Kafka Flink Connector and its Producer API.
* `ReadFromKafka` : that reads the same topic and print the messages in the standard output using the Kafka Flink Connector and its Consumer. API.

The full project is available on GitHub:

* [Flink and Kakfa Application](https://github.com/tgrall/kafka-flink-101)


Let’s create the project using Apache Maven:

``` bash
mvn archetype:generate \
      -DarchetypeGroupId=org.apache.flink\
      -DarchetypeArtifactId=flink-quickstart-java \
      -DarchetypeVersion=1.1.2 \
      -DgroupId=com.grallandco.demos \
      -DartifactId=kafka-flink-101 \
      -Dversion=1.0-SNAPSHOT \
      -DinteractiveMode=false 

```

Maven will create the following structure:

``` bash
tree kafka-flink-101/
kafka-flink-101/
├── pom.xml
└── src
    └── main
        ├── java
        │   └── com
        │       └── grallandco
        │           └── demos
        │               ├── BatchJob.java
        │               ├── SocketTextStreamWordCount.java
        │               ├── StreamingJob.java
        │               └── WordCount.java
        └── resources
            └── log4j.properties

7 directories, 6 files
```   

This project is configured to create a Jar file that contains your flink project code and also includes all dependencies needed to run it.

The project contains some other sample jobs, we do not need them for this article, you can either keep them to educational purposes or simply remove them from the project.

## Add Kafka Connector

Open the `pom.xml` and add the following dependencies to your project:
	
As a first step, we have to add the Flink Kafka connector as a dependency so that we can use the Kafka sink. Add this to the pom.xml file in the dependencies section:

You must add now the Flink Kafka Connector dependency to use the Kafka sink. Add the following entry in the `<dependencies>` element:

```
 <dependency>
      <groupId>org.apache.flink</groupId>
      <artifactId>flink-connector-kafka-0.9_2.10</artifactId>
      <version>${flink.version}</version>
 </dependency>
```

The Flink project is now ready to use the DataStream using the Kafka Connector so you can send and receive messages from Apache Kafka.


## Install and Start Kafka

Download Kafka, enter the following commands in your terminal:


``` bash
curl -O http://www.us.apache.org/dist/kafka/0.9.0.0/kafka_2.11-0.9.0.0.tgz
tar -xzf kafka_2.11-0.9.0.0.tgz
cd kafka_2.11-0.9.0.0
```

Kafka uses ZooKeeper, if you do not have Zookeeper running, you can start it using the following command:

```bash
./bin/zookeeper-server-start.sh config/zookeeper.properties
```

Start a Kafka broker by running the following command in a new terminal:

``` bash
./bin/kafka-server-start.sh config/server.properties
```

In another terminal, run the following command to create a Kafka topic called `flink-demo`:

``` bash
./bin/kafka-topics.sh --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic flink-demo

```

Use the Kafka tools to post and consume messages to the `flink-demo` topic.

Producer

```bash
./bin/kafka-console-producer.sh --broker-list localhost:9092 --topic flink-demo
```

Consumer

```bash
./bin/kafka-console-consumer.sh --zookeeper localhost:2181 --topic flink-demo --from-beginning
```


In the producer window, you can post some messages and see them in the consumer windows. We will use these tools to follow the interactions between Kafka and Flink.


## Write your Flink application

Let’s now use the Flink Kafka Connector to send messages to Kafka and consume them.

### Producer

The producer generates messages using the `SimpleStringGenerator()` class and send the string to the `flink-demo` topic.

```
  public static void main(String[] args) throws Exception {
    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

    Properties properties = new Properties();
    properties.setProperty("bootstrap.servers", “localhost:9092"); 

    DataStream<String> stream = env.addSource(new SimpleStringGenerator());
    stream.addSink(new FlinkKafkaProducer09<>("flink-demo", new SimpleStringSchema(), properties));

    env.execute();
  }
    
```

The `SimpleStringGenerator()` method code is available [here](https://github.com/tgrall/kafka-flink-101/blob/master/src/main/java/com/grallandco/demos/WriteToKafka.java#L45-L60).


The main steps are:

* create a new `StreamExecutionEnvironment` the basis of any Flink application
* create a new `DataStream` in the application environment, the `SimpleStringGenerator` class implements the [SourceFunction](https://ci.apache.org/projects/flink/flink-docs-release-1.1/api/java/) the base interface for all streams data sources in Flink.
* add the `FlinkKafkaProducer09` sink to the topic. 


### Consumer

The consumer simply reads the messages from the `flink-demo` topic, and print them into the console.

```
  public static void main(String[] args) throws Exception {
    // create execution environment
    StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();

    Properties properties = new Properties();
    properties.setProperty("bootstrap.servers", “localhost:9092");
    properties.setProperty("group.id", "flink_consumer");

    DataStream<String> stream = env.addSource(new FlinkKafkaConsumer09<>(
    	"flink-demo", new SimpleStringSchema(), properties) );

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
* create a set of properties with the consumer information, in this application we can only set the consumer `group.id`. 
* use the `FlinkKafkaConsumer09` to get the message from the topic `flink-demo`


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

In this article you have learned how to use Flink with kafka to write and read data streams.

Learn about what Apache Flink can do and how it maintains consistency and provides flexibility in the "[Introduction to Apache Flink](https://www.mapr.com/introduction-to-apache-flink)" ebook.