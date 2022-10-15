---
title: "Couchbase 101: Create views (MapReduce) from your Java application"

categories: nosql couchbase java
---
When you are developing a new applications with Couchbase 2.0, you sometimes need to create view dynamically from your code. For example you may need this when you are installing your application, writing some test, or you can also use that when you are building frameworks, and wants to dynamically create views to query data. This post shows how to do it.

### Prerequisites

*   [Couchbase Server 2.0](http://www.couchbase.com/download)
*   [Couchbase Jave Client Library 1.1.x](http://www.couchbase.com/develop/java/current)
*   [Beer Sample dataset](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-sampledata-beer.html)

If you are using Maven you can use the following information in your `pom.xml` to add the Java Client library:

``` xml
<repositories>
  <repository>
    <id>couchbase</id>
    <name>Couchbase Maven Repository</name>
    <layout>default</layout>
    <url>http://files.couchbase.com/maven2/</url>
    <snapshots>
      <enabled>false</enabled>
    </snapshots>
  </repository>
</repositories>

<dependencies>
  <dependency>
    <groupid>couchbase</groupid>
    <artifactid>couchbase-client</artifactid>
    <version>1.1.0</version>
    <type>jar</type>
  </dependency>
</dependencies>
```


See online at [https://gist.github.com/4337172](https://gist.github.com/4337172)

### Create and Manage Views From Java


The full Maven project is available on [Github](https://github.com/tgrall/couchbase-java-101/tree/master/java-document-design/).

#### Connect to Couchbase Cluster

The first thing to do when you want to create a view from Java is obviously to connect to the cluster.

``` java
import com.couchbase.client.CouchbaseClient;
...

List<uri> uris = new LinkedList<uri>();
uris.add(URI.create("http://127.0.0.1:8091/pools"));
CouchbaseClient client = null;
try {
  client = new CouchbaseClient(uris, "beer-sample", "");

  // put your code here

  client.shutdown();

  } catch (Exception e) {
    System.err.println("Error connecting to Couchbase: " + e.getMessage());
    System.exit(0);
  }
...
```


1.  Create a list of URIs to different nodes of the cluster - lines 5-6. (In this example I am working on a single node)
2.  Connect to the bucket, in our case `beer-sample` -line 9. You can include the password if the bucket is protected ( this is not the case here so I am sending an empty string)

If you are looking for more information about Couchbase and Java, you can read this article from DZone : [Hello World with Couchbase and Java](http://architects.dzone.com/articles/hello-world-couchbase-and-java).

Let's now talk about Couchbase views. You use views/map-reduce functions to index and query data from Couchbase Server based on the content of the JSON document you store inside Couchbase. For more information about views you can look at the ["view basics" chapter](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-basics.html) of the Couchbase Server Manual.

#### Create Views from Java

Creating a view from Java is really easy : the Java Client Library contains all the classes and methods to do it. As a concrete use case we will use the Application that is described in the [Couchbase Java Tutorial](http://www.couchbase.com/docs/couchbase-sdk-java-1.1/tutorial.html).

When you follow this tutorial, you need to manually create some views, as you can see [here](http://www.couchbase.com/docs/couchbase-sdk-java-1.1/preps-views.html). In this example, we will create our map function and directly in our Java code and then store it to Couchbase Server. The tutorial asks you to create the following artifacts:

* a view named "by_name"
* in the design document named `"dev_beer"` (development mode)
* and the map function which looks like the following :

``` js
function (doc, meta) {
  if(doc.type && doc.type == "beer") {
    emit(doc.name, null);
  }
}
```

The following code allows you to do it from Java:

``` java
import com.couchbase.client.protocol.views.DesignDocument;
import com.couchbase.client.protocol.views.ViewDesign;
...
DesignDocument designDoc = new DesignDocument("dev_beer");

String viewName = "by_name";
String mapFunction =
"function (doc, meta) {\n" +
"  if(doc.type && doc.type == \"beer\") {\n" +
"    emit(doc.name);\n" +
"  }\n" +
"}";

ViewDesign viewDesign = new ViewDesign(viewName,mapFunction);
designDoc.getViews().add(viewDesign);
client.createDesignDoc( designDoc );
...
```

* Create a design document using the `com.couchbase.client.protocol.views.DesignDocument` class - line 4.
* Create a view using `com.couchbase.client.protocol.views.ViewDesign` class with a name and the map function - line 14.
* You can add this view to a design document - line 15
* Finally save the document into the cluster using the `CouchbaseClient.createDesignDoc` method.

If you need to use a reduce function (built-in or custom) you just need to pass to the ViewDesign constructor as 3rd parameter.

When developing view, from Java or from any other tool/language be sure you understand what are the best practices, and the life cycle of the index. This is why I am inviting you to take a look to the following chapters in the Couchbase documentation:


*   [View Writing Best Practice](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-writing-bestpractice.html) : for example in the map function, I do not emit any value. I only emit a key (the beer name).
*   [Views and Stored Data](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-datastore.html)
*   [Development and Production Views](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-types.html) : in the view above, I have created the view in the development environment (`dev_` prefix) allowing me to test and use it on a subset of the data (cluster/index)


#### Using the view

First of all, the view that you just created is in "development mode", and by default the Java client SDK will only access the view when it is in "production mode". This means that when you are calling a view from your application it will search it into the production environment. So before connecting to Couchbase cluster you need to setup the `viewmode` to development.

This is done using the `viewmode` environment variable from the Java SDK, that could be set using the following methods:

* In your code, add this line **before** the client connects to the cluster : `System.setProperty("viewmode", "development");`
* At the command line `-Dviewmode=development`
* In a properties file `viewmode=development`

Once it is done you can call the view using the following code:

``` java
import import com.couchbase.client.protocol.views.*;

...
System.setProperty("viewmode", "development"); // before the connection to Couchbase
...
View view = client.getView("beer", "by_name");
Query query = new Query();
query.setIncludeDocs(true).setLimit(20);
query.setStale( Stale.FALSE );
ViewResponse result = client.query(view, query);
for(ViewRow row : result) {
  row.getDocument(); // deal with the document/data
}
...
```

This code queries the view you just created. This means Couchbase Server will generate an index based on your map function, will query the server for results. In this case, we specifically want to set a limit of 20 results and also get the most current results by setting Stale.FALSE.

* Set the `viewmode` to `development` - line 4
* Get the view using the `CouchbaseClient.getView()` method -line 6-. As you can see I just use the name beer for the design document (and not dev_beer, Couchbase will know where to search since I am in development mode)
* Create a query and set a limit (20) and ask the SDK to return the document itself
`setIncludeDocs(true)` -line 8- The document will be returned from Couchbase server in the most efficient way
* Ask the system to update the index before returning the result using query.setStale( Stale.FALSE `); `-line 9-. Once again be careful when you use setStale method. Just to be sure here is the documentation about it : [Index Updates and the stale Parameter](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-writing-stale.html)
* Execute the query - line 10
* And use the result - lines 11-13

### Conclusion

In this article, you have learned:

* How to create Couchbase views from Java
* Call this view from Java
* Configure development/production mode views from Couchbase Java Client Library


This example is limited to the creation of a view, you can take a look to the other methods related to design documents and views if you want to manage your design documents : `getDesignDocument()`, `deleteDesignDocument()`, ...
