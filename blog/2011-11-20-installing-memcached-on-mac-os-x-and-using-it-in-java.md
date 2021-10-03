---
title: "Installing Memcached on Mac OS X and using it in Java"

categories: java memcached osx
---

### Introduction

In this article I will explain how you can:

1.  Install and Configure Memcached on Mac OS X
2.  Use Memcached in your Java Application

I won't go in too much detail about the benefits of using a distributed cache in your applications, but let's at least provide some use cases for applications that are running in the context of an enterprise portal, eXo Platform in my case - *surprising isn't?* And I will show this in another post.

We have many reasons to use a cache (distributed or not), in the context of enterprise portal, let's take a look to some of these reasons:

* A portal is used to aggregate data in a single page. These data could come from different sources : Web Services, Database, ERP, ..... and accessing the data in real time could be costly. So it will be quite interesting to cache the result of the call when possible.
* If the portal is used to aggregate many data from many sources, it is sometime necessary to jump into another application to continue some operation. A distributed and shared cache could be used to manage some context between different applications running in different processes (JVM or even technologies)
These are two example where a shared cache could be interesting for your portal based applications, we can find many other reason.

Note that the Portlet API (JSR-286) contains already a cache mechanism that cache the HTML fragment, and that eXo Platform also provide a [low level cache](http://docs.jboss.org/exojcr/1.14.0-CR4/developer/en-US/html/ch-cache.html), based on [JBoss Cache](http://www.jboss.org/jbosscache).

<!-- truncate -->

### Installation and Configuration


**Installing Memcached from sources**

You can find some information about Memcached installation on the Memcached [Wiki](http://code.google.com/p/memcached/wiki/NewStart). The following steps are the steps that I have used on my environment.

As far as I know, Memached is not available as package for Mac OS X. I am still on Snow Leopard (10.6.8), and I have installed XCode and all development tools. I have use the article "Installing memcached 1.4.1 on Mac OS X 10.6 Snow Leopard" from [wincent.com](https://wincent.com/wiki/Installing_memcached_1.4.1_on_Mac_OS_X_10.6_Snow_Leopard). For simplicity reason I have duplicate the content and updated to the latest releases.

1- Create a working directory :

``` sh
$ mkdir memcachedbuild
$ cd memcachebuild
```

2- Install [libevent](http://libevent.org/) that is mandatory for memcached

``` sh
$ curl -O http://www.monkey.org/~provos/libevent-1.4.14-stable.tar.gz
$ tar xzvf libevent-1.4.14-stable.tar.gz
$ cd libevent-1.4.14-stable
$ ./configure
$ make
$ make verify
$ sudo make install&nbsp;
```

3- Install memcached

Go back to your install directory (_memcachedbuild_)

``` sh
$ curl -O http://memcached.googlecode.com/files/memcached-1.4.10.tar.gz
$ tar xzvf memcached-1.4.10.tar.gz
$ cd memcached-1.4.10
$ ./configure
$ make
$ make test
$ sudo make install
```

You are now ready to use memcached that is available at `/usr/local/bin/memcached`.

This allows you to avoid changing to the pre-installed memcached located in /usr/bin, if you want to replace it instead of having you own install, just run the configure command with the following parameter: `./configure --prefix=/usr`

**Starting and testing Memcached**

Start the memcached server, using the following command line:

``` sh
$ /usr/local/bin/memcached -d -p 11211
```

This command starts the memcached server as demon (-d parameter), on the TCP port 11211 (this is the default value). You can find more about the memcached command using `man memcached`.

It is possible to connect and test your server using a telnet connection. Once connected you can set and get object in the cache, take a look to the following paragraph.

``` sh
$ telnet 127.0.0.1 11211
Trying 127.0.0.1...
Connected to tgrall-server.
Escape character is '^]'.
set KEY 0 600 16
This is my value
STORED
get KEY
VALUE KEY 0 16
This is my value
END
```


The `set` command allows you to put a new value in the cache using the following syntax:

``` sh
set <key>  <flags> <expiration_time>  <number_of_bytes> [noreply] \n\n

<value>
```

*   key : the key used to store the data in the cache
*   flags : a 32 bits unsigned integer that memcached stored with the data
*   expiration_time : expiration time in seconds, if you put 0 this means no delay
*   number_if_bytes : number of bytes in the data block
*   noreply : option to tell the server to not return any value
*   value : the value to store and associate to the key.

This is a short view of the documentation located in your source directory `/memcachedbuild/memcached-1.4.10/doc/protocol.txt`.

The `get` command allows you to access the value that is associated with the key.

You can check the version of memcahed you are running by calling the `stats` command in your telnet session.

Your memcached server is up and running, you can now start to use it inside your applications.

### Simple Java Application with Memcached

The easiest way to use memcached from your Java applications is to use a client library. You can find many [client libraries](http://code.google.com/p/memcached/wiki/Clients#Java). In this example I am using [spymemcached](http://code.google.com/p/spymemcached/) developped by the people from [Couchbase](http://www.couchbase.com/).

1- Adding SpyMemcached to your Maven project

Add the repository to you pom.xml (or you setting.xml)

``` xml
<repository>
  <id>spy</id>
  <name>Spy Repository</name>
  <layout>default</layout>
  <url>http://files.couchbase.com/maven2/</url>
</repository>
```

then the dependency to your pom.xml

``` xml
<dependency>
  <groupid>spy</groupid>
  <artifactid>spymemcached</artifactid>
  <version>2.7.3</version>
</dependency>
```

2- Use SpyMemcache client in your application

The following code is a simple Java class that allows you to enter the key and the value and set it in the cache.

``` java
package com.grallandco.blog;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.Console;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.logging.Level;
import java.util.logging.Logger;
import net.spy.memcached.AddrUtil;
import net.spy.memcached.MemcachedClient;

public class Test {

  public static void main(String[] args) {
    try {

      System.out.print("Enter the new key : ");
      BufferedReader reader = new BufferedReader( new InputStreamReader(System.in));
      String key = null;
      key = reader.readLine();

      System.out.print("Enter the new value : ");
      String value = null;
      value = reader.readLine();

      MemcachedClient cache = new MemcachedClient(AddrUtil.getAddresses("127.0.0.1:11211"));

      // read the object from memory
      System.out.println("Get Object before set :"+ cache.get(key)  );

      // set a new object
      cache.set(key, 0, value );

      System.out.println("Get Object after set :"+ cache.get(key)  );


    } catch (IOException ex) {
      Logger.getLogger(Test.class.getName()).log(Level.SEVERE, null, ex);
      System.exit(0);
    }


    System.exit(0);

  }
}

```

So when executing the application you will see something like :

``` sh
Enter the new key : CITY
Enter the new value : Paris, France
2011-11-16 15:22:09.928 INFO net.spy.memcached.MemcachedConnection:  Added {QA sa=/127.0.0.1:11211, #Rops=0, #Wops=0, #iq=0, topRop=null, topWop=null, toWrite=0, interested=0} to connect queue
2011-11-16 15:22:09.932 INFO net.spy.memcached.MemcachedConnection:  Connection state changed for sun.nio.ch.SelectionKeyImpl@5b40c281
Get Object before set :null
Get Object after set :Paris, France

```

You can also access the object from a Telnet session:

``` sh
get CITY
VALUE CITY 0 13
Paris, France
END
```


You can use any Java class in your application, the only thing to do is to make this class serializable.

This is it for the first post about memcached and Java,&nbsp; I am currently working on a small example integrating Web Services call, Portlets and memcached.
