<h1>Next Js, el framework de React</h1>

**Índice**

- [¿Qué es Next Js?](#qué-es-next-js)
- [Algunas características importantes de Next Js](#algunas-características-importantes-de-next-js)
- [Setup de una aplicación de Next Js](#setup-de-una-aplicación-de-next-js)
- [Navegando entre páginas](#navegando-entre-páginas)
- [Code spliting y prefetching](#code-spliting-y-prefetching)
- [Assets, Metadata y CSS](#assets-metadata-y-css)
  - [**Assets**](#assets)
  - [**Metadata**](#metadata)
  - [**JavaScript de terceros**](#javascript-de-terceros)
  - [**CSS Styling**](#css-styling)
  - [**Global Styles**](#global-styles)
- [Pre Renderizaje y Fetching de Datos](#pre-renderizaje-y-fetching-de-datos)

## ¿Qué es Next Js?

Es un framework de React que permite crear páginas web dinámicasm rápidamente.

Provee una capa de configuración necesaria para React, además de estructura adicional, características y optimizaciones para la aplicación.

<img src="../utils/images/next.png">

<h3><strong>
Algunas consideraciones que hay que tener en cuenta cuando desarrollamos con React JS y que Next JS puede ayudar a resolver:
</strong>
</h3>

- El **código debe empaquetarse** con un paquete como webpack y transformarse con un compilador como Babel.
- Debe realizar **optimizaciones de producción**, como la división de código.
- Es posible que desee renderizar previamente estáticamente algunas páginas para mejorar el rendimiento y el SEO. También es posible que desee utilizar la **representación del lado del servidor** o la **representación del lado del cliente**.
- Es posible que deba escribir algún código del lado del servidor para conectar su aplicación React a su database.

## Algunas características importantes de Next Js

Next JS provee:

- Un **sistema de enrutamiento intuitivo** basado en páginas (con soporte para rutas dinámicas)
- La representación previa, tanto la **generación estática (SSG)** como la **representación del lado del servidor (SSR)** son compatibles por página
- **División automática de código** para cargas de página más rápidas
- **Enrutamiento del lado del cliente** con captación previa optimizada
- Soporte integrado de **CSS y Sass**, y soporte para cualquier biblioteca **CSS-in-JS**
- Entorno de desarrollo con **soporte Fast Refresh**
- **Rutas de API** para crear puntos finales de API con funciones sin servidor
  -Totalmente extensible

## Setup de una aplicación de Next Js

Necesitas tener instalado Node.js, se necesita la versión 10.16.3 o superior. Visita la [documentación de Node.js](https://nodejs.org/en/download/) para más información.

Para crear un proyecto, ejecutamos el siguiente script en la terminal:

```bash
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"
```

El anterior script sirve para crear un proyecto de Next Js con una plantilla de Next Js de ejemplo.

## Navegando entre páginas

> Documentación de rutas: https://nextjs.org/docs/routing/introduction

En Next Js, `una página` es un componente de React que se exporta desde un archivo en el directorio `pages`.

Las páginas están asociadas con un enrutado basado en el nombre del archivo:

- `pages/index.js` => `/`
- `pages/about.js` => `/about`
- `pages/posts/first-post.js` => `/posts/first-post`

Para navegar entre páginas en **Next Js** usamos el componente `Link` de `next/link` que nos va a permitir hacer una navegación en el cliente a una página en la aplicación.

- Usando `Link` para navegar entre páginas:

```jsx
// Importamos el componente Link de Next Js
import Link from 'next/link';

<h1 className='title'>
  Read
  <Link href='/posts/first-post'>this page!</Link>
</h1>;
```

El componente **Link** necesita de una propiedad `href` que es el enlace a la página que queremos navegar. Este componente no acepta la palabra **className**, sino que si queremos darle un estilo, debemos usar una etiqueta **a** y pasarle la propiedad \*_className_:

```jsx
<h1 className='title'>
  Read
  <Link href='/posts/first-post'>
    <a className='link'>this page!</a>
  </Link>
</h1>
```

## Code spliting y prefetching

Next Js hace que solamente se cargue contenido en demanda de nuestra aplicación, teniendo así una mejor experiencia de usuario y velocidad de carga.

## Assets, Metadata y CSS

<!-- https://nextjs.org/learn/basics/assets-metadata-css -->

### **Assets**

Para añadir imágenes a la aplicación, podemos hacer uso del componente `Image` de `next/image`, el cuál va a ayudarnos a redimensionar y optimizar la imagen por defecto. Las imágenes en Next Js se cargan bajo demanda, es decir, tienen lazy load por defecto.

```jsx
import Image from 'next/image';

<Image src='/static/images/image.jpg' height='200px' width='200px' alt='My image' />;
```

### **Metadata**

Para añadir metadatos a las páginas de Next Js, podemos hacer uso del componente `Head` de `next/head`. Nos va a permitir

```jsx
import Head from 'next/head';

<Head>
  <title>My page title</title>
  <meta name='description' content='My page description' />
</Head>;
```

### **JavaScript de terceros**

Este código se refiere a todo script que se carga desde un recurso de terceros, como por ejemplo, analytics, ads, etc...

Primera forma de añadir JavaScript de terceros a nuestra aplicación:

```jsx
import Head from 'next/head';

<Head>
  <title>First Post</title>
  <script src='https://connect.facebook.net/en_US/sdk.js' />
</Head>;
```

Segunda forma, usando el componente `Script` de `next/script`:

```jsx
import Head from 'next/head';
import Script from 'next/script';

<Head>
  <title>First Post</title>
</Head>

<Script
  src="https://connect.facebook.net/en_US/sdk.js"
  strategy="lazyOnload"
  onLoad={() =>
    console.log(`script loaded correctly, window.FB has been populated`)
  }
/>
```

### **CSS Styling**

Next Js tiene soporte para Css y Sass, y soporta tanto CSS-in-JS como CSS-in-JS-in-JS.

Para añadir estilos con `Css Modules` vamos a crear un archivo css con el nombre `descriptiveName.module.css` y luego añadir una importación de este módulo en el archivo en donde queramos aplicar el estilo. Trabaja en el scope de componentes, y no en el scope global.

```jsx
import Link from 'next/link';
import styled from 'path-to-styles';

<h1 className={styles.title}>Leninner</h1>;
```

También puedes usar Scss para añadir módulos de estilos. Solo asegúrate de instalar scss

```bash
npm install -D sass
```

### **Global Styles**

**Css Modules** trabaja muy bien con componentes, pero para añadir estilos globales, debemos crear una página en el directorio **`pages/_app.js`** con el siguiente contenido:

```jsx
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

En el directorio raiz vamos a crear un directorio `styles` y dentro de este vamos a crear un archivo `global.css` con el siguiente deseado y luego vamos a importar ese archivo en el archivo `_app.js`:

```jsx
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

## Pre Renderizaje y Fetching de Datos
