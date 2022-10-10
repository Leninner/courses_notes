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
- [Autoincremento | Serial](#autoincremento--serial)
- [Drop vs Truncate](#drop-vs-truncate)
- [Valores por defecto | Default](#valores-por-defecto--default)
- [Columnas calculadas | Computed Columns](#columnas-calculadas--computed-columns)
- [Order By](#order-by)
- [Like](#like)
- [Count](#count)
- [Sum](#sum)
- [Max, Min y Group By](#max-min-y-group-by)
- [Average](#average)
- [Having](#having)
- [Distinct](#distinct)
- [Union](#union)

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

Cada tabla puede tener una sola primary key, que debe ser única y no nula. La primary key se utiliza para identificar de forma única cada registro de la tabla.

Para poder crear una tabla con primary key, se debe especificar en la definición de la tabla, así:

```sql
CREATE TABLE users (
    id int PRIMARY KEY,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL
);

-- Otra forma de crear una tabla con primary key
CREATE TABLE users (
    id_persona int,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL,
    PRIMARY KEY (id_persona)
);
```

Para poder añadir una primary key a una tabla que ya existe, se debe utilizar la sentencia **ALTER TABLE**, así:

```sql
ALTER TABLE users ADD PRIMARY KEY (id_que_queremos_hacer_primary_key);
```

## Autoincremento | Serial

El tipo de dato **serial** es un tipo de dato especial que se utiliza para crear una primary key autoincremental. El serial es un alias de **int** que se incrementa automáticamente en 1 cada vez que se inserta un nuevo registro en la tabla.

Para poder crear una tabla con serial, se debe especificar en la definición de la tabla, así:

```sql
CREATE TABLE users (
    id serial PRIMARY KEY not null,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL
);
```

## Drop vs Truncate

El comando **drop** se utiliza para eliminar una tabla, dejando a los tipos **seriales** en el valor que tenían antes de vaciar la tabla. 
El comando **truncate** se utiliza para eliminar y volver a rehacer la tabla, dejando a los tipos **seriales** en 1.

Ejemplo:

```sql
CREATE TABLE users (
    id serial PRIMARY KEY not null,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL
);
```

```sql

-- Insertamos 3 registros
INSERT INTO users (nombre, cedula) VALUES ('Sandeep', '1234567890');
INSERT INTO users (nombre, cedula) VALUES ('Sandeep', '1234567890');
INSERT INTO users (nombre, cedula) VALUES ('Sandeep', '1234567890');

-- Vemos el valor de los seriales
SELECT * FROM users;

-- Vaciamos la tabla con drop
DROP TABLE users;

-- Vemos el valor de los seriales
SELECT * FROM users;

-- Vaciamos la tabla con truncate
TRUNCATE TABLE users RESTART IDENTITY; -- RESTART IDENTITY es opcional y significa que cualquier incremental se reinicia a 0

-- Vemos el valor de los seriales
SELECT * FROM users;
```

## Valores por defecto | Default

Sirven para que al momento de insertar registros en una tabla, si no se especifica un valor para una columna, se inserte el valor por defecto.

Ejemplo:

```sql
CREATE TABLE users (
    id serial PRIMARY KEY not null,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL,
    edad int DEFAULT 0
);
```

- La columna **edad** tendrá por defecto el valor 0

## Columnas calculadas | Computed Columns

Las columnas calculadas son columnas que se calculan a partir de otras columnas de la misma tabla. Son temporales y no se guardan en la base de datos.

Ejemplos:

```sql
CREATE TABLE users (
    id serial PRIMARY KEY not null,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL,
    edad int DEFAULT 0,
    edad_doble int GENERATED ALWAYS AS (edad * 2) STORED
);
```

- La columna **edad_doble** se calcula a partir de la columna **edad** multiplicada por 2

```sql
CREATE TABLE users (
    id serial PRIMARY KEY not null,
    nombre varchar(50) NOT NULL,
    cedula varchar(50) NOT NULL,
    edad int DEFAULT 0,
    edad_doble int GENERATED ALWAYS AS (edad * 2) VIRTUAL
);
```

- La columna **edad_doble** se calcula a partir de la columna **edad** multiplicada por 2

> Este tipo de columnas no se pueden modificar a través de un insert o un update ya que solo dependen del valor de otras columnas.

También funcionan con sentencias **SELECT**, así:

```sql
SELECT nombre, edad, (edad * 2) AS edad_doble FROM users;
```

## Order By

Sirve para ordenar los resultados de una consulta.

Ejemplo:

- Ordena los resultados por el nombre

```sql
SELECT * FROM users ORDER BY nombre;
```


- Ordena los resultados por el nombre en orden descendente

```sql
SELECT * FROM users ORDER BY nombre DESC;
```


- Ordena los resultados por el nombre en orden descendente y luego por la edad

```sql
SELECT * FROM users ORDER BY nombre DESC, edad;
```

## Like

Sirve para buscar un patrón en una columna.

Ejemplo:

- Busca todos los nombres que empiecen con la letra S

```sql
SELECT * FROM users WHERE nombre LIKE 'S%';
```

- Busca todos los nombres que terminen con la letra p

```sql
SELECT * FROM users WHERE nombre LIKE '%p';
```

- Busca todos los nombres que contengan la letra a

```sql
SELECT * FROM users WHERE nombre LIKE '%a%';
```

## Count

Sirve para contar el número de registros que cumplen con una condición.

Ejemplo:

- Cuenta el número de registros que tienen la edad 20

```sql
SELECT COUNT(*) FROM users WHERE edad = 20;
```

## Sum

Sirve para sumar los valores de una columna.

Ejemplo:

- Suma los valores de la columna edad

```sql
SELECT SUM(edad) FROM users;
```

## Max, Min y Group By

Sirven para obtener el valor máximo, mínimo y agrupar los resultados de una consulta.

Ejemplo:

- Obtiene el valor máximo de la columna edad

```sql
SELECT MAX(edad) FROM users;
```

- Obtiene el valor mínimo de la columna edad

```sql
SELECT MIN(edad) FROM users;
```

- Agrupa los resultados por la columna edad

```sql
SELECT edad, COUNT(*) FROM users GROUP BY edad;
```

## Average 

Sirve para obtener el promedio de los valores de una columna.

Ejemplo:

- Obtiene el promedio de la columna edad

```sql
SELECT AVG(edad) FROM users;
SELECT ROUND(AVG(edad), 2) FROM users;
```

## Having

Sirve para filtrar los resultados de una consulta agrupada.

Ejemplo:

- Agrupa los resultados por la columna edad y filtra los resultados que tengan más de 2 registros

```sql
SELECT edad, COUNT(*) FROM users GROUP BY edad HAVING COUNT(*) > 2;
```

- El **where** filtra los resultados antes de agruparlos, el **having** filtra los resultados después de agruparlos

## Distinct

Sirve para eliminar los registros duplicados de una consulta.

Ejemplo:

- Elimina los registros duplicados de la columna edad

```sql
SELECT DISTINCT edad FROM users;
SELECT COUNT(DISTINCT edad) FROM users; -- Cuenta el número de registros de la columna edad distintos
```

## Union

Sirve para unir los resultados de dos consultas.

Ejemplo:

- Une los resultados de las consultas

```sql
SELECT * FROM users WHERE edad = 20
UNION
SELECT * FROM users WHERE edad = 30;
```
