(self.webpackChunktgrall_blog=self.webpackChunktgrall_blog||[]).push([[4509],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8190:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return m},default:function(){return d}});var o=n(22122),a=n(19756),i=(n(67294),n(3905)),l=["components"],r={title:"How to create a new Content List Template for eXo Platform 3",categories:"exo cms portal groovy"},s=void 0,p={permalink:"/blog/2011/08/31/how-to-create-a-new-content-list-template-for-exo-platform-3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2011-08-31-how-to-create-a-new-content-list-template-for-exo-platform-3.md",source:"@site/blog/2011-08-31-how-to-create-a-new-content-list-template-for-exo-platform-3.md",title:"How to create a new Content List Template for eXo Platform 3",description:"Introduction",date:"2011-08-31T00:00:00.000Z",formattedDate:"August 31, 2011",tags:[],readingTime:8.755,truncated:!1,authors:[],prevItem:{title:"JAX-RS: Jersey and JSON single element arrays",permalink:"/blog/2011/09/02/jax-rs-jersey-and-json-single-element-arrays"},nextItem:{title:"How to protect your REST service and Gadget in eXo Platform",permalink:"/blog/2011/04/11/how-to-protect-your-rest-service-and-gadget-in-exo-platform"}},c={authorsImageUrls:[]},m=[{value:"Introduction",id:"introduction",children:[]},{value:"Creating a new Content List Template",id:"creating-a-new-content-list-template",children:[]}],u={toc:m};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"eXo Platform provide many powerful features to manipulate and expose any type of content on a page. This is due to the fact that eXo stores the all the content in its Java Content Repository (JCR) and render the content on a page using Groovy Templates."),(0,i.kt)("p",null,'In this how to you will learn how you can create and use template that are used in the "Content List" portlet. For example in the ACME sample site you can show the content in 1 or 2 columns just by selecting different templates.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-aEn1Gp75nD4/TbbALBRftVI/AAAAAAAAAPc/3JLHePfFkuM/s200/one-col-view.png",alt:null}),"\nOne Column View"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://4.bp.blogspot.com/-xSn44HNlBZ8/TbbAMSRDq7I/AAAAAAAAAPg/YEu715pX3WE/s200/two-col-view.png",alt:null}),"\nTwo Columns View"),(0,i.kt)("h3",{id:"creating-a-new-content-list-template"},"Creating a new Content List Template"),(0,i.kt)("p",null,"In this section you will learn how to create a new template using the eXo IDE. Before writing the new template it is important to learn where the templates are stored."),(0,i.kt)("h4",{id:"exo-content-service-template-storage"},"eXo Content Service: Template Storage"),(0,i.kt)("p",null,"Like many things inside eXo Platform, the eXo JCR is used to stored the templates. Templates are just a special type of content. This allows developers to easily write and test code without having complex deployment process, but also it make the life easy to export a running configuration to another one. For this you just need to use the standard JCR export/import features."),(0,i.kt)("p",null,"All the template and eXo Content Service configurations are stored inside a specific JCR workspace named : ",(0,i.kt)("inlineCode",{parentName:"p"},"dms-system"),"."),(0,i.kt)("p",null,'Each template type (Document Type, Content List, ....) is stored in a specific location. In our case we want to work on the "Content List" portlet so the template are stored inside the following folder:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/exo:ecm/views/templates/content-list-viewer/list/"))),(0,i.kt)("p",null,"Just for the fun of it, let's inspect this folder using the eXo CRaSH utility. If you are not interested you can jump to the next section. CRaSH is a shell for Java Content Repositories, the source of CRaSH is available on ",(0,i.kt)("a",{parentName:"p",href:"http://code.google.com/p/crsh/"},"Google Code"),". So in a terminal window:"),(0,i.kt)("p",null,"1-  Connect to CRaSH using telnet client:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," telnet 127.0.0.1 5000\n")),(0,i.kt)("p",null,"2-  Connect to the JCR workspace using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," connect -u root -p gtn -c portal dms-system\n")),(0,i.kt)("p",null,"Where: -u is the user, -p the password, -c the Portal Container, and dms-system the workspace to use"),(0,i.kt)("p",null,"3-  Move the the folder that contains all the templates for the Content List portlet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"}," cd /exo:ecm/views/templates/content-list-viewer/list/\n")),(0,i.kt)("p",null,"4-  List all the templates using the ",(0,i.kt)("inlineCode",{parentName:"p"},"ls")," command\nYou can see the list of all the templates available for the Content List portlet."),(0,i.kt)("h4",{id:"create-a-new-template-using-the-exo-ide"},"Create a new template using the eXo IDE"),(0,i.kt)("p",null,"Let's now create a new template using the IDE. For this be sure you are connected with a user that is part of the ",(0,i.kt)("inlineCode",{parentName:"p"},"/Developer")," group. For simplicity reason I am using the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," user."),(0,i.kt)("p",null,"The first important step is to go the the template location using the following steps:"),(0,i.kt)("p",null,"1-  Access the IDE: click on ",(0,i.kt)("inlineCode",{parentName:"p"},"My Spaces &gt; IDE"),"."),(0,i.kt)("p",null,"2-  Switch ",(0,i.kt)("inlineCode",{parentName:"p"},"dms-system")," workspace: In the IDE menu click ",(0,i.kt)("inlineCode",{parentName:"p"},"My Spaces &gt;on Window &gt; Select Workspace"),". And select the dms-system location in the dialog box and click OK."),(0,i.kt)("p",null,"3-  In the file structure on the left navigate to the template location :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"/exo:ecm/views/templates/content-list-viewer/list/\n")),(0,i.kt)("p",null,"4-  Create a new template : In the IDE Menu click on ",(0,i.kt)("inlineCode",{parentName:"p"},"File &gt; New &gt; Groovy Template")),(0,i.kt)("p",null,'5-  Save the file as "',(0,i.kt)("inlineCode",{parentName:"p"},"MyNewTemplate.gtmpl"),'"'),(0,i.kt)("p",null,"6-  Enter some basic code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"\n<h1>This is my template</h1>\nThe date is <= new Date()>\n\n")),(0,i.kt)("p",null,"7-  Save the template"),(0,i.kt)("p",null,"8-  Go back to the Home page of the Acme Site"),(0,i.kt)("p",null,"9-  Switch to Edit more by selecting Edit in the top right drop down list."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-EsSUDUdUo_8/TbbRJZlZlHI/AAAAAAAAAPk/5iTn-NoC-JE/s200/edit-mode.png",alt:null})),(0,i.kt)("p",null,"10-  Move you mouse at the top of the list of news and click on the preference button: ",(0,i.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-ksljDe3llf4/TbbSIOl0DII/AAAAAAAAAPs/C0eBv-SJ25I/s200/PreferencesIcon.png",alt:null})),(0,i.kt)("p",null,'11-  In the list of templates, select the "MyNewTemplate", and click save.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://2.bp.blogspot.com/-7hT5osGXK1w/TbbTTJ7ZKSI/AAAAAAAAAP0/--VCTefhrSI/s320/select-template.png",alt:null})),(0,i.kt)("p",null,"We have created our new template, and use it on a page. We should now add some more interesting code to the template to really loop over the content based on the portlet configuration. But before this it is important to talk about caching and code modification."),(0,i.kt)("h4",{id:"exo-template-and-cache"},"eXo Template and Cache"),(0,i.kt)("p",null,"To improve performances and a running system, the compiled version of the template is by default cached. This is why when you are modifying a template you do not see any change. We have two ways to work around this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Run eXo Platform in Debug mode, in this case nothing is cached"),(0,i.kt)("li",{parentName:"ul"},"Invalidate the cache manually using JMX")),(0,i.kt)("p",null,"Since working with no cache at all is not an option, here is the MBean you have to use to invalidate the Template Service cache:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'exo:portal="portal",service=cache,name="TemplateService"'),", then call the ",(0,i.kt)("inlineCode",{parentName:"li"},"clearCache")," operation on it")),(0,i.kt)("p",null,"I do use JConsole for this, but you can use any method to call your MBeans operation."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://1.bp.blogspot.com/-ZuMQz-VHBYY/TbldhSRY2NI/AAAAAAAAAP8/pb09UoA9_b4/s200/TemplateServiceCacheMbean.png",alt:null})),(0,i.kt)("p",null,"Do not forget to call this operation each time you modify your template to be sure eXo recompile the template."),(0,i.kt)("h4",{id:"accessing-content-in-the-template"},"Accessing Content in the template"),(0,i.kt)("p",null,"The current code of the template is really simple, you need now to add code to print the content in the page. For this we will be using some eXo Content programming, once again in the IDE."),(0,i.kt)("p",null,"If you are not interested to have detailed explanation of the code you can go to the complete source code ","[here]","(javascript: alert()."),(0,i.kt)("p",null,"The template used by the Content List portlet is based on the following Java class ",(0,i.kt)("inlineCode",{parentName:"p"},"org.exoplatform.wcm.webui.clv.UICLVPresentation"),", this class is responsible to set the complete context that you can use in the template such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The folder or category that contains the content to show. The "Folder Path" field in the preference screen'),(0,i.kt)("li",{parentName:"ul"},"The display settings: title, number of documents, elements to show, ...")),(0,i.kt)("p",null,"Here is the code to access these preferences:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"// import all the classes need in the template\nimport javax.jcr.Node;\nimport org.exoplatform.wcm.webui.paginator.UICustomizeablePaginator;\nimport org.exoplatform.wcm.webui.clv.UICLVPortlet;\nimport org.exoplatform.wcm.webui.Utils;\nimport org.exoplatform.services.wcm.core.NodeLocation;\n\n// get the portlet preferences\ndef header = uicomponent.getHeader();\ndef isShowRssLink = uicomponent.isShowRssLink();\ndef isShowHeader = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_HEADER);\ndef isShowRefresh = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_REFRESH_BUTTON);\n\ndef isShowTitle = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_TITLE);\ndef isShowDate = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_DATE_CREATED);\ndef isShowLink = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_LINK);\ndef isShowReadmore = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_READMORE);\ndef isShowImage = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_ILLUSTRATION) ;\ndef isShowSummary = uicomponent.isShowField(UICLVPortlet.PREFERENCE_SHOW_SUMMARY);\n\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"uicomponent")," object is defined by the container class of the portlet that calls the template. This class contains many utility methods. In the code above I retrieve all the preferences of the portlet, since the name are self-explanatory it is not necessary to detail them, especially when you look at the preferences screen below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-bDIJtSVaD9A/TblkjTr2wMI/AAAAAAAAAQE/6mRLmEYqpsE/s320/preference-screen.png",alt:null})),(0,i.kt)("p",null,"Now that the template has all the preferences, it is time to loop on the content on print the information."),(0,i.kt)("p",null,"The eXo Content Service provides API to manipulate the content, including pagination of content. The idea behind this is to let the Content Service manage the JCR query, sorting, caching and pagination of data. So in your template you will mainly manage two classes to loop through the content to show:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uicomponent.getUIPageIterator()")," a paginator object that is configured based on the portlet preferences"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"uicomponent.getCurrentPageData()"),"contains a list of the content (JCR Nodes) that should print on the current page")),(0,i.kt)("p",null,"So let's print all the content of the page as a simple HTML list:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ul style="margin: 20px">\n<%\nfor (viewNode in uicomponent.getCurrentPageData()) {\n  def title = viewNode.getProperty("exo:title").getString();\n  print("<li>$title</li>");\n}\n%>\n</ul>\n')),(0,i.kt)("p",null,"Just  copy this code in your template, save it, refresh the cache... and go to your page. You should see the list of the content in a simple HTML list."),(0,i.kt)("p",null,"On each content (Node), eXo Content API provides some helper method to easily manipulate the content and avoid using the JCR API directly. In the following code you can see the most important methods accessing content properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"def itemName = viewNode.getName();\ndef itemLink = uicomponent.getURL(viewNode);  \ndef webdDavLink = uicomponent.getWebdavURL(viewNode);\ndef itemDateCreated = uicomponent.getCreatedDate(viewNode);\ndef itemModifiedDate = uicomponent.getModifiedDate(viewNode);\ndef itemAuthor = uicomponent.getAuthor(viewNode);\ndef imgSrc = uicomponent.getIllustrativeImage(viewNode);\ndef itemTitle = uicomponent.getTitle(viewNode);\ndef itemSummary = uicomponent.getSummary(viewNode);\n")),(0,i.kt)("p",null,"One important point is the fact that these methods are responsible of many things, for example: formatting dates, returning complete URLs depending of the context of the portlet."),(0,i.kt)("p",null,"Based on these methods you can now work on the presentation of the information on the page. Let's for example print the image, the title and allow user to click on the title to go in the detail view of the article. This is done simply using the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'<%\nfor (viewNode in uicomponent.getCurrentPageData()) {\n  def itemName = viewNode.getName();\n  def itemLink = uicomponent.getURL(viewNode);  \n  def webdDavLink = uicomponent.getWebdavURL(viewNode);\n  def itemDateCreated = uicomponent.getCreatedDate(viewNode);\n  def itemModifiedDate = uicomponent.getModifiedDate(viewNode);\n  def itemAuthor = uicomponent.getAuthor(viewNode);\n  def imgSrc = uicomponent.getIllustrativeImage(viewNode);\n  def itemTitle = uicomponent.getTitle(viewNode);\n  def itemSummary = uicomponent.getSummary(viewNode);\n\n  %>\n  <div style="overflow: auto;">\n  <img src="$imgSrc" align="left">\n  <h3><a href="$itemLink">$itemTitle</a></h3>\n  $itemSummary\n  </div>\n\n  <%\n}\n%>\n')),(0,i.kt)("p",null,'For simplicity reason, this code does not manage any null value. Also the template do not deal with the portlet preferences such as the "Header", "RSS" links and so on, do not hesitate to do it if you want.'),(0,i.kt)("p",null,"The Web site should look like the following image:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"http://3.bp.blogspot.com/-JvoTBERVTH0/Tbmf9tYRcUI/AAAAAAAAAQM/sdUy2gs39ks/s320/new-site-001.png",alt:null})),(0,i.kt)("p",null,"The last important point is to add the support for the in context editing that allows the user to edit the content directly from the template. Once again this is done with a method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"uicomponent")," object, that create a DIV around the content. Let's add this to the template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'<%\nfor (viewNode in uicomponent.getCurrentPageData()) {\n  def itemName = viewNode.getName();\n  def itemLink = uicomponent.getURL(viewNode);  \n  def webdDavLink = uicomponent.getWebdavURL(viewNode);\n  def itemDateCreated = uicomponent.getCreatedDate(viewNode);\n  def itemModifiedDate = uicomponent.getModifiedDate(viewNode);\n  def itemAuthor = uicomponent.getAuthor(viewNode);\n  def imgSrc = uicomponent.getIllustrativeImage(viewNode);\n  def itemTitle = uicomponent.getTitle(viewNode);\n  def itemSummary = uicomponent.getSummary(viewNode);\n\n  %>\n  <div style="overflow: auto;">\n  <%=uicomponent.addQuickEditDiv("MyTemplateContentEditor", viewNode)%>\n  <img src="$imgSrc" align="left">\n  <h3><a href="$itemLink">$itemTitle</a></h3>\n  $itemSummary\n  < /div>\n  </div>\n\n  <%\n}\n%>\n')),(0,i.kt)("p",null,"The lines 15 and 19 are new in this template and provide support for Quick Edit feature."),(0,i.kt)("p",null,"Done! We have created a new template for eXo Platform Content Service using embedded IDE."),(0,i.kt)("h4",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"In this article you have learned how to create a new template for eXo Content Service, with some basic steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a new Groovy Template using the eXo IDE"),(0,i.kt)("li",{parentName:"ul"},"Edit this template using the eXo Java Content API"),(0,i.kt)("li",{parentName:"ul"},"Configure your Content List portlet instance on a page to select the new template")),(0,i.kt)("p",null,"You can now create your own templates and use your imagination to add cool features to your site (for example the carrousels you see on the ",(0,i.kt)("a",{parentName:"p",href:"http://www.exoplatform.com/"},"eXo site")," are using custom CLV template.)"))}d.isMDXComponent=!0}}]);