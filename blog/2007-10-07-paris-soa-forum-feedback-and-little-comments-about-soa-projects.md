---
title: "Paris 'SOA Forum' feedback; and  little comments about SOA projects"

categories: soa conference
---
This week I have attended a SOA conference in Paris the [SOA Forum](http://forumsoa.fr/). (I was not there in 2006). This event is not a technical event targeted towards developers but mainly oriented for IT managers and decision makers. This day was well attended, around 200 people. The content and more important the questions and round tables provide a good snapshot of how SOA is adopted.

If last year, based on comments that I can get, the message was "*What &amp; Why SOA?*" this year I have the feeling that most of the audience was really familiarized with the SOA concepts -as I said earlier it is not a technical conference- and now they are more asking "*How and When SOA?*". Lot of discussions were about how to I start the projects, since in many case the SOA will impact the whole IT, and even more the full enterprise.

<!-- truncate -->

**Thoughts about SOA project &amp; approach**

It is hard to say if the best way to start with SOA is starting from the Top (C level) or from the IT department on a departmental project. To be honest I think it will depend of each organizations; and depends of "why" SOA is a good fit for the enterprise.

I am tempted to say that if the choice is made for a "Time-To-Market" reason I believe that the project will start from a specific business need and be implemented in a "bottom-up" fashion., meaning the IT will quickly put together some services to give some agility to the business. This is something that I have seen many times in the telco industry.

At the other end, when the key factor is about rationalization of the business processes over the whole enterprise, the project is often manage at the IT management level if not even higher. This because this kind of approach will have impact on many departments/people.

Basically like in any project it is important to have:

*   good communication between actors that could be developers or departments
*   share the same goals
*   have an understanding of the technologies that will be used and their constraints.If for the point 1 &amp; 2 this is management that deals with this. For the 3rd one, we are closer to the technology where we can probably share the most -saying that because I believe that most of you, reader, are technical people. At the end of the day we do not build system with slideshows, but with products/solutions. So it is part of our job to take time to understand the pros/cons, limitations of the different products that will be involved in the project.

One example, is this week I have visited a customer and this customer wants to put in place an ESB to provide services to the different departments of the enterprise. Discussing at the global level of the architecture we all agreed on the different needs such as: connectivity to heterogeneous systems, transformation, routing, ...

Then the customer talk about "Web Services" again and again, this is where I have to say, I always try to slow down the discussion to set the expectation at the correct level, for example talking about impact on reliability, security of the HTTP/SOAP based Web Services. Don't get me wrong I am not saying that it is not possible to achieve correct QoS (Quality of Services) with Web Services but it could have an impact on the product choice, for example supporting WS-RM, WS-Security or even using proprietary approach for stateful Web Services, ... And the same comments, questions could occur with other part of the stack.

In conclusion, independently of the type of approach you are taking to put in place a Service Oriented Architecture, you will need sometimes to really understand well the product/solution you will be using to implement it. And for each of the options you will be choosing take some time to estimate the pros/cons and limitations of it. The same way you are taking time to list the different services, their granularity,  their QoS, you need to take some time to analyze the different solution. For example when you choose to use an ESB, BPEL engine with their connectivity capabilities, what are the best way to connect to a system (SOAP, JMS, JDBC, JCA, Java, ..), how to code the logic (Java, BPEL, business rules, ...) and for each of this question think about the impact of it on your system. For example, how portable will be my code/business process, and is it important for me?
