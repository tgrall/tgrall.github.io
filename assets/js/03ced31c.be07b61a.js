"use strict";(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[20106],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11937:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return c},toc:function(){return u},default:function(){return h}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"How to protect your REST service and Gadget in eXo Platform",categories:"java exo rest"},l=void 0,p={permalink:"/blog/2011/04/11/how-to-protect-your-rest-service-and-gadget-in-exo-platform",editUrl:"https://github.dev/tgrall/tgrall.github.io/blob/main/blog/2011-04-11-how-to-protect-your-rest-service-and-gadget-in-exo-platform.md",source:"@site/blog/2011-04-11-how-to-protect-your-rest-service-and-gadget-in-exo-platform.md",title:"How to protect your REST service and Gadget in eXo Platform",description:"During a partner workshop I was showing to the developers how the eXo IDE can help them to develop new features quickly and push them to the users in few minutes. A person asked me if it is possible to put some restriction in services and gadgets based on user profile.",date:"2011-04-11T00:00:00.000Z",formattedDate:"April 11, 2011",tags:[],readingTime:6.32,truncated:!1,authors:[],prevItem:{title:"How to create a new Content List Template for eXo Platform 3",permalink:"/blog/2011/08/31/how-to-create-a-new-content-list-template-for-exo-platform-3"},nextItem:{title:"eXo Cloud IDE : develop for the Cloud on the Cloud",permalink:"/blog/2011/03/16/exo-cloud-ide-develop-for-the-cloud-on-the-cloud"}},c={authorsImageUrls:[]},u=[{value:"Access the User Profile from your REST Service",id:"access-the-user-profile-from-your-rest-service",children:[]},{value:"Complete REST Service",id:"complete-rest-service",children:[]},{value:"Consume the service into a Gadget",id:"consume-the-service-into-a-gadget",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],m={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"During a partner workshop I was showing to the developers how the eXo IDE can help them to develop new features quickly and push them to the users in few minutes. A person asked me if it is possible to put some restriction in services and gadgets based on user profile."),(0,a.kt)("p",null,"As you can guess the answer is YES WE CAN!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to access the security context in a REST service"),(0,a.kt)("li",{parentName:"ul"},"How to check is a user is member of a  group and manage permission from this information"),(0,a.kt)("li",{parentName:"ul"},"How to consume this service in a gadget and leverage the security to protect resources")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-eR15bpCaiXo/TZ8yp1kkLYI/AAAAAAAAAPM/8Az5EVfVrzU/s200/rest-no-access.png",alt:null}),"\nNot-authorized"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-wcfWsRgV8Xc/TZ8ypzrBsLI/AAAAAAAAAPE/U9VnHpc3q9M/s200/rest-access.png",alt:null}),"\nAuthorized"),(0,a.kt)("p",null,"If you are not interested to follow steps by step the explanations you can directly jump to the complete ",(0,a.kt)("a",{parentName:"p",href:"#completeService"},"REST Service code")," or download the full eXo IDE Project from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tgrall/sample-gadget-with-security"},"GitHub")),(0,a.kt)("h3",{id:"access-the-user-profile-from-your-rest-service"},"Access the User Profile from your REST Service"),(0,a.kt)("p",null,"As you probably know eXo Platform uses ",(0,a.kt)("a",{parentName:"p",href:"http://jcp.org/en/jsr/detail?id=311"},"JAX-RS")," as API to develop and deploy REST Services. eXo developers can create REST services using their favorite Java IDE, but here I am using the eXo IDE package with ",(0,a.kt)("a",{parentName:"p",href:"http://www.exoplatform.org/company/public/website/platform"},"eXo Platform"),"."),(0,a.kt)("p",null,"To access the security and user information in your service method it is possible to use the ",(0,a.kt)("a",{parentName:"p",href:"http://jersey.java.net/nonav/apidocs/1.5/jersey/javax/ws/rs/core/SecurityContext.html"},"SecurityContext")," class of the JAX-RS API.  Your method signature will look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import javax.ws.rs.Path\nimport javax.ws.rs.GET\nimport javax.ws.rs.PathParam\nimport javax.ws.rs.core.Response\nimport javax.ws.rs.core.MediaType\nimport javax.ws.rs.Produces\nimport javax.ws.rs.core.SecurityContext\nimport javax.ws.rs.core.Context\n\n@Path("/system")\n@Produces("application/json")\npublic class SystemInformationService {\n\n  @GET\n  @Path("information")\n  public Response getSystemInfo(@Context SecurityContext sc) {\n    sc.getUserPrincipal();\n    return Response.ok("foo", MediaType.APPLICATION_JSON).build();\n  }\n\n}\n\n')),(0,a.kt)("p",null,"In lines 7 and 8, I import the classes needed to inject the security context in the method ",(0,a.kt)("inlineCode",{parentName:"p"},"getSystemInfo()")," in line 16. For now let's forget about the other part of the code."),(0,a.kt)("p",null,"With the Security Context object you can now access many things in your code. Two methods are quite interesting for this example: ",(0,a.kt)("inlineCode",{parentName:"p"},"getUserPrincipal()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"isUserInRole()"),", since our goal is to check if a user is allowed to execute or not a part of the business logic."),(0,a.kt)("p",null,"It is important here to remember that we cannot directly use the ",(0,a.kt)("inlineCode",{parentName:"p"},"isUserInRole()"),' method since this method uses the logical JavaEE roles that are defined at the Java application level. In our case we are interested to know if a user is present in a "eXo User Identity" Group, for example member of the ',(0,a.kt)("inlineCode",{parentName:"p"},"/platform/administrators group"),". This information is populated during the login process and comes from the user provider that could be LDAP, the eXo Database or JCR, or any other source since developers can extend this API to plug their own provider."),(0,a.kt)("p",null,"Let's create an helper method that check, using the eXo Identity Service, if the user that executes the method is present in a group."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"...\nimport org.exoplatform.container.ExoContainer;\nimport org.exoplatform.container.ExoContainerContext;\nimport org.exoplatform.container.component.ComponentPlugin;\nimport org.exoplatform.services.security.Identity;\nimport org.exoplatform.services.security.IdentityRegistry;\n...\n...\n\nprivate boolean isMemberOf(String username,String group) {\n  ExoContainer container = ExoContainerContext.getCurrentContainer();\n  IdentityRegistry identityRegistry = (IdentityRegistry) container.getComponentInstanceOfType(IdentityRegistry.class);\n  Identity identity = identityRegistry.getIdentity(username);\n  return identity.isMemberOf( group );\n}\n")),(0,a.kt)("p",null,"So this method is quite simple, it takes as parameter:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the name of the user, that you can get from the ",(0,a.kt)("inlineCode",{parentName:"li"},"UserPrincipal.getName()")," method"),(0,a.kt)("li",{parentName:"ul"},"the eXo Group you want to check, for example ",(0,a.kt)("inlineCode",{parentName:"li"},"/platform/administrator"))),(0,a.kt)("p",null,'You can now call this method from your resource to check the user, and code the "permission business logic". The method could now looks like:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@GET\n@Path("information")\npublic Response getSystemInfo(@Context SecurityContext sc) {\n  String groupToCheck = "/platform/administrators";\n  String response = "";\n  if (sc.getUserPrincipal() == null || !this.isMemberOf(sc.getUserPrincipal().getName(), groupToCheck) ) {\n    response = "NOT-ALLOWED";\n    } else {\n      response = "ALLOWED";\n    }\n    return Response.ok(  response   , MediaType.APPLICATION_JSON).build();\n  }\n...\n')),(0,a.kt)("p",null,"In this example for simplicity reason I have hard coded the group to check, you can obviously use smarter code to user external configuration to inject a list of group to check for example. I manage the security logic of my method using simple if statement and return a string. You can also depending of your needs, manage the status of your response and use HTTP Code for example return an ",(0,a.kt)("a",{parentName:"p",href:"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html#sec10.4.4"},"HTTP 403"),". For this you just need to return a different response using following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    return Response.status(Response.Status.FORBIDDEN).build();\n")),(0,a.kt)("p",null,"For simplicity reason I will stay with a single Response status (OK) and manage the permission in my client code."),(0,a.kt)("h3",{id:"complete-rest-service"},"Complete REST Service"),(0,a.kt)("p",null,'Let\'s take a look to the full service now, this service allows administrators to get the list of the System Properties, other users get an status string "NOT-ALLOWED":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'import javax.ws.rs.Path\nimport javax.ws.rs.GET\nimport javax.ws.rs.PathParam\nimport javax.ws.rs.core.Response\nimport javax.ws.rs.core.MediaType\nimport javax.ws.rs.core.CacheControl\nimport javax.ws.rs.Produces\nimport javax.ws.rs.core.SecurityContext\nimport javax.ws.rs.core.Context\n\nimport org.exoplatform.container.ExoContainer;\nimport org.exoplatform.container.ExoContainerContext;\nimport org.exoplatform.container.component.ComponentPlugin;\nimport org.exoplatform.services.security.Identity;\nimport org.exoplatform.services.security.IdentityRegistry;\n\n@Path("/system")\n@Produces("application/json")\npublic class SystemInformationService {\n\n\n  @GET\n  @Path("information")\n  public Response getSystemInfo(@Context SecurityContext sc) {\n    String groupToCheck = "/platform/administrators";\n    SimpleResponseWrapper response = new SimpleResponseWrapper();\n    String status = "";\n    if (sc.getUserPrincipal() == null || !this.isMemberOf(sc.getUserPrincipal().getName(), groupToCheck) ) {\n      response.status = "NOT-ALLOWED";\n    } else {\n      response.status = "OK";\n      response.data = System.getProperties();\n\n    }  \n\n    CacheControl cacheControl = new CacheControl();\n    cacheControl.setNoCache(true);\n    cacheControl.setNoStore(true);\n    return Response.ok(  response   , MediaType.APPLICATION_JSON).cacheControl(cacheControl).build();\n  }\n\n  private boolean isMemberOf(String username,String role) {\n    ExoContainer container = ExoContainerContext.getCurrentContainer();\n    IdentityRegistry identityRegistry = (IdentityRegistry) container.getComponentInstanceOfType(IdentityRegistry.class);\n    Identity identity = identityRegistry.getIdentity(username);\n    return identity.isMemberOf( role );\n  }\n\n}\n\npublic class SimpleResponseWrapper {\n  String status;\n  Object data;\n}\n\n')),(0,a.kt)("p",null,"To summarize:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Line 24 : the ",(0,a.kt)("inlineCode",{parentName:"li"},"SecurityContext")," is injected to the method"),(0,a.kt)("li",{parentName:"ul"},"Line 26 : Initialization of a simple ",(0,a.kt)("inlineCode",{parentName:"li"},"ResponseWrapper")," defined on line 51, that contains a status and data. That will be serialized in JSON by the eXo REST engine.* Line 28 : the method check if a user is connected and member of `/platform/administratorc. If not it send response with the status NO-ALLOWED."),(0,a.kt)("li",{parentName:"ul"},"Line 31/32 : The response object is sent. This response contains an OK status and the data (system properties list)"),(0,a.kt)("li",{parentName:"ul"},"Line 42 : Using the eXo Identity Service, the method check if the connected user is member of a specific group.")),(0,a.kt)("h3",{id:"consume-the-service-into-a-gadget"},"Consume the service into a Gadget"),(0,a.kt)("p",null,"I can now take this service and consume it into an Gadget. I also develop this Gadget using the eXo IDE."),(0,a.kt)("p",null,"The following code shows the Javascript part of the Gadget that calls the service, check the security and push the response content in Gadget body. For productivity I use JQuery framework."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"<script>\nfunction printInfo(result) {\n  var htmlResponse= [];\n  if (result.status == \"OK\") {\n    var data = result.data;\n    htmlResponse.push(\"<tr>\");\n    $.each(data, function(index, value) {\n      htmlResponse.push('<tr><td>'+ index + '</td><td>' + value + '</td></tr>');\n    });\n    htmlResponse.push(\"</tr>\");\n    $('#systemInfo').height(200);\n  }\n  else {\n    htmlResponse.push(\"Not permitted\");\n    $('#systemInfo').height(50);\n  }\n  $('#systemInfo').html(htmlResponse.join(''));\n  gadgets.window.adjustHeight( $('#sysInfoContainer').outerHeight()  );\n\n}\n\nfunction loadInformationFromServer() {\n  $.getJSON('/rest/private/system/information', function(result){ printInfo(result);   } );\n}\n\nfunction init() {\n  loadInformationFromServer();\n}\n\ngadgets.util.registerOnLoadHandler(init);\n\n<\/script>\n")),(0,a.kt)("p",null,"Here some quick explanation about this code:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Line 23: To call the REST service, I use the ",(0,a.kt)("inlineCode",{parentName:"li"},"$.getJSON()")," method. This method is really easy to use when you are executing the Gadget is in the same container than the portal that consumes it. When you are using the gadget.io.MakeRequest is interesting to proxy a request and you need to re-authenticate, for example using oAuth."),(0,a.kt)("li",{parentName:"ul"},"Line 3 : This is the call back method, as you can see in this method I use the ",(0,a.kt)("inlineCode",{parentName:"li"},"ResponseWrapper")," to check the code in the status attribute. Depending of the status OK or not I do print the value.")),(0,a.kt)("h3",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this how-to you have learned how to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Get the security context in your REST Service"),(0,a.kt)("li",{parentName:"ul"},"Check the membership of a user using the eXo Identity Service"),(0,a.kt)("li",{parentName:"ul"},"Create a gadget that consume this service and expose only data to user with correct profile"),(0,a.kt)("li",{parentName:"ul"},"Download the full project from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/tgrall/sample-gadget-with-security"},"GitHub"))))}h.isMDXComponent=!0}}]);