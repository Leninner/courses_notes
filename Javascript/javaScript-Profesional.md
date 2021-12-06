**ÍNDICE**

- [¿Qué significa ser un profesional de JavaScript?](#qué-significa-ser-un-profesional-de-javascript)
  - [¿Qué forma a un profesional?](#qué-forma-a-un-profesional)
  - [El lenguaje: JavaScript](#el-lenguaje-javascript)
  - [No fundamentos](#no-fundamentos)
  - [¿Cómo funciona?](#cómo-funciona)
  - [Entornos de programación](#entornos-de-programación)
  - [Versado en código](#versado-en-código)
  - [Mejores prácticas](#mejores-prácticas)
  - [Ética](#ética)
  - [Experiencia](#experiencia)
- [Cómo llega un script al navegador](#cómo-llega-un-script-al-navegador)
- [Scope o Ámbito](#scope-o-ámbito)
  - [Scope Global](#scope-global)
  - [Function Scope](#function-scope)
  - [Block Scope](#block-scope)
  - [Lexic Scope](#lexic-scope)
- [Closures](#closures)
  - [IIFE (Inmediate Invocation Function Expression)](#iife-inmediate-invocation-function-expression)
- [This](#this)
  - [Call](#call)
  - [Aply](#aply)
  - [Bind](#bind)
- [Prototype](#prototype)
  - [Herencia Prototipal](#herencia-prototipal)
- [¿Cómo funciona Javascript?](#cómo-funciona-javascript)
  - [Parsers](#parsers)
    - [Formas de hacer Parser con el motor V8 (es un motor de código abierto para JavaScript y WebAssembly, creado por Google)](#formas-de-hacer-parser-con-el-motor-v8-es-un-motor-de-código-abierto-para-javascript-y-webassembly-creado-por-google)
  - [Abstract Sintax Tree (AST)](#abstract-sintax-tree-ast)
  - [¿Cómo funciona el Javascript Engine?](#cómo-funciona-el-javascript-engine)
    - [Bytecode vs Machine Code](#bytecode-vs-machine-code)
- [Event Loop](#event-loop)
- [Promesas](#promesas)
- [Getters and Setters](#getters-and-setters)
- [Proxy](#proxy)
  - [Proxy](#proxy-1)
  - [Métodos del objeto handler](#métodos-del-objeto-handler)
    - [target](#target)
    - [property](#property)
    - [receiver](#receiver)
  - [Expresión Regular apara comprobar si tiene números en un string o no](#expresión-regular-apara-comprobar-si-tiene-números-en-un-string-o-no)
- [Generators](#generators)
- [Fetch - Cómo cancelar peticiones](#fetch---cómo-cancelar-peticiones)
- [IntersectionObserver](#intersectionobserver)
- [Visibility Change (Javascript Profesional)](#visibility-change-javascript-profesional)
  - [Casos en los que se puede usar](#casos-en-los-que-se-puede-usar)
- [Service Workers (Capa que vive en medio del navegador y el internet)](#service-workers-capa-que-vive-en-medio-del-navegador-y-el-internet)

# ¿Qué significa ser un profesional de JavaScript?

El camino para llegar a ser profesional es largo y duro, no es fácil. Todos necesitamos que nos guíen para saber qué hacer y qué no. Este camino es conocido como la ruta de pasar de Junior a Senior, este es un duro camino lleno de experiencia.

## ¿Qué forma a un profesional?

Te presento una lista de estas cosas que lo forman:

- Conocimiento del lenguaje.
  Conocimiento de entornos de programación.
  Mejores prácticas.
  Versado en código.
  Herramientas.
  Ética / Profesionalismo.
  Experiencia

## El lenguaje: JavaScript

Debemos tener muy claro cuales son los fundamentos de JavaScript antes de comenzar con esto. Existen features muy raros y hay que estudiarlos. Tenemos que saber cómo funcionan las cosas en JavaScript.

## No fundamentos

Los `no fundamentos` representan las siguientes características del lenguaje:

Promesas (nivel pro).
Getters, setters: son formas de obtener valor de una variable sin tener que poner this.name.
Proxies: es un feature muy raro, pero que más adelante veremos a profundidad. Sirve para interceptar a una función antes de que se ejecute.
Generadores: esto es raro, pero vamos a ver que sí es eficiente.

## ¿Cómo funciona?

Este lenguaje corre sobre un motor. JavaScript no contiene clases como otros lenguajes de programación, esto es algo que vuela mucho la cabeza, es muy difícil de entender. Otro feature muy cool que vamos a aprender es event loop, es lo que permite que pueda correr muchos procesos a la vez.

## Entornos de programación

Cuando estamos desarrollando lo hacemos para la WEB, para un celular, para seguidores. Existen diferentes entornos que nos ofrecen APIS, tenemos que conocer todo esto. V

## Versado en código

Esto quiere decir que tenemos que leer mucho código, un lugar hermoso para ponernos a leer código es GitHub. Debemos leer mucho y hacerlo de forma muy constante.

## Mejores prácticas

No vamos a reinventar la rueda, hay muchas personas que ya han solucionado los problemas más comunes, tenemos que usar estas soluciones, a estas soluciones se les llama: patrones de diseño.

## Ética

Esta es la parte más importante de ser un profesional. Un buen profesional cumple con los siguientes valores:

1. Es responsable.
2. Entrega a tiempo sus trabajos.
3. Sabe decir que no.
4. No hace daño.

## Experiencia

La experiencia no es algo que se pueda enseñar, tenemos que encontrarla nosotros mismos en el camino a ser profesionales. Todo está en nosotros, tenemos que estudiar y practicar mucho.

NOTE: No se puede utilizar funciones de flecha en métodos de funciones constructoras

Funciones Flecha
Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

No tiene sus propios enlaces a this o super y no se debe usar como métodos.
No tiene argumentos o palabras clave new.target.
No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
No se puede utilizar como constructor.
No se puede utilizar yield dentro de su cuerpo.

# Cómo llega un script al navegador

El **DOM** es la representación que hace el navegador de un documento HTML.

Con DOMContentLoaded podemos comprobar que toda la estructura de la página está cargada.

El navegador interpreta el archivo HTML y cuando termina de transformarlo al DOM se dispara el evento DOMContentLoaded lo que significa que todo el documento está disponible para ser manipulado.

Todo script que carguemos en nuestra página tiene un llamado y una ejecución.

Tanto con async como defer podemos hacer llamados asíncronos pero tiene sus diferencias:

async: Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
defer: La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.
Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.

NOTE: Un script ubicado arriba, al inicio de body, primera va a ejecutarse y después va a ejecutar el resto de estructura HTML.

- Siempre es una buena práctica llevar los scripts al final del body y llevarlos a su propio archivo y llamarlo con la etiqueta SRC.

# Scope o Ámbito

Es el alcance que tiene una variable dentro de un archivo.

## Scope Global

Toda variable declarada fuera de una función, método, etc. Estará en ámbito global, disponible para todo.

- Global Scope

```js
let message = 'Hello, Platzi!';

let $ = function (message) {
  console.log('Say: ' + message);
};
```

## Function Scope

Las `variables o métodos` definidos en bloques de `funciones` solo estarán disponibles para ese scope, no se puede acceder a esos métodos o variables desde fuera de esta `función padre`

```js
function printNumbers() {
  let i;

  for (i = 0; i < 10; i++) {
    function eventuallyPrintNumber(n) {
      setTimeout(function () {
        console.log(n);
      }, 100);
    }

    eventuallyPrintNumber(i);
  }
}

printNumbers();
```

## Block Scope

Las variables definidas dentro de un bloque de métodos o funciones, solo estará disponible para ese `alcance`. No se puede acceder a ellas desde fuera:

- Block Scope

```js
function printNumbers2() {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 100);
  }
}

printNumbers2();
```

## Lexic Scope

Una variable global, estará disponible para el bloque más oculto de código:

```js
let number = 12;

const doSome = () => {
  let number2 = 123;

  if (number2 > number) {
    let name = 'Lenin';
    return `${name} es el número ${number} que es menor a ${number2}`;
  }
};
```

# Closures

Son funciones que regresan una función o un objeto con funciones que mantienen las variables que fueron declaradas fuera de su scope.

Los closures nos sirven para tener algo parecido a variables privadas, característica que no tiene JavaScript por default. Es decir encapsulan variables que no pueden ser modificadas directamente por otros objetos, sólo por funciones pertenecientes al mismo.

## IIFE (Inmediate Invocation Function Expression)

```js
(function () {
  let color = 'green';

  function printColor() {
    console.log(color);
  }
  printColor();
})();
```

- Funciones que regresan funciones:

```js
// Funciones que regresan funciones
function makeColorPrinter(color) {
  let colorMessage = `The color is ${color}`;

  return function () {
    console.log(colorMessage);
  };
}

let greenColorPrinter = makeColorPrinter('green');
console.log(greenColorPrinter());
```

- Variables privadas

```js
// variables "privadas"
const counter = {
  count: 3,
};

console.log(counter.count);

counter.count = 99;

console.log(counter.count);

function makeCounter(n) {
  let count = n;

  return {
    increase: function () {
      count = count + 1;
    },
    decrease: function () {
      count = count - 1;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = makeCounter(7);

console.log('The count is:', counter.getCount());
counter.increase();
console.log('The count is:', counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The count is:', counter.getCount());

counter.count = 0;
console.log('The count is:', counter.getCount());
```

NOTE: Actualidad en Javascript

Unicamente como aporte:

actualmente javascript ha realizado mejoras en la implementación de la Programación Orientada a Objetos, mejorando la forma en que se realizan clases, para aplicar variables privadas se puede utilizar el caracter `#``

quedando el ejercicio indicado por el profesor de la siguiente forma:

```js
class makeCounter {
  #count;

  constructor(n) {
    this.#count = n;
  }

  get count() {
    return this.#count;
  }

  increase() {
    this.#count += 1;
  }

  decrease() {
    this.#count -= 1;
  }
}

let counter = new makeCounter(7);

console.log('The Count is:', counter.count);
counter.increase();
console.log('The Count is:', counter.count);
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log('The Count is:', counter.count);

counter.#count = 0; // ERROR
```

NOTE: Al manejar sonidos o videos mirar la documentación de: https://developer.mozilla.org/es/docs/Web/API/HTMLMediaElement

# This

this se refiere a un objeto, ese objeto es el que actualmente está ejecutando un pedazo de código.

No se puede asignar un valor a this directamente y este depende de en que scope nos encontramos:

Cuando llamamos a this en el Global Scope o Function Scope, se hace referencia al objeto window. A excepción de cuando estamos en strict mode que nos regresará undefined.
Cuando llamamos a this desde una función que está contenida en un objeto, this se hace referencia a ese objeto.
Cuando llamamos a this desde una “clase”, se hace referencia a la instancia generada por el constructor.

Al escribir "use strict": entramos al modo stricto.

> "use strict" es una directiva que indica el modo en que el navegador debe ejecutar nuestro código JavaScript. Por ende, existe dos modos de escribir JavaScript para tus navegadores y tú no lo sabías: el modo normal (normal mode) y el modo stricto (strict mode).

NOTE: Estas funciones nos sirven para establecer el valor de this, es decir cambiar el contexto que se va usar cuando la función sea llamada.

Las funciones call, apply y bind son parte del prototipo Function. Toda función usa este prototipo y por lo tanto tiene estas tres funciones.

functionName.call(). Ejecuta la función recibiendo como primer argumento el this y los siguientes son los argumentos que recibe la función que llamó a call.
functionName.apply(). Ejecuta la función recibiendo como primer argumento el this y como segundo un arreglo con los argumentos que recibe la función que llamó a apply.
functionName.bind(). Recibe como primer y único argumento el this. No ejecuta la función, sólo regresa otra función con el nuevo this integrado.

TODO: En todas las funciones call, apply y bind se debe pasar el objeto sobre el que estamos trabajando. Debemos pasarle el "this".

## Call

Es una función que ya está integrada a las funciones en Javascript. Sa pasan los argumentos separados con comas.

> Los argumentos se van pasando en orden

// Establece `this` usando `call`
function saludar() {
console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}

const richard = {
name: 'Richard',
apellido: 'Kaufman López',
};

saludar.call(richard);

// Establece `this` usando `call` y pasar argumentos a la función
function caminar(metros, direccion) {
console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
}

caminar.call(richard, 400, 'norte');

## Aply

> Su funcionalidad es similar a la de call, y difiere en que se debe pasar los argumentos de una manera diferente. Los argumentos se deben pasar en un arreglo.

// Establece `this` usando `apply` y pasar argumentos a la función
const valores = [800, 'noreste'];
caminar.apply(richard, valores);

/
Call - comma
Apply - arreglo
/

## Bind

> Va a construir una nueva función. Y se deben pasar argumentos de acuerdo a la función en la que estemos trabajando.

// Establecer `this` en una nueva función usando `bind`

const daniel = { name: 'Daniel', apellido: 'Sánchez' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();

NOTE: Function Currying => Consiste en transformar una función que utiliza múltiples argumentos en una secuencia de funciones que utilizan un único argumento. Nos permite pasar argumentos parciales

const danielCamina = caminar.bind(daniel, 2000);
danielCamina('oeste');

// Cuándo es útil usar uno de estos métodos

const buttons = document.getElementsByClassName('call-to-action');
// buttons.forEach(button => {
// button.onclick = () => alert('Nunca pares de aprender!');
// });

NOTE: Calla y aply van a ejecutar la función inmediatamente. Bind va a esperar a ser llamada, ya que crea una nueva función.

// NodeList
Array.prototype.forEach.call(buttons, button => {
button.onclick = () => alert('Nunca pares de aprender!');
});

# Prototype

En Javascript todo son objetos, no tenemos clases, no tenemos ese plano para crear objetos.

Todos los objetos “heredan” de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la prototype chain.

La keyword new crea un nuevo objeto que “hereda” todas las propiedades del prototype de otro objeto. No confundir prototype con proto que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.

Los prototipos sirven para añadir métodos que tienen varias instancias de la misma clase.

Object.create(objeto) => Crea un objeto con todos los comportamientos del objeto que se le pasa.

## Herencia Prototipal

> Todo en Javascript es un objeto

El métodos hasOwnProperty("name") sirve para comprobar si una característica le corresponde directamente o no al objeto a quién le estamos pasando la propiedad hasOwnProperty.

Object.getPrototypeOf("objeto") => Nos va a devolver el prototipo del objeto que le estamos pasando.

Object es el punto de partida de todo en Javascript.

# ¿Cómo funciona Javascript?

Ha cambiado mucho, cuando empezó a leer JavaScript lo hacía con Netscape que hacía cosas muy simples, se leía línea por línea, un paso a la vez. Hoy es igual, pero ahora de una forma diferente, ahora Google lo ha cambiado, ellos necesitaban a un navegador que ejecutara todo eficientemente. Por eso reinventó el funcionamiento del motor de JavaScipt

El JS Engine recibe el código fuente y lo procesa de la siguiente manera:

1. El parser descompone y crea tokens que integran el AST.
2. Se compila a bytecode y se ejecuta.
3. Lo que se pueda se optimiza a machine code y se reemplaza el código base.

NOTE: Un SyntaxError es lanzado cuando el motor JavaScript encuentra partes que no forman parte de la sintaxis del lenguaje y esto lo logra gracias a que se tiene un AST generado por el parser.

El parser es del 15% al 20% del proceso de ejecución por lo que hay que usar parser del código justo en el momento que lo necesitamos y no antes de saber si se va a usar o no.

## Parsers

Va a leer el código y descompone el código en tokens y entonces se ejecuta Abstract Sintax Tree

Si escribimos un error, saltará Sintax Error

> La mayoría de Javascript no se ejecuta en la página. Por esa razón debemos hacer bundling y code spliting.

Bundling => Empaquetación de módulos de una forma eficiente
Code Spliting => La división del código en varios paquetes o componentes que luego se pueden cargar a pedido o en paralelo.

https://esprima.org/

### Formas de hacer Parser con el motor V8 (es un motor de código abierto para JavaScript y WebAssembly, creado por Google)

1. Eager Parsing (análisis ansioso)

- Encuentra errores de Sintaxis
- Crea el AST
- Construye Scopes

2. Lazy Parsing (análisis perezoso)

- Es dos veces más rápido que el anterior
- No crea el AST
- Construye los scopes parcialmente.

## Abstract Sintax Tree (AST)

Es un grafo que se representa en un programa.

Se usa en:

- Javascript Engine
- Bundlers: Webpack, Rollup, Parcel
- Transpilers: Babel
- Linters: EsLint, Prettify
- Type Chekers: Typescript, Flow
- Sintax Highlighters

https://astexplorer.net/

## ¿Cómo funciona el Javascript Engine?

Una vez tenemos el AST ahora hay que convertirlo a Bytecode.
Bytecode es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador.
Machine code es el más bajo nivel, es código binario que va directo al procesador.
El profiler se sitúa en medio del bytecode y el optimizador
Cada máquina virtual tiene sus particularidades, por ejemplo V8 tiene algo llamado Hot Functions.
Cuando una sentencia función es ejecutada muy frecuentemente, V8 la denomina como una hot function y hace una optimización que consiste en convertirla a machine code para no tener que interpretarla de nuevo y agilizar su ejecución.
Cada navegador tiene su implementación de JavaScript Engine:

- SpiderMonkey - Firefox
- Chackra - Edge
- JavaScriptCore - Safari
- V8 - Chrome

### Bytecode vs Machine Code

> Bytecode => Es como el código assembler pero en lugar de operar en el procesador opera en la máquina virtual V8 del navegador. Es portatil. Ejecutado por Virtual Machine.
> Machine Code => Es el más bajo nivel, es código binario que va directo al procesador.

# Event Loop

El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

Javascript se organiza usando las siguientes estructuras de datos: Principalmente (Stack y Memory Heap)

- Stack (Primero que entra, último que sale). Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
- Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
- Task Queue (Primero que entra, primero que sale). Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
- MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.

El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.

NOTE: Set Time Out es una función que va a ejecutar otra función en un tiempo predeterminado => setTimeOut(function, 1000);

# Promesas

Para crear las promesas usamos la clase Promise. El constructor de Promise recibe un sólo argumento, un callback con dos parámetros, resolve y reject. resolve es la función a ejecutar cuando se resuelve y reject cuando se rechaza.
El async/await es sólo syntax sugar de una promesa, por debajo es exactamente lo mismo.
La clase Promise tiene algunos métodos estáticos bastante útiles:
Promise.all. Da error si una de las promesas es rechazada.
Promise.race. Regresa sólo la promesa que se resuelva primero.

Fectch => La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

# Getters and Setters

Los getters y setters son funciones que podemos usar en un objeto para tener propiedades virtuales. Se usan los keywords **set** y **get** para crear estas propiedades.

Estas propiedades al ser funciones pueden llevar una validación de por medio y ser usadas con el operador de asignación como si fueran una variable más, dentro del objeto.

Ejemplo:

const player = {
play: () => this.play(),
pause: () => this.pause(),
media: this.media,
get muted() {
return this.media.muted;
},
set muted(value) {
this.media.muted = value;
},
};

# Proxy

Se puede utilizar en llamadas a API.

El proxy sirve para **interceptar la lectura de propiedades de un objeto** (los get, y set) entre muchas otras funciones. Así, antes de que la llamada llegue al objeto podemos manipularla con una lógica que nosotros definamos.

## Proxy

El objeto Proxy se usa para definir un comportamiento personalizado para operaciones fundamentales (por ejemplo, para observar propiedades, cuando se asignan, enumeración, invocación de funciones, etc).

## Métodos del objeto handler

Sección

El objeto controlador es un objeto marcador de posición que contiene trampas para Proxy.

Todas las trampas son opcionales. Si no se ha definido una trampa, el comportamiento predeterminado es reenviar la operación al objetivo.

handler.get()

Una trampa para obtener valores de propiedad.

SintaxisSección
var p = new Proxy(target, {
get: function(target, property, receiver) {
}
});

Los siguientes parámetros se pasan al get método. this está vinculado al controlador.

### target

El objeto de destino.

### property

El nombre o Symbol de la propiedad a obtener.

### receiver

El proxy o un objeto que hereda del proxy.

El get método puede devolver cualquier valor.

Ejemplo
const monster1 = {
secret: 'easily scared',
eyeCount: 4
};

const handler1 = {
get: function(target, prop, receiver) {
if (prop === 'secret') {
return `${target.secret.substr(0, 4)} ... shhhh!`;
} else {
return Reflect.get(...arguments);
}
}
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// expected output: 4

console.log(proxy1.secret);
// expected output: "easi ... shhhh!"

bject.keys()

El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal.

Object.keys devuelve un array cuyos elementos son strings correspondientes a las propiedades enumerables que se encuentran directamente en el object. El orden de las propiedades es el mismo que se proporciona al iterar manualmente sobre las propiedades del objeto.

Array.prototype.find()

El método **find()** devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada. En cualquier otro caso se devuelve undefined.

Distancia de Levenshtein

La distancia de Levenshtein, distancia de edición o distancia entre palabras es el número mínimo de operaciones requeridas para transformar una cadena de caracteres en otra, se usa ampliamente en teoría de la información y ciencias de la computación. Se entiende por operación, bien una inserción, eliminación o la sustitución de un carácter. Esta distancia recibe ese nombre en honor al científico ruso Vladimir Levenshtein, quien se ocupó de esta distancia en 1965. Es útil en programas que determinan cuán similares son dos cadenas de caracteres, como es el caso de los correctores ortográficos.

## Expresión Regular apara comprobar si tiene números en un string o no

/\d/.test(string) => Falso, si no tiene números || Verdadero, si es que si tiene números

Ejemplo:

// proxies es6

var empleado = {
nombre: '',
apellido: '',
password: '32ioi4o24'
};

// empleado.nombre = 'alejandro';

function valida(prop, value) {
const keys = Object.keys(empleado);
const propInvalida = keys.indexOf(prop) === -1;

if (propInvalida) {
console.error('Propiedad invalida');
return false;
}

if ((prop === 'apellido' || prop === 'nombre') && /\d/.test(value)) {
console.error(`El valor de la propiedad ${prop} es invalido `);
return false;
}
return true;
}

var handler = {
set(obj, prop, value) {
if (valida(prop, value)) {
obj[prop] = value;  
 }
},
get(obj, prop) {
if (prop === 'password') {
return '\*'.repeat(obj[prop].length)
}

    if (prop === 'nombreCompleto') {
      return `${obj['nombre']} ${obj['apellido']}`;
    }
    return obj[prop];

}
};
var pEmpleado = new Proxy(empleado, handler);

pEmpleado.nombre = 'Alejandro';
pEmpleado.apellido = 'Amador';
pEmpleado.id = 324234;
// console.log(empleado);
console.log(pEmpleado.password);
console.log(pEmpleado.nombre);
console.log(pEmpleado.nombreCompleto);

# Generators

Los generadores son funciones especiales, pueden pausar su ejecución y luego volver al punto donde se quedaron recordando su scope.

Algunas de sus características:

- Los generadores regresan una función.
- Empiezan suspendidos y se tiene que llamar next para que ejecuten.
- Regresan un value y un boolean done que define si ya terminaron.
- yield es la instrucción que regresa un valor cada vez que llamamos a next y detiene la ejecución del generador.

# Fetch - Cómo cancelar peticiones

La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función fetch para esto.

Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

# IntersectionObserver

Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.

# Visibility Change (Javascript Profesional)

El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

## Casos en los que se puede usar

Otros casos de uso para utilizar la API Page Visibility:
Un sitio tiene un carrusel de imágenes que no debería avanzar a la siguiente diapositiva a no ser que el usuario esté viendo la página.
Una aplicación que muestra un panel de información y no se quiere que se actualice la información del servidor cuando la página no está visible.
Una página quiere detectar cuando se está precargando para poder mantener un recuento preciso de las vistas de página.
Un sitio desea desactivar los sonidos cuando el dispositivo está en modo de espera (el usuario presiona el botón de encendido para apagar la pantalla).

# Service Workers (Capa que vive en medio del navegador y el internet)

Utilidad => Para hacer nuestras aplicaciones offline.

Sirven para hacer que nuestras aplicaciones funcionen Offline.
Muy usados en las Progressive Web Apps (PWA) los ServiceWorkers son una capa que vive entre el navegador y el Internet.
Parecido a como lo hacen los proxys van a interceptar peticiones para guardar el resultado en cache y la próxima vez que se haga la petición tomar del cache ese resultado.

Service Worker API
Los Service workers actúan esencialmente como proxy servers asentados entre las aplicaciones web, el navegador y la red (cuando está accesible). Están destinados, entre otras cosas, a permitir la creación de experiencias offline efectivas, interceptando peticiones de red y realizando la acción apropiada si la conexión de red está disponible y hay disponibles contenidos actualizados en el servidor. También permitirán el acceso a notificaciones tipo push y APIs de sincronización en segundo plano.

Descarga, instalación y activación
En este punto, su service worker observará el siguiente ciclo de vida:

Descarga
Instalación
Activación
El service worker se descaga inmediatamente cuando un usuario accede por primera vez a un sitio controlado por el mismo.

Después de esto se descarga cada 24 horas aproximadamente. Se puede descargar con más frecuencia, pero debe ser descargado cada 24 horas para prevenir que una mala programación sea molesta durante mucho tiempo.

ServiceWorkerContainer.register()
Parámetros

ServiceWorkerContainer.register(scriptURL, options)
.then(function(ServiceWorkerRegistration) { ... });
scriptURL

La URL del script de trabajador de servicio.

options Optional

Un objeto que contiene opciones de registro. Las opciones disponibles actualmente son:

alcance: USVString representa una URL que define el alcance de registro de un “service worker”; es decir, qué rango de URL puede controlar un “service worker”. Esto es generalmente una URL relativa. El valor predeterminado es la URL que obtendría si resolviera ‘./’ utilizando la ubicación de la página web como base. No es, como se cree comúnmente, relativo a la ubicación del “service worker”. Vea la sección de Ejemplos para más información sobre cómo funciona.
Ejemplo
if ('serviceWorker' in navigator) {
// Register a service worker hosted at the root of the
// site using the default scope.
navigator.serviceWorker.register('/sw.js').then(function(registration) {
console.log('Service worker registration succeeded:', registration);
}).catch(function(error) {
console.log('Service worker registration failed:', error);
});
} else {
console.log('Service workers are not supported.');
}
CacheStorage.open()
The open() method of the CacheStorage interface returns a Promise that resolves to the Cache object matching the cacheName.

Ejemplo
var cachedResponse = caches.match(event.request).catch(function() {
return fetch(event.request);
}).then(function(response) {
caches.open('v1').then(function(cache) {
cache.put(event.request, response);
});  
 return response.clone();
}).catch(function() {
return caches.match('/sw-test/gallery/myLittleVader.jpg');
});
Cache
La **Cache**interfaz proporciona un mecanismo de almacenamiento para [Request](http://fetch.spec.whatwg.org/#request)/ [Response](http://fetch.spec.whatwg.org/#response)pares de objetos que se almacenan en caché, por ejemplo, como parte del ServiceWorkerciclo de vida. Tenga en cuenta que la Cacheinterfaz está expuesta a ámbitos con ventanas, así como a los trabajadores. No tiene que usarlo junto con los trabajadores del servicio, aunque esté definido en la especificación del trabajador del servicio.

MétodosSección
Cache.match(request, options)

Devuelve un Promiseque resuelve la respuesta asociada con la primera solicitud coincidente en el Cacheobjeto.

Cache.matchAll(request, options)

Devuelve un Promiseque resuelve una matriz de todas las solicitudes coincidentes en el Cacheobjeto.

Cache.add(request)

Toma una URL, la recupera y agrega el objeto de respuesta resultante a la caché dada. Esto es funcionalmente equivalente a llamar fetch(), luego usar put()para agregar los resultados al caché.

Cache.addAll(requests)

Toma una matriz de URL, las recupera y agrega los objetos de respuesta resultantes a la caché dada.

Cache.put(request, response)

Toma tanto una solicitud como su respuesta y la agrega al caché dado.

Cache.delete(request, options)

Encuentra la Cache entrada cuya clave es la solicitud, devolviendo una Promiseque se resuelve truesi Cachese encuentra y elimina una entrada coincidente . Si no Cachese encuentra ninguna entrada, la promesa se resuelve false.

Cache.keys(request, options)

Devuelve un Promiseque se resuelve en una matriz de Cacheclaves.
