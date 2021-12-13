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

1. Primero creamos la applicación con React, con un template que nos ayude leyendo `postCss`:

```bash
npx create-react-app@next --scripts-version=@next --template=cra-template@next my-js-app
```

2. Instalamos `Tailwind` y todas sus demás dependencias:

```bash
npm install -D tailwindcss postcss autoprefixer
```

3. Creamos los archivos de configuración:

```bash
npx tailwindcss init -p
```

4. Configuramos las rutas de los templates en `tailwind.config.js`:

```js
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

5. Añadimos las directivas de Tailwind en nuestro punto de entrada, `index.css`:

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

6. Ejecutamos el entorno de desarrollo:

```js
npm run start
```

> Podemos empezar a utilizar tailwind en el proyecto:

```js
export default function App() {
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}
```
