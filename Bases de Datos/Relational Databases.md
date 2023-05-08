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

## Exercises

Show the name, lastName, ocupation, salary and comission of the employees that have a comission greater than the employee with the "Contador" ocupation.

```sql
SELECT name, lastName, ocupation, salary, comission
FROM employees
WHERE comission > ALL(
  SELECT comission 
  FROM employees 
  WHERE ocupation = 'Contador'
);
```

Show the name, lastName, ocupation, salary and comission of the employees that have a comission less than the employee with the "Contador" ocupation.

```sql
SELECT name, lastName, ocupation, salary, comission
FROM employees
WHERE comission > ANY(
  SELECT comission 
  FROM employees 
  WHERE ocupation = 'Contador'
);
```

ALL and ANY are used for numeric values and for > and <
ALL and ANY aren't used for =, >=, <=, <>

Show the people that not live in the same direction as the employee with the "Vendedor" ocupation.

```sql
SELECT name, lastName, ocupation, salary, comission
FROM employees
WHERE direction NOT IN(
  SELECT direction 
  FROM employees 
  WHERE ocupation = 'Vendedor'
);
```

Show the documentId of the employees that not realize any visit in the april 2023.

```sql
SELECT documentId
FROM employees
WHERE documentId NOT IN(
  SELECT documentId 
  FROM visits 
  WHERE date BETWEEN '01/01/2023' AND '30/04/2023'
);
```

Show all the fields of the client that not receive any visit in the march 2023.

```sql
SELECT *
FROM clients
WHERE documentId NOT IN(
  SELECT documentId 
  FROM visits 
  WHERE date BETWEEN '01/03/2023' AND '31/03/2023'
);
```

Using subqueries to retreive data from multiple tables.
All database access must be done comparing the primary key of the main table with the corresponding foreign key of the subtable.

Show the name, lastName, ocupation and salary of the employees that belong to the department with the name "Ventas".

```sql
SELECT name, lastName, ocupation, salary
FROM employees
INNER JOIN departments ON employees.departmentId = departments.departmentId
WHERE departments.name = 'Ventas';

-- OR

SELECT name, lastName, ocupation, salary
FROM employees
WHERE departmentId = (
  SELECT departmentId
  FROM departments
  WHERE name = 'Ventas'
);
```

Show the name, lastName and direction of the client that have a visit in the visit with the id 10.

```sql
SELECT name, lastName, direction
FROM clients
WHERE documentId = (
  SELECT documentId
  FROM visits
  WHERE visitId = 10
);
```

Show all data of the employee that visit in march the client that have a letter 'a' in the name. The visit was with a motive different to 'COBRANZA'.

```sql
SELECT *
FROM employees
WHERE documentId IN (
  SELECT documentId
  FROM visits
  WHERE date BETWEEN '01/03/2023' AND '31/03/2023'
    AND motive <> 'COBRANZA'
    AND documentId IN (
      SELECT documentId
      FROM clients
      WHERE name LIKE '%a%'
    )
);
```

Show the name, lastName, salary, ocupation and age of the employee that belong to the department with the name "Compras" and have the salary greater than all the employees that are "CONTADOR" and make a visit to the client with the name "Carlos Alvarado" in march 2023 with the "COBRANZA" motive.

```sql
SELECT name, lastName, salary, ocupation, TRUNC((SYSTEDATE - birthDate) / 365, 0) age
FROM employees
WHERE departmentId = (
    SELECT departmentId
    FROM departments
    WHERE name = "Compras"
  )
AND salary > ALL(
  SELECT salary
  FROM employees
  WHERE ocupation = "CONTADOR"
)
AND documentId IN (
  SELECT documentId
  FROM visits
  WHERE date BETWEEN "01/03/2023" AND "31/03/2023"
    AND motive = "COBRANZA"
    AND clientId IN (
      SELECT clientId
      FROM clients
      WHERE name = "Carlos" AND lastName = "Alvarado"
    )
);
```

Show all data of the department to belong the employee that visit during 2023 the client with the documentId 1850994623

```sql
SELECT *
FROM department
WHERE departmentId IN (
  SELECT departmentId
  FROM employees
  WHERE documentId IN (
    SELECT documentId
    FROM visits
    WHERE date LIKE '%2023'
      AND clientId = 1850994623
  )
);
```

## Use of Joins

Is a equlity condition  between the primary key of a table and the corresponding foreign key of another table.
The JOIN replaces the subquery.

The JOIN is useful when you need to show data from multiple tables.

Show the client and employee data that participates in the visti with the id 15

```sql
SELECT clients.name, clients.lastName, clients.direction, employees.name, employees.lastName, employees.ocupation
FROM clients, employees, visitas
WHERE visitas.numVis = 15
  AND visitas.clientId = clients.clientId
  AND visitas.documentId = employees.documentId;
```

Show the code, department name and the code, name and last name of the employee that belong to that department and had a visit in 2023 to the client "María García" and also show the motive of the visit.

```sql
SELECT departments.departmentId, departments.name, employees.documentId, employees.name, employees.lastName, visits.motive
FROM departments, employees, visits
WHERE departments.departmentId = empleados.departmentId
  AND employees.documentId = visits.employeeId
  AND visits.date LIKE '%23'
  AND clients.documentId = visits.documentId
  AND clients.name = 'MARIA' and clients.lastName = 'GARCIA';
```