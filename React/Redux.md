# Redux

Flux: https://carlosazaustre.es/como-funciona-flux

> **Arquitectura Flux**: Es aquella que soluciona los problemas del patrón MVC que tenía flujo de datos bidireccional y lo reemplaza por una arquitectura unidereccional donde la vista genera una acción y esta acción a su vez provoca un reducer que a su vez actualiza el estado general y finalmente se actualiza la vista. Todo es un paso unidireccional de datos

![Alt text](../utils/images/flux.png)

Redux es una librería escrita en JavaScript, basada en la **arquitectura Flux**, creada con Facebook y creada por Dan Abramov, se basa en 3 principios fundamentales:

1. **Única fuente de la verdad:**
   Nuestra aplicación solo debe de tener un único Store y es la única fuente de información.

2. **El estado es de solo lectura**
   La única forma de modificar el estado es emitiendo un acción, este objeto describe lo que va a ocurrir.

3. **Los cambios se realizan con funciones puras**
   Para realizar cambios al estado es necesario utilizar Reducers los cuales son funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones necesarias.

Nuestra UI va a activar una action, esta action va a ejecutar un reducer para modificar la información del store, y al actualizarse el store la UI se va a modificar.

Redux propone una forma de manejar el estado donde podamos controlar cómo vamos a interactuar con otros elementos (llamadas a un API) o interacciones dentro de nuestra aplicación, Redux hace intento de predecir las mutaciones que pueda sufrir el estado, creando restricciones de `cuando y como` pueden ser ejecutadas las actualizaciones en nuestras aplicaciones.

![Alt text](../utils/images/redux-img-dos.png)
![Alt text](../utils/images/redux-img-three.png)
![Alt text](../utils/images/redux-img-two.png)

## Instalación de Redux

Para instalar en nuestro proyecto:

```bash
npm install redux react-redux --save
```

- **redux** => Trae todos los elementos necesarios de la librería de `Redux`
- **react-redux** => Nos permité implementar `redux` de una manera más fácil

## Implementación de Redux en React

1. En la carpeta `src` del proyecto debemos crear dos carpetas:

   1. `actions`
   2. `reducers`

Dentro de cada una, debemos crear un archivo `index.js`

2. En el archivo `index.js` de la raíz de la carpeta `src` vamos a hacer 2 importes:

```js
import { Provider } from 'react-redux';
```

- Nos da un provider que nos va a permitir `encapsular` nuestros componentes a través de un `conect` que va a tener toda la información del `store ` transmitida a estos componentes. De esta forma vamos a poder extraer el estado que tengamos en toda la App, y así tener en cada componente la info que necesita

```js
import { createStore } from 'redux';
```

- Nos va a ayudar a crear el `store` y compartir a toda la App

3. Inicializamos la aplicación con el `Provider` que importamos anteriormente:

```js
// /src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);
```

## Creación de la Store para manejar el estado

En el archivo de la ruta `/src/index.jsx` vamos a crear el estado fuera el método para renderizar la App:

- Con un ejemplo quedaría así:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  user: {},
  playing: {},
  mylist: [],
  trends: [
    {
      id: 2,
      slug: 'tvshow-2',
      title: 'In the Dark',
      type: 'Scripted',
      language: 'English',
      year: 2009,
      contentRating: '16+',
      duration: 164,
      cover: 'http://dummyimage.com/800x600.png/99118E/ffffff',
      description: 'Vestibulum ac est lacinia nisi venenatis tristique',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
  ],
  originals: [
    {
      id: 8,
      slug: 'tvshow-8',
      title: 'Stargate Atlantis',
      type: 'Action',
      language: 'English',
      year: 2012,
      contentRating: '16+',
      duration: 148,
      cover: 'http://dummyimage.com/800x600.png/306880/ffffff',
      description: 'Vestibulum ac est lacinia nisi venenatis tristique',
      source: 'https://mdstrm.com/video/58333e214ad055d208427db5.mp4',
    },
  ],
};

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);
```

Luego de haber hecho esto, creamos otra constante en donde vamos a crear la `referencia a la store`, esto lo lgoramos con `createStore` que importamos anteriormente de Redux la cuál recibe 2 parámetros:

1. Reducer => Se trae de la carpeta `reducers` que creamos anteriormente
2. Estado Inicial

```js
const store = createStore(reducer, initialState);
```

Luego vamos a pasarle un parámetro `store` con la variable que creamos anteriormente, al Provider de `/src/index.jsx`:

```js
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
```

## Conectar componentes con Redux

Para conectar un componente a Redux vamos a necesitar importar `connect` de react-redux en cada componente:

```js
import { connect } from 'react-redux';
```

Al momento de exportar debemos hacerlo con `connect` va a aceptar dos parámetros:

1. **mapStateToProps(props):** Es una función que le va a indicar al **provider** qué información necesitamos del store, es decir que el store nos va a pasar esa información por medio de los props del componente en el que lo indicó o que está suscrito o conectado a través de `connect`. Las props solo los pasamos una vez y vienen directamente del store `la única fuente de la verdad`

2. **mapDispatchToProps(actions):** es un objeto con las distintas funciones para ejecutar una action en Redux.

- Así exportamos un elemento con `connect`:

```js
// export default connect(props, dispatcher)(componente)
export default connect(mapStateToProps, null)(Home); // componente conectado al provider para utilizar el estado
```

- Si alguna acción para `dispatcher` no existe, entonces enviamos un valor nulo

- En el ejemplo como SI añadimos una función `mapStateToProps`, la creamos para traer únicamente las props que necesitamos del estado general:

```js
const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};
```

Y luego podemos llamarlos en las props del componente:

```js
const Home = ({ myList, trends, originals }) => {
  //code
};
```
