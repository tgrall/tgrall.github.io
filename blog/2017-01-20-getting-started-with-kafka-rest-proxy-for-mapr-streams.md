---
title: "Getting Started with Kafka REST Proxy for MapR Streams"

categories: mapr streams kafka rest streaming
---


## Introduction

MapR Ecosystem Package 2.0 (MEP) is coming with some new features related to MapR Streams:

* [Kafka REST Proxy for MapR Streams](http://maprdocs.mapr.com/home/Kafka/kafkaREST.html) provides a RESTful interface to MapR Streams and Kafka clusters to consume and product messages and to perform administrative operations.
* [Kafka Connect for MapR Streams](http://maprdocs.mapr.com/home/Kafka/kafkaConnect.html) is a utility for streaming data between MapR Streams and Apache Kafka and other storage systems.

MapR Ecosystem Packs (MEPs) are a way to deliver ecosystem upgrades decoupled from core upgrades - allowing you to upgrade your tooling independently of your Converged Data Platform. You can lean more about MEP 2.0 in [this article](https://www.mapr.com/blog/announcing-mapr-ecosystem-pack-mep-20).

In this blog we describe how to use the REST Proxy to publish and consume messages to/from MapR Streams. The REST Proxy is a great addition to the MapR Converged Data Platform allowing any programming language to use MapR Streams.

The Kafka REST Proxy provided with the MapR Streams tools, can be used with MapR Streams (default), but also used in a hybrid mode with Apache Kafka. In this article we will focus on MapR Streams.
<!-- truncate -->

## Prerequisites

* MapR Converged Data Platform 5.2 with MEP 2.0
  * with MapR Streams Tools
* curl, wget or any HTTP/REST Client tool


## Create the MapR Streams and Topic

A stream is a collection of topics that you can manage as a group by:

1. Setting security policies that apply to all topics in that stream
2. Setting a default number of partitions for each new topic that is created in the stream
3. Set a time-to-live for messages in every topic in the stream

You can find more information about MapR Streams concepts in the [documentation](http://maprdocs.mapr.com/home/MapR_Streams/mapr_streams.html).

On your Mapr Cluster or Sandbox, run the following commands:

```
$ maprcli stream create -path /apps/iot-stream -produceperm p -consumeperm p -topicperm p

$ maprcli stream topic create -path /apps/iot-stream -topic sensor-json -partitions 3

$ maprcli stream topic create -path /apps/iot-stream -topic sensor-binary -partitions 3
```

## Start Kafka Console Producers and Consumers

Open two terminal windows and run the consumer Kafka utilities using the following commands:

#### Consumer

* Topic sensor-json

```
$ /opt/mapr/kafka/kafka-0.9.0/bin/kafka-console-consumer.sh --new-consumer --bootstrap-server this.will.be.ignored:9092 --topic /apps/iot-stream:sensor-json
```
* Topic sensor-binary

```
$ /opt/mapr/kafka/kafka-0.9.0/bin/kafka-console-consumer.sh --new-consumer --bootstrap-server this.will.be.ignored:9092 --topic /apps/iot-stream:sensor-binary
```

This two terminal windows will allow you to see the messages posted on the different topics

## Using Kafka REST Proxy

### Inspect Topic Metadata

The endpoint `/topics/[topic_name]` allows you to get some informations about the topic. In MapR Streams, topics are part of a *stream* identified by a path;
to use the topic using the REST API you have to use the full path, and encode it in the URL; for example:

* `/apps/iot-stream:sensor-json` will be encoded with `%2Fapps%2Fiot-stream%3Asensor-json`

Run the following command, to get information about the `sensor-json` topic

```
$ curl -X GET  http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-json
```

Note: For simplicity reason I am running the command from the node where the Kafka REST proxy is running, so it is possible to use `localhost`.

You can print JSON in a pretty way, by adding a Python command such as :

```
$ curl -X GET  http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-json | python -m json.tool
```

**Default Stream**

As mentioned above, the Stream path is part of the topic name you have to use in the command;
however it is possible to configure the MapR Kafka REST Proxy to use a default stream.
For this you should add the following property in the `/opt/mapr/kafka-rest/kafka-rest-2.0.1/config/kafka-rest.properties` file:

* `streams.default.stream=/apps/iot-stream`

 When you change the Kafka REST proxy configuration, you must restart the service using maprcli or MCS.

 The main reason to use the `streams.default.stream` properties is to simplify the URLs used by the application for example
 * with `streams.default.stream` you can use `curl -X GET  http://localhost:8082/topics/`
 * without this configuration, or if you want to use a specific stream you must specify it in the URL `http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-json`

 In this article, all the URLs contains the encoded stream name, like that you can start using the Kafka REST proxy without changind the configuration and also use it with different streams.

### Publishing Messages

The Kafka REST Proxy for MapR Streams allows application to publish messages to MapR Streams. Messages could be send as JSON or Binary content (base64 encoding).


####To send a JSON Message:

* the query should be a HTTP `POST`
* the Content-Type should be : `application/vnd.kafka.json.v1+json`
* the Body:

```JSON
{
  "records":
  [
    {
      "value":
      {
        "temp" : 10 ,
        "speed" : 40 ,
        "direction" : "NW"
        }  
      }
  ]
}
```
The complete request is:

```
curl -X POST -H "Content-Type: application/vnd.kafka.json.v1+json" \
  --data '{"records":[{"value": {"temp" : 10 , "speed" : 40 , "direction" : "NW"}  }]}' \
  http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-json
```

You should see the message printed in the terminal window where the `/apps/iot-stream:sensor-json` consumer is running.


####To send a binary Message:

* the query should be a HTTP `POST`
* the Content-Type should be : `application/vnd.kafka.binary.v1+json`
* the Body:

```JSON
{
  "records":
  [
    {
      "value":"SGVsbG8gV29ybGQ="
    }
  ]
}
```

Note that `SGVsbG8gV29ybGQ=` is the string "Hello World" encoded in Base64.

The complete request is:

```
curl -X POST -H "Content-Type: application/vnd.kafka.binary.v1+json" \
  --data '{"records":[{"value":"SGVsbG8gV29ybGQ="}]}' \
  http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-binary
```

You should see the message printed in the terminal window where the `/apps/iot-stream:sensor-binary` consumer is running.

####Sending multiple messages

The `records` field of the HTTP Body allows you to send multiple messages for example you can send:

```
curl -X POST -H "Content-Type: application/vnd.kafka.json.v1+json" \
  --data '{"records":[{"value": {"temp" : 12 , "speed" : 42 , "direction" : "NW"}  }, {"value": {"temp" : 10 , "speed" : 37 , "direction" : "N"}  } ]}' \
  http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-json
```

This command will send 2 messages, and increment the offset by 2. You can do the same
with binary content, just add new element in the JSON array; for example:

```
curl -X POST -H "Content-Type: application/vnd.kafka.binary.v1+json" \
  --data '{"records":[{"value":"SGVsbG8gV29ybGQ="}, {"value":"Qm9uam91cg=="}]}' \
  http://localhost:8082/topics/%2Fapps%2Fiot-stream%3Asensor-binary
```

As you probably know, it is possible to set a key to a message to be sure that all the messages
with the same key will arrive in the same partition. For this, add the `key` attribute to the message as follow:

```JSON
{
  "records":
  [
    {
      "key": "K001",
      "value":
      {
        "temp" : 10 ,
        "speed" : 40 ,
        "direction" : "NW"
        }  
      }
  ]
}
```

Now that you know how to post messages to MapR Stream topics usinf the REST Proxy, let's see how to consume the messages.

### Consuming Messages

The REST proxy can also be used to consume messages from topics; for this you need to:

1. Create a consumer instance.
2. Use this URL returned by the first call to read message.
3. Delete the consumer instanced if needed.

#### Creating the consumer instance

The following request creates the consumer instance:

```
curl -X POST -H "Content-Type: application/vnd.kafka.v1+json" \
      --data '{"name": "iot_json_consumer", "format": "json", "auto.offset.reset": "earliest"}' \
      http://localhost:8082/consumers/%2Fapps%2Fiot-stream%3Asensor-json
```

The response from the server looks like:

``` json
{
  "instance_id":"iot_json_consumer",
  "base_uri":"http://localhost:8082/consumers/%2Fapps%2Fiot-stream%3Asensor-json/instances/iot_json_consumer"
}
```

Note that we have used the `/consumers/[topic_name]` to create the consumer.

The `base_uri` will be used by the subsequent requests to get the messages from the topic. Like any MapR Streams/Kafka consumer the `auto.offset.reset` defines its behavior. In this example the value is set to `earliest`, this means that the consumer will read the messages from the beginning. You can find more information about the consumer configuration in the [MapR Streams documentation](http://maprdocs.mapr.com/home/MapR_Streams/configuration_parameters_for_consumers.html).


#### Consuming the messages

To consume the messages, just add the Mapr Streams topic to the URL of the consumer isntance.

The following request consumes the messages from the topic:

```
curl -X GET -H "Accept: application/vnd.kafka.json.v1+json" \
http://localhost:8082/consumers/%2Fapps%2Fiot-stream%3Asensor-json/instances/iot_json_consumer/topics/%2Fapps%2Fiot-stream%3Asensor-json
```

This call returns the messages in a JSON document:

```json
[
  {"key":null,"value":{"temp":10,"speed":40,"direction":"NW"},"topic":"/apps/iot-stream:sensor-json","partition":1,"offset":1},
  {"key":null,"value":{"temp":12,"speed":42,"direction":"NW"},"topic":"/apps/iot-stream:sensor-json","partition":1,"offset":2},
  {"key":null,"value":{"temp":10,"speed":37,"direction":"N"},"topic":"/apps/iot-stream:sensor-json","partition":1,"offset":3}
]
```

Each call to the API returns the new messages published, based on the offset of the last call.

Note that the Consumer will be destroyed:

* after some idle time set by the `consumer.instance.timeout.ms` (default value set to 300000ms / 5 minutes)
* where it is destroyed using a REST API call (see below).


### Consuming binary format messages

The approach is the same if you need to consume binary messages, you need to change the format and accept header.

Call this URL to create a consumer instance for the binary topic:

```
curl -X POST -H "Content-Type: application/vnd.kafka.v1+json" \
      --data '{"name": "iot_binary_consumer", "format": "binary", "auto.offset.reset": "earliest"}' \
      http://localhost:8082/consumers/%2Fapps%2Fiot-stream%3Asensor-binary
```

Then consume messages, the accept header is set to `application/vnd.kafka.binary.v1+json`:

```
curl -X GET -H "Accept: application/vnd.kafka.binary.v1+json" \
http://localhost:8082/consumers/%2Fapps%2Fiot-stream%3Asensor-binary/instances/iot_binary_consumer/topics/%2Fapps%2Fiot-stream%3Asensor-binary

```

This call returns the messages in a JSON document, and the value is encoded in Base64

```json
[
  {"key":null,"value":"SGVsbG8gV29ybGQ=","topic":"/apps/iot-stream:sensor-binary","partition":1,"offset":1},
  {"key":null,"value":"Qm9uam91cg==","topic":"/apps/iot-stream:sensor-binary","partition":1,"offset":2}
]
```

### Delete consumer instances

As mentioned before the consumer will be destroyed automatically based on the `consumer.instance.timeout.ms` configuration of the REST Proxy;
it is also possible to destroyed the instance using the consumer instance URI and an HTTP DELETE call, as follow:

```
curl -X DELETE http://localhost:8082/consumers/%2Fapps%2Fiot-stream%3Asensor-binary/instances/iot_binary_consumer
```


## Conclusion

In this article you have learned how to use the Kafka REST Proxy for MapR Streams that allow any application to
use messages published in the MapR Converged Data Platform.

You can find more information about the Kafka REST Proxy in the [MapR documentation](http://maprdocs.mapr.com/home/Kafka/REST-proxy.html) and the following resources:

* [Getting Started with MapR Streams](https://www.mapr.com/blog/getting-started-sample-programs-mapr-streams)
* ["Streaming Architecture: New Designs Using Apache Kafka and MapR Streams" ebook by Ted Dunning and Ellen Friedman](https://www.mapr.com/streaming-architecture-using-apache-kafka-mapr-streams)



