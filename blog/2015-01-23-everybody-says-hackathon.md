---
title: "Everybody says “Hackathon”!"

categories: mongodb events hackathon
---

#### TLTR:
* MongoDB & Sage organized an internal Hackathon
* We use the new X3 Platform based on MongoDB, Node.js and HTML to add cool features  to the ERP
* This shows that “any” enterprise can (should) do it to:
	* look differently at software development
	* build strong team spirit
	* have fun!


### Introduction

I have like many of you participated to multiple Hackathons where developers, designer and entrepreneurs are working together to build applications in few hours/days. As you probably know more and more companies are running such events internally, it is the case for example at Facebook, Google, but also ING (bank), AXA (Insurance), and many more.

Last week, I have participated to the first Sage Hackathon!

In case you do not know Sage is a 30+ years old ERP vendor. I have to say that I could not imagine that coming from such company… Let me tell me more about it.

![](/images/posts/everybody-says-hackathon/00-logo.png )

<!-- truncate -->

### Sage Hackathon

##### How did it start?

I have met the development team few months back when I learned that Sage was using MongoDB. We discussed about use cases, architecture,... And this is when I was the most surprised! The new version of Sage ERP X3 is a mix of legacy components (RDBMS, C++ based proprietary middleware), and brand new layer based on Node.js, MongoDB and HTML/CSS/JS (AngularJS like). The Sage team has open sourced some of the JS libraries, see https://github.com/sage Pretty cool isn’t?

I was really excited to see how MongoDB and Node.js are used by Sage modernize the ERP. So I asked more and more questions about the product, looked at some demonstrations. This leads to a broader discussion to see how we can use this new architecture to develop more features using it.

This is how we started to talk about an internal hackathon. Everybody, developers, marketing and managers were very excited about the idea.


##### Hackathon Preparation

Sage and MongoDB teams worked together to organize the event, with the following constraints:

* The hackathon will be a 24h (noon to noon) event, to allow Sage management to have corporate meetings before and after the event,
* 40 persons limit - 6 teams max - with a mix of developers, designer, product owner, quality engineer, … (coming from various countries),
* The event will occur offsite to *daily duty noise*

Also since the hackathon will be short, 24h!, we decided to propose in advance many subjects and teams. This to be able to focus on the implementation on D-Day and avoid "team and project" selection.

So we define a list of 6 ideas that would extend the ERP in a cool way, for example: notification platform, collaboration feature such as business discussion, caching layer with query capabilities, office tool integration, plug social network like LinkedIn and Twitter to ERP business objects,...

Once we had a good vision of the event, Sage marketing and product management organized an internal presentation to announce the event, and ask for more ideas. We were all surprised to see so many ideas coming out of this presentation!


##### Let's code!

So we all met at the location, a very nice conference center, [Les Fontaines](http://www.les-fontaines.com/), where fresh coffee was waiting for us!

The event started with a very short presentation of the teams, projects, and jury.

![Presentation](/images/posts/everybody-says-hackathon/01-sage-hack-intro.png  )

Quickly the teams started to draw things on whiteboard, discuss architecture, and design... The organizers, included myself, were
very happy to see that everybody was diving into it.

![Team Work](/images/posts/everybody-says-hackathon/02-team-work.png  ) 

![](/images/posts/everybody-says-hackathon/03-motto.png )

MongoDB ([Alain](http://twitter.com/alainhelaili) and I), and Sage architects were here to help; so we did. I pushed hard to be sure all the teams start to develop, design
as early as possible. I also gave many advices around document design and other things around MongoDB and node.

In the evening we stopped for a nice dinner, this is the big difference between a startup event, and a corporate one, good wine, soup, duck confit, wine, and fantastic desserts. Yummy!

Let's go back to the code thing, so all the teams were working like crazy on their project. I had lot of interesting discussions with all of them.

![](/images/posts/everybody-says-hackathon/04-night-coding.png )  ![Night Coding](/images/posts/everybody-says-hackathon/05-night-coding.png  )

I went to bed at 11:30pm, *yeah, I am a loser!*, while everybody was still working.

![Night Coding](/images/posts/everybody-says-hackathon/06-night-coding.png ) ![Night Coding](/images/posts/everybody-says-hackathon/07-night-coding.png)

I as back in the *war room* around 6:00am, and helped some team to finish their project.

All the teams used the morning to polish the feature and prepare the demonstration.


##### Let's vote!

At noon each team started to demonstrate their feature in 5mn. All the teams did a live demonstration, with the feature well integrated to the Sage X3 screens.
It was really cool. A team even created a small video clip to explain the feature and vision.

![](/images/posts/everybody-says-hackathon/08-demonstration.png )  ![](/images/posts/everybody-says-hackathon/10-demonstration.png ) 
![](/images/posts/everybody-says-hackathon/11-demonstration.png ) ![](/images/posts/everybody-says-hackathon/12-demonstration.png ) 
![](/images/posts/everybody-says-hackathon/13-demonstration.png ) ![](/images/posts/everybody-says-hackathon/14-demonstration.png ) 
![](/images/posts/everybody-says-hackathon/15-demonstration.png ) ![](/images/posts/everybody-says-hackathon/09-demonstration.png )

It was very hard to chose a winner, but we agreed on a very rich and promising notification platform.


##### What's next?

It was really nice for me to see the excitement of all the teams, and the pride of being able to develop something that fast!

I cannot talk for Sage, but I think they all realize something: they can do stuff a lot faster, and this should try to push this into the product now!
It is also a good opportunity to see how to developer and deliver new addons for X3.

On my side, I am very happy of the result, and see that MongoDB and new technologies can really change the way we work with our data. And I hope to be able to do that again
with other companies.


### What about you?


I believe that any organization that has an IT/Development team should organize such event, for example every year.

Honestly, we can "stop" working on our daily duties for 1,2 or 3 days and do this. If you look at your agenda, I am sure that you have wasted
more time on none productive meetings; remember :

> If a picture is worth 1000 words
>
> A prototype is worth 1000 meetings!

by @ideo

You will be surprised to see what can be done when you let the passionate people do what they love, but also it will be a good opportunity to motivate your team.

I will be pleased to discuss that you will, so feel free to drop me a comment.
