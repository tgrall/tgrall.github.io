---
title: "Moving my beers from Couchbase to MongoDB"

categories: mongodb nosql couchbase java
---

Few days ago I have posted a *joke* on Twitter

<blockquote class="twitter-tweet" lang="en"><p>Moving my Java from Couchbase to MongoDB <a href="http://t.co/Wnn3pXfMGi">pic.twitter.com/Wnn3pXfMGi</a></p>&mdash; Tugdual Grall (@tgrall) <a href="https://twitter.com/tgrall/status/559664540041117696">January 26, 2015</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

So I decided to move it from a simple picture to a *real* project. Let's look at the two phases of this so called project:

* Moving the data from Couchbase to MongoDB
* Updating the application code to use MongoDB

Look at this screencast to see it in action:

<iframe width="675" height="380" src="https://www.youtube.com/embed/Fpl74Z0HbC0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<!-- truncate -->

## Moving the data

I have created a replication server, that uses the Couchbase XDCR protocol to get the document out and insert them into MongoDB. This server use the Couchbase CAPI Server project available [here](https://github.com/couchbaselabs/couchbase-capi-server).

This server will receive all the mutations made in the Couchbase:

* When a document is inserted or updated the full document is sent
* When a document is deleted, only the medata are sent
* The `replication server`, save the data into MongoDB (inserts and/or updates - no delete), and then return the list to Couchbase as part of the XDCR Protocol.

One of the challenges is the fact Couchbase does not have the notion of "types" or "collections". You put everything in a *bucket* and the application code knows how to deal with the data. Not necessary a problem, just a choice of implementation, but make it sometime harder than expected when you want to write tools. So here the logic that I apply in my replication server, to organize the data in multiple collections when it makes sense *(and when it is possible)*:

* If the JSON document does not contains a *type field*, all the documents will be saved in a single collection
* If the JSON document contains a *type field* then a collection will be created for each type and documents will be inserted/updated in these collections
* MongoDB does not allow attributes key to have . and $ signs, so it is necessary to change the name with alternative characters. This is done automatically during the copy of the data.

All this, and more is configurable in the tool.

As you can see in the screencast this is straightforward.*(note that I have only tested very simple use cases and deployment)*

You can download the tool and the source code here:

* [https://github.com/tgrall/mongodb-cb-replicator](https://github.com/tgrall/mongodb-cb-replicator)
* Download the [MongoCBReplicator.jar](http://goo.gl/WkuHBk) file.


## Updating the application code

The next step is to use these data in an application. For this I simply use the Beer Sample Java application available on [Couchbase repository](https://github.com/couchbaselabs/beersample-java).

I just recreated the project and modified few things, to get the application up and running:

* Change the connection string
* Remove the code that generate views
* Replace set/get by MongoDB operations
* Replace call to the views by simple queries

The code of the MongoDBeer application is available here:

* [https://github.com/tgrall/mongodbeer]

I did not change any business logic, or added features, or even replaced the way navigation and page rendition is made. I just focused on the database access, for example :

``` java

// Couchbase Query
View view = client.getView("beer", "by_name");
    Query query = new Query();
    query.setIncludeDocs(true).setLimit(20);
    ViewResponse result = client.query(view, query);

    ArrayList<HashMap<String, String>> beers =
      new ArrayList<HashMap<String, String>>();
    for(ViewRow row : result) {
      HashMap<String, String> parsedDoc = gson.fromJson(
        (String)row.getDocument(), HashMap.class);

      HashMap<String, String> beer = new HashMap<String, String>();
      beer.put("id", row.getId());
      beer.put("name", parsedDoc.get("name"));
      beer.put("brewery", parsedDoc.get("brewery_id"));
      beers.add(beer);
    }
    request.setAttribute("beers", beers);


// MongoDB Query
DBCursor cursor = db.getCollection("beer").find()
                                                   .sort( BasicDBObjectBuilder.start("name",1).get() )
                                                   .limit(20);
     ArrayList<HashMap<String, String>> beers =
             new ArrayList<HashMap<String, String>>();
     while (cursor.hasNext()) {
         DBObject row = cursor.next();
         HashMap<String, String> beer = new HashMap<String, String>();
         beer.put("id", (String)row.get("_id"));
         beer.put("name", (String)row.get("name"));
         beer.put("brewery", (String)row.get("brewery_id"));
         beers.add(beer);
     }



// Couchbase update
client.set(beerId, 0, gson.toJson(beer));

// MongoDB update
db.getCollection("beer").save(new BasicDBObject(beer));

```

I did not attend to optimize the MongoDB code,  but just to replace as few lines of code as possible.


Note: I have not created any index during the process. Obviously if your application have more and more data and you do intense work with it you must analyze your application/queries to see which indexes must be created.

## Adding new features

Once you have the data into MongoDB you can do a lot more without anything more than MongoDB:

#### Full Text Search

You can create a Text index on various fields in the collection to provide advanced search capabilities to your users.

``` json
db.brewery.ensureIndex(
  {
    "name" : "text",
    "description" : "text"
  },
  {
    "weights" :
    {
      "name" : 10,
      "description" : 5
    },
    "name" : "TextIndex"
  }

);
```

Then you can query the database using the `$text` operation, for example all breweries with *Belgium* and without *Ale*

``` json
db.brewery.find( { "$text" : { "$search" : "belgium -ale" }   }  , { "name" : 1  } );
{ "_id" : "daas", "name" : "Daas" }
{ "_id" : "chimay_abbaye_notre_dame_de_scourmont", "name" : "Chimay (Abbaye Notre Dame de Scourmont)" }
{ "_id" : "brasserie_de_cazeau", "name" : "Brasserie de Cazeau" }
{ "_id" : "inbev", "name" : "InBev" }
{ "_id" : "new_belgium_brewing", "name" : "New Belgium Brewing" }
{ "_id" : "palm_breweries", "name" : "Palm Breweries" }
```


#### Some analytics

Not sure these queries really make sense, but it is just to show that now you can leverage your documents without the need of any 3rd party tool.

Number of beer by category, from the most common to the less one:

``` json
db.beer.aggregate([
  {"$group" : { "_id" : "$category","count" : {"$sum" : 1 } } },
  {"$sort" : { "count" : -1 } },
  {"$project" : {	"category" : "$_id", "count" : 1, "_id" : 0 } }
]);

{ "count" : 1996, "category" : "North American Ale" }
{ "count" : 1468, "category" : null }
{ "count" : 564, "category" : "North American Lager" }
{ "count" : 441, "category" : "German Lager" }
...
...
```

Number of beer of a specific ABV by brewery, for example: top 3 breweries with the most beer with an abv greather or equals to a value, let's say 5:

``` json
db.beer.aggregate([
... { "$match" : { "abv" : { "$gte" : 5 }  } },
... { "$group" : { "_id" : "$brewery_id", "count" : { "$sum" : 1} }},
... { "$sort" : { "count" : -1 } },
... { "$limit" : 3 }
... ])

{ "_id" : "midnight_sun_brewing_co", "count" : 53 }
{ "_id" : "troegs_brewing", "count" : 33 }
{ "_id" : "rogue_ales", "count" : 31 }
```

#### Geospatial queries

The first thing to do with the data is to change the data structure to save the various data into a GeoJSON format, for this we can simply use a script into the MongoDB Shell:

``` json
>mongo

use beers

db.brewery.find().forEach(
  function( doc ) {
    var loc = { type : "Point" };
    if (doc.geo && doc.geo.lat && doc.geo.lon) {
      loc.coordinates = [ doc.geo.lon , doc.geo.lat  ];
      db.brewery.update( { _id : doc._id } , {$set : { loc : loc } }  );
    }
  }
);

db.brewery.ensureIndex( { "loc" : "2dsphere" } );

```

This call take all the breweries and add a new attribute, name `loc` as a GeoJSON point. I could also chose to remove the old geo information using a '$unset', but I did not; let's imagine that some API/applications are using it. This is a good example of flexible schema.

Now I can search for all the brewery that are at less than 30km from the Golden Gate in San Francisco: [-122.478255,37.819929]

``` json
db.brewery.find(
  { "loc" :
    { "$near" :
      { "$geometry" :
        {
          "type" : "Point",
          "coordinates" : [-122.478255,37.819929]
        },
        "$maxDistance" : 20000

      }
    }
  }
  , { name : 1 }  
)
```

You can also use Geospatial indexes and operators in the aggregation queries used above


## Conclusion

As as said in the introduction, this week end project started as a joke on Twitter, and finished with a small blog post and Gitub repositories.

My goal here is not to compare the two solutions -I made my choice few months back-  but simply show how you can move from one to the other with almost no effort, not only the data but also the application code.
