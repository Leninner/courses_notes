# SQL vs noSQL

Cuando hablamos de bases de datos nos referimos a una colección de datos que están relacionados entre sí y que se almacenan para su utilización posterior.

Los Sistemas Gestores de Bases de Datos (SGBD) son los programas que permiten este almacenamiento y el acceso a esta información para su procesamiento.

## Bases de Datos Relacionales

Las bases de datos SQL son relacionales, es decir, sus datos están relacionados entre sí y se almacenan como texto de manera estructurada en tablas que constan de registros (filas) que es la propia información relacionada entre sí, en base a su contexto, y campos (columnas) que son los distintos tipos de información que se relacionan.

Las BBDD SQL o relacionales constan de distintas tablas que almacenan los datos y que se relacionan entre sí por medio de claves (identificadores) de los registros de cada tabla, y que son comunes entre los registros relacionados de las distintas tablas.

Estas BBDD se gestionan (crear, modificar, eliminar) mediante el lenguaje SQL (Structured Query Language) que también es el lenguaje que se utiliza para añadir, eliminar, consultar y modificar los datos de las distintas tablas.

Algunos ejemplos de SGBD SQL son:

- DB2
- Postgress
- Oracle
- MySQL
- SQL Server

## Bases de Datos No Relacionales

Las bases de datos NoSQL (Not Only SQL) aparecen debido a la necesidad de flexibilidad para almacenar distintos tipos de información no estructurada como documentos (PDF, Word, Excel…), emails, SMS, localizaciones geográficas, audio, vídeo, publicaciones de RRSS

**Cuando este volumen de datos es muy grande, es lo que se conoce como Big Data.**

El Big Data, al tratarse de unas cantidades de información muy elevadas, necesita de arquitecturas o esquemas de BBDD con capacidades de alta escalabilidad, rápidas, etc. **que las bases de datos SQL no pueden proporcionar.**

Algunos ejemplos de SGBD NoSQL son:

- MongoDB
- Cassandra
- CouchDB
- Redis
- Neo4j

## Diferencias entre bases de datos SQL y NoSQL

- Las BBDD SQL almacenan datos de manera estructurada y las NoSQL lo hacen en su formato original.

- Las SQL proporcionan una capacidad de escalar baja, en comparación con las NoSQL.

  - Esta es una de las principales ventajas de las NoSQL, ya que están pensadas para grandes volúmenes de información como el Big Data.
  - Lo anterior es debido a que las SQL están centralizadas y las NoSQL distribuidas, posibilitando que se ejecuten en múltiples máquinas pero con muy pocos recursos (RAM, CPU, disco…).

- La adaptación a los cambios de las SQL es poca y puede ser compleja. Sin embargo, las NoSQL son totalmente flexibles.

- Las BBDD SQL están totalmente estandarizadas y las NoSQL carecen de homogeneización.

- Las SQL se utilizan en múltiples aplicaciones de todo tipo, las NoSQL se emplean principalmente para el Big Data (por ejemplo en redes sociales).

- Las BBDD SQL proporcionan consistencia en los datos (integridad). Sin embargo, las NoSQL, al buscar rapidez, no ponen el foco en esta característica.

- La rapidez de ambas BBDD va a depender del contexto o de su uso: en datos estructurados las SQL son más rápidas, pero como vimos anteriormente, el Big Data no es estructurado y es ahí donde consiguen mucha mayor rapidez las NoSQL.

## Datos estructurados vs. datos no estructurados

Las principales diferencias entre ambos tipos de datos son:

- Los datos estructurados se almacenan en BBDD SQL mientras que los no estructurados en las NoSQL.

- Los datos estructurados son más fáciles de analizar que los no estructurados, estos últimos necesitan de herramientas complejas de analítica.

- Los datos no estructurados son más flexibles y los cambios de arquitectura no les afectan tanto como a los estructurados, que dependiendo de la naturaleza del cambio pueden necesitar migraciones complejas de un modelo de datos a otro.

- Los no estructurados son almacenados en bruto, por lo que pueden ser accedidos por los usuarios para realizar configuraciones en ellos adaptadas a sus necesidades concretas.

- Las bases de datos posibilitan la gestión ordenada de la información y disponer de un repositorio de datos para ser accedido y procesado por las principales aplicaciones de negocio de las organizaciones. Dependiendo del propósito de estas aplicaciones y del tipo de información a almacenar, utilizaremos BBDD SQL para las aplicaciones clásicas con datos estructurados y NoSQL para aplicaciones que tienen que manejar volúmenes muy grandes de datos estructurados y no estructurados como las de Big Data.
