# Asincronismo | Platzi

Significa que las cosas no van a pasar al mismo tiempo

## Definición Estructura Callback

Callbak => Una función que al crearla se le pasa otra función.

Important NOTE: Quisiera comentar algo y si estoy mal, por favor me corrigen:
La definición que el profe Oscar nos da: “Es una función que al crearla le pasamos como parámetro una segunda función”. Según lo que entiendo, eso no haría referencia directamente al callback, sino a la función que recibe como parámetro otra función.
Una función que recibe otra función como parámetro se le denomina función de orden superior (higher-order function).
El callback en este caso sería la función que es pasada como parámetro, mas no la función que lo recibe.

Aclaraciòn de varias cosas que quizás no entiendas si estas empezando:

XMLHttpRequest es la forma antigua de hacer llamados, como el profesor lo menciona usa ese y no Fetch que es el actual, por que no conocemos aùn las promesas y fecth es con promesas, para saber por que el profesor uso OPEN y todas esas funciones aqui està la forma de usar XMLHttpRequest : https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest.

" new Error " que el profesor crea, es una nueva instancia de la clase Error que tiene Javascript, son clases ya implicitas que tiene javascript en este caso es para monstrar bien un mensaje de error podemos usarla, màs informaciòn aqui : https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Error.

Para los que son fron-end y están aprendiendo de Back, el profesor uso GET por que hace parte de los método http, en este caso necesitamos pedir información a las url ,màs información: https://developer.mozilla.org/es/docs/Web/HTTP/Methods

Por ultimo recomiendo una escucha atenta a lo que dice el profesor por que el explica el por que de cada cosa que hace y si no la conoces recomiendo buscarlas en Internet y asì avanzas en el curso.

## Implementando Promesas

Una promesa es que se puede ejecutar cuando: (Ahora, en el futuro o nunca). Se la llama con "Promise"

## Metodología del Patito de Hule

Contarle a algo inanimado nuestro problema y eventualmente obtendremos la respuesta.

Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con .then(). La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto

## Ventajas y Desventajas

Callbacks --> Ventajas: Simple(una función que recibe otra función). Son universales, corren en cualquier navegador.
Desventajas: Composición tediosa, anidando cada vez más elementos. Caer en Callback Hell.

Promesas --> Ventajas: Facilmente enlazables .Then( return… ).Then - Fácil e intuitivo de leer.
Desventajas: Posible error si no se retorna el siguiente llamado. No corre en todos los navegadores.

Async-Await --> Ventajas: Se puede usar try-catch . Código más ordenado e intuitivo.
Desventajas: No corre en todos los navegadores (se requiere un transpilador).

.then: cuando sólo es una promesa
async/await: cuando tengo que utilizar varias cosas asíncronas
callbacks: Sobre todo en librerías o cuando genero HOC, HOF, renderProps, pero normalmnte no los uso para el asincronismo

Excelente curso Muchas Gracias
Mis conclusiones son:

Ventajas y Desventajas

Callbacks
V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

Promise
V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Async Await
V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

# Asincronismo | The Odin Project

## Callbacks

Una función de callback es una función que se pasa a otra función como argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.
Las callbacks son simplemente funciones que se pasan a otras funciones. Por ejemplo:

```
myDiv.addEventListener("click", function(){
  // do something!
})
```

> Aquí, la función addEventListener () toma una callback (la función "hacer algo") y luego la llama cuando se hace clic en myDiv.

Las devoluciones de llamada son funciones que se ejecutan de forma asincrónica o en un momento posterior. En lugar de que el código se lea de arriba a abajo de forma procedimental, los programas asíncronos pueden ejecutar diferentes funciones en diferentes momentos según el orden y la velocidad en que ocurren las funciones anteriores, como las solicitudes http o las lecturas del sistema de archivos.

### Callback hells

```
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

> ¿Ves la forma de la pirámide y todas las}) al final? ¡Eek! Esto se conoce cariñosamente como infierno de callback.

### ¿Cómo soluciono el infierno de devolución de llamada?

1. Mantenga su código poco profundo
2. Modularize
3. Maneja cada error

## Promises

Una promesa es un objeto que puede producir un valor en algún momento en el futuro.

```
const myData = getData() // if this is refactored to return a Promise...

myData.then(function(data){ // .then() tells it to wait until the promise is resolved
  const pieceOfData = data['whatever'] // and THEN run the function inside
})
```

En el código anterior tenemos el uso de promesas.

> .then() => Le dice que espere hasta que la promseo se resuelva y finalmente correo la función anónima que está dentro de esa promesa.

- Si bien el código síncrono es más fácil de seguir y depurar, el asíncrono es generalmente mejor para el rendimiento y la flexibilidad.

NOTE: El constructor new Promise () solo debe usarse para tareas asíncronas heredadas, como el uso de setTimeout o XMLHttpRequest. Se crea una nueva promesa con la palabra clave new y la promesa proporciona funciones de resolve y reject a la devolución de llamada proporcionada:

```
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

```
// From Jake Archibald's Promises and Back:
// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

// Use it!
get('story.json').then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});
```

A veces no es necesario completar una tarea asíncrona dentro de la promesa; sin embargo, si es posible que se lleve a cabo una acción asíncrona, devolver una promesa será lo mejor para que siempre pueda contar con una promesa que saldrá de una función determinada . En ese caso, simplemente puede llamar a Promise.resolve () o Promise.reject () sin usar la palabra clave new. Por ejemplo:

```
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
    .then(function(result) {
      userCache[username] = result;
      return result;
    })
    .catch(function() {
      throw new Error('Could not find user: ' + username);
    });
}
```

Dado que una promesa siempre se devuelve, siempre puede usar los métodos then y catch en su valor de retorno.

### Then

Te permite reaccionar a la promesa. La primera callback del método recibe el resultado que le da la llamada resolve ():

```
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
	console.log(result);
});

// From the console:
// 10
```

Luego, la callback se activa cuando se resuelve la promesa. También puede encadenar callbacks de método:

```
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// From the console:
// first then:  10
// second then:  20
// last then:  40
```

Cada then recibe el resultado del valor de retorno del anterior.

Si una promesa ya se ha resuelto pero luego se vuelve a llamar, la callback se activa inmediatamente. Si la promesa es rechazada y usted llama, luego del rechazo, nunca se llama a la callback.

### Catch

The catch callback is executed when the promise is rejected:

```
new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { reject('Done!'); }, 3000);
})
.then(function(e) { console.log('done', e); })
.catch(function(e) { console.log('catch: ', e); });

// From the console:
// 'catch: Done!'
```

Lo que proporcione al método de rechazo depende de usted. Un patrón frecuente es enviar un error a la captura:

> reject(Error('Data could not be found'));

### Finally

La callback finally recién introducida se llama independientemente del éxito o el fracaso:

(new Promise((resolve, reject) => { reject("Nope"); }))
.then(() => { console.log("success") })
.catch(() => { console.log("fail") })
.finally(res => { console.log("finally") });

### Promise.all

La promesa se ejecuta cuando todas las promesas dentro de Promises.all obtienen su respuesta, si una promesa no tiene respuesta, entonces se obtiene catch:

```
Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});

Otro ejemplo:

var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});
```

Promise.all será muy útil a medida que más API se muevan hacia las promesas.

### Promise.race

En lugar de esperar a que se resuelvan o rechacen todas las promesas, Promise.race se activa tan pronto como se resuelve o rechaza cualquier promesa de la matriz:

```
var req1 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 8000);
});
var req2 = new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 3000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// Then: Second!
```

## Trabajando con APIs (Aplication Programming Interfaces)

Para hacer un fetch de datos podemos utilizar:

```
// URL (required), options (optional)
fetch('https://url.com/some/url')
  .then(function(response) {
    // Successful response :)
  })
  .catch(function(err) {
    // Error :(
  });
```

### Cross Origin Resource Sharing (CORS)

Generalmente el navegador restringe las llamadas a API desde página sin seguridad, páginas HTTP. Por esa razón hay que hacer una configuración.

Para solucionar esto, es simple, podemos añadir a la llamada de la API de la siguiente manera:

```
fetch('url.url.com/api', {
  mode: 'cors'
});
```

## Using Fetch

Petición fetch():

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

Fetch() => Recibe un solo argumento que es la URL de donde vamos a hacer el request

El objeto Response, a su vez, no contiene directamente el cuerpo de respuesta JSON real, sino que es una representación de la respuesta HTTP completa. Entonces, para extraer el contenido del cuerpo JSON del objeto Response, usamos el método json (), que devuelve una segunda promesa que se resuelve con el resultado de analizar el texto del cuerpo de la respuesta como JSON.

### Suministro de opciones de solicitud

El método fetch () puede aceptar opcionalmente un segundo parámetro, un objeto init que le permite controlar una serie de configuraciones diferentes:

```
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

#### Envío de una solicitud con credenciales incluidas

Para hacer que los navegadores envíen una solicitud con credenciales incluidas en llamadas del mismo origen y de origen cruzado, agregue credenciales: 'include' al objeto init que pasa al método fetch ().

```
fetch('https://example.com', {
  credentials: 'include'
});
```

Si solo desea enviar credenciales si la URL de solicitud está en el mismo origen que el script de llamada, agregue credenciales: 'mismo origen'.

```
// The calling script is on the origin 'https://example.com'

fetch('https://example.com', {
  credentials: 'same-origin'
});
```

Mirar la documentación aquí: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Async y Await

Las funciones async y await son azucar sintáctica de las promesas. Async le dice a JS que es un proceso asíncrono y await le dice que espere hasta obtener una respuesta. También se puede manejar errores con try/catch blocks:

```
async function getPersonsInfo(name) {
  try {
    const people = await server.getPeople();
    const person = people.find(person => { return person.name === name });
    return person;
  } catch (error) {
    // Handle the error any way you'd like
  }
}

> Atrapar errores

asyncFunctionCall().catch(err => {
  console.error(err)
});
```

Hay diferentes formas de escribir funciones asíncronas:

```
const yourAsyncFunction = async () => {
// do something asynchronously and return a promise
return result;
}

anArray.forEach(async item => {
   // do something asynchronously for each item in 'anArray'
   // one could also use .map here to return an array of promises to use with 'Promise.all()'
 });

server.getPeople().then(async people => {
  people.forEach(person => {
    // do something asynchronously for each person
  });
});
```

NOTE: Convertir una promesa en una función asíncrona.

```
const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      img.src = response.data.images.original.url;
    });
```

```
const img = document.querySelector('img');

  async function getCats() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }
```
