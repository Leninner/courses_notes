**ÍNDICE**

- [Typescript Bases](#typescript-bases)
  - [Tipos Básicos](#tipos-básicos)
  - [Funciones](#funciones)
  - [Interfaces](#interfaces)
  - [Enum](#enum)
- [Clases](#clases)
  - [Herencia](#herencia)
  - [Modificadores públicos, privados y protegidos.](#modificadores-públicos-privados-y-protegidos)
  - [Comprensión private](#comprensión-private)
  - [Comprensión protected](#comprensión-protected)
- [Refactorización](#refactorización)

# Typescript Bases

TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.

Nos va a ayudar con un desarrollo más seguro.

NOTE: Parcel es un servidor como live-server que es capaz de correr typescript en el navegador a través de un proceso de transpilación.

> En Parcel, si experimentamos un error no previsto, podemos borrar la carpeta .cache y dist del proyecto en el que estamos trabajando para que pueda funcionar correctamente el transpilador.

## Tipos Básicos

Type script permite ser específico con los tipos de variables que se utilizan:

```ts
// Boolean

let booleano: boolean = false;

// Números

let firstNumber: number = 45;
let secondNumber: number = 78;

let result = firstNumber + secondNumber;

// String

let saludo: string = 'Me llamo Lucas';

// Arreglos

let peopple: string[] = [];
peopple = ['Lenin', 'Mathias', 'Carlos', 'Pepe'];

let numbers: number[] = [];
numbers.push(45);
numbers.push(789);

let numbersAndStrings: Array<string | number> = [];
numbersAndStrings.push('Lenin');
numbersAndStrings.push(789);

// Enum

enum Colores {
  rojo = 'Rojo',
  verde = 'Verde',
  azul = 'Azul',
  amarillo = 'Amarillo',
}
let colorFavorito: Colores = Colores.verde;
console.log(`Mi color favorito es: ${colorFavorito}`);

// Any

let comodin: any = 'Joker';
comodin = { type: 'Wildcar' };

// Object

let someObject: object = { type: 'Wildcard' };
```

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

## Enum

Sirven para declarar un tipo de dato específico.

NOTE: Para declarar algo opcional en Typescript, debemos indicarlo con el signo de itnerrogación (?).

# Clases

JavaScript tradicional utiliza funciones y herencia basada en prototipos para construir componentes reutilizables, pero esto puede resultar un poco incómodo para los programadores más cómodos con un enfoque orientado a objetos, donde las clases heredan la funcionalidad y los objetos se crean a partir de estas clases. A partir de ECMAScript 2015, también conocido como ECMAScript 6, los programadores de JavaScript podrán construir sus aplicaciones utilizando este enfoque basado en clases orientado a objetos. En TypeScript, permitimos que los desarrolladores usen estas técnicas ahora y las compilen en JavaScript que funcione en todos los principales navegadores y plataformas, sin tener que esperar a la próxima versión de JavaScript.

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
