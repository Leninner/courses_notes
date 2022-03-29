**ÍNDICE**

- [Instalación y primeros pasos con TypeScript](#instalación-y-primeros-pasos-con-typescript)
- [Typescript Basics](#typescript-basics)
  - [Overview del Tipado en TypeScript](#overview-del-tipado-en-typescript)
  - [Types and subtypes in TypeScript](#types-and-subtypes-in-typescript)
    - [Datos primitivos](#datos-primitivos)
    - [Object Types and Types Parameters](#object-types-and-types-parameters)
  - [Enum or Enumeration Type](#enum-or-enumeration-type)
  - [Any and unknown types in TypeScript](#any-and-unknown-types-in-typescript)
    - [Type Assertions](#type-assertions)
    - [Type guards](#type-guards)
  - [Tipos de unión e intersección en TypeScript](#tipos-de-unión-e-intersección-en-typescript)
    - [Union Types](#union-types)
    - [Intersection Types](#intersection-types)
    - [Literal types](#literal-types)
      - [Qué es Literal Narrowing?](#qué-es-literal-narrowing)
  - [Collection types in TypeScript](#collection-types-in-typescript)
  - [Implementando Interfaces en TypeScript](#implementando-interfaces-en-typescript)
    - [Razones para usar interfaces](#razones-para-usar-interfaces)
    - [Diferencia entre Interfaces y tipos](#diferencia-entre-interfaces-y-tipos)
    - [Extendiendo interfaces en TypeScript](#extendiendo-interfaces-en-typescript)
    - [Otras formas de usar interfaces en TypeScript](#otras-formas-de-usar-interfaces-en-typescript)
  - [Funciones](#funciones)
    - [Named Functions](#named-functions)
    - [Anonymous Functions](#anonymous-functions)
    - [Arrow Functions](#arrow-functions)
  - [Interfaces](#interfaces)
  - [Clases](#clases)
    - [Modificadores de acceso](#modificadores-de-acceso)
    - [Propiedades estáticas](#propiedades-estáticas)
    - [Extender una clase con herencia](#extender-una-clase-con-herencia)
  - [Modificadores públicos, privados y protegidos.](#modificadores-públicos-privados-y-protegidos)
  - [Comprensión private](#comprensión-private)
  - [Comprensión protected](#comprensión-protected)
- [Refactorización](#refactorización)

# Instalación y primeros pasos con TypeScript

> Documentación: https://www.typescriptlang.org/docs/handbook/basic-types.html

Necesitamos instalar globalmente Typescript para usarlo en cualquier proyecto, lo logramos con:

```bash
npm install -g typescript
```

Para poder ejecutar directamente archivos TS vamos a instalar:

> Es bueno tener la extensión `Code Runner` instalada

```bash
npm install -g ts-node
```

Ahora estamos listos para empezar a tirar código con TS

- Para generar un archivo de configuración de TS, vamos a ejecutar en la carpeta en donde estamos trabajando:

```bash
tsc --init
```

Dentro de esa carpeta vamos a encontrar varias opciones. Para conocer más vamos a [tsc CLI](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

# Typescript Basics

TypeScript es un superset de JavaScript que añade tipado a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el **entendimiento, diseño e implementación** de nuestras aplicaciones.

Los navegadores no entienden TypeScript así que necesita ser transpilado a JavaScript para que pueda ser interpretado por el navegador.

## Overview del Tipado en TypeScript

El mayor beneficio de usar TypeScript es que nos ofrece una forma de tipado que nos permite tener un desarrollo más limpio, de mayor calidad y sin errores.

El análisis de TypeScript ocurre en `compile-time` y no agrega **sobrecarga de tiempo de ejecución** a la ejecución del programa.

Para declarar tipos, lo podemos hacer de forma explícita, o de forma implícita:

```ts
let x: number; //* Explicitly declares x as a number type
let y = 1; //* Implicitly declares y as a number type

let z; //* Declares z without initializing it
```

## Types and subtypes in TypeScript

Todos los tipos en TS son subtipos del tipo `any`. Este tipo puede almacenar cualquier tipo de dato de JS sin problemas, pero también tiene un división muy interesante:

![image](https://user-images.githubusercontent.com/67031243/158045215-2d3184e5-52a5-469c-bf4b-6f4b940f7d6f.png)

### Datos primitivos

Los tipos primitivos son los tipos:

- `boolean`
- `number` or `BigInteger`
- `string`
- `void`
- `null`
- `undefined`
  junto con los tipos de **enumeración o enum** definidos por el usuario:

> El tipo `void` existe para indicar la ausencia de un valor; además, los tipos `null` y `undefined` no tienen una interfaz para setearla como tipo y se los reconoce cuando están asignados como valor en alguna variable.

```ts
// Boolean: Pueden tener valores de true or false

let booleano: boolean = false;
let flag: boolean;
let yes = true;
let no = false;

// Números

let firstNumber: number = 45;
let secondNumber = 78;
let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

let result: number = firstNumber + secondNumber;

// String

let saludo: string = 'Me llamo Lucas';
let s: string;
let empty = '';
let abc = 'abc';
let firstName: string = 'Mateo';
let sentence: string = `My name is ${firstName}.
    I am new to TypeScript.`;
```

### Object Types and Types Parameters

Los `Object Types` son todos aquellos tipos no primitivos, como:

- Arrays
- Objects
- Class
- Interfaz
- Cualquier cosa que no sea un tipo primitivo

> Los tipos de `clase e interfaz` se introducen a través de declaraciones de clase e interfaz y se les hace referencia por el nombre que se les da en sus `declaraciones`. Los tipos de clase e interfaz pueden ser tipos genéricos que tienen uno o más parámetros de tipo.

```ts
const numbers: numbers[];
```

## Enum or Enumeration Type

**Las enumeraciones** ofrecen una manera fácil de trabajar con conjuntos de constantes relacionadas. `enum` es una palabra para denotar sets de valores

Las enumeraciones se tratan como tipos de datos y puede usarlas para crear conjuntos de constantes para usar con variables y propiedades.

> Para declarar algo opcional en Typescript, debemos indicarlo con el signo de interrogación (?)

Siempre que un procedimiento acepte un conjunto limitado de variables, considere usar una enumeración.

> Las enumeraciones hacen que el código sea más claro y legible, particularmente cuando se usan nombres significativos.

Beneficios de usar enumeraciones:

- Las enumeraciones le permiten especificar una lista de opciones disponibles.
- Ayuda a reducir los errores causados por transponer o escribir mal los números.
- Facilita el cambio de valores en el futuro.
- Hace que el código sea más fácil de leer, lo que significa que es menos probable que se introduzcan errores.
- Asegura la compatibilidad hacia adelante. Con las enumeraciones, es menos probable que su código falle si en el futuro alguien cambia los valores correspondientes a los nombres de los miembros.

Para crear un `enum`:

```ts
// Enum

enum Colores {
  rojo = 'Rojo',
  verde = 'Verde',
  azul = 'Azul',
  amarillo = 'Amarillo',
}

let colorFavorito: Colores = Colores.verde;
console.log(`Mi color favorito es: ${colorFavorito}`);
```

## Any and unknown types in TypeScript

Cuando no conoces el tipo de dato con el que vas a trabajar, puedes usar el tipo `any` o `unknown`:

- **Tipo `any`:** Puede almacenar cualquier tipo de dato de JS.

```ts
let randomValue: any = 10;
randomValue = 'Mateo'; // OK
randomValue = true; // OK
```

> El tipo any, debería ser evitado, ya que con TS, buscamos que todos los datos sean de un tipo específico.

- **Tipo `unknown`:** Es similar a `any`, pero en este tipo de dato, no se puede aplicar métodos definidos en el tipo de variable, como `toString()` o `toUpperCase()`:

```ts
let randomValue: unknown = 10;
randomValue = true; // OK
randomValue = 'Mateo'; // OK

console.log(randomValue.name); // Error: Object is of type unknown
randomValue(); // Error: Object is of type unknown
randomValue.toUpperCase(); // Error: Object is of type unknown
```

### Type Assertions

Si necesita tratar una variable como un tipo de datos diferente, puede usar una aserción de tipo. Una aserción de tipo le dice a TypeScript que ha realizado las comprobaciones especiales que necesita antes de llamar a la declaración.

> Le dice al compilador "confía en mí, sé lo que estoy haciendo".

Tiene dos formas de ser declaradas:

1. `as-syntax` => Es la más recomendada

```ts
(randomValue as string).toUpperCase();
```

2. `angle-bracket-syntax`

```ts
(<string>randomValue).toUpperCase();
```

Ejemplo de aseción de tipo:

```ts
let randomValue: unknown = 10;

randomValue = true;
randomValue = 'Mateo';

if (typeof randomValue === 'string') {
  console.log((randomValue as string).toUpperCase()); //* Returns MATEO to the console.
} else {
  console.log('Error - A string was expected here.'); //* Returns an error message.
}
```

### Type guards

`typeof` dentro de una sentencia `if` puede ayudarnos a realizar acciones específicas dependiendo del tipo de dato que se está tratando, podemos usar las siguientes comprobaciones:

<!-- Tabla -->

| Tipo de dato | Acciones                           |
| ------------ | ---------------------------------- |
| `string`     | `typeof s === "string"`            |
| `number`     | `typeof n === "number"`            |
| `boolean`    | `typeof b === "boolean"`           |
| `undefined`  | `typeof undefined === "undefined"` |
| `null`       | `typeof null === "null"`           |
| `function`   | `typeof f === "function"`          |
| `array`      | `Array.isArray(a)`                 |

## Tipos de unión e intersección en TypeScript

Ayudan a manejar situaciones en las que **un tipo se compone de dos o más tipos posibles**, mientras que los `tipos literales` le permiten restringir los valores asignados a un tipo a una lista limitada de opciones.

### Union Types

Describe un valor que puede ser uno de varios tipos:

```ts
let multiType: number | boolean; // Union types
multiType = 20; //* Valid
multiType = true; //* Valid
multiType = 'twenty'; //* Invalid
```

- Otro ejemplo aplicado a una función que recibe dos argumentos:

```ts
function add(x: number | string, y: number | string) {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }

  if (typeof x === 'string' && typeof y === 'string') {
    return x.concat(y);
  }

  throw new Error('Parameters must be numbers or strings');
}

console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
```

### Intersection Types

Son similares a los union types, pero se usan para describir una combinación de tipos, para poder tener todos los métodos disponidles de todos los tipos que se estén usando.

Es muy utilizado con interfaces, ya que pueden ser usados para describir una combinación de métodos y propiedades:

```ts
interface Employee {
  employeeID: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}

type ManagementEmployee = Employee & Manager;

let newManager: ManagementEmployee = {
  employeeID: 12345,
  age: 34,
  stockPlan: true,
};
```

### Literal types

**Un literal es un subtipo más concreto de un tipo colectivo.** Lo que esto significa es que "Hello World" es un string, pero un string no es "Hello World" dentro del sistema de tipos.

Hay tres conjuntos de tipos de literales disponibles en TypeScript:

- string
- number
- boolean

Mediante el uso de tipos literales, puede especificar un valor exacto que debe tener un string, un número o un valor booleano (por ejemplo, "sí", "no" o "tal vez").

Al definir un tipo literal, puede usar el operador `|` para combinar múltiples tipos, como se muestra a continuación:

```ts
// Another example
type testResult = 'pass' | 'fail' | 'incomplete';
let myResult: testResult;
myResult = 'incomplete'; //* Valid
myResult = 'pass'; //* Valid
myResult = 'failure'; //* Invalid

// Another example
type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
diceRoll = 7; //* Invalid
```

#### Qué es Literal Narrowing?

El proceso de pasar de un número infinito de casos potenciales a un número finito más pequeño de casos potenciales se denomina `narrowing`.

## Collection types in TypeScript

Los tipos de objeto son todos tipos de `clase, interfaz, matriz y literal` (cualquier cosa que no sea un tipo primitivo).

- Arrays

```ts
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];
```

- Tuples: Lista ordenada finita de elementos

```ts
let person1: [string, number] = ['Marcia', 35];
let person1: [string, number] = ['Marcia', 35, true]; //* Invalid
let person1: [string, number] = [35, 'Marcia']; //* Invalid
```

## Implementando Interfaces en TypeScript

> Documentación: https://www.typescriptlang.org/docs/handbook/2/objects.html

El trabajo principal de una interfaz es describir los tipos de las propiedades y retornos de un objeto.

Una interfaz nos ayuda a definir una estructura de datos, parametrizando los tipos de los objetos. En ejemplo rápido es:

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}
```

El único trabajo de las interfaces es la definición de tipos. Después de definirla, podemos obtener todos los beneficios de los tipos declarados, así:

```ts
let employee: Employee = {
  firstName: 'Emil',
  lastName: 'Andersson',
  fullName(): string {
    return this.firstName + ' ' + this.lastName;
  },
};

employee.firstName = 10; //* Error - Type 'number' is not assignable to type 'string'
```

Otro ejemplo de interfaz:

```ts
interface IceCream {
  flavor: string;
  scoops: number;
}

// Este objeto, tiene las mismas propiedades que la interfaz
let iceCream: IceCream = {
  flavor: 'vanilla',
  scoops: 2,
};

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops(iceCream));
```

Para declarar tipos opcionales en TypeScript, puede usar el operador `?` al final del nombre de una propiedad:

```ts
interface IceCream {
  flavor: string;
  scoops?: number;
}
```

Para crear propiedades de solo lectura en TypeScript, puede usar el operador `readonly` al inicio de una propiedad:

```ts
interface IceCream {
  flavor: string;
  readonly scoops: number;
}
```

### Razones para usar interfaces

- Crear nombres abreviados para los tipos de uso común.
  Incluso con una interfaz simple como la declarada en el ejemplo anterior, aún obtiene el beneficio de Intellisense y la verificación de tipos.

- Impulse la consistencia en un conjunto de objetos porque cada objeto que implementa la interfaz opera bajo las mismas definiciones de tipo.
  Esto puede ser útil cuando está trabajando con un equipo de desarrolladores y quiere asegurarse de que los valores correctos se pasen a las propiedades, los constructores o las funciones. Por ejemplo, los objetos que implementan una interfaz deben implementar todos los miembros necesarios de la interfaz. Entonces, si no pasa todos los parámetros requeridos del tipo correcto, el compilador de TypeScript arrojará un error.
- Describir las API de JavaScript existentes y aclarar los parámetros de función y los tipos de devolución. Esto es especialmente útil cuando trabaja con bibliotecas de JavaScript como jQuery. Una interfaz puede proporcionarle una comprensión clara de lo que espera una función y lo que devolverá sin tener que volver a visitar la documentación.

### Diferencia entre Interfaces y tipos

Un tipo define tipos de datos. Las interfaces nos ayuda a definir formas o estructuras, por ejemplo, un objeto
`type` no se puede reabrir para extenderlo, pero una `interfaz` si puede ser reabierta para extenderla.

```ts
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

// Pero también tiene forma de escribirse como un type:

type Employee = {
  firstName: string;
  lastName: string;
  fullName(): string;
};
```

### Extendiendo interfaces en TypeScript

Las `interfaces pueden extenderse` entre sí. Esto le permite `copiar los miembros de una interfaz en otra`, lo que le brinda más flexibilidad en la forma en que separa sus interfaces en `componentes reutilizables.`

Algunas reglas a tener en cuenta:

1. Debe implementar `todas las propiedades` necesarias de `todas las interfaces`.
2. Dos interfaces pueden tener `la misma propiedad` si la propiedad tiene **exactamente** el mismo `nombre y tipo.` Esto incluye, si son opcionales o si son de solo lectura.
3. Si dos interfaces tienen una propiedad con el mismo nombre pero diferentes tipos, debe declarar una nueva propiedad de modo que la propiedad resultante sea un subtipo de ambas interfaces.

- Forma de extender interfaces

```ts
interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

interface Sundae extends IceCream {
  sauce: 'chocolate' | 'caramel' | 'strawberry';
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let iceCream: Sundae = {
  flavor: 'vanilla',
  scoops: 2,
  sauce: 'caramel',
  nuts: true,
};

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + ' is too many scoops!';
  } else {
    return 'Your order will be ready soon!';
  }
}

console.log(tooManyScoops(iceCream));
```

### Otras formas de usar interfaces en TypeScript

1. **Creando tipos indexables**
   Puede usar interfaces que describan los tipos de matriz en los que puede indexar.

```ts
interface IceCreamArray {
  [index: number]: string;
}

let myIceCream: IceCreamArray;
myIceCream = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream[0];

console.log(myStr);
```

2. **Describir una API de JavaScript usando una interfaz**
   Podemos usar interfaces para describir la respuesta a una API y trabajar de mejor manera.

```ts
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
// Interface describing the shape of our json data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function fetchPosts(url: string) {
  let response = await fetch(url);
  let body = await response.json();

  return body as Post[];
}

async function showPost() {
  let posts = await fetchPosts(fetchURL);

  // Display the contents of the first item in the response
  let post = posts[0];
  console.log('Post #' + post.id);

  // If the userId is 1, then display a note that it's an administrator
  console.log('Author: ' + (post.userId === 1 ? 'Administrator' : post.userId.toString()));
  console.log('Title: ' + post.title);
  console.log('Body: ' + post.body);
}

showPost();
```

## Funciones

En TS podemos definir funciones con parámetros tipados. Nos ayuda a escribir código más legible y claro, además nos da la posibilidad de marcar un parámetro como requerido o no. Esto nos permite asegurarnos de que los valores correctos se pasan a las propiedades, los constructores o las funciones.

Los parámetros se deben pasar en orden a la función. Además tenemos parámetros `obligatorios, opcionales y por defecto.`

- **Parámetros obligatorios:** Se los declara normalmente.

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns an **error**
```

- **Parámetros opcionales:** Se los declara con un signo de interrogación `?` al final del nombre del parámetro.

```ts
function addNumbers(x: number, y?: number): number {
  if (y === undefined) {
    return x;
  } else {
    return x + y;
  }
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
```

- **Parámetros por defecto:** Se los declara con un valor por defecto.

```ts
function addNumbers(x: number, y = 25): number {
  return x + y;
}

addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26
```

- Parámetros de tipo Rest: Le dice al compilador que tenemos una cantidad desconocida de parámetros, los cuáles se van a tratar como opcionales.

```ts
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
  let total: number = firstNumber;

  for (let counter = 0; counter < restOfNumbers.length; counter++) {
    if (isNaN(restOfNumbers[counter])) {
      continue;
    }

    total += Number(restOfNumbers[counter]);
  }

  return total;
};

addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
addAllNumbers(2, 3, 'three'); // flags error due to data type at design time, returns 5
```

- Parámetros de Objetos Destructurados: Nos permite utilizar `interfaces` para definir `parámetros con nombre`, **en lugar de posicionales**, en sus funciones. Sirven de mucho al trabajar con funciones que reciben muchos parámetros.

```ts
interface Message {
  text: string;
  sender: string;
}

function displayMessage({ text, sender }: Message) {
  console.log(`Message from ${sender}: ${text}`);
}

displayMessage({ sender: 'Christopher', text: 'hello, world' });
```

### Named Functions

Una `named function` es una declaración de función escrita con la palabra clave `function` y provista de un nombre distinto dentro del alcance actual.

```ts
function addNumbers(x: number, y: number): number {
  return x + y;
}
addNumbers(1, 2);
```

### Anonymous Functions

Una `function expression` o `anonymous function` es una función que no está precargarda en el contexto de la ejecución, sino, será llamada cuando se la encuentre. Este tipo de funciones debe ser declarada antes de ser llamada, es decir, que no tiene `hoisting` al contrario de las `named functions` que pueden ser llamadas incluso antes de que se hayan declarado.

Pueden ser asignadas como valor, o como propiedad de una función.

```ts
let addNumbers = function (x: number, y: number): number {
  return x + y;
};

addNumbers(1, 2);

let total = function (input: number[]): number {
  let total: number = 0;

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }

    total += Number(input[i]);
  }
  return total;
};

console.log(total([1, 2, 3]));
```

### Arrow Functions

Las `Arrow functions` o `Lambda functions` proveen una sintaxis más sencilla para escribir funciones anónimas.

```ts
// Anonymous function
let addNumbers1 = function (x: number, y: number): number {
  return x + y;
};

// Arrow function
let addNumbers2 = (x: number, y: number): number => x + y;
```

> Las `arrow functions` de una línea pueden tener un retorno `implícito` o `sintaxis de cuerpo concisa`

```ts
let total2 = (input: number[]): number => {
  let total: number = 0;

  for (let i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }

    total += Number(input[i]);
  }

  return total;
};
```

## Interfaces

Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

```ts
interface Employee {
  employeeID: number;
  age: number;
}

interface Manager {
  stockPlan: boolean;
}
```

## Clases

**JavaScript tradicional** utiliza funciones y herencia basada en prototipos para construir componentes reutilizables, pero esto puede resultar un poco incómodo para los programadores con un enfoque orientado a objetos, donde las clases heredan la funcionalidad y los objetos se crean a partir de estas clases.

A partir de **ECMAScript 2015**, también conocido como **ECMAScript 6,** los programadores de JavaScript podrán construir sus aplicaciones utilizando este enfoque basado en clases orientado a objetos.

En TypeScript, permitimos que los desarrolladores usen estas técnicas ahora y las compilen en JavaScript que funcione en todos los principales navegadores y plataformas, sin tener que esperar a la próxima versión de JavaScript.

Una clase tiene ciertas cosas que valen la pena entender:

1. **Propiedades**
   Son los datos sin procesar que se pasan al objeto cuando se inicializa.
2. **Métodos**
   Son las funciones que se definen dentro de la clase y representan el comportamiento de cualquier instancia de la clase.
3. **Constructores**
   Es un método que se invoca automáticamente al crear una instancia de la clase. Este método crea un nuevo objeto con las propiedades y métodos definidos en la clase.
4. **Accessors**
   Son funciones que permiten acceder a las propiedades de una clase. Tenemos a los **getters** y **setters**.

- Ejemplo rápido de una clase:

```ts
class Greeter {
  // Propiedades
  greeting: string;

  // Método constructor
  constructor(message: string) {
    this.greeting = message;
  }

  // Método
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

// Instancia "greeter" de la clase Greeter
let greeter = new Greeter('world');
```

- Otro ejemplo de clase:

```ts
class Car {
  // Properties
  _make: string;
  _color: string;
  _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
  }

  // Accessors
  // Se ejecuta al consultar la propiedad
  // console.log(instance.doors); => 4 // Propiedad accesada por el getter doors
  // console.log(instance._doors); => 4 // Propiedad en bruto
  get doors() {
    return this._doors;
  }

  // Se ejecuta al asignar valores a las propiedades fuera de la clase
  // instance.doors = 5; => Doors must be an even number
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }

  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }

  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }

  // This function performs work for the other method functions
  worker(): string {
    return this._make;
  }
}
```

### Modificadores de acceso

Todos los miembros de una clase, son públicos por defecto. Esto significa que todos los miembros de una clase son accesibles desde fuera de la clase.

En TypeScript podemos definir los modificadores de acceso de los miembros de una clase:

- **Public**: Si no especifica un modificador de acceso, el `valor predeterminado es público.` También puede configurar explícitamente el miembro como público mediante la palabra clave **public**.
- **Private**: Si modifica el miembro con la palabra clave `private`, no se puede acceder desde fuera de su clase contenedora.
- **Protected**: El modificador `protected` actúa como el modificador `private` con la excepción de que también se puede acceder a los miembros declarados **protected dentro de las clases derivadas.**
- **readonly**: Si el modificador `readonly` se aplica a una propiedad, se declara que la propiedad no puede ser modificada desde fuera de la clase. Solo puede ser seteada en el constructor, al inicializar una instancia de la clase.

Ejemplo de clase con modificadores de acceso:

```ts
class Car {
  // Private Properties
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }

  // Accessors
  get doors() {
    return this._doors;
  }

  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error('Doors must be an even number');
    }
  }

  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }

  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }

  turn(direction: 'left' | 'right'): string {
    return `${this.worker()} is turning ${direction}`;
  }

  // This function performs work for the other method functions. It is private
  private worker(): string {
    return this._make;
  }
}

let myCar2 = new Car('Galaxy Motors', 'red', 4);

console.log(myCar2.doors); // Método getter
```

### Propiedades estáticas

Las propiedades y métodos estáticos son propiedades y métodos que se definen dentro de la clase, pero que no pertenecen a una instancia de la clase, sino que pueden se compartidas por todas las instancias de la clase.

> Las propiedades y método de instancia son las propiedades y métodos que se definen dentro de la clase, y que pertenecen a cada instancia de la clase

Para hacer una propiedad o método estático, se debe añadir la palabra clave **static** al inicio de la definición de la propiedad o método:

```ts
class Car {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;

  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    this._doors = doors;
    // Propiedad que es compartida con todas las instancias de la clase
    // className.propertyName en lugar de this.propertyName
    Car.numberOfCars++; // Increments the value of the static property
  }

  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
}

// Instantiate the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2);

console.log(Car.getNumberOfCars()); // 2
```

### Extender una clase con herencia

En TypeScript, podemos usar patrones comunes orientados a objetos. Uno de los patrones más fundamentales en la programación basada en clases es poder extender las clases existentes para crear otras nuevas usando la herencia.

Echemos un vistazo a un ejemplo:

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!');
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
```

Este ejemplo muestra la característica de herencia más básica: las clases heredan propiedades y métodos de las clases base. Aquí, Doghay una clase derivada que deriva de la clase Animal base usando la extendspalabra clave. Las clases derivadas a menudo se denominan subclases , y las clases base a menudo se denominan superclases .

Debido a que Dogextiende la funcionalidad desde Animal, pudimos crear una instancia de Dogque podría ambos bark()y move().

## Modificadores públicos, privados y protegidos.

Público por defecto
En nuestros ejemplos, hemos podido acceder libremente a los miembros que declaramos en todos nuestros programas. Si está familiarizado con las clases en otros idiomas, puede haber notado en los ejemplos anteriores que no hemos tenido que usar la palabrapublic para lograr esto; por ejemplo, C # requiere que cada miembro esté explícitamente etiquetado publiccomo visible. En TypeScript, cada miembro es publicpor defecto.

Aún puede marcar un miembro publicexplícitamente. Podríamos haber escrito la Animalclase de la sección anterior de la siguiente manera:

```ts
class Animal {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
```

## Comprensión private

Cuando se marca un miembro private, no se puede acceder desde fuera de su clase que lo contiene. Por ejemplo:

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

new Animal('Cat').name; // Error: 'name' is private;
```

TypeScript es un sistema de tipo estructural. Cuando comparamos dos tipos diferentes, independientemente de su procedencia, si los tipos de todos los miembros son compatibles, entonces decimos que los tipos mismos son compatibles.

Sin embargo, al comparar tipos que tienen privatey protectedmiembros, tratamos estos tipos de manera diferente. Para que dos tipos se consideren compatibles, si uno de ellos tiene un privatemiembro, el otro debe tener un privatemiembro que se originó en la misma declaración. Lo mismo se aplica a los protectedmiembros.

Veamos un ejemplo para ver mejor cómo se desarrolla esto en la práctica:

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino');
  }
}

class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}

let animal = new Animal('Goat');
let rhino = new Rhino();
let employee = new Employee('Bob');

animal = rhino;
animal = employee; // Error: 'Animal' and 'Employee' are not compatible
```

En este ejemplo, tenemos una Animaly una Rhino, con Rhinoser una subclase de Animal. También tenemos una nueva clase Employeeque se ve idéntica Animalen términos de forma. Creamos algunas instancias de estas clases y luego tratamos de asignarlas entre sí para ver qué sucederá. Porque Animaly Rhinocomparten el privatelado de su forma desde la misma declaración de private name: stringin Animal, son compatibles. Sin embargo, este no es el caso Employee. Cuando intentamos asignar de a Employeea Animal, obtenemos un error de que estos tipos no son compatibles. Aunque Employeetambién tiene un privatemiembro llamado name, no es el que declaramos enAnimal .

## Comprensión protected

El protectedmodificador actúa de manera muy similar al privatemodificador con la excepción de que los miembros declarados protectedtambién pueden accederse dentro de las clases derivadas. Por ejemplo:

```ts
class Person {
  protected name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
console.log(howard.name); // error
```

Tenga en cuenta que si bien no podemos usarlo namedesde fuera Person, aún podemos usarlo desde un método de instancia de Employeeporque Employeederiva dePerson .

Un constructor también puede estar marcado protected. Esto significa que la clase no se puede instanciar fuera de su clase que contiene, sino que se puede extender. Por ejemplo,

```ts
class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}

// Employee can extend Person
class Employee extends Person {
  private department: string;

  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}

let howard = new Employee('Howard', 'Sales');
let john = new Person('John'); // Error: The 'Person' constructor is protected
```

# Refactorización

La refactorización del código fuente puede mejorar la calidad y la facilidad de mantenimiento de su proyecto al reestructurar su código sin modificar el comportamiento del tiempo de ejecución. Visual Studio Code admite operaciones de refactorización (refactorizaciones) como el Método de extracción y la Variable de extracción para mejorar su base de código desde su editor.

La refactorización de código es el proceso de reestructurar el código de computadora existente, cambiar la factorización, sin cambiar su comportamiento externo. La refactorización está destinada a mejorar los atributos no funcionales del software . Las ventajas incluyen legibilidad mejorada del código y complejidad reducida ; Estos pueden mejorar el mantenimiento del código fuente y crear una arquitectura interna más expresiva o un modelo de objeto para mejorar la extensibilidad .
