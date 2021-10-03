---
title: "Couchbase : Create a large dataset using Twitter and Java"

tags: [couchbase, nosql, java, twitter]
---
import Gist from 'react-gist';

An easy way to create large dataset when playing/demonstrating Couchbase -or any other NoSQL engine- is to inject Twitter feed into your database.

For this small application I am using:

* [Couchbase Server 2.0 Server](http://www.couchbase.com/downloads-all#couchbase-server-2-0)
* [Couchbase Java SDK](http://www.couchbase.com/develop/java/next) (will be installed by Maven)
* [Twitter4J](http://twitter4j.org/) (will be installed by Maven)
* [Twitter Streaming API](https://dev.twitter.com/docs/streaming-apis) called using Twitter4J

In this example I am using Java to inject Tweets into Couchbase, you can obviously use another langage if you want to.

The sources of this project are available on my Github repository [ Twitter Injector for Couchbase](https://github.com/tgrall/couchbase-twitter-injector) you can also download the Binary version [here](https://github.com/downloads/tgrall/couchbase-twitter-injector/CouchbaseTwitterInjector.jar), and execute the application from the command line, see [Run The Application paragraph](http://www.blogger.com/blogger.g?blogID=785895453418216075#runTheApp). Do not forget to create your Twitter oAuth keys (see next paragraph)

#### Create oAuth Keys

The first thing to do to be able to use the Twitter API is to create a set of keys. If you want to learn more about all these keys/tokens take a look to the oAuth protocol : [http://oauth.net/](http://oauth.net/)


1- Log in into the Twitter Development Portal : [https://dev.twitter.com/](https://dev.twitter.com/)


2- Create a new Application

Click on the "Create an App" link or go into the "User Menu &gt; My Applications &gt; Create a new application"

3- Enter the Application Details information

![]( http://4.bp.blogspot.com/-zxOaF_YLaO0/UJhoZOhjoJI/AAAAAAAAAVk/7HnRfFRSKxs/s320/couchbase-twitter-001.png )

4- Click "Create Your Twitter Application" button

Your application's OAuth settings are now available :

![]( http://3.bp.blogspot.com/-ZdaST7c-HdY/UJhqi8WJMGI/AAAAAAAAAVs/ndeXQwc4F0k/s320/couchbase-twitter-002.png )


5- Go down on the Application Settings page and click on the "Create My Access Token" button

![]( http://4.bp.blogspot.com/-WIW2AN93n6k/UJhrfZV1AVI/AAAAAAAAAV0/OseQ1EOpg9k/s320/couchbase-twitter-003.png )

You have now all the necessary information to create your application:

* Consumer key
* Consumer secret
* Access token
* Access token secret

These keys will be uses in the `twitter4j.properties` file when running the Java application from the command line

#### Create the Java Application

The following code is the main code of the application:

<Gist id="4022377" 
/>

Some basic explanation:

* The `setUp()` method simply reads the `twitter4j.properties` file from the classpath to build the Couchbase connection string.
* The `injectTweets` opens the Couchbase connection -line 76- and calls the TwitterStream API.
* A Listener is created and will receive all the `onStatus(Status status)` from Twitter. The most important method is onStatus() that receive the message and save it into Couchbase.
* One interesting thing : since Couchbase is a JSON Document database it allows your to just take the JSON String and save it directly. `cbClient.add(idStr,0 ,twitterMessage);`



#### Packaging

To be able to execute the application directly from the Jar file, I am using the assembly plugin with the following informations from the pom.xml:

``` xml
  ...
<archive>
<manifest>
<mainclass>com.couchbase.demo.TwitterInjector</mainclass>
</manifest>
<manifestentries>
<class-path>.</class-path>
</manifestentries>
</archive>
...
```

Some information:

* The mainClass entry allows you to set which class to execute when running java -jar command.
* The Class-Path entry allows you to set the current directory as part of the classpath where the program will search for the twitter4j.properties file.
* The assembly file is also configure to include all the dependencies (Twitter4J, Couchbase client  SDK, ...)

If you do want to build it from the sources, simply run :

``` sh
mvn clean package
```
This will create the following Jar file ./target/CouchbaseTwitterInjector.jar


#### Run the Java Application

Before running the application you must create a twitter4j.properties file with the following information :

``` sh
twitter4j.jsonStoreEnabled=true

oauth.consumerKey=[YOUR CONSUMER KEY]
oauth.consumerSecret=[YOUR CONSUMER SECRET KEY]
oauth.accessToken=[YOUR ACCESS TOKEN]
oauth.accessTokenSecret=[YOUR ACCESS TOKEN SECRET]

couchbase.uri.list=http://127.0.0.1:8091/pools
couchbase.bucket=default
couchbase.password=
```

Save the properties file and from the same location run:

``` sh
jar -jar [path-to-jar]/CouchbaseTwitterInjector.jar
```

This will inject Tweets into your Couchbase Server. Enjoy !
