Técnicas avanzadas de Redux dictadas por Bedu

## Parámetros por URL

Podemos pasar parámetros por URL con React router, por ejemplo al ir a las publicaciones de cada usuario al dar click en una view, podemos hacer uso de `react router` para manejar esa lógica:

- Archivo de rutas:

```js
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/publications/:key" element={<Publications />} />{' '}
          {/*los 2 puntos nos dice que tiene que obtener los valores que le siguen a través del componente Link*/}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
```

- Archivo del componente Link:

```js
<Link to={`/publications/${key}`}>
  <div className="eye-solid icon"></div>
</Link>
```

> Para obtener esos parámetros enviados a través del componente Link, podemos utilizar un Hook que nos proporciona React Router llamado `useParams`

```js
import React from 'react';
import { useParams } from 'react-router-dom';

const Publications = () => {
  const { key } = useParams();
  {
    /*Utilizamos el hook para obtener la info que me hace falta para entrar a la ruta correcta*/
  }

  return (
    <div>
      <h1>{key}</h1>
    </div>
  );
};

export default Publications;
```

## Compartir Reducer

A medida que nuestra app crece vamos a querer tener control sobre lo que estamos haciendo y dividir los reducers y así evitar confusiones.
Al compartir un reducer, también estamos compartiendo TODO el estado a cualquier componente que querramos.

- Por ejemplo, al momento de tratar de controlar una llamada de usuarios, es válido que tengamos toda la store disponible, para lograr eso debemos hacer uso de `combineReducers` que es una función que retorna un reducer padre que es un objeto con todos los reducers que se le pasen como parámetros.
- Después, este reducer padre llama a cada reducer hijo y crea un `único objeto de estado`

> Referencia: https://es.redux.js.org/docs/api/combine-reducers.html

Caso de uso de `combineReducers`:

```js
import usuariosReducer from './usuariosReducer';
import publicacionesReducer from './publicacionesReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  usuariosReducer,
  publicacionesReducer,
});
```

- Para conectar cada reducer con algún componente, debemos retornar un reducer específico con la función `mapStateToProps`:

```js
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
};
```

Y podríamos controlar las variables del estado general así:

```js
props.cargando;
const { usuarios, error } = props;
```

> NOTA IMPORTANTE: En cada reducer debe haber un estado inicial por defecto para que la función `combineReducers` haga su trabajo y retorne un único objeto de estado. (puede variar)

## Múltiples Reducers

Utilizamos `combineReducers` para hacerlo. Al momento de compartir los reducers a diferentes componentes, debemos hacer lo siguiente en `mapStateToProps`:

```js
const mapStateToProps = ({ usuariosReducer, publicacionesReducer }) => {
  return { usuariosReducer, publicacionesReducer };
};
```

- Para definir a qué estado de reducer voy a consultar la información, debemos especificarlo de la siguiente manera:

```js
const { usuarios } = props.usuariosReducer;
```

> Al compartir reducers, también, en algún momento haremos uso de actions, en ese caso vamos a tener que utlizar un método:

```js
const mapDispatchToProps = {
  ...usuariosFetched,
  ...getPublicaciones,
};
```

## Llamando a múltiples reducers en un solo action

- Cada `action` y cada tipo de `reducer` debe hacer una sola cosa específica y tener un nombre específico también para evitar errores de lógica:

```js
import * as usuariosFetched from '../../actions/usuariosAction';
import * as getPublicaciones from '../../actions/publicacionesAction';

const { usuariosFetched: usuariosFetchedAction } = usuariosFetched; // la key es el nombre de la función dentro de los actions
const { getPublicacion: getPublicacionesAction } = getPublicaciones; // la key es el nombre de la función dentro de los actions

const mapDispatchToProps = {
  usuariosFetchedAction,
  getPublicacionesAction,
};
```

## Uso del estado en el action

Para obtener el estado de un reducer en específico en React, podemos hacer mediante el parámetro `getState`:

```js
export const getPublicacion = (id) => async (dispatch, getState) => {
  const { usuarios } = getState().usuariosReducer; // uso de getState
  const usuario_id = usuarios[id - 1].id;
  dispatch({ type: CARGANDO_PUBLICATIONS });

  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);

    dispatch({
      type: PUBLICACIONES_FETCHED,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: ERROR_PUBLICATIONS,
      payload: error.message,
    });
  }
};
```

## Inmutabilidad

Que algo sea `inmutable` significa que no se puede cambiar su valor. Un ejemplo son los strings, que con sus métodos, crean unos nuevos valores y no sobreescriben el string existente:

```js
let string = 'Leninner';

let arrayOfTheString = string.split('');

console.log(string); // "Leninner"
console.log(arrayOfTheString); // ["L", "e","n","i","n","n","e","r"]
```

## Evitar sobreescritura

Revisar el siguiente código:

```js
if (!('publicaciones_key' in usuarios[key])) {
  return props.getPublicacionesAction(key);
}
```
