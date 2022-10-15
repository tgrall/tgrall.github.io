---
title: How to use SSL/TLS with Redis Enterprise
tags: [nosql, redis, security, java, node ,python, authentication, ssl]
---


![](/images/posts/how-to-use-ssl-slash-tls-with-redis-enterprise/000_header.jpeg)


In this article, I will explain how to secure your Redis databases using SSL (Secure Sockets Layer). In production, it is a good practice to use SSL to protect the data that are moving between various computers (client applications and Redis servers). Transport Level Security (TLS) guarantees that only allowed applications/computers are connected to the database, and also that data is not viewed or altered by a middle man process.

You can secure the connections between your client applications and Redis cluster using:

* One-Way SSL: the client (your application) get the certificate from the server (Redis cluster), validate it, and then all communications are encrypted
* Two-Way SSL: (aka mutual SSL) here both the client and the server authenticate each other and validate that both ends are trusted.

In this article, I will focus on the Two-Way SSL, and using Redis Enterprise.

<!--truncate-->

Prerequisites:

* A Redis Enterprise 5.4.x database, (my database is protected by the password `secretdb01`, and listening on port `12000`)
* `redis-cli` to run basic commands
* Python, Node, and Java installed if you want to test various languages.


**Simple  Test**

Let's make sure that the database is available:

```
redis-cli -p 12000 -a secretdb01 INFO SERVER
```

This should print the Server information.


#### 1- Get the Certificate from Redis Cluster

You have access to the Redis Enterprise Cluster, you go to one of the nodes to retrieve the certificate (that is a self-generated one by default).

The cluster certificate is located at: `/etc/opt/redislabs/proxy_cert.pem`.

You have to copy it on each client machine; note that once it is done you can use this certificate to connect using "One-Way SSL", but not the purpose of this article.

In my demonstration I am using Docker and copy the certificate using this command from my host:

```
docker cp redis-node1:/etc/opt/redislabs/proxy_cert.pem ./certificates
```

#### 2- Generate a New Client Certificate

Using the Two-Way SSL you need to have a certificate for the client that will be used by Redis database proxy to trust the client.

In this article I will use a self-signed certificate using OpenSSL, in this example, we are creating a certificate for an application named `app_001`.

You can create as many certificates as you want, or reuse this one for all servers/applications.

Open a terminal and run the following commands:

```bash 

openssl req \
  -nodes \
 -newkey rsa:2048 \
 -keyout client_key_app_001.pem \
 -x509 \
 -days 36500 \
 -out client_cert_app_001.pem

```

This command generate a new client key (`client_key_001.pem`) and certificate (`client_cert_001.pem`) with no passphrase.


#### 3- Configure the Redis Database

The next step is to take the certificate and add it to the database you want to protect. 

Let's copy the certificate and paste it into the Redis Enterprise Web Console.

Copy the certificate in your clipboard:

Mac:
```bash
pbcopy < client_cert_app_001.pem
```

Linux:
```bash
 xclip -sel clip < client_cert_app_001.pem
```

Windows:
```bash
clip < client_cert_app_001.pem
```

Go to the Redis Enterprise Admin Web Console and enable TLS on your database:

1. Edit the database configuration
1. Check TLS
1. Select "Require TLS for All communications"
1. Check "Enforce client authentication"
1. Paste the certificate in the text area
1. Click the Save button to save the certificate
1. Click the Update button to save the configuration.

![](/images/posts/how-to-use-ssl-slash-tls-with-redis-enterprise/001-tls-configuration.png)


The database is now protected, and it is mandatory to use the SSL certificate to connect to it.


```
redis-cli -p 12000 -a secretdb01 INFO SERVER
(error) ERR unencrypted connection is prohibited
```

#### 4- Connect to the Database using the Certificate

In all following examples, I am using a "self-signed" certificate, so I do not check the validity of the hostname. 
You should adapt the connections/TLS information based on your certificate configuration.

#### 4.1 Using Redis-CLI

To connect to a SSL protected database using `redis-cli` you have to use [`stunnel`](https://www.stunnel.org/index.html).

Create a `stunnel.conf` file with the following content:

```
cert = /path_to/certificates/client_cert_app_001.pem
key = /path_to/certificates/client_key_app_001.pem
cafile = /path_to/certificates/proxy_cert.pem
client = yes

[redislabs]
accept = 127.0.0.1:6380
connect = 127.0.0.1:12000

```
Start stunnel using the command

```
stunnel ./stunnel.conf
```

This will start a process that listen to port `6380` and used as a proxy to the Redis Enterprise database on port `12000`.

```
redis-cli -p 6380 -a secretdb01 INFO SERVER
```


##### 4.2 Using Python

Using Python, you have to set the SSL connection parameters:

``` python
#!/usr/local/bin/python3

import redis
import pprint

try:
  r = redis.StrictRedis(
    password='secretdb01',
    decode_responses=True,
    host='localhost',
    port=12000,
    ssl=True, 
    ssl_keyfile='./client_key_app_001.pem', 
    ssl_certfile='./client_cert_app_001.pem', 
    ssl_cert_reqs='required', 
    ssl_ca_certs='./proxy_cert.pem',
    )

  info = r.info()
  pprint.pprint(info)

except Exception as err:
  print("Error connecting to Redis: {}".format(err))
```

More information in the documentation "[Using Redis with Python](https://redislabs.com/lp/python-redis/)".

##### 4.3 Using Node.JS

For [Node Redis](http://redis.js.org/), use the [TLS](https://nodejs.org/api/tls.html) library to configure the client connection:

```javascript
var redis = require("redis");
var tls = require('tls');
var fs = require('fs');

var ssl = {
    key: fs.readFileSync('../certificates/client_key_app_001.pem',encoding='ascii'),
    cert: fs.readFileSync('../certificates/client_cert_app_001.pem',encoding='ascii'),
    ca: [ fs.readFileSync('../certificates/proxy_cert.pem',encoding='ascii') ],
    checkServerIdentity: () => { return null; },
};

var client = redis.createClient(12000,'127.0.0.1', 
    {
      password : 'secretdb01',
      tls: ssl
    }
);
        
client.info( "SERVER", function (err, reply) {
    console.log(reply);
} );

```

More information in the documentation "[Using Redis with Node.js](https://redislabs.com/lp/node-js-redis/)".

##### 4.4 Using Java

In Java, to be able to connect using SSL, you have to install all the certificates in the Java environment using the [keytool](https://docs.oracle.com/en/java/javase/11/tools/keytool.html) utility.


Create a **keystore** file that stores the key and certificate you have created earlier:

```
openssl pkcs12 -export \
  -in ./client_cert_app_001.pem \
  -inkey ./client_key_app_001.pem \
  -out client-keystore.p12 \
  -name "APP_01_P12"
```

As you can see the keystore is used to store the credentials associated with you client; it will be used later with the `-javax.net.ssl.keyStore` system property in the Java application.

In addition to the keys tore, you also have to create a trust store, that is used to store other credentials for example in our case the redis cluster certificate.


Create a **trust store** file and add the Redis cluster certificate to it

```
keytool -genkey \
  -dname "cn=CLIENT_APP_01" \
  -alias truststorekey \
  -keyalg RSA \
  -keystore ./client-truststore.p12 \
  -keypass secret
  -storepass secret
  -storetype pkcs12
```

```
keytool -import \
  -keystore ./client-truststore.p12 \
  -file ./proxy_cert.pem \
  -alias redis-cluster-crt
```

The trustore will be used later with the `-javax.net.ssl.trustStore` system property in the Java application.

You can now run the Java application with the following environment variables:

```
java -Djavax.net.ssl.keyStore=/path_to/certificates/java/client-keystore.p12 \
-Djavax.net.ssl.keyStorePassword=secret \
-Djavax.net.ssl.trustStore=/path_to/certificates/java/client-truststore.p12 \
-Djavax.net.ssl.trustStorePassword=secret \
-jar MyApp.jar
```

For this example and simplicity, I will hard code these property in the Java code itself:

```java

import redis.clients.jedis.Jedis;
import java.net.URI;

public class SSLTest {

    public static void main(String[] args) {

        System.setProperty("javax.net.ssl.keyStore", "/path_to/certificates/client-keystore.p12");
        System.setProperty("javax.net.ssl.keyStorePassword", "secret");

        System.setProperty("javax.net.ssl.trustStore","/path_to/certificates/client-truststore.p12");
        System.setProperty("javax.net.ssl.trustStorePassword","secret");

        URI uri = URI.create("rediss://127.0.0.1:12000");

        Jedis jedis = new Jedis(uri);
        jedis.auth("secretdb01");


        System.out.println(jedis.info("SERVER"));
        jedis.close();
    }

}
```

* line 8-12, the system environment variables are set to point to the keystore and trust store (this should be externalized)
* line 14, the Redis URL start with `rediss` with 2 s to indicate that the connection should be encrypted
* line 17, set the database password


More information in the documentation "[Using Redis with Java](https://redislabs.com/lp/redis-java/)".


## Conclusion

In this article, you have learned how to:

* retrieve the Redis Server certificate
* generate a client certificate
* protect your database to enforce transport level security (TLS) with 2 ways authentication
* connect to the database from `redis-cli`, Python, Node and Java
