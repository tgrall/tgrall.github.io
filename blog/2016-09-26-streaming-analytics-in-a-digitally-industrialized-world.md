---
title: "Streaming Analytics in a Digitally Industrialized World"

categories: streaming analytics bigdata
---

Get an introduction to streaming analytics, which allows you real-time insight from captured events and big data. There are applications across industries, from finance to wine making, though there are two primary challenges to be addressed.

Did you know that a plane flying from Texas to London can generate 30 million data points per flight? As Jim Daily of GE Aviation notes, that equals [10 billion data points](https://www.ge.com/digital/blog/industrial-iot-improving-airline-economics) in one year. And we’re talking about one plane alone. So you can understand why [another top GE executive recently told Ericsson Business Review](http://cloudblog.ericsson.com/cloud-scalability-combined-with-speed-inside-ges-cloud-transformation) that "Cloud is the future of IT," with a focus on supporting challenging applications in industries such as aviation and energy.

<!-- truncate -->

### The benefits of big data

Today, thanks to modern big data platforms, many companies are able to take advantage of the same methods as industry giant GE to store, process, and analyze massive amounts of data. This means that you can also capture core business data, such as that coming from a CRM system, or traffic sensors, or say jet engines, and associate it to other data such as social, application, blog or industrial data. Ultimately, this will result in greater data insights and can enable things like better customer segmentation and prediction.

Sounds great, right? There’s a catch. The challenge is that these data are processed in batch mode, meaning that you have to wait a few hours or even days to access relevant KPI’s and insights. Not only is there a delay, but analysis is based on data that’s out of date – even if only by a few hours.

### Analysis of big event streams

That’s where streaming analytics comes in. Streaming analytics is the [analysis of large event streams](http://searchcloudapplications.techtarget.com/opinion/Streaming-analytics-lets-you-view-the-past-to-see-the-future?utm_medium=EM&asrc=EM_NLN_58517129&utm_campaign=20160606_Seeing%20the%20future...with%20the%20past?_fchurchville&utm_source=NLN&track=NL-1839&ad=908120&src=908120), which is data that is in constant movement. These streams can include actions that can be incredibly small, say one click, yet result in an explosion of data. The benefit is that you can capture events and data as they happen, delivering value to the enterprise in near real time.

What does streaming analytics look like regarding the previously mentioned CRM system? It means that an enterprise can get immediate feedback on something like a specific marketing campaign, website update, or product alteration. When a user clicks within one of these realms and an order is immediately processed, that information is pushed out in real time to various tools, allowing the enterprise to adjust its customer interaction.

### Streaming analytics in practice

Where else is streaming analytics applicable? Think about the benefits of fraud detection in the financial sector, or the growth of sensors in manufacturing, or collection of data from large scale machines. One example is where Ericsson has collaborated with [vintners in Germany, using IoT to improve traditional harvesting methods](http://cloudblog.ericsson.com/can-the-networked-society-and-iot-make-better-wine) through greater precision and speed of response to outside factors. In these streaming analytics scenarios, the key is “[High-Frequency Decisioning,](https://www.mapr.com/blog/lets-get-real-acting-data-real-time)” where you move from knowing to doing in real-time synergy. Time to action is compressed, resulting in dramatic results like achieving greater user satisfaction, higher revenue, or reduced risk.

### Two primary challenges with streaming analytics

Streaming analytics is not without challenges. Systems must capture events in near real time, at scale, and in a distributed fashion. And of course, events must be stored and processed in real time. Since big data is generated one event at a time, you need to have an incredibly powerful storage and processing layer, which can provide deep analytics and rich features like machine learning systems.

To take on the first challenge, new messaging systems like [Apache Kafka](http://kafka.apache.org) and [MapR Streams](https://www.mapr.com/products/mapr-streams) provide a common API for developers to publish and subscribe to any event. And to process and store data in real-time, one of the most efficient methods would be to use a [distributed file system](https://www.mapr.com/products/mapr-fs) and [NoSQL databases](https://www.mapr.com/products/mapr-db-in-hadoop-nosql). This provides horizontal scalability and flexibility. A storage system must also process and do analytics calculations in real time in a distributed manner.

Tools such as [Apache Spark](https://www.mapr.com/products/apache-spark) and [Flink](http://flink.apache.org) come to mind, which provide rich analytical functions that can be integrated with any tool, including real time alerting systems. It is also interesting to mention that all the events, data, that are now stored in real time continue to be accessible with traditional analytics tools; thanks to the distributed, and scalable distributed SQL Engines provided in modern big data platforms.

This was originally published on the [Ericsson Cloud blog here](http://cloudblog.ericsson.com/streaming-analytics-of-big-data-in-real-time).
