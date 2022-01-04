_Índice:_

- [React JS](#react-js)
  - [Configuración del entorno de desarrollo desde cero](#configuración-del-entorno-de-desarrollo-desde-cero)
  - [Configuración de Linters](#configuración-de-linters)
  - [Deploy con Vercel](#deploy-con-vercel)
  - [CSS in JS](#css-in-js)
    - [React Icons](#react-icons)
    - [Pasar de SVG a Componente](#pasar-de-svg-a-componente)
    - [Animaciones con Keyframes](#animaciones-con-keyframes)
    - [Props en Styled Components](#props-en-styled-components)
    - [Animaciones con Animate.css](#animaciones-con-animatecss)
  - [Hooks](#hooks)
    - [React.useState](#reactusestate)
    - [React.useEffect](#reactuseeffect)
    - [Custom Hooks](#custom-hooks)
    - [Use Ref](#use-ref)
  - [Context API](#context-api)
  - [Intersection Observer](#intersection-observer)
    - [Uso de polyfill de Intersection Observer e imports dinámicos](#uso-de-polyfill-de-intersection-observer-e-imports-dinámicos)
    - [Imports Dinámicos](#imports-dinámicos)
  - [Local Storage](#local-storage)
  - [Parámetros para un query con GraphQL](#parámetros-para-un-query-con-graphql)
  - [Usar render Props para recuperar datos](#usar-render-props-para-recuperar-datos)
  - [Session Storage vs Local Storage](#session-storage-vs-local-storage)
  - [JWT](#jwt)

# React JS

Está basado en componentes y es `declarativo`.

> Imperativo: Declarar TODOS los pasos para llegar al objetivo que quiero

> Declarativo: Decir el resultado final que quiero. En el caso de React, hará todos los cambios necesarios para conseguir el producto final que quiero.

## Configuración del entorno de desarrollo desde cero

> Inicializar el proyecto con node: `npm init -y`

Instalar `Webpack y Webpack CLI`

```bash
npm i webpack webpack-cli webpack-dev-server -D
```

Instalar loader para HTML

```bash
npm i html-webpack-plugin -D
```

Instalar React y React-Dom:

```bash
npm i react react-dom
```

Instalar `babel` para transpilar el código:

```bash
npm i @babel/core @babel/preset-env babel-loader @babel/preset-react @babel/plugin-syntax-jsx -D
```

Configuración de `webpack.config.js` en la raíz del proyecto:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: '.src/index.(js|jsx)', // OJO
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
```

Configuración de scripts en `package.json`:

```json
"scripts": {
        "build": "webpack",
        "start": "webpack serve --open --mode development"
    },
```

- Configuración del archivo `.babelrc` en la raíz del proyecto:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"],
  "plugins": ["@babel/plugin-syntax-jsx"]
}
```

## Configuración de Linters

> Es totalmente opcional, pero es una buena práctica. Existen muchos linters y entre ellos `StandardJs`. StandardJS nos va a servir de Linter para una mejor escritura de JavaScript/React

Instalación:

```bash
npm i standard -D
```

Agregar un script a `package.json`:

```json
"scripts": {
  "lint": "standard",
}
```

Para añadir archivos a excluir:

```json
"standard": [
	"ignore": [
		"/api/**"
	]
]
```

## Deploy con Vercel

> Seguir los pasos oficiales de Vercel: https://vercel.com/docs/concepts/git/vercel-for-github

## CSS in JS

Nos permite crear CSS directamente en JS y evitar los problemas de clases que puede provocar utilizar CSS separado.

- Styled Components
  Nos permite escribir CSS más limpio y evitar los problemas con las clases.

  Es una biblioteca para React que permite estilar los elementos del marcado de HTML directamente en JS.

Para instalar `Styled Components`:

```bash
npm i styled-components
```

Para usar `Styled Components`:

1. Crear otro archivo llamado `styles.js` en la misma carpeta que el componente
2. Empezar a estilar con la sintáxis propuesta:

```js
import styled from 'styled-components';

export const Anchor = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  text-decoration: none;
  width: 75px;
`;

export const Image = styled.img`
  border: 1px solid #e6e6e6;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  object-fit: cover;
  overflow: hidden;
  height: 75px;
  width: 75px;
`;
```

3. Para aplicar los estilos, debemos cambiar cada elemento HTML por el nombre de los estilos para esa etiqueta:

- Antes de aplicar `styled-components`

```js
import React from 'react';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <a href={path}>
    <img src={cover} alt={emoji} />
    {emoji}
  </a>
);
```

- Aplicando `styled-components`

```js
import React from 'react';
import { Anchor } from './styles';
import { Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Anchor href={path}>
    <Image src={cover} alt={emoji} />
    {emoji}
  </Anchor>
);
```

> Es una buena práctica definir estilos globales. Para leer la documentación, entrar aquí: https://scalablecss.com/styled-components-global-styles/

- Estilos Globales

Vamos a crear un archivo llamado `GlobalStyles.js` y dentro vamos a dar estilos globales de la siguiente manera:

```js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

*, *:before, *:after {
    box-sizing: inherit;
  }

ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

ul {
    list-style: none;
  }

  button: {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%;
  }

#root {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    overflow-x: hidden;
    min-height: 100vh;
    padding-bottom: 10px;
  }
`;
```

Para utilizarlos, en el archivo `App.jsx` vamos a hacer lo siguiente:

```js
import React from 'react';
import { GlobalStyles } from './GlobalStyles';

export const App = () => (
  <>
    <GlobalStyles />
    {/*Otros componentes o rutas*/}
  </>
);
```

### React Icons

Nos sirve para utilizar iconos bonitos en los proyectos de React. https://react-icons.github.io/react-icons/icons?name=md

Para instalar:

```bash
npm i react-icons
```

Para usar los iconos:

```js
import { IconName } from 'react-icons/ruta';
```

Para usar los iconos, se lo debe hacer como si fueran componentes, los cuáles aceptan una propiedad llamada `size`:

- Ejemplo de uso

```js
import { MdFavoriteBorder } from 'react-icons/md';

<Button>
  <MdFavoriteBorder size="32px" />
  {likes} likes!
</Button>;
```

### Pasar de SVG a Componente

1. Utilizar el sitio web https://maketext.io/ para crear iconos de la nada y descargar el resultado como SVG

2. Irse a https://jakearchibald.github.io/svgomg/ para optimizar los SVGs que tenemos, quitándole comentarios, etiquetas y otras cosas que no nos sirven y copiamos el código que se nos generó.

3. Irse a https://react-svgr.com/playground/ y crear el componente para React y en el proyecto vamos a crear nuestro componente

### Animaciones con Keyframes

Para crear animaciones se debe importar lo siguiente:

```js
import styled, { keyframes } from 'styled-components';
```

Para crear las animaciones:

```js
const fadeIn = keyframes`
  from {
    opacity: 0;
    filter: blur(5px);
  }

  to {
    opacity: 1;
    filter: blur(0);
  }
`;
```

Para usar las animaciones podemos hacer lo siguiente:

```css
animation: 1s ${fadeIn} ease-in-out;
```

> Se pueden crear funciones que retorner animaciones, y así separar las animaciones en una carpeta y que se tengan disponibles para cualquier componente

- Para crear funciones que retornan animaciones

```js
import styled, { css, keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

// Función que retorna animaciones

const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`
    animation: ${time} ${fadeInKeyframes} ${type};
  `;
```

Y para usar la función, basta con hacer algo como esto:

```js
const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
   {
    /*Aquí estamos ejecutando la función que nos devuelve una animación*/
  }
  ${fadeIn()}
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;
```

> Es una muy buena práctica separar el código en sus respectivas carpetas

### Props en Styled Components

A veces vamos a querer renderizar diferentes estilos dependiendo de distintos parámetros. Para poder constrolar esto con `styled components` podemos hacer esto:

- En el archivo de estilos:

```js
import styled, { css } from 'styled-components';

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
       {
        background-color: white;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
        margin: 0 auto;
        left: 0;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(0.5);
        z-index: 1;
      }
    `}
`;
```

- En el componente a usar props:

```js
const renderList = (fixed) => {
  return (
    <List fixed={fixed}>
      {categories.map((category) => (
        <Item key={category.id}>
          <Category {...category} />
        </Item>
      ))}
    </List>
  );
};
```

### Animaciones con Animate.css

> https://animate.style/

## Hooks

### React.useState

Nos srive para controlar el estado:

- La primera posición es el estado en si, y la segunda posición es la función para actualizar el estado.

```js
const [state, setState] = React.useState([]); // el parámetro enviado a useState es el estado que tendrá la variable de estado por defecto
```

### React.useEffect

Sirve para ejecutar acciones justo después de que toda la UI se haya ejecutado, para usarlo:

- Acepta una función como primer parámetro y en el segundo parámetro acepta un arreglo de todas las dependencias que le van a decir al efecto que se renderice

> Si pasamos un arreglo vacío, entonces el efecto se va a ejecutar una sola vez. Si no pasamos nada como segundo parámetro, el efecto caerá en un bucle infinito de ejecuciones

```js
useEffect(() => {
  console.log('Yes');
}, []);
```

### Custom Hooks

Son métodos que nos sirven para crear Hooks propios que nos retornen información para utilizarla en cualquier componente, se pueden crear así:

```js
const useCategoriesData = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios('https://petgram-server-leninner.vercel.app/categories').then((response) => {
      setCategories(response.data);
      setLoading(false);
    });
  }, []);

  return { categories, loading };
};
```

- Para poder utilizar los datos que nos retorna el custom hook:

```js
const { categories, loading } = useCategoriesData();
```

- Podemos retornar objetos o también arreglos, dependiendo nuestras necesidades

```js
import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = JSON.parse(window.localStorage.getItem(key));
      return item ? JSON.parse(item) : initialValue;
    } catch (e) {
      return initialValue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (e) {
      console.log(e);
    }
  };

  return [storedValue, setLocalStorage];
};
```

> Es una buena práctica separar los custom hooks en componentes diferentes

### Use Ref

Sirve para tomar la referencia de un elemento en el DOM.

Para poder usarlo:

```js
import React, { useEffect, useRef } from 'react';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {
  const imgRef = useRef(null);

  // Método para ver en consola la referencia de la imagen
  useEffect(() => {
    console.log(imgRef);
  }, [imgRef]);

  return (
    <article ref={imgRef}>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt={id} />
        </ImgWrapper>
      </a>

      <Button>
        <MdFavoriteBorder size="32px" />
        {likes} likes!
      </Button>
    </article>
  );
};
```

## Context API

Context API es una característica que tiene React para poder pasar datos en nuestra aplicación sin necesidad de usar las Props.

Para poder usarlo, vamos a crear un archivo dónde vamos a darle la siguiente estructura:

- Context.jsx

```js
import { createContext } from 'react';

const Context = createContext();

export default Context;
```

Luego, en nuestro punto de entrada, en el `index.jsx` vamos a importar el contexto y vamos a envolver nuestra `App` con el componente `Provider` que nos da el contexto:

> También tenemos el componente `Consumer`

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Context from 'path/to/Context';

ReactDOM.render(
  <Context.Provider value={{ isAuth: false }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);
```

Para usar el componente `Consumer`, debemos tener en cuenta algunas consideraciones:

- El hijo que se le pasa al Consumer debe ser una función

```js
import Context from 'path/to/context';

//Se usa así el consumer
<Context.Consumer>{({ isAuth }) => <PrivateRoute isAuth={isAuth} />}</Context.Consumer>;
```

- Podemos crear nuestro contexto de la siguiente manera:

- Context.jsx

```js
import React, { createContext, useState } from 'react';

const Context = createContext();

const Provider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const value = {
    isAuth,
    activateAuth: () => {
      setIsAuth(true);
    },
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default { Provider, Consumer: Context.Consumer };
```

- Index.jsx

```js
<Context.Provider>
      <App />
</Context.Provider>,
```

- Una manera de consumir el método para autenticarme:

```js
import React from 'react';
import Context from '../Context';

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {({ activateAuth }) => {
        return (
          <form onSubmit={activateAuth}>
            <button>Iniciar Sesión</button>
          </form>
        );
      }}
    </Context.Consumer>
  );
};
```

NOTA IMPORTANTE: Cuando tenemos un hook que retorna los mismos valores que hace uso un input, podemos enviarlo a través de spread operator:

- Custom Hook

```js
export const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) => setValue(e.target.value);
  return { value, onChange };
};
```

- Inputs de un formulario

```js
import { useInputValue } from '../../hooks/useInputValue';
import React from 'react';

export const UserForm = ({ onSubmit }) => {
  const email = useInputValue('');
  const password = useInputValue('');

  return (
    <form onSubmit={onSubmit}>
      <input type="mail" placeholder="E-mail" {...email} />
      <input type="password" placeholder="Password" {...password} />
      <button>Iniciar Sesión</button>
    </form>
  );
};
```

## Intersection Observer

Este constructor permite analizar si un elemento está siendo observado por el usuario o no. Para usarlo en `React`, podemos hacer uso de `useRef` y un `useEffect`, así:

```js
import React, { useEffect, useRef } from 'react';

export const PhotoCard = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    // Constructor para crear un IntersectionObserver

    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      console.log(isIntersecting);
    });

    // Método para ejecutar el observer
    observer.observe(imgRef.current);
  }, [imgRef]);

  return <article ref={imgRef}></article>;
};
```

### Uso de polyfill de Intersection Observer e imports dinámicos

Intersection Observer no está soportado por todos los `navegadores` y por esa razón tenemos que agregar soporte, instalando un `polypill`: https://github.com/w3c/IntersectionObserver/tree/main/polyfill

Para instalar:

```bash
npm install intersection-observer
```

### Imports Dinámicos

Para hacer un import dinámico con intersection observer, el cuál devuelve una promesa, podemos utilizar esta sintaxis:

```js
useEffect(() => {
  // uso del import dinámico
  import('intersection-observer').then(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log('Si');
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(imgRef.current);
  });
}, [imgRef]);
```

- Si el navegador ya soporta Intersection Observer, podemos utilizar un operador ternario:

```js
useEffect(() => {
  // Aquí comprobamos si el está disponible o no en el navegador
  Promise.resolve(
    typeof window.IntersectionObserver !== 'undefined' ? window.IntersectionObserver : import('intersection-observer')
  ).then(() => {
    const observer = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(imgRef.current);
  });
}, [imgRef]);
```

> Para comprobar si alguna característica está soportada por los navegadores, podemos hacer uso de: https://caniuse.com/?search=intersection%20observer

## Local Storage

Simple, sirve para persistir los datos al recargar la página.

- Es un objeto que va guardando información y solo acepta estado de solo lectura. Para guardar info, podemos hacerlo así:

```js
window.localStorage.setItem(key, JSON.stringify(value));
```

> setItem recibe 2 parámetros. El primero es el valor de la `key` que va a tener el objeto de local storage y el segundo parámetro es el valor de esa llave. TODOS SIENDO STRINGS.

- Para obtener los valores de Local Storage, podemos utilizar:

```js
const hasLiked = JSON.parse(window.localStorage.getItem(key));
```

> Como en el estado tenemos valores JSON, entonces conviene convertir esos valores a Javascript con `JSON.parse`. El método `getItem` recibe un solo parámetro, que sería la `key` del objeto que está guardado en localStorage.

- Un `useState` puede recibir una función que va a retornar el valor que queremos que sea el estado inicial. Aquí un ejemplo sencillo:

```js
const [liked, setLiked] = useState(() => {
  try {
    const hasLiked = JSON.parse(window.localStorage.getItem(key));
    return hasLiked;
  } catch (e) {
    return false;
  }
});
```

## Parámetros para un query con GraphQL

## Usar render Props para recuperar datos

Pasar recuperar datos desde una URL, podemos empezar viendo que consulta tengo en el URL así:

```js
const urlParams = new window.URLSearchParams(window.location.search);

const detailId = urlParams.get('detail');

console.log(detailId);
```

Y el enrutado del componente antes de ir a esta URL debería verse así:

```js
<a href={`/?detail=${id}`}></a>
```

## Session Storage vs Local Storage

Session Storage sirve para guardar pares de datos en un objeto y se borran cuando se cierra el navegador o la ventana que actualmente se está viendo.

Local Storage sirve para guardar pares de datos en un objeto y se boarran manualmente cuando el usuario lo haga o borre la caché del sitio.

> La sintaxis es muy similar

- Local storage

```js
let key = 'Item 1';
// para guardar datos
localStorage.setItem(key, 'Value');

// para recuperar datos
let myItem = localStorage.getItem(key);

// para borrar datos
localStorage.removeItem(key);

// para eliminar todo lo local storage
localStorage.clear();

// Se debe guardar elementos js en formato de texto
let myObj = { name: 'Skip', breed: 'Labrador' };
localStorage.setItem(key, JSON.stringify(myObj));

// Para obtener valores y transformarlos a js
let item = JSON.parse(localStorage.getItem(key));

// para comprobar si el navegador soporta local storage
if (window.localStorage) {
  // localStorage supported
}
```

- Session Storage

```js
// Almacena la información en sessionStorage
sessionStorage.setItem('key', 'value');

// Obtiene la información almacenada desde sessionStorage
let data = sessionStorage.getItem('key');
```

## JWT

Un JSON Web Token (JWT) es un estándar abierto para crear tokens y asegurar que el envío de datos es confiable y seguro. Van a ser muy útiles para implementar la lógica de los likes pues solamente los usuarios autentificados podrán dar like.

Un JWT se conforma de 3 partes:

- Header: Es un objeto que define qué algoritmo y tipo tiene el token.
- Payload: La información que almacenamos en el token.
- Verify Signature: Una encriptación del header más el payload más tu llave secreta.

Para utilizar nuestro JWT necesitamos añadirlo al header authorization de las peticiones HTTP que hagamos con el texto Bearer [token].
