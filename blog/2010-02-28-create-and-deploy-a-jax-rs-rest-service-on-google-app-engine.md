---
title: "Create and Deploy a JAX-RS REST service on Google App Engine"

categories: java gae google cloud rest
---
In this article you will learn how to create a REST service using JAX-RS reference implementation (Jersey) and deploy it on Google AppEngine.

###  Prerequisites

For this tutorial you will need:

* a Google AppEngine account : [http://code.google.com/appengine/](http://code.google.com/appengine/)
* Eclipse Galileo (3.5.x)
* Google App Engine SDK for Java

<!-- truncate -->

* Install the Google Plugin for Eclipse as documented [here](http://code.google.com/eclipse/docs/install-eclipse-3.5.html) (Check that you are using the release 1.3.1 of the GAE Java SDK, if not download it and configure the plugin to use it)
  * it is also useful to have the AppEngine documentation locally, you can download it from [here](http://code.google.com/appengine/downloads.html#Download_the_Google_App_Engine_Documentation).
  * JAX-RS Reference Implementation, be sure you take the
  Jersey 1.1.5 release. You can download it from [here](https://jersey.dev.java.net/).
  * Unzip the file in a directory that we will call `$JERSEY_HOME`
  * JAXB 2.2 Implementation to simplify the marshalling/unmarshalling of the XML, and also facilitate the JSON support. Download it from [here](https://jaxb.dev.java.net/)

### Creating new application

To create a new App Engine project in Eclipse:

1-  Click on the "**New Web Application Project**" button ![](http://2.bp.blogspot.com/_aoQgQ1obiyE/S4pv-VRkifI/AAAAAAAAAKc/cNoURwz9n8M/s320/new_app_button.png) in the toolbar . It is also possible to do it using the menu **File &gt; Web Application Project**

2-  The "Create a Web Application Project" wizard opens:

* Project Name: `EmployeeService`
* Package : `com.grallandco.employee.service`
* Uncheck "`Use Google Web Toolkit`"
* Check that the SDK version your are using is "`App Engine 1.3.0`"; if not configure the project to use it.
* The screen should look like the following screen :

![](http://3.bp.blogspot.com/_aoQgQ1obiyE/S4pu9erB81I/AAAAAAAAAKE/ER3aDZKd520/s320/app-engine-wizard.png )

* Click Finish
* The project should look like the following screen :

![](http://4.bp.blogspot.com/_aoQgQ1obiyE/S4pvDuZVWQI/AAAAAAAAAKM/8I2aUTtx7Os/s320/project-structure.png )


#### Running the application

The App Egine SDK, installed with the Eclipse plugin contains a Web server (based on Jetty), that could be used for testing and debugging. To test that your application has been created correctly select the menu **Run &gt; Run As &gt; Web Application**. I personally most of the time run my server using the debug command **Run &gt; DebugAs &gt; Web Application**. In debug mode you can change source code and test is without restarting the server.

The web server is starting automatically, you should see the following messagein the Eclipse console

The server is runningat `http://localhost:8080/`

You can access the application, and the sample servlet that has been created using the URL: `http://localhost:8080/employeeservice`.

To stop the server, click on the terminate button ![]( http://1.bp.blogspot.com/_aoQgQ1obiyE/S4pvYft_VPI/AAAAAAAAAKU/UCNDdfNlEnM/s320/terminate_button.png ) in the Eclipse console.

### Configuring the REST support in the application

To be able to create and run REST services in your application you need to:

* Add the JAX-RS, JAXB Jars in your project and application
* Configure the web application (web.xml) to handle REST requests **Add JAX-RS, JAXB to your project**

1.  Right click on the project and select menu entry **Build Path &gt; Configure Build Path...**
2.  Click on the Add External JARs button
3.  Select all the JARs located in $JERSEY_HOME/lib and $JAXB_HOME/lib folders. You can for better visibility and reuse create a user library with all these JARs
4.  You also need to copy the JARs in the web-inf/lib directory of your application, this step is mandatory to be sure that the JARs are included in the application when deployed to App Engine.
 *Note: I do not like this step. I would prefer to do that by configuration of the build path, to automatically add the JARs to the WEB-INF/lib directory when executing/deploying the application. Unfortunately I did not find the way to do it, so if you know it, feel free to post a comment and I will
  update the article.*

**Configure the web application**

In this step you will register a new URI to handle REST requests. To do that you need to register a new servlet that is using the Jersey API and configure it to a specific URI (eg: /ressources  and/or /rest) and configure what are the Java packages that contain the REST implementation classes. So you need to modify the web.xml of your application with the following entries:

``` xml
<servlet>
  <servlet-name>Jersey Web Application</servlet-name>
  <servlet-class>com.sun.jersey.spi.container.servlet.ServletContainer</servlet-class>
  <init-param>
    <param-name>com.sun.jersey.config.property.packages</param-name>
    <param-value>com.grallandco.employee.service.rest.impl</param-value>
  </init-param>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>Jersey Web Application</servlet-name>
  <url-pattern>/resources/*</url-pattern>
</servlet-mapping>
<servlet-mapping>
  <servlet-name>Jersey Web Application</servlet-name>
  <url-pattern>/rest/*</url-pattern>
</servlet-mapping>
```

This servlet that will answer to the /resources/ and /rest/ URL. The configuration parameter `com.sun.jersey.config.property.packages` is used by Jersey to list the packages where REST services implementation are located.Note that you can put as many package as you need to, you just need to separate the package names by a ; .

### Creating a simple REST Service to test the environment

The project is now ready to contain REST service. It is time to create  one.Create for example the class `com.grallandco.employee.service.rest.impl.HelloWorldResource`, be sure to use the package name that you have configured in the web.xml for the Jersey servlet, based on the configuration we have made in previous step the package is `com.grallandco.employee.service.rest.impl`

Here a sample class with the JAX-RS annotations:

``` java
package com.grallandco.employee.service.rest.impl;
import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
@Path("/hr/")
public class EmployeeResource {

  @GET
  @Produces("text/plain")
  @Path("/employee")
  public String getEmployee() {
    return "Hello World!";
  }
}
```

You should be able to test it, stop the server and run it again, enter the following URL in your browser:

`http://localhost:8080/resources/hr/employee`

or

`http://localhost:8080/rest/hr/employee`

#### Deploying the application to Google App Engine

Before deploying the application you need to register a new application in Google App Engine using the Administartion Console, see the documentation [here](http://code.google.com/appengine/docs/theadminconsole.html). In my example I have used "`tugdual`" as Application ID.

You can easily now deploy the application to Google App Engine by clicking on the  "Deploy App Engine Project" button "Deploy App Engine Project Button") available in the Eclipse toolbar.

To be able to deploy your application to Google App Engine, you need to check that your application can be registered, the application ID is stored  in the `WEB-INF/lib/appengine-web.xml`.

``` xml
<?xml version="1.0" encoding="utf-8"?>
<appengine-web-app xmlns="http://appengine.google.com/ns/1.0">
  <application>[your-application-id]</application>
  <version>1</version>
  <!-- Configure java.util.logging -->
  <system-properties>
    <property name="java.util.logging.config.file" value="WEB-INF/logging.properties"/>
  </system-properties>
</appengine-web-app>
```


The App Engine deploy button prompts you for multiple informations: username (your Google account) and password.

When the deployment is complete you can access your application using the following URL:

`http://[your-application-id].appspot.com/resources/hr/employee`

or

`http://[your-application-id].appspot.com/rest/hr/employee`

### Ading XML and JSON support to the service

Let's now add new method to manipulate an "Employee" object using the service, and the data format should be based on JSON and XML. This is where JAXB is useful, since it allows easily to transform marshall/unmarshall Java objects in XML -obviously- and JSON (cool isn't!)

#### Creating an Employee Class

Start with the creation of a new class to manipulate Employee data, this is a very simple Java class that could look like the following code:

``` java
package com.grallandco.employee.service.model;
import java.util.Date;

public class Employee {
  private String firstName;
  private String lastName;
  private Date hireDate;
  private String email;
  public Employee(String firstName, String lastName, Date hireDate, String email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.hireDate = hireDate;
    this.email = email;
  }
  public Employee() {}
    public String getFirstName() {
      return firstName;
    }
    public void setFirstName(String firstName) {
      this.firstName = firstName;
    }
    public String getLastName() {
      return lastName;
    }
    public void setLastName(String lastName) {
      this.lastName = lastName;
    }
    public Date getHireDate() {
      return hireDate;
    }
    public void setHireDate(Date hireDate) {
      this.hireDate = hireDate;
    }
    public String getEmail() {
      return email;
    }
    public void setEmail(String email) {
      this.email = email;
    }
    public String toString() {
      StringBuffer sb = new StringBuffer();
      sb.append("First: ").append(getFirstName());
      sb.append(" - Last: ").append(getLastName());
      sb.append(" - Date: ").append(getHireDate());
      sb.append(" - Email: ").append(getEmail());
      return sb.toString();
    }
  }
```


When implementing your "real" application with some persistence layer
this POJO is the one as JDO/JPA entity.

#### Create a Converter class for your entity

I usually encapsulate all the transformation in some converter class, like that I do not directly couple my business class to the serialisation mechanism. (So I do that for classes and lists of classes). So instead of adding the JAXB annotations to the Employee class itself, let's create an EmployeeConverter class that will be responsible of the transformation and used by your REST service.

``` java
package com.grallandco.employee.service.converter;

import java.util.Date;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import com.grallandco.employee.service.model.Employee;

@XmlRootElement(name = "employee")
public class EmployeeConverter {
  private Employee entity = null;
  public EmployeeConverter() {
    entity = new Employee();
  }

  public EmployeeConverter(Employee entity) {
    this.entity = entity;
  }

  @XmlElement
  public String getFirstName() {
    return entity.getFirstName();
  }

  @XmlElement
  public String getLastName() {
    return entity.getLastName();
  }

  @XmlElement
  public Date getHireDate() {
    return entity.getHireDate();
  }

  @XmlElement
  public String getEmail() {
    return entity.getEmail();
  }

  public Employee getEmployee() {
    return entity;
  }

  public void setFirstName(String firstName) {
    entity.setFirstName(firstName);
  }

  public void setHireDate(Date hireDate) {
    entity.setHireDate(hireDate);
  }

  public void setLastName(String email) {
    entity.setEmail(email);
  }

  public void setEmail(String lastName) {
    entity.setLastName(lastName);
  }
}

```

You can now update your service to use this utility/converter class to return XML or JSON ojbect based on the content type of the request.

#### Add support to JSON and XML to your REST service

You need to change the `EmployeeRessource` class, to change the signature and add new annotations of the `getEmployee()` method.

The annotation you are adding:

* `@Produces({"application/xml", "application/json"})` : indicates which type of content will be produced by the service. Based on the type of the request.
* `@Path("/employee/{employeeEmail}/")` : change the Path to indicate a Path parameter, here for example the URL can accept an email in the URI - not the best example, but you get the point...
* `public EmployeeConverter getEmployee( @PathParam ("employeeEmail") String email)` : change the type returned by the method and take a parameter as String that match the Path param defined in the @Path annotation.

Here the complete class code:

``` java
package com.grallandco.employee.service.rest.impl;

import javax.ws.rs.Path;
import javax.ws.rs.GET;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import com.grallandco.employee.service.converter.EmployeeConverter;
import com.grallandco.employee.service.model.Employee;

@Path("/hr/")
public class EmployeeRessource {


  @GET
  @Produces({"application/xml", "application/json"})
  @Path("/employee/{employeeEmail}/")
  public EmployeeConverter getEmployee( @PathParam ("employeeEmail") String email) {
    //dummy code
    Employee emp = new Employee();
    emp.setEmail(email);
    emp.setFirstName("John");
    emp.setLastName("Doe");
    EmployeeConverter converter = new EmployeeConverter(emp);
    return converter;
  }
}

```

### Test the service

You can now run the server locally and test the service

`http://localhost:8080/resources/hr/employee/tug@grallandco.com`

This will return an XML document.

If you want to test the JSON call you have multiple choice:

* Using following command

``` bash
tgrall$ curl -H "Accept: application/json" http://localhost:8080/resources/hr/employee/tug@grallandco.com
    {"email":"tug@grallandco.com","firstName":"John","lastName":"Doe"}
```

* Using an HTTP client that allows your to configure/set the HTTP request completely, I am using the [Poster Firefox Plugin](https://addons.mozilla.org/en-US/firefox/addon/2691)
* Using some Javascript code in an application

You can repeat the test on your deployed application on Google AppEngine.

### Conclusion

In this article you have learned how to create and deploy a new REST Service on Google App Engine. This service has been created with the JAX-RS Reference Implementation the Jersey project. In the next article you will learn how to add persistence and create a CRUD Rest service on Google App Engine.
