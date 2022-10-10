**Índice**

- [Aspectos y Funciones iniciales](#aspectos-y-funciones-iniciales)
  - [Creando la primera base de datos en PostgreSQL](#creando-la-primera-base-de-datos-en-postgresql)
  - [Eliminando una base de datos en PostgreSQL](#eliminando-una-base-de-datos-en-postgresql)
  - [Creando una tabla en PostgreSQL](#creando-una-tabla-en-postgresql)
  - [Insertando datos en una tabla en PostgreSQL](#insertando-datos-en-una-tabla-en-postgresql)
  - [Actualizando registros en una tabla en PostgreSQL](#actualizando-registros-en-una-tabla-en-postgresql)
  - [Consultas en PostgreSQL](#consultas-en-postgresql)
  - [Eliminando registros en una tabla en PostgreSQL](#eliminando-registros-en-una-tabla-en-postgresql)
  - [Modificando una tabla en PostgreSQL](#modificando-una-tabla-en-postgresql)
  - [Modificando una columna en PostgreSQL](#modificando-una-columna-en-postgresql)
- [Tipos de Datos en PostgreSQL](#tipos-de-datos-en-postgresql)
- [Where y Operadores de Comparación en PostgreSQL](#where-y-operadores-de-comparación-en-postgresql)
- [Clave Primaria | Primary Key](#clave-primaria--primary-key)

## Aspectos y Funciones iniciales

- Es una base de datos relacional
- Es Open Source

### Creando la primera base de datos en PostgreSQL

> Se está utilizando la aplicación de DBeaver para la creación de la base de datos y una versión de 14.0.1 de PostgreSQL

1. Abrimos el editor de consultas de DBeaver

2. Escribimos la siguiente consulta

```sql
CREATE DATABASE "nombre_de_la_base_de_datos";
```

> El código puede ser escrito en mayúsculas o minúsculas. El nombre de la base de datos puede o no ir entre comillas dobles.

3. Ejecutamos la consulta

4. Si todo sale bien, nos aparecerá un mensaje de que la base de datos ha sido creada correctamente

### Eliminando una base de datos en PostgreSQL

1. Abrimos el editor de consultas de DBeaver

2. Escribimos la siguiente consulta

```sql
DROP DATABASE IF EXISTS "nombre_de_la_base_de_datos";
```

> El código puede ser escrito en mayúsculas o minúsculas. El nombre de la base de datos puede o no ir entre comillas dobles.
> La base que se desea eliminar debería estar desconectada o no estar en uso.

3. Ejecutamos la consulta

4. Si todo sale bien, nos aparecerá un mensaje de que la base de datos ha sido eliminada correctamente

### Creando una tabla en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta


```sql
CREATE TABLE "nombre_de_la_tabla" (
    "nombre_de_la_columna" tipo_de_dato opciones_de_la_columna
);
```

> El código puede ser escrito en mayúsculas o minúsculas. El nombre de la tabla puede o no ir entre comillas dobles.

- El nombre de la columna puede o no ir entre comillas dobles
- El tipo de dato y las opciones de la columna deben ir sin comillas

2. Ejecutamos la consulta

3. Si todo sale bien, podremos ver el nuevo schema(tabla) en la base de datos

Ejemplo:

```sql
CREATE TABLE "users" (
   	"id_persona" int not null,
   	"nombre" varchar(20) not null,
   	"cedula" varchar(10) not null	
)
```

### Insertando datos en una tabla en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta

```sql
INSERT INTO "nombre_de_la_tabla" (nombre_de_la_columna, nombre_de_la_columna) VALUES (valor, valor);
```

- Los valores deben ir entre comillas simples

2. Ejecutamos la consulta
3. Si todo sale bien, podremos ver el nuevo registro en la tabla

Ejemplo:

```sql
INSERT INTO employee (
    employee_id,
    first_name,
    last_name,
    manager_id
)
VALUES
    (1, 'Sandeep', 'Jain', NULL),
    (2, 'Abhishek ', 'Kelenia', 1),
    (3, 'Harsh', 'Aggarwal', 1),
    (4, 'Raju', 'Kumar', 2),
    (5, 'Nikhil', 'Aggarwal', 2),
    (6, 'Anshul', 'Aggarwal', 2),
    (7, 'Virat', 'Kohli', 3),
    (8, 'Rohit', 'Sharma', 3);
```

> El orden de los valores debe ser el mismo que el de las columnas

### Actualizando registros en una tabla en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta

```sql
UPDATE "nombre_de_la_tabla" SET nombre_de_la_columna = valor WHERE condicion;
```

2. Ejecutamos la consulta
3. Si todo sale bien, podremos ver el registro actualizado en la tabla

Ejemplo:

```sql
UPDATE users SET id_persona = 78, cedula = '7894561231' where nombre = 'Sandeep'
```

- Se puede también tener condiciones múltiples

```sql
UPDATE users SET id_persona = 78, cedula = '7894561231' where nombre = 'Sandeep' and cedula = '1234567890'
UPDATE users SET id_persona = 78, cedula = '7894561231' where nombre = 'Sandeep' or cedula = '1234567890'
UPDATE users SET id_persona = 78, cedula = '7894561231' where nombre = 'Sandeep' and cedula = '1234567890' or cedula = '0987654321'
```

### Consultas en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta

```sql
SELECT nombre_de_la_columna FROM "nombre_de_la_tabla" WHERE condicion;
```

2. Ejecutamos la consulta
3. Si todo sale bien, podremos ver el registro actualizado en la tabla

Ejemplos:

```sql
SELECT * FROM users where nombre = 'Sandeep'
SELECT (nombre, cedula) as datos FROM users where nombre = 'Sandeep'
SELECT * FROM users
SELECT nombre as Nombre, cedula FROM users where nombre = 'Sandeep'
```

### Eliminando registros en una tabla en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta

```sql
DELETE FROM "nombre_de_la_tabla" WHERE condicion;
```

2. Ejecutamos la consulta
3. Si todo sale bien, ya no podremos ver el registro en la tabla que coincida con la condición

Ejemplos:

```sql
DELETE FROM users -- Elimina todos los registros de la tabla
DELETE FROM users where nombre = 'Sandeep' -- Elimina el registro que coincida con la condición
DELETE FROM users where nombre = 'Sandeep' and cedula = '1234567890'
DELETE FROM users where nombre = 'Sandeep' or cedula = '1234567890'
DELETE FROM users where nombre = 'Sandeep' and cedula = '1234567890' or cedula = '0987654321'
```

### Modificando una tabla en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta

```sql
ALTER TABLE "nombre_de_la_tabla" ADD COLUMN nombre_de_la_columna tipo_de_dato opciones_de_la_columna;
```

2. Ejecutamos la consulta
3. Si todo sale bien, ya podremos ver la nueva columna en la tabla

Ejemplos:

```sql
ALTER TABLE users ADD COLUMN edad int;
ALTER TABLE users ADD COLUMN edad int not null;
ALTER TABLE users ADD COLUMN edad int not null default 0;
ALTER TABLE users ADD COLUMN edad int not null default 0 check (edad > 0);
ALTER TABLE users RENAME COLUMN edad TO age;
ALTER TABLE users DROP COLUMN age;
```

### Modificando una columna en PostgreSQL

1. En algún editor de sql, escribimos la siguiente consulta

```sql
ALTER TABLE "nombre_de_la_tabla" ALTER COLUMN nombre_de_la_columna tipo_de_dato opciones_de_la_columna;
```

2. Ejecutamos la consulta
3. Si todo sale bien, ya podremos ver la nueva columna en la tabla

Ejemplos:

```sql
ALTER TABLE users ALTER COLUMN edad int;
ALTER TABLE users ALTER COLUMN edad int not null;
ALTER TABLE users ALTER COLUMN edad int not null default 0;
ALTER TABLE users ALTER COLUMN edad set not null
ALTER TABLE users ALTER COLUMN edad drop not null
ALTER TABLE users ALTER COLUMN edad type int
```

## Tipos de Datos en PostgreSQL

- **boolean**: true o false
- **char(n)**: cadena de caracteres de longitud fija
- **varchar(n)**: cadena de caracteres de longitud variable
- **date**: fecha sin hora
- **float(n)**: número de punto flotante
- **int(n)**: número entero 
- **decimal(n, m)**: número decimal con n dígitos y m decimales
- **timestamp**: fecha y hora
- **time**: tiempo en horas, minutos y segundos

## Where y Operadores de Comparación en PostgreSQL

El operador **WHERE** se utiliza para filtrar los registros de una tabla utilizando condiciones, así:

```sql
SELECT * FROM users WHERE nombre = 'Sandeep'
```

Los operadores de comparación son los siguientes:

- **=**: igual
- **!=**: diferente
- **<>**: diferente
- **>**: mayor que
- **<**: menor que
- **>=**: mayor o igual que
- **<=**: menor o igual que

## Clave Primaria | Primary Key