---
title: "How to create a new Content List Template for eXo Platform 3"

categories: exo cms portal groovy
---
### Introduction

eXo Platform provide many powerful features to manipulate and expose any type of content on a page. This is due to the fact that eXo stores the all the content in its Java Content Repository (JCR) and render the content on a page using Groovy Templates.

In this how to you will learn how you can create and use template that are used in the "Content List" portlet. For example in the ACME sample site you can show the content in 1 or 2 columns just by selecting different templates.

![]( http://2.bp.blogspot.com/-aEn1Gp75nD4/TbbALBRftVI/AAAAAAAAAPc/3JLHePfFkuM/s200/one-col-view.png )
One Column View


![]( http://4.bp.blogspot.com/-xSn44HNlBZ8/TbbAMSRDq7I/AAAAAAAAAPg/YEu715pX3WE/s200/two-col-view.png )
Two Columns View

### Creating a new Content List Template

In this section you will learn how to create a new template using the eXo IDE. Before writing the new template it is important to learn where the templates are stored.

#### eXo Content Service: Template Storage

Like many things inside eXo Platform, the eXo JCR is used to stored the templates. Templates are just a special type of content. This allows developers to easily write and test code without having complex deployment process, but also it make the life easy to export a running configuration to another one. For this you just need to use the standard JCR export/import features.

All the template and eXo Content Service configurations are stored inside a specific JCR workspace named : `dms-system`.

Each template type (Document Type, Content List, ....) is stored in a specific location. In our case we want to work on the "Content List" portlet so the template are stored inside the following folder:

* `/exo:ecm/views/templates/content-list-viewer/list/`

Just for the fun of it, let's inspect this folder using the eXo CRaSH utility. If you are not interested you can jump to the next section. CRaSH is a shell for Java Content Repositories, the source of CRaSH is available on [Google Code](http://code.google.com/p/crsh/). So in a terminal window:

1-  Connect to CRaSH using telnet client:

``` sh
 telnet 127.0.0.1 5000
```

2-  Connect to the JCR workspace using the following command:

``` sh
 connect -u root -p gtn -c portal dms-system
```

Where: -u is the user, -p the password, -c the Portal Container, and dms-system the workspace to use

3-  Move the the folder that contains all the templates for the Content List portlet:

``` sh
 cd /exo:ecm/views/templates/content-list-viewer/list/
```

4-  List all the templates using the `ls` command
You can see the list of all the templates available for the Content List portlet.

#### Create a new template using the eXo IDE

Let's now create a new template using the IDE. For this be sure you are connected with a user that is part of the `/Developer` group. For simplicity reason I am using the `root` user.

The first important step is to go the the template location using the following steps:

1-  Access the IDE: click on `My Spaces &gt; IDE`.

2-  Switch `dms-system` workspace: In the IDE menu click `My Spaces &gt;on Window &gt; Select Workspace`. And select the dms-system location in the dialog box and click OK.

3-  In the file structure on the left navigate to the template location :

``` sh
/exo:ecm/views/templates/content-list-viewer/list/
```

4-  Create a new template : In the IDE Menu click on `File &gt; New &gt; Groovy Template`

5-  Save the file as "`MyNewTemplate.gtmpl`"

6-  Enter some basic code:

``` html

<h1>This is my template</h1>
The date is <= new Date()>

```

7-  Save the template

8-  Go back to the Home page of the Acme Site

9-  Switch to Edit more by selecting Edit in the top right drop down list.

![]( http://3.bp.blogspot.com/-EsSUDUdUo_8/TbbRJZlZlHI/AAAAAAAAAPk/5iTn-NoC-JE/s200/edit-mode.png )

10-  Move you mouse at the top of the list of news and click on the preference button: {%img http://1.bp.blogspot.com/-ksljDe3llf4/TbbSIOl0DII/AAAAAAAAAPs/C0eBv-SJ25I/s200/PreferencesIcon.png )

11-  In the list of templates, select the "MyNewTemplate", and click save.

![]( http://2.bp.blogspot.com/-7hT5osGXK1w/TbbTTJ7ZKSI/AAAAAAAAAP0/--VCTefhrSI/s320/select-template.png )

We have created our new template, and use it on a page. We should now add some more interesting code to the template to really loop over the content based on the portlet configuration. But before this it is important to talk about caching and code modification.

#### eXo Template and Cache

To improve performances and a running system, the compiled version of the template is by default cached. This is why when you are modifying a template you do not see any change. We have two ways to work around this:

*   Run eXo Platform in Debug mode, in this case nothing is cached
*   Invalidate the cache manually using JMX

Since working with no cache at all is not an option, here is the MBean you have to use to invalidate the Template Service cache:

* `exo:portal="portal",service=cache,name="TemplateService"`, then call the `clearCache` operation on it

I do use JConsole for this, but you can use any method to call your MBeans operation.

![]( http://1.bp.blogspot.com/-ZuMQz-VHBYY/TbldhSRY2NI/AAAAAAAAAP8/pb09UoA9_b4/s200/TemplateServiceCacheMbean.png )

Do not forget to call this operation each time you modify your template to be sure eXo recompile the template.

#### Accessing Content in the template

The current code of the template is really simple, you need now to add code to print the content in the page. For this we will be using some eXo Content programming, once again in the IDE.

If you are not interested to have detailed explanation of the code you can go to the complete source code [here](javascript: alert().

The template used by the Content List portlet is based on the following Java class `org.exoplatform.wcm.webui.clv.UICLVPresentation`, this class is responsible to set the complete context that you can use in the template such as:

* The folder or category that contains the content to show. The "Folder Path" field in the preference screen
* The display settings: title, number of documents, elements to show, ...

Here is the code to access these preferences:

``` groovy
// import all the classes need in the template
import javax.jcr.Node;
import org.exoplatform.wcm.webui.paginator.UICustomizeablePaginator;
import org.exoplatform.wcm.webui.clv.UICLVPortlet;
import org.exoplatform.wcm.webui.Utils;
import org.exoplatform.services.wcm.core.NodeLocation;

// get the portlet preferences
def header = uicomponent.getHeader();
def isShowRssLink = uicomponent.isShowRssLink();
def isShowHeader = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_HEADER);
def isShowRefresh = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_REFRESH_BUTTON);

def isShowTitle = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_TITLE);
def isShowDate = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_DATE_CREATED);
def isShowLink = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_LINK);
def isShowReadmore = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_READMORE);
def isShowImage = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_ILLUSTRATION) ;
def isShowSummary = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_SUMMARY);

```

The `uicomponent` object is defined by the container class of the portlet that calls the template. This class contains many utility methods. In the code above I retrieve all the preferences of the portlet, since the name are self-explanatory it is not necessary to detail them, especially when you look at the preferences screen below:

![]( http://3.bp.blogspot.com/-bDIJtSVaD9A/TblkjTr2wMI/AAAAAAAAAQE/6mRLmEYqpsE/s320/preference-screen.png )

Now that the template has all the preferences, it is time to loop on the content on print the information.

The eXo Content Service provides API to manipulate the content, including pagination of content. The idea behind this is to let the Content Service manage the JCR query, sorting, caching and pagination of data. So in your template you will mainly manage two classes to loop through the content to show:

* `uicomponent.getUIPageIterator()` a paginator object that is configured based on the portlet preferences
* `uicomponent.getCurrentPageData()`contains a list of the content (JCR Nodes) that should print on the current page

So let's print all the content of the page as a simple HTML list:

``` html
<ul style="margin: 20px">
<%
for (viewNode in uicomponent.getCurrentPageData()) {
  def title = viewNode.getProperty("exo:title").getString();
  print("<li>$title</li>");
}
%>
</ul>
```

Just  copy this code in your template, save it, refresh the cache... and go to your page. You should see the list of the content in a simple HTML list.

On each content (Node), eXo Content API provides some helper method to easily manipulate the content and avoid using the JCR API directly. In the following code you can see the most important methods accessing content properties:

``` java
def itemName = viewNode.getName();
def itemLink = uicomponent.getURL(viewNode);  
def webdDavLink = uicomponent.getWebdavURL(viewNode);
def itemDateCreated = uicomponent.getCreatedDate(viewNode);
def itemModifiedDate = uicomponent.getModifiedDate(viewNode);
def itemAuthor = uicomponent.getAuthor(viewNode);
def imgSrc = uicomponent.getIllustrativeImage(viewNode);
def itemTitle = uicomponent.getTitle(viewNode);
def itemSummary = uicomponent.getSummary(viewNode);
```

One important point is the fact that these methods are responsible of many things, for example: formatting dates, returning complete URLs depending of the context of the portlet.

Based on these methods you can now work on the presentation of the information on the page. Let's for example print the image, the title and allow user to click on the title to go in the detail view of the article. This is done simply using the following code:

``` java
<%
for (viewNode in uicomponent.getCurrentPageData()) {
  def itemName = viewNode.getName();
  def itemLink = uicomponent.getURL(viewNode);  
  def webdDavLink = uicomponent.getWebdavURL(viewNode);
  def itemDateCreated = uicomponent.getCreatedDate(viewNode);
  def itemModifiedDate = uicomponent.getModifiedDate(viewNode);
  def itemAuthor = uicomponent.getAuthor(viewNode);
  def imgSrc = uicomponent.getIllustrativeImage(viewNode);
  def itemTitle = uicomponent.getTitle(viewNode);
  def itemSummary = uicomponent.getSummary(viewNode);

  %>
  <div style="overflow: auto;">
  <img src="$imgSrc" align="left">
  <h3><a href="$itemLink">$itemTitle</a></h3>
  $itemSummary
  </div>

  <%
}
%>
```

For simplicity reason, this code does not manage any null value. Also the template do not deal with the portlet preferences such as the "Header", "RSS" links and so on, do not hesitate to do it if you want.

The Web site should look like the following image:

![]( http://3.bp.blogspot.com/-JvoTBERVTH0/Tbmf9tYRcUI/AAAAAAAAAQM/sdUy2gs39ks/s320/new-site-001.png )


The last important point is to add the support for the in context editing that allows the user to edit the content directly from the template. Once again this is done with a method of the `uicomponent` object, that create a DIV around the content. Let's add this to the template:

``` java
<%
for (viewNode in uicomponent.getCurrentPageData()) {
  def itemName = viewNode.getName();
  def itemLink = uicomponent.getURL(viewNode);  
  def webdDavLink = uicomponent.getWebdavURL(viewNode);
  def itemDateCreated = uicomponent.getCreatedDate(viewNode);
  def itemModifiedDate = uicomponent.getModifiedDate(viewNode);
  def itemAuthor = uicomponent.getAuthor(viewNode);
  def imgSrc = uicomponent.getIllustrativeImage(viewNode);
  def itemTitle = uicomponent.getTitle(viewNode);
  def itemSummary = uicomponent.getSummary(viewNode);

  %>
  <div style="overflow: auto;">
  <%=uicomponent.addQuickEditDiv("MyTemplateContentEditor", viewNode)%>
  <img src="$imgSrc" align="left">
  <h3><a href="$itemLink">$itemTitle</a></h3>
  $itemSummary
  < /div>
  </div>

  <%
}
%>
```

The lines 15 and 19 are new in this template and provide support for Quick Edit feature.

Done! We have created a new template for eXo Platform Content Service using embedded IDE.

#### Conclusion

In this article you have learned how to create a new template for eXo Content Service, with some basic steps:

* Create a new Groovy Template using the eXo IDE
* Edit this template using the eXo Java Content API
* Configure your Content List portlet instance on a page to select the new template

You can now create your own templates and use your imagination to add cool features to your site (for example the carrousels you see on the [eXo site](http://www.exoplatform.com/) are using custom CLV template.)
