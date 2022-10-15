---
title: "Groovy 101: Extracting XML from your database"

categories: groovy
---
In the previous entry I showed how you can easily take an XML feed and insert the content in the database. Let's do the opposite now, meaning taking the data out of your database as XML. In this post I am using the Sql Dataset again but to create an XML document, using the Groovy MarkupBuilder.

``` groovy
import groovy.sql.Sql;
import groovy.xml.MarkupBuilder;

def sql = Sql.newInstance("jdbc:oracle:thin:@//tgrall-linux:1521/XE",
"HR", "HR", "oracle.jdbc.driver.OracleDriver")
def set = sql.dataSet("EMPLOYEES");

def writer = new StringWriter()
def xml = new MarkupBuilder(writer)

xml.employees() {
  set.each { emp ->
    employee(first: emp.first_name , last: emp.last_name) {
      email( emp.email )
    }

  }
}

println writer.toString();
```

As you can see, I use the builder to create XML Elements and attributes employee(first: emp.first_name , last: emp.last_name), I do reference the current record of the dataset (emp), and all this in very simple and concise code.
This will give a result like:

``` xml
<employees>
  <employee first="'Steven'" last="'King'">
    <email>SKING</email>
  </employee>
  <employee first="'Neena'" last="'Kochhar'">
    <email>NKOCHHAR</email>
  </employee>
  <employee first="'Lex'" last="'De">
    <email>LDEHAAN</email>
  </employee>
  ...
</employees>
```

So once again quite simple.
