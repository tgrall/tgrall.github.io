---
title: "Can I do SOA with Web Services today?"
tags: [soa]
---
I am just coming back for Toronto where I have been presenting Oracle
Developer Day: SOA for J2EE Developers. As part of this exercise I have
introduced Web Services and related technologies/standards.

A person in the audience asked me:

> But can I do SOA Today?
> Are Web Services are mature enough?

I think that is a very interesting and valid question. The answer is
certainly:&nbsp;

* *Yes you can, and I would add, yes you should!!*

Web Services are &nbsp;definitively big actors in Service Oriented
Architecture since by definition they are loosely coupled,
implementation agnostic and facilitate reusability. In the same time
the concern of this person are justified since some important pieces of
infrastructure are yet available in vendors solutions. Or if they exist
they are proprietary and won't allow interoperability of the service
with other stack... Losing interoperability is a big deal when you talk
about Web Services since most of the time, if the designers want to use
Web Services it is to be able to reuse it in various applications,
independently of the platform where this application is running.

#### Why I have answered Yes?

<!-- truncate -->

Why I am so positive when I answered this person? Just simply because
Web Services are today mature enough. But like any development of
applications/systems the development should start with a clear
definition of the requirements. When the development team will start to
write down the requirement it will be clear of not what are the
important pieces in term of services. Beside the business requirements,
lots of requirements are technical/IT related such as security,
performance, manageability, reliability, and transaction management,
performance... So when you design your system do not forgot to clarify
what are the different infrastructure services you need....

It is then easy to match your infrastructure requirement list to the
different quality of services supported by the platform you will
implementing on, and as important, the platform(s) you will have to
integrate with.&nbsp; For example today it is possible to easily
create SOA/Web Services application that are secured because
WS-Security is a standard supported by most of the vendors. At the
opposite it may be very challenging to create SOA/WS based application
that involve a very complex transaction model with various applications
and system since no standard have been implemented in a real
interoperable manner. But no worry the WS brains are here and work on
it, take some time to read more about WS-Transactions and other related
standardization effort.

Based on the previous example with security and transaction, it is also
important to keep in mind that the Web Services is a mature technology
but it is still evolving -based on real life requirements-. So in the
same time your application/system will evolve -it is one of your goal
when you do SOA, it is to build a more agile system that can react to
business, or technological changes quicker-, do not forget that your
vendor are continuously working to not only define the standard but
also implement them in their product. So you may put as a requirement
from the beginning a specific infrastructure services that are not
available in today's product but the important question to ask you
before dropping SOA/Web Service is when I really need this feature?
When this feature will be available in my platform?

This is why also it is important to understand the strategy of your
vendor in term of flexibility and adaptability of their solution to the
different standards, and how it can help you to take care of legacy
services that need to integrate with your new applications. One nice
example is the usage of Oracle Web Services Manager. Even if
WS-Security is one of the first standard around "Enterprise Web
Services" it has not been in the different stack for long so lot of
existing WS do not support WS-Sec. Oracle Web Services Manager allow
you using agents and/or gateway to add security in a standard way to
existing services, and enrich you SOA with a better quality of
services.&nbsp; So do not say no to SOA/SOA because a standard does
not exist or exist but not implemented, it will come -take a look to
all the WS-* effort-, and this standards will be able to extend the
system that you are building as you need.... SOA is all about agility,
to be sure that it will be agile enough to provide you more services as
you go!
