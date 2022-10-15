---
title: "Introduction to MongoDB Geospatial feature"

categories: mongodb nosql json geo
---
This post is a quick and simple introduction to Geospatial feature of MongoDB 2.6 using simple dataset and queries.

###  Storing Geospatial Informations

As you know you can store any type of data, but if you want to query them you need to use some coordinates, and create index on them. MongoDB supports three types of indexes for GeoSpatial queries:

* [2d Index](http://docs.mongodb.org/manual/core/2d/) : uses simple coordinate (longitude, latitude). As stated in the documentation: _The 2d index is intended for legacy coordinate pairs used in MongoDB 2.2 and earlier_. For this reason, I won't detail anything about this in this post. Just for the record 2d Index are used to query data stored as points on a two-dimensional plane
* [2d Sphere Index](http://docs.mongodb.org/manual/core/2dsphere/) : support queries of any geometries on an-earth-like sphere, the data can be stored as GeoJSON and legacy coordinate pairs (longitude, latitude). For the rest of the article I will use this type of index and focusing on GeoJSON.
* [Geo Haystack](http://docs.mongodb.org/manual/core/geohaystack/) : that are used to query on very small area. It is today less used by applications and I will not describe it in this post.
So this article will focus now on the 2d Sphere index with GeoJSON format to store and query documents.

*So what is GeoJSON?*

You can look at the [http://geojson.org/](http://geojson.org/) site, let's do a very short explanation. GeoJSON is a format for encoding, in JSON, a variety of geographic data structures, and support the following types:  Point , LineString , Polygon , MultiPoint , MultiLineString , MultiPolygon and Geometry.

The GeoJSON format  is quite straightforward based, for the simple geometries, on two attributes: type and coordinates. Let's take some examples:


The city where I spend all my childhood, Pleneuf Val-André, France, has the following coordinates (from Wikipedia)

`48° 35′ 30.12″ N, 2° 32′ 48.84″ W`

This notation is a point, based on a latitude &amp; longitude using the [WGS 84](http://en.wikipedia.org/wiki/World_Geodetic_System) (Degrees, Minutes, Seconds) system. Not very easy to use by application/code, this is why it is also possible to represent the exact same point using the following values for latitude &amp; longitude:

`48.5917, -2.5469`

This one uses the [WGS 84](http://en.wikipedia.org/wiki/World_Geodetic_System) (Decimal Degrees) system. This is the coordinates you see use in most of the application/API you are using as developer (eg: Google Maps/Earth for example)

By default GeoJSON, and MongoDB use these values but **the coordinates must be stored in the longitude, latitude order**, so this point in GeoJSON will look like:

``` json
{
  "type": "Point",
  "coordinates": [
  -2.5469,  
  48.5917
  ]
}
```

![](http://2.bp.blogspot.com/-0GfvAvSgLM8/U_NwAR_BCpI/AAAAAAAAArI/INweKtutfDQ/s1600/01-geojson-point.png )

This is a simple "Point", let's now for example look at a line, a very nice walk on the beach :

``` json
{
  "type": "LineString",
  "coordinates": [
    [-2.551082,48.5955632],
    [-2.551229,48.594312],
    [-2.551550,48.593312],
    [-2.552400,48.592312],
    [-2.553677, 48.590898]
  ]
  }
```


http://1.bp.blogspot.com/-dg_myaJAG-c/U_Nv80jrncI/AAAAAAAAArA/utmCcBlQeqY/s1600/02-geojson-linestring.png )


So using the same approach you will be able to create MultiPoint, MultiLineString, Polygon, MultiPolygon. It is also possible to mix all these in a single document using a GeometryCollection. The following example is a Geometry Collection of MultiLineString and Polygon over Central Park:

``` json
{
  "type" : "GeometryCollection",
  "geometries" : [
    {
      "type" : "Polygon",
      "coordinates" : [
[
  [ -73.9580, 40.8003 ],
  [ -73.9498, 40.7968 ],
  [ -73.9737, 40.7648 ],
  [ -73.9814, 40.7681 ],
  [ -73.9580, 40.8003  ]
]
      ]
    },
    {
      "type" : "MultiLineString",
      "coordinates" : [
[ [ -73.96943, 40.78519 ], [ -73.96082, 40.78095 ] ],
[ [ -73.96415, 40.79229 ], [ -73.95544, 40.78854 ] ],
[ [ -73.97162, 40.78205 ], [ -73.96374, 40.77715 ] ],
[ [ -73.97880, 40.77247 ], [ -73.97036, 40.76811 ] ]
      ]
    }
  ]
}
```

![](http://3.bp.blogspot.com/-tIxoUIeSMWw/U_SUsEJ_EDI/AAAAAAAAArY/2qelBrB1xRY/s1600/03-gejson-collection.png )

Note: You can if you want test/visualize these JSON documents using the [http://geojsonlint.com/](http://geojsonlint.com/) service.


##### Now what? Let's store data!

Once you have a GeoJSON document you just need to store it into your document. For example if you want to store a document about JFK Airport with its location you can run the following command:

``` js
db.airports.insert(
{
  "name" : "John F Kennedy Intl",
  "type" : "International",
  "code" : "JFK",
  "loc" : {
    "type" : "Point",
    "coordinates" : [ -73.778889, 40.639722 ]
  }
}
```

Yes this is that simple! You just save the GeoJSON as one of the attribute of the document, `loc` in this example)


### Querying Geospatial Informations


Now that we have the data stored in MongoDB, it is now possible to use the geospatial information to do some interesting queries.




For this we need a sample dataset. I have created one using some open data found in various places. This dataset contains the following informations:

* airports collection with the list of US airport (Point)
* states collection with the list of US states (MultiPolygon)

I have created this dataset from various OpenData sources ( [http://geocommons.com/](http://geocommons.com/) , [http://catalog.data.gov/dataset](http://catalog.data.gov/dataset) ) and use [toGeoJSON](https://github.com/mapbox/togeojson) to convert them into the proper format.

Let's install the dataset:

1.  Download it from [here](https://www.dropbox.com/s/yui7shcud2xbxt7/geo.zip)
2.  Unzip geo.zip file
3.  Restore the data into your mongoDB instance, using the following command

```
mongorestore geo.zip
```

MongoDB allows applications to do the following types of query on geospatial data:

* inclusion
* intersection
* proximity

Obviously, you will be able to use all the other operator in addition to the geospatial ones. Let's now look at some concrete examples.


#### Inclusion



Find all the airports in California. For this you need to get the California location (Polygon) and use the command $geoWithin in the query. From the shell it will look like :

``` js
use geo
var cal = db.states.findOne(  {code : "CA"}  );

db.airports.find(
{
  loc : { $geoWithin : { $geometry : cal.loc } }
},
{ name : 1 , type : 1, code : 1, _id: 0 }
);
```

Result:

``` json
{ "name" : "Modesto City - County", "type" : "", "code" : "MOD" }
...
{ "name" : "San Francisco Intl", "type" : "International", "code" : "SFO" }
{ "name" : "San Jose International", "type" : "International", "code" : "SJC" }
...
```

So the query is using the "California MultiPolygon" and looks in the airports collection to find all the airports that are in these polygons. This looks like the following image on a map:

![](http://1.bp.blogspot.com/-AO6C6fgsrYQ/U_Wyr2RHPWI/AAAAAAAAAro/hVn6YFJQtNI/s1600/04-geojson-cal-airport.png )

You can use any other query features or criteria, for example you can limit the query to international airport only sorted by name :

``` js
db.airports.find(
{
  loc : { $geoWithin : { $geometry : cal.loc } },
  type : "International"
},
{ name : 1 , type : 1, code : 1, _id: 0 }
).sort({ name : 1 });
```

Result:

``` json
{ "name" : "Los Angeles Intl", "type" : "International", "code" : "LAX" }
{ "name" : "Metropolitan Oakland Intl", "type" : "International", "code" : "OAK" }
{ "name" : "Ontario Intl", "type" : "International", "code" : "ONT" }
{ "name" : "San Diego Intl", "type" : "International", "code" : "SAN" }
{ "name" : "San Francisco Intl", "type" : "International", "code" : "SFO" }
{ "name" : "San Jose International", "type" : "International", "code" : "SJC" }
{ "name" : "Southern California International", "type" : "International", "code" : "VCV" }
```

I do not know if you have looked in detail, but we are querying these documents with no index. You can run a query with the `explain()` to see what's going on. The `$geoWithin` operator does not need index but your queries will be more efficient with one so let's create the index:

``` js
db.airports.ensureIndex( { "loc" : "2dsphere" } );
```

Run the explain and you will se the difference.

#### Intersection

Suppose you want to know what are all the adjacent states to California, for this we just need to search for all the states that have coordinates that "intersects" with California. This is done with the following query:

``` js
var cal = db.states.findOne(  {code : "CA"}  );
db.states.find(
{
  loc : { $geoIntersects : { $geometry : cal.loc  }  } ,
  code : { $ne : "CA"  }  
},
{ name : 1, code : 1 , _id : 0 }
);
```

Result:

``` json
{ "name" : "Oregon", "code" : "OR" }
{ "name" : "Nevada", "code" : "NV" }
{ "name" : "Arizona", "code" : "AZ" }
```

![](http://3.bp.blogspot.com/--Kh1AzmsaSU/U_XreY-tRlI/AAAAAAAAAr4/cS1pgjgF2Pc/s1600/05-geojson-intersect.png )

Same as before `$geoIntersect` operator does not need an index to work, but it will be more efficient with the following index:

``` js
db.states.ensureIndex( { loc : "2dsphere" } );
```

#### Proximity

The last feature that I want to highlight in this post is related to query with proximity criteria. Let's find all the international airports that are located at less than 20km from the reservoir in NYC Central Park. For this you will be using the `$near` operator.

``` js
db.airports.find(
{
  loc : {
    $near : {
      $geometry : {
        type : "Point" ,
        coordinates : [-73.965355,40.782865]  
      },
      $maxDistance : 20000
    }
  },
  type : "International"
},
{
  name : 1,
  code : 1,
  _id : 0
}
);
```

Results:

``` json
{ "name" : "La Guardia", "code" : "LGA" }
{ "name" : "Newark Intl", "code" : "EWR"}
```

So this query returns 2 airports, the closest being La Guardia, since the `$near` operator sorts the results by distance. Also it is important to raise here that the `$near` operator requires an index.

### Conclusion

In this first post about geospatial feature you have learned:

* the basic of GeoJSON
* how to query documents with inclusion, intersection and proximity criteria.

You can now play more with this for example integrate this into an application that expose data into some UI, or see how you can use the geospatial operators into a aggregation pipeline.
