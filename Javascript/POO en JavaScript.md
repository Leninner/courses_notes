**ÍNDICE**

- [POO en JavaScript](#poo-en-javascript)
  - [Introducción a Clases](#introducción-a-clases)
  - [Creando una clase Car](#creando-una-clase-car)
  - [Diferencias entre clases y funciones](#diferencias-entre-clases-y-funciones)
  - [Hoisting explicado con clases](#hoisting-explicado-con-clases)
  - [Strict Mode en JS](#strict-mode-en-js)
  - [Métodos Estáticos y su uso](#métodos-estáticos-y-su-uso)

# POO en JavaScript

La POO es un tipo diferente de programación, que nos ayuda a acercarnos más a la naturaleza, analizando objetos.

## Introducción a Clases

La sintaxis de POO en JavaScript en una azucar sintátictica para trabajar mejor con prototipos.

> Hay que recordar que la POO está emulada a través de prototipos, y no en una jerarquía de clases.

Las clases necesitan ser declaradas al principio de la aplicación, ya que no tiene hoisting.
Existen dos formas de declarar clases, `class declaration` y `class expression`:

- Ejemplo de `class declaration`:

```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

const car = new Car('Ford');
console.log(car.getBrand()); // Ford
```

- Ejemplo de `class expression`:

```js
const car = class {
  constructor(brand) {
    this.brand = brand;
  }
};
```

## Creando una clase Car

Ejemplo de cómo crear una clase llamada Car, con un método `constructor` y un método `carStats`:

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and ${this.color} color.`;
  }
}

const civic = new Car(4, 'V6', 'grey');
const mondeo = new Car(5, 'V6', 'blue');

console.log(civic.carStats()); // This car has 4 doors, a V6 engine and grey color.
```

## Diferencias entre clases y funciones

Funciones:

- Se aplica el Hoisting.
- Function expression y declaration pueden ser sobreescritas

Clases:

- No se aplica el hoisting.
- Class expression y declaration no pueden ser sobreescritas.

1. Puedes usar clases cuando requieres de propiedades o métodos a utilizar varias veces, tal como se lo realiza en React en `Class Components`.
2. Cuando necesitamos crear funciones que no necesitan ninguna propiedad o método específico, las funciones son mejores.

## Hoisting explicado con clases

Cuando queremos hacer algo como esto:

```js
const civic = new Car(4, 'V6', 'grey');
const mondeo = new Car(5, 'V6', 'blue');

console.log(civic.carStats()); // Error de referencia

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and ${this.color} color.`;
  }
}
```

Vamos a tener un error, ya que las clases, al no ser izadas o hoisted al inicio del programa, no pueden ser usadas antes de ser declaradas, lo que no pasa con las function declaration:

```js
doSome();

function doSome() {
  console.log('Hola, soy una función con hoisting');
}
```

## Strict Mode en JS

> Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Strict_mode

Nos ayuda a evitar errores en el código, ya que nos ayuda a asegurarnos de que el código que estamos escribiendo es correcto.

## Métodos Estáticos y su uso
