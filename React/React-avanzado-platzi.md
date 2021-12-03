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
