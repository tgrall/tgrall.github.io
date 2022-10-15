---
title: "Convert a CSV File to Apache Parquet with Drill"

categories: drill parquet hadoop bigdata
---

A very common use case when working with Hadoop is to store and query simple files (CSV, TSV, ...); then to get better performance and efficient storage convert these files into more efficient format, for example [Apache Parquet](https://parquet.apache.org/).

[Apache Parquet](https://parquet.apache.org/) is a [columnar storage format](https://en.wikipedia.org/wiki/Column-oriented_DBMS) available to any project in the Hadoop ecosystem. Apache Parquet has the following characteristics:

* Self-describing
* Columnar format
* Language-independent

Let's take a concrete example, you can find many interesting Open Data sources that distribute data as CSV files- or equivalent format-. So you can store them into your distributed file system and use them in your applications/jobs/analytics queries. This is not the most efficient way especially when we know that these data won't move that often. So instead of simply storing the CSV let's copy this information into Parquet.


### How to convert CSV files into Parquet files?

You can use code to achieve this, as you can see in the [ConvertUtils](https://github.com/Parquet/parquet-compatibility/blob/master/parquet-compat/src/test/java/parquet/compat/test/ConvertUtils.java) sample/test class. You can use a simpler way with Apache Drill. Drill allows you save the result of a query as Parquet files.

The following steps will show you how to do convert a simple CSV into a Parquet file using Drill.


<!-- truncate -->


#### Prerequisites

* Apache Drill : Standalone [Apache Drill](https://drill.apache.org/) or using [Apache Drill Sandbox from MapR](https://www.mapr.com/products/mapr-sandbox-hadoop/download-sandbox-drill)
* Some CSV Files: for example [Passenger Dataset from SFO Air Traffic Statistics](http://www.flysfo.com/media/facts-statistics/air-traffic-statistics)


#### Querying the CSV file

Let's execute a basic query:

```sql
SELECT *
FROM dfs.`/opendata/Passenger/SFO_Passenger_Data/MonthlyPassengerData_200507_to_201503.csv`
LIMIT 5;

["200507","ATA Airlines","TZ","ATA Airlines","TZ","Domestic","US","Deplaned","Low Fare","Terminal 1","B","27271\r"]
...
...
```
As you can see, by default Drill processes each line as an array of columns, all values being simple String. So if you need to do some operations with these values (projection or where clause) you must use the column index, and cast the value to the proper type. You can see a simple example below:

```
SELECT
columns[0] as `DATE`,
columns[1] as `AIRLINE`,
CAST(columns[11] AS DOUBLE) as `PASSENGER_COUNT`
FROM dfs.`/opendata/Passenger/SFO_Passenger_Data/*.csv`
WHERE CAST(columns[11] AS DOUBLE) < 5
;

+---------+-----------------------------------+------------------+
|  DATE   |              AIRLINE              | PASSENGER_COUNT  |
+---------+-----------------------------------+------------------+
| 200610  | United Airlines - Pre 07/01/2013  | 2.0              |
...
...
```

We are now ready to create our Parquet files using the "Create Table As Select" (aka [CTAS](http://drill.apache.org/docs/create-table-as-ctas-command/))

``` sql
alter session set `store.format`='parquet';


CREATE TABLE dfs.tmp.`/stats/airport_data/` AS
SELECT
CAST(SUBSTR(columns[0],1,4) AS INT)  `YEAR`,
CAST(SUBSTR(columns[0],5,2) AS INT) `MONTH`,
columns[1] as `AIRLINE`,
columns[2] as `IATA_CODE`,
columns[3] as `AIRLINE_2`,
columns[4] as `IATA_CODE_2`,
columns[5] as `GEO_SUMMARY`,
columns[6] as `GEO_REGION`,
columns[7] as `ACTIVITY_CODE`,
columns[8] as `PRICE_CODE`,
columns[9] as `TERMINAL`,
columns[10] as `BOARDING_AREA`,
CAST(columns[11] AS DOUBLE) as `PASSENGER_COUNT`
FROM dfs.`/opendata/Passenger/SFO_Passenger_Data/*.csv`

```

That's it! You have now a Parquet file, a single file in our case since our dataset is really small. Apache Drill will create multiples files for the tables depending of the size and configuration your environment.


I invite you to read this Chapter in the Apache Drill documentation to learn more about [Drill and Parquet](https://drill.apache.org/docs/parquet-format/).


### Query Parquet Files

Now that you have created your Parquet files you can use them in any of your Hadoop processes, but you can also use them in Drill, as follow:

```

SELECT *
FROM dfs.tmp.`/stats/airport_data/*`

```

## Conclusion

In this article you have learned how to convert a CSV file using an Apache Drill query.

You can do that with any source supported by Drill, for example from JSON to Parquet, or even a complex join query between multiple data sources. You can also chose a different output format for example JSON, or a CSV.
