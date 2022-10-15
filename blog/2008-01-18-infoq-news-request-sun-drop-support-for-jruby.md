---
title: "Infoq news: 'Request: Sun Drop Support for JRuby"

categories:
---
With the latest big news around Oracle-BEA and SUN-MySQL deals I have missed an interesting article on Infoq with the following title:

* [Request: Sun, Drop Support for JRuby](http://www.infoq.com/news/2008/01/sun_drop_jruby)

I have to say that I do agree with Craig Wickesser asking Sun to Drop Support for JRuby.

### Syntax Matters?

*Yes syntax matters*, not only for the "beauty" of it, but also because of the investment that enterprises have made into it. We should not force people to completely remodel their brain all the time, for no gain. 

*I love [Groovy](http://groovy.codehaus.org/) language*, and one of the main reason is because it gives me the most bang for my buck. Java people can immediately catchup with the syntax, and step by step leverage powerful features available by dynamic languages and domain specific languages. I was hoping to see a great adoption by SUN... It is one thing to support scripting with the [JSR-223](http://jcp.org/en/jsr/detail?id=223), but SUN has to "endorse" a scripting, and from what could be seen today it is not Groovy nor Javascript. When we see all the marketing noise it is Ruby with [JRuby](http://jruby.codehaus.org/)... And I do not think that is necessary good for the Java platform.


Do not get me wrong, I think that is a great idea, and need for Java to be able to execute many languages, for example we see a lot of IBM WAS and BEA WL administrator using Python to administer their application server instance with Jython. But once again the "default" one should be close to Java and integrate with it as close as possible to reduce the impact on scalability and performances, and I do think that Groovy did a great job on these topics.

### What about RubyOnRails?

I am not a [RoR](http://rubyonrails.com/) expert, far far away from it, but I have learned it, and developed small applications with it, and I have to say that I love this framework.  And I am sure that like many Java developers that used RoR, I was thinking:  "If only I had the same productivity in my favorite platform: J2EE...".

I was not expecting to run RoR application as-it-is, but more hoping that JavaEE will learn from RoR to simplify development...  And... somebody did it, with [Grails](http://grails.codehaus.org/). [Grails](http://grails.codehaus.org/) takes inspiration from RoR, but in a "real" JavaEE environment, since it leverages key pieces of the current Java applications such as Hibernate and Spring, using the power of Groovy to glue all this together.

### In conclusion...

I do not know for you but yes I do think that SUN should drop support for [JRuby](http://jruby.codehaus.org/), and in place push a language more natural for existing Java Developers, I vote for [Groovy](http://groovy.codehaus.org/). In addition to the language itself, I also expect the JavaEE EG to provide a more productive way of developing "simple" Web applications. This is where I see [Grails](http://grails.org/) coming in the picture, but many other framework could do the job, taking advantage of some interesting concepts of RoR...

As Rick says, I (we?) am not looking for a Revolution but for an Evolution.
