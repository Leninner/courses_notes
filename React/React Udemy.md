**Índice**:

- [Curso de Ract de Cero a Experto por Fernando Herrera](#curso-de-ract-de-cero-a-experto-por-fernando-herrera)
  - [¿Qué es React?](#qué-es-react)
  - [Introducción a Babel](#introducción-a-babel)
  - [Javascript Moderno](#javascript-moderno)
    - [Variables y Constantes](#variables-y-constantes)
    - [Template Strings](#template-strings)
    - [Objetos Literales](#objetos-literales)
    - [Spread Operator (ES6)](#spread-operator-es6)
    - [Funciones](#funciones)
    - [Destructuración o Asignación Destructurante de Objetos](#destructuración-o-asignación-destructurante-de-objetos)
    - [Destructuración de Arreglos](#destructuración-de-arreglos)
    - [Import, Export y funciones comunes de arreglos](#import-export-y-funciones-comunes-de-arreglos)
    - [Múltiples exportaciones y exportaciones por defecto](#múltiples-exportaciones-y-exportaciones-por-defecto)
    - [Promesas](#promesas)
    - [Fetch API](#fetch-api)
    - [Async y Await](#async-y-await)
    - [Operador Condicional Ternario](#operador-condicional-ternario)
  - [Primeros Pasos en React](#primeros-pasos-en-react)
    - [¿Qué son los componentes?](#qué-son-los-componentes)
    - [Props](#props)
    - [PropTypes](#proptypes)
    - [DefaultProps](#defaultprops)
    - [Eventos Sintéticos](#eventos-sintéticos)
  - [Hooks](#hooks)
    - [Use State](#use-state)
    - [UseEffect](#useeffect)
      - [Precauciones](#precauciones)
    - [UseRef](#useref)
    - [UseLayoutEffect](#uselayouteffect)
    - [UseMemo](#usememo)
    - [UseCallback](#usecallback)
    - [UseReducer](#usereducer)
      - [¿Qué es un Reducer?](#qué-es-un-reducer)
      - [Grabar en localStorage con useReducer](#grabar-en-localstorage-con-usereducer)
  - [Memo - Método de React](#memo---método-de-react)
  - [Context API](#context-api)
  - [Pruebas Unitarias y de Integración](#pruebas-unitarias-y-de-integración)
    - [AAA:](#aaa)
  - [Generando el Build para producción y despliegues en Github Pages](#generando-el-build-para-producción-y-despliegues-en-github-pages)
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

Documentación: https://developer.mozilla.org/es/

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

### Funciones

- Los nombres de las Declaraciones de función, pero es una mala práctica:

```js
function doSome() {
  return;
}

doSome = 12;
```

Debemos utilizar arrow functions para poder hacer retornos implícitos:

- Retorno explícito con arrow functions:

```js
const doSome = () => {
  return 'Retorno explícito';
};
```

- Retorno implícito con arrow functions:

```js
const doSome = () => 'Retorno Implícito';
```

- Para retornar un objeto de manera implícita, debemos hacer:

```js
const getPersonInfo = () => ({
  name: 'Lenin',
  lastName: 'Mazabanda',
});
```

### Destructuración o Asignación Destructurante de Objetos

```js
const persona = {
  name: 'Lenin',
  lastName: 'Mazabanda',
  edad: 15,
};

const { edad } = persona; // 15, no importa el orden de la destructuración

const useContext = ({ name, rango = 25 }) => {
  return {
    name,
    rango,
    latLng: {
      lat: 1.4564,
      lng: 4564,
    },
  };
};

const { name, rango, latLng } = useContext(persona);

const { lat, lng } = latLng;

console.log(name, rango, lat, lng);
```

### Destructuración de Arreglos

```js
const personajes = ['Vegeta', 'Goku', 'Trunks'];

const [, , character3] = personajes; // Trunks
const [character1] = personajes; // Vegeta
const [, character2] = personajes; // Goku

const retornaArreglo = () => {
  return ['ABC', 123];
};

const [letras, numbers] = retornaArreglo(); // ABC, 123
```

- Cómo funciona use State:

```js
const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('Hola Mundo');
    },
  ];
};

const [state, setState] = useState('Leninner');

console.log(state); // "Leninner"
setState(); // "Hola mundo"
```

> Se manejan por índices al momento de hacer su destructuración

### Import, Export y funciones comunes de arreglos

Existen imports nombrados y por default:

- Nombrados

```js
export { some };
import { some } from 'path/to/some';
```

- Default

```js
export default some;
import some from 'path/to/some';
```

Existen funciones comunes con arreglos:

- **Find**: Retorna el primer valor que coincida con la condición dada

```js
const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// O también

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(2));
```

- **Filter**: Retorna un nuevo arreglo con todos los elementos que cumplan con una condición dada

```js
const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroesByOwner('DC'));
```

### Múltiples exportaciones y exportaciones por defecto

- En el ejemplo estamos haciendo un import nombre y otro import por default

```js
import some, { otherSome } from 'path/to/file';
```

- En este ejemplo tenemos exports nombrados y por default personalizados

```js
export { some as default, otherSome };
```

### Promesas

Una promesa funciona asincrónicamente y se ejecuta cuando todo lo síncrono se ejecuta:

```js
import { heroes } from './data';

const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const heroe = getHeroeById(id);
      heroe ? resolve(heroe) : reject('No se  pudo encontrar el heroe');
    }, 1000);
  });
};

getHeroeByIdAsync(4).then(console.log).catch(console.error);
```

- Se puede crear una función que retorne una promesa e ir haciendo cualquier tipo de validaciones para controlar `resolve` y `reject`
- Fuera de la función podemos hace uso de `then` y `catch` para poder controlar el qué hacer cuando la promesa retorne su valor de resolve o de reject

> En la siguiente línea de código podemos encontrar un forma fácil de ahorrarnos líneas de código:

- Pasarnos de esto:

```js
getHeroeByIdAsync(4)
  .then((value) => console.log(value))
  .catch((values) => console.error(value));
```

- A esto:

```js
getHeroeByIdAsync(4).then(console.log).catch(console.error);
```

### Fetch API

> Documentación: https://developer.mozilla.org/es/docs/Web/API/Fetch_API

- La función fetch retorna una promesa y por lo tanto podemos hacer uso de `then` y `catch`.
- La función `json()` también retorna una promesa

Vamos a hacer uso de **encadenamiento de promesas:**

```js
const API_KEY = 'rBG5BvFXhLMG52cgwa3KX8dQyqtgEg5e';

const fetchingData = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

fetchingData
  .then((response) => response.json())
  .then(({ data }) => {
    const { url } = data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  })
  .catch(console.error);
```

Así se crea un código mucho más limpio.

### Async y Await

Son un suggar sintax de las promesas para escribir un código más limpio. Nos permite escribir código como si fuera síncrono, así:

```js
const fetchData = async () => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const { data } = await response.json();
  const { url } = data.images.original;

  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
};

fetchData();
```

Para controlar errores debemos hacer uso de un bloque `try` y `catch`:

```js
const fetchData = async () => {
  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await response.json();
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
```

### Operador Condicional Ternario

Es una manera corta de tomar una decisión:

- Pasamos de esto:

```js
const activo = true;

let mensaje = '';

if (activo) {
  mensaje = 'Activo';
} else {
  mensaje = 'Inactivo';
}

console.log(mensaje);
```

- A esto:

```js
const activo = true;

let mensaje = active ? 'Activo' : 'Inactivo';
```

- O también:

```js
const activo = true;

let mensaje = active && 'Activo';
```

> El código anterior sirve para mostrar algo siempre y cuando se ejecute una condición como verdadera

## Primeros Pasos en React

### ¿Qué son los componentes?

Es una pieza de código que está encapsulada y realiza un cuadro específico, puede tener estado o no.

> **Estado:** Valores internos que nos van a permitir la lógica de la aplicación y permite a los componentes reaccionar ante estos cambios

### Props

Son los datos que se le pasan a un componente para empezar con su funcionamiento, así:

```js
import React from 'react';

const MyCounter = ({ saludo = 'Hola Mundo!' }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <p>This is my counter</p>
    </div>
  );
};

export default MyCounter;
```

### PropTypes

Con PropTypes, vamos a obligar al desarrollador a pasar las props correctas a nuestro componente, así:

- Para usar propTypes:

```js
import PropTypes from 'prop-types';

const ComponentName = ({ saludo }) => {
  /*Do Some*/
};

ComponentName.propTypes = {
  saludo: PropTypes.string.isRquired,
};
```

### DefaultProps

Nos sirven para enviar datos por defecto a props de un componente, se pueden manejar de varias formas, así:

- Forma tradicional

```js
const MyCounter = ({ saludo, subtitulo = 'Leninner' }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </div>
  );
};
```

- Forma Cool

```js
import PropTypes from 'prop-types';

const MyCounter = ({ saludo, subtitulo }) => {
  return (
    <div>
      <h1>{saludo}</h1>
      <p>{subtitulo}</p>
    </div>
  );
};

MyCounter.propTypes = {
  saludo: PropTypes.string.isRequired,
};

MyCounter.defaultProps = {
  saludo: 'Hola Mundo',
  subtitulo: 'Leninner',
};
```

### Eventos Sintéticos

Son similares a los eventos nativos de javascript, pero con la diferencia de que aquí se llaman de una manera diferente:

- De ser así nativamente:

```js
let div = document.querySelector('div');

div.addEventListener('click', () => {
  alert('Si, soy yo');
});
```

- A ser así:

```js
<button
  onClick={() => {
    alert('Si soy yo');
  }}>
  Do Some{' '}
</button>
```

> Cuando una función recibe argumentos debemos hacer esto

```js
<button
  onClick={(name) => {
    alert(name);
  }}>
  Do Some{' '}
</button>
```

> Cuando una función no recibe argumentos, o solo recibe el argumento de un evento, entonces podemos hacer esto

```js
const handleAdd = (e) => {
  console.log(e);
};

<button onClick={handleAdd}>Do Some </button>;
```

## Hooks

Son funciones que nos van a ayudar a controlar el ciclo de vida de los componentes. Están disponibles a partir de la versión 16.8 de React.

### Use State

Este hook nos permite crear un estado en un componente, así:

```js
const [state, setState] = useState(0);
```

Para actualizar ese estado debemos hacer uso del segundo elemento del array que nos devuelve el hook, es cuál es una función que nos va a permitir actualizar el estado.

Existen varias formas de actualizar el estado:

```js
// Primera forma
setState(state + 1);

// Segundo forma
setState((previousState) => previousState + 1);

// Tercera forma
setState((previousState) => {
  return previousState + 1;
});
```

### UseEffect

Va a ejecutar un effecto cuando haya cambios en algún elemento de su arreglo de dependencias.
Solo se va a ejecutar una vez si no hay elementos en el arreglo de dependencias.
Va a entrar a un bucle infinito si no se pasa un segundo parámetro para controlar el efecto.

- Ejemplo de mal uso:

```js
useEffect(() => {
  console.log('Ejecutando efecto');
});
```

- Ejemplo de buen uso:

```js
useEffect(() => {
  console.log('Ejecutando efecto');
}, [
  {
    /*Arreglo de dependencias*/
  },
]);
```

El useEffect retorna una función de limpieza, que se va a ejecutar cuando el componente se desmonte, no exista o haya muerto, así:

```js
useEffect(() => {
  effect;

  return () => {
    cleanUp;
  };
}, [inputs]);
```

#### Precauciones

Si tenemos un evento de escucha en un effecto que solo se debe ejecutar cuando el componente se renderice y tenemos una función de retorno que no está eliminando ese evento de escucha, vamos a estar duplicando los eventos de escucha y por lo tanto la performance de nuestra aplicación va a caer a los suelos.

Para controlar esto, podemos hacer un código de la siguiente manera:

```js
useEffect(() => {
  const handleMove = () => {
    console.log('Moviendo');
  };

  window.addEventListener('mousemove', handleMove);

  return () => {
    window.removeEventListener('mousemove', handleMove);
  };
}, []);
```

### UseRef

Nos sirve para hacer referencias a elementos del DOM, así:

```js
import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
  };

  return (
    <div>
      <input type="text" className="form-control" placeholder="Nombre" ref={inputRef} />
      <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
```

También podemos usar `useRef` para controlar errores en componentes desmontados, de esta forma:

```js
import { useEffect, useState, useRef } from 'react';

export const useFetch = (URL) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({ data: [], isLoading: true, isError: false });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      setState({ data: [], isLoading: true, isError: false });
      fetch(URL)
        .then((response) => response.json())
        .then((data) => {
          setState({ data, isLoading: false, isError: false });
        })
        .catch(() => {
          setState({ data: [], isLoading: false, isError: true });
        });
    }
  }, []);

  return state;
};
```

### UseLayoutEffect

Nos puede servir para sacar mediciones después de que se renderice el componente, así:

```js
const { quote } = data[0] || [];
const pTag = useRef();

useLayoutEffect(() => {
  console.log(pTag.current.getBoundingClientRect());
}, [quote]);
```

### UseMemo

Este hook nos sirve para decirle al navegador `memoriza el resultado de la función`, y no la ejecutes si sus dependencias no cambian.

Se lo puede usar de la siguiente manera:

```js
import { useCounter } from '../hooks/useCounter';
import { useState, useMemo } from 'react';
import { procesoPesado } from '../../helpers/procesoPesado';

export const MemoHook = () => {
  const { counter, increment } = useCounter(50);
  const [show, setShow] = useState(true);
  // Uso de useMemo
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <p>{memoProcesoPesado}</p>

      <button onClick={increment} className="btn btn-primary ">
        +1
      </button>

      <button onClick={() => setShow(!show)} className="btn btn-danger">
        Show
      </button>
    </div>
  );
};
```

### UseCallback

Este hook nos sirve cuando estamos renderizando un nuevo componente, enviándole una función que depende de propiedades que cambian y no queremos que este componente se vuelva a renderizar.

Para poder usarlo debemos tener `memorizado` nuestro componente a mostrar y la implementación del Hook `useCallback` es:

```js
import { useState, useCallback } from 'react';
// Importación del componente a mostrar
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // Implementación de useCallback
  const increment = useCallback(
    (num = 2) => {
      setCounter((counter) => counter + num);
    },
    [setCounter]
  );

  return (
    <div>
      <h1>Callback Hook: {counter}</h1>
      <br />

      <ShowIncrement increment={increment} />
    </div>
  );
};
```

### UseReducer

Hace lo mismo que `useState` pero con un reducer, es decir, **una función que recibe un estado y una acción y retorna un nuevo estado**. Es similar a trabajar con `Redux` y `React-redux`.

> Documentación: https://es.reactjs.org/docs/hooks-reference.html#usereducer

#### ¿Qué es un Reducer?

1. Es una función común y corriente y no puede ser **asíncrona**
2. Debe ser una **función pura**, es decir, con los mismos parámetros, vamos a tener el mismo resultado, siempre:
   1. No puede realizar procesos asíncronos, no debe tener efectos secundarios.
   2. No puede mutar directamente el estado, sino que tiene que devolver siempre un nuevo estado (**inmutabilidad**).
   3. No puede llamar a **local storage** o **session storage** ya que esos procesos son considerados asíncronos
   4. No se puede requerir más de una acción
3. Debe retornar un nuevo estado.
4. Usualmente, solo reciben dos argumentos, el estado y la acción a ejecutar

Para usar un reducer debemos importar `useReducer` y definir una función que reciba el reducer y el estado inicial:

```js
import { useReducer, useRef } from 'react';

const [state, dispatch] = useReducer(todoReducer, initialState);
```

- **todoReducer**: Es la función que va a tomar un **estado** y una **acción** y va a retornar un nuevo estado.
- **initialState**: Es el estado inicial del reducer.
- **state**: Es el estado actual del reducer.
- **dispatch**: Es el `disparador de acciones` que se ejecutarán.

Un ejemplo de reducer es:

```js
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];
    default:
      return state;
  }
};
```

Un ejemplo de dispatch es:

```js
const actionToDispatch = {
  type: 'ADD_TODO',
  payload: 'Hola Mundo',
};

dispatch(actionToDispatch);
```

#### Grabar en localStorage con useReducer

Para guardar datos en localStorage, podemos usar un `efecto`, así:

```js
useEffect(() => {
  localStorage.setItem('state', JSON.stringify(state));
}, [state]);
```

Para leer esos datos al empezar la aplicación, vamos a nuestro initialState y hacemos una HOF que nos ayude a recuperar esos datos de localStorage:

```js
// Forma 1
const init = () => {
  return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
};

// Forma 2
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

// Al momento de hacer el llamado en useReducer
const [state, dispatch] = useReducer(todoReducer, [], init);
```

> Cuando localStorage está vacío retorna null, y al ser parseado con `JSON.parse` retorna `null` y por lo tanto podemos hacer una validación

## Memo - Método de React

Nos sirve para evitar que se renderice un componente si sus props no han cambiado, para implementar este método debemos importar el módulo `React.memo`:

```js
import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Me volví a llamar');
  return <div>{value}</div>;
});
```

## Context API

`¿Qué problema resuelve?`

Imaginemos que un componente muy profundo necesita de una propiedad que se encuentra en el primer nivel, entonces, deberíamos **pasar esa propiedad a todos los componentes** que se encuentren entre el componente más profundo y el componente más alto.

El camino de las propiedades es muy largo y la complejidad aumenta mucho con cada nivel.

**Al usar el context API** podemos consultar una propiedad desde el componente más alto hasta el componente más profundo, sin necesidad de pasar propiedades a todos los componentes.

## Pruebas Unitarias y de Integración

Pruebas Unitarias => Enfocadas en pequeñas funcionalidades
Pruebas de Integración => Enfocadas a probar varias piezas en conjunto

Características:

1. Fáciles de leer
2. Fáciles de escribir
3. Confiables
4. Rápidas
5. Principalmente Unitarias

### AAA:

- Arrange => Arreglar
  - Preparamos el estado inicial
  - Inicializamos variables
  - Importanciones necesarias
- Act => Actuar
  - Aplicamos acciones o estímulos
  - Llamar métodos
  - Simular clicks
  - Realizar acciones sobre el paso anterior
- Assert => Afirmar
  - Observar el comportamiento resultante
  - Esperar que el resultado es el esperado

Mitos:

- Hace que mi aplicación no tenga errores
- Las pruebas no pueden fallar
- Hacen más lenta mi aplicación => Las pruebas se corren en la máquina del desarrollador.
- Es una pérdida de tiempo
- Hay que probar todo

> ToBe en jest nos sirve para hacer una triple igualdad y ToEqual nos sirve para comparar objetos, arreglos y sus propiedades

## Generando el Build para producción y despliegues en Github Pages

Vamos a crear el build del proyecto con:

```bash
npm run build
```

- Luego de eso, vamos a cambiar el nombre de la carpeta **build** por **docs** y cambiamos las rutas, añadiendo un punto al principio de cada ruta del archivo index de la carpeta **docs**.

## Para React

1. Para no hacer cambios al instante que se esté actualizando el código y más bien hacerlo cuando se de a CTRL + S, podemos crear un archivo en la raíz del proyecto llamando _.env_ y dentro escribir **FAST_REFRESH=false**
2. Existen dos formas para exportar un componente presentacional en React: explícitamente con la keyword return y {} e implícitamente sin la keyword return y con ():

- Explícitamente

```js
const Registro = () => {
  return (
    <section class="register">
      <section class="register__container">
        <h2>Regístrate</h2>
        <form class="register__container--form">
          <input class="input" type="text" placeholder="Nombre" />
          <input class="input" type="text" placeholder="Correo" />
          <input class="input" type="password" placeholder="Contraseña" />
          <button class="button">Registrarme</button>
        </form>
        <a href="">Iniciar sesión</a>
      </section>
    </section>
  );
};
```

- Implícitamente

```js
const Registro = () => (
  <section class="register">
    <section class="register__container">
      <h2>Regístrate</h2>
      <form class="register__container--form">
        <input class="input" type="text" placeholder="Nombre" />
        <input class="input" type="text" placeholder="Correo" />
        <input class="input" type="password" placeholder="Contraseña" />
        <button class="button">Registrarme</button>
      </form>
      <a href="">Iniciar sesión</a>
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

4. Para destructurar props podemos hacerlas de distintas formas:

- Destructuración directa en los parámetros:

  ```js
  const Home = ({ name }) => {
    return <h1>{name}</h1>;
  };
  ```

- Destructuración en la lógica al ahcer retornos explícitos:

  ```js
  const Home = (props) => {
    const { name, lastName, age, hoobies } = props;
    return <div>{(name, lastName, age, hoobies)}</div>;
  };
  ```

5. En los retornos explícitos se hace la lógica justo arriba de la keyword return. En retornos implícitos, no se puede añadir lógica.

6. Cuando creamos una función que recibe un evento en React, al momento de ser llamada, ya sea por onClick, onChange, etc... No se debe pasar el argumento del evento, porque React ya sobreentiende que la función debe capturar el evento:

```js
const handleInput = (event) => {
  setValues({ ...form, [event.target.name]: event.target.value });
};

const handleSubmit = (event) => {
  event.preventDefault();
  console.log(form);
};

<form class="register__container--form" onSubmit={handleSubmit}>
  <input class="input" type="text" placeholder="Nombre" name="name" onChange={handleInput} />
  <input class="input" type="text" placeholder="Correo" name="email" onChange={handleInput} />
  <input class="input" type="password" placeholder="Contraseña" name="password" onChange={handleInput} />

  <button class="button" type="submit">
    Registrarme
  </button>
</form>;
```

7. JSX no maneja espacios en blanco como lo hace HTML, para solucionar esto y añadir espacios en blanco en la UI podemos utilizar:

```js
{
  `  `;
}
```

8. El Hook `useEffect` es similar a `componentDidUpdate()`

> Las llaves, seguido de comillas y dentro 2 espacios en blanco. Los 2 espacios se van a convertir en un espacio en la UI

9. Dispatch en redux son creadores de acciones que crean y envían una acción para que el reducer lo ejecute y se pueda actualizar el estado y posteriormente la UI.

10. En React, los componentes tienen que ser escritos con la primera letra en mayúscula

## Para Javascript

1. Javascript empieza a ejecutar el código línea a línea
2. El operador `in` nos sirve para comprobar si una llave está en un objeto o no. Devuelve `true` si la propiedad especificada está en el objeto especificado o su prototipo:

```js
// Reference: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/in

// Arrays
let arboles = new Array('secoya', 'pino', 'cedro', 'roble', 'arce');
0 in arboles; // devuelve true
3 in arboles; // devuelve true
6 in arboles; // devuelve false
'pino' in arboles; // devuelve false (debe especificar el número de índice,
// no el valor del índice)
'length' in arboles; // devuelve true (length es una propiedad de Array)

// Objetos predefinidos
'PI' in Math; // devuelve true

// Objetos personalizados
let micoche = { marca: 'Honda', modelo: 'Accord', año: 1998 };
'marca' in micoche; // devuelve true
'modelo' in micoche; // devuelve true
```
