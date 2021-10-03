---
title: "Screencast : Fun with Couchbase MapReduce and Twitter"

categories: couchbase twitter nosql
---
I have created this simple screencast to show how you can, using Couchbase do some realtime analysis based on Twitter feed.

The key steps of this demonstration are

1.  Inject Tweets using a simple program available on my Github [Couchbase-Twitter-Injector](https://github.com/tgrall/couchbase-twitter-injector)
2.  Create views to index and query the Tweets by
    * User name
    * Tags
    * Date

The views that I used in this demonstration are available at the bottom of this post.

<iframe width="675" height="380" src="https://www.youtube.com/embed/X167R0TV5QE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Views:

{% gist 1df10b10c9dd387995cb )
