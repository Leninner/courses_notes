<h1>Estructuras de Datos</h1>

> Los ejemplos de código presentados en el siguiente archivo están hechos en JavaScript, pero la teoría es totalmente válida para cualquier lenguaje de programación.

> https://github.com/Leninner/coding-interview-university#data-structures

**ÍNDICE**

## Arrays

Es una área contigua de memoria que se compone de una serie de elementos del mismo tamaño posicionados de forma consecutiva numerados a través de números enteros. Esta numeración de posiciones empieza en 0.

Tenemos acceso de tiempo constante para cada elemento del array. Tiempo constante para leer y para escribir:

    - array_addr + elem_size * (i - first_index)

> Esto no lo hacemos nosotros, lo hace el compilador o intérprete por nosotros pero es importante saberlo

Las posiciones o los índices empiezan a partir de 0:

```javascript
const array = [10, 20, 30, 40, 50];

array[0]; // 10
array[1]; // 20
array[2]; // 30
array[3]; // 40
array[4]; // 50
```

Tenemos tiempo constante o **BigO(1)** para eliminar o añadir un elemento al final del arreglo y tiempo lineal o **BigO(n)** para añadir o eliminar elementos en una posición arbitraria.

> Los arreglos `dinámicos` son aquellos que pueden crecer o decrecer en runtime y no requieren una cantidad fija de elementos. Para Java sería un `ArrayList` o en C++ un `vector`.

> Los arreglos `estáticos` son aquellos que no pueden crecer o decrecer en runtime y requieren una cantidad fija de elementos. Para Java sería un `Array`.

> Los arreglos `irregulares` son aquellos conocidos commo un arreglo de arreglos.

## Linked Lists

## Stacks

## Queues

## Hash Tables
