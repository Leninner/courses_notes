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
- [Memoization](#memoization)
- [Use Memo](#use-memo)
- [useRef](#useref)
- [useCallback](#usecallback)
- [Optimización de componentes en React con React.memo](#optimización-de-componentes-en-react-con-reactmemo)
  - [React.memo vs. React.PureComponent](#reactmemo-vs-reactpurecomponent)
    - [¿Cómo funciones React.PureComponent?](#cómo-funciones-reactpurecomponent)
    - [¿Cómo funciones React.memo y cuándo debo usarlo?](#cómo-funciones-reactmemo-y-cuándo-debo-usarlo)
- [Custom Hooks: Abstracción de la lógica](#custom-hooks-abstracción-de-la-lógica)
- [Integrar la aplicación con PayPal](#integrar-la-aplicación-con-paypal)
  - [Crear una app en PayPal para recibir pagos:](#crear-una-app-en-paypal-para-recibir-pagos)
  - [Ver mis traslaciones:](#ver-mis-traslaciones)

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

## Memoization

Con la técnica de la `memoización` vamos a ser capaces de guardar el resultados de los cálculos cada vez que los hacemos para no tener que repetirlos en el futuro.

> Estamos ahorrando grandes cantidades de tiempo a cambio de `mucho` espacio de almacenamiento.

Es una gran técnica de React para optimizar el rendimiento de nuestra aplicación.

1. Ejemplo de memoization con el cálculo de `factorial` de un número:

- La forma tradicional de calcular el factorial de un número con recursividad es:

```js
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
```

Al momento de calcular el factorial de 5 y luego el factorial de 10, vamos a estar repitiendo los últimos cálculos del factorial de 5. Para evitar esto, podemos utilizar `memoization`:

- Utilización de memoization para controlar el cálculo del factorial de un número:

```js
const memo = [];

function memoFactorial(n) {
  if (n === 1) {
    return 1;
  } else if (!memo[n]) {
    memo[n] = n * memoFactorial(n - 1);
  }
  return memo[n];
}
```

1. Ejemplo de memoization con el cálculo de `fibonacci`:

> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377...

- El algoritmo para encontrar un número en la posición `n` en la serie de Fibonacci es:

```js
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
```

Vamos a guardar el resultado de cada cálculo Fibonacci en una variable memo, así cuando debamos volver a calcular el Fibonacci de un número, podemos simplemente utilizar el resultado que previamente calculamos.

```js
const memo = [];

function memoFibonacci(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (!memo[n]) {
    memo[n] = memoFibonacci(n - 1) + memoFibonacci(n - 2);
  }
  return memo[n];
}
```

> Recuerda que solo debemos implementar memoización en funciones puras, es decir, funciones que siempre devuelven el mismo resultado cuando enviamos los mismos argumentos.

No implementes memoización en llamados a una API o para trabajar con fechas y horas en JavaScript.

## Use Memo

[useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)

Nos va a permitir evitar cálculos innecesarios en nuestra aplicación aplicando la técnica de la `memoización`

Para hacer uso de useMemo, vamos a importar el Hook y vamos a crear un código similar a este filtro de búsquedas:

```js
const filteredUsers = useMemo(() => {
  return data.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });
}, [data, search]);
```

`useMemo` recibe dos parámetros, un callback y un arreglo de dependencias (en este caso, `data` y `search`) y le va a permitir ejecutar el callback sólo cuando alguna de las dependencias cambie.

## useRef

[useRef](https://reactjs.org/docs/hooks-reference.html#useref)

Nos va a permitir crear referencias a nuestros objetos de HTML. Es muy bueno usar este hook para controlar formularios e inputs para evitar bugs

Para crear referencias vamos a importar el hook useRef y vamos a crear un código similar a este:

```js
import { useRef } from 'react';

// Creación de la referencia

const searchValue = useRef(null);

// Utilización de la referencia

<input type="text" name="search" id="search" value={search} onChange={handleSearch} ref={searchInput} />;
```

Para acceder a los datos de la referencia, vamos a utilizar el método `current`:

```js
const handleSearch = () => setSearch(searchInput.current.value);
```

## useCallback

[When use useMemo and when use useCallback?](https://kentcdodds.com/blog/usememo-and-usecallback)

[useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback)

Este hook nos va a ayudar a evitar cálculos innecesarios en nuestras funciones, funcione de manera similar a useMemo, solo que useCallback solo se usa en funciones.

Hay que tener cuidado, ya que al estar implementando técnicas de rendimiento, si no lo hacemos con responsabilidad, vamos a tener peores problemas de rendimiento.

Para usar este hook, lo hacemos así:

```js
import { useCallback } from 'react';
// Uso de useCallback
const handleSearch = useCallback(() => {
  setSearch(searchInput.current.value);
}, []);
```

## Optimización de componentes en React con React.memo

Optimizar significa que vamos a ahorrar renders o cálculos innecesarios a nuestros componentes para darle una mejor experiencia a nuestros usuarios.

### React.memo vs. React.PureComponent

Vamos a evitar renders innecesarios causados por un mal manejo de las props

#### ¿Cómo funciones React.PureComponent?

Por defecto el método `shouldComponentUpdate` compara las props nuevas y viejas, si no han cambiado, evita volver a llamar el método render del componente.
Es un método de `class components`.
Esta comparación se llama [Shallow Comparison](https://github.com/facebook/react/blob/cb7075399376f4b913500c4e377d790138b31c74/packages/shared/shallowEqual.js#L19).

- ¿Cuándo usarlo?

Lo debemos usar cuando veamos que nuestros componentes tienes re-renders inncesearios. PAra poder indenfiticar esto vamos a movernos a la pestaña `profiles` de React Dev Tools e indentifiquemos si una App tiene renders innecesarios

#### ¿Cómo funciones React.memo y cuándo debo usarlo?

React.memo es el equivalente en `functional components` de React.PureComponent el cuál se usa en `class components`

- Ejemplo sin aplicacar React.memo

```js
const App = function () {
  console.log('Render App');

  const [count, setCount] = React.useState(1);
  const [canEdit, setCanEdit] = React.useState(true);

  const countPlusPlus = () => {
    console.log('Click al botón de counter');
    setCount(count + 1);
  };

  const toggleCanEdit = () => {
    console.log('Click al botón de toggleCanEdit');
    setCanEdit(!canEdit);
  };

  return (
    <>
      <button onClick={countPlusPlus}>Counter +1</button>
      <Counter count={count} />

      <button onClick={toggleCanEdit}>Toggle Can Edit</button>
      <Permissions canEdit={canEdit} />
    </>
  );
};

const Permissions = function ({ canEdit }) {
  console.log('Render Permissions');

  return (
    <form>
      <p>Can Edit es {canEdit ? 'verdadero' : 'falso'}</p>
    </form>
  );
};

const Counter = function ({ count }) {
  console.log('Render Counter');

  return (
    <form>
      <p>Counter: {count}</p>
    </form>
  );
};
```

En el ejemplo anterior, todos los componentes hijos se renderizan a pesar de no tener cambios en sus props.

- Ahora usemos React.memo para que nuestro componente no se renderice si las props que recibe siguen igual que en el render anterior.

```js
const App = React.memo(function () {
  /* … */
});

const Permissions = React.memo(function ({ canEdit }) {
  /* … */
});

const Counter = React.memo(function ({ count }) {
  /* … */
});
```

Para crear una validación personalizada vamos a escribir un código como el siguiente:

```js
function memoStopIfPropsAreEqualOrNot(oldProps, newProps) {
  return true;
}

const Permissions = React.memo(function ({ canEdit }) {
  /* … */
}, memoStopIfPropsAreEqualOrNot);
```

En el caso anterior evitamos que nuestro componente se actualice sin importar si cambian nuestras props.

Pero ¿qué tal si sí debemos volver a renderizar cuando cambia alguna de nuestras props?

```js
function memoIsInputEqual(oldProps, newProps) {
  if (oldProps.input.value !== newProps.input.value) {
    return false;
  } else {
    return true;
  }
}

const Permissions = React.memo(function ({ canEdit }) {
  /* … */
}, memoIsInputEqual);
```

La función de evaluación de React.memo debe devolver false si nuestras props son diferentes y, por ende, queremos permitir un nuevo render.

> La reocmendación lo mismo que el autor marca, solo usarlo cuando veas que el componente no va a tener actualizaciones.

## Custom Hooks: Abstracción de la lógica

> Custom hooks creados por la comunidad: https://usehooks.com/

> React Redux: https://react-redux.js.org/

Nos ayudan a crear nuestros propios hooks y usarlos en cualquier parte, sirve de mucho para separar la lógica de nuestros componentes

## Integrar la aplicación con PayPal

Para utilizar la API de PayPal para integrar pagos es necesario darse de alta en PayPal Developer. En este sitio podrás encontrar todos los recursos necesarios para empezar a integrar pagos en tus páginas web y en nuestro proyecto Platzi Conf Merch.

Una vez que te has registrado es necesario seguir los siguientes pasos para crear tu token de desarrollo y poderlo integrar en este proyecto.

Crear “Sandbox Access Token”:
Dentro de tu cuenta como desarrollador debes dirigirte al apartado “My Apps & Credentials” y en la parte inferior encontrarás el apartado “Express Checkout via Braintree SDK - Sandbox Accounts” donde crearemos nuestro token para la aplicación.

Elegimos el tipo de cuenta que vamos a utilizar (Personal/Business).

Ahora que tenemos nuestro token generado debemos de revisar a detalle la expiración, así como el manejo de divisas que vamos a utilizar.

Si no encuentras tu divisa, selecciona “United States Dollar” que sería la divisa por defecto.

Si queremos revisar, actualizar el token o hacer algún cambio podemos regresar a la sección “My Apps & Credentials” para ver los detalles de tu cuenta.

IMPORTANTE: para efectos de pruebas es necesario tener tu token válido en modo “Sandbox”. Si quieres habilitar tu token para tu proyecto en producción solo debes de seguir los mismos pasos pero eligiendo la opción de “Live” y creando una nueva App.

### Crear una app en PayPal para recibir pagos:

Para habilitar PayPal como un método de pago válido y recibir transacciones en tu proyecto en producción debemos crear una aplicación a la cual estará ligado nuestro token.

Una vez creado este token ligado a tu cuenta principal podrás elegir las características a las cuales podemos acceder, seleccionamos todas y le damos “save”.

Es necesario especificar una URL de retorno cuando la transacción ha sido exitosa, es parte de los requerimientos para este proyecto. Ahora que tienes todos los requisitos tienes tu API token listo para producción.

### Ver mis traslaciones:

En el apartado de “Sandbox” podrás ver las cuentas creadas, notificaciones, los llamados a la API, el simulador entre otras herramientas que te ayudarán a darle seguimiento a tus pruebas de integración con PayPal.

Para revisar tus llamados y eventos en tu API de producción solo debes de dirigirte al apartado “Live” donde encontrarás la información que estás solicitando para ver qué está pasando con cada evento ocurrido.
