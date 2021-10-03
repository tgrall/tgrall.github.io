---
title: "OmniPortlet tip: use stored procedure with the SQL data source"
---

OmniPortlet provides to page designer an easy and powerful way to publish
content from different data sources. One of the data source is a SQL data source
that allow you to connect to a relational database using JDBC. Obviously you can
enter any SQL statement, but you can also consume a REF CURSOT returned by a
procedure.

That is really interesting if you want to add business logic to your data,or
have to set some specific code before the execution of the query.

To to it you have to create a <b>procedure</b> that has the first parameter the
return a ref cursor:
`procedure get_employee_for_dept(p_ref_cursor out ref_cursor, p_dept in number);`


Here a complete package based on the SCOTT sample schema:



```
 create or replace package EMPLOYEE_API
 as
 -- create a ref cursor type that will be return to the consumer
 type ref_cursor is ref cursor;

 -- return in the p_ref_cursor the list of employees for the department p_dept

 procedure get_employee_for_dept(p_ref_cursor out ref_cursor, p_dept in number);
 end;
 create or replace package body EMPLOYEE_API
 as
 -- return in the p_ref_cursor the list of employees for the department p_dept
 procedure get_employee_for_dept(p_ref_cursor out ref_cursor, p_dept in number)
 as
 begin
  -- open the cusor based on the emp table

  OPEN p_ref_cursor FOR
  SELECT * from emp WHERE deptno = p_dept;
 end;

 end;
```


In the Statement field of the OmniPortlet SQL data source you can now enter:
<span class="code">
call EMPLOYEE_API.get_employee_for_dept('10')

</span>

<p>Enjoy OmniPortlet !</p>
