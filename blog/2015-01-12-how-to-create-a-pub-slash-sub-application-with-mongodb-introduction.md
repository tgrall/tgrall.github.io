---
title: "How to create a pub/sub application with MongoDB ? Introduction"

tags: [code, mongodb, node.js, scala, java]
---
import Gist from 'react-gist';

In this article we will see how to create a pub/sub application (messaging, chat, notification), and this fully based on MongoDB (without any message broker like RabbitMQ, JMS, ... ).

So, what needs to be done to achieve such thing:

* an application "publish" a message. In our case, we simply save a document into MongoDB
* another application, or thread, subscribe to these events and will received message automatically. In our case this means that the application should automatically receive newly created document out of MongoDB

All this is possible with some very cool MongoDB features: [capped collections](http://docs.mongodb.org/manual/core/capped-collections/) and [tailable cursors](http://docs.mongodb.org/manual/tutorial/create-tailable-cursor/),

<!-- truncate -->

## Collections and Tailable Cursors

As you can see in the documentation, Capped Collections are fixed sized collections, that work in a way similar to circular buffers: once a collection fills its allocated space, it makes room for new documents by overwriting the oldest documents.

MongoDB Capped Collections can be queried using Tailable Cursors, that are similar to the unix `tail -f` command. Your application continue to retrieve documents as they are inserted into the collection. I also like to call this a "continuous query".

Now that we have seen the basics, let's implement it.

## Building a very basic application


#### Create the collection

The first thing to do is to create a new capped collection:

<Gist id="f16b1d3b5bcc12a4270a" 
      file='capped-collection'  
/>

For simplicity, I am using the MongoDB Shell to create the `messages` collection in the `chat` database.

You can see on line #7 how to create a capped collection, with 2 options:

* `capped : true` : this one is obvious
* `size : 10000` : this is a mandatory option when you create a capped collection. This is the maximum size in bytes. (will be raised to a multiple of 256)

Finally, on line #9, I insert a dummy document, this is also mandatory to be able to get the tailable cursor to work.


#### Write an application


Now that we have the collection, let's write some code. First in *node.js*:

<Gist id="f16b1d3b5bcc12a4270a" 
      file='app.js'  
/>



From lines #1 to 5 I just connect to my local mongoDB instance.

Then on line #7, I get the `messages` collection.

And on line #10, I execute a find, using a tailable cursor, using specific options:

* `{}` : no filter, so all documents will be returned
* `tailable : true` : this one is clear, to say that we want to create a tailable cursor
* `awaitdata : true` : to say that we wait for data before returning no data to the client
* `numberOfRetries : -1` : The number of times to retry on time out, -1 is infinite, so the application will keep trying

Line #11 just force the sort to the natural order.

Then on line #12, the cursor returns the data, and the document is printed in the console each time it is inserted.


#### Test the Application

Start the application

`node app.js`

Insert documents in the messages collection, from the shell or any other tool.

You can find below a screencast showing this very basic application working:

<iframe width="675" height="380" src="https://www.youtube.com/embed/uSuiYvssKuo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The source code of this sample application in this Github repository, take the step-01 branch; clone this branch using:

`git clone -b step-01 https://github.com/tgrall/mongodb-realtime-pubsub.git`

I have also created a gist showing the same behavior in *Java*:

<Gist id="f16b1d3b5bcc12a4270a" 
      file='MyApp.java'  
/>


Mathieu Ancelin has written it in *Scala*:

<Gist id="f16b1d3b5bcc12a4270a" 
      file='App.scala'  
/>


### Add some user interface

We have the basics of a publish subscribe based application:

* publish by inserting document into MongoDB
* subscribe by reading document using a tailable cursor

Let's now push the messages to a user using for example socket.io. For this we need to:

* add socket.io dependency to our node project
* add HTML page to show messages

The following gists shows the updated version of the app.js and index.html, let's take a look:

<Gist id="d8c2acfdc416abcc5d18" 
      file='app.js'  
/>

The node application has been updated with the following features:

* lines #4-7: import of http, file system and socket.io
* lines #10-21: configure and start the http server. You can see that I have created a simple handler to serve static html file
* lines #28-39: I have added support to Web socket using socket.io where I open the tailable cursor, and push/emit the messages on the socket.

As you can see, the code that I have added is simple. I do not use any advanced framework, nor manage exceptions, this for simplicity and readability.

Let's now look at the client (html page).

<Gist id="d8c2acfdc416abcc5d18" 
      file='index.html'  
/>

Same as the server, it is really simple and does not use any advanced libraries except socket.io client (line #18) and JQuery (line #19), and used:

* on line #22 to received messages ans print them in the page using JQuery on line #23


I have created a screencast of this version of the application:

<iframe width="675" height="380" src="https://www.youtube.com/embed/N9fDxuohdy8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


You can find the source code in this Github repository, take the step-02 branch; clone this branch using:

`git clone -b step-02 https://github.com/tgrall/mongodb-realtime-pubsub.git`


### Conclusion

In this first post, we have:

* learned about tailable cursor and capped collection
* see how it can be used to develop a pub/sub application
* expose this into a basic web socket based application

In the next article we will continue to develop a bigger application using these features.
