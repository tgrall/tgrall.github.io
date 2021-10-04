---
title: "Nantes MUG : Event #2"

categories: events mongodb mug
---

[Last night](http://www.meetup.com/Nantes-MongoDB-User-Group/events/218926859/) the Nantes MUG ([MongoDB Users Group](http://www.mongodb.org/user-groups)) had its second event. More than 45 people signed up and joined us at the [Epitech schoo](http://www.epitech.eu/nantes/ecole-informatique-nantes.aspx)l (thanks for this!). &nbsp;We were lucky to have 2 talks from local community members:



* How “MyScript Cloud” uses MongoDB by [Mathieu Ruellan](https://twitter.com/mathieuruellan)
* Aggregation Framework by [Sebastien Prunier](https://twitter.com/sebprunier)

<!-- truncate -->

### How “MyScript Cloud” uses MongoDB

First of all, if you do not know [MyScript](http://myscript.com/)&nbsp;I invite you to play with the [online demonstration](http://webdemo.myscript.com/#/home).&nbsp;I am pretty sure that you are already using this technology without noticing it, since it is embedded in many devices/applications including: your car look at the [Audi Touchpad](http://vimeo.com/49013364)!

That said Mathieu was not here to talk about the cool features and applications of MyScript but to explain how MongoDB is used to run their cloud product.&nbsp;
Mathieu explained how you can use [MyScript SDK](https://dev.myscript.com/dev-kits/cloud-development-kit/) online. You just need to call a REST API to add Handwriting Recognition to your application. Let's make the long story short, and see how MongoDB was chosen and how it is used today:

* The prototype was done with a single RDBMS instance
* With the success of the project MyScript Cloud the team had to move to a more flexible solution:
  * Flexible schema to support heterogeneous structures,
  * Highly available solution with automatic failover,
  * Multi datacenter supports with localized read,
* This is when Mathieu looked at different solution and selected MongoDB and deployed it on AWS.

Mathieu highlighted the following points:

* Deploy and Manage a Replica Set is really easy, and it is done on multiple AWS data centers,
* Use the proper [read preference](http://docs.mongodb.org/manual/core/read-preference/)&nbsp; (nearest in this case) to deliver the data as fast as possible,
* Develop with JSON Documents provides lot of flexibility to the developers, that can add new features faster.

![](http://4.bp.blogspot.com/-AWHn75hAyBY/VL9EMpRrFVI/AAAAAAAAAwA/CrDMkKL5A1Y/s1600/IMG_3743.jpg )


### Aggregation Framework

Sebastien "Seb" is software engineering at SERLI and working with MongoDB for more than 2 years now. Seb introduced the reasons why aggregations are needed in applications and the various ways of doing it with [MongoDB](http://docs.mongodb.org/manual/aggregation/): simple queries, map reduce, and aggregation pipeline; with a focus on a Aggregation Pipeline.

Using cool demonstrations, Seb explained in a step by step approach the key features and capabilities of MongoDB [Aggregation Pipeline](http://docs.mongodb.org/manual/core/aggregation-pipeline/):

* $match, $group, ...
* $unwind arrays
* $sort and $limit
* $geonear

To close his presentation, Seb talked about aggregation best practices, and behavior&nbsp;[in a sharded cluster](http://docs.mongodb.org/manual/core/aggregation-pipeline-sharded-collections/#aggregation-pipeline-sharded-collection).

![](http://4.bp.blogspot.com/-1fK-Q5SmL4s/VL9EQiaUIvI/AAAAAAAAAwI/AMVYrmQDPVg/s1600/IMG_3745.jpg )


### And...

As usual the event ended with some drinks and a late dinner!

This event was really great and I am very happy to see what people are doing with MongoDB, including storing _ink_ like MyScript, thanks again to the speakers!

This brings me to the last point : MUGs are driven by the community. You are using MongoDB and want to talk about what you, do not hesitate to reach out the organizers they will be more than happy to have you.

You can find a MUG near you, [look here](http://www.mongodb.org/user-groups).
