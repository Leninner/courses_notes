# ¿Qué es Redux?

> Documentación: https://redux.js.org/

Es una sistema que nos ayuda a mantener, compartir y actualizar datos en tiempo real. Es una libreria agnóstica de dónde se la utilice.

Tres principios de Redux:

    1. Única fuente de la verdad (store)
    2. El estado es de solo lectura (actions), es decir, que no vamos a poder cambiar el estado **arbitrariamente**. Debemos cambiar el estado de la aplicación a través de **actions** que van a describir qué va a pasar.
    3. Los cambios deben realizarse a través de **funciones puras** (reducers).

> El estado o state es un objeto que tiene varias capaz de profundidad y es común tener un key/value pair.
> El store engloba al estado, selectores, dispatcher, suscribers, etc.

# Ciclo de vida de Redux

- El estado = Es un objeto que contiene los datos con los que onteractua actualmente la vista.

- La vista = La vista consume los datos del estado para mostrarlos al usuario.

- Cuando el usuario interactia con la vista dispara una accion.

- Si definimos middlewares, la accion llega alli y luego es enviada hacia el reducer, este se sirve del estado, decide si ejecutar otra accion o no y define que accion se ejecutara en el estado, modificando y actualizando los datos involucrados.

<img src="../utils/images/redux-flow.png">

# Diferencias entre Redux y Context API

Depuración:

- Redux tiene un depurador que nos permite viajar en el tiempo y ver el estado de la aplicación.
- Context API al no tener acciones claras, es un poco difícil entender que es lo que está pasando.

Bundle Size:

- Context API al estar integrado con React, no va a agrandar nuestro Bundle Size al contrario de Redux, ya que es un librería aparte.

Middlewares:

- Redux nos provee mucha facilidad para crear custom middlewares

Curva de Aprendizaje:

- Context API es más amigable cuando la estamos aprendiendo al contrario de Redux

Rendering:

- Redux permite prevenir rendering inapropiado, es decir, que no se renderice la vista si no hay cambios en el estado de la aplicación al contrario de Context API.

# Flujo normal de trabajo con Redux

1. Instalar los paquetes necesarios para trabajar con Redux en React:

```bash
npm i redux react-redux
```

2. Crear dos carpetas en el root de la carpeta `src` llamadas `actions` y `reducers`.

   - Un action se ve de la siguiente forma:

   ```js
   export const increment = () => {
     return {
       type: 'INCREMENT',
     };
   };
   ```

   - Un reducer se ve de la siguiente forma:

   ```js
   export default (state = 0, action) => {
     switch (action.type) {
       case 'INCREMENT':
         return state + 1;
       default:
         return state;
     }
   };
   ```

> Es recomendable usar sentencias if, en lugar de switch, ya que es más legible

3. En el archivo de entrada de la aplicación vamos a realizar la siguiente configuración:

```js
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

4. En el archivo en donde queremos hacer uso de los datos de la app, vamos a tener una composición similar a esta:

```js
import { connect } from 'react-redux';
import { setPokemon } from './actions';

function Home({ pokemonList, setPokemon }) {
  useEffect(() => {
    getPokemons().then((response) => setPokemon(response));
  });

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

// Funciones necesarias para el HOC connect
const mapStateToProps = (state) => ({
  pokemonList: state.pokemonList,
});

const mapDispatchToProps = (dispatch) => ({
  setPokemon: (value) => dispatch(setPokemon(value)),
});

// HOC
export default connect(mapStateToProps, mapDispatchToProps)(Home);
```

# Flujo de trabajo con Hooks

Del paso anterior, realizar todo hasta el paso 3 y el paso 4 va a ser:

```js
import { setPokemon } from '../../actions';
import { getPokemons } from '../../API/getPokemons';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  // Uso de Hooks de Redux
  const dispatch = useDispatch(); // Disparador de acciones
  const pokemonList = useSelector((state) => state.pokemonList); // Selector de estado

  console.log('pokemonList', pokemonList);

  useEffect(() => {
    getPokemons().then((response) => dispatch(setPokemon(response)));
  });

  return (
    <div className="Home">
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
```

# Middlewares

Es una pieza de código que se dispara después de la ejecucción de una acción y antes de que se ejecute el reducer. Sirve para hacer `fetch` de datos y otras cosas más.

Ejemplo de Middleware para mostrar en consola cuando una acción es disparada:

- File en la carpeta de `src/middlewares`:

```js
export const logActions = (store) => (next) => (actionInfo) => {
  console.log(actionInfo, ' disparado');
  return next(actionInfo);
};
```

- Para poder usar el middleware:

```js
import { logActions } from './middlewares';

const store = createStore(reducer, applyMiddleware(logActions));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```

## Redux Thunk

Utilizar Redux Thunk nos sirve de mucho para hacer peticiones asíncronas, ya que Redux, no puede soportar eso. `redux-thunk` es una funcionalidad de redux que permite crear `action creators “especiales”`. Se crean con la estructura de una función currificada(función que regresa otra función) y se pasa normalmente dentro del dispatch como cualquier otro action creator:

- Ejemplo de un action creator con redux thunk:

```js
const fetchPokemon = payload => dispatch => {...}

/* o también */
function fetchPokemon(payload) {
  return function(dispatch) {...}
}
```

> La primera función recibe los datos al ejecutar el action, por ejemplo un payload, que luego sirve a la función que se dispara después

- Para disparar una función con redux-thunk:

```js
// Hacemos uso de useDispatch para obtener el dispatch que va a disparar el action creator

useEffect(() => {
  dispatch(getPokemonWithDetails());
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
```

Para configurar redux-thunk, simplemente vamos al punto de entrada de la aplicación y creamos la siguiente configuración:

- applyMiddlewares debe ser encadenado, es decir, primero se pasan los middlewares que quiéres que sean ejecutados primero

```js
// Hay que importar thunk
import thunk from 'redux-thunk';

// Luego configurar la store así
const store = createStore(reducer, applyMiddleware(thunk, logActions));
```

## Redux Saga

Para instalar:

```
npm i redux-saga
```

Documentación: https://redux-saga.js.org/

# Notas Importantes

Se puede controlar la UI a través de un `action`
