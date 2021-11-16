**Índice**:

- [Diferencias entre Bootstrap y Tailwind](#diferencias-entre-bootstrap-y-tailwind)
- [Instalación con CDN](#instalación-con-cdn)
- [Puntos de Quiebre](#puntos-de-quiebre)
- [Instalación con NPM](#instalación-con-npm)
- [TailwindCSS con ReactJS](#tailwindcss-con-reactjs)

# Diferencias entre Bootstrap y Tailwind

En Bootstrap ya tenemos los estilos realizados en tarjetas dentro de su web. Perdemos el control sobre la personalización.

En Tailwind debemos configurar todo de forma manual, con Tailwind vamos a escribir poco CSS y tenemos mucha más oportunidad de personalización

REF: https://tailwindcss.com/docs

# Instalación con CDN

NOTE: No se tiene control sobre el tema predeterminado de Tailwind

Lo instalamos con esto:

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

py-2 => Padding en el eje Y de 2rm.
px-2 => Padding en el eje X de 2rm.

# Puntos de Quiebre

Sirve para hacer sitios web responsivos. Al ir achicando el tamaño vamos a tener en punto de Quiebre

Breakpoint prefix Minimum width CSS
**sm** 640px @media (min-width: 640px) { ... }
**md** 768px @media (min-width: 768px) { ... }
**lg** 1024px @media (min-width: 1024px) { ... }
**xl** 1280px @media (min-width: 1280px) { ... }
**2xl** 1536px @media (min-width: 1536px) { ... }

NOTE: Si no configuramos un color, se hereda el de menor tamaño

Lo mejor para aprender Tailwind es visitar su documentación

# Instalación con NPM

1. Inicializar el proyecto con Node:

```bash
npm init -y
```

2. Instalar PostCss

```bash
npm i -D postcss postcss-cli
```

3. Crear archivo para configurar PostCss (postcss.config.js)

```js
module.exports = {
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
```

4. Instalar Tailwind

```bash
npm install -D tailwindcss@latest autoprefixer@latest

O por separado:

npm i -D tailwindcss
npm i -D autoprefixer => Plugin de postcss. Sirve para transpilar css.
```

5. Crear archivo de configuración de Tailwind

```bash
npx tailwindcss init
```

6. Extraer código css de Tailwind

Crear una carpeta src y dentro ubicar el archivo css para tailwind y dentro ubicar lo siguiente:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

7. Crear scripts en el documento PACKAGE.JSON

```json
Build:

"build": "postcss src/tailwind.css -o public/styles/style.css",

Watch:

"watch": "postcss src/tailwind.css -o public/styles/style.css --watch",
```

8. Extensiones para trabajar con Tailwind

- Headwind => Nos permite ordenar las clases y eliminar las repetidas
- PostCSS Language Support
- Tailwind CSS IntelliSense => Recordar las clases de tailwind

# TailwindCSS con ReactJS

1. Primero creamos la applicación con React:

```bash
npx create-react-app appTailwind
```

2. Segundo vamos a ingresar dentro de la app y vamos a instalar Tailwind, postcss-cli y autoprefixer:

```bash
npm install tailwindcss postcss-cli autoprefixer -D

o

npm i tailwindcss postcss-cli autoprefixer -D
```

3. Luego, creamos un archivo **postcss.config.js** en la raíz del proyecto y añadimos la siguiente config:

```js
module.exports = {
  plugins: [
    // ...
    require('tailwindcss'),
    require('autoprefixer'),
    // ...
  ],
};
```

4. Luego nos vamos a src y creamos un directorio llamado assets y creamos un archivo css: (tailwind.css) y dentro va esta config base:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Si queremos podemos añadir más configuraciones de estilos:

```css
.btn {
  @apply py-2 px-4 rounded;
}

.btn-blue {
  @apply bg-blue-500 text-white;
}

.btn-blue:hover {
  @apply bg-blue-700;
}

.card {
  @apply rounded overflow-hidden shadow-lg;
}
```

5. Creamos los scripts que nos van a ayudar en el proyecto

```json
"scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
```

> Para empezar a utilizarlo, debemos importar el archivo generado, en el caso anterior es main.css, en el archivo general, antes de que pase a ser pintado en el DOM. En el caso general, sería en App.jsx
