---
title: "JAX-WS: How to configure the service end point at runtime?"

categories:
---
When deploying your Web Service client you often need to change the endpoint of the service that &nbsp;has been set during the code generation. This short post explains how you can set change it at runtime in the client code.

You have two approaches to do that:

* set the endpoint in the `Port` using the `BindingProvider`
* get the endpoint `URL` from the WSDL itself at runtime

### Use the Binding Provider to set the endpoint URL

The first approach is to change the
BindingProvider.ENDPOINT_ADDRESS_PROPERTY property value of the
BindingProvider (Port) using the following code:

``` java
try {
  EmployeeServiceService service = new EmployeeServiceService();
  EmployeeService port = service.getEmployeeServicePort();

  BindingProvider bp = (BindingProvider)port;
  bp.getRequestContext().put(BindingProvider.ENDPOINT_ADDRESS_PROPERTY, "http://server1.grallandco.com:8282/HumanRessources/EmployeeServiceService");

  Employee emp = port.getEmployee(123);

  System.out.println("Result = "+ emp);
} catch (Exception ex) {...}
```

### Use the WSDL to get the endpoint URL

Another part is to set the WSDL when you are creating the Service. The
service will be using the value that is located in the WSDL port -SOAP
Endpoint-. This is simply done using the following code:

``` java
try {
  EmployeeServiceService service =
  new org.demo.service.EmployeeServiceService
  (new URL("http://server1.grallandco.com:8282/HumanRessources/EmployeeServiceService?wsdl"),
  new QName("http://service.demo.org/","EmployeeServiceService"));

  EmployeeService port = service.getEmployeeServicePort();
  Employee emp = port.getEmployee(123);

  System.out.println("Result = "+ emp);
} catch (Exception ex) { ... }
```

Note that, in Glassfish, like lot of Web Service environments the WSDL can generate dynamically the Endpoint URL based on the URL used
    &nbsp;to get the WSDL. With this approach you can also dynamically
    change the Soap endpoint. (If compatible with the network configuration
      of the production environment.)
