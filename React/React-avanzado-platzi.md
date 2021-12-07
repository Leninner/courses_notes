_Índice:_

- [React JS](#react-js)
  - [Configuración del entorno de desarrollo desde cero](#configuración-del-entorno-de-desarrollo-desde-cero)
  - [Configuración de Linters](#configuración-de-linters)
  - [Deploy con Vercel](#deploy-con-vercel)
  - [CSS in JS](#css-in-js)
    - [React Icons](#react-icons)
    - [Pasar de SVG a Componente](#pasar-de-svg-a-componente)
    - [Animaciones con Keyframes](#animaciones-con-keyframes)
  - [Hooks](#hooks)
    - [React.useState](#reactusestate)
    - [React.useEffect](#reactuseeffect)

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
