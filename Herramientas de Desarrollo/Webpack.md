**ÍNDICE**

- [¿Qué es Webpack?](#qué-es-webpack)
  - [Conceptos Básicos](#conceptos-básicos)
  - [Configuración de Webpack](#configuración-de-webpack)
  - [HTML](#html)
  - [Loaders para CSS y preprocesadores de CSS](#loaders-para-css-y-preprocesadores-de-css)
  - [Copia de archivos con Webpack](#copia-de-archivos-con-webpack)
  - [Loaders de Imágenes](#loaders-de-imágenes)
  - [Loaders de Fuentes](#loaders-de-fuentes)
  - [Optimización: hashes, compresión y minificación de archivos](#optimización-hashes-compresión-y-minificación-de-archivos)
  - [Webpack Alias](#webpack-alias)
  - [Variables de entorno](#variables-de-entorno)
    - [Ejemplo](#ejemplo)

# ¿Qué es Webpack?

<h4>Ideas/conceptos claves</h4>

Module bundlers son herramientas de frontend que nos permiten usar archivos con módulos JavaScript, entre otras características y convertiros a un JavaScript el cual el navegador pueda entender

<h4>Apuntes</h4>

Webpack es una herramienta que nos permite preparar nuestro código para llevarlo a producción (module bundler)
Webpack nos permite trabajar con:

- HTML
- CSS
- JavaScript
- Archivos estáticos
- Imágenes
- Fuentes

Tambien nos permite tener un modo en desarrollo para nuestros proyectos para hacer pruebas

Nacio en el 2012, desde ese entonces varias empresas lo usan como ser:

- Twitter
- Instagram
- PayPal

También nos permite:

- Gestionar dependencias
- Ejecutar tareas
- Conversión de archivos

Nos permite trabajar en módulos permitiéndonos tener un código separado en desarrollo, pero en producción en una fuente
Webpack permite tener módulos de JS en formato:

- AMD
- Common JS
- ES15

Webpack es un module bundler que nos permite trabajar con una variedad de tecnologías web empezando desde HTML y terminando con JS. Además de tener soporte para archivos estáticos

## Conceptos Básicos

Conceptos básicos

<h4>Ideas/conceptos claves</h4>
Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas

Loader Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript

Plugins Extienden recursos para añadir configuraciones y particularidades de recursos externos

<h4>Apuntes</h4>
Webpack construye un gráfico de dependencias que mapea cada módulo para con verlo en uno o más módulos
Desde webpack 4 ya no dependemos de tener un archivo de configuración, pero si debemos tener un punto de entrada
Tambien tendremos que tener un punto de salida
En este punto se creará nuestro proyecto una vez esté preparado
Normalmente es la carpeta dist ⇒ Distribution
Tambien contamos con diferentes modos
Modo de desarrollo
Modo de producción
Modos de performance
Donde tu añades
Configuraciones de minificación
Donde se va enviar
Carpeta de destino
Modos de desarrollo local
Donde puedes
Crear puertos específicos para tu proyecto
Ver cambios en tiempo real
Dispone de loader y plugins permitiéndonos preparar particularidades de nuestro proyecto

NOTE: Crear una carpeta SRC es una buena práctica porque podemos añadir dentro todos los recursos que necesitemos y fuera de eso las configuraciones u otras cosas.

También es importante separar cada tipo de archivos en su carpeta.

Con modo development se puede obtener más información sobre los módulos y así poder debugear mejor. Con el modo producción, solo nos lo hace más corto el código.

npm install webpack webpack-cli -D => Instalar webpack y la línea de comandos de webpack en el entorno de desarrollo.

npx webpack => Construye la aplicación
npx webpack --mode <modo> => Sirve para cambiar entre modos dentro de webpack.

## Configuración de Webpack

Crear archivo: <webpack.config.js>

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
};
```

NOTE: Babel sirve para que el código sea compatible con todos los navegadores.

```bash
npm i babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
```

## HTML

HtmlWebpackPlugin

Es un plugin para inyectar javascript, css, favicons, y nos facilita la tarea de enlazar los bundles a nuestro template HTML.

> npm i html-webpack-plugin -D

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
entry: "./src/index.js",
output: {
path: path.resolve(\_\_dirname, "dist"),
filename: "main.js",
},
resolve: {
extensions: [".js"],
},
module: {
rules: [
{
test: /\.m?js$/, // Utiliza cualquier elemento con mjs o js mjs es de modulos
exclude: /node_modules/,
use: {
loader: "babel-loader",
},
},
],
},
plugins: [
new HtmlWebpackPlugin({
inject: true,
template: "./public/index.html",
filename: "./index.html",
}),
],
};

NOTE: SCRIPTS

"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"build": "webpack --mode production",
"dev": "webpack --mode development"
}

## Loaders para CSS y preprocesadores de CSS

Loaders
**Fuera de contexto, webpack solamente entiende JavaScript y JSON.** Los loaders nos permite procesar archivos de otros tipos para convertirnos en módulos válidos que serán consumidos por nuestras aplicaciones y agregadas como dependencias.

En alto nivel, los loaders poseen 2 configuraciones principales:

test - propiedad que identifica cuáles archivos deberán ser transformados
use - propiedad que identifica el loader que será usado para transformar a dichos archivos
Plugins
Mientras los loaders transforman ciertos tipos de módulos, los plugins \_son utilizados para extender tareas específicas, como la optimización de paquetes, la gestión de activos y la inyección de variables de entorno.

Una vez importado el plugin, podemos desear el personalizarlos a través de opciones.

npm i -D mini-css-extract-plugin css-loader => Loader para css
npm i -D node-sass sass-loader => Loader para sass

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPLugin = require("mini-css-extract-plugin");

module.exports = {
entry: "./src/index.js",
output: {
path: path.resolve(\_\_dirname, "dist"),
filename: "main.js",
},
resolve: {
extensions: [".js"],
},
module: {
rules: [
{
test: /\.m?js$/, // Utiliza cualquier elemento con mjs o js mjs es de modulos
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?css$/i,
use: [MiniCssExtractPLugin.loader, "css-loader", "sass-loader"],
},
],
},
plugins: [
new HtmlWebpackPlugin({
inject: true,
template: "./public/index.html",
filename: "./index.html",
}),
new MiniCssExtractPLugin(),
],
};

Loaders para CSS y preprocesadores de CSS

<h4>Ideas/conceptos claves</h4>
Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador. Existen varios preprocesadores CSS de los cuales escoger, sin embargo, la mayoría de preprocesadores CSS añadirán algunas características que no existen en CSS puro, como variable, mixins, selectores anidados, entre otros. Estas características hacen la estructura de CSS más legible y fácil de mantener.

post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales.

## Copia de archivos con Webpack

npm i copy-webpack-plugin -D

new CopyPlugin({
patterns: [
{
from: path.resolve(__dirname, "src", "assets/images"),
to: "assets/images",
},
],
}),

## Loaders de Imágenes

Debemos insertar una regla en webpack.config.js y luego importarlas en donde se necesiten como si fueran una variable.

{
test: /\.png/,
type: "asset/resource",
},

## Loaders de Fuentes

Para cargar fuentes debemos instalar dependencias.

> npm i url-loader file-loader -D

Y debemos configurar el archivo de configuración de webpack:

{
test: /\.(woff|woff2)$/,
use: {
loader: "url-loader",
options: {
limit: 10000,
mimetype: "application/font-woff",
name: "[name].[ext]",
outputPath: "./assets/fonts/",
publicPath: "./assets/fonts/",
esModule: false,
},
},
},

## Optimización: hashes, compresión y minificación de archivos

NOTE: ¿Por qué es importante usar Hashes en nuestros archivos?

Los recursos que se guardan en memoria cache suceden cuando el navegador entra a un sitio por primera vez detecta los recursos y los guarda. Por ello la siguiente vez sera mucho más rápido porque estarán en memoria
La desventaja esta cuando sacamos una nueva versión, porque tendrán un mismo nombre evitando que se descargue los nuevos cambios, por lo tanto, el usuario no recibirá los nuevos cambios
Para que no haya conflictos con la cache una vez que tengamos nuestro proyecto en producción es importante darles un hash para cada nueva versión

> Minificador de CSS

npm i terser-webpack-plugin -D
npm i css-minimizer-webpack-plugin -D

Modelo:

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPLugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
entry: "./src/index.js",
output: {
path: path.resolve(**dirname, "dist"),
filename: "[name].[contenthash].js",
assetModuleFilename: "assets/images/[hash][ext][query]",
},
resolve: {
extensions: [".js"],
},
module: {
rules: [
{
test: /\.m?js$/, // Utiliza cualquier elemento con mjs o js mjs es de modulos
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.s?css$/i,
use: [MiniCssExtractPLugin.loader, "css-loader", "sass-loader"],
},
{
test: /\.png/,
type: "asset/resource",
},
{
test: /\.(woff|woff2)$/,
use: {
loader: "url-loader",
options: {
limit: 10000,
mimetype: "application/font-woff",
name: "[name].[contenthash].[ext]",
outputPath: "./assets/fonts/",
publicPath: "./assets/fonts/",
esModule: false,
},
},
},
],
},
plugins: [
new HtmlWebpackPlugin({
inject: true,
template: "./public/index.html",
filename: "./index.html",
}),
new MiniCssExtractPLugin({
filename: "assets/[name].[contenthash].css",
}),
new CopyPlugin({
patterns: [
{
from: path.resolve(**dirname, "src", "assets/images"),
to: "assets/images",
},
],
}),
],
optimization: {
minimize: true,
minimizer: [new CssMinimizerPlugin(), new TerserPlugin()],
},
};

## Webpack Alias

Webpack Alias

<h4>Apuntes</h4>
Alias ⇒ nos permiten otorgar nombres paths específicos evitando los paths largos
Para crear un alias debes agregar la siguiente configuración a webpack
module.exports = {
	...
	resolve: {
		...
    alias: {
      '@nombreDeAlias': path.resolve(__dirname, 'src/<directorio>'),
    },
	}
}
Puedes usarlo en los imports de la siguiente manera
import modulo from "@ejemplo/archivo.js";

## Variables de entorno

Es importante considerar las variables de entorno va a ser un espacio seguro donde podemos guardar datos sensibles
Por ejemplo, subir llaves al repositorio no es buena idea cuando tienes un proyecto open source
Para instalar debemos correr el comando
NPM

npm install -D dotenv-webpack
YARN

yarn add -D dotenv-webpack
Posteriormente debemos crear un archivo .env donde estarán la clave para acceder a la misma y el valor que contendrán

### Ejemplo

API=https://randomuser.me/api/
Es buena idea tener un archivo de ejemplo donde, el mismo si se pueda subir al repositorio como muestra de que campos van a ir
Una vez creado el archivo .env debemos agregar la siguiente configuración en webpack.config.js

...
const Dotenv = require('dotenv-webpack');
module.exports = {
...
plugins: [
new Dotenv()
],
}
dotenv-webpack ⇒ Leera el archivo .env por defecto y lo agregar a nuestro proyecto
Para usarlas debes hacer lo siguiente
const nombre = process.env.NOMBRE_VARIABLE;
Toda la configuración se podrá acceder desde process.env
