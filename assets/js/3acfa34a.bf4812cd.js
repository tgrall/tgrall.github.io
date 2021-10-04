(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[34015],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(b,a(a({ref:t},p),{},{components:n})):r.createElement(b,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15801:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],l={title:"Sample Code: BLOB insertion in Oracle10g",categories:["java","jdbc","oracle"]},c=void 0,s={permalink:"/blog/2004/10/01/sample-code-blob-insertion-in-oracle10g",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2004-10-01-sample-code-blob-insertion-in-oracle10g.md",source:"@site/blog/2004-10-01-sample-code-blob-insertion-in-oracle10g.md",title:"Sample Code: BLOB insertion in Oracle10g",description:"Responding to a customer question about Blob insertion in Oracle 10g DB using the JDBC 3.0 driver. Very Simple application. Download Java Source See insertBlob method.",date:"2004-10-01T00:00:00.000Z",formattedDate:"October 1, 2004",tags:[],readingTime:2.02,truncated:!1,authors:[],prevItem:{title:"Good taste tool: del.icio.us",permalink:"/blog/2004/10/03/good-taste-tool-del-dot-icio-dot-us"},nextItem:{title:"Struts or JSF by Craig McClanahan",permalink:"/blog/2004/09/29/struts-or-jsf-by-craig-mcclanahan"}},p={authorsImageUrls:[]},u=[],m={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Responding to a customer question about Blob insertion in Oracle 10g DB using the JDBC 3.0 driver. Very Simple application. ",(0,i.kt)("a",{parentName:"p",href:"http://www.grallandco.com/blog/archives/BlobOracle.java"},"Download Java Source")," See insertBlob method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'package demo;\n\nimport java.sql.*;\nimport java.io.*;\nimport java.sql.PreparedStatement;\nimport java.util.*;\n\nimport oracle.jdbc.driver.*;\nimport oracle.sql.BLOB;\n\n\n\n/**\n* Insert record in the MEDIA table\n*   MEDIA (file_name varchar2(256), file_content BLOB);\n*/\npublic class BlobOracle\n{\n  private final static String hostname = "localhost";\n  private final static String port = "1521";\n  private final static String sid = "ORCL";\n  private final static String username = "scott";\n  private final static String password = "tiger";\n  private static String fileLocation;\n  private static Connection connection;\n\n  public BlobOracle()\n  {\n  }\n\n  /**\n  *\n  * @param args\n  */\n  public static void main(String[] args)\n  {\n    try\n    {\n      if (args.length == 0)\n      {\n        System.out.println("\\n\\n  Usage demo.BlobOracle ");\n        System.exit(0);\n      }\n\n      fileLocation = args[0];\n\n      setConnection();\n      insertBLOB();\n\n    } catch (Exception ex)\n    {\n      ex.printStackTrace();\n      } finally\n      {\n      }\n    }\n\n\n    private static void setConnection() throws SQLException\n    {\n      DriverManager.registerDriver(new oracle.jdbc.driver.OracleDriver());\n      connection = DriverManager.getConnection("jdbc:oracle:thin:@"+hostname+ ":"+ port +":"+ sid , username , password);\n      connection.setAutoCommit(false); // we must control the commit\n    }\n\n    private static void insertBLOB() throws SQLException, Exception\n    {\n      BLOB blob;\n      File file ;\n      FileInputStream is;\n      OutputStream os;\n\n      long ts1 = System.currentTimeMillis();\n\n\n      //Create a statement.\n      PreparedStatement pstmt = connection.prepareStatement("insert into media (file_name, file_content) values (?,empty_blob())");\n      file = new File(fileLocation);\n      String fileName = file.getName();\n      //Set the file name and execute the query\n      pstmt.setString(1, fileName);\n      pstmt.execute();\n\n      //Take back the record for update (we will insert the blob)\n      //supposely the file name is the PK\n      pstmt = connection.prepareStatement("select file_content from media where file_name = ? for update");\n      pstmt.setString(1, fileName);\n\n      //Execute the query, and we must have one record so take it\n      ResultSet rset = pstmt.executeQuery();\n      rset.next();\n\n      //Use the OracleDriver resultset, we take the blob locator\n      blob = ((OracleResultSet)rset).getBLOB("file_content");\n\n      is = new FileInputStream(file); //Create a stream from the file\n      // JDBC 2.0\n      //os = blob.getBinaryOutputStream(); //get the output stream from the Blob to insert it\n      // JDBC 3.0\n      os = blob.setBinaryStream(0); //get the output stream from the Blob to insert it\n\n      //Read the file by chuncks and insert them in the Blob. The chunk size come from the blob\n      byte[] chunk = new byte[blob.getChunkSize()];\n      int i=-1;\n      System.out.println("Inserting the Blob");\n      while((i = is.read(chunk))!=-1)\n      {\n        os.write(chunk,0,i); //Write the chunk\n        System.out.print(\'.\'); // print progression\n      }\n\n      // When done close the streams\n      is.close();\n      os.close();\n\n      //Close the statement and commit\n      pstmt.close();\n      long ts2 = System.currentTimeMillis();\n\n      connection.commit();\n      connection.close();\n\n      System.out.println("\\n"+ (ts2 - ts1) +" ms" );\n\n\n    }\n\n\n  }\n')))}f.isMDXComponent=!0}}]);