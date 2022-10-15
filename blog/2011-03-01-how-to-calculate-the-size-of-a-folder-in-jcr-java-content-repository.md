---
title: "How to calculate the size of a folder in JCR (Java Content Repository)?"

categories: java exo
---
Today I was working with a partner in Paris and he wanted to know how to calculate the size of a specific folder in the [eXo Java Content Repository (JCR)](http://www.exoplatform.com/company/en/resource-viewer/Features-and-Benefits/eXo-JCR-Features-and-Benefits).

For this specific need the goal is to calculate the size of all the documents stored inside a specific location in the content repository. This could be used for example to manage quotas, estimate the size of a shared or personal storage, ... For this specific sample I will only take in consideration the size of the binary part of the document stored in the repository; this means I will not pay attention to the various attributes and meta-data that are also stored, neither the full text index created by [Lucene](http://lucene.apache.org/) that is embedded in eXo JCR.

### How the files are stored in the JCR?

Files are stored in eXo JCR in the standard node type `nt:file` (and `nt:resource`). So for this example I will simply list all the `nt:file` of a folder and aggregate the size of the file itself. It is important to understand how JCR is storing the binary content. The best way to understand it, is to view it. For that I am using the print information given by  [CRaSH](http://www.exoplatform.com/company/en/resource-viewer/Tutorial/Introduction-to-Crash), a shell for content repository developed by eXo team and lead by [Julien Viet](http://julienviet.com/).

Here the structure of a PDF document :

``` sh
/Documents/jsr170-1.0.pdf
+-properties
| +-jcr:primaryType: nt:file
| +-jcr:mixinTypes: [mix:referenceable,mix:versionable]
| +-jcr:uuid: '6b89b6f0c0a8006530a8617df51bb0d7'
| +-jcr:created: 2011-02-28T10:11:50.770+01:00
+-children
| +-/Groups/spaces/intranet_v2/Documents/Technical/jsr170-1.0.pdf/jcr:content
```

As you can see in this node the 'binary' is not visible, nothing bad here. As written in the specification in the section `6.7.22.6 nt:file`, the binary content is an attribute of the child node `jcr:content` that is exposed below:

``` sh
/Groups/spaces/intranet_v2/Documents/Technical/jsr170-1.0.pdf/jcr:content
+-properties
| +-jcr:primaryType: nt:resource
| +-jcr:mixinTypes: [exo:owneable,exo:datetime,dc:elementSet]
| +-jcr:uuid: '6b89b6f7c0a80065735b1a8853d389d0'
| +-jcr:data: <binary>
| +-jcr:encoding: 'UTF-8'
| +-jcr:lastModified: 2011-02-28T10:11:50.767+01:00
| +-jcr:mimeType: 'application/pdf'
+-children
</binary>
```

You can see now that the `jcr:content` contains some interesting attributes:

* `jcr:mimeType`
* `jcr:data` this is where the binary content, the PDF itself , is.
So using the JCR API you just need to get the content length using the following java code:

``` java
node.getProperty("jcr:content/jcr:data").getLength()
```

This returns the number of bits of the binary data.

So to calculate the size of a folder you just need to navigate in all the documents (nt:file or jcr:content) and cumulate the size of all the files. In this following code, I am calculating the size of the folder "/Documents" by navigating into all the files contains in this folder and subfolders. (I could have chose to query all the `jcr:content` type instead of `nt:file`)

``` java
Session session = getSession(); // use RepositoryService or context to get a session
QueryManager manager = session.getWorkspace().getQueryManager();
String queryStatement = "select * from nt:file where (jcr:path LIKE '/Documents/%')";
Query query = manager.createQuery(queryStatement, Query.SQL);
NodeIterator nodeIterator = query.execute().getNodes();
Node node = null;
long totalSizeInMb = 0;

while (nodeIterator.hasNext()) {
  node = nodeIterator.next();
  totalSizeInMb = totalSizeInMb + node.getProperty("jcr:content/jcr:data").getLength() / (1024*1024);
}
```

As you can guess since we are navigating in the hierarchy you have to be very careful when using such query. This example is just a simple code sample to show you some of the cool features provided by the JCR API.
