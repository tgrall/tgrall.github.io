---
title: "Getting started with Couchbase and node.js on Windows"

categories: couchbase nosql nodejs windows
---
In a previous post I have explained how to use Couchbase and Node.js on OS X. Since it is quite different on Windows here another article about it.

### Install Couchbase Server 2.0


If you have not installed Couchbase Server already, do the following :

1.  Download Couchbase Server from [here](http://www.couchbase.com/download)
2.  Run the installer
3.  Configure the database at [http://localhost:8091](http://localhost:8091/) (if you have issue take a look to [this article](http://tugdualgrall.blogspot.fr/2012/12/what-to-do-if-your-couchbase-server.html))

These steps are documented in the [Couchbase Server Manual](http://www.couchbase.com/docs/couchbase-manual-2.0/couchbase-getting-started-install-win.html).

###  Install Node


**Install latest version of node**

It is quite easy to install Node.js using the Windows installer provided at [http://nodejs.org](http://nodejs.org/).

Once you have installed node, you can test is using the command line interface:

``` sh
node
&gt; console.log(process.version);
v0.8.16
```
Node is installed. So far so good !

###  Install Couchnode
Couchnode, the Couchbase Client Library for Node.js, is a native module. The tool used to install native modules is `node-gyp`.  So to install couchnode you need to install :

* node-gyp
* python
* Visual Studio to have access to a C/C++ compiler

####  Install node-gyp

The node-gyp module is easy to install and you can install it using npm using the following command:

``` sh
npm install -g node-gyp
```


The *-g* parameter indicates that this module will be installed globally and added to your `%PATH%`.

#### Install Python

GYP uses Python to generate the project, so you need to install it on your environment. I have installed [Python 2.7.3](http://www.python.org/download/releases/2.7.3/) using the Windows installer.


**Install Visual Studio**

Finally you need a C/C++ compiler, the best way to get it is to install Visual Studio. As you probably know I am not a Windows expert and I do not know a lot about Microsoft development tools. I have downloaded Visual Studio Express the free development tools from [here](http://www.microsoft.com/visualstudio/eng/downloads); it was sufficient.

**Install Libcouchbase for Windows**

Couchnode uses libcouchbase the C client library, so before running the npm install for Couchbase, you need to install libcouchbase itself.

You can download it from [Couchbase site](http://www.couchbase.com/develop/c/current). The Windows versions are located in the left menu of the page. Download the zip file, that matches your environment. I have downloaded the "Windows, 64-bit MSVC 10".

Node-gyp will look for all the dependencies (DLL, library headers) into `c:\couchbase` directory, so you need to unzip the file in this folder. This location comes from the [binding.gyp](https://github.com/couchbase/couchnode/blob/master/binding.gyp#L7) file of the couchnode project.

**Install and Test Couchnode itself!**

Let's check what we have done so far; we have installed:

*   Node
*   node-gyp
*   Python
*   Visual Studio
*   Libcouchbase

We are now ready to install and use couchnode itself. For this we can create a new node project.

``` sh
mkdir my-app
cd my-app
npm install couchbase
```

The install command will:

*   Create a node_modules folder and put couchbase client library in it
*   When installing/building couchnode on Windows I had the following warning :

C:\Program Files (x86)\MSBuild\Microsoft.Cpp\v4.0\V110\Microsoft.CppBuild.targets(1138,5): warning MSB8012: TargetExt(.dll) does not match the Linker's Output
File property value (.node). This may cause your project to build incorrectly.
To correct this, please make sure that $(OutDir), $(TargetName) and $(TargetExt) property values match the value specified in %(Link.OutputFile).
[C:\Users\tgrall\node\node_modules\couchbase\build\couchbase_impl.vcxproj]

This is only a warning and as far as I know, it is not a blocker. At the end of the log you should see:

``` sh
couchbase@0.0.10 node_modules\couchbase
├── bindings@1.0.0
└── request@2.11.4
```

You have successfully installed couchnode.

Let's now write a small test. Create a `test.js` file with the following content:

``` js
var  driver = require('couchbase');

driver.connect({
  "username": "",
  "password": "",
  "hostname": "localhost:8091",
  "bucket": "default"},
  function(err, cb) {
    if (err) {
      throw (err)
    }

    var key = 'foo';
    cb.set(key, '{"server" : "couchbase", "version" : 2 }' , function (err, meta) {
      if (err) { console.log(err); }
      cb.get(key, function(err, doc) {
        if (err){ console.log(err);}
        console.log(doc);
      });  
    });
  });
```

Run this with the command:

``` sh
node test.js
```

You should see the following text in your console :

```
{ server: 'couchbase', version: 2 }
```


### Conclusion

In this article you have learned how to:

* Install Couchbase
* Install Node
* Install and configure node-gyp
* Install and use Couchbase and Node

all this on Windows 7.
