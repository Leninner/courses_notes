<h1 align="center">React Hooks</h1>

<div align="center">
   Notas del Curso Profesional de React Hooks de <a href="https://platzi.com/cursos/react-hooks/">Platzi</a>
</div>

<div align="center">
  <h3>
    <a href="https://www.linkedin.com/in/leninner/">
       @leninner
    </a>
    <span> | </span>
    <a href="https://story-hook-app.vercel.app/">
      Proyecto del Curso
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introducción a los Hooks](#introducción-a-los-hooks)
- [Use State](#use-state)
- [Use Effect](#use-effect)
- [Use Context](#use-context)
- [Use Reducer](#use-reducer)

## Introducción a los Hooks

Son una forma de tener estado y ciclo de vida en nuestros componentes funcionales y así, prescindir de los componentes de clase.

Están disponibles a partir de la versión [16.8.0 de React](https://reactjs.org/docs/hooks-intro.html).

## Use State

El hook [useState](https://reactjs.org/docs/hooks-reference.html#usestate) sirve para controlar el estado de nuestro componente, su implementación en muy fácil.

Ejemplo de contador con uso de `useState`:

```jsx
import { useState } from 'react';

export const SomeComponent = () => {
  const [state, setState] = useState(0); // useState Hook

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>Contador: {state}</h1>
      <button onClick={handleClick}>Aumentar</button>
    </div>
  );
};
```

Por convención, a la segunda posición del arreglo de `useState` empieza por `set`, y eso nos quiere decir que algo va a cambiar.

## Use Effect

El hook [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) nos ayuda a ejecutar un efecto cuando alguna de las variables que le pasamos como segundo parámetro a este hook cambia.

- Ejemplo de `useEffect` para un evento de escucha de `mousemove` en el documento:

```jsx
import { useEffect } from 'react';

export const SomeComponent = () => {
  const handleMouseMove = (event) => {
    console.log(event);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Este es un efecto cool</h1>
    </div>
  );
};
```

Este hook retorna una función de `limpieza`, que se va a ejcutar cuando un componente muera. En el caso anterior, cuando el componente se destruya, se va a eliminar el evento de escucha de `mousemove`.

## Use Context

Es la fusión de React Hooks y [Context API](https://reactjs.org/docs/context.html).
Nos permite comunicar componentes de forma más amigable

Para empezar a utilizar el context y el hook [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext) debemos crear un carpeta llamada `context` dentro de nuestro proyecto y dentro vamos a crear un nuevo archivo que tenga un nombre descriptivo a nuestra aplicación `Context.js`.

Dentro de esa carpeta vamos a hacer código de la siguiente manera:

```js
import { createContext } from 'react';

export const ThemeContext = createContext({});
```

Recordemos que el contexto nos entrega un `provider` y un `consumer` para poder utilizarlo y para tener un código más limpio, podemos manejar la lógica de nuestro provider en el mismo archivo del contexto:

```js
import { createContext, useState } from 'react';

export const ThemeContext = createContext({});

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(!isDark);

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>;
};
```

Ya solo nos queda importar el `provider` dentro de la entrada de la App y hacemos uso de `useContext` para obtener el contexto y empezar a utilizar las propiedades necesarias, así:

```js
import { useContext } from 'react';
import { Header } from './components/Header';
import { Characters } from './components/Characters';
import { ThemeContext } from './context/ThemeContext';

export const HooksApp = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? 'dark' : ''}>
      <Header onClick={toggleTheme} dark={isDark} />
      <Characters />
    </div>
  );
};
```

## Use Reducer

Tiene características muy similar al concepto de `reducer` de Redux.
Este hook nos permite manejar el estado de nuestro componente pero NO es una alternativa a Redux

Este hook acepta dos parámetros, el `reducer` y el `initialState`:

- Fuera del componente

```js
const initialState = {
  favorites: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITEs':
      return { ...state, favorites: [...state.favorites, action.payload] };

    default:
      return state;
  }
};
```

- Dentro del componente:

```js
const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
```

Se hace una destructuración de `useReducer` y se le pasa el `reducer` y el `initialState`.
Para poder usar el dispatch debemos hacer algo como lo siguiente:

```js
const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

const handleClick = (character) => {
  dispatch({ type: 'ADD_TO_FAVORITEs', payload: character });
};
```
