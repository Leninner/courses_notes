# Javascript Basics

> Para abrir la consola del navegador Chrome: ctrl + shift + j `o` ctrl + shift + c

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

> Hablamos de `scope` al trabajar con variables, más adelante en el archivo se podrá encontrar información sobre el Scope

## Condicionales

Son métodos que nos permiten realizar acciones o ejecutar código dependiendo si una condición se cumple o no:

### Condicional If

### Condicional Switch

## Loops o Bucles

### While loop

### Do While Loop

### For Loop

## Funciones

Son "**fábricas**" que se encargan de hacer algún trabajo determinado, por ejemplo, saludar, restar un número, divir un número, etc...

Ejemplo:

```js
// Definición de función
function sayHello() {
  console.log('Hello');
}
```

Para ejecutar la función anterior la llamamos así:

```js
sayHello(); // Va a mostrar en la consola Hello
```

### Parámetros y Argumentos

Parámetros:

- Son aquellas variables que se declaran en un método o en una función:

```js
function doSome(parametro) {
  // lo que está dentro de los paréntesis son los parámetros
  return parametro;
}
```

Argumentos:

- Son los datos que se pasan al método o a la función al ser llamados:

```js
doSome('Lenin'); //  lo que está dentro del paréntesis son los argumentos
```

> En general no hay ningún problema con llamarle argumento a un parámetro o viceversa, pero es importante remarcar la diferencia.

### Function Expression o Expresión de Función

**Expresión de función:**
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```js
const nombre = function(nombre){
console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

### Function Statement/Function Declaration o Declaración de Función

**Funciones Declarativas:**
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

```js
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

### Arrow Functions

### Retorno Explícito vs Retorno Implícito

Toda función nos va a retornar algo, ya sea explícitamente o implícitamente.

#### Retorno Explícito

#### Retorno Implícito
