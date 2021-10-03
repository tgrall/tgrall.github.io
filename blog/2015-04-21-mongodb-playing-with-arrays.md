---
title: "MongoDB : Playing with Arrays"

categories: mongodb json arrays lists
---


As you know,  you have many differences between relational and document databases. The biggest, for the developer, is probably the data model: Row versus Document. This is particularly true when we talk about "relations" versus "embedded documents *(or values)*". Let's look at some examples, then see what are the various operations provided by MongoDB to help you to deal with this.

<!-- truncate -->

I won't use this post to go in all the details about "document design", but I just want to focus on the operations you can to with these arrays/list (so useful operations once you have chosen to embed documents).

Let's use a very simple example based on e-commerce platform, with two document types : ***user*** and ***orders***.

The first thing you have, is a simple list of values into a JSON array. Let's look at a user profile where user have a list of interests  (field `interested_by`) :

``` json
{
  "_id" : 654321,
  "first_name" : "John",
  "last_name" : "Doe",
  "interested_by" : [ "electronics", "sports", "music" ],
  "address" : {
    "name" : "John Doe",
    "company" : "Resultri",
    "street" : "1015 Mapple Street",
    "city" : "San Francisco",
    "state" : "CA",
    "zip_code" : 94105
  }
}
```

Another thing you do with array, is to represent "one-to-many" relations. These relations in your RDBMS are based on multiple tables and foreign keys.
In document databases, like MongoDB, these relations are, most of the time, represented using an *array of documents*, something like (look at the `items` field):

``` json
{
  "_id" : 45218468309,
  "date" : ISODate("2015-01-28T09:40:50.615Z"),
  "customer" : {
    "id" : 654321,
    "name" : "John Doe"
  },
  "ship_to" : {
    "name" : "John Doe",
    "company" : "Resultri",
    "street" : "1015 Mapple Street",
    "city" : "San Francisco",
    "state" : "CA",
    "zip_code" : 94105
  },
  "items" : [
    {
      "sku" : "WA34R",
      "description" : "Wireless Qwerty Keyboard",
      "quantity" : 1,
      "unit_price" : 41.5,
      "price" : 41.5,
      "vat" : 20
    },
    {
      "sku" : "MW003",
      "description" : "MiWatch",
      "quantity" : 2,
      "unit_price" : 245,
      "price" : 490,
      "vat" : 20
    }
  ]
}

```

Documents above are not necessary complete, I just want to focus on the various operations you can do on these arrays.

*Note: you can add these documents into your MongoDB instance, I will use the collections `customers` and `orders`.*


### Adding new interest to the user

To achieve this you have 2 operators that you can use in your update: [`$push`](1) and [`$addToSet`](2). Since these one a very simple I won't go into too much details.

The `$push` will add the value at the end of the list, if the value already exits it will be added (many copies), this is why it makes sense to use the `$addToSet` operator, that only add the value if the value does not already exist in the array.


```
db.customers.update(
  { "_id" : 654321  },
  { "$addToSet" : { "interested_by" :  "sports"}  }
);
```
This update command above **will not change** the document since the "sports" value is already in the list.

```
db.customers.update(
  { "_id" : 654321  },
  { "$addToSet" : { "interested_by" :  "books"}  }
);
```
This **will add** the "books" value at the end of the list.

If the attribute `interested_by` does not exist in the document, it will be added with one single entry (here the `$push` is working the same way ).

If the attribute is not an array, the database will not do anything and return the error [#16837](3) *"The field 'first_name' must be an array but is of type String in document"*.

Here we use *interest*, but you can imagine doing the same thing for tagging, or any other business use case with a list of values.

### Adding a new item into an order

The previous case, is very simple since it is a scalar value. Now I need to add a new order line, it is not harder than before:

```
db.orders.update(
  { "_id" : 45218468309   },
  {
    "$push" : {
      "items" : {
        "sku" : "MO001",
        "description" : "Bluetooth mouse",
        "quantity" : 1,
        "unit_price" : 20.00,
        "price" : 20.00,
        "vat" : 20.00
      }
    }
  }
);
```
So you can see now that the value is added at the end of the list.

### Updating an item in the order

Let's look at another requirement. Now I need to update for example the quantity of one of the line. In your relational application it is *easy* in the sense that you have one single record to update(in reality it is a different story since application are using complex data layer).

You can do the same, meaning you can only update the *items* directly in the array -- (no need to replace the full document or list like I see too often).

For this, you  just need to use the `update` and `$set` and specify the positional operation `$`.

The `$` operator is a placeholder for the first entry in the array that match the filter (query document) sent to the update/findAndModify command.

In our example, to update a specific line in the order

The proper way is simply to use the an update and `$set`,
 but you have to select the exact entry in the array in your filter. For example in our case we want to update the number of mouses and the price, this will look like:

```
db.orders.update(
  {
    "_id" : 45218468309,
    "items.sku" : "MO001"
  },
  {
    "$set" :
    {
        "items.$" : {
          "sku" : "MO001",
          "description" : "Bluetooth mouse",
          "quantity" : 2,
          "unit_price" : 20.00,
          "price" : 40.00,
          "vat" : 20.00
        }
    }
  }
);
```

As you can see, the `$` operator is telling MongoDB to update one specific entry in the array.

## Remove an item from the Array

You have learned so far that you can easily query and add values into an array; using the same appraoch you can also remove entry in an array. This is done using 3 operators : `$pop`, `$pull` and `$pullAll`

* The `$pop` operator removes one element from the end of the array
* The `$pull` operator removes *all* elements in the array that match a specified value.
* The `$pullAll` operator removes *all* elements in the array that match any of the specified values.

#### Remove some interests from a customer

For example, let's remove the "electronics" interest from the customer id 654321.

```
db.customers.update(
  { "_id" : 654321  },
  { "$pull" : { "interested_by" :  "electronics"}  }
);

```

If you want to remove sports and music interest from the customer you can use the `$pullAll` operator as follow:

```
db.customers.update(
  { "_id" : 654321  },
  { "$pullAll" : { "interested_by" :  ["sports","music"]}  }
);

```

Here we use *interest*, but you can imagine doing the same thing for tagging, or any other business use case with a list of values.

#### Remove item into an order

Using the same operator you can also remove a line order (item) from an order document, for example let's remove the line with the item MO001 (Bluetooth mouse). For this we can use the `$pull` operator with the proper sku.

```
db.orders.update(
  {
    "_id" : 45218468309,
  },
  {
    "$pull" : { "items" : { "sku" : "MO001" } }
  }
);

```

### Conclusion

In this article you have learn how to create/edit arrays in JSON documents.

In addition to all the update operators, MongoDB provides many operators for querying arrays such as  [$size](5) or [`$elemMatch`](4).


[1]: http://docs.mongodb.org/manual/reference/operator/update/push/
[2]: http://docs.mongodb.org/manual/reference/operator/update/addToSet/
[3]: https://github.com/mongodb/mongo/blob/master/docs/errors.md
[4]: http://docs.mongodb.org/manual/reference/operator/query/elemMatch/
[5]: http://docs.mongodb.org/manual/reference/operator/query/size/
