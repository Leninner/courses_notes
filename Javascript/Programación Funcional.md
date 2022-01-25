**ÍNDICE**

- [Programación Funcional](#programación-funcional)
  - [POO vs PF](#poo-vs-pf)
  - [Funciones en Javascript](#funciones-en-javascript)
  - [Funciones Puras](#funciones-puras)
  - [Objetos: Variables primitivas y no primitivas](#objetos-variables-primitivas-y-no-primitivas)
    - [Modificación de Objetos](#modificación-de-objetos)
  - [Inmutabilidad en nuestras funciones](#inmutabilidad-en-nuestras-funciones)
    - [Nota importante:](#nota-importante)

# Programación Funcional

La programación Funcional es un paradigma de programación en donde se piensa diferente y se trata de hacer código más conciso y legible e incluso testeable,

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

Las funciones puras no dependen de factores externos y son predecibles

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

- Almacenamiento Stack: Aquí se guardan los tipos de datos primitivas como: bool, string, numbers. Los datos se guardan `uno encima de otro`. El acceso a esta información es mucho más rápido.

```js
let name = 'Lenin';
let age = 78;
```

- Almacenamiento Heap: Aquí se guardan los **objetos** en lugares aleatorios de memoria. El acceso a esta información es un poco más lento. Para acceder a estos datos, se necesita una referencia a la variable.

La siguiente variable **crea una referencia o un puntero** el cuál se almacena en el Stack para luego buscar información en el almacenamiento Heap, que es donde se almacena el objeto.

```js
let obj = {};
```

### Modificación de Objetos

Para modificar variables primitivas no tenemos ningún inconveniente, ya que al estar almacenadas en el stack, tienen un valor exactamente definido, un ejemplo:

```js
let number = 12;
let anotherNumber = number;

console.log({ number, anotherNumber }); // 12 12

anotherNumber += 1;

console.log({ number, anotherNumber }); // 12 13
```

Tenemos este caso en objetos:

```js
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2017,
  color: 'red',
  km: 0,
};

let newCar = car;

console.table(car); // todo normal
console.table(newCar); // todo normal

newCar.year = 2000;

console.table(car); // car.year = 2000
console.table(newCar); // newCar.year = 2000
```

Lo anterior sucede porque en `let newCar = car` solamente crea una **nueva referencia** al objeto guardado en memoria heap y por lo tanto, al modificar la propiedad **year** en **newCar**, estamos modificando el mismo objeto al que apunta **car**.

Para evitar lo anterior, tenemos varios métodos para copiar y modificar objetos:

- Object.assign => Recibe dos argumentos, el primero es un nuevo objeto, y el segundo parámetro nos indica de dónde queremos copiar las propiedades:

```js
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2017,
  color: 'red',
  km: 0,
};

let newCar = Object.assign({}, car);

console.table(car); // todo normal
console.table(newCar); // todo normal

newCar.year = 2000;

console.table(car); // car.year = 2017
console.table(newCar); // newCar.year = 2000
```

- Spread operator

```js
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2017,
  color: 'red',
  km: 0,
};

let newCar = { ...car };

console.table(car); // todo normal
console.table(newCar); // todo normal

newCar.year = 2000;

console.table(car); // car.year = 2017
console.table(newCar); // newCar.year = 2000
```

- Object.assign: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/assign
- Spread operator: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Spread_syntax

Object.assign y Spread operator no funcionan cuando queremos hacer copiar de objetos profundas y por esa razón se debe utilizar otros métodos para copiar objetos:

- JSON.parse y JSON.stringify

```js
let car = {
  make: 'Honda',
  model: 'Civic',
  year: 2017,
  color: 'red',
  km: 0,
  owner: {
    name: 'Lenin',
    age: 18,
  },
};

let newCar = JSON.parse(JSON.stringify(car));

console.table(car); // todo normal
console.table(newCar); // todo normal

newCar.owner.name = 'Mathias';

console.table(car); // car.owner.name = "Lenin"
console.table(newCar); // newCar.owner.name = "Mathias"
```

## Inmutabilidad en nuestras funciones

La inmutabilidad nos dice que no tenemos que manipular directamente la variable en la que estemos trabajando:

- En este ejemplo, se está utilizando mutación ya que estamos cambiando directamente esa lista

```js
const doSome = (list, item, quantity) => {
  list.push({
    item,
    quantity,
  });

  return list;
};
```

- El mismo ejemplo anterior, pero sin mutación de la lista

> Solución con clonación de primer nivel

```js
const doSome = (list, item, quantity) => {
  return [...list, { item, quantity }];
};
```

> Solución con clonación de todos los niveles

```js
const doSome = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list));

  return [...newList, { item, quantity }];
};

// O

const doSome = (list, item, quantity) => {
  const newList = JSON.parse(JSON.stringify(list));

  return newList.push({ iten, quantity });
};
```

### Nota importante:

En otras palabras, las variables primitivas se almacenan y se acceden por valor, mientras que las variables de tipo objeto se almacenan y acceden por referencia.

Es por esta razón que al declarar una constante primitiva no podemos cambiar luego su valor, pero al declarar una constante de tipo objeto, si podemos cambiar en cualquier momento los atributos o propiedades que tiene definidos internamente.
