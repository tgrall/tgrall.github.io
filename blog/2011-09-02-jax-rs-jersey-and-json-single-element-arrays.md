---
title: "JAX-RS: Jersey and JSON single element arrays"

categories: java rest json
---
Last week I have been struggling with a small issue while developing a service using Jersey.

The goal of this service is to provide JSON object to my Web application, so called directly from the browser. This service returns in a JSON array a list of Employees, something like:

``` javascript
{"employee":[
{"email":"jdoe@example.com","firstName":"John","lastName":"Doe"},
{"email":"mmajor@example.com","firstName":"Mary","lastName":"Major"}
]}
```

So an "employee" array, this is perfect and expected, but when my service returns a single element the returned object looks like:

``` javascript
{"employee":{"email":"jdoe@example.com","firstName":"John","lastName":"Doe"}}
```

As you can see brackets **[...]** are missing around the employee item. This is an issue since your client code is expecting an array.

<!-- truncate -->

#### A solution...

My application is using Jersey, the JAX-RS Reference Implementation, and JAXB for the serialization of Java Objects to JSON, as I have explained in a [previous blog post](http://tugdualgrall.blogspot.com/2010/02/create-and-deploy-jax-rs-rest-service.html). I found a solution to this by creating a new [JAXB Context Resolver](http://jersey.java.net/nonav/documentation/latest/json.html#d4e919).

In this resolver I can control how the JSON object should be generated, here is my implementation :

``` java
import com.grallandco.employee.service.converter.EmployeeConverter;
import javax.ws.rs.ext.ContextResolver;
import javax.ws.rs.ext.Provider;
import javax.xml.bind.JAXBContext;

import com.sun.jersey.api.json.JSONConfiguration;
import com.sun.jersey.api.json.JSONJAXBContext;

@Provider
public class JAXBContextResolver implements ContextResolver &lt; JAXBContext &gt; {

  private JAXBContext context;
  private Class[] types = {EmployeeConverter.class};

  public JAXBContextResolver() throws Exception {
    this.context = new JSONJAXBContext(JSONConfiguration.mapped().arrays("employee").build(),
    types);

  }

  public JAXBContext getContext(Class objectType) {
    for (Class type : types) {
      if (type == objectType) {
        return context;
      }
    }
    return null;
  }
}

```

First of all I declare this new class as a [`@Provider`](http://jersey.java.net/nonav/apidocs/1.7/jersey/index.html?javax/ws/rs/ext/Provider.html) to say that it this class is of interest to the JAX-RS runtime.

I put in the `types` array the list of the Java classes that are concerned by the serialization (line#13). Then I create the ContextResolved with the different options that fulfill my requirements. You can take a look to the [`JAXBContextResolver`](http://jersey.java.net/nonav/apidocs/1.7/jersey/index.html?com/sun/jersey/api/json/JSONJAXBContext.html) Javadoc to see all the possible options available.

With this class, the service now returned the following JSON String:

``` javascript
{"employee":[{"email":"jdoe@example.com","firstName":"John","lastName":"Doe"}]}
```

You can find a complete example (NetBeans project) [here](https://github.com/tgrall/Sample-REST-Service-using-JSON).
