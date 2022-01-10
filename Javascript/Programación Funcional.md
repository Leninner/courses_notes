**ÍNDICE**

- [Programación Funcional](#programación-funcional)
  - [POO vs PF](#poo-vs-pf)
  - [Funciones en Javascript](#funciones-en-javascript)
  - [Funciones Puras](#funciones-puras)
  - [Objetos: Variables primitivas y no primitivas](#objetos-variables-primitivas-y-no-primitivas)
    - [Nota importante:](#nota-importante)

# Programación Funcional

La programación Funcional es un paradigma de programación.

## POO vs PF

- POO

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getOld() {
    this.age += 1;
  }
}

let personOne = new Person('Lenin', 12);
personOne.getOld();
```

- Programación Funcional: Es un paradigma declarativo donde se explica **¿Qué hay que hacer?** en lugar de **¿Cómo hay que hacerlo?**

```js
const person = {
  name: 'Lenin',
  age: 18,
};

const getOld = (person) => Object.assign({}, person, { age: person.age + 1 });

getOld(person);
```

- Código Imperativo

```js
let array = [1, 2, 3];
let array2 = [];

for (let i = 0; i < array.length; i++) {
  array2.push(array[i] * 2);
}
```

- Código Declarativo

```js
let array = [1, 2, 3];

let array2 = array.map((value) => value * 2);
```

## Funciones en Javascript

Es similar a una función matemática:

1. Tenemos un input
2. Realizamos un proceso
3. Retornamos un output

## Funciones Puras

Son aquellas funciones que no dependen de scope global si no solo de scope local, `trabaja solamente con los argumentos que nosotros le estamos pasando`

Son funciones predecibles, que si las ejecutamos 10 veces, las 10 veces me tienen que retornar lo mismo, así:

- Función pura

Las funciones puras no dependen de factores externos y son predecibles, trabajan con los argumentos que asignamos y constantes como números, o PI.

```js
//Pure function
const double = (x) => x * 2;

double(10); // 20
double(5); // 10
double(5); // 10
double(10); // 20

// Another pure function
function priceAfterTax(productPrice) {
  return productPrice * 0.2 + productPrice;
}
```

- Función impura

Cuando nuestra función utilice variables externas, se considera impura, si otro desarrollador o proceso puede cambiar el valor de tax en el siguiente ejemplo, el valor de retorno no sería predecible:

```js
// Función impura
let tax = 20;

function calculateTax(productPrice) {
  return productPrice * (tax / 100) + productPrice;
}

// Another impure function
const time = () => new Date().getFullYear();

time(); // 2021
time(); // 2022
time(); // 2023
```

> Lectura sobre Funciones Puras: https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d

## Objetos: Variables primitivas y no primitivas

- Almacenamiento Stack: Aquí se guardan los tipos de datos primitivas como: bool, string, numbers. Los datos se guardan `uno encima de otro`

- Almacenamiento Heap: Aquí se guardan los objetos en lugares aleatorios de memoria

### Nota importante:

En otras palabras, las variables primitivas se almacenan y se acceden por valor, mientras que las variables de tipo objeto se almacenan y acceden por referencia.

Es por esta razón que al declarar una constante primitiva no podemos cambiar luego su valor, pero al declarar una constante de tipo objeto, si podemos cambiar en cualquier momento los atributos o propiedades que tiene definidos internamente.
