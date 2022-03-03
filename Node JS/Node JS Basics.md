**ÍNDICE**

- [¿Qué es NODE JS?](#qué-es-node-js)
- [Event Loop: Asíncrona por Diseño](#event-loop-asíncrona-por-diseño)
  - [Event Queue](#event-queue)
  - [Thread Pool](#thread-pool)
  - [Imagen Resumida](#imagen-resumida)
- [Monohilo: implicaciones en diseño y seguridad](#monohilo-implicaciones-en-diseño-y-seguridad)
- [Configurar las variables de entorno en Node.js](#configurar-las-variables-de-entorno-en-nodejs)
- [Herramientas para ser más felices: Nodemon y PM2](#herramientas-para-ser-más-felices-nodemon-y-pm2)
- [CallBacks](#callbacks)
- [Callback Hell: refactorizar o sufrir](#callback-hell-refactorizar-o-sufrir)
- [Promesas](#promesas)
- [Async/Await](#asyncawait)
- [Globals](#globals)
- [Fyle System](#fyle-system)
- [Console](#console)
- [Errores](#errores)
- [Procesos Hijo](#procesos-hijo)
- [Módulos nativos en C++](#módulos-nativos-en-c)
- [HTTP](#http)
- [OS](#os)
- [Process](#process)
- [Gestión de paquetes: NPM y package.json](#gestión-de-paquetes-npm-y-packagejson)
- [Construyendo módulos: Require e Import](#construyendo-módulos-require-e-import)
- [Módulos útiles](#módulos-útiles)
- [Datos almacenados vs en memoria](#datos-almacenados-vs-en-memoria)
  - [Buffers](#buffers)
  - [Streams](#streams)
- [Benchmark](#benchmark)
- [Debugger](#debugger)
- [Error First Callbacks](#error-first-callbacks)
- [Scraping](#scraping)
- [Automatización de procesos](#automatización-de-procesos)
- [Aplicaciones de escritorio](#aplicaciones-de-escritorio)

# ¿Qué es NODE JS?

> Documentación: https://nodejs.org/es/

Es un entorno de ejecución de JavaScript fuera del navegador. Fue creado en 2009 y está orientado a los servidores

**Datos de NODE JS**

1. Concurrencia

   - Monohilo, con entradas y salidas asíncronas
   - Un proceso por cada núcleo del procesador

2. Motor V8

   - Corre sobre el motor V8 de Google
   - El moto V8 está escrito en C++
   - Convierte JS en código máquina en lugar de interpretarlo en tiempo real. Esto nos brinda muchísimo más velocidad

3. Funciona en base a módulos

   - Todo lo que no sea sintaxis de programación, es un módulo
   - Node JS trae sus propios módulos, los cuáles son piezas de código muy pequeñas.
   - Podemos crear nuestros propios módulos

4. Orientado a Eventos

   - Hay un bucle de eventos que se ejecuta constantemente
   - Podemos orientar el código de forma reactiva

# Event Loop: Asíncrona por Diseño

Se encarga de resolver los eventos ultra rápidos que llegan desde el `Event Queue`.
En caso de no poder resolverse rápido, enviá el evento al `Thread Pool`.

> Asíncrono => Que todos los eventos están ejecutándose aparte y el EventLoop puede estar recibiendo más eventos

<img src="./../utils/images/eventLoop.png">

## Event Queue

Contiene todos los eventos que se generan por nuestro código `Funciones, peticiones`, estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

<img src="./../utils/images/queue.png">

## Thread Pool

Se encarga de gestionar los eventos como `llamados a APIs, promesas, etc` de forma asíncrona. Una vez terminado lo devuelve al Event Loop.

El Event Loop vera si lo pasa a Event Queue o no.

<img src="./../utils/images/pool.png">

Para cada evento que tiene que ejecutar Thread Pools, se crea un nuevo hilo en nuestro procesador y nosotros podemos seguir ejecutando nuestro código de forma síncrona

<img src="./../utils/images/pool2.png">

## Imagen Resumida

<img src="./../utils/images/nodejs-arquitecture.jpg">

# Monohilo: implicaciones en diseño y seguridad

Todo lo que puede fallar va a fallar. Ley de Murphy.

Hay que tener cuidado con el dieño de nuestro código, ya que si falla algo, todo el proceso que estamos ejecutando también va a fallar

En el siguiente código:

```js
console.log('Hola mundito');

setInterval(() => {
  console.log('Holiii');
}, 1000);

console.log('Segundo mensaje');
```

El output sería así:

```zsh
Hola mundito
Segundo mensaje
Holiii
Holiii
Holiii
.
.
.
.
```

# Configurar las variables de entorno en Node.js

Existten variables que no se deben mostrar en le código directamente, como por ejemplo:

- Credenciales
- Tokens de APIs

Para acceder a las variables de entorno vamos a acceder a nuestro proceso

- Para acceder se hace algo así:

```js
const name = process.env.NAME;

console.log('Hola ' + name);
```

Al momento de correr el archivo, podemos definir la variable de entorno, así:

- Para Linux, MacOS:

```zsh
NAME=LENIN node path/to/file.js
```

- Para Windows en PowerShell:

Primero debemos crear la variable de entorno así:

```powershell
$env:NOMBRE="Carlos"
```

Luego podemos ejecutar el código normalmente:

```powershell
node path/to/file.js
```

> Nombrar a las variables de entorno en UPPER_CASE y guión bajo

# Herramientas para ser más felices: Nodemon y PM2

1. Nodemon
   Sirve para tener el código siempre ejecutándose, escuchando cambios y sin necesidad de reiniciar el proceso. Es una herramiento de desarrollo

   > https://nodemon.io/

   ```bash
   npm i -g nodemon
   ```

2. PM2

   - Es un administrador de procesos demonio que lo ayudará a administrar y mantener su aplicación en línea las 24 horas, los 7 días de la semana
   - Enfocado a producción

   > https://pm2.keymetrics.io/

   ```bash
   npm install pm2 -g
   ```

   Para empezar alguna aplicación, vamos a hacer:

   ```bash
   pm2 start ./path/to/file.js
   ```

   Usefuls:

   ```bash
   pm2 status
   pm2 log
   pm2 list
   pm2 stop ./path/to/file.js
   ```

# CallBacks

> Una HOF recibe una función como parámetro y devuelve una función. En otras palabras, un HOF, recibe un callback como parámetro

Un callback es una función que es pasada como argumento a otra función para ser llamada en otro momento.

La funcion que recibe como argumento otras funciones es denominada funcion de orden superior (higher-order function), esta contiene la logica correspondiente para ejecutar adecuadamente la funcion callback.

En el siguiente codigo

```js
setTimeout(console.log('Hello'), 1000);
```

- setTimeout es una `higher-order function`
- console.log es una `callback function`

Ejemplo de callaback:

```js
const Hola = (name, callback) => {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    callback(name);
  }, 1500);
};

const Adios = (name, callback) => {
  setTimeout(() => {
    console.log(`Adios ${name}`);
    callback();
  }, 1500);
};

Hola('Carlos', (nombre) => {
  Adios(nombre, () => {
    console.log('Terminando proceso...');
  });
});
```

# Callback Hell: refactorizar o sufrir

Muchísimos callabacks anidados. Se ve así:

```js
const Hola = (name, callback) => {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    callback(name);
  }, 1500);
};

const Hablar = (callback) => {
  setTimeout(() => {
    console.log('Hablar');
    callback();
  }, 1000);
};

const Adios = (name, callback) => {
  setTimeout(() => {
    console.log(`Adios ${name}`);
    callback();
  }, 1500);
};

//------------------------------------------------------

Hola('Carlos', (nombre) => {
  Hablar(() => {
    Hablar(() => {
      Hablar(() => {
        Adios(nombre, () => {
          console.log('Proceso finalizado');
        });
      });
    });
  });
});
```

Para refactorizar el código y tener nuestro callback más legible vamos a hacer uso de la recursividad que quiére decir que una función se va a llamar a sí misma con ligeros cambios

```js
function hola(nombre, miCallback) {
  setTimeout(function () {
    console.log('Hola, ' + nombre);
    miCallback(nombre);
  }, 1500);
}

function hablar(callbackHablar) {
  setTimeout(function () {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function () {
    console.log('Adios', nombre);
    otroCallback();
  }, 1000);
}

//En esta parte del código uso funciones recursivas porque estoy llamando a conversacion dentro de si misma. y mediante un If como estructura de control le digo que cantidad de veces va a  ejectuarse la funcion hablar.
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(function () {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

// --

console.log('Iniciando proceso...');
hola('Aleajandro-sin', function (nombre) {
  conversacion(nombre, 3, function () {
    console.log('Proceso terminado');
  });
});

/****************HELL**********************/
// hola('Alejandro', function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function() {
//                     console.log('Terminando proceso...');
//                 });
//             });
//         });
//     });
// });
```

# Promesas

Para evitar el Callback hell se utilizan las promesas. El cambio principal es que ahora las promesas tienen estados, como completada, pendiente o fallida.

Un ejemplo de promesa es:

```js
const Hola = (nombre) => {
  return new Promise((resolve, eject) => {
    console.log(`Hola ${nombre}`);
    resolve(nombre);
  });
};

const Adios = (nombre) => {
  return new Promise((resolve, reject) => {
    console.log(`Adios ${nombre}`);
    resolve();
  });
};

const Hablar = (nombre) => {
  return new Promise((resolve, reject) => {
    console.log('bla bla bla');
    resolve(nombre);
  });
};

console.log('Inicio');

Hola('Carlos')
  .then(Hablar)
  .then(Hablar)
  .then(Hablar)
  .then(Adios)
  .catch((err) => {
    console.log(err);
  });
```

# Async/Await

Es una azúcar sintáctica que nos va a permitir hacer uso de las promesas de una manera más amigable

Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales como hacer un archivo que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.

Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop

```js
// La palabra async  la convierte inmediatamente en asíncrona.
async function hola(nombre) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Hola, ' + nombre);
      resolve(nombre);
    }, 1000);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Bla bla bla bla...');
      resolve('Hay un error');
    }, 1000);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log('Adios', nombre);
      resolve();
    }, 1000);
  });
}

// Await solo es válido dentro de una función asíncrona.
async function main() {
  const nombre = await hola('Lenin');
  await hablar();
  hablar(); // Para hacer que se ejecute en segundo plano no debe existi el await
  await hablar();
  await adios(nombre);
  console.log('Termina el proceso');
}

// Esto nos permitirá saber si nuestra función se está ejecutanod de forma asíncrona.
console.log('Empezamos el proceso');
main();
console.log('Va a ser la segunda instrucción');
```

# Globals

Son módulos que ya vienen integrados en Node JS. `Global` es el equivalente a `this` en el navegador

```js
this == global; // true
```

Si quieres usar variables goblales, es mejor no usarlas. Pero se crean así:

```js
global.miVariable = 'Hola';

console.log(miVariable); // No hago global.miVariables porque es una variable global y el entorno de node lo entiende
```

# Fyle System

Nos va a permitir trabajar con archivos y directorios, como leer, editar, borrar y crear.

Todo lo que vayamos a hacer con FS se va a ejecutar de forma asíncrona

Tenemos varios métodos con FS, algunos de ellos son:

- readFile => Vamos a poder leer un archivo en alguna ruta específica
- writeFile => Vamos a poder escribir un archivo en alguna ruta específica
- unlink => Vamos a ser capaces de borrar un archivo en alguna ruta específica

```js
const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const file = await fs.readFile(path, 'utf8');
    console.log(file);
  } catch (error) {
    console.error(error);
  }
};

const writeFile = async (path, data) => {
  try {
    await fs.writeFile(path, data);
  } catch (error) {
    console.error(error);
  }
};

const deleteFile = async (path) => {
  try {
    await fs.unlink(path);
  } catch (error) {
    console.error(error);
  }
};
```

# Console

Nos sirve para poder ver el funcionamiento de nuestro código y así ayudar al debugueo del mismo.

Algunos métodos de la consola en node, son:

- **console.log:** recibe cualquier tipo y lo muestra en el consola.
- **console.info:** es equivalente a log pero es usado para informar.
- **console.error:**es equivalente a log pero es usado para errores.
- **console.warn:** es equivalente a log pero es usado para warning.
- **console.table:** muestra una tabla a partir de un objeto.
- **console.count:** inicia un contador autoincremental.
- **console.countReset:** reinicia el contador a 0.
- **console.time:** inicia un cronometro en ms.
- **console.timeEnd:** Finaliza el cronometro.
- **console.group:** permite agrupar errores mediante identación.
- **console.groupEnd:** finaliza la agrupación.
- **console.clear:** Limpia la consola.

# Errores

Node maneja los errores por si mismo, avisándonos sobre el error mientras se ejecuta el código, bloqueando el hilo principal y no permitiendo que se ejecute el código que está después. Esto puede ser muy contradictorio en aplicaciones en producción.

Para controlar errores nosotros mismos podemos hacer uso de `try/catch`:

```js
const doSome = () => {
  try {
    return 3 + z;
  } catch (err) {
    console.log(err);
  }
};

doSome();
```

> También se pueden manejar errores en el código de forma asíncrona.

# Procesos Hijo

En node podemos crear procesos hijos que ejecuten cualquier accion de nuestro sistema operativo, como si nos encontraramos en la linea de comandos.

Podemos llamar a `exec` para ejecuciones sencillas:

- Esto nos sirve para ejecutar un comando en el sistem operativo, en este caso es `ls`.

```js
const { exec } = require('child_process');
exec('ls', (e, stdout) => {
  e ? console.log(e) : console.log(stdout);
});
```

Podemos llamar a spawn para obtener el proceso: La ventaja de este enfoque es que obtienes mayor control del proceso, y del estado en el que se encuenta

```js
const { spawn } = require('child_process');
const myprocess = spawn('ls');

process.stdout.on('data', (data) => console.log(data.toString()));
process.on('exit', () => console.log('process end'));
```

# Módulos nativos en C++

Vamos a ver como trabajar con módulos nativos de C++ directamente con JS.

1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

   `npm i -g node-gyp`

   _Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentación de node](https://nodejs.org/api/addons.html#addons_hello_world)
3. Crea un `binding.gyp` en la raiz del módulo.
4. En la carpeta raiz del módulo, ejecuta:

   `node-gyp configure`

5. Se habrá generado un directorio build.
6. En la carpeta raiz del módulo, ejecuta:

   `node-gyp build`

7. El módulo se compilará. y podrás importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, así que no podrás abrirlo)_
8. Para usarlo, crea un archivo js. Para importarlo:

   `const addon = require('./build/Release/addon');`

   y para usarlo:

   `addon.hola()`

   debería imprimir `mundo`

# HTTP

Nos permite crear un servidor web, que puede recibir peticiones y devolver respuestas.

Para crear un servidor simple podemos hacerlo de la siguiente manera:

```js
const http = require('http');

const router = (req, res) => {
  console.log('Nueva petición');
  console.log('URL: ' + req.url);

  res.writeHead(201, { 'content-type': 'text/html; charset=utf-8' });

  switch (req.url) {
    case '/':
      res.write('<h1>Página principal</h1>');
      res.write('<a href="/acerca">Acerca de</a>');
      res.write('<a href="/contacto">Contacto</a>');
      res.end();
      break;
    default:
      res.write('<h1>Página no encontrada</h1>');
      res.end();
      break;
  }
};

http.createServer(router).listen(3000);

console.log('Escuchando en el puerto 3000');
```

# OS

Nos permite acceder a TODO el sistema operativo. Normalmente esta información solo está disponible para lenguajes de bajo nivel, pero con node podemos acceder a ella.

Algunos métodos interesantes son:

```js
const os = require('os');

console.log(os.arch());
console.log(os.platform());
console.log(os.cpus().length);
console.log(os.freemem());

const SIZE = 1024;

function kbytes(bytes) {
  return bytes / SIZE;
}

function mbytes(bytes) {
  return kbytes(bytes) / SIZE;
}

function gbytes(bytes) {
  return mbytes(bytes) / SIZE;
}

console.log(kbytes(os.freemem()));
console.log(mbytes(os.freemem()));
console.log(gbytes(os.freemem()));
```

# Process

Nos va a pemitir escuchar procesos. Podemos usarlo para escuchar a otros procesos, o para escuchar a nuestro propio proceso.
Existen varios métodos para usar:

- **UncaughtException**: Permite capturar cualquier error que no fue capturado previamente. Esto evita que Node cierre todos los hijos al encontrar un error no manejado.

```js
process.on('uncaughtException', (error, origen) => {
  console.log(error, origen);
});
```

- **exit**: Se ejecuta cuando node detiene el eventloop y cierra su proceso principal.

```js
process.on('exit', () => console.log('Adios'));
```

# Gestión de paquetes: NPM y package.json

- **npm**: Es un gestor de paquetes que permite instalar paquetes de terceros.
- **package.json**: Es un archivo que contiene la información de un proyecto, como su versión, sus dependencias y sus dev dependencias.

# Construyendo módulos: Require e Import

Podemos crear módulos e importarlos de dos maneras diferentes:

- Sintaxis tradicional

```js
const modulo = require('./modulo');

modulo();
```

- Sintaxis de ES6

```js
import modulo from './modulo';

modulo();
```

# Módulos útiles

1. bcrypt

```bash
npm i bcrypt
```

- Para usarlo:

```js
const bcrypt = require('bcrypt');

const password = '12345Segura!';

bcrypt.hash(password, 5, (error, hash) => {
  if (error) {
    console.log(error);
  } else {
    console.log(hash);
  }

  // Compare sirve para comprobar si el hash es igual a la password
  bcrypt.compare(password, hash, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
    }
  });
});
```

2. Moment JS

> Documentación: [moment.js](https://momentjs.com/docs/)

Nos sirve para trabajar con fechas de una manera mucho más efectiva

```bash
npm i moment
```

- Para usarlo:

```js
const moment = require('moment');

let ahora = moment();

console.log(ahora.format('YYYY-MM-DD HH:mm:ss'));
```

3. Sharp

> Documentación: [sharp](https://sharp.pixelplumbing.com/en/stable/)

Nos sirve para trabajar con imágenes

```bash
npm i sharp
```

- Para usarlo:

```js
const sharp = require('sharp');

// La siguiente reducira una imagen de 120x120 o cualquier tamaño a 80x80 y lo guardara en una imagen mas pequeña sin eliminr la original.
sharp('imagen.png').resize(80, 80).toFile('imagen_80x80.png');
```

# Datos almacenados vs en memoria

Los datos almacenados pueden llegar a ralentizar mucho nuestros procesos, ya que se están grabando ya sea en un SSD o en un HDD. Sin embargo guardar en memoria RAM llega a ser mucho más rápido en comparación con los datos almacenados.

## Buffers

Un buffer es un montón de datos en binario que vienen en crudo y se van moviendo de un lado a otro.

- Ejemplos de buffers:

```js
let buffer = Buffer.alloc(4);
let buffer2 = Buffer.from([1, 2, 3]);
let buffer3 = Buffer.from('Hola');

console.log(buffer);
console.log(buffer2);
console.log(buffer3);
console.log(buffer3.toString());

let abc = Buffer.alloc(26);
console.log(abc);

for (let i = 0; i < abc.length; i++) {
  abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());
```

Los datos se guardar en binario que son mostrados en formato Hexadecimal.

## Streams

Es el paso de datos de un punto a otro. Existen diversos tipos de streams:

- De lectura: Va enviando datos a otro punto.
- De escritura: Va recogiendo datos que llegan desde otro punto.
- De doble sentido: Va recogiendo y enviando datos.

> Un stream nos sirve para leer archivos muy pesados, ya que el stream va a ir leyendo poco a poco.

Para crear un stream de lectura:

```js
const fs = require('fs');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('utf8');

readableStream.on('data', (chunk) => {
  data += chunk;
});

readableStream.on('end', () => {
  console.log(data);
});
```

Para crear un stream de escritura:

```js
const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

const Transform = stream.Transform;

function Mayus() {
  Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, encoding, callback) {
  chunkMayus = chunk.toString().toUpperCase();
  this.push(chunkMayus);
  callback();
};

var mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout);
```

- util.inherits(Mayus,Transform)=> Crea una instancia de la clase Transform y estableciéndolo como prototipo a la función Mayus, tambien adjuntando el EventEmmitter. Es decir el Transform.Call(this).
  de modo que cada vez que se crea una instancia de la funcion Mayus se ejecutará el fichero.

# Benchmark

Prueba de rendimiento o comparativa.
Para poder ver el tiempo que se demora en ejecutarse un algoritmo, nos apoyamos de `console.time`:

```js
let suma = 0;

console.time('suma');

for (let i = 0; i < 100000; i++) {
  suma += i;
}

console.timeEnd('suma');
```

- Console.time solo va a mostrar el tiempo que se tarda en ejecutarse desde que se abre el console.time hasta donde se cierra con el console.timeEnd.

Para controlar procesos asíncronos, podemos usar esto:

```js
let suma = 0;

const asincrona = () => {
  return new Promise((resolve, reject) => {
    +setTimeout(() => {
      suma += 1;
      resolve(suma);
    }, 1000);
  });
};

console.time('asíncrona');

asincrona().then((resultado) => {
  console.log(resultado);
  console.timeEnd('asíncrona');
});
```

# Debugger

Para debuggear podemos hacer algo como esto en la consola:

```bash
node --inspect path/to/file.js
```

# Error First Callbacks

Un patrón que se sigue siempre en cualquier lenguaje y programa de devs es Error First Callbacks, esto quiere decir que siempre que tengamos un callback el primer parámetro debería ser el error.

> 😭 Esto se usa por la convención de que todo puede fallar.

Otro patrón típico es tener el callback es tener en el callback como la última función que se pasa. Aunque depende del caso.

```js
function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + w;
      callback(null, a);
    } catch (error) {
      callback(error);
    }
  }, 1000);
}

asincrona((err, dato) => {
  if (err) {
    console.error('Tenemos un error');
    console.error(err);
    return false;

    // throw err
  }

  console.log(`Todo ha ido bien, mi dato es ${dato}`);
});
```

> El Throw no sirve en funciones asíncronas y en callbacks.

# Scraping

Nos sirve para extraer datos de una página web.

> Chromium es open source de donde se basa chrome

**Puppeteer** se usa mas que nada para ver una página sin necesidad de cargarla visualmente.

Para instalarlo:

```bash
npm i puppeteer
```

- Ejemplo para obtener el título de una página en Wikipedia:

```js
const puppeteer = require('puppeteer');

(async () => {
  console.log('lanzamos navegador');
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto('https://es.wikipedia.org/wiki/Node.js');

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    console.log(h1.innerHTML);
    return h1.innerHTML;
  });

  console.log(titulo1);
  console.log('Cerramos navegador');
  browser.close();
  console.log('Navegardor cerrado');
})();
```

# Automatización de procesos

Nos sirve para automatizar procesos. Vamos a utilizar gulp y para isntalarlo, vamos a hacer:

```bash
npm i gulp gulp-server-livereload
```

Ejemplo de uso:

- Debemos crear un archivo llamado **gulpfile.js**

```js
const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
  console.log('Building files');
  cb();
});

gulp.task('serve', (cb) => {
  gulp.src('www').pipe(
    server({
      livereload: true,
      open: true,
    })
  );
});
```

- En nuestros scripts iría:

```json
"scripts": {
  "build": "gulp build",
  "serve": "gulp serve"
},
```

# Aplicaciones de escritorio

Electron es un paquete muy poderoso de node que nos va a permitir crear aplicaciones de escritorio a partir de aplicaciones web. Un ejemplo es Visual Studio Code.

Para poder utilizar electron, vamos a instalar:

```bash
npm i electron
```

Un ejemplo rápido de uso es:

```js
const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile('index.html');
};

app.on('ready', createWindow);
```

En el package JSON en los scripts iría:

```json
"start": "electron ."
```
