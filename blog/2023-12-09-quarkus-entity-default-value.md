---
title: "Quarkus: Default Values for Panache Entity Fields"
description: "Learn how to set default values for Panache entity fields in Quarkus."
tags: [quarkus, panache, java, orm]
keywords: [quarkus, panache, java, orm]
---

![Quarkus: Default Values for Panache Entity Fields](/images/posts/2023-12-09/header.png)

In the ever-evolving landscape of database technologies, my journey led me away from Java ORM projects for a decade, exploring the realms of NoSQL databases like MongoDB, Couchbase, Redis, and even HBase.

Recently, my focus shifted back to Java and, specifically, Quarkus. In this blog post, I'll share my experience migrating part of my site, windr.org, from MongoDB to PostgreSQL with Quarkus, highlighting how I tackled my first small challenge of **setting default values for Panache entity fields**.


Choosing Quarkus and Panache:

Having dabbled with Quarkus during my time at Red Hat in 2019, I decided to delve deeper into it for my personal projects. While familiar with using MongoDB directly with Node.js, working with Quarkus and RDBMS prompted me to opt for Hibernate ORM with Panache, a Quarkus extension offering a [simplified and user-friendly API for Hibernate ORM](https://quarkus.io/guides/hibernate-orm-panache).


I have published the code of this example on GitHub:
- [Learning Quarkus: Default Values for Panache Entity Fields](https://github.com/tgrall/learning-quarkus/tree/main/panache-default-value)



<!-- truncate -->

## Panache Entities and Active Record Pattern

Utilizing the [active record pattern](https://martinfowler.com/eaaCatalog/activeRecord.html), I extended the PanacheEntity class, leveraging its built-in methods for persisting, finding, updating, and deleting entities. Taking an example, let's look at the `Brand` entity:

```java
@Entity
@Table(name = "brands")
public class Brand extends PanacheEntity {

    public String name;

    public String description;

    public String logo;

}
``` 

As mentioned in the [Quarkus Documentation](https://quarkus.io/guides/hibernate-orm-panache#panache-entity), the `PanacheEntity` class provides the methods to persist, find, update and delete entities.

The question that I had was: 
- *how to set default values for the fields of the entity?*

In my case I wanted to set the `logo` field to a default value if it was not set.


## Setting Default Values:

The primary question that arose during this migration was how to set default values for Panache entity fields, specifically the 'logo' field in my case. Two approaches were explored.

### Using Entity Field Declaration

The simplest method involved assigning a default value directly in the entity field declaration. For instance:

```java
@Entity
@Table(name = "brands")
public class Brand extends PanacheEntity {

    public String name;

    public String description;

    public String logo = "default-logo.png";

}
```

This method worked seamlessly, providing the desired default value when creating new entities, as you can see with the following test:

```java
        Brand fanaticWithoutLogo = new Brand();
        fanaticWithoutLogo.name = "Fanatic";
        fanaticWithoutLogo.description = "Fanatic Description";

        String fanaticWithoutLogoString = objectMapper.writeValueAsString(fanaticWithoutLogo);
        given()
                .body(fanaticWithoutLogoString)
                .contentType(ContentType.JSON)
                .accept(ContentType.JSON)
                .when().post("/api/v1/brands")
                .then()
                .statusCode(201)
                .body(
                        "name", is(fanaticWithoutLogo.name),
                        "description", is(fanaticWithoutLogo.description),
                        "logo", is("default-logo.png")
                );
```

I wanted also to enforce a default value when I data are inserted directly in the database. For example, when I am using the `psql` command line tool to insert data in the database, or other external tools.


### Using Column Definition

A more complex but schema-focused approach utilized the `@Column` annotation to set the default value:

```java
@Entity
@Table(name = "brands")
public class Brand extends PanacheEntity {

    public String name;

    public String description;

    @Column(columnDefinition = "varchar(255) default 'default-logo.png'")
    public String logo = "default-logo.png";

}
```

This modify the database schema and add the default value:

```sql
    create table brands (
    id bigint not null,
    description varchar(255),
    logo varchar(255) default 'default-logo.png',
    name varchar(255),
    primary key (id)
);
);
```

## Caveats and Conclusion

While effective, this approach involved hard-coding the default value in both the code and the database schema, presenting a minor inconvenience.

Despite a brief disappointment with the redundancy of the second solution, it proved effective for my current needs. Although `@PrePersist` annotation wasn't explored, it's likely to exhibit similar behavior. If a more elegant solution emerges, I'll be sure to update this post.

In sharing this journey, I hope to assist developers navigating similar challenges and contribute to the collective knowledge of the Quarkus community. While these concepts might be second nature for Jakarta Persistence users, they present insightful perspectives for individuals, much like myself, who are reacquainting themselves with Java ORM after a decade immersed in the world of NoSQL development.

