---
title: "Sample Code: BLOB insertion in Oracle10g"
categories: [java, jdbc ,oracle]
---

Responding to a customer question about Blob insertion in Oracle 10g DB using the JDBC 3.0 driver. Very Simple application. [Download Java Source](http://www.grallandco.com/blog/archives/BlobOracle.java) See insertBlob method.

``` java
package demo;

import java.sql.*;
import java.io.*;
import java.sql.PreparedStatement;
import java.util.*;

import oracle.jdbc.driver.*;
import oracle.sql.BLOB;



/**
* Insert record in the MEDIA table
*   MEDIA (file_name varchar2(256), file_content BLOB);
*/
public class BlobOracle
{
  private final static String hostname = "localhost";
  private final static String port = "1521";
  private final static String sid = "ORCL";
  private final static String username = "scott";
  private final static String password = "tiger";
  private static String fileLocation;
  private static Connection connection;

  public BlobOracle()
  {
  }

  /**
  *
  * @param args
  */
  public static void main(String[] args)
  {
    try
    {
      if (args.length == 0)
      {
        System.out.println("\n\n  Usage demo.BlobOracle ");
        System.exit(0);
      }

      fileLocation = args[0];

      setConnection();
      insertBLOB();

    } catch (Exception ex)
    {
      ex.printStackTrace();
      } finally
      {
      }
    }


    private static void setConnection() throws SQLException
    {
      DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver());
      connection = DriverManager.getConnection("jdbc:oracle:thin:@"+hostname+ ":"+ port +":"+ sid , username , password);
      connection.setAutoCommit(false); // we must control the commit
    }

    private static void insertBLOB() throws SQLException, Exception
    {
      BLOB blob;
      File file ;
      FileInputStream is;
      OutputStream os;

      long ts1 = System.currentTimeMillis();


      //Create a statement.
      PreparedStatement pstmt = connection.prepareStatement("insert into media (file_name, file_content) values (?,empty_blob())");
      file = new File(fileLocation);
      String fileName = file.getName();
      //Set the file name and execute the query
      pstmt.setString(1, fileName);
      pstmt.execute();

      //Take back the record for update (we will insert the blob)
      //supposely the file name is the PK
      pstmt = connection.prepareStatement("select file_content from media where file_name = ? for update");
      pstmt.setString(1, fileName);

      //Execute the query, and we must have one record so take it
      ResultSet rset = pstmt.executeQuery();
      rset.next();

      //Use the OracleDriver resultset, we take the blob locator
      blob = ((OracleResultSet)rset).getBLOB("file_content");

      is = new FileInputStream(file); //Create a stream from the file
      // JDBC 2.0
      //os = blob.getBinaryOutputStream(); //get the output stream from the Blob to insert it
      // JDBC 3.0
      os = blob.setBinaryStream(0); //get the output stream from the Blob to insert it

      //Read the file by chuncks and insert them in the Blob. The chunk size come from the blob
      byte[] chunk = new byte[blob.getChunkSize()];
      int i=-1;
      System.out.println("Inserting the Blob");
      while((i = is.read(chunk))!=-1)
      {
        os.write(chunk,0,i); //Write the chunk
        System.out.print('.'); // print progression
      }

      // When done close the streams
      is.close();
      os.close();

      //Close the statement and commit
      pstmt.close();
      long ts2 = System.currentTimeMillis();

      connection.commit();
      connection.close();

      System.out.println("\n"+ (ts2 - ts1) +" ms" );


    }


  }
```
