# Curso de Ract de Cero a Experto por Fernando Herrera

## ¿Qué es React?

- Librería de Facebook que tiene el modelo MVC (Modelo Vista Controlador) y que nos permite crear aplicaciones.
- Es una librería declarativa.
- Sirve para apps de todo tipo de magnitud(pequeñas, robustas)
- Es muy eficiente gracias a su Virtual DOM
- La información fluye de manera unidireccional
- Basada en componentes
- Servidores con Node
- Apps móviles con React Native

NOTE: Se puede añadir en HTML y empezar a trabajar.

Para añadir React a HTML de forma nativa:

```js
<script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Luego podemos trabajar como si estuvieramos con React.

## Introducción a Babel

**Transpila código moderno** a código que pueda ser interpretado por cualquier navegador.

- React trabaja con babel

Utilizar babel => https://babeljs.io/

## Javascript Moderno

1. Variables y Constantes

> No usar Var

Const => Variables que no van a cambiar
Let => Variables que si se pueden cambiar

> Ambas usan scope local

Para cambiar el valor de una variable let, no hace falta declararla de nuevo.

[NOTAS]

Para no hacer cambios al instante que se esté actualizando el código y más bien hacerlo cuando se de a CTRL + S, podemos crear un archivo en la raíz del proyecto llamando _.env_ y dentro escribir **FAST_REFRESH=false**
