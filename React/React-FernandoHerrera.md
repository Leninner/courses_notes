**Índice**:

- [Curso de Ract de Cero a Experto por Fernando Herrera](#curso-de-ract-de-cero-a-experto-por-fernando-herrera)
  - [¿Qué es React?](#qué-es-react)
  - [Introducción a Babel](#introducción-a-babel)
  - [Javascript Moderno](#javascript-moderno)
    - [Variables y Constantes](#variables-y-constantes)
    - [Template Strings](#template-strings)
    - [Objetos Literales](#objetos-literales)
    - [Spread Operator (ES6)](#spread-operator-es6)
- [Notas Interesantes](#notas-interesantes)
  - [Para React](#para-react)
  - [Para Javascript](#para-javascript)

# Curso de Ract de Cero a Experto por Fernando Herrera

Estas son notas del curso de Udemy dictado por Fernando Herrera.

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

> Probar babel: https://babeljs.io/

## Javascript Moderno

### Variables y Constantes

> No usar Var

Const => Variables que no van a cambiar
Let => Variables que si se pueden cambiar

> Ambas usan scope local

Para cambiar el valor de una variable let, no hace falta declararla de nuevo.

### Template Strings

Son formas más fáciles de utilizar la concatenación de strings.

Podemos pasar de esto:

```js
const nombre = 'Lenin';
const apellido = 'Mazabanda';

const nombreCompleto = nombre + ' ' + apellido;
```

a esto:

```js
const nombre = 'Lenin';
const apellido = 'Mazabanda';

const nombreCompleto = `${nombre} ${apellido}`;
```

> Para sacar este símbolo (`) se utiliza en Windows: **Alt + 96**

### Objetos Literales

> Cualquier cosa en Javascript tiene un prototype que tiene propiedades implícitas de todos los objetos.

Un objeto es: {}. Trabaja con pares de valores: _key_ y _value_

- Dependiendo el lenguaje de programación puede ser llamado de otras formas diferentes, como por ejemplo diccionario.

Ejemplo:

```js
const people = {
  nombre: 'Lenin',
  edad: '18',
  novias: [1, 2, 3],
};
```

**Maneras de imprimir y acceder a sus elementos:**

- Para imprimir TODO el objeto se puede utilizar:

```js
console.log(people);
```

- Para imprimir el nombre:

```js
console.log(people.nombre);
console.log(people[nombre]);
```

**Consideraciones**:

1. Cuando tenemos una llave de frases con espacios, no podemos hacer esto:

```js
const eg = {
  'una prop': 'Lenin',
};

console.log(eg.una prop)
console.log(eg."una prop")
```

En lugar de lo anterior deberíamos hacer:

```js
console.log(eg['una prop']);
```

2. Es una mala práctica utilizar carácteres especiales al poner nombre a las _keys_

```js
const people = {
  dirección: 121323,
};
```

### Spread Operator (ES6)

Nos permite clonar todos los elementos de dentro de un array o de una objeto:

- Arrays:

```js
const numbers = [1, 2, 3, 4, 5, 6];

const numbersAndVowels = [...numbers, 'a', 'e', 'i', 'o', 'u'];

console.log(numbersAndVowels); //[1, 2, 3, 4, 5, 6, 'a', 'e', 'i', 'o', 'u']
```

- Objetos:

1. Con uso de Spread Operator

```js
const person = { name: 'Lenin', apellido: 'Mazabanda', edad: 18, gustos: 'React' };

const person2 = { ...person };

person2.name = 'Mathias';

console.log(person); // {name: 'Lenin', apellido: 'Mazabanda', edad: 18, gustos: 'React'}
console.log(person2); // {name: 'Mathias', apellido: 'Mazabanda', edad: 18, gustos: 'React'}
```

2. Sin Spread Operator

```js
const person = { name: 'Lenin', apellido: 'Mazabanda', edad: 18, gustos: 'React' };

const person2 = person;

person2.name = 'Mathias';

console.log(person); // {name: 'Mathias', apellido: 'Mazabanda', edad: 18, gustos: 'React'}
console.log(person2); // {name: 'Mathias', apellido: 'Mazabanda', edad: 18, gustos: 'React'}
```

o

```js
const person = { name: 'Lenin', apellido: 'Mazabanda', edad: 18, gustos: 'React' };

const person2 = { person };

person2.name = 'Mathias';

console.log(person); // {name: 'Lenin', apellido: 'Mazabanda', edad: 18, gustos: 'React'}
console.log(person2); // {person: {name: 'Lenin', apellido: 'Mazabanda', edad: 18, gustos: 'React'}, name: 'Mathias'}
```

# Notas Interesantes

## Para React

1. Para no hacer cambios al instante que se esté actualizando el código y más bien hacerlo cuando se de a CTRL + S, podemos crear un archivo en la raíz del proyecto llamando _.env_ y dentro escribir **FAST_REFRESH=false**
2. Existen dos formas para exportar un componente presentacional en React: explícitamente con la keyword return y {} e implícitamente sin la keyword return y con ():

- Explícitamente

```js
const Registro = () => {
  return (
    <section class='register'>
      <section class='register__container'>
        <h2>Regístrate</h2>
        <form class='register__container--form'>
          <input class='input' type='text' placeholder='Nombre' />
          <input class='input' type='text' placeholder='Correo' />
          <input class='input' type='password' placeholder='Contraseña' />
          <button class='button'>Registrarme</button>
        </form>
        <a href=''>Iniciar sesión</a>
      </section>
    </section>
  );
};
```

- Implícitamente

```js
const Registro = () => (
  <section class='register'>
    <section class='register__container'>
      <h2>Regístrate</h2>
      <form class='register__container--form'>
        <input class='input' type='text' placeholder='Nombre' />
        <input class='input' type='text' placeholder='Correo' />
        <input class='input' type='password' placeholder='Contraseña' />
        <button class='button'>Registrarme</button>
      </form>
      <a href=''>Iniciar sesión</a>
    </section>
  </section>
);
```

3. Para no añadir elementos div demás al DOM con los retornos de React, podemos utilizar React.Fragment:

```js
const Component = () => (
  <React.Fragment>
    <div>Leninner</div>
  </React.Fragment>
);
```

O también:

```js
const Component = () => (
  <>
    <div>Leninner</div>
  </>
);
```

## Para Javascript

1. Javascript empieza a ejecutar el código línea a línea
