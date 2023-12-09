---
title: "OracleAS OC4J and Java EE releases...."

categories: oc4j oracle
---
This morning I was helping a customer to debug some Web Services deployment issues, when I simply realized that the error was coming from the fact that he was trying to deploy a JAX-RPC service on a OracleAS 10gR2 server; where it is not supported/available.

This give me the opportunity to clarify the different versions of the Oracle Application Server and their related Java Enterprise Edition release support.

<table class="tug" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td class="tug">Oracle AS Release</td>
      <td class="tug">J2EE/Java EE Release</td>
      <td class="tug">Comments/Extensions</td>
      <td class="tug">Certification Matrix</td>
    </tr>
    <tr>
      <td class="tug">11.1.0.0</td>
      <td class="tug">Java EE 5.0</td>
      <td class="tug">* Currently available as technology preview</td>
      <td class="tug"></td>
    </tr>
    <tr>
      <td class="tug">10.1.3.x (Oracle AS 10gR3)</td>
      <td class="tug">J2EE 1.4</td>
      <td class="tug">
        * Support of EJB 3/JPA * Web Services Annotations * MTOM support
        (10.1.3.1) * Integration of Spring 2.0 (10.1.3.2) * Integrationf of
        Oracle Coherence (10.1.3.3)
      </td>
      <td class="tug">
        [OTN Certicification
        Matrix](http://www.oracle.com/technology/software/products/ias/files/oracle_soa_certification_101310.html)
      </td>
    </tr>
    <tr>
      <td class="tug">10.1.2.x (Oracle AS 10gR2)</td>
      <td class="tug">J2EE 1.3</td>
      <td class="tug"></td>
      <td class="tug">
        [OTN Certicification
        Matrix](http://www.oracle.com/technology/software/products/ias/files/as_certification_r2_101202.html)
      </td>
    </tr>
    <tr>
      <td class="tug">9.0.4.x</td>
      <td class="tug">J2EE 1.3</td>
      <td class="tug"></td>
      <td class="tug">
        [OTN Certicification
        Matrix](http://www.oracle.com/technology/software/products/ias/files/as-certification-904.html)
      </td>
    </tr>
    <tr>
      <td class="tug">9.0.3.x</td>
      <td class="tug">J2EE 1.3</td>
      <td class="tug"></td>
      <td class="tug">
        [OTN Certicification
        Matrix](http://www.oracle.com/technology/software/products/ias/files/as_certification_r2_101202.html)
      </td>
    </tr>
  </tbody>
</table>
