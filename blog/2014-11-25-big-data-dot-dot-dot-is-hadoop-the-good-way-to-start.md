---
title: "Big Data... Is Hadoop the good way to start?"

categories: bigdata hadoop mongodb spark
---

In the past 2 years, I have met many developers, architects that are working on “big data” projects. This sounds amazing, but quite often the truth is not that amazing.

####TL;TR
You believe that you have a big data project?

* Do not start with the installation of an Hadoop Cluster -- the "*how*"
* Start to talk to business people to understand their problem -- the "*why*"
* Understand the data you must process
* Look at the volume -- very often it is not "that" big
* Then implement it, and take a simple approach, for example start with MongoDB + Apache Spark

!['Big Data'](http://cdn.meme.am/instances/500x/47510205.jpg )


<!-- truncate -->

##The infamous "big data project"

A typical discussion would look like:

Me: *“Can you tell me more about this project, what do you do with your data?”*

Mr. Big Bytes: *“Sure, we have a 40 nodes Hadoop cluster..."*

Me: *“This is cool but which type of data do you store, and what is the use case, business value?"*

Mr. Big Bytes: *“We store, all the logs of our applications, we have hundreds of gigabits…"*

After a long blank: *“We have not yet started to analyze these data. For now it is jut  'us, the IT team,' we store the data, like that soon we will be able to do interesting things with them"*

You can meet the same person few months later; the cluster is still sitting here, with no activity on it. I even met some consultants telling me they received calls from their customer asking the following:

*“Hmmm, we have an Hadoop cluster installed, can you help us to find what to do with it?"*

*Wrong! That is wrong!!!!!* This means that the IT Team has spent lot of time for nothing, at least for the business; and I am not even sure the team has learned something technically.

###Start with the "Why" not with the "How"!


The solution to this, could be obvious, start your “big data project” answering the “why/what” questions first! The “how”, the implementation, will come later.

I am sure that most of the enterprises will benefit of a so called “big data project”, but it is really important to understand the problems first. *And these problems are not technical…* at least at the beginning. So you must spend time with the business persons to understand what could help them. Let's take some examples.


You are working in a bank or insurance, business people will be more than happy to predict when/why customer will be leaving the company by doing some *churn analysis*; or it will be nice to be able to see when it makes lot of sense *to sell new contracts*, service to existing customers.

You are working in retail/commerce, your business will be happy to see if they can <u>adjust the price</u> to the market, or <u>provide precise recommendations</u> to a user from an analysis of other customer behavior.

We can find many other examples. But as you can see we are not talking about technology, just business and possible benefits. In fact nothing new, compare with the applications you are building, you need first to have some requirements/ideas to build a product. Here we just need to have some "data input" to see <u>how we can enrich the data</u> with some business value.

Once you have started to ask all these questions you will start to see some input, and possible processing around them:

* You are an insurance, you customers has no contact with your representative, or the customer satisfaction is medium/bad; you start to see some customer name in quotes coming from price comparison website…. hmm you can guess that they are looking for a new insurance.
* Still in the insurance, when your customer are close to the requirement age, or has teenagers learning how to drive, moving to college, you know that you have some opportunity to sell new contract, or adapt existing ones to the new needs
* In retail, you may want to look to all customers and what they have ordered, and based on this be able to recommend some products to a customer that "looks" the same.
* Another very common use case these days, you want to do some sentiment analysis of social networks to see how your brand is perceived by your community

As you can see now, we can start to think about the data we have to use and the type of processing we have to do on them.

###Let's now talk about the "How"

Now that you have a better idea about what you want to do, it does not mean that you should dive into a large cluster installation.

Before that, you should continue to analyze the data:

* What is the structure of the data that I have to analyze?
* How big is my dataset?
* How much data I have to ingest on a period of time (minute, hour, day, ...)

All these questions will help you to understand better your application. This is where it is often interesting too, and we realize that for most of us the "big data" is not that big!

I was working the other day with a Telco company in Belgium, and I was talking about possible new project. I simply said:


* Belgium is what, 11+ millions of people
* If you store a 50kb object for each person this represent:
* Your full dataset will be 524Gb, yes not even a Terabyte!

Do you need a large Hadoop cluster to store and process this? You can use it, but you do not need to! You can find something smaller, and easier to start with.

Any database will do the job, starting with MongoDB. I think it is really interesting to start this project with a MongoDB cluster, not only because it will allow you to scale out as much as you need, but also because you will leverage the flexibility of the document model. This will allow you to store any type of data, and easily adapt the structure to the new data, or requirements.

Storing the data is only one part of the equation. The other part is how you achieve the data processing. Lately I am playing a lot with [Apache Spark](https://spark.apache.org/). Spark provides a very powerful engine for large scale data processing, and it is a lot simpler than Map Reduce jobs. In addition to this, you can run Spark without Hadoop! This means you can connect you Spark to your MongoDB, with the [MongoDB Hadoop Connector](http://docs.mongodb.org/ecosystem/tools/hadoop/) and other data sources and directly execute job on your main database.

What I like also about this approach, you can when you dataset starts to grow, and it become harder to process all the data on your operational database, you can easily add Hadoop; and keep most of your data processing layer intact, and only change the data sources information. In this case you will connect MongoDB and Hadoop to get/push the data into HDFS, once again using the MongoDB Hadoop Connector.

###Conclusion

Too many times, projects are driven by technology instead of focusing on the business value. This is particularly true around big data projects. So be sure you start by understanding the business problem, and find the data that could help to solve it.

Once you have the business problem and the data, select the good technology, that could be very simple, simple files and python scripts, or more often a database like MongoDB with a data processing layer like Spark. And start to move to Hadoop when it is really mandatory... a very, very, very, large dataset.
