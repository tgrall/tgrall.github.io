---
title: "How to protect your REST service and Gadget in eXo Platform"

categories: java exo rest
---
During a partner workshop I was showing to the developers how the eXo IDE can help them to develop new features quickly and push them to the users in few minutes. A person asked me if it is possible to put some restriction in services and gadgets based on user profile.

As you can guess the answer is YES WE CAN!

* How to access the security context in a REST service
* How to check is a user is member of a  group and manage permission from this information
* How to consume this service in a gadget and leverage the security to protect resources

![](http://1.bp.blogspot.com/-eR15bpCaiXo/TZ8yp1kkLYI/AAAAAAAAAPM/8Az5EVfVrzU/s200/rest-no-access.png )
Not-authorized


![](http://2.bp.blogspot.com/-wcfWsRgV8Xc/TZ8ypzrBsLI/AAAAAAAAAPE/U9VnHpc3q9M/s200/rest-access.png )
Authorized

If you are not interested to follow steps by step the explanations you can directly jump to the complete [REST Service code](#completeService) or download the full eXo IDE Project from [GitHub](https://github.com/tgrall/sample-gadget-with-security)

### Access the User Profile from your REST Service

As you probably know eXo Platform uses [JAX-RS](http://jcp.org/en/jsr/detail?id=311) as API to develop and deploy REST Services. eXo developers can create REST services using their favorite Java IDE, but here I am using the eXo IDE package with [eXo Platform](http://www.exoplatform.org/company/public/website/platform).

To access the security and user information in your service method it is possible to use the [SecurityContext](http://jersey.java.net/nonav/apidocs/1.5/jersey/javax/ws/rs/core/SecurityContext.html) class of the JAX-RS API.  Your method signature will look like:

``` java
import javax.ws.rs.Path
import javax.ws.rs.GET
import javax.ws.rs.PathParam
import javax.ws.rs.core.Response
import javax.ws.rs.core.MediaType
import javax.ws.rs.Produces
import javax.ws.rs.core.SecurityContext
import javax.ws.rs.core.Context

@Path("/system")
@Produces("application/json")
public class SystemInformationService {

  @GET
  @Path("information")
  public Response getSystemInfo(@Context SecurityContext sc) {
    sc.getUserPrincipal();
    return Response.ok("foo", MediaType.APPLICATION_JSON).build();
  }

}

```

In lines 7 and 8, I import the classes needed to inject the security context in the method `getSystemInfo()` in line 16. For now let's forget about the other part of the code.

With the Security Context object you can now access many things in your code. Two methods are quite interesting for this example: `getUserPrincipal()` and `isUserInRole()`, since our goal is to check if a user is allowed to execute or not a part of the business logic.

It is important here to remember that we cannot directly use the `isUserInRole()` method since this method uses the logical JavaEE roles that are defined at the Java application level. In our case we are interested to know if a user is present in a "eXo User Identity" Group, for example member of the `/platform/administrators group`. This information is populated during the login process and comes from the user provider that could be LDAP, the eXo Database or JCR, or any other source since developers can extend this API to plug their own provider.

Let's create an helper method that check, using the eXo Identity Service, if the user that executes the method is present in a group.

``` java
...
import org.exoplatform.container.ExoContainer;
import org.exoplatform.container.ExoContainerContext;
import org.exoplatform.container.component.ComponentPlugin;
import org.exoplatform.services.security.Identity;
import org.exoplatform.services.security.IdentityRegistry;
...
...

private boolean isMemberOf(String username,String group) {
  ExoContainer container = ExoContainerContext.getCurrentContainer();
  IdentityRegistry identityRegistry = (IdentityRegistry) container.getComponentInstanceOfType(IdentityRegistry.class);
  Identity identity = identityRegistry.getIdentity(username);
  return identity.isMemberOf( group );
}
```

So this method is quite simple, it takes as parameter:

* the name of the user, that you can get from the `UserPrincipal.getName()` method
* the eXo Group you want to check, for example `/platform/administrator`

You can now call this method from your resource to check the user, and code the "permission business logic". The method could now looks like:

``` java
@GET
@Path("information")
public Response getSystemInfo(@Context SecurityContext sc) {
  String groupToCheck = "/platform/administrators";
  String response = "";
  if (sc.getUserPrincipal() == null || !this.isMemberOf(sc.getUserPrincipal().getName(), groupToCheck) ) {
    response = "NOT-ALLOWED";
    } else {
      response = "ALLOWED";
    }
    return Response.ok(  response   , MediaType.APPLICATION_JSON).build();
  }
...
```

In this example for simplicity reason I have hard coded the group to check, you can obviously use smarter code to user external configuration to inject a list of group to check for example. I manage the security logic of my method using simple if statement and return a string. You can also depending of your needs, manage the status of your response and use HTTP Code for example return an [HTTP 403](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4). For this you just need to return a different response using following code:

``` java
    return Response.status(Response.Status.FORBIDDEN).build();
```

For simplicity reason I will stay with a single Response status (OK) and manage the permission in my client code.


### Complete REST Service

Let's take a look to the full service now, this service allows administrators to get the list of the System Properties, other users get an status string "NOT-ALLOWED":


``` java
import javax.ws.rs.Path
import javax.ws.rs.GET
import javax.ws.rs.PathParam
import javax.ws.rs.core.Response
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.CacheControl
import javax.ws.rs.Produces
import javax.ws.rs.core.SecurityContext
import javax.ws.rs.core.Context

import org.exoplatform.container.ExoContainer;
import org.exoplatform.container.ExoContainerContext;
import org.exoplatform.container.component.ComponentPlugin;
import org.exoplatform.services.security.Identity;
import org.exoplatform.services.security.IdentityRegistry;

@Path("/system")
@Produces("application/json")
public class SystemInformationService {


  @GET
  @Path("information")
  public Response getSystemInfo(@Context SecurityContext sc) {
    String groupToCheck = "/platform/administrators";
    SimpleResponseWrapper response = new SimpleResponseWrapper();
    String status = "";
    if (sc.getUserPrincipal() == null || !this.isMemberOf(sc.getUserPrincipal().getName(), groupToCheck) ) {
      response.status = "NOT-ALLOWED";
    } else {
      response.status = "OK";
      response.data = System.getProperties();

    }  

    CacheControl cacheControl = new CacheControl();
    cacheControl.setNoCache(true);
    cacheControl.setNoStore(true);
    return Response.ok(  response   , MediaType.APPLICATION_JSON).cacheControl(cacheControl).build();
  }

  private boolean isMemberOf(String username,String role) {
    ExoContainer container = ExoContainerContext.getCurrentContainer();
    IdentityRegistry identityRegistry = (IdentityRegistry) container.getComponentInstanceOfType(IdentityRegistry.class);
    Identity identity = identityRegistry.getIdentity(username);
    return identity.isMemberOf( role );
  }

}

public class SimpleResponseWrapper {
  String status;
  Object data;
}

```


To summarize:

* Line 24 : the `SecurityContext` is injected to the method
* Line 26 : Initialization of a simple `ResponseWrapper` defined on line 51, that contains a status and data. That will be serialized in JSON by the eXo REST engine.* Line 28 : the method check if a user is connected and member of `/platform/administratorc. If not it send response with the status NO-ALLOWED.
* Line 31/32 : The response object is sent. This response contains an OK status and the data (system properties list)
* Line 42 : Using the eXo Identity Service, the method check if the connected user is member of a specific group.

### Consume the service into a Gadget

I can now take this service and consume it into an Gadget. I also develop this Gadget using the eXo IDE.

The following code shows the Javascript part of the Gadget that calls the service, check the security and push the response content in Gadget body. For productivity I use JQuery framework.

``` javascript
<script>
function printInfo(result) {
  var htmlResponse= [];
  if (result.status == "OK") {
    var data = result.data;
    htmlResponse.push("<tr>");
    $.each(data, function(index, value) {
      htmlResponse.push('<tr><td>'+ index + '</td><td>' + value + '</td></tr>');
    });
    htmlResponse.push("</tr>");
    $('#systemInfo').height(200);
  }
  else {
    htmlResponse.push("Not permitted");
    $('#systemInfo').height(50);
  }
  $('#systemInfo').html(htmlResponse.join(''));
  gadgets.window.adjustHeight( $('#sysInfoContainer').outerHeight()  );

}

function loadInformationFromServer() {
  $.getJSON('/rest/private/system/information', function(result){ printInfo(result);   } );
}

function init() {
  loadInformationFromServer();
}

gadgets.util.registerOnLoadHandler(init);

</script>
```

Here some quick explanation about this code:

* Line 23: To call the REST service, I use the `$.getJSON()` method. This method is really easy to use when you are executing the Gadget is in the same container than the portal that consumes it. When you are using the gadget.io.MakeRequest is interesting to proxy a request and you need to re-authenticate, for example using oAuth.
* Line 3 : This is the call back method, as you can see in this method I use the `ResponseWrapper` to check the code in the status attribute. Depending of the status OK or not I do print the value.

### Conclusion

In this how-to you have learned how to:

* Get the security context in your REST Service
* Check the membership of a user using the eXo Identity Service
* Create a gadget that consume this service and expose only data to user with correct profile
* Download the full project from [GitHub](https://github.com/tgrall/sample-gadget-with-security)
