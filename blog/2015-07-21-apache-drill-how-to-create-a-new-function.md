---
title: "Apache Drill : How to create a new function?"

categories: Drill, UDF, SQL, Java
---


[Apache Drill](https://drill.apache.org/) allows users to explore _any type of_ data using ANSI SQL. This is great, but Drill goes even further than that and allows you to create custom functions to extend the query engine. These custom functions have all the performance of any of the Drill primitive operations, but allowing that performance makes writing these functions a little trickier than you might expect.

In this article, I'll explain step by step how to create and deploy a new function using a very basic example. Note that you can find lot of information about [Drill Custom Functions in the documentation](https://drill.apache.org/docs/develop-custom-functions-introduction/).

Let's create a new function that allows you to mask some characters in a string, and let's make it very simple. The new function will allow user to hide _x_ number of characters from the start and replace then by any characters of their choice. This will look like:

```
MASK( 'PASSWORD' , '#' , 4 ) => ####WORD
```

You can find the full project in the following [Github Repository](https://github.com/tgrall/drill-simple-mask-function).

As mentioned before, we could imagine many advanced features to this, but my goal is to focus on the steps to write a custom function, not
so much on what the function does.

<!--more-->

## Prerequisites

For this you will need:

* Java Developer Kit 7 or later
* Apache Drill 1.1 or later
* Maven 3.0 or later

## Dependencies

The following Drill dependency should be added to your maven project

``` xml
<dependency>
      <groupId>org.apache.drill.exec</groupId>
      <artifactId>drill-java-exec</artifactId>
      <version>1.1.0</version>
</dependency>
```

## Source

The `Mask` function is an implementation of the [`DrillSimpleFunc`](https://github.com/apache/drill/blob/master/exec/java-exec/src/main/java/org/apache/drill/exec/expr/DrillSimpleFunc.java).

Developers can create 2 types of custom functions:

* Simple Functions: these functions have a single row as input and produce a single value as output
* Aggregation Functions: that will accept multiple rows as input and produce one value as output

Simple functions are often referred to as UDF's which stands for user defined function.  Aggregation functions are referred to as UDAF which
stands for user defined aggregation function.

In this example, we just need to transform the value of a column on each row, so a simple function is enough.

#### Create the function

The first step is to implement the [`DrillSimpleFunc`](https://github.com/apache/drill/blob/master/exec/java-exec/src/main/java/org/apache/drill/exec/expr/DrillSimpleFunc.java) interface.

``` java
package org.apache.drill.contrib.function;

import org.apache.drill.exec.expr.DrillSimpleFunc;
import org.apache.drill.exec.expr.annotations.FunctionTemplate;

@FunctionTemplate(
        name="mask",
        scope= FunctionTemplate.FunctionScope.SIMPLE,
        nulls = FunctionTemplate.NullHandling.NULL_IF_NULL
)
public class SimpleMaskFunc implements DrillSimpleFunc{

    public void setup() {

    }

    public void eval() {

    }
}

```


The behavior of the function is driven by annotations (line 6-10)
  * _Name_ of the function
  * _Scope_ of the function, in our case Simple
  * What to do when the value is NULL, in this case Reverse will just returns NULL

Now we need to implement the logic of the function using `setup()` and `eval()` methods.

* `setup` is self-explanatory, and in our case we do not need to setup anything.
* `eval` that is the core of the function. As you can see this method does not have any parameter, and return void. So how does it work?

In fact the function will be generated dynamically (see [DrillSimpleFuncHolder](https://github.com/apache/drill/blob/master/exec/java-exec/src/main/java/org/apache/drill/exec/expr/fn/DrillSimpleFuncHolder.java#L42)), and the input parameters and output holders are defined using holders by annotations. Let's look into this.

``` java
import io.netty.buffer.DrillBuf;
import org.apache.drill.exec.expr.DrillSimpleFunc;
import org.apache.drill.exec.expr.annotations.FunctionTemplate;
import org.apache.drill.exec.expr.annotations.Output;
import org.apache.drill.exec.expr.annotations.Param;
import org.apache.drill.exec.expr.holders.IntHolder;
import org.apache.drill.exec.expr.holders.NullableVarCharHolder;
import org.apache.drill.exec.expr.holders.VarCharHolder;

import javax.inject.Inject;


@FunctionTemplate(
        name = "mask",
        scope = FunctionTemplate.FunctionScope.SIMPLE,
        nulls = FunctionTemplate.NullHandling.NULL_IF_NULL
)
public class SimpleMaskFunc implements DrillSimpleFunc {

    @Param
    NullableVarCharHolder input;

    @Param(constant = true)
    VarCharHolder mask;

    @Param(constant = true)
    IntHolder toReplace;

    @Output
    VarCharHolder out;

    @Inject
    DrillBuf buffer;

    public void setup() {
    }

    public void eval() {

    }

}

```


We need to define the parameters of the function. In this case we have 3 parameters, each defined using the `@Param` annotation.  In addition, we also have to define the returned value using the `@Output` annotation.

The parameters of our mask function are:

* A nullable string
* The mask char or string
* The number of characters to replace starting from the first

The function returns :

* A string

For each of these parameters you have to use an holder class. For the `String`, this is managed by a `VarCharHolder` or `NullableVarCharHolder` -lines 21, 24,30- that provides a buffer to manage larger objects in a efficient way. Since we are manipulating a `VarChar` you also have to inject another buffer that will be used for the output -line 33-. Note that Drill doesn't actually use the Java heap for data being processed in a query but instead keeps this data off the heap and manages the life-cycle for us without using the Java
garbage collector.

We are almost done since we have the proper class, the input/output object, we just need to implement the `eval()` method itself, and use these objects.

``` java
public void eval() {

    // get the value and replace with
    String maskValue = org.apache.drill.exec.expr.fn.impl.StringFunctionHelpers.getStringFromVarCharHolder(mask);
    String stringValue = org.apache.drill.exec.expr.fn.impl.StringFunctionHelpers.toStringFromUTF8(input.start, input.end, input.buffer);

    int numberOfCharToReplace = Math.min(toReplace.value, stringValue.length());

    // build the mask substring
    String maskSubString = com.google.common.base.Strings.repeat(maskValue, numberOfCharToReplace);
    String outputValue = (new StringBuilder(maskSubString)).append(stringValue.substring(numberOfCharToReplace)).toString();

    // put the output value in the out buffer
    out.buffer = buffer;
    out.start = 0;
    out.end = outputValue.getBytes().length;
    buffer.setBytes(0, outputValue.getBytes());
}
```

The code is quite simple:

* Get the mask itself - line 4
* Get the value - line 5
* Get the number of character to replace - line 7
* Generate a new string with masked values - lines 10/11
* Create and populate the output buffer - lines 14 to 17

This code does, however, look a bit strange to somebody used to reading Java code. This strangeness arises because the final code that is executed in a query will actually be generated on the fly. This allows Drill to leverage Java's just-in-time (JIT) compiler for maximum speed. To make this work, you have to respect some basic rules:

* **Do not use imports, but instead use the fully qualified class name**, this is what is done on line 10 with the `Strings` class. (coming from the Google Guava API packaged in Apache Drill)
* The `ValueHolders` classes, in our case `VarCharHolder` and `IntHolder` should be manipulated like structs, so you must call helper methods, for example `getStringFromVarCharHolder` and `toStringFromUTF8`. Calling methods like `toString` will result in very bad problems.

Starting in Apache Drill 1.3.x, it is mandatory to specify the package name of your function in the `./resources/drill-module.conf` file as follow:

```
drill {
  classpath.scanning {
    packages : ${?drill.classpath.scanning.packages} [
      org.apache.drill.contrib.function
    ]
  }
}
```

We are now ready to deploy and test this new function.

### Package

Once again since, Drill will generate source, _**you must prepare your package in a way that classes and sources of the function are present in the classpath**_. This is different from the way that Java code is normally packaged but is necessary for Drill to be able to do the necessary code generation. Drill uses the compiled code to access the annotations and uses the source code to do code generation.

An easy way to do that is to use maven to build your project, and, in particular, use the [maven-source-plugin](https://maven.apache.org/plugins/maven-source-plugin/) like this in your `pom.xml` file:

``` xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-source-plugin</artifactId>
    <version>2.4</version>
    <executions>
        <execution>
            <id>attach-sources</id>
            <phase>package</phase>
            <goals>
                <goal>jar-no-fork</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

Now, when you build using `mvn package`, Maven will generate 2 jars:

* The default jar with the classes and resources (_drill-simple-mask-1.0.jar_)
* A second jar with the sources (_drill-simple-mask-1.0-sources.jar_)

Finally you must add a `drill-module.conf` file in the resources folder of your project, to tell Drill that your jar contains a custom function. If you have no specific configuration to set for your function you can keep this file empty.

We are all set, you can now package and deploy the new function, just package and copy the Jars into the Drill 3rd party folder; $DRILL_HOME/jars/3rdparty , where $DRILL_HOME being your Drill installation folder.

```
mvn clean package

cp target/*.jar  $DRILL_HOME/jars/3rdparty

```

Restart drill.


### Run !

You should now be able to use your function in your queries:

```
SELECT MASK(first_name, '*' , 3) FIRST , MASK(last_name, '#', 7) LAST  FROM cp.`employee.json` LIMIT 5;
+----------+------------+
|  FIRST   |    LAST    |
+----------+------------+
| ***ri    | ######     |
| ***rick  | #######    |
| ***hael  | ######     |
| ***a     | #######ez  |
| ***erta  | #######    |
+----------+------------+
```

## Conclusion

In this simple project you have learned how to write, deploy and use a custom Apache Drill Function. You can now extend this to create your own function.

One important thing to remember when extending Apache Drill (using a custom function, storage plugin or format), is that Drill runtime is generating dynamically lot of code. This means you may have to use a very specific pattern when writing and deploying your extensions. With our basic function this meant we had to:

* deploy **classes AND sources**
* use **fully Qualified Class Names**
* use value holder classes and helper methods to manipulate parameters
*
