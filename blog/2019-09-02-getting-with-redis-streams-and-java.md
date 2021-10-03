---
title: "Getting Started with Redis Streams and Java"
tags: [redis, nosql ,stream ,streaming ,java]
---

As you may have seen, I have joined [Redis Labs](https://www.redislabs.com) a month ago; one of the first task as a new hire is to learn more about Redis. So I learned, and I am still learning.

This is when I discovered [Redis Streams](https://redis.io/topics/streams-intro). I am a big fan of streaming-based applications so it is natural that I start with a small blog post explaining how to use Redis Streams and Java.

***What is Redis Streams?***

Redis Streams is a Redis Data Type, that represents a log so you can add new information/message in an append-only mode *(this is not 100% accurate since you can remove messages from the log)*. Using Redis Streams you can build "Kafka Like" applications, what I mean by that you can:

* create applications that publish and consume messages (nothing extraordinary here, you could already do that with Redis Pub/Sub)
* consume messages that are published even when your client application (consumer) is not running. This is a big difference with Redis Pub/Sub
* consume messages starting a specific offset, for example, read the whole history, or only new messages

In addition to this, Redis Streams has the concept of **Consumer Groups**. Redis Streams Consumer Groups, like Apache Kafka ones, allows the client applications to consume messages in a distributed fashion (multiple clients), providing an easy way to scale and create highly available systems.

![](/images/posts/getting-with-redis-streams-and-java/redis-streams-101-img-1.png )



Enroll in the [Redis University: Redis Streams](https://university.redislabs.com/courses/course-v1:redislabs+RU202+2019_03/about) to learn more and get certified.

***Sample Application***

The [redis-streams-101-java GitHub Repository](https://github.com/tgrall/redis-streams-101-java) contains sample code that shows how to

* post messages to a streams
* consume messages using a consumer group

<!-- truncate -->

#### Prerequisites

* Redis 5.x, you have here multiple options:
    * [Download](https://redis.io) and install Redis Community
    * Install and Run a Docker image: [Community](https://hub.docker.com/_/redis) or [Redis Enterprise](https://hub.docker.com/r/redislabs/redis) 
    * Create a online instance on [Redis Labs Cloud](https://redislabs.com/redis-enterprise/essentials/) (30mb for free)
* Java 8 or later
* Apache Maven 3.5.x
* Git


### Java & Redis Streams

Redis has many Java clients developed by the community, as you can see on the [Redis.io site](https://redis.io/clients#java).

It looks, based on my short experience with Redis so far, that the most complete one around Redis Streams support is [Lettuce](https://lettuce.io), this is the one I will be using in the following code.

####1- Adding Lettuce to Your Maven Project

Add the following dependency to your project file:

```xml
        <dependency>
            <groupId>io.lettuce</groupId>
            <artifactId>lettuce-core</artifactId>
            <version>5.1.8.RELEASE</version>
        </dependency>
```

####2- Connecting to Redis


Import the following classes

```java
import io.lettuce.core.*;
import io.lettuce.core.api.StatefulRedisConnection;
import io.lettuce.core.api.sync.RedisCommands;
```

Then connect with:

```java
RedisClient redisClient = RedisClient.create("redis://password@host:port"); // change to reflect your environment
StatefulRedisConnection<String, String> connection = redisClient.connect();
RedisCommands<String, String> syncCommands = connection.sync();
```

When your application is done with the connection you should disconnect with the following code:

```java
connection.close();
redisClient.shutdown();
```

####3- Sending Message to Streams

Once you have a connection you can send a message. In this example, I will let Redis generate the message ID, which is time-based, and the body will be built using a Map representing IoT data, for example, a weather data capturing Wind speed and direction in real-time.

```java
    public static void main(String[] args) {

        RedisClient redisClient = RedisClient.create("redis://localhost:6379"); // change to reflect your environment
        StatefulRedisConnection<String, String> connection = redisClient.connect();
        RedisCommands<String, String> syncCommands = connection.sync();

        Map<String, String> messageBody = new HashMap<>();
        messageBody.put( "speed", "15" );
        messageBody.put( "direction", "270" );
        messageBody.put( "sensor_ts", String.valueOf(System.currentTimeMillis()) );

        String messageId = syncCommands.xadd(
                "weather_sensor:wind",
                messageBody);

        System.out.println( String.format("Message %s : %s posted", messageId, messageBody) );

        connection.close();
        redisClient.shutdown();

    }

```

Let me explain the code:

* Lines 3-5 are used to connect to Redis
* Lines 7-10 are used to create the message body, using a Map, since Redis Streams messages are string key/values.
* Lines 12-14 call the `syncCommands.xadd()` method using the streams key "weather_sensor:wind" and the message body itself
   * this method returns the message ID.
* line 16 just print the message ID and content
* the lines 18-19 close the connection and client.

The complete producer code is available [here](https://github.com/tgrall/redis-streams-101-java/blob/master/src/main/java/com/kanibl/redis/streams/simple/RedisStreams101Producer.java).

####4- Consuming Messages

Redis Streams offers various way to consume/read messages using the commands: [XRANGE](https://redis.io/commands/xrange), [XREVRANGE](https://redis.io/commands/xrevrange), [XREAD](https://redis.io/commands/xread), [XREADGROUP](https://redis.io/commands/xreadgroup).

I want to keep the article short and close to the way you would build an application with Apache Kafka, this is why I will use the [XREADGROUP](https://redis.io/commands/xreadgroup) command from Lettuce.

The Consumer Groups allow developers to create a group of clients that will cooperate to consume messages from the streams (for scale and high availability); it is also a way to associate the client to specific applications roles; for example:

* a consumer group called "data warehouse" will consume messages and send them to a data warehouse
* another consumer group called "aggregator" will consume the messages and aggregate the data and send them to another sink (another stream or storage)

Each of this group will act independently, and each of this group could have multiple "consumers" (client).

Let's see how you use this in Java.


```java
...

        try {
            // WARNING: Streams must exist before creating the group
            //          This will not be necessary in Lettuce 5.2, see https://github.com/lettuce-io/lettuce-core/issues/898
            syncCommands.xgroupCreate( XReadArgs.StreamOffset.from("weather_sensor:wind", "0-0"), "application_1"  );
        }
        catch (RedisBusyException redisBusyException) {
            System.out.println( String.format("\t Group '%s already' exists","application_1"));
        }


        System.out.println("Waiting for new messages");

        while(true) {

            List<StreamMessage<String, String>> messages = syncCommands.xreadgroup(
                    Consumer.from("application_1", "consumer_1"),
                    XReadArgs.StreamOffset.lastConsumed("weather_sensor:wind")
            );

            if (!messages.isEmpty()) {
                for (StreamMessage<String, String> message : messages) {
                    System.out.println(message);
                    // Confirm that the message has been processed using XACK
                    syncCommands.xack(STREAMS_KEY, "application_1",  message.getId());
                }
            }


        }

...
```

This code is a subset of the `main()` method I have removed the connection management part, to add readability. Let's take a look to the code:

* line 3 to 10, using the method `xgroupCreate()`, that matches the [XGROUP CREATE](https://redis.io/commands/xgroup) command,
    * is used to create a new group called `application_1`,
    * consume messages from the stream `weather_sensor:wind` 
    * starting at the first message in the stream, this is indicated using the message ID `0-0`. *Note that it is also possible to indicate to the group to start to read at a specific message ID, or only the new messages that arrive after the creating of the consumer group using `$` special ID (or the helper method `XReadArgs.StreamOffset.latest()`*.
* line 15 to 30, in this example we use an infinite loop (`while(true)`) to wait for any new messages published to the streams
* line 17 to 20, the method `xreadgroup()` returns the messages based on the group configuration
    * line 18 define the consumer named `consumer_1` that is associated with the group `application_1`: you can create new group do distribute the read to multiple clients
    * line 19 indicates where to start, in this case, `StreamOffset.lastConsumed("weather_sensor:wind")` the consumer will consume messages that have not been read already. With the current configuration of the group (offset `0-0`), when the consumer will start for the first time, it will read all the existing messages.
* line 22 to 28, the application iterates on each messages, and:
    * line 24, process the message, a simple print in this case
    * line 26, sends a acknowledgment using `xack()` command. You have to use the ack command to confirm that a message has been read and processed. The [`XACK`](https://redis.io/commands/xack) command removes the message from the pending list of the consumer group.

The complete consumer code is available [here](https://github.com/tgrall/redis-streams-101-java/blob/master/src/main/java/com/kanibl/redis/streams/simple/RedisStreams101Consumer.java).

### Build & Run the Simple Java Application

Now that you have a better understanding of the code, let's run the producer and consumer. You can run this from your IDE, or using Maven.

Let's do it using Maven CLI, for this open 2 terminals:

* one to produce messages
* one to consume them


*1- Clone and Build the project*


```bash
> git clone https://github.com/tgrall/redis-streams-101-java.git

> cd redis-streams-101-java

> mvn clean verify
```

*2- Post a new message*

```bash

> mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer"

```

*3- Consume messages*

Open a new terminal and run the following command:

```bash

> mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Consumer"

```

The consumer will start and consume the message you just posted, and wait for any new messages.


*4- In the first terminal post 100 new messages*

```bash

> mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer" -Dexec.args="100"

```

The consumer will receive and print all the messages.

*5- Kill the consumer and post more messages*

Let's now do another test, stop the consumer using a simple `ctrl+C`.

Then post 5 new messages.

```bash

> mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Producer" -Dexec.args="5"

```

The messages are not yet consumed by any application, but still store in Redis Streams.

So when you start the consumer, it will consumes these new messages.

```bash

> mvn exec:java -Dexec.mainClass="com.kanibl.redis.streams.simple.RedisStreams101Consumer"

```

This is a one of the differences between [Redis Streams](https://redis.io/topics/streams-intro) and [Redis PubSub](https://redis.io/topics/pubsub). The producer application has publish many messages while the consumer application was not running. Since the consumer is ran with `StreamOffset.lastConsumed()`, when the consumer is starting, it looks to the last consumed ID, and start to read the streams from there. This method generate a XGROUPREAD command with the group


### Conclusion

In this small project, you have learned, how to use Lettuce, a Java client for Redis to:

* publish messages to a stream
* create a consumer group
* consume messages using the consumer group.

This is a very basic example, and in a next post I will show you how to work with multiple consumers, and to configure the Consumer Group and Consumers to control which messages you want to read

More to come!