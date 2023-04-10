# Relational Databases

## Introduction

A database is a set of row and columns.
A database don't save information, it save data. A single data is the minimun and indivisible unit of information and the information is the result of the processing of data. A database is a collection of data organized in a way that allows access, retrieval, and use of that data.
A database can't have dynamic information, it can only have static.

## Relational Database Management Systems

A relational database management system (RDBMS) is a software package that allows users to create, maintain, and administer a relational database. The RDBMS provides a set of tools that allow users to create, modify, and delete tables and records. The RDBMS also provides a set of tools that allow users to create, modify, and delete relationships between tables. The RDBMS also provides a set of tools that allow users to create, modify, and delete relationships between records in the same table.

## Relational Database Design

Relational database design is the process of creating a relational database. The relational database design process involves the following steps:

1. Identify the entities in the database based on real-world flowcharts.

## General aspects of relational database design

### Atribute Domain



## Relationship types

### One to One

An entity A has only one entity B and an entity B has only one entity A. For example, a person has only one social security number and a social security number belongs to only one person.

### One to Many

An entity A has many entities B and an entity B has only one entity A. For example, a person has many addresses and an address belongs to only one person.

### Many to Many

An entity A has many entities B and an entity B has many entities A. For example, a person has many courses and a course has many students.

## Cardinality

The cardinality of a relationship is the number of entities in one entity set that are associated with each entity in the other entity set. The cardinality of a relationship is expressed as a pair of numbers, one for each entity set. The first number in the pair is the minimum cardinality and the second number is the maximum cardinality. The minimum cardinality is the smallest number of entities in the entity set that can be associated with an entity in the other entity set. The maximum cardinality is the largest number of entities in the entity set that can be associated with an entity in the other entity set.

## Database modelization

### Conceptual Design Metodology

Se debe pensar en el mundo real y en como se mueven los datos a través. Da como resultado un Esquema conceptual.

SI se comete un error aqui, ese error se hereda a los siquientes pasos

### Logical Design Metodology

A set of rules to convert the conceptual schema of entities into a logical schema expressed in tables (Relational Table Model). The output of this step is a relational schema.

### Fundamental concepts of relational model 

#### Table

Is a collection of rows and columns. Each intersection of a row and a column must be an indivisible and atomic value. The columns are called attributes or fields and the rows are called records or tuples.

- The name of the table is the name of the entity.
- Can't have two columns with the same name.

#### Convertion rules from conceptual to logical schema

- One table per entity.
- One column per attribute.
- One row per entity instance.
- The primary key has conserved from the conceptual schema and must be underlined

- For the relations
  - If the relationship is one to one, must generate a single table with all the fields of the two entities, and the primary key should be the primary key of the most important table.
  - If the relationship is one to many, must generate two tables, each with the fields of the entities, and the primary key of the **one** side table must be moved as another column to the **many** side table.
  - If the relationship is many to many, must generate three tables, two of them with the fields of the entities, and the last one with the primary keys of the two tables and the relation attributes if there are any.
  - If the relationship is recursive, must generate a single table with all the fields of the entity and a new column with the primary key of the instance associated with the current instance. Like a one to many relationship with itself.

- The refence integrity: A set of rules don't allow the integrity violation of the database.
  - You can't that in a subtable appears a value that is not in the main table (foreign key).

