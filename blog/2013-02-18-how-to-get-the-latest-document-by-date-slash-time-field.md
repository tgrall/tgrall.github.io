---
title: "How to get the latest document by date/time field?"

categories: couchbase json views nosql
---
I read this question on Twitter, let me answer the question in this short article.

First of all you need to be sure your documents have an attribute that contains a date ;), something like :

{% gist 178061fa19ca5fc81508 )

To get the "latest hired employee" you need to create a view, and emit the hire date as key. The important part is to check that this date is emitted in a format that is sorted properly, for example an array of value using dateToArray function, or the time as numerical value. In the following view I am using the date as an array like that I will be able to do some grouping but this is another topic. The view looks like the following:

{% gist 02fb7123c5e444b5107c )

Now that you have a view. You can now query it using the parameters:

*   descending = true
*   limit = 1

If you use Java SDK the code will look like the following :

{% gist 3e872557d8a5af454c2b )

Finally it is important when you work with views to understand how the index are managed by the server so be sure your read the chapter "[Index Updates and the stale Parameter](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-writing-stale.html)".
