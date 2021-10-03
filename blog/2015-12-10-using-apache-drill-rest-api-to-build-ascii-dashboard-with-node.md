---
title: "Using Apache Drill REST API to build ASCII Dashboard with node"

categories: Drill SQL node.js dataviz
---

[Apache Drill](http://drill.apache.org) has a hidden gem: an easy to use REST interface. This API can be used to Query, Profile and Configure Drill engine.

In this blog post I will explain how to use Drill REST API to create ascii dashboards using [Blessed Contrib](https://www.npmjs.com/package/blessed-contrib).

The ASCII Dashboard looks like

![Dashboard](/images/posts/drill_dashboard/dashboard_demo.gif)

<!-- truncate -->

#### Prerequisites
* Node.js
* Apache Drill 1.2
* For this post, you will use the SFO Passengers CSV file available [here](http://www.flysfo.com/media/facts-statistics/air-traffic-statistics). 
  * Download this locally, unzip the files and put the CSV into a folder that will be access uzing the following path in Drill : ```dfs.data.`/airport/*.csv` ```


*Note: I am still using Apache 1.2 to allow this example to be executed in context of a MapR cluster.*

## The Query and View

In Drill 1.2, CSV headers are not automatically parsed. (This is one of the new features of 1.3: look for `extractHeader` in the [documentation](https://drill.apache.org/docs/text-files-csv-tsv-psv/)). 

For simplicity, remove the first line of the CSV.

The basic query will look like:

```
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
FROM dfs.data.`/airport/*.csv`
LIMIT 10
```

Let's now create a view with these columns: *(do not put any limit !)*

```
CREATE OR REPLACE VIEW dfs.tmp.`airport_data_view` AS
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
FROM dfs.data.`/airport/*.csv`
```

So you can now use the view in your query:

```
select * from dfs.tmp.`airport_data_view` limit 5;
```



## Use the REST API

Now that you have the query you can use the REST API to retrieve the data as JSON document over HTTP. Open a terminal and run this curl command:


```
curl  \
  --header "Content-type: application/json" \
  --request POST \
  --data '{
    "queryType" : "SQL",
    "query" : "select * from dfs.tmp.`airport_data_view` limit 5 " }' \
  http://localhost:8047/query.json
```

The returned JSON document looks like:

```
{
  "columns" : [ "YEAR", "MONTH", ... , "PASSENGER_COUNT" ],
  "rows" : [ {
    "GEO_REGION" : "US",
    "IATA_CODE_2" : "TZ",
		...
		...
    "AIRLINE" : "ATA Airlines",
    "MONTH" : "7",
    "ACTIVITY_CODE" : "Deplaned"
  }, {
    "GEO_REGION" : "US",
    "IATA_CODE_2" : "TZ",
    "GEO_SUMMARY" : "Domestic",
    ...
  }
  ]
}
```

As you can see it is quite simple:

* a first JSON attribute that list the columns
* the list of rows, as JSON documents in an array.

 

## Create a Graph using Node.js & Blessed Contrib

Let's create a node application. 

First you have to include:

* `request` : to call the REST API
* `blessed` : to get a rich Terminal API
* `blessed-contrib` : for the dashboard

and then create a `screen` and a `bar` chard from Contrib.

So the *header* of your Javascript file looks like:

```javascript 
var blessed = require('blessed')
  , contrib = require('blessed-contrib')
  , request = require('request')
  , screen = blessed.screen()
  , bar = contrib.bar(
       { label: 'Bar Chart'
       , barWidth: 20
       , barSpacing: 20
       , maxHeight: 9
       , height: "100%"
       , width: "100%"})
```

So here we have defined a bar char, that will be populated with the columns and rows. For this we need a query, let's use the number of passengers per year, as follow:

```
SELECT `YEAR`, SUM(`PASSENGER_COUNT`) FROM dfs.tmp.`airport_data_view` GROUP BY `YEAR`
```

The complete Bar Chat application looks like:

{% gist 00c5d83b85f59d80ad95 app001.js )

* The lines 15-17 contain the query object used by the Drill REST API
* The lines 26-38 contain the callback from the HTTP call, and the results values are store in the data object (lines 33-34), and then set in the bar chart (line 36)

### Run the "Dashboard"

```
npm install request blessed blessed-contrib

node app001.js

```

This application shows a simple bar chart, in your terminal. Let's now create a richer dashboard.

## Complete Dashboard

The Bless-Contrib node package allows developer to create rich dashboards that aggregate multiple graphs and could be refresh automatically, as seen in the screencast at the top of this post.

You can find a simple dashboard in this [Github repository](https://github.com/tgrall/drill-node-dashboard.git), once you have cloned it, you just need to run: (be sure that your view is called 'dfs.tmp.`airport_data_view`'

```
git clone https://github.com/tgrall/drill-node-dashboard.git

cd drill-node-dashboard

npm install

node dashboard.js http://localhost:8047

```

You can even change the CSV file, for example adding new months, and the line chart on the right will be refreshed automatically.

*Note: this dashboard sample is very basic and just a quick example explaning how to use Drill REST API in a node.js application*
