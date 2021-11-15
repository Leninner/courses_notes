## Tipos de datos

1.  Números

    - Todos los números que pertenecen al conjunto de los Reales.

2.  Strings

    - Texto de todo tipo, y son encerrados regularmente por ("comillas dobles"), (`acento grave`), ('comillas simples'):

```bash
# comillas dobles
"Lenin";
# comillas simples
'Lenin';
# acento grave
`Lenin`;
```

- Para sacar comillas dobles con el teclado: Alt +
- Para sacar comillas simples con el teclado: Alt + 39
- Para sacar acento grave con el teclado: Alt + 96

3.  Booleanos

    - De tipo _true_ y _false_:

```js
const isOdd = true;
const isEven = false;
```

4.  Arrays o Arreglos

    - Conjuntos denotados por [ ]. Los elementos de estos conjuntos pueden ser de **cualquier tipo** de dato conocido:

```js
// Los arreglos pueden tener elementos de cualquier tipo
const anyElement = ['a', 1, true, false, 'b'];
const anotherArray = [];
const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
```

5.  Objetos

    - Conjuntos de pares: key, valor. Son denotados por { }:

```js
const lenin = {
  name: 'Lenin', // name es la key y Lenin es el valor
  lastName: 'Mazabanda', // lastName es la key y Mazabanda es el valor
  age: 18, // age es la key y 18 es el valor
  gustos: ['Fútbol', 'Javascript', 'React', 'Loquear'], // gustos es la key y el arreglo es el valor
  mayorDeEdad: true, // mayorDeEdad es la key y true es el valor
};
```

      Estos datos existen en la mayoría de lenguajes de programación.
      Quizás algunos tipos de datos en Javascript tengan un nombre
      diferente en otros lenguajes, pero su anatomía es muy similar.

## Variables en Javascript

1. Const

   - Una variable de tipo `const` no puede ser re-asignada, y tampoco re-definida

```js
const age = 18;

age = 78; // Esto es imposible con variables de tipo const
```

2.  Let

    - Este tipo de variable si puede ser re-asignado, pero no re-definido

```js
let name = 'Lenin';
name = 'Mathias';
```

3.  Var

    - Es un tipo de variable que actualmente está en deshuso, pero con esta variable si se puede re-asignar su valor, e incluso re-declarar:

```js
var name = [1, 2, 3, 4, 5, 6];

var name = 'Lenin'; // Es totalmente posible
```

> Hablamos de `scope` al trabajar con variables
