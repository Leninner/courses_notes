**ÍNDICE**

- [POO en JavaScript](#poo-en-javascript)
  - [Introducción a Clases](#introducción-a-clases)
  - [Creando una clase Car](#creando-una-clase-car)
  - [Diferencias entre clases y funciones](#diferencias-entre-clases-y-funciones)
  - [Hoisting explicado con clases](#hoisting-explicado-con-clases)
  - [Strict Mode en JS](#strict-mode-en-js)
  - [Métodos Estáticos y su uso](#métodos-estáticos-y-su-uso)
  - [¿Qué es prototype?](#qué-es-prototype)
  - [Constructores](#constructores)
  - [Uso de Super](#uso-de-super)
  - [Introducción a `Extends` y su uso](#introducción-a-extends-y-su-uso)
  - [Introducción a Mixins y su uso](#introducción-a-mixins-y-su-uso)

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

Los métodos estáticos son métodos a los que no se puede acceder **a través de una instancia de una clase**, sino que **solo están disponibles** a través de la clase misma. Se crean para funciones de utilidad que no se relacionan con la instancia de la clase.

No se usan regularmente.

- Ejemplo de uso:

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

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

const civic = new Car(4, 'V6', 'grey');
const mondeo = new Car(5, 'V6', 'blue');

// console.log(civid.totalDoors(1, 2)); // Error

console.log(Car.totalDoors(civic, mondeo)); // 9
```

## ¿Qué es prototype?

Los **prototipos** son un mecanismo mediante el cual los objetos en JavaScript heredan características entre sí. Todo en JS es un objeto, y los objetos en JS heredan de otros objetos.

## Constructores

Tu puedes usar un solo método `constructor` por **clase**, caso contrario aparecerá un error de sintaxis.

Un constructor es un método que crea un **objeto** cuando una nueva instancia de la clase es creada y cualquier propiedad pasada como argumento a la instancia será inicializada como propiedad de `this` object.

> Un constructor construye un objeto por nosotros.

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}
```

También podemos usar la palabra `super` que nos va a permitir heredar las propiedades de una clase padre.

## Uso de Super

Cuando queremos heredar propiedades y métodos de otra clase padre, podemos utilizar la palabra `super`.

La forma de usarlo, es muy fácil:

```js
class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }
}

class SUV extends Car {
  constructor(doors, engine, color, brand) {
    // Aquí hacemos uso de super, para heredar ls props de Car
    super(doors, engine, color);
    this.brand = brand;
  }

  myBrand() {
    return `This car is a ${this.brand}`;
  }
}

const civic = new SUV(4, 'V6', 'grey', 'Honda');
```

> Se usa la palabra `extends` para heredar las propiedades de una clase padre.

## Introducción a `Extends` y su uso

Cuando desea aprovechar una clase padre, podemos usar la palabra `extends` para heredar las propiedades de una clase padre.

- Ejemplo de uso:

```js
class SUV extends Car {
  constructor(doors, engine, color, brand) {
    // Aquí hacemos uso de super, para heredar ls props de Car
    super(doors, engine, color);
    this.brand = brand;
  }
}
```

## Introducción a Mixins y su uso

Solo podemos extender una clase, pero podemos usar **mixins** para heredar propiedades de varias clases, o añadir propiedades a diferentes clases.

Una forma de hacerlo es así:

```js
let mixin = {
  drive() {
    return `${this.brand} is driving`;
  },
  panic() {
    return `${this.brand} is panicking`;
  },
};

class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;

    // Uso de mixin para añadir nuevos métodos
    Object.assign(this, mixin);
  }
}

const civic = new Car(4, 'V6', 'grey');

console.log(civic.drive()); // Honda is driving
```
