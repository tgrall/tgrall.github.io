---
title: "Simple caching service with Redis"
tags: [nosql, redis, microservices]
---


![](/images/posts/simple-caching-with-redis/001-ws-caching.png)


One of the most common use cases for Redis is to use it the database as a caching layer for your data, but Redis can do a lot more *(I will publish new articles later)*!

In this article, you will learn using a straightforward service, how to cache the result on some REST API calls to accelerate the data access, and also reduce the number of calls to external services.

For this example, I am using the "Redis Movie Database" application, a microservice-based application that I created to showcase and explain various features of Redis and Redis Enterprise. 

<!--truncate-->


You can see the caching service in action in this video:

<iframe width="675" height="380" src="https://www.youtube.com/embed/2X6hmXGbLbg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### Architecture Overview

The application uses a third party API provided by the "[OMDb API](http://www.omdbapi.com/)" to retrieve the ratings of the movie using its IMDb identifier. The frontend application call the `/caching/rating/` service to get the rating information from OMDB.


This service is doing the following:

1. Check if the rating data is already cached retrieve from the cache
2. If the information is not cached, the system calls the OMDB API with the proper key and Movie ID
3. The result is cached in Redis with a time to live of 120 seconds
4. The ratings are returned to the client.


**Prerequisites**

* Redis 5.x or later.
* Java 8 or later
* Apache Maven 3.6
* Git

### Implementation

In the microservice demonstration project, you can find the caching service in the project below:

* [Caching Service](https://github.com/tgrall/redis-microservices-demo/tree/master/caching-service)


The Spring Boot application exposes a REST endpoint [RestStatusController.java](https://github.com/tgrall/redis-microservices-demo/blob/master/caching-service/src/main/java/io/redis/demos/services/caching/RestStatusController.java) with the following key features:

* `/api/1.0/caching/configuration/omdb_api` : to save the OMDb API key in Redis.
* `/api/1.0/caching/ratings/{id}` : to retrieve the IMDB Rating information.

#### Data Structure

The Caching Service is pretty simple and using two sets of keys:

* `ms:config`: is a Redis Hash that will be used to store all global configuration; for the caching service, the entry `OMDB_API_KEY` will contain the OMDb API key.
* `ms:cache:ws:*` : one entry for each movie viewed by a user, where the IMDb movie id replaces the `*`. The hash contains the ratings, and each of the Movie Rating sites is a key in the hash ("Internet Movie Database",  "Rotten Tomatoes", "Metacritic"), and the value is the rating itself.


#### Code

The implementation of the caching layer is simple and located in the class below:

* [`WebServiceCachingService`](https://github.com/tgrall/redis-microservices-demo/blob/master/caching-service/src/main/java/io/redis/demos/services/caching/service/WebServiceCachingService.java)

**Getting the Redis Connection**

In this project, I have not used Redis/Spring integration *by choice*, I am only using Spring injection and Spring Boot Web features.

* the `afterConstruct()` method creates the JedisPool from the Spring Configuration
* then each time a connection is needed, the application calls `Jedis jedis = jedisPool.getResource()` to get a connection from the pool.


#### Setting & Getting the OMDb API Key

As you have seen earlier, the OMDb API Key is stored in a hash associated with the Redis key `ms:config`.

* The method `saveOMDBAPIKey` is used to store the configuring with a  `hset` call.

```java
    jedis = jedisPool.getResource();
    jedis.hset(KEY_CONFIG, OMDB_API_KEY, key);
    omdbAPIKEY = key;
```

* line 1: get the connection from the pool
* line 2: set the key in the hash *(as you can see the application uses static variables (`KEY_CONFIG` and `OMDB_API_KEY`)
* line 3: the key received as a method parameter is set to a class member `omdbAPIKEY` to avoid calling the hash each time.


#### Calling OMDb API and Caching (or not) the result

The method `getRatings` receives two parameters:

* `imdbId` the IMDb id
* `withCache` a boolean value to use or not Redis. The goal here is to show as a demonstration of the benefits of using Redis.


Let's now look at the code:

```java
 String restCallKey = KEY_PREFIX + imdbId;

        try (Jedis jedis = jedisPool.getResource()) {

            // Look in the map to see if the value has been cached
            if (withCache) {
                returnValue = jedis.hgetAll(restCallKey);
            }

            if (returnValue.isEmpty()) {
                returnValue.put("imdb_id", imdbId);
                CloseableHttpClient httpClient = HttpClientBuilder.create().build();
                HttpGet getRequest = new HttpGet(url);
                getRequest.addHeader("accept", "application/json");
                ResponseHandler<String> responseHandler = new BasicResponseHandler();

                String WsCall = httpClient.execute(getRequest, responseHandler);

                Map<String, Object> map = jsonMapper.readValue(WsCall, Map.class);
                List<Map<String, String>> ratings = (List<Map<String, String>>) map.get("Ratings");

                Map<String, String> ratingAsMap = new HashMap<>();
                for (Map<String, String> it : ratings) {
                    ratingAsMap.put(it.get("Source"), it.get("Value"));
                }

                returnValue.putAll(ratingAsMap);

                jedis.hset(restCallKey, returnValue);
                jedis.expire(restCallKey, TTL);
            }

        } catch(HttpResponseException e){
            // Small hack to keep it simple
            returnValue.put("Metacritic", "<p style='color:red'>Error: OMDBAPI Key is invalid -- see services page</p>");
            omdbAPIKEY = null;

        } catch (IOException e) {
            e.printStackTrace();
        }
    } else {
        // Small hack to keep it simple
        returnValue.put("Metacritic", "<p style='color:red'>Error: OMDBAPI Key is not set, please configure it -- see services page</p>");
    }
    long end = System.currentTimeMillis();
    returnValue.put("elapsedTimeMs", Long.toString(end - start) );
    return returnValue;
```

So if you look in the code carefully you see that only a few lines are related to the cache itself:
* Line 1, the key is created from a prefix and the IMDb identifier.
* Line 3, the application retrieves a connection from the Jedis Pool.
* Line 7, if the cache is enabled,  the connection to get the value from Redis `returnValue = jedis.hgetAll(restCallKey)`
* If a value is present in the cache, the value is returned to the caller
* If `returnValue` is empty,  the OMDB REST service must be called (lines 11 to 25)
* The result of the Web service call is stored in the `returnValue` variable, and save into Redis with a time to live (TTL) of 120 seconds (Line 27 to 29)
* Finally, the value is returned to the caller (Line 47).

Quite simple, no?

It is possible to optimize a little bit the application/code with few additions:

* Make the TTL configurable by adding a new entry in the `ms:config` cache
* Use [pipelining](https://redis.io/topics/pipelining) to reduce the round trip time (RTT)



### Running the application

In the project, the service connects to a `local` instance of Redis on port `6379`. If you want to use a different instance or configure a password/user, you have to edit the `/redis-microservices-demo/caching-service/application.properties`.

#### Cloning and Building

```shell
> git clone https://github.com/tgrall/redis-microservices-demo.git

> cd redis-microservices-demo/caching-service

> mvn clean package

```

#### Running the application

The application is a Spring Boot application, run the following command to start it:

```shell
> mvn spring-boot:run
```

Then you should save your [OMDB API key](https://www.patreon.com/join/omdb) in Redis using the following call:

```shell
> curl -X POST http://localhost:8084/api/1.0/caching/configuration/omdb_api\?key\=[YOUR_KEY]
```


Now you can call the service itself to retrieve the ratings of the movie "WarGames"

```shell
> curl -X GET http://localhost:8084/api/1.0/caching/ratings/tt0086567
```

Call it multiple times, and you will see that the first call is *slow" (100ms or more). Then subsequent requests will be a lot faster, as the data are coming out of Redis. After tow minutes, the data is removed from the cache automatically (expiration), and the OMDB service will be called again.

You can also force the service to no use the cache using the following call:

```shell
> curl -X GET http://localhost:8084/api/1.0/caching/ratings/tt0086567?cache=0
```


### Conclusion

The pattern used here is called "Cache-Aside"; and usually pretty easy to implement. It is interesting to notice that many libraries such as Spring provide built-in features to implement such caches.

That said, this is not a silver bullet, you still have to look at the following points when you are implementing such caching service:

* Loading the cache: in the example, the cache is populated when the service is called. This lazy loading approach is excellent since the cache is only filled with data that are used by the application. However, the first call is paying the price of higher latency, so on your application, you may require to load the data at startup to avoid any hit miss.
* Cache Invalidation and Lifetime: When caching data, it is essential to look at the invalidation strategy, when and how I can update the data in the cache, but also how long the data will stay in the cache. In the example above, each data will remain for two minutes. 

So now you are all set to implement a simple cache and have consistent fast access to your application data, independently of the backend.

