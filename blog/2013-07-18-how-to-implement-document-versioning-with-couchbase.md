---
title: "How to implement Document Versioning with Couchbase"

categories: couchbase java nosql json
---
###  Introduction

Developers are often asking me how to "version" documents with Couchbase 2.0. The short answer is: the clients and server do not expose such feature, but it is quite easy to implement.

In this article I will use a basic approach, and you will be able to extend it depending of your business requirements.

<!-- truncate -->

###  Design

The first thing to do is to select how to "store/organize" the versions of your document, and for this you have different designs:

*   copy the versions the document into new documents
*   copy the versions of the document into a list of embedded documents
*   store the list of attributes that have been changed into a embedded element (or new documents)
*   store the "delta"
*   …

You will have to chose the design based on your application requirements (business logic, size of the dataset, ...).  For this article, let's use one of the most simplistic approach: create new document for each version with the following rules for the keys:

1.  The current version is is a simple Key/Document, no change to the key.
2.  The version is a copy of the document, and the version number is added to the key.

This looks like:

```
Current Version   mykey
Version 1         mykey::v1
Version 2         mykey::v2
...	              ...
```

With this approach, existing applications will always use the current version of the document, since the key is not changed. But this approach creates new documents that will be indexed by existing views.

For example, in the Beer Sample application, the following view is used to list the beer by name:

``` js
function (doc, meta) {
  if(doc.type &amp;&amp; doc.type == "beer") {
    emit(doc.name);
  }
}
```

It is quite simple to "support" versioning without impacting the existing code, except the view itself. The new view needs to emit keys,value only for the current version of the document. This is the new view code:

```
function (doc, meta) {
  if(doc.type &amp;&amp; doc.type == "beer" &amp;&amp; (meta.id).indexOf("::v") == -1   ) {
    emit(doc.name);
  }
}
```

With this change the existing applications that are using this view will continue to work with the same behavior.

### Implementing the versioning

Based on this design, when the application needs to version the document, the following logic should happen:

1.  Get the current version of the document
2.  Increment the version number (for example using another key that maintains the version number for each document)
3.  Create the version with the new key  "mykey::v1"
4.  Save the document current version

Let's look at the code in Java


``` java
Object obj = client.get(key);
if (obj != null) {
  // get the next version, create or use the key: mykey_version
  long version = client.incr(key + "_version", 1, 1);
  String keyForVersion = key + "::v" + version; // mykey::v1
  try {
    client.set(keyForVersion, obj).get();
    } catch (Exception e) {
      logger.severe("Cannot save version "+ version + " for key "+ key +" - Error:"+ e.getMessage() );
    }
  }
  client.set(key, value);
```

Quite simple isn't?

The application can access the document using the key, but also get one version or the list of all versions, this is one of the reasons why it is interesting to create a key (<span style="font-family: Courier New, Courier, monospace;">mykey_version</span>), and use it also to delete documents and related versions.

Based on the previous comment, the delete operation looks like:

``` java
Object obj = client.get(key);
// need to delete all the version first
Object vObject = this.get(key + "_version");
if (vObject != null) {
  long biggerVersion = Long.parseLong((String) vObject);
  try {
    // delete all the versions
    for (int i = 1; i <= biggerVersion; i++) {
      String versionKey = key + "::v" + i;
      client.delete(versionKey).get();
    }
    // delete the counter
    client.delete(key + "_version").get();
  } catch (InterruptedException e) {
    e.printStackTrace();
  } catch (ExecutionException e) {
    e.printStackTrace();
  }
}
client.delete(key);
```

#### Use versioning

As an example, I have created a small library available on GitHub [https://github.com/tgrall/couchbase-how-to-versioning](https://github.com/tgrall/couchbase-how-to-versioning), this library extends the Couchbase Client and overrides some of the operations : set, replace and delete. (the basic one: no TLL, no durability) As I said before this is just an example.


*Build and Install*

```
git clone https://github.com/tgrall/couchbase-how-to-versioning.git
cd how-to-versioning
mvn clean install
```

Then add this library to your project in addition to Couchbase Java Client, for example in your pom.xml

``` xml
...
<dependency>
  <groupid>com.couchbase.howtos</groupid>
  <artifactid>couchbase-how-to-versioning</artifactid>
  <version>1.0-SNAPSHOT</version>
</dependency>
<dependency>
  <groupid>couchbase</groupid>
  <artifactid>couchbase-client</artifactid>
  <version>1.1.8</version>
</dependency>

...
```

*Code your application*

Create a document and version it:

``` java
List<uri> uris = new LinkedList<uri>();
uris.add(URI.create("http://127.0.0.1:8091/pools"));
CouchbaseClientWithVersioning client = null
try {
  client = new CouchbaseClientWithVersioning(uris, "default", "");
  String key = "key-001";
  client.set(key, "This is the original version");
  System.out.printf("Original '%s' .\n", client.get(key));
  client.set(key, "This is a new version", true); // create a new version
  System.out.printf("Current Version '%s' .\n", client.get(key));
  System.out.printf("Version 1 '%s' .\n", client.get(key, 1));
  client.set(key, "This is another version", true); // create a new version
  System.out.printf("All versions %s .\n", client.getAllVersions(key));
  client.deleteVersion(key, 1); // create a new version
  System.out.printf("All versions %s (after delete 1 version).\n", client.getAllVersions(key));
  client.delete(key); // create a new version
  System.out.printf("All versions %s (after delete the main key).\n", client.getAllVersions(key));
} catch (Exception e) {
  e.printStackTrace();
}
if (client !=null) {
  client.shutdown();
}
```

Quick explanation:

*   Line 5: instead of using the `CouchbaseClient`, the application uses the extended `CouchbaseClientWithVersioning` class.
*   Line 7: create a new entry
*   Line 9: create a new version, the boolean value to "true" force the versioning of the document
*   The application use other methods such as get a specific version (line 11), get all versions (line 13), delete a specific version (line 14), and finally delete the key and all versions (line 16).


So using this approach the developer controls explicitly when to create a version, since he has to add the boolean parameter in the set operation. In this small sample library it is also possible to do auto versioning, in this case all set and replace calls will create a version, to achieve that the developer just needs to call the setAutoVersioning(true) method. Something like:

``` java
client = new CouchbaseClientWithVersioning(uris, "default", "");
client.setAutomaticVersionning(true);
```

With this approach you can provide versioning to your application with minimal code change. You can test it in the Beer Sample application, just do not forget to change the views as documenter above to only return _current_ version of the documents.

### Conclusion

As you can see doing versioning in Couchbase is not that complicated, but it is something that must be done by your application based on its requirements and constraints. You have many different solution and none of these options is perfect for all use cases.

In this specific sample code, I am working with a simple design where I create a copy of the documents for each version. With this approach also, it is interesting to mention that you can version "anything", not only JSON document but also any values.  As I said before, this is one possible approach, and like any design, it has some impact on the application or database, in this case most the database:

*   Increase the number of keys and documents
*   Double - or more- the number of operations, for example when updating a document, the application needs to get the current value, create a version, save the current version.
*   Consistency management when adding new version and incrementing the version number (need to deal with errors when creating a new version, deleting the versions and counter....)

Many features could be added to this easily, for example:

*   Limit to a specific number of version,
*   Enable the versioning only of replace() operation
*   Add specific attribute about versions in JSON document (for example date of the version)
*   ....

If you are using versioning in your Couchbase application feel free to comment or write a small article that describes the way your are doing it.
