---
title: "BPEL in Cluster: In which node my process is working"

categories: soa oracle
---
I was helping a customer with his BPEL in cluster and we needed to follow the flow and on which machine the instance was running.

I simply use a `bpel:exec` activity with the following code:


``` java
java.net.InetAddress addr = null;

try {
  addr = java.net.InetAddress.getLocalHost();
}
catch (Exception e) {
  System.out.println("EXCEPTION :"+ e);
}
setVariableData("HostNameVariable", addr.getCanonicalHostName());
```

This code is just an example of what could be done. Here I am using java.net code API and put the result in a BPEL global variable using the <span style="font-family:monospace;"></span>setVariableData method. Obviously you will use appropriate code to differenciate the different nodes for example the name of the OC4J instance, hostname, ... or any interesting value.
