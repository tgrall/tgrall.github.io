---
title: "How to get the latest document by date/time field?"

categories: couchbase json views nosql
---
I read this question on Twitter, let me answer the question in this short article.

First of all you need to be sure your documents have an attribute that contains a date ;), something like :

```json
{
  "type" : "emp",
  "id":"001",
  "name":"John Doe",
  "hiredate":"Jan 1, 2013 8:32:00 AM"
}
```


To get the "latest hired employee" you need to create a view, and emit the hire date as key. The important part is to check that this date is emitted in a format that is sorted properly, for example an array of value using dateToArray function, or the time as numerical value. In the following view I am using the date as an array like that I will be able to do some grouping but this is another topic. The view looks like the following:

```javascript
function (doc, meta) {
  if (doc.hiredate) {
    emit( dateToArray(doc.hiredate) );
  }
}
```

Now that you have a view. You can now query it using the parameters:

*   descending = true
*   limit = 1

If you use Java SDK the code will look like the following :

```java
import com.couchbase.client.protocol.views.Query;
import com.couchbase.client.protocol.views.View;
import com.couchbase.client.protocol.views.ViewResponse;
import com.couchbase.client.protocol.views.ViewRow;
...
...
...

  View view = cb.getView("employees", "by_hiredate");
  Query query = new Query();
  query.setIncludeDocs(true);
  query.setLimit(1);
  query.setDescending(true);
  ViewResponse viewResponse = cb.query(view, query);
  for (ViewRow row : viewResponse) {
    String documentJson = row.getDocument();
  }
```

Finally it is important when you work with views to understand how the index are managed by the server so be sure your read the chapter "[Index Updates and the stale Parameter](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-writing-stale.html)".
