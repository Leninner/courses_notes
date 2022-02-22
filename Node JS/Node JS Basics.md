**ÍNDICE**

# ¿Qué es NODE JS?

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
