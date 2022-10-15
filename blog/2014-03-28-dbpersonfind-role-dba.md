---
title: "db.person.find( { 'role' : 'DBA' } )"

categories: nosql mongodb ops devops
---
Wow! it has been a while since I posted something on my blog post. I have been very busy, moving to MongoDB, learning, learning, learning…finally I can breath a little and answer some questions.

Last week I have been helping my colleague Norberto to deliver a MongoDB Essentials Training in Paris. This was a very nice experience, and I am impatient to deliver it on my own. I was happy to see that the audience was well balanced between developers and operations, mostly DBA.

### What! I still need DBA?

![](http://ct.fra.bz/ol/fz/sw/i53/5/6/8/frabz-what-if-i-told-you-you-dont-need-to-know-sql-to-be-a-dba-85380e.jpg )

This is a good opportunity to raise a point, or comment a wrong idea: the fact that you are using MongoDB, or any other NoSQL datastore does not mean that you do not need a DBA… Like any project, an administrator is not mandatory, but if you have one it is better. So even when MongoDB is pushed by development team it is very important to understand the way the database works, and how to administer, monitor it.

If you are lucky enough to have real operations teams, with good system and database administrators use them! They are very important for your application.

Most DBA/System Administrators have been maintaining systems in production for many years. They know how to keep your application up and running. They also most of the time experienced many “disasters”, and then recover (I hope).

Who knows, you may encounter big issues with your application and you will be happy to have them on your side at this moment.

### "Great, but the DBA is slowing down my development!"

I hear this, sometimes, and I had this feeling in the past to as developer in large organization. Is it true?

Developers and DBA are today, not living in the same worlds:

* Developers want to integrate new technologies as soon as possible, not only because it is fun and they can brag about it during meetups/conferences; but because these technologies, most of the time, are making them more productive, and offer better service/experience to the consumer
* DBA, are here to keep the applications up and running! So every time they do not feel confident about a technology they will push back. I think this is natural and I would be probably the same in their position. Like all geeks, they would love to adopt new technologies but they need to understand and trust it before.

System administrators, DBAS look at the technology with a different angle than developers.

Based on this assumption, it is important to bring the operation team as early as possible when  the development team wants to integrate MongoDB or any new data store. Having the operation team in the loop early will ease the global adoption of MongoDB in the company.

Personally, and this will show my age, I have seen a big change in the way developers and DBAs are working together.

Back in the 90's, when the main architecture was based on client/server architecture  developers and DBAs where working pretty well togethers; probably because they were speaking the same language: SQL was everywhere.  I had regular meetings wit

Then, since mid 2000, mots of applications have moved to a web based architecture , with for example Java middleware, and the developers stopped working with DBAs. Probably because the abstraction data layer provided by the ORM exposed the database as a "commodity" service that is supposed to work: "Hey Mr DBA, my application has been written with the best middleware technology on the market, so now deal with the performance and scalability! I am done!"

Yes it is a cliché, but I am sure that some of you will recognize that.

Nevertheless each time I can, I have been pushing developers to talk more to administrators and look closely to their database!

### A new era for operations and development teams

The fast adoption of MongoDB by developers, is a great opportunity to fix what we have broken 10 years ago in large information systems:

* Let's talk again!

MongoDB has been built first for developers. The document oriented approach gives lot of flexibility to quickly adapt to change. So anytime your business users need a new feature you can implement it, even if this change impact the data structure. Your data model is now driven and controlled by the application, not the database engine.

However, the applications still need to be available 24x7, and performs well. These topics are managed - and shared- by administrator and developers! This has been always the case but, as I described it earlier, it looks like some of us have forgotten that.

Schemas design, change velocity, are driven by the application, so the business and development teams, but all this impacts the database, for example:

* How storage will grow ?
* Which indexes must be created to speed up my application?
* How to organize my cluster to leverage the infrastructure properly:
    * Replica-Set organization (and related write concerns, managed by developer)
    * Sharding options
* And the most important of them : backup/recovery strategies

So many things that could be managed by the project team, but if you have an operation team with you, it will be better to do that as a single team.

You, the developer, are convinced that MongoDB is the best database for your projects! Now it is time to work with the ops team and convince them too.  So you should for sure explain why MongoDB is good for you as developer, but also you should highlight all the benefits for the operations, starting with built-in high-availability with replica sets, and easy scalability with sharding. MongoDB is also here to make the life of the administrator easier! I have shared in the next paragraph a lit of resources that are interesting for operations people.

Let’s repeat it another time, try to involve the operation team as soon as possible, and use that as an opportunity to build/rebuild the relationship between developers and system administrators!

### Resources

You can find many good resources on the Site to helps operations or learn about this:

* Documentation : [Operations](http://docs.mongodb.org/manual/administration/)
* Online Training :
    * [M102: MongoDB for DBAs](https://education.mongodb.com/courses/10gen/M102/2014_May/about)
    * [M202: MongoDB Advanced Deployment and Operations](https://education.mongodb.com/courses/10gen/M202/2014_April/about)
* And many others such as White Papers and [Webinars](http://www.mongodb.com/webinars).
