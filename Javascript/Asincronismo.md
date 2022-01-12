**Índice**:

- [Asincronismo | Platzi](#asincronismo--platzi)
  - [Definición Estructura Callback](#definición-estructura-callback)
  - [Implementando Promesas](#implementando-promesas)
  - [Funciones asíncronas](#funciones-asíncronas)
  - [Ventajas y Desventajas](#ventajas-y-desventajas)
    - [Callbacks](#callbacks)
    - [Promesas](#promesas)
    - [Async-Await](#async-await)
    - [En Resumen](#en-resumen)
      - [Callbacks](#callbacks-1)
      - [Promise](#promise)
      - [Async Await](#async-await-1)
- [Asincronismo | The Odin Project](#asincronismo--the-odin-project)
  - [Callbacks](#callbacks-2)
    - [Callback hells](#callback-hells)
  - [Promises](#promises)
    - [Then](#then)
    - [Catch](#catch)
    - [Finally](#finally)
    - [Promise.all](#promiseall)
    - [Promise.race](#promiserace)
- [Trabajando con APIs (Aplication Programming Interfaces)](#trabajando-con-apis-aplication-programming-interfaces)
    - [Cross Origin Resource Sharing (CORS)](#cross-origin-resource-sharing-cors)
      - [Suministro de opciones de solicitud](#suministro-de-opciones-de-solicitud)
        - [Envío de una solicitud con credenciales incluidas](#envío-de-una-solicitud-con-credenciales-incluidas)
  - [Using Fetch](#using-fetch)
  - [Async y Await](#async-y-await)
- [Metodología del Patito de Hule](#metodología-del-patito-de-hule)

# Asincronismo | Platzi

Significa que las cosas no van a pasar al mismo tiempo que se ejecuta la aplicación.

## Definición Estructura Callback

**Callback** => Una función pasada como parámetro a otra **función de orden superior**.
**High Order Function** => Una función que al crearla se le pasa otra función, sirve para reutilizar lógica:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7];
const oddNumbers = numbers.filter((number) => number % 2 !== 0); // La función anónima dentro del método filter es una callback. El método filter sería una función de orden superior.
```

> **XMLHttpRequest** es la forma antigua de hacer llamados asíncronos. La forma de usar XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

> **Clase Error de Javascript**: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

## Implementando Promesas

Una promesa es que se puede ejecutar cuando: (Ahora, en el futuro o nunca). Se la llama con "Promise"

Tiene una estructura similar a esta:

```js
const somethingWillHappen = () => {
  // Aquí retornamos una promesa
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Lo hicimos!');
    } else {
      reject('Rayos!');
    }
  });
};

somethingWillHappen()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const somethingWillHappen2 = () => {
  //NOTE: Promise se debe escribir con mayúscula siempre
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('True');
      }, 2000);
    } else {
      const error = new Error('Whooops!');
      reject(error);
    }
  });
};

somethingWillHappen2()
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then((response) => console.log('Array of results: ', response))
  .catch((err) => console.error(err));
```

> Promise.all es una forma de decirle a Javascript: "Vas a ejecutar la respuesta cuando TODAS las promesas se cumplan"

> Promise.race es es una forma de decirle a Javascript: "Vas a ejecutar la respuesta cuando obtengas la PRIMERA respuesta de todas las promeses singulares"

## Funciones asíncronas

Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indica al navegador: “Espera a que la promesa se resuelva y almacena su resultado en esta variable”.
Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto:

```js
const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
};

const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};
```

## Ventajas y Desventajas

### Callbacks

- **Ventajas**: Simple (una función que recibe otra función). Son universales, corren en cualquier navegador.
- **Desventajas**: Composición tediosa, anidando cada vez más elementos. Se puede caer en un callback hell.

### Promesas

- **Ventajas**: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
- **Desventajas**: Posible error si no se retorna el siguiente llamado en la cadena de llamados. No corre en todos los navegadores.

### Async-Await

- **Ventajas**: Se puede usar try-catch. Código más ordenado e intuitivo.
- **Desventajas**: No corre en todos los navegadores (se requiere un transpilador como babel).

### En Resumen

1. **Promesas**: cuando sólo es una promesa
2. **async/await**: cuando tengo que utilizar varias cosas asíncronas
3. **callbacks**: Sobre todo en librerías o cuando genero HOC, HOF, renderProps.

> HOC => (higher-order component) es una técnica avanzada en React para el reuso de la lógica de componentes.
> HOF => (higher-order functions). Los mejores ejemplos de esto son los métodos build-in de Javascript, ya sea para arreglos, strings, objetos, etc.

#### Callbacks

V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

#### Promise

V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

#### Async Await

V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

# Asincronismo | The Odin Project

## Callbacks

Una función de callback **es una función que se pasa a otra función como argumento**, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

> Las callbacks son simplemente funciones que se pasan a otras funciones.

Por ejemplo:

```js
myDiv.addEventListener('click', function () {
  // do something!
});
```

Aquí, la función addEventListener () toma una callback (la función "hacer algo") y luego la llama cuando se hace clic en myDiv.

Las devoluciones de llamada(callbacks) son funciones que se ejecutan de forma asincrónica o en un momento posterior. En lugar de que el código se lea de arriba a abajo de forma procedimental, los programas asíncronos pueden ejecutar diferentes funciones en diferentes momentos según el orden y la velocidad en que ocurren las funciones anteriores, como las solicitudes http o las lecturas del sistema de archivos.

### Callback hells

```js
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err);
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename);
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err);
        } else {
          console.log(filename + ' : ' + values);
          aspect = values.width / values.height;
          widths.forEach(
            function (width, widthIndex) {
              height = Math.round(width / aspect);
              console.log('resizing ' + filename + 'to ' + height + 'x' + height);
              this.resize(width, height).write(dest + 'w' + width + '_' + filename, function (err) {
                if (err) console.log('Error writing file: ' + err);
              });
            }.bind(this)
          );
        }
      });
    });
  }
});
```

> ¿Ves la forma de la pirámide y todas las (}) al final? ¡Eek! Esto se conoce cariñosamente como infierno de callback.

¿Cómo soluciono el infierno de devolución de llamada?

1. Mantenga su código poco profundo
2. Modularice
3. Maneja cada error

## Promises

Una promesa es un objeto que puede producir un valor en algún momento en el futuro.

```js
const myData = getData(); // if this is refactored to return a Promise...

myData.then(function (data) {
  // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever']; // and THEN run the function inside
});
```

En el código anterior tenemos el uso de promesas.

> .then() => Le dice que espere hasta que la promesa se resuelva y finalmente correr la función anónima que está dentro de esa promesa.

- Si bien el código síncrono es más fácil de seguir y depurar, el asíncrono es generalmente mejor para el rendimiento y la flexibilidad.

El constructor **new Promise ()** solo debe usarse **para tareas asíncronas heredadas**, como el uso de **setTimeout** o **XMLHttpRequest**. Se crea una nueva promesa con la palabra clave new y la promesa proporciona funciones de resolve y reject a la devolución de llamada proporcionada:

```js
var p = new Promise(function(resolve, reject) {

	// Do an async task async task and then...

	if(/* good condition */) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function(result) {
	/* do something with the result */
}).catch(function() {
	/* error :( */
}).finally(function() {
   /* executes regardless or success for failure */
});
```

Depende del desarrollador llamar a resolver o rechazar manualmente dentro del cuerpo de la devolución de llamada en función del resultado de su tarea determinada. Un ejemplo realista sería convertir XMLHttpRequest en una tarea basada en promesas:

```js
// From Jake Archibald's Promises and Back:
// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

function get(url) {
  // Return a new promise.
  return new Promise(function (resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function () {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      } else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function () {
      reject(Error('Network Error'));
    };

    // Make the request
    req.send();
  });
}

// Use it!
get('story.json').then(
  function (response) {
    console.log('Success!', response);
  },
  function (error) {
    console.error('Failed!', error);
  }
);
```

A veces no es necesario completar una tarea asíncrona dentro de la promesa; sin embargo, si es posible que se lleve a cabo una acción asíncrona, devolver una promesa será lo mejor para que siempre pueda contar con una promesa que saldrá de una función determinada. En ese caso, simplemente puede llamar a Promise.resolve() o Promise.reject () sin usar la palabra clave new. Por ejemplo:

```js
var userCache = {};

function getUserDetail(username) {
  // In both cases, cached or not, a promise will be returned

  if (userCache[username]) {
    // Return a promise without the "new" keyword
    return Promise.resolve(userCache[username]);
  }

  // Use the fetch API to get the information
  // fetch returns a promise
  return fetch('users/' + username + '.json')
    .then(function (result) {
      userCache[username] = result;
      return result;
    })
    .catch(function () {
      throw new Error('Could not find user: ' + username);
    });
}
```

Dado que una promesa siempre se devuelve, siempre puede usar los métodos then y catch en su valor de retorno.

### Then

Te permite reaccionar a la promesa.

La primera callback del método recibe el resultado que le da la llamada resolve():

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve(10);
  }, 3000);
}).then(function (result) {
  console.log(result);
});

// From the console:
// 10
```

Luego, la callback se activa cuando se resuelve la promesa. También puede encadenar callbacks de método:

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve(10);
  }, 3000);
})
  .then(function (num) {
    console.log('first then: ', num);
    return num * 2;
  })
  .then(function (num) {
    console.log('second then: ', num);
    return num * 2;
  })
  .then(function (num) {
    console.log('last then: ', num);
  });

// From the console:
// first then:  10
// second then:  20
// last then:  40
```

**IMPORTANTE**:

> Cada then recibe el resultado del valor de retorno del anterior.

_Si una promesa ya se ha resuelto pero luego se vuelve a llamar, la callback se activa inmediatamente. Si la promesa es rechazada y usted llama, luego del rechazo, nunca se llama a la callback._

### Catch

El método catch es ejecutado cuando una promesa es rechazada:

```js
new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    reject('Done!');
  }, 3000);
})
  .then(function (e) {
    console.log('done', e);
  })
  .catch(function (e) {
    console.log('catch: ', e);
  });

// From the console:
// 'catch: Done!'
```

Lo que proporcione al método de rechazo depende de usted.
Un patrón frecuente es enviar un error a la captura:

```js
reject(Error('Data could not be found'));
```

### Finally

La callback **finally** se llama independientemente del éxito o el fracaso:

```js
new Promise((resolve, reject) => {
  reject('Nope');
})
  .then(() => {
    console.log('success');
  })
  .catch(() => {
    console.log('fail');
  })
  .finally((res) => {
    console.log('finally');
  });
```

### Promise.all

La promesa se ejecuta cuando **todas las promesas dentro de Promises.all** obtienen su respuesta, si una promesa no tiene respuesta, entonces se obtiene catch:

```js
Promise.all([promise1, promise2])
  .then(function (results) {
    // Both promises resolved
  })
  .catch(function (error) {
    // One or more promises was rejected
  });
```

Otro ejemplo:

```js
var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function (results) {
  // Both promises done!
});
```

**Promise.all** será muy útil a medida que más API´s se muevan hacia las promesas.

### Promise.race

En lugar de esperar a que se resuelvan o rechacen todas las promesas,**Promise.race se activa tan pronto como se resuelve o rechaza cualquier promesa de la matriz:**

```js
var req1 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve('First!');
  }, 8000);
});
var req2 = new Promise(function (resolve, reject) {
  // A mock async action using setTimeout
  setTimeout(function () {
    resolve('Second!');
  }, 3000);
});
Promise.race([req1, req2])
  .then(function (one) {
    console.log('Then: ', one);
  })
  .catch(function (one, two) {
    console.log('Catch: ', one);
  });

// From the console:
// Then: Second!
```

# Trabajando con APIs (Aplication Programming Interfaces)

Para hacer un fetch de datos podemos utilizar dentro de las promesas:

```js
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function (response) {
    // Successful response :)
  })
  .catch(function (err) {
    // Error :(
  });
```

### Cross Origin Resource Sharing (CORS)

Generalmente el navegador restringe las llamadas a API desde páginas sin seguridad, páginas HTTP. Por esa razón hay que hacer una configuración.

Para solucionar esto, es simple, podemos añadir a la llamada de la API lo siguiente:

```js
fetch('url.url.com/api', {
  mode: 'cors',
});
```

#### Suministro de opciones de solicitud

El método fetch () puede aceptar opcionalmente un segundo parámetro, un objeto init que le permite controlar una serie de configuraciones diferentes:

```js
{
  method: 'POST', // *GET, POST, PUT, DELETE, etc.
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(data) // body data type must match "Content-Type" header
}
```

##### Envío de una solicitud con credenciales incluidas

Para hacer que los navegadores envíen una solicitud con credenciales incluidas en llamadas del mismo origen y de origen cruzado, agregue **credentials: 'include'** al objeto init que pasa al método fetch ().

```js
fetch('https://example.com', {
  credentials: 'include',
});
```

Si solo desea enviar credenciales si la URL de solicitud está en el mismo origen que el script de llamada, agregue **credentials: 'same-origin'**.

```js
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin',
});
```

Mirar la documentación aquí: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Using Fetch

Petición fetch():

```js
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

> Fetch() => Recibe un solo argumento que es la URL de donde vamos a hacer el request

El objeto Response, a su vez, no contiene directamente el cuerpo de respuesta JSON real, sino que es una representación de la respuesta HTTP completa.
Entonces, para extraer el contenido del cuerpo JSON del objeto Response, usamos el método **json()**, que **devuelve una segunda promesa** que se resuelve con el resultado de analizar el texto del cuerpo de la respuesta como JSON.

## Async y Await

Las funciones async y await son azucar sintáctica de las promesas. Async le dice a JS que es un proceso asíncrono y await le dice que espere hasta obtener una respuesta. También se puede manejar errores con try/catch blocks:

```js
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find((person) => {
      return person.name === name;
    });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}
```

- Atrapar errores

```js
asyncFunctionCall().catch((err) => {
  console.error(err);
});
```

Hay diferentes formas de escribir funciones asíncronas:

```js
const yourAsyncFunction = async () => {
  // do something asynchronously and return a promise
  return result;
};

anArray.forEach(async (item) => {
  // do something asynchronously for each item in 'anArray'
  // one could also use .map here to return an array of promises to use with 'Promise.all()'
});

server.getPeople().then(async (people) => {
  people.forEach((person) => {
    // do something asynchronously for each person
  });
});
```

- Convertir una promesa en una función asíncrona.

1. Promesa

```js
const img = document.querySelector('img');
fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', { mode: 'cors' })
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });
```

2. Función asíncrona

```js
const img = document.querySelector('img');

async function getCats() {
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {
    mode: 'cors',
  });
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
```

# Metodología del Patito de Hule

Contarle a **algo inanimado nuestro problema** y eventualmente obtendremos la respuesta.
