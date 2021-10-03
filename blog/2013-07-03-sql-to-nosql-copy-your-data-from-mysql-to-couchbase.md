---
title: "SQL to NoSQL : Copy your data from MySQL to Couchbase"

categories: couchbase nosql sql
---

**TL;DR:** Look at the [project on Github](https://github.com/tgrall/couchbase-sql-importer).

### Introduction

During my last interactions with the Couchbase community, I had the question how can I easily import my data from my current database into Couchbase. And my answer was always the same:

*   Take an ETL such as Talend to do it
*   Just write a small program to copy the data from your RDBMS to Couchbase...

So I have written this small program that allows you to import the content of a RDBMS into Couchbase. This tools could be used as it is, or you can look at the code to adapt it to your application.

<iframe width="675" height="380" src="https://www.youtube.com/embed/xzqBjhYKCLY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


### The Tool: Couchbase SQL Importer

The Couchbase SQL Importer, available [here](http://github.com/tgrall/couchbase-sql-importer), allows you with a simple command line to copy all -or part of- your SQL schema into Couchbase. Before explaining how to run this command, let's see how the data are stored into Couchbase when they are imported:


*   Each table row is imported a single JSON document
    *   where each table column becomes a JSON attribute
*   Each document as a key made of the name of the table and a counter (increment)


The following concrete example, based on the [MySQL World sample database](http://dev.mysql.com/doc/world-setup/en/index.html), will help you to understand how it works. This database contains 3 tables : City, Country, CountryLanguage. The City table looks like:

```
+-------------+----------+------+-----+---------+----------------+
| Field       | Type     | Null | Key | Default | Extra          |
+-------------+----------+------+-----+---------+----------------+
| ID          | int(11)  | NO   | PRI | NULL    | auto_increment |
| Name        | char(35) | NO   |     |         |                |
| CountryCode | char(3)  | NO   |     |         |                |
| District    | char(20) | NO   |     |         |                |
| Population  | int(11)  | NO   |     | 0       |                |
+-------------+----------+------+-----+---------+----------------+
```

The JSON document that matches this table looks like the following:

``` json
city:3805
{
  "Name": "San Francisco",
  "District": "California",
  "ID": 3805,
  "Population": 776733,
  "CountryCode": "USA"
}
```

You see that here I am simply taking all the rows and "moving" them into Couchbase. This is a good first step to play with your dataset into Couchbase, but it is probably not the final model you want to use for your application; most of the time you will have to see when to use embedded documents, list of values, .. into your JSON documents.

In addition to the JSON document the tool create views based on the following logic:

*   a view that list all imported documents with the name of the "table" (aka type) as key
*   a view for each table with the primary key columns


View: all/by_type

``` json
{
  "rows": [
  {"key": "city", "value": 4079},
  {"key": "country", "value": 239},
  {"key": "countrylanguage", "value": 984}
  ]
}
```

As you can see this view allows you to get with a single Couchbase query the number of document by type.

Also for each table/document type, a view is created where the key of the index is built from the table primary key. Let's for example query the "City" documents.



View: city/by_pk?reduce=false&amp;limit=5

``` json
{
  "total_rows": 4079,
  "rows": [
  {"id": "city:1", "key": 1, "value": null},
  {"id": "city:2", "key": 2, "value": null},
  {"id": "city:3", "key": 3, "value": null},
  {"id": "city:4", "key": 4, "value": null},
  {"id": "city:5", "key": 5, "value": null}
  ]
}
```

The index key matches the value of the `City.ID` column.  When the primary key is made of multiple columns the key looks like:

View: CountryLanguage/by_pk?reduce=false&amp;limit=5
``` json
{
  "total_rows": 984,
  "rows": [
  {"id": "countrylanguage:1", "key": ["ABW", "Dutch"], "value": null},
  {"id": "countrylanguage:2", "key": ["ABW", "English"], "value": null},
  {"id": "countrylanguage:3", "key": ["ABW", "Papiamento"], "value": null},
  {"id": "countrylanguage:4", "key": ["ABW", "Spanish"], "value": null},
  {"id": "countrylanguage:5", "key": ["AFG", "Balochi"], "value": null}
  ]
}
```


This view is built from the CountryLanguage table primary key made of `CountryLanguage.CountryCode and  `CountryLanguage.Language` columns.

```
+-------------+---------------+------+-----+---------+-------+
| Field       | Type          | Null | Key | Default | Extra |
+-------------+---------------+------+-----+---------+-------+
| CountryCode | char(3)       | NO   | PRI |         |       |
| Language    | char(30)      | NO   | PRI |         |       |
| IsOfficial  | enum('T','F') | NO   |     | F       |       |
| Percentage  | float(4,1)    | NO   |     | 0.0     |       |
+-------------+---------------+------+-----+---------+-------+
```


**How to use Couchbase SQL Importer tool? **

The importer is a simple Java based command line utility, quite simple to use:


1- Download the [CouchbaseSqlImporter.jar file from here](http://goo.gl/IF89e). This file is contains all the dependencies to work with Couchbase: the Java Couchbase Client, and GSON.
2- Download the JDBC driver for the database you are using as data source. For this example I am using MySQL and I have download the driver for MySQL Site.
3- Configure the import using a properties file.

```
## SQL Information ##
sql.connection=jdbc:mysql://192.168.99.19:3306/world
sql.username=root
sql.password=password

## Couchbase Information ##
cb.uris=http://localhost:8091/pools
cb.bucket=default
cb.password=

## Import information
import.tables=ALL
import.createViews=true
import.typefield=type
import.fieldcase=lower
```


This sample properties file contains three sections :

*   The two first sections are used to configure the connections to your SQL database and Couchbase cluster (note that the bucket must be created first)
*   The third section allow you to configure the import itself


4- Run the tool !

```
java -cp "./CouchbaseSqlImporter.jar:./mysql-connector-java-5.1.25-bin.jar" com.couchbase.util.SqlImporter import.properties
```
So you run the Java command with the proper classpath (-cp parameter).

And you are done, you can get your data from your SQL database into Couchbase.

If you are interested to see how it is working internally, you can take a look to the next paragraph.


### The Code: How it works?

The main class of the tool is really simple  [com.couchbase.util.SqlImporter](https://github.com/tgrall/couchbase-sql-importer/blob/master/sql-importer-lib/src/main/java/com/couchbase/util/SqlImporter.java), the process is:

1. Connect to the SQL database
2. Connect to Couchbase
3. Get the list of tables
4. For each tables execute a "select * from table"
    4.1. Analyze the ResultSetMetadata to get the list of columns
    4.2. Create a Java map for each rows where the key is the name of the columns and the value…is the value
    4.3. Serialize this Map into a GSON document and save it into Couchbase

The code is available in the [ImportTable(String table)](https://github.com/tgrall/couchbase-sql-importer/blob/master/sql-importer-lib/src/main/java/com/couchbase/util/SqlImporter.java#L212) Java method.

One interesting point is that you can use and extend the code to deal with your application.


### Conclusion

I have created this tool quickly to help some people in the community, if you are using it and need new features, let me know, using comment or pull request.
