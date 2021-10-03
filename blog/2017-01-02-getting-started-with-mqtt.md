---
title: "Getting Started with MQTT and Java"

categories: iot java mqtt streaming
---

MQTT (MQ Telemetry Transport) is a lightweight publish/subscribe messaging protocol.
MQTT is used a lot in the Internet of Things applications, since it has been designed to
run on remote locations with system with small footprint.

The MQTT 3.1 is an OASIS standard, and you can find all the information at http://mqtt.org/

This article will guide you into the various steps to run your first MQTT application:

1. Install and Start a MQTT Broker
2. Write an application that publishes messages
3. Write an application that consumes messages

The source code of the sample application is available on [GitHub](https://github.com/tgrall/mqtt-sample-java).

<!-- truncate -->

#### Prerequisites

* Apache Maven 3.x
* Git

### Install and Start a MQTT Broker

You can find many MQTT Brokers, for this example I will use one of the most common broker [Mosquitto](https://mosquitto.org).

You can download and install from the [binary package](https://mosquitto.org/download/). I have used [Homebrew](http://brew.sh/) to install it on my Mac:

```
$ brew install mosquitto
```

Start the MQTT Broker with the default configuration

```
$ /usr/local/sbin/mosquitto
```

### Publish and Consume messages

Open two terminal windows and run the following commands :

Consume

```
$ mosquitto_sub -h 127.0.0.1 -t iot_data
```

Publish

```
$ mosquitto_pub -h 127.0.0.1 -t iot_data -m "Hello world"
```

You should see the message `Hello world` in the consumer/subscriber window.

### Write your first MQTT Application

For this example I will write a small Java application, since it is the language
that I am using in my global project.

#### Maven Dependencies

Add the [Eclipse Paho](https://eclipse.org/paho/) dependency to your Maven project

```xml
<dependency>
  <groupId>org.eclipse.paho</groupId>
  <artifactId>org.eclipse.paho.client.mqttv3</artifactId>
  <version>1.1.0</version>
</dependency>

```

#### Publishing a Message

Publishing a message is quite easy, create a MqttClient and use it to post on a topic.

``` java
MqttClient client = new MqttClient("tcp://localhost:1883", MqttClient.generateClientId());
client.connect();
MqttMessage message = new MqttMessage();
message.setPayload("Hello world from Java".getBytes());
client.publish("iot_data", message);
client.disconnect();
```

You have many other options, configurations that you can use when posting a message
such as security, quality of service (QoS), and more; but in this post I want to simply
show how easy is to publish and consume MQTT messages.

#### Consuming messages

To consume messages you need to implement a `org.eclipse.paho.client.mqttv3.MqttCallback` that will receive the message and used this Callback class in the MqttClient of the Subscriber application.

The Callback class:

```java
public class SimpleMqttCallBack implements MqttCallback {

  public void connectionLost(Throwable throwable) {
    System.out.println("Connection to MQTT broker lost!");
  }

  public void messageArrived(String s, MqttMessage mqttMessage) throws Exception {
    System.out.println("Message received:\n\t"+ new String(mqttMessage.getPayload()) );
  }

  public void deliveryComplete(IMqttDeliveryToken iMqttDeliveryToken) {
    // not used in this example
  }
}
```

This Callback class is used in the Subscriber application as follow:

```java
MqttClient client=new MqttClient("tcp://localhost:1883", MqttClient.generateClientId());
client.setCallback( new SimpleMqttCallBack() );
client.connect();
```

Like for the publisher, I am using the broker and client without any option (QoS, security).

## Build and Run the Application

**1- Get the Sample Code**

Clone the project from GitHub

```
$ git clone https://github.com/tgrall/mqtt-sample-java.git
```


**2- Build the project with Apache Maven:**

This project is a simple Java application that runs a publisher and subscriber using the [Eclipse Paho library](https://eclipse.org/paho/).


```
$ mvn clean package
```

For convenience, the example programs project is set up so that the maven package target produces a single executable,
`/mqtt-sample `, that includes all of the example programs and dependencies.


**3- Run the Subscriber**

The subscriber will receive and print all messages published on the `iot_data` topic.

```
$ ./target/mqtt-sample subscriber
```

**4- Run the Publisher**

Run the publisher with the following command, the second parameter is the message to publish

```
$ ./target/mqtt-sample publisher "My first MQTT message..."
```

## Conclusion

In this article you have learned how to:

* Install and start a MQTT Broker, Mosquitto
* Create a publisher and subscriber developed in Java

This article is very simple by choice, to quickly run your first MQTT Application. I wrote this article as part of a global IoT project I am working on that will capture devices data, publish them into MapR Converged Data Platform using MQTT and MapR Streams; this is why I used Java for the application. You can use any MQTT client library to build the publishers and subscribers.
