**Índice**:

- [Scope](#scope)
  - [Global Scope](#global-scope)
  - [Local Scope](#local-scope)
    - [Ámbito lexico](#ámbito-lexico)
  - [Function Scope](#function-scope)
  - [Block Scope](#block-scope)
- [Closures](#closures)
  - [Ámbito Léxico en Closures](#ámbito-léxico-en-closures)
  - [¿Cómo crear variables privadas con closures?](#cómo-crear-variables-privadas-con-closures)
- [Hoisting](#hoisting)
  - [IIFE (Expresiones de función invocadas inmediatamente)](#iife-expresiones-de-función-invocadas-inmediatamente)
- [Debugger](#debugger)

# Scope

Alcance que va a tener una variable en el código.
Scope se encargará de decidir a que bloques de código va a acceder a una variable.

## Global Scope

No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.

- Con var podemos volver a declarar una variable con la keyword **var** pero es una mala práctica:

```js
var number = 12;
var number = 'lenin';

console.log(number); //lenin
```

- Con let y const no podemos, aparecerá un error:

```js
let number = 12;
let number = 'lenin!';

console.log(number); // Uncaught SyntaxError: Identifier 'number' has already been declared
```

- Es una mala práctica crear una variable sin las palabras reservadas: var, let y const. Se puede, pero es una mala práctica:

```js
x = 12;
name = 'lenin';
```

> Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.

## Local Scope

Se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entorno en donde conviven.

```js
const doSome = () => {
  const name = 'Lenin';

  console.log(name);
};

doSome(); // Lenin
console.log(name); // ""
```

Otro ejemplo:

```js
const doSome = () => {
  const number = 12;

  if (number > 10) {
    const mayor = 'Yep';
    console.log(number); // 12
    console.log(mayor); // yep
  }
  console.log(mayor); // Uncaught ReferenceError: mayor is not defined
};
```

### Ámbito lexico

Se refiere a que una funcion puede acceder a una funcion o variable fuera de ella. Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas:

```js
const name = 'lenin'; // global scope

function doSome() {
  let anotherName = 'mazabanda';

  if (true) {
    let profesion = 'developer';
    console.log(`${name} ${anotherName} es ${profesion}`); // este ámbito pues acceder a name y a anotherName
  }
}

doSome(); // lenin mazabanda es developer
```

## Function Scope

Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada”, pero su valor puede ser reasignado:

- No puede ser redeclarado:

```js
let name = 12;
let name = 'mathias';
```

- Si pueden ser reasignados:

```js
let name = 12;
name = 456;
```

> Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

## Block Scope

Con este scope no se puede acceder desde fuera del bloque que puede ser un if, un for, etc.

```js
const name = 'lenin';
const doSome = () => {
  if (true) {
    let anotherName = name;
    console.log(anotherName, name);
  }
};

doSome(); //lenin, lenin

console.log(anotherName); // Uncaught ReferenceError: anotherName is not defined
```

# Closures

Es la combinación de una función y el ámbito léxico en la cual a sido declarada esa función.
Un closure recuerda el ámbito en la cuál ha sido creado.

> Documentación: https://developer.mozilla.org/es/docs/Web/JavaScript/Closures

## Ámbito Léxico en Closures

Si te llegaste a preguntar ¿Por qué si le mandamos como parámetro inicial 1, al momento de llamar el closure por primera vez me imprime 1 si lo estoy incrementando?
Bueno, pues yo te lo explico.

Si vemos la estructura de la función:

```js
const buildCount = (i) => {
  let count = i;
  const displayCount = () => {
    console.log(count++);
  };
  return displayCount;
};
```

Podemos notar que el console.log() está de de la siguiente manera

```js
console.log(count++);
```

Y como ves, aparece _count++_, lo que quiere decir que estamos incrementando en 1 el valor de count, pero de la manera que está escrita, primero va a imprimir el count con el valor antes de incrementarlo.

Esto se debe a que count++ es lo equivalente a decir

```js
count = count + 1; //  count++ es un post-increment.
console.log(count++); // primero muestra el valor de count y luego va a ir mostrando la iteración
```

pero el momento en el que se hará ese incremento, **está dado por la posición del ++**, en éste caso, se hará después.

- Si quisieramos que se muestre el valor de count después de hacerle el incremento, podríamos hacer ésto:

```js
count++;
console.log(count);
```

O, de una manera más elegante, y aprendiendo como funciona el ++, así:

```js
console.log(++count); // pre-increment, primero hace la operación y luego muestra el valor.
```

## ¿Cómo crear variables privadas con closures?

Al retornar valores, es cuando podemos crear variables privadas. Al crear un retorno explícito de una variable, estamos retornando una referencia a ese espacio en memoria y no necesariamente a la variable que hicimos "pública" al ser retornada:

```js
const doSome = () => {
  let number = 45; // variable privada por closure
  let anotherNumber = 78; // variable "pública" por closure

  return anotherNumber;
};

let pop = doSome();
console.log(pop); // 78
console.log(number); // Uncaught ReferenceError: anotherNumber is not defined
```

Otro ejemplo:

```js
function creaFunc() {
  var nombre = 'Mozilla';
  function muestraNombre() {
    alert(nombre);
  }
  return muestraNombre;
}

var miFunc = creaFunc();
miFunc(); // Mozilla
```

> En la función anterior estamos retornando una función que a su vez está accediendo a una variable fuera de su scope y la muestra con un alert

Otro ejemplo:

```js
function creaSumador(x) {
  return function (y) {
    return x + y;
  };
}

var suma5 = creaSumador(5);
var suma10 = creaSumador(10);

console.log(suma5(2)); // muestra 7
console.log(suma10(2)); // muestra 12
```

# Hoisting

Levantamiento de las declaraciones. Importa el orden en el que son declaradas variables, funciones métodos, etc.

- Al crear una función con function declaration, el hoisting no importa:

```js
doSome(); // Llamamos a la función antes de ser declarada

function doSome() {
  alert('hello');
}
```

- Al crear variables, funciones con function expression y arrow functions, el hoisting importa mucho:

```js
let number = 45;

const pop = function () {
  alert('hello');
};

const popu = () => {
  alert('Hello');
};

pop(); // hello
popu(); // Hello
```

> La llamada a las funciones de flecha y expresiones de función de hacen después de haber sido declaradas

- Diferencia entre function declaration y function expression

  > Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.

- Beneficios de las expresiones de función:

```js
function doSome() {
  //do some
}
```

Hay varias formas diferentes en que las expresiones de función se vuelven más útiles que las declaraciones de función:

1. Como cierres
2. Como argumentos para otras funciones
3. Como expresiones de función invocadas inmediatamente (IIFE)

## IIFE (Expresiones de función invocadas inmediatamente)

Son funciones que se ejecutan a pesar de **no ser ejecutada explícitamente:**

```js
(function doSome() {
  alert('Hello');
})();
```

> En el código anterior no estamos ejecutando la función explícitamente, sin embargo se ejecuta. Esto ocurre por los **dobles paréntesis (function)()**

# Debugger

Sirve para debuggear el código.

```js
function codigoPotencialmenteDefectuoso() {
  debugger;
  // realizar paso a paso o examinar código que contiene
  // potenciales errores
}
```

Nos permite ir parando en la lectura del código para ver si no se encuentra algún error
