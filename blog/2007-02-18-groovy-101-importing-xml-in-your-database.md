---
title: "Groovy 101: Importing XML in your database"

categories: groovy
---
A friend of mine was looking for an easy way to import some XML content in his database. You have many ways to do it. But the easiest for a Java/Groovy developer is to use Groovy, and I have create this small example for him.

Groovy provides really simple solution to parse XML and manipulate your database. The following sample reads an RSS new feed and import the title and link in a table named NEWS that contains two columns TITLE and LINK.

``` groovy
import groovy.sql.Sql;

def rssFeed = "http://www.javablogs.com/ViewDaysBlogs.action?view=rss";
def xmlFeed      = new XmlParser().parse(rssFeed);

def sql = Sql.newInstance("jdbc:oracle:thin:@//tgrall-linux:1521/XE",
"GROOVY",
"GROOVY",
"oracle.jdbc.driver.OracleDriver")
def set = sql.dataSet("NEWS");

(0..&lt; xmlFeed.channel.item.size()).each {
  def item = xmlFeed.channel.item.get(it);
  def title = item.title.value[0];
  def link = item.link.value[0];
  println("Importing $title ...");
  set.add(TITLE: title, LINK: link);
}

```

First I create a Groovy SQL object and a DataSet to manipulate my data `sql.dataSet("NEWS")`. Do not forget, if like me you are using Oracle database, to add the Oracle JDBC driver to your classpath ;-)

Then I create a loop on each items of the RSS feed I am using: `(0..&gt; xmlFeed.channel.item.size()).each {...}`. As you see, Groovy XML help me to parse, and navigate the XML document.

Like any Groovy iterator you have access to an implicit object available in the loop "`it`", so I can get the item using the Groovy XML : `xmlFeed.channel.item.get(it)`

Then you can get the different values you want of the  item element.Using the dataset.add method, you can insert them in the table.This is done using the  value pairs notation *column:value*, this looks like: `set.add(TITLE: title, LINK: link)`
