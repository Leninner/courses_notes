<h1>Estructuras de Datos</h1>

> Los ejemplos de código presentados en el siguiente archivo están hechos en JavaScript, pero la teoría es totalmente válida para cualquier lenguaje de programación.

> https://github.com/Leninner/coding-interview-university#data-structures

**ÍNDICE**

## Arrays

Es una área contigua de memoria que se compone de una serie de elementos del mismo tamaño posicionados de forma consecutiva a través de números enteros.

Tenemos acceso de tiempo constante para cada elemento del array. Tiempo constante para leer y para escribir:

    - array_addr + elem_size * (i - first_index)

> Esto no lo hacemos nosotros, lo hace el compilador o intérprete por nosotros pero es importante saberlo

Las posiciones o los índices empiezan a partir de 0:

```javascript
const array = [1, 2, 3, 4, 5];

array[0]; // 1
array[1]; // 2
array[2]; // 3
array[3]; // 4
array[4]; // 5
```

Tenemos tiempo constante o BigO(1) para eliminar o añadir un elemento al final del arreglo y tiempo lineal o BigO(n) para añadir o eliminar elementos en una posición arbitraria.

## Linked Lists

## Stacks

## Queues

## Hash Tables
