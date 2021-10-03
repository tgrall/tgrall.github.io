---
title: "Create a Simple Node.js and Couchbase application... on OS X"

categories: nodejs javascript couchbase nosql
---
> **NOTE:** The Couchbase Node.js Client Library is currently changing. I will update this article and source code once the API is stable.


I am currently playing a little bit with Node.js . It is quite fun! In this article I won't go in a a very complex application but just give you the basic steps to create your first Node.js+Couchbase application... on Mac OS X.

### Installation

**Couchbase 2.0 Beta:**

You can take a look the first steps of my [previous article](http://tugdualgrall.blogspot.fr/2012/07/couchbase-101-install-store-and-query.html) to install Couchbase. The basics steps are:

* Download [Couchbase 2. 0 Beta](http://www.couchbase.com/couchbase-server/beta)
* Start the server (Run the "Couchbase Server" application)
* Configure the server

**Other Components :**

* Node.js
* Couchbase Client Library (C version)

<!-- truncate -->

To install these two components I am using homebrew (aka brew).

*_Hmmm, what is homebrew?*


Homebrew is a package manager for OS X that allows you to install, update and uninstall unix tools using very simple commands. You can find more information on the [homebrew site](http://mxcl.github.com/homebrew/). So let's start by installing homebrew itself.

From a terminal window:

``` sh
ruby -e "$(curl -fsSkL raw.github.com/mxcl/homebrew/go)"

```
Then let's install node

``` sh
brew install node
```

and finally install Couchbase Client Library

``` sh
brew install https://github.com/couchbase/homebrew/raw/preview/Library/Formula/libcouchbase.rb
```

### Coding

You are now ready to start the development of your application.

#### Create a very simple application

1- Create a folder for your application

``` sh
mkdir sample-app
cd sample-app
```

2- Create an `app.js` file and copy the following code:

``` javascript
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

var server = http.createServer(onRequest);
server.listen(8080);

console.log("&gt; SERVER STARTED");
```

I won't go in all the details about a node application; for this I invite you to read [The Node Beginnger Book](http://www.nodebeginner.org/).

3- Start your server

``` javascript
node app.js
```

You should be able to access your application using http://localhost:8080

To stop your server just use ctrl+c.


#### Install and use Couchbase client for node.js


npm is the [node package manager](https://npmjs.org/), that allows you to easily install node.js modules and manage dependencies for your application (I will present the dependency management in another post)

1- Install the Couchbase Client for node.js, using the following command

``` sh
npm install couchbase
```

Couldn't be simpler! You can find more information about Couchbase Client for node on its [npm page](https://npmjs.org/package/couchbase).


2- Lets now insert some data into Couchbase

Create a simple function that inserts some documents, and call it after server startup:

``` js
var http = require("http");

// load the Couchbase driver and connect to the cluster
var driver = require('couchbase');
var cb = new driver.Couchbase("localhost:8091", null, null, "default");

...
...

function insertData() {
  // insert employees in Couchbase
  var emps = [{
    "type": "employee",
    "id": 100,
    "name": "Thomas",
    "dept": "Sales",
    "salary": 5000
    }, {
      "type": "employee",
      "id": 200,
      "name": "John",
      "dept": "Development",
      "salary": 4500
      }, {
        "type": "employee",
        "id": 300,
        "name": "Jane",
        "dept": "Marketing",
        "salary": 5000
        }]

        // Insert the data in Couchbase using the add method ()
        for (index = 0; index &lt; emps.length; index++) {
          cb.add(JSON.stringify(emps[index].id), JSON.stringify(emps[index]), 0, undefined, function(data, err, key, cas) {
            if (err &amp;&amp; err != 12) { // 12 : LCB_KEY_EEXISTS  
              console.log("Failed to store object:\n" + err);
            }
            });
          }
        }

        server.listen(8080, insertData());
```


* Lines 4-5 : load the Couchbase driver and connect to the server. I am using the complete list of parameter `connect("server:port", "username", "password", "bucket"). But you can use the short version `connect("server:port")`
* Lines 12-30 : just create JSON object that will be pushed in Couchbase.
* Line 33 : the application just read each element of the array and insert them into Couchbase using the `couchbase.add()` function.
* Lines 34-38 : the `couchbase.add()` function set the value only if it does not exist. If the value exists the error code LCB_KEY_EEXISTS (12) is return by the callback function

3- Start your server - `node app.js` - and check using the Admin Console that employees are inserted into your Couchbase instance. Note that node.js applications do not support hot deployment, so you need to bounce your application when changing the code.


#### Create and use Couchbase View

Let's now create and use a view to return the employee list.

1- All Couchbase views are accessible using a simple REST API, but you can also use the node.js plugin : [baseview](https://npmjs.org/package/baseview); so let's install this module:

``` sh
npm install baseview
```

2. Create a new view from your application

You can use the Admin Console to create the view, but it is also possible to do it from your node.js code. So let's add the view programmatically in the insertData function.

``` js
var http = require("http");

// load the Couchbase driver and connect to the cluster
var driver = require('couchbase');
var cb = new driver.Couchbase("localhost:8091", null, null, "default");
// load the baseview module
var baseview = require('baseview')({url: 'http://localhost:8092', bucket: 'default'});

...
...

function insertData() {

  //create a new view
  baseview.setDesign('design_employees', {
    'basic_list': {
      'map': "function (doc, meta) { if(doc.type == 'employee') {emit(meta.id, doc.name);}}"
    }
  },
  function(err, res){
    if (err != null) console.log(err);
  }
);

...

}
...

```



This new code, create a new view in Couchbase server:

* line 7 : load the module and set the properties to call the view services
* line 16-17 : call the `basevie.setDesign()` method, that create a view.
* line 18 : set the map function that list all the employees

3- Let's now call the view in the onRequest function.

``` js
function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("See list of employees in the console");
  var params =
{ 'descending'  : 'true'
, 'include_docs' : 'true'
};
baseview.view('design_employees', 'basic_list', params, function(error, data) {
  for( var i = data.rows.length-1,length = data.rows.length ; i >= 0; i-- ) {
    var employee = data.rows[i].doc.json;
    console.log(employee);
  }
});
response.end();
}
```

Calling the view is quite simple :

* lines 6-8 : create an object to send view parameters. In this example I am just using descending, and include_docs to get the full document as part of the response. You can find the list of all the parameters you can use in the [Couchbase documentation : Querying Using the REST API](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-views-querying-rest-api.html) (The [baseview](https://github.com/PatrickHeneise/baseview/blob/master/baseview.js) module is using REST API to call the views).
* line 10-14 : just loop on the result content, returned in the data variable, and print the employee information in the console.

Note: Because of the asynchronous nature of node.js, and my lack of experience with node, I was not able to send the list of employee to the HTTP response.

In another article I will explain how to integrate Couchbase with an node.js application based on Express and Socket.io, where I list the Employee in my the Web page.

Below, the complete code of this simple node.js application:

``` js
var http = require("http");
var driver = require('couchbase');
var cb = new driver.Couchbase("localhost:8091", null, null, "default");
var baseview = require('baseview')({url: 'http://127.0.0.1:8092',bucket: 'default'});

function onRequest(request, response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  });
  response.write("See list of employees in the console");
  var params = {
    'descending': 'true',
    'include_docs': 'true'
  };
  baseview.view('design_employees', 'basic_list', params, function(error, data) {
    for (var i = data.rows.length - 1, length = data.rows.length; i >= 0; i--) {
      var employee = data.rows[i].doc.json;
      console.log(employee);
    }
  });
  response.end();
}

function insertData() {
  //create a new view
  baseview.setDesign('design_employees', {
    'basic_list': {
      'map': "function (doc, meta) { if(doc.type == 'employee') {emit(meta.id, doc.name);}}"
    }
  }, function(err, res) {
    if (err != null) console.log(err);
  });

  // insert employees in Couchbase
  var emps = [{
    "type": "employee",
    "id": 100,
    "name": "Thomas",
    "dept": "Sales",
    "salary": 5000
  }, {
    "type": "employee",
    "id": 200,
    "name": "John",
    "dept": "Development",
    "salary": 4500
  }, {
    "type": "employee",
    "id": 300,
    "name": "Jane",
    "dept": "Marketing",
    "salary": 5000
    }]


    // Insert the data in Couchbase using the add method ()
    for (index = 0; index < emps.length; index++) {
      cb.add(JSON.stringify(emps[index].id), JSON.stringify(emps[index]), 0, undefined, function(data, err, key, cas) {
        if (err && err != 12) { // 12 : LCB_KEY_EEXISTS  
          console.log("Failed to store object:\n" + err);
        }
        });
      }
    }

    var server = http.createServer(onRequest);

    server.listen(8080, insertData());

    console.log("> SERVER STARTED");
```
