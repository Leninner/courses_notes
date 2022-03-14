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
  - [Funciones](#funciones)
  - [Interfaces](#interfaces)
- [Clases](#clases)
  - [Herencia](#herencia)
  - [Modificadores públicos, privados y protegidos.](#modificadores-públicos-privados-y-protegidos)
  - [Comprensión private](#comprensión-private)
  - [Comprensión protected](#comprensión-protected)
- [Refactorización](#refactorización)

# Instalación y primeros pasos con TypeScript

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
| `boolean`    | `typeof b=== "boolean"`            |
| `undefined`  | `typeof undefined === "undefined"` |
| `null`       | `typeof null === "null"`           |
| `function`   | `typeof f === "function"`          |
| `array`      | `Array.isArray(a)`                 |

## Funciones

En Typescript podemos ser explícitos con el tipo de los argumentos y el tipo de retorno de una función.

```ts
// Funciones

function suma(a: number, b: number) {
  return a + b;
}
const add = suma(12, 78);
console.log(add);

function createAdder(a: number): (number) => number {
  return function (b: number) {
    return a + b;
  };
}

const sumar = createAdder(12);

const addTwelve = sumar(7);

function fullName(name: string, lastName: string = 'Doe'): string {
  return `${name} ${lastName}`;
}

const richard = fullName('Richard');

console.log(richard);
```

## Interfaces

Nos permiten declarar la forma exacta de un objeto, definiendo los tipos de sus propiedades y si son opcionales o no.

# Clases

JavaScript tradicional utiliza funciones y herencia basada en prototipos para construir componentes reutilizables, pero esto puede resultar un poco incómodo para los programadores más cómodos con un enfoque orientado a objetos, donde las clases heredan la funcionalidad y los objetos se crean a partir de estas clases.
A partir de ECMAScript 2015, también conocido como ECMAScript 6, los programadores de JavaScript podrán construir sus aplicaciones utilizando este enfoque basado en clases orientado a objetos. En TypeScript, permitimos que los desarrolladores usen estas técnicas ahora y las compilen en JavaScript que funcione en todos los principales navegadores y plataformas, sin tener que esperar a la próxima versión de JavaScript.

Clases

Echemos un vistazo a un ejemplo simple basado en clases:

```ts
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return 'Hello, ' + this.greeting;
  }
}

let greeter = new Greeter('world');
```

La sintaxis debería resultarle familiar si ha usado C # o Java anteriormente. Declaramos una nueva clase Greeter. Esta clase tiene tres miembros: una propiedad llamada greeting, un constructor y un método greet.

Notarás que en la clase cuando nos referimos a uno de los miembros de la clase que anteponemos this.. Esto denota que es un acceso de miembro.

En la última línea construimos una instancia de la Greeterclase usando new. Esto llama al constructor que definimos anteriormente, creando un nuevo objeto con la Greeterforma y ejecutando el constructor para inicializarlo.

## Herencia

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
