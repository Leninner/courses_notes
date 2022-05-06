<h1>Next Js, el framework de React</h1>

**Índice**

- [¿Qué es Next Js?](#qué-es-next-js)
- [Algunas características importantes de Next Js](#algunas-características-importantes-de-next-js)
- [Setup de una aplicación de Next Js](#setup-de-una-aplicación-de-next-js)
- [Navegando entre páginas](#navegando-entre-páginas)
- [Code spliting y prefetching](#code-spliting-y-prefetching)
- [Assets, Metadata  y CSS](#assets-metadata--y-css)

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

<h1 className="title">
  Read
  <Link href="/posts/first-post">
    this page!
  </Link>
</h1>
```

El componente **Link** necesita de una propiedad `href` que es el enlace a la página que queremos navegar. Este componente no acepta la palabra **className**, sino que si queremos darle un estilo, debemos usar una etiqueta **a** y pasarle la propiedad **className*:

```jsx

<h1 className="title">
  Read
  <Link href="/posts/first-post">
    <a className="link">
      this page!
    </a>
  </Link>
</h1>
```

## Code spliting y prefetching

Next Js hace que solamente se cargue contenido en demanda de nuestra aplicación, teniendo así una mejor experiencia de usuario y velocidad de carga.

## Assets, Metadata  y CSS

<!-- https://nextjs.org/learn/basics/assets-metadata-css -->