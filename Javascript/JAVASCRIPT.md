**ÍNDICE**

- [Lenguaje Javascript](#lenguaje-javascript)
  - [Notas Interesantes](#notas-interesantes)
  - [Hoisting](#hoisting)
  - [Coerción](#coerción)
  - [Windows Subsystem for Linux](#windows-subsystem-for-linux)
- [PATRONES DE DISEÑO](#patrones-de-diseño)
  - [Objetos](#objetos)
    - [El Objeto Constructor](#el-objeto-constructor)
  - [PROTOTYPE](#prototype)
    - [HERENCIA](#herencia)
    - [Propiedad del Prototipo](#propiedad-del-prototipo)
    - [Atributos del Prototipo](#atributos-del-prototipo)
      - [Atributo de prototipo de objetos creados con un nuevo objeto () u objeto literal](#atributo-de-prototipo-de-objetos-creados-con-un-nuevo-objeto--u-objeto-literal)
      - [Atributo de prototipo de objetos creados con una función de constructor](#atributo-de-prototipo-de-objetos-creados-con-una-función-de-constructor)
    - [¿Por qué es importante el uso de Prototipo y cuándo es usado?](#por-qué-es-importante-el-uso-de-prototipo-y-cuándo-es-usado)
      - [Propiedad del prototipo: Herencia basada en prototipos](#propiedad-del-prototipo-herencia-basada-en-prototipos)
      - [Atributo de prototipo: Acceder a las propiedades de los objetos](#atributo-de-prototipo-acceder-a-las-propiedades-de-los-objetos)
    - [Ejemplos con Herencia](#ejemplos-con-herencia)
      - [EJEMPLO 1:](#ejemplo-1)
      - [EJEMPLO 2:](#ejemplo-2)
      - [EJEMPLO 3:](#ejemplo-3)
    - [La escritura no usa prototipos](#la-escritura-no-usa-prototipos)
      - [Uso de "this."](#uso-de-this)
    - [FOR...IN LOOP](#forin-loop)
    - [RESUMEN](#resumen)
    - [Declaración de método de objeto javascript en función de constructor frente a prototipo](#declaración-de-método-de-objeto-javascript-en-función-de-constructor-frente-a-prototipo)
  - [FUNCIONES DE FÁBRICA Y PATRÓN DEL MÓDULO](#funciones-de-fábrica-y-patrón-del-módulo)
    - [Introducción a las Funciones de Fábrica](#introducción-a-las-funciones-de-fábrica)
      - [Taquigrafía de Objetos](#taquigrafía-de-objetos)
      - [Scope and Closure](#scope-and-closure)
        - [Alcance Global](#alcance-global)
        - [Alcance Local](#alcance-local)
        - [Alcande de Función](#alcande-de-función)
        - [Alcance léxico](#alcance-léxico)
        - [Cadena de alcance](#cadena-de-alcance)
        - [Closures](#closures)
        - [Alcance y "this"](#alcance-y-this)
        - [Cambiar el alcance con .call (), .apply () y .bind ()](#cambiar-el-alcance-con-call--apply--y-bind-)
          - [.call () y .apply ()](#call--y-apply-)
          - [.bind()](#bind)
        - [Alcance Público y Alcance Privado](#alcance-público-y-alcance-privado)
      - [Funciones y Variables Privadas](#funciones-y-variables-privadas)
    - [HERENCIA CON FUNCIONES DE FÁBRICA](#herencia-con-funciones-de-fábrica)
      - [TIPOS DE HERENCIA PROTOTIPAL](#tipos-de-herencia-prototipal)
        - [Delegación / Herencia diferencial](#delegación--herencia-diferencial)
        - [Herencia Concatenativa / Clonación / Mixins](#herencia-concatenativa--clonación--mixins)
        - [Herencia Funcional](#herencia-funcional)
        - [Herencia de Clase](#herencia-de-clase)
    - [MODULE PATTERN](#module-pattern)
      - [¿Cómo crear un Módulo?](#cómo-crear-un-módulo)
      - [Exportar un Módulo](#exportar-un-módulo)
      - [Propiedades y métodos privados](#propiedades-y-métodos-privados)
      - [Patrón de módulo revelador](#patrón-de-módulo-revelador)
      - [Expresión de función inmediatamente invocada](#expresión-de-función-inmediatamente-invocada)
  - [Clases](#clases)
    - [Expresión de Clase](#expresión-de-clase)
    - [GETTERS and SETTERS](#getters-and-setters)
    - [Computed Names []](#computed-names-)
    - [Campos de Clase](#campos-de-clase)
      - [Hacer métodos enlazados con campos de clase](#hacer-métodos-enlazados-con-campos-de-clase)
    - [Definiciones de método y cuerpo de clase](#definiciones-de-método-y-cuerpo-de-clase)
    - [Métodos Prototipales](#métodos-prototipales)
    - [Generador de Métodos](#generador-de-métodos)
    - [Propiedad y Métodos Estáticos](#propiedad-y-métodos-estáticos)
      - [Vinculando this con prototipos y métodos estáticos](#vinculando-this-con-prototipos-y-métodos-estáticos)
    - [Instanciando propiedades](#instanciando-propiedades)
    - [Subclasificación con extend](#subclasificación-con-extend)
    - [Especies](#especies)
    - [Llamadas de superclase con SUPER](#llamadas-de-superclase-con-super)
    - [Mix-ins](#mix-ins)
    - [Módulos](#módulos)
      - [NPM](#npm)
        - [Usos de NPM](#usos-de-npm)
        - [Instalación de un paquete sin ámbito](#instalación-de-un-paquete-sin-ámbito)
        - [Instalación de un paquete público con ámbito](#instalación-de-un-paquete-público-con-ámbito)
        - [Instalación de un paquete privado](#instalación-de-un-paquete-privado)
        - [Prueba de la instalación del paquete](#prueba-de-la-instalación-del-paquete)
        - [Instalación de un paquete con etiquetas dist](#instalación-de-un-paquete-con-etiquetas-dist)
        - [Creando un archivo package.json](#creando-un-archivo-packagejson)
          - [Campos package.json](#campos-packagejson)
        - [Creando un nuevo archivo package.json](#creando-un-nuevo-archivo-packagejson)
          - [Ejecución de un cuestionario CLI](#ejecución-de-un-cuestionario-cli)
          - [Personalización del cuestionario package.json](#personalización-del-cuestionario-packagejson)
          - [Creación de un archivo package.json predeterminado](#creación-de-un-archivo-packagejson-predeterminado)
        - [Transpilación de Código](#transpilación-de-código)
      - [WEBPACK](#webpack)
        - [Beneficios de Webpack](#beneficios-de-webpack)
  - [Principios de Programación Orientada a Objetos](#principios-de-programación-orientada-a-objetos)
    - [Solid Principles](#solid-principles)
      - [Single Responsibility Principle](#single-responsibility-principle)
        - [Pautas para implementar correctamente este principio](#pautas-para-implementar-correctamente-este-principio)
        - [Estereotipos de roles de objetos](#estereotipos-de-roles-de-objetos)
        - [Loosely Coupled Objects](#loosely-coupled-objects)
        - [Ejemplo](#ejemplo)
      - [Ejemplo 2](#ejemplo-2-1)
      - [Open-Closed Principle](#open-closed-principle)
        - [Ejemplo](#ejemplo-1)
      - [Liskov Substitution Principle](#liskov-substitution-principle)
      - [Interface Segregation Principle](#interface-segregation-principle)
      - [Dependency Inversion Principle](#dependency-inversion-principle)
    - [Acoplamiento](#acoplamiento)
      - [Ejemplo](#ejemplo-2)
      - [Patrones para reducir el acoplamiento](#patrones-para-reducir-el-acoplamiento)
- [Linting](#linting)
  - [¿Por qué es importante el pelaje?](#por-qué-es-importante-el-pelaje)
  - [Los problemas que pueden evitar "Linting"](#los-problemas-que-pueden-evitar-linting)
- [Test Driven Development](#test-driven-development)
  - [¿Por qué los desarrolladores deberían preocuparse por las pruebas unitarias automatizadas?](#por-qué-los-desarrolladores-deberían-preocuparse-por-las-pruebas-unitarias-automatizadas)
  - [¿Cómo lleva TDD el desarrollo al siguiente nivel?](#cómo-lleva-tdd-el-desarrollo-al-siguiente-nivel)
- [Promesas](#promesas)
- [Generadores](#generadores)
  - [Formularios y Validaciones](#formularios-y-validaciones)
- [JSON](#json)
  - [Estructura JSON](#estructura-json)
    - [Arrays como JSON](#arrays-como-json)
    - [Otras notas](#otras-notas)
- [Obteniendo un JSON](#obteniendo-un-json)
  - [XMLHttpRequest](#xmlhttprequest)
    - [Constructor](#constructor)
  - [Convertir de Texto a Json y viceversa](#convertir-de-texto-a-json-y-viceversa)
    - [Json Parse](#json-parse)
      - [Array como JSON](#array-como-json)
      - [Exceptions](#exceptions)
      - [Parsing Functions](#parsing-functions)
    - [Json Stringify](#json-stringify)
- [Reactividad](#reactividad)
  - [Manipulación NO reactiva del DOM](#manipulación-no-reactiva-del-dom)
  - [Manipulación del DOM basada en el Estado.](#manipulación-del-dom-basada-en-el-estado)

# Lenguaje Javascript

## Notas Interesantes

Existen retornos implícitos y explícitos con la función Map.

Implícito (Ejemplo con React):

```js
{
  state.cart.map((item) => <OrderItem product={item} key={`order-item-${item.id}`} />);
}
```

Explícito (Ejemplo con React):

```js
{
  state.cart.map((item) => {
    return <OrderItem product={item} key={`order-item-${item.id}`} />;
  });
}
```

- Spread Operator

```js
const obj = {
  name: 'Oscar',
  age: 32,
  country: 'MX',
};

let { name, ...addInfo } = obj;
console.log(`name: ${name}`);
console.log(`additional information: `, addInfo);

let { country, ...nameAndAge } = obj;
console.log(`name and age: `, nameAndAge);
```

Another example:

```js
let teamOne = [1, 2, 3];
let teamTwo = [4, 5, 6];
let teamThree = [4, ...teamOne, ...teamTwo];

let name = 'Oscar';
let age = 12;

let objeto = { name, age }; // Funciona por las nuevas funcionalidades de ES6
```

- Propiedades de Propagación

```js
const person = {
  name: 'Oscar',
  age: 32,
};

const personInformation = {
  ...person,
  country: 'MX',
};

console.log(`personInformation: `, personInformation);
```

- Promise Finally

```js
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('Hello World!');
        }, 3000)
      : reject(new Error('Test Error'));
  });
};

helloWorld()
  .then((result) => console.log('result -> ', result))
  .catch((err) => console.log('err -> ', err))
  .finally(() => console.log('finalizó'));
```

- Regex

```js
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];

console.log('Date -> ', year, month, day);
```

NOTE: padEnd y padStart Sirven para añadir texto antes o después de un string. Hay que definir su length y después poner los caracteres que se quiere añadir.

NOTE: trimStart, trimEnd sirven para eliminar los espacios entre las palabras que se están viendo. Trim sirve para eliminar espacios en blanco al inicio o al final del string.

```js
const obj = {
  name: 'Oscar',
  age: 32,
  country: 'Ecuador',
};

const array = Object.entrie(obj);
const array = Object.values(obj);
const array = Object.keys(obj);

let { name, age, country } = obj;

console.log(name, age, country);
```

NOTE: Flat

ES10

- **Array.prototype.flat(nivel_de_profundidad):** un nuevo método que nos permite aplanar arreglos.
- **Array.prototype.flatMap()** lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
- **String.prototype.trimStart() | String.prototype.trimEnd()** permite quitar los espacios al inicio o al final dependiendo de la funciona.
- **try/catch:** ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
- **Object.fromEntries()** lo inverso a **Object.entries()**, es decir podemos convertir un objeto en una matriz clave/valor con **Object.entries()**, y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
- **Symbol.prototype.description:** permite regresar el descripcion opcional del Symbol
- **Array.prototype.reduce():** El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor. Toma un valor acumulador y el valor actual del arreglo e itera:

```js
let arreglo = [1, 2, 4, 5, 6];

let final = arreglo.reduce((acumulador, valor) => {
  acumulador += valor;
});

(final) => 18;
```

El método .sort de los arrays nos permite ordenar listas de letras o números en JavaScript. Pero por defecto tiene algunos problemillas, como que el 1 millón queda ordenado antes que un 2 porque empieza por 1.

Si compareFunction (a, b) devuelve un valor > que 0, ordena b antes de a.
Si compareFunction (a, b) devuelve un valor ≤ 0, deje ayb en el mismo orden.

NOTE: El algoritmo ECMAScript Standard, décima edición (2019) exige una clasificación estable, lo que significa que los elementos que se comparan iguales deben permanecer en su orden original entre sí. Es posible que los navegadores más antiguos no respeten este comportamiento.

compareFunction (a, b) siempre debe devolver el mismo valor cuando se le da un par específico de elementos a y b como sus dos argumentos. Si se devuelven resultados inconsistentes, entonces el orden de clasificación es indefinido.

Ejemplo de comprobar cupones:

```js
const coupons = ['JuanDC_es_Batman', 'pero_no_le_digas_a_nadie', 'es_un_secreto'];

<label for="InputCoupon">
  <input id="InputCoupon" type="text" />
</label>;

const inputCoupon = document.getElementById('InputCoupon');
const couponValue = inputCoupon.value;
function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value;
  const inputCoupon = document.getElementById('InputCoupon');
  const couponValue = inputCoupon.value;

  let descuento;

  switch (couponValue) {
    case 'JuanDC_es_Batman':
      descuento = 15;
      break;
    case 'pero_no_le_digas_a_nadie':
      descuento = 30;
      break;
    case 'es_un_secreto':
      descuento = 25;
      break;
  }

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
  const resultP = document.getElementById('ResultP');
  resultP.innerText = 'El precio con descuento son: $' + precioConDescuento;
}
```

NOTE: Encapsular datos en la consola.

```js
//Abres
console.group('nombre que desees');
//Cierras
console.groupEnd();
```

Lenguajes Dinámicos: Son aquellos que no necesitan una etapa de compilación para pobrar su resultado.
Lenguajes Estáticos: Necesariamente son aquellos que necesitan pasar primero por un estado de compilación para luego pasar a ver su resultado.

Javscript es un lenguaje backwars e interpretado: Significa que tiene que haber un estándar para poder utilizar las nuevas versiones del lenguaje.

**¿Realmente es Javascript un lenguaje interpretado?**

Si, y la razón es que le navegador lee linea por linea nuestro código el cuál le indica lo que tiene que hacer, sin la necesidad de compilar. Todo esto es controlado por el motor de Javascript V8 del navegador

NOTE: Scope

1. Global y local

```js
//declarar
let variable;
//inicializar
variable = 30;
```

2. Funciones

> Declarativas

```js
function nombre(){
  do some...
}
```

> Espresiva

```js
let arreglo = function () {
  do some...
}
```

Cuando hablamos de funciones en JavaScript, tenemos dos tipos de funciones: Funciones Declarativas (function declaration / function statement) y Expresiones de función (function expression / funciones anónimas).

**Funciones Declarativas:**
En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función:

```js
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar('Diego');
```

**Expresión de función:**
En la expresión de función, la declaración se inicia con la palabra reservada var, donde se generará una variable que guardará una función anónima.

```js
var nombre = function(nombre){
console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

**Diferencias:**

A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

NOTE: Babel

Es un compilador de Javascript que permite utilizar las últimas versiones de este lenguaje y luego transpilarlo a lenguaje actual.

1. JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

Si solo estuvieras interesado en trabajar aplicaciones web tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)

Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder construir aplicaciones nativas como Android y IOS.

Puedes construir aplicaciones de escritorio con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.

También puedes trabajar en la parte del Back-end o **IOT** (Internet Of Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.

NOTE: Tipos de Variables

Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

- Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:

```js
var pokemonType = ‘electric’ //entonces reinicializar es:
var pokemonType = ‘grass’ //osea la misma variable con diferentes datos el último dato predomina.
```

- Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo:

  Inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var

- Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

**const y let** es la forma en que se declaran las variables a partir de ECMAScript 6,

**const:** sirve para declarar variables que nunca van a ser modificadas:

- No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:

  const pokemonType = ‘grass’

- No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:

  pokemonType = ‘grass’

- No es inmutable: osea no puede cambiar con objetos:

**Let:** Son variables que pueden ser modificadas, se pueden cambiar:

- No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
  let pokemonType = ‘grass’

- Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’

- Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.

NOTE: Datos primitivos en Javascript

**String, Number, Boolean, Null y Undefined**

[note]: Booleanos

```js
//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(''); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean('a'); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function () {}); //Cualquier función es verdadera también
```

[note]: "==" compara valores y "===" compara valores y tipo de dato

## Hoisting

Es cuando las variables y las funciones se declaran antes de que se ejecute cualquier código. En ES6+ No existe Hoisting.

## Coerción

Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.

```js
4 + "2" = "42"
4 * "2" = 8
```

## Windows Subsystem for Linux

NOTE: ¿Qué es el navegador?

Funcionan gracias a HTTP(S). Define como el texto, imágenes, vídeos están distribuidos en internet.
Google Chrome tiene varios navegadores para desarrolladores.

NOTE: DevTools

Revisión y debugueo del código para que haga las cosas correctamente.

> Script siempre debe ir antes de que cierre el body porque es donde se cargan todos los elementos visuales y estamos listos para empezar.

NOTE: // abrir un PDF en una pestaña nueva
window.open('http://ejemplo.com/archivo.pdf', '\_blank');

NOTE: // redirigir la pestaña actual a otra URL
window.location.href = 'http://ejemplo.com';

> Crear un hash en Javascript:

- Los hashes en JavaScript son objetos.

```js
const myObject = {
  property: 'Value!',
  otherProperty: 77,
  'obnoxious property': function () {
    // do stuff!
  },
};
```

> Formas de obtener su contenido

```js
// dot notation
myObject.property; // 'Value!'
// bracket notation
myObject['obnoxious property']; // [Function] => Similar a RUBY
```

# PATRONES DE DISEÑO

## Objetos

- Para ordenar mejor nuestro código en Javascript, podemos utilizar objetos como patrones de diseño:

```js
// Ejemplo con TIC TAC TOE

// example one => constantes \* No son objetos
const playerOneName = 'tim';
const playerTwoName = 'jenn';
const playerOneMarker = 'X';
const playerTwoMarker = 'O';

// example two => Hash con los atributos del jugador \* Si son objetos
const playerOne = {
  name: 'tim',
  marker: 'X',
};

const playerTwo = {
  name: 'jenn',
  marker: 'O',
};

function printName(player) {
  console.log(player.name);
}
```

### El Objeto Constructor

Un constructor es una función que se usa para inicializar nuevos objetos y usted usa la palabra clave **new** para llamar al constructor. Se la define una sola vez y nos srive para crear N veces cualquier instancia que queramos.

NOTE: Todos los objetos que heredan de otro objeto también heredan una propiedad de constructor. Y esta propiedad de constructor es simplemente una propiedad (como cualquier variable) que sostiene o apunta al constructor del objeto.

```js
//The constructor in this example is Object ()
var myObj = new Object();
// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
var userAccount = new Account();
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()
```

Es una función que se ve así

TODO: MÉTODO CONSTRUCTOR

```js
//EJEMPLO 1:
function Account() {}
// This is the use of the Account constructor to create the userAccount object.
var userAccount = new Account();

// EJEMPLO 2:

-function Player(name, marker) {
  this.name = name;
  this.marker = marker;
};
```

Y se puede crear una instancia de ese objeto con:

```js
const player = new Player('steve', 'X');
console.log(player.name); // 'steve'

// Al método constructor, también se lo puede pasar varias operaciones:

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(name);
  };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');
player1.sayName(); // logs 'steve'
player2.sayName(); // logs 'also steve'
```

NOTE: Hacer este tipo de cosas es muy similar a crear instancias de clases en RUBY. La partícula "this." es similar a "@" en RUBY y podemos leerla como una variable de instancia.
El método constructor es muy similar en comportamiento a clases en RUBY

## PROTOTYPE

**Todos los objetos en JavaScript tienen un Prototype.**
El prototipo es otro objeto del que hereda el objeto original, es decir, el objeto original tiene acceso a todos los métodos y propiedades de su prototipo. **El prototipo sirve para la herencia de las instancias.**
Todas las funciones de Javascript tienen una propiedad prototipo con un valor vacío por defecto.

NOTE: Un prototipo solo puede tener valores como objetos o null, otros tipos son ignorados.

También un objeto puede tener solamente un prototipo de otro objeto, no puede heredar de otros 2.

### HERENCIA

Herencia es un concepto que hace alusión a la reutilización de propiedades y métodos que ya están definidos para no volver a escribirlos otra vez.

### Propiedad del Prototipo

Primero, cada función de JavaScript tiene una propiedad de prototipo (esta propiedad está vacía de forma predeterminada), y usted adjunta propiedades y métodos en esta propiedad de prototipo cuando desea implementar la herencia.

Ejemplo:

```js
function PrintStuff(myDocuments) {
  this.documents = myDocuments;
}

// Añadimos el método print() a la propiedad prototipo PrintfStuff para que otras instancias (objetos) puedan heredarlo:
PrintStuff.prototype.print = function () {
  console.log(this.documents);
};

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
let newObj = new PrintStuff('I am a new Object and I can print.');

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
newObj.print(); //I am a new Object and I can print.
```

### Atributos del Prototipo

Característica del objeto; esta característica nos dice el "padre" del objeto.
El atributo prototipo de un objeto apunta al "padre" del objeto -el objeto del que heredó sus propiedades.
El atributo prototipo normalmente se denomina objeto prototipo y se establece automáticamente cuando crea un nuevo objeto.
Cada objeto hereda propiedades de algún otro objeto, y este otro objeto es el atributo prototipo o "padre" del objeto.
Todos los objetos tienen atributos al igual que las propiedades de los objetos tienen atributos. Y los atributos del objeto son prototipo, clase y atributos extensibles.

#### Atributo de prototipo de objetos creados con un nuevo objeto () u objeto literal

**Object.prototype** es el atributo prototipo (o el objeto prototipo) de todos los objetos creados con new Object () o con {}. Object.prototype en sí mismo no hereda ningún método o propiedad de ningún otro objeto.

- // The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.
  var userAccount = new Object ();

- // Esto demuestra el uso de un objeto literal para crear el objeto userAccount; el objeto userAccount hereda de Object; por lo tanto, su atributo de prototipo es Object.prototype tal como lo hace el objeto userAccount arriba.
  var userAccount = {name: “Mike”}

#### Atributo de prototipo de objetos creados con una función de constructor

Los objetos creados con la palabra clave new y cualquier constructor que no sea el constructor Object () obtienen su prototipo de la función constructora.

function Account () {
}
let userAccount = new Account () // userAccount inicializado con el constructor Account () y, como tal, su atributo prototipo (u objeto prototipo) es Account.prototype.

De manera similar, cualquier arreglo como var myArray = new Array (), obtiene su prototipo de Array.prototype y hereda las propiedades de Array.prototype.

NOTE: Hay dos formas generales en que se establece el atributo de prototipo de un objeto cuando se crea un objeto:

1. Si un objeto se crea con un objeto literal (var newObj = {}), hereda propiedades de Object.prototype y decimos que su objeto prototipo (o atributo prototype) es Object.prototype.

2. Si un objeto se crea a partir de una función constructora como new Object (), new Fruit () o new Array (), hereda de ese constructor (Object (), Fruit () o Array ()). Por ejemplo, con una función como Fruit (), cada vez que creamos una nueva instancia de Fruit (let aFruit = new Fruit ()), al prototipo de la nueva instancia se le asigna el prototipo del constructor Fruit, que es Fruit.prototype.

NOTE: Puedes crear objetos con un método Object.create ()

### ¿Por qué es importante el uso de Prototipo y cuándo es usado?

#### Propiedad del prototipo: Herencia basada en prototipos

Es importante porque Javascript no tiene la herencia clásica basada en clases (como la mayoría de los lenguajes orientados a objetos) y, por lo tanto, toda la herencia en JavaScript es posible gracias a la propiedad prototype.
JavaScript tiene un mecanismo de herencia basado en prototipos. La herencia es un paradigma de programación donde los objetos (o clases en algunos lenguajes) pueden heredar propiedades y métodos de otros objetos (o clases).

- Ejemplo:

function Plant () {
this.country = "Mexico";
this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function () {
console.log("I am a " + this.name + " and my color is " + this.color);
}

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
if (this.isOrganic)
console.log("I am organic, Baby!");
}

function Fruit (fruitName, fruitColor) {
this.name = fruitName;
this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant ();

// Creates a new object, aBanana, with the Fruit constructor
let aBanana = new Fruit ("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Utiliza el método showNameAndColor del prototipo del objeto Fruit, que es Plant.prototype. El objeto aBanana hereda todas las propiedades y métodos de las funciones Plant y Fruit.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

De hecho, cualquier objeto que utilice el constructor Fruit () heredará todas las propiedades y métodos de Fruit.prototype y todas las propiedades y métodos del prototipo de Fruit, que es Plant.prototype. Esta es la forma principal en la que se implementa la herencia en JavaScript y el papel integral que tiene la cadena de prototipos en el proceso.

#### Atributo de prototipo: Acceder a las propiedades de los objetos

El prototipo también es importante para acceder a las propiedades y métodos de los objetos.

NOTE: El atributo prototipo (u objeto prototipo) de cualquier objeto es el objeto "padre" donde se definieron originalmente las propiedades heredadas. Si quisiéramos saber de dónde proviene su apellido, primero verificaríamos si lo creó usted mismo; si no, la búsqueda se trasladará a su padre prototipo para ver si lo heredó de él. Si no fue creado por él, la búsqueda continúa hasta su padre (el padre prototipo de su padre).
Esto, en esencia, es la cadena de prototipos: la cadena desde el prototipo de un objeto hasta el prototipo de su prototipo y en adelante. Y JavaScript usa esta cadena de prototipos para buscar propiedades y métodos de un objeto.
Si la propiedad no existe en ninguno de los prototipos del objeto en su cadena de prototipos, entonces la propiedad no existe y se devuelve undefined.

Todos los objetos en JavaScript heredan propiedades y métodos de Object.prototype. Estas propiedades y métodos heredados son:

- constructor,
  hasOwnProperty (),
  isPrototypeOf (),
  propertyIsEnumerable (),
  toLocaleString (),
  toString ()
  valueOf ().

### Ejemplos con Herencia

#### EJEMPLO 1:

let animal = {
eats: true
};
let rabbit = {
jumps: true
};

rabbit.prototype = animal; // (\*) => Se lee que la propiedad prototipo de rabbit es animal y puede heredar sus propiedades y comporamientos. Aquí podemos decir que "el animal es el prototipo del conejo" o "el conejo hereda prototípicamente del animal".

// we can find both properties in rabbit now:
alert( rabbit.eats ); // true (\*\*) => Accedió primero a buscar en el objeto rabbit la propiedad eats, pero como no la encontró se fue al atributo prototipo que es animal y busca de nuevo la propiedad "eats" y la muestra. Esto significada que rabbit está heredando todos los comportamientos y propiedades del objeto animal.
alert( rabbit.jumps ); // true

#### EJEMPLO 2:

let animal = {
eats: true,
walk() {
alert("Animal walk");
}
};

let rabbit = {
jumps: true,
prototype: animal
};

// walk is taken from the prototype ya que no se encuentra en el objeto rabbit y va al prototipo y puede encontrarlo
rabbit.walk(); // Animal walk

#### EJEMPLO 3:

let animal = {
eats: true,
walk() {
alert("Animal walk");
}
};

let rabbit = {
jumps: true,
prototype: animal
};

let longEar = {
earLength: 10,
prototype: rabbit
};

// walk is taken from the prototype chain
// Primero va al objeto rabbit ya que ese es su padre y busca el método walk pero como no lo encuentra entonces visita a su "abuelo" que es el objeto animal y entonces puede encontrarlo. Lo mismo pasa con jumps

longEar.walk(); // Animal walk
alert(longEar.jumps); // true (from rabbit)

### La escritura no usa prototipos

let animal = {
eats: true,
walk() {
/_ this method won't be used by rabbit _/
}
};

let rabbit = {
prototype: animal
};

rabbit.walk = function() {
alert("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!

#### Uso de "this."

No importa dónde se encuentre el método: en un objeto o su prototipo. En una llamada a un método, este es siempre el objeto antes del punto.
Eso es realmente una cosa muy importante, porque podemos tener un objeto grande con muchos métodos y tener objetos que hereden de él. Y cuando los objetos heredados ejecutan los métodos heredados, solo modificarán sus propios estados, no el estado del objeto grande.
Como resultado, los métodos se comparten, pero el estado del objeto no.

// animal has methods
let animal = {
walk() {
if (!this.isSleeping) {
alert(`I walk`);
}
},
sleep() {
this.isSleeping = true;
}
};

let rabbit = {
name: "White Rabbit",
**proto**: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

alert(rabbit.isSleeping); // true
alert(animal.isSleeping); // undefined (no such property in the prototype)

### FOR...IN LOOP

El bucle for..in también itera sobre las propiedades heredadas.

let animal = {
eats: true
};

let rabbit = {
jumps: true,
**proto**: animal
};

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop); // jumps, then eats => Aquí está la diferencia

Si eso no es lo que queremos, y nos gustaría excluir las propiedades heredadas, hay un método incorporado obj.hasOwnProperty (key): devuelve verdadero si obj tiene su propia propiedad (no heredada) llamada key.

let animal = {
eats: true
};

let rabbit = {
jumps: true,
**proto**: animal
};

for(let prop in rabbit) {
let isOwn = rabbit.hasOwnProperty(prop);

if (isOwn) {
alert(`Our: ${prop}`); // Our: jumps
} else {
alert(`Inherited: ${prop}`); // Inherited: eats
}
}

### RESUMEN

- En JavaScript, todos los objetos tienen una propiedad [[Prototype]] oculta que es otro objeto o nula.
  Podemos usar obj .** proto** para acceder a él (un getter / setter histórico, hay otras formas, que se cubrirán pronto).
  El objeto al que hace referencia [[Prototype]] se denomina "prototipo".
  Si queremos leer una propiedad de obj o llamar a un método, y no existe, JavaScript intenta encontrarlo en el prototipo.
  Las operaciones de escritura / eliminación actúan directamente sobre el objeto, no usan el prototipo (asumiendo que es una propiedad de datos, no un establecedor).
  Si llamamos obj.method (), y el método se toma del prototipo, esto todavía hace referencia a obj. Por lo tanto, los métodos siempre funcionan con el objeto actual, incluso si se heredan.
  El bucle for..in itera sobre sus propias propiedades y las heredadas. Todos los demás métodos de obtención de clave / valor solo operan en el objeto en sí.

NOTE: La manera recomendada para hacer herencia con prototipos es con "Oject.create" que devuelve un nuevo objeto con el prototipo especificado y cualquier propiedad adicional que desee agregar.:

function Student() {
}

Student.prototype.sayName = function() {
console.log(this.name)
}

function EighthGrader(name) {
this.name = name
this.grade = 8
}

EighthGrader.prototype = Object.create(Student.prototype)

const carl = new EighthGrader("carl")
carl.sayName() // console.logs "carl"
carl.grade // 8

### Declaración de método de objeto javascript en función de constructor frente a prototipo

Puedo poner la declaración del método Bark en la función constructora:

- let Dog = function(name) {
  this.Name = name;
  this.Bark = function() {
  alert(this.Name + " bark");
  };
  }

O podría poner como método en el objeto prototipo:

- var Dog = function(name) {
  this.Name = name;
  }

- Dog.prototype.Bark = function() {
  alert(this.Name + " bark");
  };

[Si sus métodos no usan variables locales definidas en su constructor (su ejemplo no lo hace), entonces use el enfoque de prototipo.][si está creando muchos mensajes de correo dogelectrónico, utilice el enfoque de prototipo. de esta forma, todas las "instancias" (es decir, los objetos creados por el dogconstructor) compartirán un conjunto de funciones, mientras que en la forma del constructor, se crea un nuevo conjunto de funciones cada vez que dogse llama al constructor, utilizando más memoria.]
[Si está creando una pequeña cantidad de Dogsy encuentra que el uso de variables "privadas" locales en su constructor mejora su código, este puede ser el mejor enfoque. Utilice su criterio y realice algunas evaluaciones comparativas si el rendimiento o el consumo de memoria son preocupaciones importantes.]

var Dog = function(name) {
this.name = name;

var barkCount = 0;

this.bark = function() {
barkCount++;
alert(this.name + " bark");
};

this.getBarkCount = function() {
alert(this.name + " has barked " + barkCount + " times");
};

};

Dog.prototype.wagTail = function() {
alert(this.name + " wagging tail");
};

var dog = new Dog("Dave");
dog.bark();
dog.bark();
dog.getBarkCount();
dog.wagTail();

## FUNCIONES DE FÁBRICA Y PATRÓN DEL MÓDULO

El método constructor a veces puede dar errores que no son fáciles de rastrear.
Puedo ocurrir que **si no utilizamos la palabra "new"**, la función de constructor no va funcionar como debería y tampoco va a lanzar un error.
Si estamos escribiendo algún tipo de juego, probablemente querremos objetos para describir a nuestros jugadores y encapsular todas las cosas que nuestros jugadores pueden hacer (¡funciones!).

EJEMPLO:

```

const Player = (name, level) => {
let health = level \* 2;
const getLevel = () => level;
const getName = () => name;
const die = () => {
// uh oh
};
const damage = x => {
health -= x;
if (health <= 0) {
die();
}
};

const attack = enemy => {
if (level < enemy.getLevel()) {
damage(1);
console.log(`${enemy.getName()} has damaged ${name}`);
}
if (level >= enemy.getLevel()) {
enemy.damage(1);
console.log(`${name} has damaged ${enemy.getName()}`);
}
};

return {attack, damage, getLevel, getName}
};

const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);
jimmie.attack(badGuy);

```

### Introducción a las Funciones de Fábrica

Son similares a los constructores, pero con la diferencia de que en las funciones de fábrica se devuelve directamente un objeto al llamar la función y **no es necesaria la palabra "new".**

> Creando objetos con Funciones de Fábrica

```

const personFactory = (name, age) => {
const sayHello = () => console.log('hello!');
return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);
console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

```

> Creando objetos con la Función Constructor

```

const Person = function(name, age) {
this.sayHello = () => console.log('hello!');
this.name = name;
this.age = age;
};

const jeff = new Person('jeff', 27);

```

#### Taquigrafía de Objetos

> Si está creando un objeto en el que se refiere a una variable que tiene exactamente el mismo nombre que la propiedad del objeto que está creando, puede condensarlo así:

- return {name, age, sayHello} en lugar de: return {name: name, age: age, sayHello: sayHello}

```

const name = "Maynard"
const color = "red"
const number = 34
const food = "rice"

// logging all of these variables might be a useful thing to do,
// but doing it like this can be somewhat confusing.
console.log(name, color, number, food) // Maynard red 34 rice

// if you simply turn them into an object with brackets,
// the output is much easier to decipher:
console.log({name, color, number, food})
// { name: 'Maynard', color: 'red', number: 34, food: 'rice' }

```

#### Scope and Closure

El alcance se refiere al contexto actual del código. El alcance puede ser definido globalmente o localmente.

##### Alcance Global

Al definir una variable en Javascipt sin entrar en una función, estamos definiendo una variable global. Lo necesita para crear módulos / API que sean accesibles en todos los ámbitos, debe usarlo para su ventaja y no causar problemas.

// global scope
let name = 'Todd';

##### Alcance Local

Se refiere a cualquier alcance definido más allá del alcance global.
Si defino una función y creo variables dentro de ella, esas variables se vuelven de ámbito local.

// Scope A: Global scope out here
let myFunction = function () {
// Scope B: Local scope in here
};

NOTE: Al definir una variable dentro de una función, significa que estamos declarando un alcance local y esa variable no va a poder ser leída fuera de la función definida:

let myFunction = function () {
let name = 'Todd';
console.log(name); // Todd
};
// Uncaught ReferenceError: name is not defined
console.log(name);

##### Alcande de Función

Todos los alcances en JavaScript se crean solo con Function Scope, no se crean mediante bucles for o while ni declaraciones de expresión como if o switch. Nuevas funciones = nuevo alcance, esa es la regla. Un ejemplo simple para demostrar la creación de este alcance:

// Scope A
var myFunction = function () {
// Scope B
var myOtherFunction = function () {
// Scope C
};
};

##### Alcance léxico

Siempre que vea una función dentro de otra función, la función interna tiene acceso al alcance en la función externa, esto se llama Alcance léxico o Cierre, también conocido como Alcance estático. La forma más sencilla de demostrarlo de nuevo:

// Scope A
var myFunction = function () {
// Scope B
var name = 'Todd'; // defined in Scope B
var myOtherFunction = function () {
// Scope C: `name` is accessible here!
};
};

Notará que myOtherFunction no se llama aquí, simplemente se define. Su orden de llamada también tiene efecto sobre cómo reaccionan las variables de ámbito, aquí definí mi función y la llamé en otra declaración de consola:

let myFunction = function () {
let name = 'Todd';
let myOtherFunction = function () {
console.log('My name is ' + name);
};
console.log(name);
myOtherFunction(); // call function
};

// Will then log out:
// `Todd`
// `My name is Todd`

> Siempre puedo devolver una referencia al nombre, pero nunca la variable en sí.

// name = undefined
let scope1 = function () {
// name = undefined
let scope2 = function () {
// name = undefined
let scope3 = function () {
let name = 'Todd'; // locally scoped
};
};
};

##### Cadena de alcance

Al resolver una variable, JavaScript comienza en el ámbito más interno y busca hacia afuera hasta que encuentra la variable / objeto / función que estaba buscando.

##### Closures

El concepto de closures que hemos utilizado aquí hace que nuestro alcance dentro de sayHello sea inaccesible para el alcance público. Llamar a la función por sí sola no hará nada, ya que devuelve una función:

let sayHello = function (name) {
let text = 'Hello, ' + name;
return function () {
console.log(text);
};
};

NOTE: No se puede acceder a ninguna de las funciones creadas dentro de FactoryFunction fuera de la función en sí, por lo que las líneas 9, 10 y 11 fallan. La única forma de usar cualquiera de esas funciones es devolverlas en el objeto (ver línea 4), por lo que podemos llamar a taco.printString () pero no a taco.capitalizeString (). El gran problema aquí es que aunque no podemos acceder a la función capitalizeString (), printString () sí puede. Eso es closures.

const FactoryFunction = string => {
const capitalizeString = () => string.toUpperCase();
const printString = () => console.log(`----${capitalizeString()}----`);
return { printString };
};

const taco = FactoryFunction('taco');

printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"

NOTE: El concepto de cierre es la idea de que las funciones conservan su alcance incluso si se pasan y se llaman fuera de ese alcance. En este caso, printString tiene acceso a todo dentro de FactoryFunction, incluso si se llama fuera de esa función.

const counterCreator = () => {
let count = 0;
return () => {
console.log(count);
count++;
};
};

const counter = counterCreator();

counter(); // 0
counter(); // 1
counter(); // 2
counter(); // 3

> Como arriba, el contador de funciones es un cierre. Tiene acceso a la variable count y puede imprimirla e incrementarla, pero nuestro programa no tiene otra forma de acceder a esa variable.

##### Alcance y "this"

De forma predeterminada, esto se refiere al objeto más externo más global, la ventana.

let myFunction = function () {
console.log(this); // this = global, [object Window]
};
myFunction();

let myObject = {};
myObject.myMethod = function () {
console.log(this); // this = Object { myObject }
};

let nav = document.querySelector('.nav'); // <nav class="nav">
let toggleNav = function () {
console.log(this); // this = <nav> element
};
nav.add

También hay problemas con los que nos encontramos al tratar con el valor this, por ejemplo, si hago esto, incluso dentro de la misma función, se puede cambiar el alcance y se puede cambiar el valor this:

let nav = document.querySelector('.nav'); // <nav class="nav">
let toggleNav = function () {
console.log(this); // <nav> element
setTimeout(function () {
console.log(this); // [object Window]
}, 1000);
};
nav.addEventListener('click', toggleNav, false);

##### Cambiar el alcance con .call (), .apply () y .bind ()

###### .call () y .apply ()

Le permiten pasar un alcance a una función, **que vincula el this correcto**.
Manipulemos la función para que nuestro "this" sea cada elemento del arreglo:

```js
let links = document.querySelectorAll('nav li');
for (let i = 0; i < links.length; i++) {
  (function () {
    console.log(this);
  }.call(links[i]));
}
```

> Puede ver que estoy pasando el elemento actual en la iteración Array links[i], que cambia el alcance de la función para que el **this** se convierta en ese elemento iterado. Entonces podemos usar el this enlace si queremos. Podemos usar .call() o .apply() para cambiar el alcance, pero cualquier argumento adicional es donde los dos difieren:

> .call(scope, arg1, arg2, arg3) toma argumentos individuales, separados por comas, mientras que
> .apply(scope, [arg1, arg2]) toma una matriz de argumentos.

NOTE: Es importante recordar que usar .call()o .apply() realmente invoca su función, así que en lugar de hacer esto:

myFunction(); // invoke myFunction

Harás esto:

myFunction.call(scope); // invoke myFunction using .call()

###### .bind()

.bind() no invoca una función, simplemente vincula los valores antes de que se invoque la función.

// works
nav.addEventListener('click', toggleNav, false);

// will invoke the function immediately
nav.addEventListener('click', toggleNav(arg1, arg2), false);

NOTE: Pasamos los argumentos pero las funciones no se llaman.

nav.addEventListener('click', toggleNav.bind(scope, arg1, arg2), false);

La función no se invoca y el alcance se puede cambiar si es necesario, pero los argumentos están esperando a ser pasados.

##### Alcance Público y Alcance Privado

En JavaScript no existen los conceptos como tal de alcance público y privado.

Con el uso de Patrones de Módulo podemos crear alcances públicos y privados:

NOTE: Para crear un alcance privado podemos envolver a nuestra función dentro de otra:

```js
(function () {
  let myFunction = function () {
    // do some stuff here
  };
})();

myFunction(); // Uncaught ReferenceError: myFunction is not defined
```

> Cuándo queramos llamar a nuestra función, esta no tendrá alcance para ser mostrada.

NOTE: Para crear un alcance público podemos hacer uso de patrones de modulo:

```js
// define module
let Module = (function () {
  return {
    myMethod: function () {
      console.log('myMethod has been called.');
    },
  };
})();

// call module + methods
Module.myMethod();
```

Se puede obtener una referencia a nuestras funciones publicas con la palabra return:

```js
// define module
let Module = (function () {
  return {
    myMethod: function () {},
    someOtherMethod: function () {},
  };
})();

// call module + methods
Module.myMethod();
Module.someOtherMethod();
```

NOTE: Las funciones que ayudan a nuestro código a funcionar no necesitan estar en el alcance global, solo lo hacen las llamadas a la API, cosas a las que se debe acceder globalmente para que funcionen.
Así es como podemos crear un ámbito privado, al no devolver funciones:

```js
let Module = (function () {
  let privateMethod = function () {};
  return {
    publicMethod: function () {},
  };
})();
```

Esto significa que publicMethod se puede llamar, pero privateMethod no se puede, ya que tiene un alcance privado.

NOTE: Cualquier cosa en el mismo alcance tiene acceso a cualquier cosa en el mismo alcance, incluso después de que se haya devuelto la función. Lo que significa que nuestros publicmétodos tienen acceso a los nuestros private, por lo que aún pueden interactuar pero son inaccesibles en el ámbito global.

let Module = (function () {
let privateMethod = function () {
};
return {
publicMethod: function () {
// has access to `privateMethod`, we can call it:
// privateMethod();
}
};
})(

Ejemplo de cómo devolver un objeto con uso de alcance público y privado:

let Module = (function () {
let myModule = {};
let privateMethod = function () {

};
myModule.publicMethod = function () {

};
myModule.anotherPublicMethod = function () {

};
return myModule; // returns the Object with public methods
})();

// usage
Module.publicMethod();

REVIEW: Para diferenciar entre métodos privados y públicos es mejor utilizar un "\_"

let Module = (function () {
let \_privateMethod = function () {

};
let publicMethod = function () {

};
})()

#### Funciones y Variables Privadas

Las funciones privadas son funciones que se utilizan en el funcionamiento de nuestros objetos y que no están destinadas a utilizarse en ningún otro lugar de nuestro programa.

NOTE: Funciones Privadas: Guardarlos y hacerlos inaccesibles hace que su código sea más fácil de refactorizar, más fácil de probar y más fácil de razonar para usted y cualquier otra persona que quiera usar sus objetos.

### HERENCIA CON FUNCIONES DE FÁBRICA

Ejemplo rápido:

const Person = (name) => {
const sayName = () => console.log(`my name is ${name}`)
return {sayName}
}

const Nerd = (name) => {
// Simplemente cree una persona y extraiga la función sayName con la sintaxis de asignación de desestructuración.
const {sayName} = Person(name)
const doSomethingNerdy = () => console.log('nerd stuff')
return {sayName, doSomethingNerdy}
}

const jeff = Nerd('jeff')

jeff.sayName() //my name is jeff
jeff.doSomethingNerdy() // nerd stuff

Este patrón es excelente porque le permite elegir qué funciones desea incluir en su nuevo objeto.

Si desea continuar y agrupar TODO otro objeto, ciertamente puede hacerlo también con Object.assign.

const Nerd = (name) => {
const prototype = Person(name)
const doSomethingNerdy = () => console.log('nerd stuff')
return Object.assign({}, prototype, {doSomethingNerdy})
}

#### TIPOS DE HERENCIA PROTOTIPAL

##### Delegación / Herencia diferencial

Un prototipo de delegado es un objeto que sirve como base para otro objeto. Cuando hereda de un prototipo delegado, el nuevo objeto obtiene una referencia al prototipo.
Cuando intenta acceder a una propiedad en el nuevo objeto, primero verifica las propias propiedades del objeto. Si no lo encuentra allí, verifica el `[[Prototype]]` , y así sucesivamente en la cadena del prototipo hasta que regrese a `Object.prototype` , que es el delegado raíz para la mayoría de los objetos.

> Utilizando funciones de fábrica

const proto = {
hello () {
return `Hello, my name is ${ this.name }`;
}
};

const greeter = (name) => Object.assign(Object.create(proto), {
name
});

const george = greeter('george');

const msg = george.hello();

console.log(msg); //"Hello, my name is george"

> Utilizando el método constructor

function Greeter (name) {
this.name = name || 'John Doe';
}

Greeter.prototype.hello = function hello () {
return 'Hello, my name is ' + this.name;
}

let george = new Greeter('George');

let msg = george.hello();

console.log(msg); // Hello, my name is George

##### Herencia Concatenativa / Clonación / Mixins

La herencia concatenativa es el proceso de copiar las propiedades de un objeto a otro, sin retener una referencia entre los dos objetos. Se basa en la función de extensión de objetos dinámicos de JavaScript.
La clonación es una excelente manera de almacenar el estado predeterminado de los objetos: este proceso se logra comúnmente usando Object.assign ().

const proto = {
hello: function hello() {
return `Hello, my name is ${ this.name }`;
}
};

const george = Object.assign({}, proto, {name: 'George'});

const msg = george.hello();

console.log(msg); // Hello, my name is George

> Puede convertir cualquier objeto en un emisor de eventos mezclando un prototipo `EventEmitter3` :

import Events from 'eventemitter3';

const object = {};

Object.assign(object, Events.prototype);

object.on('event', payload => console.log(payload));

object.emit('event', 'some data'); // 'some data'

> Podemos usar esto para crear un modelo de emisión de eventos al estilo Backbone:

import Events from 'eventemitter3';

const modelMixin = Object.assign({
attrs: {},
set (name, value) {
this.attrs[name] = value;

this.emit('change', {
prop: name,
value: value
});

},

get (name) {
return this.attrs[name];
}
}, Events.prototype);

const george = { name: 'george' };
const model = Object.assign(george, modelMixin);

model.on('change', data => console.log(data));

model.set('name', 'Sam');
/_
{
prop: 'name',
value: 'Sam'
}
_/

##### Herencia Funcional

La herencia funcional hace uso de una función de fábrica y luego agrega nuevas propiedades usando la herencia concateativa.
NOTE: Las funciones creadas con el propósito de ampliar objetos existentes se denominan comúnmente mixins funcionales.
La principal ventaja de usar funciones para la extensión es que le permite usar el cierre de la función para encapsular datos privados. En otras palabras, puede hacer cumplir el estado privado.

import Events from 'eventemitter3';

const rawMixin = function () {
const attrs = {};

return Object.assign(this, {
set (name, value) {
attrs[name] = value;

this.emit('change', {
prop: name,
value: value
});
},

get (name) {
return attrs[name];
}

}, Events.prototype);
};

const mixinModel = (target) => rawMixin.call(target);

const george = { name: 'george' };
const model = mixinModel(george);

model.on('change', data => console.log(data));

model.set('name', 'Sam');
/_
{
prop: 'name',
value: 'Sam'
}
_/

##### Herencia de Clase

Crea relaciones es-a con taxonomías restrictivas, todas las cuales eventualmente son incorrectas para nuevos casos de uso. Pero resulta que, por lo general, empleamos la herencia para las relaciones tiene-a , usa-a o puedo hacer.

¿Quieres algo que pueda hacer retraso, distorsión sÚtil y una voz de robot?

SOLAMENTE CONECTALOS TODOS:

efecto constante = componer (retardo, distorsión, voz automática); // ¡Sigue rockeando!

¿Cuándo querría usar la herencia de clases? Para mí, la respuesta es simple: "Nunca".

FIXME: La herencia en JavaScript es tan fácil que confunde a las personas que esperan que requiera un esfuerzo. Para hacerlo más difícil, agregamos "clase".

### MODULE PATTERN

Un módulo es una construcción algo similar a una clase singleton. Tiene una sola instancia y expone a sus miembros, pero no tiene ningún tipo de estado interno.
Me gusta tratar los módulos como entidades cerradas. Es decir, residen dentro de sí mismos y no se necesita nada más para que existan. Pero a veces es posible que desee trabajar con, por ejemplo, DOM o un objeto global de ventana.
Para lograr eso, el módulo puede tener dependencias. Intentemos escribir una función que escriba un mensaje en nuestro elemento HTML solicitado.

const Formatter = (function() {
const log = (message) => console.log(`[${Date.now()}] Logger: ${message}`);

const makeUppercase = (text) => {
log("Making uppercase");
return text.toUpperCase();
};

const writeToDOM = (selector, message) => {
document.querySelector(selector).innerHTML = message;
}

return {
makeUppercase,
writeToDOM,
}
})();

Formatter.writeToDOM("#target", "Hi there");

#### ¿Cómo crear un Módulo?

Los cierres anónimos son solo funciones que envuelven nuestro código y crean un ámbito cerrado a su alrededor. Los cierres ayudan a mantener cualquier estado o privacidad dentro de esa función. Los cierres son una de las mejores y más poderosas características de JavaScript.

(function() {
'use strict';
// Your code here
// All function and variables are scoped to this function
})();

Son muy similares a las funciones de fábrica y difieren en la forma de su creación:

EJEMPLO DE MODULE:

const calculator = (() => {
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a \* b;
const div = (a, b) => a / b;
return {
add,
sub,
mul,
div,
};
})();

calculator.add(3,5) // 8
calculator.sub(6,2) // 4
calculator.mul(14,5534) // 77476

NOTE: En lugar de crear una fábrica que podamos usar una y otra vez para crear múltiples objetos, el patrón del módulo envuelve la fábrica en un IIFE (Expresión de función inmediatamente invocada).

Los módulos se usan comúnmente como objetos de estilo singleton donde solo existe una instancia.
El patrón de módulo es ideal para servicios y pruebas / TDD.

#### Exportar un Módulo

Usamos una variable para almacenar nuestro módulo que lo utilizaremos después.

let myModule = (function() {
'use strict';

})();

Para hacer nuestras funciones públicas podemos utilizar "return" para hacerlo:

let myModule = (function() {
'use strict';

return {
publicMethod: function() {
console.log('Hello World!');
}
};
})();

myModule.publicMethod(); // outputs 'Hello World'

#### Propiedades y métodos privados

Podemos hacer propiedades y métodos privados al utilizar cierres:

let myModule = (function() {
'use strict';

let \_privateProperty = 'Hello World';

function \_privateMethod() {
console.log(\_privateProperty);
}

return {
publicMethod: function() {
\_privateMethod();
}
};
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.\_privateProperty); // is undefined protected by the module closure
myModule.\_privateMethod(); // is TypeError protected by the module closure

#### Patrón de módulo revelador

Usando la declaración de retorno, podemos devolver un objeto literal que 'revela' solo los métodos o propiedades que queremos que estén disponibles públicamente.

let myModule = (function() {
'use strict';

let \_privateProperty = 'Hello World';
let publicProperty = 'I am a public property';

function \_privateMethod() {
console.log(\_privateProperty);
}

function publicMethod() {
\_privateMethod();
}

return {
publicMethod: publicMethod,
publicProperty: publicProperty
};
})();

myModule.publicMethod(); // outputs 'Hello World'
console.log(myModule.publicProperty); // outputs 'I am a public property'
console.log(myModule.\_privateProperty); // is undefined protected by the module closure
myModule.\_privateMethod(); // is TypeError protected by the module closure

#### Expresión de función inmediatamente invocada

La función se evalúa y luego se invoca inmediatamente.
Escriba una función, envuélvala entre paréntesis y luego llame inmediatamente a la función agregando () al final de la misma.

(function () {
// logic here
})();

El patrón se denomina expresión de función invocada inmediatamente, o IIFE (pronunciado "dudoso").
En JavaScript, las funciones se pueden crear mediante una DECLARACIÓN DE FUNCIÓN o una EXPRESIÓN DE FUNCIÓN. Una declaración de función es la forma "normal" de crear una función con nombre.

// DECLARACIÓN DE FUNCIÓN*FORMA COMÚN
function myFunction () { /* logic here \_/ }

Por otro lado, si está asignando una función a una variable o propiedad, está tratando con una expresión de función.

// EXPRESIÓN DE FUNCIÓN
let myFunction = function () { /_ logic here _/ };

// Assignment of a function expression to a property
let myObj = {
myFunction: function () { /_ logic here _/ }
};

Una función creada en el contexto de una expresión también es una expresión de función. Por ejemplo:

// Anything within the parentheses is part of an expression
(function () { /_ logic here _/ });

// Anything after the not operator is part of an expression
!function () { /_ logic here _/ };

La clave de las expresiones de JavaScript es que devuelven valores. En los dos casos anteriores, el valor de retorno de la expresión es la función.

Eso significa que si queremos invocar la expresión de la función de inmediato, solo necesitamos abordar un par de paréntesis al final. Lo que nos devuelve al primer fragmento de código que vimos.

(function () {
// logic here
})();

NOTE: La razón principal para utilizar un IIFE es obtener la privacidad de los datos. Debido a que let de JavaScript aplica variables a su función contenedora, el mundo exterior no puede acceder a ninguna variable declarada dentro del IIFE.

(function () {
let foo = "bar";

// Outputs: "bar"
console.log(foo);

})();

// ReferenceError: foo is not defined
console.log(foo);

> Se puede acceder a lo que hace la función al invocarla.

function myImmediateFunction () {
let foo = "bar";

// Outputs: "bar"
console.log(foo);

}

myImmediateFunction();

// ReferenceError: foo is not defined
console.log(foo);

> Vale la pena señalar que también puede pasar argumentos fácilmente al IIFE.

let foo = "foo";

(function (innerFoo) {
// Outputs: "foo"
console.log(innerFoo);
})(foo);

NOTE: El patrón de módulo no es una fórmula mágica para agregar reutilización de código a su JavaScript. El uso del patrón de módulo con herencia prototípica o clases de ES6 puede brindarle una amplia gama de patrones de diseño con diferentes pros y contras.

## Clases

Las clases son prospectos para crear objetos.
Encapsulan datos con código para trabajar con esos datos.
Una clase no puede ser redefinida.

Para definir una clase en Javascript:

> NOTE: Las clases en Javascript tienen un método constructor que sirve para inicializar valores. Es muy similar al método inicializador en Ruby.
> TODO: Siempre se debe inicializar primero una clase y luego tratar de acceder a ella, caso contrario, resultaría un error.

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}

La sintaxis de una clase en Javascript es:

class MyClass {
prop = value; // property

constructor(...) { // constructor
// ...
}

method(...) {} // method

get something(...) {} // getter method
set something(...) {} // setter method

[Symbol.iterator]() {} // method with computed name (symbol here)
// ...
}

class MyClass { > Pascal Method para escribir
// class methods
constructor() { ... }
method1() { ... }
method2() { ... }
method3() { ... }
...
}

> Se puede usar new MyClass() para crear nuevos objetos con los métodos de la clase MyClass

Ejemplo:

class User {

constructor(name) {
this.name = name;
}

sayHi() {
alert(this.name);
}

}

// Uso:
let user = new User("John");
user.sayHi(); // 'John'

NOTE: ¡Sin comas entre los métodos de clase!

- Un error común para los desarrolladores novatos es poner una coma entre los métodos de clase, lo que resultaría en un error de sintaxis. La notación aquí no debe confundirse con los objetos literales.
  Dentro de la clase, no se requieren comas.

- NOTE: En Javascript una clase es un tipo de función

class User {

constructor(name) {
this.name = name;
}

sayHi() {
alert(this.name);
}

}

// proof: User is a function
alert(typeof User); // function

Lo que realmente hace la construcción de la clase User {...} es:

- Crea una función denominada User, que se convierte en el resultado de la declaración de la clase. El código de la función se toma del método constructor (se asume que está vacío si no escribimos dicho método).
- Almacena métodos de clase, como sayHi, en User.prototype.
- Después de que se crea un nuevo objeto User, cuando llamamos a su método, se toma del prototipo. Entonces el objeto tiene acceso a métodos de clase.

Ejemplo:

class User {

constructor(name) {
this.name = name;
}

sayHi() {
alert(this.name);
}

}

// class is a function
alert(typeof User); // function

// ...or, more precisely, the constructor method
alert(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
alert(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

### Expresión de Clase

Al igual que las expresiones de función, las clases tienen sus propias expresiones:

let User = class {

sayHi() {
alert("Hello");
}

};

// sin nombre
let Rectangle = class {

constructor(height, width) {
this.height = height;
this.width = width;
}

};

console.log(Rectangle.name);
// output: "Rectangle"

// nombre
let Rectangle = class Rectangle2 {

constructor(height, width) {
this.height = height;
this.width = width;
}

};

console.log(Rectangle.name);
// output: "Rectangle2"

> Incluso podemos hacer clases dinámicamente "bajo demanda", como esta:

function makeClass(phrase) {

// declare a class and return it
return class {

sayHi() {
alert(phrase);
}

};
}

// Create a new class
let User = makeClass("Hello");

new User().sayHi(); // Hello

### GETTERS and SETTERS

NOTE: Una función que obtiene un valor de una propiedad se llama getter y una que establece el valor de una propiedad se llama setter.

Ejemplo de uso:

let persona = {

nombre: 'Yeison',
apellido: 'Daza',

get nombreCompleto() {
return `${nombre} ${apellido}`
},

set nombreCompleto(nom) {
const palabras = nom.split(' ');
this.nombre = palabras[0] || '';
this.apellido = palabras[1] || '';
}

}

persona.nombreCompleto = 'Camilo Sanchez'

console.log(persona.nombre); //Camilo
console.log(persona.apellido); //sanchez

UN GETTER SIRVE PARA OBTENER UNA PROPIEDAD Y UN SETTER SIRVE PARA ESTABLECER UNA PROPIEDAD:

get nombreCompleto() { => Obtenemos el nombre completo al retornar explícitamente el nombre y el apellido
return `${nombre} ${apellido}`
},

set nombreCompleto(nom) { => Asignamos o establecemos el nombre y el apellido
const palabras = nom.split(' ');
this.nombre = palabras[0] || '';
this.apellido = palabras[1] || '';
}

class User {

constructor(name) {
// invokes the setter
this.name = name;
}

get name() {
return this.\_name;
}

set name(value) {

if (value.length < 4) {
alert("Name is too short.");
return;
}

this.\_name = value;
}

}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.

### Computed Names []

class User {

['say' + 'Hi']() {
alert("Hello");
}

}

new User().sayHi();

### Campos de Clase

“Campos de clase” es una sintaxis que permite agregar propiedades.

class User {
name = "John";

sayHi() {
alert(`Hello, ${this.name}!`);
}

}

new User().sayHi(); // Hello, John!

> La diferencia importante de los campos de clase es que se establecen en objetos individuales, no en User.prototype:

class User {
name = "John";
}

let user = new User();
alert(user.name); // John
alert(User.prototype.name); // undefined

#### Hacer métodos enlazados con campos de clase

Si un método de objeto se pasa y se llama en otro contexto, ya no será una referencia a su objeto.

class Button {

constructor(value) {
this.value = value;
}

click() {
alert(this.value);
}

}

let button = new Button("hello");

setTimeout(button.click, 1000); // undefined

Para arreglar el error podríamos hacer los siguiente:

> Pass a wrapper-function, such as setTimeout(() => button.click(), 1000).

class Button {

constructor(value) {
this.value = value;
}

click = () => {
alert(this.value);
}

}

let button = new Button("hello");

setTimeout(button.click, 1000); // hello

### Definiciones de método y cuerpo de clase

Strict mode > El cuerpo de una clase está escrita en "strict mode"

Constructor > Es un método especial para crear e inicializar un objeto creado con una clase.

NOTE: Solo puede haber un método especial con el nombre "constructor" en una clase. Se lanzará un SyntaxError si la clase contiene más de una ocurrencia de un método constructor.

Un constructor puede usar la palabra clave super para llamar al constructor de la superclase.

> Declaraciones de campo público

class Rectangle {

height = 0;
width;

constructor(height, width) {
this.height = height;
this.width = width;
}

}

> Declaraciones de campo privado

class Rectangle {

#height = 0;
#width;

constructor(height, width) {
this.#height = height;
this.#width = width;
}

}

- Los campos privados solo se pueden declarar por adelantado en una declaración de campo.

### Métodos Prototipales

class Rectangle {

constructor(height, width) {
this.height = height;
this.width = width;
}

// Getter
get area() {
return this.calcArea();
}

// Method
calcArea() {
return this.height \* this.width;
}

}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

### Generador de Métodos

class Polygon {

constructor(...sides) {
this.sides = sides;
}

// Method
\*getSides() {
for(const side of this.sides){
yield side;
}
}

}

const pentagon = new Polygon(1,2,3,4,5);

console.log([...pentagon.getSides()]); // [1,2,3,4,5]

### Propiedad y Métodos Estáticos

La palabra clave 'static' define un método o propiedad estática para una clase.
Los miembros estáticos (propiedades y métodos) se llaman sin instanciar su clase y no se pueden llamar a través de una instancia de clase. Los métodos estáticos se utilizan a menudo para crear funciones para una aplicación, mientras que las propiedades estáticas son útiles para cachés, configuración fija o cualquier otro dato que no necesite replicar en todas las instancias.

class Point {

constructor(x, y) {
this.x = x;
this.y = y;
}

static displayName = "Point";

static distance(a, b) {
const dx = a.x - b.x;
const dy = a.y - b.y;

return Math.hypot(dx, dy);

}

}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.displayName; // undefined
p1.distance; // undefined
p2.displayName; // undefined
p2.distance; // undefined

console.log(Point.displayName); // "Point"
console.log(Point.distance(p1, p2)); // 7.0710678118654755

#### Vinculando this con prototipos y métodos estáticos

function Animal() { }

Animal.prototype.speak = function() {
return this;
}

Animal.eat = function() {
return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // global object (in non–strict mode)

let eat = Animal.eat;
eat(); // global object (in non-strict mode)

### Instanciando propiedades

Propiedad de un Rectángulo:

class Rectangle {

constructor(height, width) {
this.height = height;
this.width = width;
}

}

> Las propiedades de datos estáticos (del lado de la clase) y las propiedades de los datos del prototipo deben definirse fuera de la declaración ClassBody:

Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;

### Subclasificación con extend

La palabra clave extend se usa en declaraciones de clase o expresiones de clase para crear una clase como hijo de otra clase.

class Animal {

constructor(name) {
this.name = name;
}

speak() {
console.log(`${this.name} makes a noise.`);
}

}

class Dog extends Animal {

constructor(name) {
super(name); // call the super class constructor and pass in the name parameter
}

speak() {
console.log(`${this.name} barks.`);
}

}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

> Si hay un constructor presente en la subclase, primero debe llamar a super () antes de usar "this"

- También se pueden extender las "clases" tradicionales basadas en funciones:

function Animal (name) {
this.name = name;
}

Animal.prototype.speak = function () {
console.log(`${this.name} makes a noise.`);
}

class Dog extends Animal {
speak() {
console.log(`${this.name} barks.`);
}
}

let d = new Dog('Mitzie');
d.speak(); // Mitzie barks.

// For similar methods, the child's method takes precedence over parent's method

- NOTE: Tenga en cuenta que las clases no pueden extender objetos regulares (no construibles). Si desea heredar de un objeto normal, puede usar Object.setPrototypeOf ():

const Animal = {

speak() {
console.log(`${this.name} makes a noise.`);
}

};

class Dog {

constructor(name) {
this.name = name;
}

}

// Si no lo hace, obtendrá un TypeError cuando invoque a speak

Object.setPrototypeOf(Dog.prototype, Animal);

let d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.

### Especies

El patrón de especies le permite anular los constructores predeterminados.

Por ejemplo, al usar métodos como map () que devuelve el constructor predeterminado, desea que estos métodos devuelvan un objeto Array principal, en lugar del objeto MyArray. El símbolo Symbol.species le permite hacer esto:

```js
class MyArray extends Array {

// Sobrescribir especies en el constructor de matriz padre
static get [Symbol.species]() { return Array; }

}

let a = new MyArray(1,2,3);
let mapped = a.map(x => x \* x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array); // true
```

### Llamadas de superclase con SUPER

TODO:

> Superclase: la clase cuyas características se heredan se conoce como superclase (o una clase base o una clase principal).
> Subclase: la clase que hereda la otra clase se conoce como subclase (o una clase derivada, clase extendida o clase hija).

La palabra clave SUPER se utiliza para llamar a los métodos correspondientes de SUPERCLASE. Ésta es una ventaja sobre la herencia
basada en prototipos.

class Cat {

constructor(name) {
this.name = name;
}
ole.log(`${this.name} makes a noise.`);
}
speak() {
cons

}

class Lion extends Cat {

speak() {
super.speak();
console.log(`${this.name} roars.`);
}

}

let l = new Lion('Fuzzy');

l.speak();

// Fuzzy makes a noise.
// Fuzzy roars.

### Mix-ins

Las subclases abstractas o mezclas son plantillas para clases.

> Una clase ECMAScript solo puede tener una sola SUPERCLASE, por lo que la herencia múltiple de clases de herramientas, por ejemplo, no es posible. La funcionalidad debe ser proporcionada por la SUPERCLASE.

Una función con una SUPERCLASE como entrada y una SUBCLASE que extiende esa SUPERCLASE como salida se puede usar para implementar
mezclas en ECMAScript:

let calculatorMixin = Base => class extends Base {
calc() { }
};

let randomizerMixin = Base => class extends Base {
randomize() { }
};

Una clase que usa estos mix-ins se puede escribir así:

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

### Módulos

> En el campo del software una dependencia es una aplicación o una biblioteca requerida por otro programa para poder funcionar correctamente.

En los módulos existen 2 componentes "import" y "export".

NOTE: IMPORT

> La declaración de "import" estática se usa para importar enlaces en vivo de solo lectura que son exportados por otro módulo.

EJEMPLO:

// another JS file
import { functionOne } from './functionOne'

functionOne() //this should work as expected!

NOTE: EXPORT

> La declaración de "export" se utiliza al crear módulos JavaScript para exportar enlaces en vivo a funciones, objetos o valores primitivos del módulo para que puedan ser utilizados por otros programas con la declaración de importación. Los enlaces que se exportan aún se pueden modificar localmente; cuando se importan, aunque solo pueden ser leídos por el módulo de importación, el valor se actualiza cada vez que lo actualiza el módulo de exportación.

> Los módulos exportados están en modo estricto, ya sea que los declare como tales o no. La declaración de exportación no se puede utilizar en scripts incrustados.

EJEMPLO:

// a file called functionOne.js
const functionOne = () => console.log('FUNCTION ONE!')

export { functionOne }

TODO: Hay 2 maneras diferentes de exportar en nuestro código:

- Name export > Son útiles cuando se necesitan exportar múltiples valores. Durante el import, es obligatorio usar el mismo nombre que el correspondiente objeto.

- // exporta la función previamente declarada
  export { myFunction };
  // exporta una constante
  export const foo = Math.sqrt(2);

- Default export > Puede ser importado con cualquier nombre.

- export default k = 12; // en el archivo test.js
  import m from './test' // notese que tenemos la libertad de usar import m en lugar de import k, porque k era el export por defecto
  console.log(m); // escribirá 12

> Si desea exportar varias funciones, use exportaciones con nombre con este patrón:

const functionOne = () => 'ONE'
const functionTwo = () => 'TWO'

export {
functionOne,
functionTwo
}

Y para importar:

import {functionOne, functionTwo} from './myModule'

#### NPM

The node package manager is a command line tool that gives you access to a gigantic repository of plugins, libraries and tools.

> Los desarrolladores de código abierto de todos los continentes usan npm para compartir y tomar prestados paquetes, y muchas organizaciones también usan npm para administrar el desarrollo privado.

NPM consta de tres componentes distintos:

- El sitio web > Para descubrir paquetes, configurar perfiles y administrar otros aspectos de su experiencia npm.
- La interfaz de línea de comandos (CLI) > se ejecuta desde una terminal y es la forma en que la mayoría de los desarrolladores interactúan con npm.
- El registro > Es una gran base de datos pública de software JavaScript y la metainformación que la rodea.

##### Usos de NPM

Utilice npm para...

- Adapte paquetes de código para sus aplicaciones o incorpore paquetes tal como están.
- Descargue herramientas independientes que puede usar de inmediato.
- Ejecute paquetes sin descargar usando npx.
- Comparta código con cualquier usuario de npm, en cualquier lugar.
- Restrinja el código a desarrolladores específicos.
- Cree organizaciones para coordinar el mantenimiento, la codificación y los desarrolladores de paquetes.
- Forme equipos virtuales utilizando organizaciones.
- Administre múltiples versiones de código y dependencias de código.
- Actualice las aplicaciones fácilmente cuando se actualice el código subyacente.
- Descubra múltiples formas de resolver el mismo rompecabezas.
- Busque otros desarrolladores que estén trabajando en problemas y proyectos similares.

##### Instalación de un paquete sin ámbito

Un paquete sin ámbito significa que es público y cualquiera puede descargarlo:

NOTE: Para descargarlo hacemos uso de 'npm install <package_name>'

> Nota: Si no hay un archivo package.json en el directorio local, se instala la última versión del paquete. Si hay un archivo package.json, npm instala la última versión que cumple la regla semver declarada en package.json.

##### Instalación de un paquete público con ámbito

Se puede descargar por cualquiera siempre que se haga referencia al nombre del alcance durante la instalación:

NOTE: 'npm install @scope/package-name'

##### Instalación de un paquete privado

Solo lo pueden descargar aquellos que tengan acceso a este paquete.
Dado que los paquetes privados siempre tienen un alcance, debe hacer referencia al nombre del alcance durante la instalación:

NOTE: 'npm install @scope/private-package-name'

##### Prueba de la instalación del paquete

Para confirmar que npm install funcionó correctamente, en el directorio de su módulo, verifique que exista un directorio node_modules y que contenga un directorio para los paquetes que instaló:

ls node_modules

##### Instalación de un paquete con etiquetas dist

> Al igual que npm publish, npm install <package_name> utilizará la última etiqueta de forma predeterminada.

Para anular este comportamiento se puede utilizar:

- npm install <package_name>@<tag>

##### Creando un archivo package.json

Un archivo package.json:

- Enumera los paquetes de los que depende su proyecto
- Especifica las versiones de un paquete que su proyecto puede usar usando reglas de control de versiones semánticas
- Hace que su construcción sea reproducible y, por lo tanto, más fácil de compartir con otros desarrolladores

NOTE: Para que su paquete sea más fácil de encontrar en el sitio web de npm, le recomendamos que incluya una descripción personalizada en su archivo package.json.

###### Campos package.json

> Campos obligatorios de nombre y versión

Un archivo package.json debe contener los campos "nombre" y "versión".

El campo "nombre" contiene el nombre de su paquete, y debe estar en minúsculas y una palabra, y puede contener guiones y guiones bajos.

El campo "versión" debe tener el formato x.x.xy seguir las pautas de control de versiones semánticas.

> Campo de autor

Para añadir un campo de autor, el cuál es opcional, podemos utilizar:

NOTE: 'Your Name <email@example.com> (http://example.com)'

EJEMPLO:

{
"name": "my-awesome-package",
"version": "1.0.0"
}

##### Creando un nuevo archivo package.json

Puede crear un archivo package.json ejecutando un cuestionario CLI o creando un archivo package.json predeterminado.

###### Ejecución de un cuestionario CLI

Para crear un archivo package.json con los valores que proporcione, use el comando npm init.
Navegamos a la carpeta en donde queremos el archivo package.json y ejecutamos:

npm init

Luego de eso debemos completar el cuestionario.

###### Personalización del cuestionario package.json

1. En su directorio de inicio, cree un archivo llamado .npm-init.js.

2. Para agregar preguntas personalizadas, usando un editor de texto, agregue preguntas con la función de aviso:

- module.exports = prompt("what's your favorite flavor of ice cream, buddy?", "I LIKE THEM ALL");

3. Para agregar campos personalizados, con un editor de texto, agregue los campos deseados al archivo .npm-init.js:

- module.exports = {
  customField: 'Example custom field',
  otherCustomField: 'This example field is really cool'
  }

###### Creación de un archivo package.json predeterminado

Para crear un package.json predeterminado usando información extraída del directorio actual, use el comando npm init con la marca --yes o -y.

1. En la línea de comando, navegue hasta el directorio raíz de su paquete.

- cd /path/to/package

2. Run the following command:

- npm init --yes o npm init -y

EJEMPLO:

> npm init --yes
> Wrote to /home/monatheoctocat/my_package/package.json:

{
"name": "my_package",
"description": "",
"version": "1.0.0",
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1"
},
"repository": {
"type": "git",
"url": "https://github.com/monatheoctocat/my_package.git"
},
"keywords": [],
"author": "",
"license": "ISC",
"bugs": {
"url": "https://github.com/monatheoctocat/my_package/issues"
},
"homepage": "https://github.com/monatheoctocat/my_package"
}

> Valores predeterminados extraídos del directorio actual

- name: the current directory name
  version: always 1.0.0
  description: info from the README, or an empty string ""
  scripts: by default creates an empty test script
  keywords: empty
  author: empty
  license: ISC
  bugs: information from the current directory, if present
  homepage: information from the current directory, if present

> Establecer opciones de configuración para el comando init

- npm set init.author.email "example-user@example.com"
- npm set init.author.name "example_user"
- npm set init.license "MIT"

##### Transpilación de Código

Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el original.

#### WEBPACK

Es la herramienta de referencia en la web para agrupar y compilar código javascript.
Webpack es simplemente una herramienta para agrupar módulos. Se habla mucho en la red sobre lo difícil y complejo que es configurarlo y usarlo, pero por el momento nuestras necesidades son pocas y la configuración es bastante simple.
Es usado para configurar módulos de Javascript.

> Webpack es un paquete de módulos estáticos para aplicaciones JavaScript modernas. Cuando webpack procesa su aplicación, crea internamente un gráfico de dependencia que mapea cada módulo que su proyecto necesita y genera uno o más paquetes.

##### Beneficios de Webpack

- Si desea utilizar Sass para escribir su CSS, webpack puede compilarlo por usted.
- Webpack puede administrar sus imágenes y comprimirlas y optimizarlas para su uso en la web.
- Webpack puede minimizar y uglificar su código.

NOTE: Entry

Un punto de entrada indica qué módulo webpack debe usar para comenzar a construir su gráfico de dependencia interna

NOTE: Output

Le dice a webpack dónde emitir los paquetes que crea y cómo nombrar estos archivos.

NOTE: Loaders

De fábrica, webpack solo comprende archivos JavaScript y JSON. Los cargadores permiten que el paquete web procese otros tipos de archivos y los convierta en módulos válidos que su aplicación puede consumir y agregar al gráfico de dependencia.

En un nivel alto, los cargadores tienen dos propiedades en la configuración de su paquete web:

- La propiedad de prueba identifica qué archivo o archivos deben transformarse.
- La propiedad de uso indica qué cargador se debe usar para realizar la transformación.

const path = require('path');

module.exports = {
output: {
filename: 'my-first-webpack.bundle.js',
},
module: {
rules: [{ test: /\.txt$/, use: 'raw-loader' }],
},
};

NOTE: Plugins

Si bien los loaders se utilizan para transformar ciertos tipos de módulos, los complementos se pueden aprovechar para realizar una gama más amplia de tareas como optimización de paquetes, administración de activos e inyección de variables de entorno.

webpack.config.js

const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
module: {
rules: [{ test: /\.txt$/, use: 'raw-loader' }],
},
plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};

NOTE: Mode

Al establecer el parámetro de modo en desarrollo, producción o ninguno, puede habilitar las optimizaciones integradas del paquete web que corresponden a cada entorno. El valor predeterminado es producción.

module.exports = {
mode: 'production',
};

## Principios de Programación Orientada a Objetos

### Solid Principles

Es un acrónimo mnemónico que se refiere a una colección de principios de diseño que evolucionaron a partir de la comunidad orientada a objetos y fueron popularizados por los escritos de Robert C. Martin.

Estos principios son los siguientes:

- The Single Responsibility Principle
- The Open/Closed Principle
- The Liskov Substitution Principle
- The Interface Segregation Principle
- The Dependency Inversion Principle

#### Single Responsibility Principle

Establece que una clase (u objeto o módulo, etc) solo debe tener una responsabilidad. El principio dice:

- Una clase debe tener solo una razón para cambiar

> Un objeto debe tener un conjunto cohesivo de comportamientos, que en conjunto comprenden una sola responsabilidad que, si se cambia, requeriría la modificación de la definición del objeto.

> Esto no significa que un objeto solo pueda hacer una cosa, pero sí significa que todo lo que hace un objeto debe ser parte de una responsabilidad.

En lugar de esto:

function isGameOver() {

// game over logic goes here!

if (gameOver){
const gameOverDiv = document.createElement('div')
gameOverDiv.classList.add('game-over')
gameOverDiv.textContent = `${this.winner} won the game!`
document.body.appendChild(gameOverDiv)
}
}

Debe extraer toda la manipulación DOM en su propio módulo y usarlo así:

function isGameOver() {

// game over logic goes here!

if (gameOver){
DOMStuff.gameOver(this.winner)
}
}

De hecho, la función isGameOver no debería llamar a la función DOM de todos modos. Eso debería ir a otra parte (directamente en el bucle del juego).

NOTE: Un método / clase / componente dado debe tener una única razón para cambiar. De lo contrario, si un objeto está tratando de tener múltiples responsabilidades, cambiar un aspecto podría afectar a otro.

TODO: Do one thing and do it well

##### Pautas para implementar correctamente este principio

Si desea llamar a una función loginUserAndGetGroups (), probablemente esté incumpliendo el principio de responsabilidad única. Divida estas funciones en dos distintas.

Para cada función que cree, piense si hay una parte útil que pueda extraerse en una función aún más pequeña.

Una vez que haya creado su función, vuelva a examinarla. Vea cuántas funciones reutilizables puede extraer.

##### Estereotipos de roles de objetos

Son un conjunto de roles generales preestablecidos que ocurren comúnmente en las arquitecturas orientadas a objetos. Al establecer un conjunto de estereotipos de roles, los desarrolladores pueden proporcionarse un conjunto de plantillas que pueden usar a medida que avanzan en el ejercicio mental de descomponer el comportamiento en componentes cohesivos.

> Titular de la información: un objeto diseñado para conocer cierta información y proporcionar esa información a otros objetos.
> Estructurador: un objeto que mantiene relaciones entre objetos e información sobre esas relaciones.
> Proveedor de servicios: un objeto que realiza un trabajo específico y ofrece servicios a otros bajo demanda.
> Controlador: un objeto diseñado para tomar decisiones y controlar una tarea compleja.
> Coordinador: un objeto que no toma muchas decisiones pero, de forma mecánica o de memoria, delega el trabajo a otros objetos.
> Interfaz: un objeto que transforma información o solicitudes entre distintas partes de un sistema.

##### Loosely Coupled Objects

Todos nuestros objetos están pensados ​​para trabajar juntos para formar nuestra aplicación final, sin embargo, debe tener cuidado de asegurarse de que sus objetos individuales puedan estar solos tanto como sea posible.

> Los objetos estrechamente acoplados son objetos que dependen tanto unos de otros que quitar o cambiar uno significará que tendrá que cambiar por completo otro, un verdadero fastidio.

##### Ejemplo

El movimiento de artículos de producto en un carrito de compras:

function Product(id, description) {
this.getId = function() {
return id;
};
this.getDescription = function() {
return description;
};
}

function Cart(eventAggregator) {
var items = [];

    this.addItem = function(item) {
        items.push(item);
    };

}

var products = [
new Product(1, "Star Wars Lego Ship"),
new Product(2, "Barbie Doll"),
new Product(3, "Remote Control Airplane")],
cart = new Cart();

(function() {
function addToCart() {
var productId = $(this).attr('id');
var product = $.grep(products, function(x) {
return x.getId() == productId;
})[0];
cart.addItem(product);

        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id-cart', product.getId())
            .appendTo("#cart");
    }

    products.forEach(function(product) {
        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(addToCart)
            .appendTo("#products");
    });

})();
/pre>

Primero, tenemos un comportamiento definido para manejar el llenado del modelo Carrito cuando se hace doble clic en un artículo.

En segundo lugar, tenemos un comportamiento definido para agregar artículos a la vista del carrito cuando se hace doble clic en un artículo.

En tercer lugar, tenemos un comportamiento definido para poblar la vista de productos con el conjunto inicial de productos.

Dividamos estas tres responsabilidades en sus propios objetos:

function Event(name) {
this.\_handlers = [];
this.name = name;
}
Event.prototype.addHandler = function(handler) {
this.\_handlers.push(handler);
};
Event.prototype.removeHandler = function(handler) {
for (var i = 0; i < handlers.length; i++) {
if (this.\_handlers[i] == handler) {
this.\_handlers.splice(i, 1);
break;
}
}
};
Event.prototype.fire = function(eventArgs) {
this.\_handlers.forEach(function(h) {
h(eventArgs);
});
};

var eventAggregator = (function() {
var events = [];

    function getEvent(eventName) {
        return $.grep(events, function(event) {
            return event.name === eventName;
        })[0];
    }

    return {
        publish: function(eventName, eventArgs) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }
            event.fire(eventArgs);
        },

        subscribe: function(eventName, handler) {
            var event = getEvent(eventName);

            if (!event) {
                event = new Event(eventName);
                events.push(event);
            }

            event.addHandler(handler);
        }
    };

})();

function Cart() {
var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish("itemAdded", item);
    };

}

var cartView = (function() {
eventAggregator.subscribe("itemAdded", function(eventArgs) {
var newItem = $('<li></li>')
.html(eventArgs.getDescription())
.attr('id-cart', eventArgs.getId())
.appendTo("#cart");
});
})();

var cartController = (function(cart) {
eventAggregator.subscribe("productSelected", function(eventArgs) {
cart.addItem(eventArgs.product);
});
})(new Cart());

function Product(id, description) {
this.getId = function() {
return id;
};
this.getDescription = function() {
return description;
};
}

var products = [
new Product(1, "Star Wars Lego Ship"),
new Product(2, "Barbie Doll"),
new Product(3, "Remote Control Airplane")];

var productView = (function() {
function onProductSelected() {
var productId = $(this).attr('id');
var product = $.grep(products, function(x) {
return x.getId() == productId;
})[0];
eventAggregator.publish("productSelected", {
product: product
});
}

    products.forEach(function(product) {
        var newItem = $('<li></li>')
            .html(product.getDescription())
            .attr('id', product.getId())
            .dblclick(onProductSelected)
            .appendTo("#products");
    });

})();

En nuestro diseño revisado, eliminamos nuestra función anónima y la reemplazamos con objetos para coordinar cada uno de los conjuntos separados de responsabilidades.

NOTE: Supongamos que por cada usuario que inicia sesión, siempre necesita buscar su música favorita, sus programas de TV favoritos y su música favorita. Ahora sabemos que querrá dividirlos en funciones getShows (), getMovies () y getMusic ().

Pero, ¿qué pasa si esas funciones casi siempre se combinan? No queremos crear una función getShowsAndMoviesAndMusic (). Pero tampoco queremos llamar a las 3 funciones diferentes cada vez.

Para no repetirnos, está bien crear una función de envoltura que encapsule los 3. Yo la llamaría getUserMedia (). Esto no es una trampa siempre que getUserMedia () esté compuesto por 3 funciones puras independientes.

Usando esta lógica, runFacebook () es de hecho una función de responsabilidad única. Pero esto solo se aplica siempre que la implementación de la función runFacebook () subyacente también esté dividida correctamente.

#### Ejemplo 2

Por ejemplo, digamos que tenemos algunas formas y queremos sumar todas las áreas de las formas. Bueno, esto es bastante simple, ¿verdad?

const circle = (radius) => {
const proto = {
type: 'Circle',
//code
}
return Object.assign(Object.create(proto), {radius})
}
const square = (length) => {
const proto = {
type: 'Square',
//code
}
return Object.assign(Object.create(proto), {length})
}

Primero, creamos nuestras funciones de fábrica de formas y configuramos los parámetros requeridos.
A continuación, avanzamos creando la función de fábrica areaCalculator y luego escribimos nuestra lógica para resumir el área de todas las formas proporcionadas.

const areaCalculator = (s) => {
const proto = {
sum() {
// logic to sum
},
output () {
return `

<h1>
Sum of the areas of provided shapes:
${this.sum()}
</h1>
}
}
return Object.assign(Object.create(proto), {shapes: s})
}

Para usar la función de fábrica areaCalculator, simplemente llamamos a la función y pasamos una matriz de formas, y mostramos el resultado en la parte inferior de la página.

const shapes = [
circle(2),
square(5),
square(6)
]
const areas = areaCalculator(shapes)
console.log(areas.output())

Toda la lógica sería manejada por la función de fábrica areaCalculator, esto es lo que el "principio de responsabilidad única" desaprueba; la función de fábrica areaCalculator solo debe sumar las áreas de las formas proporcionadas, no debe importarle si el usuario quiere JSON o HTML.
Entonces, para solucionar esto, puede crear una función de fábrica SumCalculatorOutputter y usarla para manejar cualquier lógica que necesite sobre cómo se muestran las áreas de suma de todas las formas proporcionadas.

const shapes = [
circle(2),
square(5),
square(6)
]
const areas = areaCalculator(shapes)
const output = sumCalculatorOputter(areas)
console.log(output.JSON())
console.log(output.HAML())
console.log(output.HTML())
console.log(output.JADE())

#### Open-Closed Principle

Nuestros módulos de JavaScript deben estar abiertos a la extensión, pero cerrados a la modificación. Lo que significa que si alguien quiere ampliar el comportamiento de nuestro módulo, no necesitará modificar el código existente si no lo desea.

Si tengo que abrir el archivo JS de su módulo y hacer una modificación para extenderlo, no ha cumplido el principio de apertura cerrada.

NOTE: Abrir para extensión significa que deberíamos poder agregar nuevas funciones o componentes a la aplicación sin romper el código existente.
Cerrado por modificación significa que no deberíamos introducir cambios importantes en la funcionalidad existente, porque eso le obligaría a refactorizar una gran cantidad de código existente.

##### Ejemplo

let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
makeIceCream(flavor) {
if (iceCreamFlavors.indexOf(flavor) > -1) {
console.log('Great success. You now have ice cream.');
} else {
console.log('Epic fail. No ice cream for you.');
}
},
};
export default iceCreamMaker;

Como puede ver, no hay forma de agregar un sabor de helado sin editar la matriz iceCreamFlavor. Podemos cambiar eso fácilmente.

let iceCreamFlavors = ['chocolate', 'vanilla'];
let iceCreamMaker = {
makeIceCream(flavor) {
if (iceCreamFlavors.indexOf(flavor) > -1) {
console.log('Great success. You now have ice cream.');
} else {
console.log('Epic fail. No ice cream for you.');
}
},
addFlavor(flavor) {
iceCreamFlavors.push(flavor);
},
};
export default iceCreamMaker;

NOTE: Ahora podemos agregar deliciosos sabores de helado desde cualquier lugar de nuestro código sin abrir el archivo iceCreamMaker.js.

De hecho, JavaScript sólido.

#### Liskov Substitution Principle

Una subclase debe anular los métodos de la clase padre de una manera que no rompa la funcionalidad desde el punto de vista del cliente.

#### Interface Segregation Principle

Significa que no debe crear interfaces infladas. Dado que JavaScript no tiene interfaces, usaré un ejemplo más abstracto:

- Supongamos que su amigo Fred creó una nueva biblioteca de enrutadores HTML5. Te convenció de que su implementación es "Da Bomb" y deberías intentarlo.

Empiezas a jugar con él e intentas registrar tu primera ruta. Tu amigo Fred te dice que llames a registerRoute (routeName) y listo.

Pero Fred mintió.

Se olvidó de mencionar que también necesita que implementes onCloseBrowser () y handleIE8 () para cada ruta que registres.

Es posible que no desee implementar un comportamiento especial cuando se cierre el navegador. Y tiene la suerte de no necesitar ser compatible con IE8. No hay ninguna razón posible para que implemente esos comportamientos.

NOTE: La lección aquí es que cada vez que exponga un módulo para uso externo, asegúrese de que solo se requieran lo esencial y que el resto sea opcional.

De lo contrario, tus amigos te odiarán.

#### Dependency Inversion Principle

Se trata de traspasar el control de la función en sí al llamador de la función.

Fred está de nuevo. Esta vez, creó una implementación de emisor de eventos que es 0,0001 más rápida que cualquier otra cosa. Fred te insta a que lo pruebes.

No quieres ofender a Fred, así que inténtalo. Tu función se parece a esto:

function awesomeSauce(dispatcher) {
dispatcher.trigger('awesome/sauce');
}

function awesomeSauceListener(dispatcher) {
dispatcher.on('awesome/sauce', () => {
alert('awesome!');
});
}

Hay un problema. Los métodos de despachador de Fred se llaman emit () y listen ().

Podrías refactorizar tu código. Pero, ¿qué pasa si la implementación de Fred no es tan buena?

Te das cuenta de que no necesitas la implementación completa del objeto del despachador en cada función. Cambia su código para recibir solo los métodos relevantes para cada función.

function awesomeSauce(dispatch) {
dispatch('awesome/sauce');
}

function awesomeSauceListener(listen) {
listen('awesome/sauce', () => {
alert('awesome!');
});
}

Su código ahora no depende de ninguna implementación concreta del objeto emisor de un evento. Ahora puede cambiar libremente entre la implementación de Fred o utilizar una implementación simulada para realizar pruebas.

### Acoplamiento

El acoplamiento entre módulos se produce cuando un módulo hace referencia directamente a otro módulo. En otras palabras, un módulo "sabe" acerca de otro módulo.

#### Ejemplo

Estamos creando una aplicación web que permite a las personas realizar pedidos de comida a domicilio. Cada vez que el usuario realiza un pedido, la aplicación crea el pedido y envía una confirmación al usuario que incluye el tiempo estimado de entrega. El usuario puede comprobar el estado o cancelar el pedido en cualquier momento.

Un enfoque modular para implementar esto es crear un módulo que maneje los pedidos y otro que maneje las entregas.
El módulo de pedidos puede tener funciones para crear, leer, actualizar y eliminar pedidos (es decir, CRUD), mientras que el módulo de entregas puede tener funciones para estimar el tiempo de entrega, comenzar la entrega, completar la entrega, etc.
Veamos una implementación de ejemplo. Tenga en cuenta que el código de esta publicación está escrito principalmente para mayor claridad.

> Crear Orden

// Order module definition
var orderModule = (function() {
var module = {},
deliveries = myApp.deliveryModule;

    module.createOrder = function(orderData) {
        var orderResult;

        orderResult = // Code to actually create the order
        orderResult.estimatedDeliveryTime =    deliveries.getDeliveryTime(orderData);

        return orderResult;
    };

    return module;

})();

Los módulos de pedido y entrega que se muestran están estrechamente acoplados. Para que el módulo de pedido obtenga el tiempo de entrega estimado, debe "saber" sobre el módulo de entrega y llamar a la API del módulo correspondiente.

#### Patrones para reducir el acoplamiento

Hay formas de reducir el acoplamiento, lo que incluye muchos patrones que se utilizan para lograr un acoplamiento suelto entre módulos. Estos patrones son a menudo una variación del llamado patrón de observador. Una de estas variaciones se conoce como patrón Pub / Sub o Publish / Subscribe.
El observador se registra directamente con el emisor del evento para ser notificado cada vez que ocurre un evento determinado. La desventaja de este enfoque es que un observador "sabe" sobre el objeto emisor de eventos y qué observables o eventos observar a través del proceso de registro.

NOTE: OBJETOS LITERALES

const book = {
title: "Hippie",
author: "Paulo Coelho",
year: "2018"
}

Para acceder a una propiedad dentro del objeto book, podemos hacerlo mediante el uso de . o usando corchetes:

book.title = "Hippie"

book['title'] = "Hippie"

El método Object.create () crea un nuevo objeto, utilizando un objeto existente como prototipo. Esta es la sintaxis básica:

Object.create(proto, [propertiesObject])

proto is the prototype of the newly-created object. propertiesObject is an optional one.

Example:

const Book = {
summary : function() {
console.log(`${this.title} is written by ${this.author}.`)
}
}
const book1 = Object.create(Book);
book1.author = "Paulo Coelho";
book1.title = "Hippie";
console.log(book1.summary());

> Hippie is written by Paulo Coelho.

NOTE: La encapsulación significa ocultar información o datos. Se refiere a la capacidad del objeto para ejecutar su funcionalidad sin revelar ningún detalle de ejecución a la persona que llama. En otras palabras, la variable privada solo es visible para la función actual y no es accesible para el alcance global u otras funciones.

const Book = function(t, a) {
let title = t;
let author = a;

return {
summary : function() {
console.log(`${title} written by ${author}.`);
}
}
}
const book1 = new Book('Hippie', 'Paulo Coelho');
book1.summary();

> Hippie written by Paulo Coelho.

NOTE: La abstracción significa la ocultación de la implementación. Es una forma de ocultar los detalles de implementación y mostrar solo las características esenciales a la persona que llama. En otras palabras, oculta detalles irrelevantes y muestra solo lo que es necesario para el mundo exterior. La falta de abstracción conducirá a problemas de mantenimiento del código.

const Book = function(getTitle, getAuthor) {
// Private variables / properties
let title = getTitle;
let author = getAuthor;
// Public method
this.giveTitle = function() {
return title;
}

// Private method
const summary = function() {
return `${title} written by ${author}.`
}
// Public method that has access to private method.
this.giveSummary = function() {
return summary()
}
}
const book1 = new Book('Hippie', 'Paulo Coelho');
book1.giveTitle();

> "Hippie"
> book1.summary();
> Uncaught TypeError: book1.summary is not a function
> book1.giveSummary();
> "Hippie written by Paulo Coelho."

NOTE: Herencia con prototipos

let Corebook = function(title) {
this.title = title
}
Corebook.prototype.title = function() {
console.log(`name of the book is ${this.title}`);
}
Corebook.prototype.summary = function(author) {
console.log(`${this.title} is written by ${this.author}`);
}
let Book = function(title, author) {
Corebook.call(this, title, author)
}
Book.prototype = Object.create(Corebook.prototype);
let book1 = new Book('The Alchemist', 'Paulo Coelho');
book1.title();

> name of the book is The Alchemist
> book1.summary();
> The Alchemist is written by Paulo Coelho

NOTE: La capacidad de llamar al mismo método en diferentes objetos y hacer que cada uno responda a su manera se llama polimorfismo.

let book1 = function () {}
book1.prototype.summary = function() {
return "summary of book1"
}
let book2 = function() {}
book2.prototype = Object.create(book1.prototype);
book2.prototype.summary = function() {
return "summary of book2"
}
let book3 = function() {}
book3.prototype = Object.create(book1.prototype);
book3.prototype.summary = function() {
return "summary of book3"
}

var books = [new book1(), new book2(), new book3()];
books.forEach(function(book){
console.log(book.summary());
});

> summary of book1
> summary of book2
> summary of book3

# Linting

Significa ejecutar una herramienta de calidad de código muy básica que examinará su JavaScript y le dirá dónde y cómo limpiarlo.
En otras palabras, es algo que puede encontrar AUTOMÁTICAMENTE los errores tontos que todos cometemos, para que pueda corregirlos sin pensar. Hará que su código se rompa menos y evitará algunos problemas muy confusos.

## ¿Por qué es importante el pelaje?

Las 5 razones principales por las que debería incluir su JavaScript:

> Previene ciertos tipos de errores, incluidos algunos catastróficos.
> Te ahorra tiempo.
> Mejora tu código.
> Es fácil.
> Te hará follar más.

## Los problemas que pueden evitar "Linting"

Las herramientas de linting emiten advertencias sobre ciertos tipos de olores de código que pueden provocar problemas comunes. Algunos son bastante importantes.

> Problema n. ° 1: obras en desarrollo, interrupciones en la producción

La mayoría de las pilas web modernas admiten la minificación, pero los minificadores no le dirán cuándo le faltan puntos y comas, ni tampoco su navegador. Pero un punto y coma que falta puede romper javascript minificado.
Por qué esto apesta: su código funcionará bien y feliz en el desarrollo. Luego, lo implementará en producción; se rompe la mierda y no sabe por qué. Los clientes se quejan. Tu jefe te grita. ¡Juras que el código funciona! Sobreviene el caos.

> Problema n. ° 2: conflictos de alcance

¿Alguna vez ha creado una variable llamada "id" o "nombre" o "valor"? Sí, también lo han hecho todos los demás desarrolladores de la historia, incluidas las personas que trabajarán en la misma base de código que tú. Y si alguien se olvida de declarar todas sus variables con var, pueden sobrescribirse entre sí de forma inesperada.
Si tiene variables con el mismo nombre en varios lugares y alguien se olvida de usar var incluso una vez, puede apostar su dulce trasero a que su variable puede sobrescribirse con un valor que no esperaba.
Y sucederá. Se olvidarán. Te olvidarás. Sobreviene el caos ... te haces una idea.

# Test Driven Development

Aquí escribe una prueba antes de escribir el código de producción suficiente para cumplir con esa prueba y luego refactoriza el código.
TDD es una forma de pensar en sus requisitos o diseño antes de escribir su código funcional (lo que implica que TDD es tanto un requisito ágil importante como una técnica de diseño ágil).

NOTE: Pasos para hacer buenos Test de Desarrollo

1. El primer paso es agregar rápidamente una prueba, básicamente la prueba suficiente para que su código falle.
2. A continuación, ejecuta sus pruebas, a menudo el conjunto de pruebas completo, aunque por motivos de velocidad puede decidir ejecutar solo un subconjunto, para asegurarse de que el nuevo de hecho, la prueba falla.
3. Luego, actualice su código funcional para que pase las nuevas pruebas.
4. El cuarto paso es ejecutar sus pruebas nuevamente. Si fallan, debe actualizar su código funcional y volver a probar hasta que las pruebas pasen.

## ¿Por qué los desarrolladores deberían preocuparse por las pruebas unitarias automatizadas?

1. ¡Te mantiene fuera del depurador (hambriento de tiempo)!
2. Reduce errores en nuevas funciones y en funciones existentes.
3. Reduce el costo del cambio
4. Mejora el diseño
5. Fomenta la refactorización
6. Crea una red de seguridad para defenderse de otros programadores
7. Es divertido
8. Te obliga a reducir la velocidad y pensar
9. Acelera el desarrollo al eliminar el desperdicio
10. Reduce el miedo

## ¿Cómo lleva TDD el desarrollo al siguiente nivel?

- Mejora la productividad al minimizar el tiempo dedicado a la depuración
- Reduce la necesidad de verificación manual (mono) por parte de desarrolladores y tester ayudando a los desarrolladores a mantener el enfoque
- Reducir el desperdicio: traspasos
- Mejora la comunicación
- Creación de especificaciones vivas y actualizadas
- Comunicar decisiones de diseño
- Aprendizaje: escucha tu código
- Pasos de bebé: disminuya la velocidad y piense
- Mejora la confianza
- Código comprobable por diseño + red de seguridad
- Diseño de acoplamiento flexible
- Refactorización

> TDD significa menos errores.

# Promesas

Algo va a pasar si pasa algo.

const helloPromise = () => {
return new Promise((resolve, reject) => {
if(true){
resolve("Hey!!");
} else {
reject("Ups!!");
}
})
}

helloPromise()
.then(respone => console.log(response))
.catch(error => console.log(error))

# Generadores

Se van ir ejecutando de acuerdo a lo que le pidamos al programa:

function\* helloWorld(){
if(true){
return "Hello"
}
if(true){
return "World
}
}

const sayHello = helloWorld();

console.log(sayHello.next().value);
console.log(sayHello.next().value);

## Formularios y Validaciones

En los formularios es importante trabajar con botones de tipo submit y para que no nos envíe a otra página o recargue la página es importante agregar un evento de escucha a nuestro formulario:

```

  <form action="" id="formulario">
    <button type="submit">Enviar</button>
  </form>
```

Luego, en Javascript vamos a utilizar el siguiente evento de escucha:

```
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', (e) => {
  e.preventDefault(); => Esta línea nos sirve para decirle a Javascript que no envíe el formulario.
}
```

**El método preventDefault () cancela el evento si es cancelable, lo que significa que la acción predeterminada que pertenece al evento no ocurrirá.**

Por ejemplo, esto puede resultar útil cuando:

- Al hacer clic en un botón "Enviar", evite que envíe un formulario
- Al hacer clic en un enlace, evite que el enlace siga la URL

NOTE: No todos los eventos se pueden cancelar. Utilice la propiedad cancelable para averiguar si un evento se puede cancelar.

NOTE: El método preventDefault () no evita una mayor propagación de un evento a través del DOM. Usa el método stopPropagation () para manejar esto.

TODO: Aprender a utilizar expresiones regulares.

# JSON

JSON(JavaScript Object Notation) => Es un formato estándar basado en texto para representar datos estructurados basados ​​en la sintaxis de objetos de JavaScript.

> Se usa comúnmente para transmitir datos en aplicaciones web (por ejemplo, enviar algunos datos desde el servidor al cliente, para que se puedan mostrar en una página web, o viceversa).

Aunque se parece mucho a la sintaxis literal de objetos de JavaScript, se puede utilizar independientemente de JavaScript, y muchos entornos de programación cuentan con la capacidad de leer (analizar, parsear) y generar JSON.

- Json existe como un string; útil cuando desea transmitir datos a través de una red. Debe convertirse a un objeto JavaScript nativo cuando desee acceder a los datos, pero Javascript nos provee métodos para hacerlo de una forma fácil.

NOTE: La conversión **de una cadena en un objeto nativo** se denomina **deserialización**, mientras que la conversión **de un objeto nativo en una cadena** para que pueda transmitirse a través de la red se denomina **serialización**.

## Estructura JSON

La estructura JSON tiene una forma múy similar a la sintaxis de un objeto literal en Javascript. Puedes añadir cualquier tipo de elemento en JSON: string, boolean, number, array.

Esto puede resultar así:

```
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
```

Si cargamos este string en un programa JavaScript, la analizamos en una variable llamada superHeroes, por ejemplo, podríamos acceder a los datos dentro de ella usando la misma notación de punto / corchete.

```
superHeroes.homeTown
superHeroes['active']
```

Para acceder a los datos más abajo en la jerarquía, debe encadenar los nombres de propiedad requeridos y los índices de matriz juntos. Por ejemplo, para acceder a la tercera superpotencia del segundo héroe que aparece en la lista de miembros, debe hacer esto:

```
superHeroes['members'][1]['powers'][2]
```

1. Primero tenemos el nombre de la variable: superhéroes.
2. Dentro de eso queremos acceder a la propiedad de los miembros, entonces usamos ["miembros"].
3. _members_ contiene una matriz poblada por objetos. Queremos acceder al segundo objeto dentro de la matriz, así que usamos [1].
4. Dentro de este objeto, queremos acceder a la propiedad de poderes, por lo que usamos ["poderes"].
5. Dentro de la propiedad de poderes hay una matriz que contiene los superpoderes del héroe seleccionado. Queremos el tercero, así que usamos [2].

### Arrays como JSON

También podemos trabajar conviertiendo de un array a un JSON y viceversa:

```
[
  {
    "name": "Molecule Man",
    "age": 29,
    "secretIdentity": "Dan Jukes",
    "powers": [
      "Radiation resistance",
      "Turning tiny",
      "Radiation blast"
    ]
  },
  {
    "name": "Madame Uppercut",
    "age": 39,
    "secretIdentity": "Jane Wilson",
    "powers": [
      "Million tonne punch",
      "Damage resistance",
      "Superhuman reflexes"
    ]
  }
]
```

Lo anterior es JSON perfectamente válido. Solo tendría que acceder a los elementos de la matriz (en su versión analizada) comenzando con un índice de matriz, por ejemplo, [0] ["powers"] [0].

### Otras notas

1. JSON es simplemente una cadena con un formato de datos específico: solo contiene propiedades, no métodos.
2. JSON requiere que se usen comillas dobles alrededor de las cadenas y los nombres de propiedad. Las comillas simples no son válidas salvo que rodeen la cadena JSON completa.
3. Incluso una sola coma o dos puntos fuera de lugar puede hacer que un archivo JSON funcione mal y no funcione. Debe tener cuidado de validar cualquier dato que esté intentando usar (aunque es menos probable que JSON generado por computadora incluya errores, siempre que el El programa generador funciona correctamente) .Puede validar JSON utilizando una aplicación como JSONLint.
4. JSON en realidad puede tomar la forma de cualquier tipo de datos que sea válido para su inclusión dentro de JSON, no solo matrices u objetos. Por ejemplo, una sola cadena o número sería JSON válido.
5. A diferencia del código JavaScript en el que las propiedades del objeto pueden estar sin comillas, en JSON solo se pueden usar cadenas entre comillas como propiedades.

# Obteniendo un JSON

Para obtener el JSON, usamos una API llamada XMLHttpRequest (a menudo llamada XHR). Este es un objeto de JavaScript muy útil que nos permite realizar solicitudes de red para recuperar recursos de un servidor a través de JavaScript (por ejemplo, imágenes, texto, JSON, incluso fragmentos de HTML ), lo que significa que podemos actualizar pequeñas secciones de contenido sin tener que volver a cargar toda la página.

1. Para empezar, almacenamos la URL del JSON que queremos recuperar en una variable:

```
let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
```

2. Para crear una solicitud, necesitamos crear una nueva instancia de objeto de solicitud desde el constructor XMLHttpRequest, usando la nueva palabra clave:

```
let request = new XMLHttpRequest();
```

3. Ahora necesitamos abrir la solicitud usando el método open ():

```
request.open('GET', requestURL);
```

Esto requiere al menos dos parámetros; hay otros parámetros opcionales disponibles. Solo necesitamos los dos obligatorios para este simple ejemplo:

- El método HTTP que se utilizará al realizar la solicitud de red. En este caso, GET está bien, ya que solo estamos recuperando algunos datos simples.
- La URL a la que realizar la solicitud: esta es la URL del archivo JSON que almacenamos anteriormente.

4. Aquí estamos configurando el responseType en JSON, para que XHR sepa que el servidor devolverá JSON, y que esto debe convertirse detrás de escena en un objeto JavaScript. Luego, enviamos la solicitud con el método send ():

```
request.responseType = 'json';
request.send();
```

5. La última parte de esta sección implica esperar a que la respuesta regrese del servidor y luego lidiar con ella:

```
request.onload = function() {
  const superHeroes = request.response;
  populateHeader(superHeroes);
  showHeroes(superHeroes);
}
```

Aquí estamos almacenando la respuesta a nuestra solicitud (disponible en la propiedad de respuesta) en una variable llamada superHeroes; ¡esta variable ahora contiene el objeto JavaScript basado en JSON! Luego pasamos ese objeto a dos llamadas de función: la primera llena el <header> con los datos correctos, mientras que el segundo crea una tarjeta de información para cada héroe del equipo y la inserta en la <section>.

Hemos envuelto el código en un controlador de eventos que se ejecuta cuando el evento de carga se activa en el objeto de solicitud (ver onload); esto se debe a que el evento de carga se activa cuando la respuesta ha regresado correctamente; hacerlo de esta manera garantiza que request.response definitivamente lo hará estar disponible cuando vengamos a intentar hacer algo con él.

## XMLHttpRequest

Los objetos XMLHttpRequest (XHR) se utilizan para interactuar con los servidores. Puede recuperar datos de una URL sin tener que actualizar la página completa. Esto permite que una página web actualice solo parte de una página sin interrumpir lo que el usuario está haciendo.

> XMLHttpRequest se utiliza mucho en la programación AJAX.

A pesar de su nombre, XMLHttpRequest se puede utilizar para recuperar cualquier tipo de datos, no solo XML.

### Constructor

> XMLHttpRequest ()

El constructor inicializa una XMLHttpRequest. Debe llamarse antes de cualquier otro método.

## Convertir de Texto a Json y viceversa

A veces recibimos una cadena JSON sin procesar y necesitamos convertirla en un objeto nosotros mismos. Y cuando queremos enviar un objeto JavaScript a través de la red, necesitamos convertirlo a JSON (una cadena) antes de enviarlo. Afortunadamente, estos dos problemas son tan comunes en el desarrollo web que un objeto JSON integrado está disponible en los navegadores, que contiene los dos métodos siguientes:

> parse(): Accepts a JSON string as a parameter, and returns the corresponding JavaScript object.
> stringify(): Accepts an object as a parameter, and returns the equivalent JSON string.

Ejemplo:

```
request.open('GET', requestURL);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
const superHeroesText = request.response; // get the string from the response
const superHeroes = JSON.parse(superHeroesText); // convert it to an object
populateHeader(superHeroes);
showHeroes(superHeroes);
}
```

Como puede adivinar, stringify () funciona al revés. Intente ingresar las siguientes líneas en la consola de JavaScript de su navegador una por una para verlo en acción:

```
let myObj = { name: "Chris", age: 38 };
myObj
let myString = JSON.stringify(myObj);
myString
```

Aquí estamos creando un objeto JavaScript, luego verificamos lo que contiene, luego lo convertimos en una cadena JSON usando stringify () - guardando el valor de retorno en una nueva variable - luego volviéndolo a verificar.

### Json Parse

Un uso común de JSON es intercambiar datos hacia / desde un servidor web.
Al recibir datos de un servidor web, los datos siempre son una cadena.
Analice los datos con JSON.parse () y los datos se convertirán en un objeto JavaScript.

Tenemos un string => '{"name":"John", "age":30, "city":"New York"}'

Con Json.Parse podemos transformarlo a un objeto de Javascript => const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

#### Array como JSON

Cuando se usa JSON.parse () en un JSON derivado de una matriz, el método devolverá una matriz de JavaScript, en lugar de un objeto de JavaScript.

const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);

console.log(myArr[0]) => Ford

#### Exceptions

- Parseando Fechas

Los objetos de fecha no están permitidos en JSON.
Si necesita incluir una fecha, escríbala como una cadena.
Puedes volver a convertirlo en un objeto de fecha más tarde:

```
<!DOCTYPE html>
<html>
<body>

<h2>Convert a string into a date object.</h2>
<p id="demo"></p>

<script>
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);
obj.birth = new Date(obj.birth);
document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
</script>

</body>
</html>

Output:

Convert a string into a date object.
John, Sat Dec 13 1986 19:00:00 GMT-0500 (hora de Ecuador)

```

O puede usar el segundo parámetro, de la función JSON.parse (), llamado reviver.
El parámetro reviver es una función que verifica cada propiedad, antes de devolver el valor.

```
const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text, function (key, value) {
  if (key == "birth") {
    return new Date(value);
  } else {
    return value;
  }
});

document.getElementById("demo").innerHTML = obj.name + ", " + obj.birth;
```

#### Parsing Functions

No se permiten funciones en JSON.
Si necesita incluir una función, escríbala como una cadena.
Puedes volver a convertirlo en una función más tarde:

```
const text = '{"name":"John", "age":"function () {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("demo").innerHTML = obj.name + ", " + obj.age();
```

### Json Stringify

Un uso común de JSON es intercambiar datos hacia / desde un servidor web.
Al enviar datos a un servidor web, los datos deben ser una cadena.
Convierta un objeto JavaScript en una cadena con JSON.stringify ().

```
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
```

El resultado sería una playlist.

Tiene las mismas excepciones que Json Parse

````

# Reactividad

Una aplicación es Reactiva cuando una interfaz se modifica a partir de los cambios que tengan los datos de la lógica de programación de dicha app.

NOTE: La reactividad de los datos, simplemente es que la interfaz de usuario de un sitio o aplicación se modifica a los cambios en los datos de la misma.
Cada vez que se actualizan los datos, la interfaz de usuario lo hace automáticamente para que coincida con la lógica de programación de la aplicación.

NOTE: Estado => El estado son los datos de tu aplicación. Forma elegante de llamar a los datos de la aplicación. Se le llama estado porque se habla de reactividad y los datos tienen un tiempo determinado.

La interfaz suele dividirse en componentes.

Componentes: Es un patrón visual repetido que se puede resumir algo independiente con HTML, CSS e incluso JS que cumplen una función única. Son reutilizables. DRY (Don´t repeat yourself). Son autocontenidos.

## Manipulación NO reactiva del DOM

Ejemplo:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Manipulación Manual del DOM</title>
  </head>
  <body>
    <h1>Manipulación Manual del DOM</h1>
    <form id="todo-form">
      <input type="text" id="todo-item" placeholder="Tarea por hacer" />
      <input type="submit" value="Agregar" />
    </form>
    <h2>Lista de Tareas</h2>
    <ul id="todo-list"></ul>
    <script src="./index.js"></script>
  </body>
</html>


const d = document,
  $item = d.getElementById('todo-item'),
  $list = d.getElementById('todo-list');

d.addEventListener('submit', (e) => {
  if (!e.target.matches('#todo-form')) return false;

  e.preventDefault();

  //Agregar item to list
  let $li = d.createElement('li');
  $li.textContent = $item.value;
  $list.appendChild($li);

  // Limpiar el imput
  $item.value = '';
  $item.focus();
});

```

## Manipulación del DOM basada en el Estado.

1. Manipulación directa del estado:

```
const d = document;

// Estado
const state = {
  todoList: [],
};

//Template UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = state.todoList.map((todo) => `<li>${todo}</li>`).join('');

  return todos;
};

//Render de UI
//Diferencia entre funciones declaradas y experesada => La expresada no se puede usar hasta que esté definida.

const render = () => {
  console.log(state);
  const $list = d.getElementById('todo-list');
  if (!$list) return;

  $list.innerHTML = template();
};

d.addEventListener('DOMContentLoaded', render);

d.addEventListener('submit', (e) => {
  if (!e.target.matches('#todo-form')) return false;

  e.preventDefault();
  const $item = d.getElementById('todo-item');

  if (!$item) return;

  //Actualizar el estado y la UI
  state.todoList.push($item.value);
  render();

  //Limpiar imput
  $item.value = '';
  $item.focus();
});

```

2. Estado Reactivo

Se evita redactar el estado directamente. Para que el estado original no vaya a tener propiedades que no necesito.

```
const d = document;

// Estado
const state = {
  todoList: [],
};

//Template UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = state.todoList.map((todo) => `<li>${todo}</li>`).join('');

  return todos;
};

//Render de UI
//Diferencia entre funciones declaradas y experesada => La expresada no se puede usar hasta que esté definida.
const render = () => {
  console.log(state);
  const $list = d.getElementById('todo-list');
  if (!$list) return;

  $list.innerHTML = template();
};

//Actualizar el estado de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }

  render();
};

d.addEventListener('DOMContentLoaded', render);

//Estableciendo valores por defecto

setState({
  todoList: ['Hacer deberes', 'Crear Facebook'],
});

d.addEventListener('submit', (e) => {
  if (!e.target.matches('#todo-form')) return false;

  e.preventDefault();
  const $item = d.getElementById('todo-item');

  if (!$item) return;

  //Actualizar el estado y la UI
  state.todoList.push($item.value);
  render();

  //Limpiar imput
  $item.value = '';
  $item.focus();
});

```

3. Estado inmutable

Debemos evitar que el estado sea mutable. Es mutable porque se permite crear una copia del estado actual y añadiendo nuevos elementos y también porque se lo manipula directamente.

```
const d = document;

// Estado
const state = {
  todoList: [],
};

//Template UI
const template = () => {
  if (state.todoList.length < 1) {
    return `<p><em>Lista sin tareas por hacer</em></p>`;
  }

  let todos = state.todoList.map((todo) => `<li>${todo}</li>`).join('');

  return todos;
};

//Render de UI
//Diferencia entre funciones declaradas y experesada => La expresada no se puede usar hasta que esté definida.
const render = () => {
  console.log(state);
  const $list = d.getElementById('todo-list');
  if (!$list) return;

  $list.innerHTML = template();
};

//Actualizar el estado de forma reactiva
const setState = (obj) => {
  for (let key in obj) {
    if (state.hasOwnProperty(key)) {
      state[key] = obj[key];
    }
  }

  render();
};

//Obtenemos una copia inmutable del state
const getState = () => JSON.parse(JSON.stringify(state));

d.addEventListener('DOMContentLoaded', render);

//Estableciendo valores por defecto

setState({
  todoList: ['Hacer deberes', 'Crear Facebook'],
});

const items = getState();
items.todoList.push('Tarea 4');
console.log('Estado mutable', state);

d.addEventListener('submit', (e) => {
  if (!e.target.matches('#todo-form')) return false;

  e.preventDefault();
  const $item = d.getElementById('todo-item');

  if (!$item) return;

  //Actualizar el estado de forma reactiva y la UI
  const lastState = getState();
  lastState.todoList.push($item.value);
  setState({ todoList: lastState.todoList });

  //Limpiar imput
  $item.value = '';
  $item.focus();
});

```

4. Componentes con Estado
````
