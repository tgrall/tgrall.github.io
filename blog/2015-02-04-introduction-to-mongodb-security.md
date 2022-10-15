---
title: "Introduction to MongoDB Security"

categories: mongodb nosql security
---

Last week at the Paris MUG, I had a quick chat about security and MongoDB, and I have decided to create this post that explains how to configure out of the box security available in MongoDB.

You can find all information about MongoDB Security in following documentation chapter:

* [http://docs.mongodb.org/manual/security/](http://docs.mongodb.org/manual/security/)


![](/images/posts/intro-mongodb-security/password.jpg )



In this post, *I won't go* into the detail about how to deploy your database in a secured environment (DMZ/Network/IP/Location/...)

I will focus on **Authentication** and **Authorization**, and provide you the steps to secure the access to your database and data.

I have to mention that by default, when you install and start MongoDB, security is not enabled. Just to make it easier to work with.

The first part of the security is the **Authentication**, you have multiple choices documented [here](http://docs.mongodb.org/manual/core/authentication/). Let's focus on "MONGODB-CR" mechanism.

The second part is **Authorization** to select what a user can do or not once he is connected to the database. The documentation about authorization is available [here](http://docs.mongodb.org/manual/core/authorization/).

Let's now document how-to:

1. Create an Administrator User
2. Create Application Users

For each type of users I will show how to grant specific permissions.

<!-- truncate -->

## 1. Start MongoDB

As I said before, by default security is not enabled when you start MongoDB; so the first think to do is to enable it using the `--auth` parameter.

```
> mkdir /data/db

> mongod --auth

....
....
2015-02-04T06:56:37.875+0100 [conn1] note: no users configured in admin.system.users, allowing localhost access
...

```
MongoDB is starting, and until you have created a user you can connect from localhost to create some users (especially the administrator one). This is what is called the *localhost exception*.

Note: I am here documenting security in simple configuration, I invite you to look to the documentation when deploying a [Sharded cluster](http://docs.mongodb.org/v2.2/administration/sharded-clusters/#sharded-cluster-security-considerations).

Now that we have started MongoDB, we can create users.


##2. Create Admin User

The first thing is to create an admin user, that can also create users, So we have to:

1. go to the mongo shell
2. connect to the `admin' database
3. create a user and assign him the role [**userAdminAnyDatabase**](http://docs.mongodb.org/manual/reference/built-in-roles/#userAdminAnyDatabase)

```
use admin

var user = {
	"user" : "admin",
	"pwd" : "manager",
	roles : [
		{
			"role" : "userAdminAnyDatabase",
			"db" : "admin"
		}
	]
}

db.createUser(user);

exit
```

Now that you have created a user, in a MongoDB running with `--auth`, anonymous connections won't be able to do do anything with the database.

You can test for example to execute `show dbs` or `db.coll.insert({'x':0})` commands, you'll see authorization errors.


### Connect with the Admnistrator user

Now that we have an admin user you can connect to the database with this user:

```

> mongo admin -u admin -p


```

Our admin user, has the role **userAdminAnyDatabase**. With this role you can manage user; but this role cannot read/write data from application datatabases/collections.

So we need now to create a new user for our "eCommerce" application.

## 3. Create Application User

Now we will create a new user *website* that is responsible of the ecommerce database.

```
> mongo admin -u admin -p

use ecommerce

var user = {
	"user" : "website",
	"pwd" : "abc123",
	roles : [
		{
			"role" : "readWrite",
			"db" : "ecommerce"
		}
	]
}

db.createUser(user);

exit

```

This user will be able to read/write on the *ecommerce* database

### Connect with the application user

Using the mongo shell you can now connect and create/query data

```
> mongo ecommerce -u website -p

db.products.insert({ "title" : "MongoDB in Action"  });

db.products.findOne();

db.products.update({}, {"$set" : { "type" : "book" } })

```

As you can see this user has the perfect profile for your application.

Note, that if you try to query or modify another database with this user you will receive authorization exceptions.


## Create a reporting user (Read Only)

You may need in your application, user that can only read data, let's say in all databases. For this you just need to assign the role **readAnyDatabase**.

```

> mongo admin -u admin -p

var user = {
	"user" : "reporting",
	"pwd" : "abc123",
	roles : [
		{
			"role" : "readAnyDatabase",
			"db" : "admin"
		}
	]
}

db.createUser(user);

exit
```

This user will be able to query all the databases and collections, including `show dbs` command.

Let's connect with the reporting user:

```
> mongo admin -u reporting -p

show dbs

use ecommerce

db.products.find();


```

If you try to inser/update/delete document you will receive an exception.

## Add new role to a user

Let's now see how to add a new role to a user. For example I want to let the admin the power of read and write any database. For this I just need to add the role **readWriteAnyDatabase** to the admin user.

```
> mongo admin -u admin -p

db.grantRolesToUser(
	"admin",
	[{ "role" : "readWriteAnyDatabase", "db" : "admin" }]
)

db.getUser("admin");

```

Using the `db.grantRolesToUser` command I have added the role to the admin user, and using the `db.getUser` I can look at the user profile.

Now, admin user should be able to create new databases, collections and documents, let's try:

```
use hr

db.employees.insert({ "name":"John Doe", "hire_date" : new Date() });

db.organization.insert({ "name" : "Development" });

db.employees.findOne();

```

## Create and use custom roles

Another feature that is used a lot around security is related to the roles. In some case you want to provide multiple roles to a user, for example:

* all permission on database *ecommerce*
* read the collection *employees* in database *hr*

For this you can create a role that provide all the permissions and assign it to users. Let's do that using admin user.

```
use admin

var role = {
	"role"  : "webSiteManagerRole",
	privileges : [
		{
			"resource": {"db" : "hr", "collection" : "employees"},
			"actions": ["find"]
		}
	],
	"roles" : [
		{
			"role" : "readWrite",
			"db" : "ecommerce"
		}
	]
}

db.createRole( role );

var user = {
	"user" : "master",
	"pwd" : "abc123",
	roles : [
		{
			"role" : "webSiteManagerRole",
			"db" : "admin"
		}
	]
}

db.createUser(user);

exit

```

If you connect now with the user "master", you will see that, the user:

* can do anything you want in the ecommerce database
* can read the "hr.employees" collection, on only this
* cannot do anything else.


## Roles and Privileges

As you have seen in the previous section, you can create roles, and assign privileges to these roles. This is very powerful and you can really control each action on the database.

I am inviting you to look in detail to the built-in roles and privileges, this will help you a lot to select the proper ones for your application:

* [Built-in Roles](http://docs.mongodb.org/manual/reference/built-in-roles/)
* [Privileges](http://docs.mongodb.org/manual/reference/privilege-actions/)


## Conclusion

In this blog post I quickly explained, how to:

* Use MongoDB Authentication
* Create Users
* Assign Roles and Privileges for Users.

It is interesting to know that everything that I have showed you in the shell could be done from a user interface in [MMS](http://mms.mongodb.com)
