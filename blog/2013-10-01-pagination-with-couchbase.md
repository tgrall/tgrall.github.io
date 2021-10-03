---
title: "Pagination with Couchbase"

categories: couchbase nosql json
---
If you have to deal with a large number of documents when doing queries against a Couchbase cluster it is important to use pagination to get rows by page. You can find some information in the documentation in the chapter "[Pagination](http://docs.couchbase.com/couchbase-manual-2.2/#pagination)", but I want to go in more details and sample code in this article.

For this example I will start by creating a simple view based on the `beer-sample` dataset, the view is used to find brewery by country:

``` js
function (doc, meta) {
  if (doc.type == "brewery" &amp;&amp; doc.country){
    emit(doc.country);
  }
}
```


This view list all the breweries by country, the index looks like:


<table>
<tbody>
<tr><th>Doc id</th><th>Key</th><th>Value</th></tr>
<tr><td>bersaglier</td><td>Argentina</td><td>null</td></tr>
<tr><td>cervecera_jerome</td><td>Argentina</td><td>null</td></tr>
<tr><td>brouwerij_nacional_balashi</td><td>Aruba</td><td>null</td></tr>
<tr><td>australian_brewing_corporation</td><td>Australia</td><td>null</td></tr>
<tr><td>carlton_and_united_breweries</td><td>Australia</td><td>null</td></tr>
<tr><td>coopers_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>foster_s_australia_ltd</td><td>Australia</td><td>null</td></tr>
<tr><td>gold_coast_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>lion_nathan_australia_hunter_street</td><td>Australia</td><td>null</td></tr>
<tr><td>little_creatures_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>malt_shovel_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>matilda_bay_brewing</td><td>Australia</td><td>null</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
<tr><td>yellowstone_valley_brewing</td><td>United States</td><td>null</td></tr>
<tr><td>yuengling_son_brewing</td><td>United States</td><td>null</td></tr>
<tr><td>zea_rotisserie_and_brewery</td><td>United States</td><td>null</td></tr>
<tr><td>fosters_tien_gang</td><td>Viet Nam</td><td>null</td></tr>
<tr><td>hue_brewery</td><td>Viet Nam</td><td>null</td></tr>
</tbody></table>


So now you want to navigate in this index with a page size of 5 rows.

<!--more-->

### Using skip / limit Parameters

The most simplistic approach is to use <span style="font-family: Courier New, Courier, monospace;">limit</span> and <span style="font-family: Courier New, Courier, monospace;">skip</span> parameters for example:

Page 1 : `?limit=5&amp;skip0`  
Page 2 : `?limit=5&amp;skip=5`
...
Page x : `?limit=5&amp;skip(limit*(page-1))`

You can obviously use any other parameters you need to do range or key queries (`startkey/endkey, key, keys`) and sort option (`descending`).

This is simple but not the most efficient way, since the query engine has to read all the rows that match the query, until the skip value is reached.

Some code sample in python that paginate using this view :

{% gist 6174762 )

This application loops on all the pages until the end of the index.

As I said before this is not the best approach since the system must read all the values until the skip is reached. The following example shows a better way to deal with this.

### Using startkey / startkey_docid parameters

To make this pagination more efficient it is possible to take another approach. This approach uses the  `startkey` and `startkey_docid`  to select the proper documents.

* `The startkey` parameter will be the value of the key where the query should start to read (based on the last key of the "previous page"
* Since for a key for example "Germany" you may have one or more ids (documents) it is necessary to say to Couchbase query engine where to start, for this you need to use the `startkey_docid` parameter, and ignore this id since it is the last one of the previous page.

So if we look at the index, and add a row number to explain the pagination


<table>
<tbody>
<tr><th>Row num</th><th>Doc id</th><th>Key</th><th>Value</th></tr>
<tr><td colspan="4"><br />
Query for page 1<br />
<span style="font-family: Courier New, Courier, monospace;">?limit=5</span></td></tr>
<tr><td>1</td><td></td><td>bersaglier</td><td>Argentina</td><td>null</td></tr>
<tr><td>2</td><td></td><td>cervecera_jerome</td><td>Argentina</td><td>null</td></tr>
<tr><td>3</td><td></td><td>brouwerij_nacional_balashi</td><td>Aruba</td><td>null</td></tr>
<tr><td>4</td><td></td><td>australian_brewing_corporation</td><td>Australia</td><td>null</td></tr>
<tr><td>5</td><td></td><td>carlton_and_united_breweries</td><td>Australia</td><td>null</td></tr>
<tr><td colspan="4">
Query for page 2<br />
<span style="font-family: Courier New, Courier, monospace;">?limit=5&amp;startkey="Australia"&amp;startkey_docid=carlton_and_united_breweries&amp;skip=1</span>
</td></tr>
<tr><td>6</td><td></td><td>coopers_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>7</td><td></td><td>foster_s_australia_ltd</td><td>Australia</td><td>null</td></tr>
<tr><td>8</td><td></td><td>gold_coast_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>9</td><td></td><td>lion_nathan_australia_hunter_street</td><td>Australia</td><td>null</td></tr>
<tr><td>10</td><td></td><td>little_creatures_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td colspan="4"><br />
Query for page 3<br />
<span style="font-family: Courier New, Courier, monospace;">?limit=5&amp;startkey="Australia"&amp;startkey_docid=little_creatures_brewery</span><span style="font-family: 'Courier New', Courier, monospace;">&amp;skip=1</span>
</td></tr>
<tr><td>11</td><td></td><td>malt_shovel_brewery</td><td>Australia</td><td>null</td></tr>
<tr><td>12</td><td></td><td>matilda_bay_brewing</td><td>Australia</td><td>null</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
<tr><td>...</td><td>...</td><td>...</td></tr>
<tr><td>...</td><td></td><td>yellowstone_valley_brewing</td><td>United States</td><td>null</td></tr>
<tr><td>...</td><td></td><td>yuengling_son_brewing</td><td>United States</td><td>null</td></tr>
<tr><td>...</td><td></td><td>zea_rotisserie_and_brewery</td><td>United States</td><td>null</td></tr>
<tr><td>...</td><td></td><td>fosters_tien_gang</td><td>Viet Nam</td><td>null</td></tr>
<tr><td>...</td><td></td><td>hue_brewery</td><td>Viet Nam</td><td>null</td></tr>
</tbody></table>

So as you can see in the examples above, the query uses the startkey, a document id, and just passes it using skip=1.

Let's now look at the application code, once again in Python

{% gist 6176322 )

This application loops on all the pages until the end of the index

Using this approach, the application start to read the index at a specific key (`startkey` parameter), and only loop on the necessary entry in the index. This is more efficient than using the simple skip approach.  
#### Views with Reduce function

When your view is using a reduce function, if you want to paginate on the various keys only (with the reduce function) you need to use the `skip` and `limit` parameters.

When you are using the  paramater `startkey_docid` with a reduce function it will calculate the reduce only to the subset of document ids that are part of your query.

### Couchbase Java SDK Paginator

In the previous examples, I have showed how to do pagination using the various query parameters. The Java SDK provides a Paginator object to help developers to deal with pagination. The following example is using the same view with the Paginator API.

{% gist 6774932 )

So as you can see you can easily paginate on the results of a Query using the Java Paginator.

* At the line #37, the Paginator is created from using the view and query objects and a page size is specified
* Then you just need to use the hasNext() and next() methods to navigate in the results.

The Java Paginator  is aware of the fact that they query is using a reduce or not, so you can use it with all type of queries - Internally it will switch between the skip/limit approach and the doc_id approaches. You can [see how it is done in the Paginator class](https://github.com/couchbase/couchbase-java-client/blob/1.1.9/src/main/java/com/couchbase/client/protocol/views/Paginator.java#L176-L195).

Note that if you want to do that in a Web application between HTTP request you must keep the Paginator object in the user session since the current API keeps the current page in its state.

### Conclusion

In this blog post you have  learned how to deal with pagination in Couchbase views; to summarize

* The pagination is based on some specific parameters that you send when executing a query.
* Java developers can use the [Paginator](http://www.couchbase.com/autodocs/couchbase-java-client-1.2.0/com/couchbase/client/protocol/views/Paginator.html) class that simplifies pagination.

I am inviting you to look at the new Couchbase Query Language N1QL, still under development, that will provide more options to developers including pagination, using LIMIT &amp; OFFSET parameters, for example:

``` sql
SELECT fname, age
FROM tutorial
WHERE age > 30
LIMIT 2
OFFSET 2
```

If you want to learn more about N1QL:

* [N1QL on Couchbase Community Portal](http://query.couchbase.com/)
* [N1QL Online Tutorial](http://query.pub.couchbase.com/tutorial/)
