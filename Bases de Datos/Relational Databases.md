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

Muestra el codigo, nombre, apellido y sueldo del empleado que gana mas que el empleado con codigo E10 y que visitó durante la 1ra semana de marzo al cliente JULIA SANCHEZ

-- Subconsultas
```sql
SELECT cod_emp, nom_emp, ape_emp, sue_emp
FROM EMPLEADOS
WHERE sue_emp > (
    SELECT sue_emp
    FROM EMPLEADOS
    WHERE cod_emp = 'E10'
  )
  AND cod_emp IN (
    SELECT cod_emp
    FROM VISITAS
    WHERE fec_vis BETWEEN '01/03/2023' AND '07/03/2023'
    AND ced_cli IN (
      SELECT ced_cli
      FROM CLIENTES
      WHERE nom_cli = "JULIA" AND ape_cli = "SANCHEZ"
    )
  );
```

-- JOINS
Se debe aumentar la fecha y el motivo de la visita en la consulta principal

```sql
SELECT EMPLEADOS.cod_emp, EMPLEADOS.nom_emp, EMPLEADOS.ape_emp, EMPLEADOS.sue_emp, VISITAS.fec_vis, VISITAS.mot_vis
FROM EMPLEADOS, VISITAS, CLIENTES
WHERE EMPLEADOS.sue_emp > (
    SELECT sue_emp
    FROM EMPLEADOS
    WHERE cod_emp = 'E10'
  )
  AND VISITAS.cod_emp = EMPLEADOS.cod_emp
  AND VISITAS.date BETWEEN '01/03/2023' AND '07/03/2023'
  AND CLIENTES.ced_cli = VISITAS.ced_cli
  AND CLIENTES.nom_cli = "JULIA" AND CLIENTES.ape_cli = "SANCHEZ";
```

Show all the department data that have a employee with the name "Juan" and the employee have a visit in 2023 to the client "María García" and also show the motive of the visit.

```sql
SELECT *
FROM departments
WHERE departmentId IN (
  SELECT departmentId
  FROM employees
  WHERE name = 'Juan'
)
```

Show all the data of the client that was visited in february 2023 by the employee with the name "Carlos Mera"

```sql
SELECT *
FROM clients
WHERE clientId IN (
  SELECT clientId
  FROM visits
  WHERE date BETWEEN '01/02/2023' AND '28/02/2023'
    AND employeeId IN (
      SELECT employeeId
      FROM employees
      WHERE name = 'Carlos' AND lastName = 'Mera'
    )
);
```

```sql
SELECT D.*, E.nom_emp, E.ape_emp, E.sue_emp, V.fec_vis, V.mot_vis
FROM DEPARTAMENTOS D, EMPLEADOS E, VISITAS V, CLIENTES C
WHERE D.cod_dep = E.cod_dep
  AND E.cod_emp = V.cod_emp
  AND V.fec_vis BETWEEN '01/02/2023' AND '28/02/2023'
  AND C.ced_cli = V.ced_clis
  AND C.nom_cli = 'MARIA' AND C.ape_cli = 'GARCIA';
```

## Use of subqueries in DML statements

### Update 

Put the same salary of the employee with the name "Juan" to the employee with the name "Carlos"

```sql
UPDATE employees
SET salary = (
  SELECT salary
  FROM employees
  WHERE name = 'Juan'
)
WHERE name = 'Carlos';
```

Update to the employee with code 'E02' the salary of the employee with the code 'E23'

```sql
UPDATE employees
SET salary = (
  SELECT salary
  FROM employees
  WHERE cod_emp = 'E23'
)
WHERE cod_emp = 'E02';
```

Update with the same comission of the employee 'E05' to the employee that earn more than the employee with code 'EO4'

```sql
UPDATE employees
SET comission = (
  SELECT comission
  FROM employees
  WHERE cod_emp = 'E05'
)
WHERE sue_emp > (
  SELECT sue_emp
  FROM employees
  WHERE cod_emp = 'EO4'
);
```

### Insert

Create a table with the documentId, name, lastName, salary and comission of the employees and fill with the data.

```sql
CREATE TABLE sellers
AS SELECT documentId, name, lastName, salary, comission 
FROM employees
WHERE car_emp = 'Vendedor';
```

The col names can't change in the subquery


Insert the data of the employee with the ocuppation "Vendedor" in the table sellers

```sql
INSERT INTO sellers
SELECT documentId, name, lastName, salary, comission
FROM employees
WHERE ocuppation = 'Vendedor';
```

We need the same order of the columns as the table sellers.

Update all the employees to earn the same salary of the seller better paid

```sql
UPDATE employees
SET salary = (
  SELECT MAX(salary)
  FROM sellers
);
```

## Commit

Makes permanent the changes in the database

```sql
COMMIT;
```

## Rollback

Undo the changes in the database for DML statements (INSERT, UPDATE, DELETE) till the last commit

```sql
ROLLBACK;
```

## Delete

Delete the visits that were made to client with an letter a in the name

```sql
DELETE FROM visits
WHERE clientId IN (
  SELECT clientId
  FROM clients
  WHERE name LIKE '%a%'
);
```

Delete all the visits

```sql
DELETE FROM visits;
```

Delete the employees that earn less than the employee with the code 'E03'

```sql
DELETE FROM employees
WHERE salary < (
  SELECT salary
  FROM employees
  WHERE cod_emp = 'E03'
);
```

Delete all the supervisors

```sql
DELETE FROM employees
WHERE supervisorId IS NULL;
```

## Group functions or Aggregation functions

The group funcions are functions that works over data group and return always a single value for each group.

They are:

- MAX: Returns the maximum value of a column
    ```sql
    SELECT MAX(salary)
    FROM employees;
    ```
- MIN: Returns the minimum value of a column
  ```sql
  SELECT MIN(salary)
  FROM employees;
  ```
- COUNT: Returns the number of rows of a column, we should count the primary key
  ```sql
  SELECT COUNT(salary)
  FROM employees;
  ```
- SUM: Returns the sum of the values of a column
  ```sql
  SELECT SUM(salary)
  FROM employees;
  ```
- AVG: Returns the average of the values of a column
  ```sql
  SELECT AVG(salary)
  FROM employees;
  ```

Show the maximum anual salary of the employees

```sql
SELECT MAX(salary * 12)
FROM employees;
```

Show the maximun salary of the employees that are 'Contadores'
  
```sql  
SELECT MAX(salary)
FROM employees
WHERE ocuppation = 'Contador';
```

> The 'where' clause filters the data before the group function is applied

Show the name, lastName, salary and comission of the employee that earn the maximun salary

```sql
SELECT name, lastName, salary, comission
FROM employees
WHERE salary = (
  SELECT MAX(salary)
  FROM employees
);
```

## Group by

The **group by** clause is used to group the data by one or more columns.

Show the maximun salary of the employees by department

```sql
SELECT departmentId, MAX(salary)
FROM employees
GROUP BY departmentId;
```

Show the maximun salary of the employees by department and ocuppation

```sql
SELECT departmentId, ocuppation, MAX(salary)
FROM employees
GROUP BY departmentId, ocuppation;
```

Show the count of the employees by department

```sql
SELECT departmentId, COUNT(CED_EMP)
FROM employees
GROUP BY departmentId;
```

## Having

The **having** clause is used to filter the data after the group function is applied.

Show the maximun salary of the employees by department and ocuppation that earn more than 1000

```sql
SELECT departmentId, ocuppation, MAX(salary)
FROM employees
GROUP BY departmentId, ocuppation
HAVING MAX(salary) > 1000;
```

## Exercises

Show the sum of the salary of the employees by ocuppation

```sql
SELECT ocuppation, SUM(salary)
FROM employees
GROUP BY ocuppation;
```

Show the sum of the salary of the employees by ocuppation but in the final result show only the sums that are greater than 5200

```sql
SELECT ocuppation, SUM(salary)
FROM employees
GROUP BY ocuppation
HAVING SUM(salary) > 5200;
```

Show the documentId of the employee that made more than 5 visits during the month of february of 2023

```sql
SELECT cod_emp, COUNT(cod_emp)
FROM visits
WHERE fec_vis BETWEEN '01/02/2023' AND '28/02/2023'
GROUP BY cod_emp
HAVING COUNT(cod_emp) > 5;
```

Show the name and lastName of the client that received more than 4 visits for the motive 'Cobranza' during the first 5 months of 2023

```sql
SELECT name, lastName
FROM clients
WHERE documentId IN (
  SELECT documentId
  FROM visits
  WHERE motive = 'Cobranza'
  AND fec_vis BETWEEN '01/01/2023' AND '01/05/2023'
  GROUP BY documentId
  HAVING COUNT(num_vis) > 4
);
```

Show the code, name and lastName that realize the greater quantity of visits in march of 2023

```sql
SELECT *
FROM employees
WHERE documentId IN (
  SELECT documentId
  FROM visits
  WHERE fec_vis BETWEEN '01/03/2023' AND '31/03/2023'
  GROUP BY documentId
  HAVING COUNT(num_vis) = (
    SELECT MAX(COUNT(num_vis))
    FROM visits
    WHERE fec_vis BETWEEN '01/03/2023' AND '31/03/2023'
    GROUP BY documentId
  )
);
```

Show the code of the department that have more than 2 sellers that earn between 500 and 2100

```sql
SELECT cod_dep, COUNT(cod_emp)
FROM employees
WHERE car_emp = 'SELLER'
  AND sue_emp BETWEEN 500 and 2100
GROUP BY cod_emp
HAVING COUNT(cod_emp) > 2
```

Show the documentId of the client that receive the less quantity of visits

```sql
SELECT documentId, COUNT(num_vis)
FROM visits
GROUP BY documentId
HAVING COUNT(num_vis) = (
  SELECT MIN(COUNT(num_vis))
  FROM visits
  GROUP BY documentId
);
```

Show the code of the employee that made the less quantity of visits in february of 2023

```sql
SELECT code
FROM visits
WHERE fec_vis BETWEEN '01/02/2023' AND '28/02/2023'
GROUP BY code
HAVING COUNT(num_vis) = (
  SELECT MIN(COUNT(num_vis))
  FROM visits
  GROUP BY code
);
```
