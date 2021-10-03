---
title: "Web UI: What's behind AJAX? Simple use cases using XMLHttpRequest"
tags: [ajax]
---
I am sure you already heard about AJAX, the "new" way of building Web
application where using HTML, Javascript, DOM, and XML you can
&nbsp;build very interactive Web applications, some examples of
this interactivity are Google (suggest, local, mail), MSN, Amazon, .....

If the term &nbsp;Ajax is
relatively new, the technologies used are quite old now. And you do not
need anything new to be able to leverage this approach in your current
development, and since it is mainly a client (browser) based technology
this can be used whether you develop your application in Java, PHP, or
or even PL/SQL for the Web. In the same time, you do not want to have
to develop too much of the client side to handle user interaction, this
is where new frameworks that provide support of this technologies,
let's say AJAX based, are very interesting. It is now possible to
create very interactive Web application without passing 80% of your
time in the client side development - that could be generated from your
server obviously.

In the same time, before adopting such framework, it is important to
understand what is happening. This is why I am creating this quick
introduction based on 2 simple use cases:

* [loading message](http://www.grallandco.com/blog/archives/ajax/demo-2.html):
&nbsp;you often want to provide some
feedback to your user when your browser is processing some data
* [dependent lists](http://www.grallandco.com/blog/archives/ajax/demo-3.html):
how you can easily create dependent lists, in lot of application you
want to drive a selection list from another

<!-- truncate -->

Update May 30:

If you have tested my sample on Safari, you can see that the first request works, but following subsequent requests do not, on work around is to modify the HTTP header adding the following value, has to be done before the send, just send a old date...

``` javascript
httpRequest.setRequestHeader('If-Modified-Since','Sun,3 Jun 1973 00:00:00 GMT');
```

### What do you need to know?

The first interesting part is the object XMLHttpRequest. This object is
currently supported by most of the browsers. As usual with HTML and
Javascript the cross browser/platform testing is one of the most
important part of your project. XMLHttpRequest is not new since
Microsoft has implemented it in Internet Explorer 5 as an ActiveX
object. Also it has been later on integrate as a native component into
Mozzila and Netscape (7.0), and into Apple Safari. If originally this
object as been created to load data, as XML in the
background, you can using it to load any data.

#### Creating XMLHttpRequest Object

As usual with Javascript, it begins with interoperability issue ;-),
since in the MSFT world the XMLHttpRequest is implemented as an ActiveX
and in the other world(s) it is an native object, you have different
ways to create the object. The idea is too test if the current browser
supports or not the object and depending of the result create the
object.

``` javascript

if (window.ActiveXObject)
{
  // Microsoft Way
  httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
}
else if (window.XMLHttpRequest)
{
  // Others...
  httpRequest = new XMLHttpRequest();
}

```

Note: another way of choosing which code path to use depending of the
version of the browser is to use [conditional compilation](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/script56/html/js56jsconconditionalcompilation.asp)
for the Javascript engine.

Also I would add that it is probably good to provide a degraded version
of your application if you can not control which browser will be used
by your client, or if you want to provide that to mobile people. This
is for example what Google Mail is doing with its [Basic HTML](http://gmail.google.com/support/bin/answer.py?ctx=gmail&amp;hl=en&amp;answer=15049)
view.

#### Retrieving the data
asynchronously

One of the most interesting features of the XMLHttpRequestObject is the
fact that you get data from a URL in the background of the user
activity. This is how you can give lot of interactivity to your
applications.

``` javascript
httpRequest.open("GET", "./getEmployeeList?deptno=10", true);
httpRequest.onreadystatechange= function () {processRequest(); } ;
httpRequest.send(null);
```

The [open](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmmthopenixmlhttprequest.asp)
method sets the different values that will be used by your request,
such as the type of request, the URL, if it is synchronous or not.

The "magic" comes from the&nbsp;[onreadystatechange](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmproonreadystatechangehttprequest.asp)&nbsp;property.
This propery set an handler that will be called when the property [readyState](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmproreadystaterequest.asp)
changes, when the request is sent, loading, or completed... Meaning,
this is in this event handler, the processRequest
method in the sample, that you test if the response has been completed
correctly, and process the data.

Note: even if it is possible, I do not think that you should use the
XMLHttpRequest in a synchronous mode since it will freeze the browser
of the user, for the duration of the request.

#### Processing the response

As I said above the magic happens in the event handler associated with
the state of the request. Let's see how you manipulate the request and
response:


``` javascript
function processRequest()
{
  if (httpRequest.readyState == 4)
  {
    if(httpRequest.status == 200)
    {
      // process data as XML
      httpRequest.responseXML;

      // or Text
      alert(httpRequest.responseText);
    }
    else
    {
      alert("Error loading page\n"+ httpRequest.status +":"+ httpRequest.statusText);
    }
  }
}

```


The [readyState](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmproreadystaterequest.asp)
propery is used to know if all the data of the response have been
received or not, the different value for the state are:

* 0 : uninitialized
* 1 : loading
* 2 :loaded
* 3 : interactive
* 4 : completed
Most of the time, you will just test the status 4. In my example I wait
for status==4 and then I check the status of the response. The [status](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmprostatusixmlhttprequest.asp)
is the status returned by the server, for example 200 for OK, 404 for
not found.

Then you can treat the response as XML using the [responseXML](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmproresponsexmlixmlhttprequest.asp),
in this case you can manipulate the XML using the client DOM API. But
you can also directly take the content as a string using the [responseText](http://msdn.microsoft.com/library/default.asp?url=/library/en-us/xmlsdk/html/xmproresponsetextixmlhttprequest.asp)
property.

#### Manipulating the Data

You now have the data back from the request, as Text or XML, you just
need using Javascript manipulate them and copy then into some part of
your page. So all is based on the client side. Let's do a very simple
example before moving to the use cases:

* [Simple XMLHttpRequest sample](http://www.grallandco.com/blog/archives/demo-1.html) *What is happening?*

Since I have explained the call above, here is the simple code that is
used to copy the content from the XMLHttpRequest object to the page:

``` javascript
.....
if(httpRequest.status == 200)
{
  var contentViewer = document.getElementById("contentViewer");
  contentViewer.innerHTML = httpRequest.responseText;
}
....
```


Most of the time, if you do &nbsp;not use XML you just have to copy
the content of the result into a section of your page, so to do it you
use:

* create a DIV tag in yourpage with a specific id. (or other...)
* get the object you want to copy into using the `document.getElementById()` method, that is the most simple way...&nbsp;
* then from the object just use the `innerHTML`
property that represent the content of this DIV object. (You can also
  use the DOM API, to do the same thing, I am sure puris will say that
  this is the only way to do it correctly... )
  In most of the frameworks the data are exchanged in XML and some
  generic methods are calls on the client side to propulate data in the
  different components of the page.

### Usecase 1: Loading Message

One common use case is to be able to have some feedback during
  processing of a request. Using the same approach you can print a
  message until the response is completely done.

* [Online Demonstration](http://www.grallandco.com/blog/archives/ajax/demo-2.html) *What is happening?*

The tip here is just to take a zone where you want to print the status
  ("Loading..." for example). When the XMLHttpRequest status is different
  than 4 (completed) &nbsp;just print the status in this section
  using for example the innerHTML property. When the request is
  completed, just move the content of this zone to blank, or in our case
  the result of the request is printed into it.

``` javascript
....
if (httpRequest.readyState == 4)
{
  if(httpRequest.status == 200)
  {
    // print the content of the page
    var contentViewer = document.getElementById("contentViewer");
    contentViewer.innerHTML = httpRequest.responseText;
  }
}
else
{
  // Print the loading message....
  var contentViewer = document.getElementById("contentViewer");
  contentViewer.innerHTML = "<b style='color:red;'>Loading....<b>";
}
...
```

### Usecase 2: Dependent Lists

In lot of applications, you have submission form when one drop down list is controlled by another one. You have several way to support that depending of the size of your data set. For example you can download
  all the records (master and detail) and use some client side
  programming to refresh the content of the detail list depending of the
  value selected in the master one; or &nbsp;another solution is to
  just reload the page.

Using XMLHttpRequest, you can now just call the server to populate the
  values of the detail list when the user select another value in the
  master list. (and you can implement a client side cache if you want to
  avoid a second call with the same parameters, but this is another
  story...)

* [Online Demonstration](http://www.grallandco.com/blog/archives/ajax/demo-3.html) *What is happening?*

Nothing more complex than in the previous examples, on the `onChange`
  of the master list (dept in the example) , you call a Javascript method
  that create the XMLHttRequest, with the correct parameter.

Then in the event handler of this request, you populate the data as XML
  and add them to the detail list (emp in the example).

In this specific example I used XML, but if you want for simpler code
  you can write all in HTML and use the innerHTML property, but this is
  just a choice of implementation isn't?

### Summary


First of all, you have seen that what we have behind AJAX is not just
  new technologies. The technologies exists now for a while, they have
  been exposed to the masse by Google, MSN, and other Web sites. The term
  itself is definitevely a recent one...

Also, I have showed you simple examples that can help you for your
  current developments, but you need to write some code on the client.
  The real future of AJAX, is when this is bundle into a framework, into
  the Faces components your are using. So before starting to implement
  such code in your application you should take a look around to see if
  any solution exists that can answer your need...

  You can download the source of the demonstrations [here](http://www.grallandco.com/blog/archives/ajax/xmlhttprequest-demos.zip). I tried to keep the code as simple as possible by providing all the source in each single html file.
