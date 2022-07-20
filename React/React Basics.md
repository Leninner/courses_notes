<h1>React</h1>

**Índice**

- [Introducción](#introducción)
  - [Características principales](#características-principales)
  - [¿Cuándo Usar React.js?](#cuándo-usar-reactjs)
  - [Formas de trabajo para hacer aplicaciones web](#formas-de-trabajo-para-hacer-aplicaciones-web)
  - [Ventajas de React](#ventajas-de-react)
  - [Desventajas de React](#desventajas-de-react)
  - [DOM, Virtual DOM y ReactDOM](#dom-virtual-dom-y-reactdom)
  - [Create React App](#create-react-app)
    - [Scripts](#scripts)
  - [Sintaxis JSX](#sintaxis-jsx)
  - [Validaciones con true o false](#validaciones-con-true-o-false)
  - [Creación y Tipos de Componentes](#creación-y-tipos-de-componentes)
    - [Componentes Stateful/Container/Smart](#componentes-statefulcontainersmart)
    - [Componentes Stateless](#componentes-stateless)
    - [Stateless vs Stateful](#stateless-vs-stateful)
    - [Componentes HOC (High Order Component)](#componentes-hoc-high-order-component)
  - [Propiedades que recibe un componente](#propiedades-que-recibe-un-componente)
    - [Proptypes](#proptypes)
  - [Componentes vs Elementos](#componentes-vs-elementos)
  - [React.Fragment](#reactfragment)
  - [Estado (Variables con datos del sitio web)](#estado-variables-con-datos-del-sitio-web)
  - [Renderizado Condicional](#renderizado-condicional)
  - [Renderizado de Elementos](#renderizado-de-elementos)
  - [Eventos y Binding](#eventos-y-binding)
    - [Bind](#bind)
    - [Apply AND Call](#apply-and-call)
  - [Eventos & Property Initializers](#eventos--property-initializers)
  - [Eventos Nativos, Sintéticos & Personalizados](#eventos-nativos-sintéticos--personalizados)
  - [Comunicación entre Componentes](#comunicación-entre-componentes)
  - [Ciclo de Vida de los Componentes](#ciclo-de-vida-de-los-componentes)
  - [React Router DOM](#react-router-dom)
  - [Hooks](#hooks)
    - [useState](#usestate)
    - [useEffect](#useeffect)
      - [Axios](#axios)
    - [Custom Hook](#custom-hook)
    - [useRef y Formularios](#useref-y-formularios)
    - [React.useContext](#reactusecontext)
  - [Local Storage](#local-storage)
  - [Props: Comunicación entre Componentes](#props-comunicación-entre-componentes)
    - [Destructuración de los props](#destructuración-de-los-props)
  - [Métodos del Ciclo vida](#métodos-del-ciclo-vida)
- [Inicialización y Configuración de Entorno desde 0](#inicialización-y-configuración-de-entorno-desde-0)
  - [Agregar compatibilidad con Babel](#agregar-compatibilidad-con-babel)
    - [Pre-steps](#pre-steps)
    - [Steps](#steps)
  - [Webpack: Empaquetación de módulos](#webpack-empaquetación-de-módulos)
    - [Webpack Dev Server: Reporte de errores y Cambios en tiempo real](#webpack-dev-server-reporte-de-errores-y-cambios-en-tiempo-real)
  - [Trabajando con Sass](#trabajando-con-sass)
  - [Eslint y .gitignore](#eslint-y-gitignore)
  - [Forma de organizar carpetas](#forma-de-organizar-carpetas)
  - [Imágenes y alias en Webpack](#imágenes-y-alias-en-webpack)
    - [Alias](#alias)
  - [Imports, Variables y Fuentes de Google en Sass](#imports-variables-y-fuentes-de-google-en-sass)
  - [Crear una Fake API](#crear-una-fake-api)
    - [Para empezar con la Fake API](#para-empezar-con-la-fake-api)
  - [Conectando la información de la API](#conectando-la-información-de-la-api)
  - [Debuggeando React con React DevTools](#debuggeando-react-con-react-devtools)
- [Sass con Create-React-App](#sass-con-create-react-app)
- [Hacer deploy en Github Pages](#hacer-deploy-en-github-pages)
- [Metodología Atomic Design](#metodología-atomic-design)
  - [Creación de Servicio de Gravatar](#creación-de-servicio-de-gravatar)
- [Validaciones con Clases](#validaciones-con-clases)
- [Automatización y Despliegue con Github Actions](#automatización-y-despliegue-con-github-actions)

# Introducción

> Ruta de aprendizaje de React => https://roadmap.sh/roadmaps/react.png

**React es una librería (biblioteca) desarrollada por Facebook que nos ayuda a construir interfaces de usuario interactivas para todo tipo de aplicaciones: web, móviles o de escritorio. Se encarga de la View del sitio**

## Características principales

- Tiene el modelo MVC => Modelo Vista Controlador: **Resuelve el problemas de las vistas del sitio.**
- Tiene un flujo de datos unidireccional.
- Cada pequeña parte de nuestra página web la conoceremos como **Componente**. Cada componente se encargará de una función en específico.
- Podemos reutilizar nuestros componentes siempre que lo necesitemos.
- Al unir todos nuestros componentes tendremos una página web que nos permite cambiar, actualizar o eliminar elementos de forma muy sencilla.

## ¿Cuándo Usar React.js?

Muchas de las librerías están basadas en componentes.

**¿El header de mi página puede ser un componente?** ¡Sí!
**¿El sidebar puede ser un componente?** ¡Por supuesto!
Y si tengo varios articulos en mi página… **¿Puedo convertirlos a componentes?** ¡Por su pollo!

`Recuerda que todo puede ser un componente`, y esto nos permite modularizar nuestro código. Es decir, podemos dividir y **“aislar”** cada parte de nuestra página.

Otra ventaja de los componentes es que son reutilizables, es decir, puedes usarlos cuantas veces quieras.

Si se está trabajando en una aplicación en la que no la vamos a ir actualizando, entonces solamente hacerlo con Javascript.

**Si necesitamos empezar rápido y vamos a necesitar actualizar la app en un futuro, es muy recomendable utilizar react.**

## Formas de trabajo para hacer aplicaciones web

1. Estilo en cascada

- Diseño
- Desarrollo
- Test

2. Ciclo MVP (Mínimos productos viables) iterativos

Cada equipo se ocupa de resolver y diseñar una parte pequeñisima de la aplicación web. Se puede obtener feedback rápido del cliente. Cada ciclo debe tener un propósito. **Desarrollar funcionalidades completas.**

MVP => Desarrollar funcionalidades pequeñas pero que sirvan de algo para poder medir el feedback del cliente. Resolver el mayor problema que se encuentre.

Análisis => Componentes (Forma de estructurar elementos de la página web, todos los componentes tienen relaciones entre si) y comportamientos (todo en React se puede hacer en Javascript, pero React nos da herramientas para trabajar más rápido, más fáciles y más ordenados)

Es extremadamente fácil organizar los componentes de una aplicación web y también es extremadamente fácil conectarlos entre sí para que puedan realizar funciones.

## Ventajas de React

1. Componentes reutilizables
2. Flujo de datos unidireccional
3. Modularidad

## Desventajas de React

1. Complejo si no se tiene buen entendimiento de Javascript.
2. JSX es un preprocesador que agrega extensión de sintaxis XML a JavaScript.
3. Necesidad de un ecosistema de muchas herramientas: React requiere una amplia gama de herramientas para funcionar correctamente y ser compatible con otras tecnologías.
4. Problemas de SEO: se sabe que las SPAs (Single Page Applications) creadas con React se enfrentan a problemas de indexación por parte de los rastreadores y bots de motores de búsqueda.

## DOM, Virtual DOM y ReactDOM

ReactDOM sirve para manejar el DOM desde React

El DOM es el código HTML que se transforma en páginas web.

Cada vez que cambiamos alguna parte del DOM, también estamos actualizando el HTML con el que interactúan nuestros usuarios. El problema es que todas las operaciones, comparaciones y actualizaciones en el DOM son muy costosas.

**Virtual DOM**

Es una herramienta que usan tecnologías como React y Vue para mejorar el **rendimiento (performance) y velocidad de nuestras aplicaciones.**

- **Es una copia exacta del DOM, pero mucho más ligera**, ya que los cambios no actualizan el verdadero HTML de nuestras páginas web. Gracias al Virtual DOM podemos hacer operaciones y comparaciones de forma sumamente rápida.
- Recuerda que los cambios en el Virtual DOM no afectan el HTML que ven los usuarios, así que se deben estar sincronizando constantemente las copias con el DOM. PERO, **React DOM lo hace por nosotros.**

## Create React App

Nos va a permitir crear aplicaciones React con cero configuración, lo que nos permitirá centrarnos en los más importante.

Para crear una aplicación utilizamos el comando **npx create-react-app** seguido del nombre que le quieras dar a tu aplicación.

```bash
npx create-react-app my-app

o

npx create-react-app ./
```

Un proyecto creado con create-react-app, además de React, **incluye librerías como:**

- **Webpack:** que se encarga de procesar y empaquetar nuestro código JavaScript (con sus dependencias), archivos CSS y otros archivos estáticos como imágenes, vectores, fuentes, etc.
- **Babel:** que nos permite usar nuevas características de ECMAScript.
- **PostCSS** que es una librería para el procesamiento de CSS.
- **Jest** que es una librería para testing.

Uno podría configurar un proyecto de React manualmente e incluir cada una de estas librerías, pero es bastante engorroso, create-react-app nos hace la vida más fácil

### Scripts

- NPM RUN BUILD => Para lanzar el proyecto a producción, debemos ejecutar el comando: **npm run build**. Lo que hace ese comando es transpilar el código de react a js vanilla para poder hacer su deploy. También va a generar la carpeta build para posteriormente utilizarla en producción.

- NPM RUN START => Va a lanzar un entorno de desarrollo para react, esto no se puede enviar a producción, antes de esto, se debe ejecutar el comando anterior.

- NPM RUN TEST => Al ejecutar pruebas de testing va a aparecer un menú para elegir.

- NPM RUN EJECT => Va a ejectar la configuración que tiene create-react-app por defecto

## Sintaxis JSX

JSX: JavaScript + HTML

Mezcla HTML, XML y Js.
Es una extensión de la sintaxis de JavaScript que produce elementos de React.

Se puede usar:

- Dentro de estructuras de control como if y for.
- Asignarlo a variables

  ```js
  const el = <p>Hola</p>;
  ```

- Aceptarlo como argumento o retorno en funciones.
- Expresiones JavaScript.

Para añadir lógica dentro de etiquetas HTML se debe utilizar llaves.

```js
<div className='App'>
  <header className='App-header'>
    <img src={logo} className='App-logo' alt='logo' />
    <h1 className='App-title'>Welcome to React</h1>
  </header>
  <p className='App-intro'>
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
</div>
```

**JSX es similar a HTML pero con algunas diferencias importantes:**

React usa JSX: **una sintaxis que nos permite escribir la estructura HTML y la lógica en JavaScript desde un mismo lugar: nuestros componentes.**

Algunas reglas importantes:

1. Toda etiqueta debe cerrarse, ya sea `img`, `br` o alguna otra que conozcamos.
2. Los componentes deben devolver un sólo elemento padre.
3. Algunos atributos HTML cambian como: class por className. for por htmlFor.
4. Los atributos de un elemento JSX pueden aceptar valores de tipo String entrecomillados o expresiones JavaScript entre llaves, por ejemplo:

```js
<img alt='Avatar' src={user.avatarURL} />
```

Las etiquetas "HTML" se convierten en Javascript Vanilla por acción de babel:

- Esto:

```js
<div className='active'>Hola Mundo</div>
```

- Se transforma en el siguiente código JavaScript:

```js
React.createElement('div', { className: 'active' }, 'Hola mundo'); // => **tipo, atributos, contenido**
```

Es la forma en la que React hace que todo esté dentro del mismo componente (No tener una parte aislada para manejar la parte visual y otra la parte lógica. Sino más bien, el mismo componente hace ambas cosas)

Estamos acostumbrados a escribir código HTML en archivos .html y la lógica de JavaScript en archivos .js.

- Ejemplo:

```js
import React from 'react';

const HolaMundo = () => {
  // Esto es JavaScript:
  const claseCSSHolaMundo = 'container-red';
  const mensajeTextoHTML = '¡Hola, Mundo!';
  const isTrue = false;

  // Esto es JSX (HTML + JavaScript):
  return (
    <div className={claseCSSHolaMundo}>
      <h1>{mensajeTextoHTML}</h1>
      {isTrue ? '¡Es verdad! :D' : '¡No es verdad! :('}
    </div>
  );
};

export default HolaMundo;
```

Los **componentes** en React tienen que ser escritos en **PascalCase**

## Validaciones con true o false

Existen varias formas de hacer validaciones en React:

```js
const isTrue = true;

{
  isTrue && 'Esto es verdadero';
} // Para indicar que se cumpla algo solamente si se cumple la condición como verdadera.

{
  isTrue ? 'Esto es true' : 'Esto es false';
}

{
  isTrue ? <h4>Es verdadero</h4> : <h5>Es falso</h5>;
}
```

## Creación y Tipos de Componentes

**Divide y vencerás**. Crear componentes que hagan una sola cosa, cada componente tiene:

- Código de contenido (**HTML**)
- Código de presentación (**CSS**)
- Funcionalidad (**Javascript**)

En REACT los componentes **pueden o no** tener estado. El estado son las variables internas. El flujo de datos en React funciona en una sola dirección, de componentes padres y componentes hijos.

Se puede definir componentes como clases o como funciones. Las clases tienen estado en si mismas, las funciones tienen estado con la ayuda de Hooks.

NOTE: Desde la versión 17 de REACT, no es necesario importar react:

```js
import React from 'react';
```

Sin embargo puede ser una mala práctica no ponerlo.

### Componentes Stateful/Container/Smart

Los componentes Stateful son los más robustos de React. Los usamos creando clases que extiendan de React.Component y nos permiten manejar estado y ciclo de vida y todo lo demás en un solo lugar.

Ejemplo:

```js
import React, { Component } from 'react';

class Stateful extends Component {
  constructor(props) {
    super(props);
    this.state = { hello: 'hello world' };
  }

  render() {
    return <h1>{this.state.hello}</h1>;
  }
}

export { Stateful };
```

Un componente de clase tiene un método `render` que permite renderizar el código JSX.

### Componentes Stateless

**No depende de un estado o un ciclo de vida**. Solamente va a presentar la lógica. Son más usadas en la época actual. Solo sirve para mostrar la parte visual.

También tenemos componentes Presentacionales. Los usamos creando funciones que devuelvan código en formato JSX.

Ejemplo:

```javascript
import React from 'react';

const Stateless = () => {
  return <h1>¡Hola!</h1>;
};

// Otra forma de crearlos:
const Stateless = () => <h1>¡Hola!</h1>;

export default Stateless;
```

### Stateless vs Stateful

También conocidos como:

– Container vs Presentational components
– Smart vs Dumb components

```javascript
// Stateful component

class Main extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
    };
  }

  render() {
    <BooksList books={this.state.books} />;
  }
}
```

```javascript
// Stateless component

const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => {
        return <li>book</li>;
      })}
    </ul>
  );
};
```

Nota que el componente stateless es escrito como una función. Por genial que sea el estado, siempre debes apuntar a hacer que tus componentes sean lo más simples y sin estado posible, de modo que los diferentes componentes se puedan reutilizar como piezas de Lego, incluso si no tienes planes inmediatos para reutilizar un componente. ¡Los stateless deberían sentirse afortunados de serlo!

### Componentes HOC (High Order Component)

Reciben un componente, y los adaptan de otra manera para usarlos con “modificaciones”. **Es como el patrón decorator**.
Suelen regresar un componente que modifica la lógica del componente anterior

```js
import React, { Component } from 'react';

function ComponentWrapper(WrapperComponent) {
  class Wrapper extends Component {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  return Wrapper;
}
```

## Propiedades que recibe un componente

Son valores que recibe un componente hijo de uno padre.

Se agrupan en un objeto llamado props, el cual puede recibir diferentes tipos de datos:

- Strings
  Numbers
  Booleans
  Arrays
  Objects
  Functions
  React Elements
  React Components

Las props son inmutables, es decir que no se pueden modificar ya que son solamente de lectura.

Por ejemplo, podemos pasar un atributo **name** al componente Welcome:

```js
<Welcome name="Jon" />
<Welcome name="Irma" />
```

Si defines el componente en una clase, **las props se reciben en el constructor de la clase**:

```js
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.name}</h1>;
  }
}
```

Si defines un componente funcional, **las props se reciben directamente en los argumentos de la función**:

```js
export const SomeComponent = (props) => {
  return <h1>{props.name}</h1>;
};
```

- También se puede utilizar destructuración de Objetos para recibir las props

```js
export const SomeComponent = ({ name }) => {
  return <h1>{name}</h1>;
};
```

- Se puede añadir propiedades por defecto a los componentes

```js
import React from 'react';

export default function Propiedades(props) {
  return <div>{props.lenin}</div>;
}

Propiedades.defaultProps = {
  lenin: 'Leninner es un super crack',
};
```

### Proptypes

Este paquete de NPM nos sirve de mucho para declarar el tipo de dato que si o si esperamos, además de comprobar si es requerido o no, es una alternativa a usar TypeScript en el proyecto.

- Para instalar

```bash
npm i -s prop-types
```

Para declarar el tipo de prop:

```js
import PropTypes from 'prop-types';

nombreDeFuncion.propTypes = {
  number: PropTypes.number.isRequired,
};
```

Las propiedades se las pasan por argumento a los componentes y se les puede llamar como a un método de alguna instancia de clase:

- index.js:

```js
ReactDOM.render(<App saludo='Hi Lenin' />, document.getElementById('root'));
```

- App.js

```js
function App(props) {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edita <code>src/App.js</code>, guarda y recarga
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          {props.saludo} {/*This should be hi Lenin*/}
        </a>
      </header>
    </div>
  );
}
```

Otro Ejemplo:

```js
Component.propTypes = {
  name: PropTypes.string.isRequired, // obligatorio
  lastName: PropTypes.string.isRequired, // obligatorio
  age: PropTypes.number, // opcional,
  list: PropTypes.array, // opcional
};
```

Por defecto, enviar todas nuestras props es opcional, pero **con los propTypes** podemos especificar cuáles props son obligatorias para que nuestro componente funcione correctamente con el atributo **isRequired.**

## Componentes vs Elementos

En React hay varias formas de crear un componente:

1. Con clases: (Actualmente ha dejado de usarse)

```js
class Componente extends React.Components {
  render() {
    return (
     //Codigo
    )
  }
}
```

2. Con React.createElement: Se sigue usando. Es opcional

```js
React.createElement(elemento, atributos, contenido);
```

En el **elemento** se colocarán el nombre de las etiquetas HTML. Ejemplo, h1, h2, p, form,…
En los **atributos** se colocaran los atributos de las etiquetas, es decir, id, class, placeholder,…
En el **contenido** se coloca contenido que va dentro de la etiqueta. Es decir, <h1>este contenido</h1>

Veamos con un ejemplo:

```js
const ejemplo1 = React.createElement('h1', { id: 'title' }, 'Oli React');
const ejemplo2 = React.createElement(
  'p',
  { id: 'paragraph-elemental', class: 'paragraph' },
  'Oli React'
);
const ejemplo2 = React.createElement(
  'p',
  { id: 'paragraph-elemental', class: 'paragraph' },
  'Oli React'
);
```

3. Con Funciones: (Se usa actualmente y es más cómodo que usar React.createElement())

```js
function Componente = () => {
 return(
  // Component body
 )
}
```

**ReactDOM.render(qué_elemento, dónde)** se encarga de renderizar el elemento y colocarlo en el DOM. Se pasa por por parametro **el elemento** a colocar en el DOM y **en dónde** se quiere colocar

Esto es un componente:

```js
const Componente = () => {
  return (
    //Codigo
  )
}

<Componente /> // Componente

<h1>Dorime</h1> // Elemento
```

## React.Fragment

**React.Fragment** es una ayuda de React para encapsular elementos en uno solo y así no obtener errores.
En React, debemos tener un solo Componente para renderizarlo, no podemos renderizar varios elementos independientes, si no que todos deben pertenecer a un único padre.

Ejemplo:

```js
const Componente = () => {
  return (
    <React.Fragment>
      <h1>Oli React</h1>
      <p>Oli React</p>
    </React.Fragment>
  );
};
```

También se puede usar de la siguiente forma:

```js
const Componente = () => {
  return (
    <>
      <h1>Oli React</h1>
      <p>Oli React</p>
    </>
  );
};
```

## Estado (Variables con datos del sitio web)

El estado es un objeto. Son los **valores internos que manejan la lógica**, permite que los componentes reaccionen a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.

1. Es inmutable
2. No se puede modificar directamente
3. Es asíncrono

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

Cada vez que cambia el state, React vuelve a renderizar (pintar) el componente en la vista.

- Componentes Stateful con estado **Actualmente no se usa gracias a los Hooks**

```js
import React from 'react';

export default class Welcome extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 0,
    };

    setInterval(() => {
      this.setState({
        title: this.state.title + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>El Estado</h1>
        <p>{this.state.title}</p>
      </div>
    );
  }
}
```

Para cambiar ese estado se utiliza:

```js
this.setState({
  title: this.state.title + 1,
});
```

Ejemplo con Hooks:

```js
import React, { useState } from 'react';

export default function Welcome() {
  const [title, setTitle] = useState(0);

  setInterval(() => {
    setTitle(title + 1);
  }, 1000);

  return (
    <div>
      <h1>El Estado</h1>
      <p>{title}</p>
    </div>
  );
}
```

## Renderizado Condicional

Es similar a usar operadores ternarios en JS:

```js
import React from 'react';

function Login() {
  return (
    <>
      <h2>Login</h2>
    </>
  );
}

function Logout() {
  return (
    <>
      <h2>Logout</h2>
    </>
  );
}

class RenderizadoCondicional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sesion: true,
    };
  }

  render() {
    return (
      <div>
        <h2>Renderizado Condicional</h2>
        {this.state.sesion ? <Login /> : <Logout />}
      </div>
    );
  }
}

export default RenderizadoCondicional;
```

## Renderizado de Elementos

Para renderizar elementos dinámicamente:

```js
import React from 'react';
import Data from '../helpers/data.json';

function ListItem({ framework, link }) {
  return (
    <li>
      <a href={link} target='_blank' rel='noreferrer'>
        {framework}
      </a>
    </li>
  );
}

export default class RenderizadoElements extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stations: ['Primavera', 'Verano', 'Otoño', 'Invierno'],
    };
  }

  render() {
    console.log(Data);
    return (
      <div>
        <h2>Renderizado de Elementos</h2>
        <h3>Estaciones del Año</h3>
        <ol>
          {this.state.stations.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ol>

        <h3>Frameworks Frontend Javascript</h3>

        <ul>
          {Data.frameworks.map((value) => (
            <ListItem framework={value.name} link={value.web} key={value.id} />
          ))}
        </ul>
      </div>
    );
  }
}
```

## Eventos y Binding

Todo lo que empiece con "on" nos va a ayudar a reaccionar ante las interacciones del usuario.

```jsx
import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);

    this.onClickBtn = this.onClickBtn.bind(this); // aquí estamos bindiando la propiedad
  }

  onClickBtn() {
    console.log('Button has been clicked!');
  }

  render() {
    return (
      <div>
        <MyComponent title='React' onButtonClicked={this.onClickBtn} />
      </div>
    );
  }
}

export default App;
```

Ejemplo:

```js
<button
  className='CreateTodoButton'
  onClick={() => {
    alert('Lenin, quieto');
  }}
></button>
```

Es importante dejar a React el trabajo de ejecutar las funciones, así:

```js
function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    console.log(msg);
  };

  return (
    <button className='CreateTodoButton' onClick={() => onClickButton(props.msg)}>
      +
    </button>
  );
}
```

Recuerde siempre: debe utilizar `bind` en componentes de clase para poder hacer uso de `this` para todos los métodos en los componentes de la clase al pasarlos a otros componentes:

CADA VEZ QUE SE UTILICE EVENTOS DENTRO DE COMPONENTES DE CLASE, DEBEMOS UTILIZAR LA TÉCNICA DE BIND DENTRO DEL CONSTRUCTOR para los métodos que sean llamados desde el componente al ejecutar el evento.

> Al hacer Bind en el constructor, estamos haciendo una referencia correcta al componente desde donde se llama el evento. Esto es por cómo está escrito el código en JavaScript al manejar POO.

Ejemplo:

```js
import React from 'react';

export default class EventosAndBinding extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };

    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
  }

  sumar(e) {
    console.log(e);
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    console.log(e);
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.sumar}>+</button>
        <hr />
        <button onClick={this.restar}>-</button>

        <p>{this.state.contador}</p>
      </div>
    );
  }
}
```

### Bind

Vincula los valores o alcance correcto antes de que se invoque la función. Esto es debido a la técnica de POO en JavaScript.

### Apply AND Call

Hacen lo mismo que Bind pero con diferencias al momento de ser utilizados.

## Eventos & Property Initializers

En ES7 ya no necesitamos utilizar el constructor y el estado puede ser definido como una propiedad sin la keyword "this" de la clase y para hacer referencia al "this" correcto, basta con hacer métodos con arrow functions en lugar de Bind:

```js
import React from 'react';

export default class EventosES7 extends React.Component {
  state = {
    contador: 0,
  };

  //Arrow function
  sumar = (e) => {
    console.log(e);
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  restar = (e) => {
    console.log(e);
    this.setState({
      contador: this.state.contador - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>Eventos ES7</h1>
        <button onClick={this.sumar}>+</button>
        <hr />
        <button onClick={this.restar}>-</button>

        <p>{this.state.contador}</p>
      </div>
    );
  }
}
```

## Eventos Nativos, Sintéticos & Personalizados

Para acceder a los eventos nativos de javascript, utilizamos **e.nativeEvent.target**

En React los Eventos son sintéticos, sin embargo podemos crear eventos personalizados a través de props así:

```js
const Boton = ({ myOnClick }) => (
  <button onClick={myOnClick} className='p-2 font-bold text-white bg-black rounded-full'>
    Leninner
  </button>
);

<Boton
  myOnClick={(e) => {
    console.log(e);
    console.log(e.nativeEvent.target);
  }}
/>;
```

## Comunicación entre Componentes

La comunicación es unidireccional, de componentes padres a componentes hijos.

Tenemos 3 casos de comunicación entre los componentes de React:

1. Comunicación entre un componente padre a uno hijo.

- Esta comunicación se lo realiza mediante props simples:

```js
import React from 'react';

export default class Padre extends React.Component {
  render() {
    return (
      <>
        <h3 className='titles'>Comunicación Entre Components</h3>
        <Hijo msg='Mensaje para el hijo 1' />
        <Hijo msg='Mensaje para el hijo 2' />
      </>
    );
  }
}

function Hijo({ msg }) {
  return <p>{msg}</p>;
}
```

2. Comunicación entre un componente hijo y su padre.

   - El hijo puede afectar el estado del padre

```js
import React from 'react';

export default class Padre extends React.Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h3 className='titles'>Comunicación Entre Components</h3>
        <Hijo msg='Mensaje para el hijo 1' />
        <Hijo incrementarContador={this.incrementarContador} msg='Mensaje para el hijo 2' />
      </>
    );
  }
}

function Hijo({ msg, incrementarContador }) {
  return (
    <>
      <h3>{msg}</h3>
      <button onClick={incrementarContador}>Dame click</button>
    </>
  );
}
```

3. Comunicación entre componentes no relación en "padres" a "hijos"

- Se puede utilizar Redux o Context API para comunicar componentes no relacionados.

Tenemos que crear un mecanismo de observación y/o suscripción para la comunicación entre dichos componentes.

Al menos existen 3 patrones para hacer esto.

1. **Patrón Emisor de eventos / Destino / Despachador:** los oyentes deben hacer referencia a la fuente para suscribirse.
2. **Patrón Publicación / Suscripción:** no necesita una referencia específica a la fuente que desencadena el evento, hay un objeto global accesible en todas partes que maneja todos los eventos.
3. **Patrón Señales:** similar al Emisor de Eventos, pero aquí no usa cadenas aleatorias. Cada objeto que podría emitir eventos debe tener una propiedad específica con ese nombre. De esta manera, se sabe exactamente qué eventos puede emitir un objeto.
4. **Portales:** proporcionan una opción de primera clase para renderizar hijos en un nodo DOM que existe por fuera de la jerarquía del DOM del componente padre.

## Ciclo de Vida de los Componentes

Son métodos que se ejecutan automáticamente en un Componente de Clase, ocurren en 3 fases:

1. **Montaje**

- Se ejecutan cuando se crea un componente y se inserta en el arbol del DOM

Métodos:

- **constructor():** Se ejecuta al crear la instancia del componente, en el constructor puedes inicializar el estado y enlazar manejadores de eventos.
- **render():** Es el único método requerido, cuando se ejecuta, examina el estado y las propiedades y dibuja el componente en el árbol del DOM.
- **componentDidMount():** Se invoca `inmediatamente después de que un componente se ha insertado al árbol del DOM`. Es útil para ejecutar suscripciones o peticiones asíncronas a API's, bases de datos, servicios, etc.

2. **Actualización.**

- Son ejecutados por **cambios en el estado** o las propiedades de los componentes.

Métodos:

- **render():** redibuja el componente cuando detecta cambios en el estado o las propiedades del componente.
- **componentDidUpdate():** Se ejecuta **inmediatamente después de que la actualización del estado o las propiedades sucede**, ideal para ejecutar peticiones asíncronas a API's, bases de datos, servicios, etc.

3. **Desmontaje**

Estos métodos son ejecutados una vez que el componente ha sido eliminado del árbol del DOM.

**componentWillUnmount():** Se ejecuta antes de destruir el componente del árbol del DOM, es un método útil para hacer tareas de limpieza.

Ejemplo de reloj digital:

```js
import React from 'react';

export default class CicloVida extends React.Component {
  constructor(props) {
    super(props);
    console.log(0, 'El componente se inicializa');

    this.state = {
      hora: new Date().toLocaleTimeString(),
    };

    this.temporizador = null;
  }

  componentDidMount() {
    console.log(1, 'El componente ya está en el DOM');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(2, 'El estado o las props del componente han cambiado');
    console.log(prevProps);
    console.log(prevState);
  }

  componentWillUnmount() {
    console.log(3, 'El componente ha sido eliminado del DOM');
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.temporizador);
  };

  render() {
    console.log(4, 'El componente se renderiza');
    return (
      <>
        <h2 className='titles'>Ciclo de Vida de los componentes de clase</h2>
        <h3>{this.state.hora}</h3>
        <button className='btn btn-blue' onClick={this.iniciar}>
          Iniciar
        </button>
        <button className='btn btn-blue' onClick={this.detener}>
          Parar
        </button>
      </>
    );
  }
}
```

## React Router DOM

**React es de tipo SPA(single page application)**, no recarga la página cuando cambiamos de url. Sin embargo, router nos ayuda a crear otra página para poder navegar en nuestra aplicación.

- Imagina twitter web, cuando das click en un tweet, se abre otra sección donde puedes ver el tweet. Sería un problema que al momento de darle click, no cambie la url, por lo que ese tweet no tiene dirección propia, no se guardaría en tu historial y sería un problema el SEO. Para ello, usamos router, que **se encargará de administrar esta situación, donde en el momento que abras el tweet, cambie la URL, pero todavía mantenga ese dinamismo y rapidez de una SPA.**

¿Entonces qué es ReactRouterDOM?

Para instalar y trabajar con **create-react-app**:

```bash
npm i react-router-dom

o

npm install react-router-dom
```

Import en App.jsx en Versión 6 o superior:

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

Usaremos esas 3 herramientas: BrowserRouter, Routes, Route

ReactRouterDOM **te permite implementar enrutado dinámico en la aplicación.** Nos facilita pues podemos enrutar nuestra app basada en componentes de la app:

```js
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='recovery-password' element={<Recoverypassword />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
```

Para trabajar con configuración desde webpack es necesario añadir una configuración a output y añadir devServer:

```js
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/',
},
devServer: {
  historyApiFallback: true,
}
```

**BrowserRoute** sirve para implementar router en el navegador.

**Routes** **regresa la primera ruta que coincida**. En pocas palabras, si estamos en www.platzi.com/contacto , regresará el componente que coincida a este (es decir, el componente que contenga la lógica de contacto).

**Layout solamente renderizará el route que coincida efectivamente con la URL especificada.**

## Hooks

### useState

Es una función que hay que declararse como un array con 2 posiciones: La posición 0 es la variable que puede ir cambiando y la posición 1 que es la función que va a hacer ese cambio:

1. El valor
2. La funcion que cambia el valor

```js
const [videos, setVideos] = React.useState(0);
```

UseState recibe un solo argumento, el cuál será el primer elemento de nuestro arreglo. Este dato pues ser de cualquier tipo. Incluso puede ser una función.
En useState es siempre necesario definir un valor como parametro. Puede ser un string, array, booleano o número.

```js
const [searchValue, setSearchValue] = useState('');
const [searchValue, setSearchValue] = useState(false);
const [searchValue, setSearchValue] = useState(['Dorime', 'Ameno']);
const [searchValue, setSearchValue] = useState(0);
const [searchValue, setSearchValue] = useState(() => {
  return 'Hola mundo';
});
const [searchValue, setSearchValue] = useState({
  name: 'Dorime',
  age: 'Ameno',
});
```

Ejemplo:

```js
import React, { useState } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  return <div>{name}</div>;
};
```

El estado es dinámico y **puede cambiar en el futuro con manejo de eventos.**

Si quieres importar todo React para usar useState:

```js
import React from 'react';
const [searchValue, setSearchValue] = React.useState('');
```

Si quieres importar unicamente useState:

```js
import { useState } from 'react';
const [searchValue, setSearchValue] = useState('');
```

### useEffect

Sirve para ejecutar el código que le pasemos por dentro **junto antes de que el componente esté listo para ser mostrado.**

Va a permitir ir a APIs para consultar datos y luego pasarsela a algún estado que queramos hacer.

1. Recibe un primer parámetro como una función anónima.
2. Y un segundo parámetro como un arreglo de condiciones para que sea llamada.

> Si no se le pasa el segundo argumento, entonces useEffect entra en un bucle infinito.

Debemos enviarle una función para ser ejecutada.
Es capaz de ser ejecutado cuando React ya realizó todos sus trabajos internos.

Al enviarle un arreglo sin condiciones como parámetro, el Hook useEffect se va a ejecutar una sola vez. Sin importar si se renderiza miles de veces la página:

```js
React.useEffect(() => {
  console.log('use effect');
}, []);
```

Al enviarle un parámetro dentro del arreglo, entonces el Hook se va a ejecutar siempre que **haya cambios en ese parámetro**:

```js
React.useEffect(() => {
  console.log('use effect');
}, [totalTodos]);
```

El Hook useEffect nos permite ejecutar código cuando se monta, desmonta o actualiza nuestro componente.

Ejemplo:

```js
import React, { useState, useEffect } from 'react';

const Component = () => {
  const [name, setName] = useState('Nombre por defecto');

  useEffect(() => {
    document.title = name;

    return () => {
      document.title = 'el componente se desmontó';
    };
  }, [name]);

  return <div>{name}</div>;
};
```

Dentro de la función anónima podemos retornar otra función. Esta función se va a ejecutar una vez el hook se desmonta y desaparece del DOM.

#### Axios

Nos va a servir para hacer las llamadas a API´s de una manera más óptima y fácil.

```bash
npm i axios
```

Para poder hacer llamadas a API´s dentro de React podemos hacer lo siguiente:

```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API = 'https://api.escuelajs.co/api/v1/products';

const ComponenteMuestra = () => {
  const [products, setProducts] = useState([]);

  // Debemos utilizar funciones asíncronas para utilizar axios
  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);
};

export { ComponenteMuestra };
```

O si lo anterior empieza a tirar warnings por ESLint, podemos usar:

```js
useEffect(() => {
  async function fetchData() {
    const response = await axios.get(URL);
    console.log(response);
  }

  fetchData();
}, []);
```

O

```js
useEffect(() => {
  async function fetchData() {
    const response = await axios(URL);
    console.log(response);
  }

  fetchData();
}, []);
```

> Fetch es nativo y axios es un paquete. Fetch nos entrega la respuesta para nosotros parsearla a través de `.json()`, axios nos entrega la respuesta lista para trabajar con ella. Manejar errores en axios es mucho más intuitivo que en fetch.

### Custom Hook

Crear un Custom Hook significa que vamos a pasar la información que teníamos a una función que podemos usar cuántos veces queramos.

Podemos crear Hooks personalizados aparte de la lógica que tenemos, por convención debe empezar por la palabra **use**

- Custom hook para hacer peticiiones a una API:

```js
import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    setProducts(response.data);
  }, []);

  return products;
};

export { useGetProducts };
```

### useRef y Formularios

**useRef** es un hook utilizado para obtener una referencia a los datos de un objeto con información mutable.
Es decir, es como una manera de siempre poder obtener los datos mas recientes mediante referencia de algún objeto de html.
Un formulario es una gran ejemplo.
Dos características importantes de useRef es que los datos son persistentes en caso de que se re-renderice el componente. Así como también, actualizar los datos de esta referencia no causan el re-render. Cabe recalcar la diferencia con useState, que la actualización de datos es síncrona, ya además como hemos mencionado, no se re-renderiza

**useRef:**

- Genera una referencia al elemento y podremos acceder a los valores por medio de ‘current’, y por este medio obtener lo que estamos typeando según sea el caso y poderlo transmitir a donde lo necesitemos.
- El elemento que tendrá la referencia debe tener atributo: ref={NOMBRE_USEREF}
- Podemos acceder a toda la data de la siguiente manera: new FormData(NOMBRE_USEREF.current);
- El elemento también debe tener un atributo: name=“NOMBRE” y podremos acceder a la data que trae en current de la siguiente manera: formData.get(‘NOMBRE’);

Ejemplo de uso de useRef con un formulario:

```js
import React, { useRef } from 'react';
import '@styles/Login.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current); //https://developer.mozilla.org/es/docs/Web/API/FormData
    const data = { username: formData.get('email'), password: formData.get('password') };
    console.log(data);
  };

  return (
    <div className='Login'>
      <div className='Login-container'>
        <img src={logo} alt='logo' className='logo' />
        <form action='/' className='form' ref={form}>
          <label htmlFor='email' className='label'>
            Email address
          </label>
          <input
            type='text'
            name='email'
            placeholder='platzi@example.cm'
            className='input input-email'
          />
          <label htmlFor='password' className='label'>
            Password
          </label>
          <input
            type='password'
            name='password'
            placeholder='*********'
            className='input input-password'
          />
          <button onClick={(e) => handleSubmit(e)} className='primary-button login-button'>
            Log in
          </button>
          <a href='/'>Forgot my password</a>
        </form>
        <button className='secondary-button signup-button'>Sign up</button>
      </div>
    </div>
  );
};

export { Login };
```

### React.useContext

Nos provee una mejor manera de trabajar con props.
Nos permite crear provaiders y consumers para que nuestro estado, ya no solo podamos compartirlo entre los diferentes elementos de nuestros componentes, sino también entre los diferentes componentes de la aplicación.

NOTE: Nos permite comunicar **props** entre toda la aplicación evitando la comunicación de padre a hijo y tataranieto.

TODO: Redux se enfoca en el flujo de la información de la app dependiendo de eventualidades que tienen que pasar.
TODO: Provee información sin necesidades de tener que estar pasando las props por todos los componentes de la app.

> Ya no vamos a pasar props y props por cada componente.

Pasos para usar useContext:

1. Crear una carpeta llamada context y dentro crear un archivo .js con la siguiente configuración:

```js
import React from 'react';

const AppContext = React.createContext({});

export { AppContext };
```

2. (Opcional pero muy recomendable) Crear un nuevo custom hook que puede ser llamado useInitialState.js y añadimos la configuración que necesitamos, manejando un useState:

```js
import { useState } from 'react';

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({ ...state, cart: [...state.cart, payload] });
  };

  return { state, addToCart };
};

export { useInitialState };
```

3. Vamos al archivo padre que está presentando la App en HTML, importamos nuestro archivo de la carpeta context y lo que tenemos dentro de return lo encerramos con el <nombre_del_archivo_de_la_carpeta_context.Provider value={}>{Componentes y datos}<nombre_del_archivo_de_la_carpeta_context.Provider/>:

```js
import { AppContext } from '@context/AppContext';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recovery-password' element={<RecoveryPassword />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
```

4. Importamos nuestro Hook con useState, lo inicializamos en una constante para poder pasarle como parámetro de value en <nombre_archivo_context value={archivo_custom_hook}></nombre_archivo_context>:

```js
import { useInitialState } from '@hooks/useInitialState';
import { AppContext } from '@context/AppContext';

const App = () => {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/recovery-password' element={<RecoveryPassword />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export { App };
```

5. Nos vamos al componente en donde necesitamos usar useContext y añadimos la configuración:

```js
import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';

const ProductItem = ({ product }) => {
  //Aquí estamos usando useContext para traer el stado inicial desde App.jsx
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className='ProductItem'>
      <img src={product.images[2]} alt={product.title} />
      <div className='product-info'>
        <div>
          <p>${product.price},00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addCart} alt='' />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
```

NOTE: El archivo dentro de la carpeta context nos ayuda a conectar el contexto para que pueda ser usado por cualquier elemento que lo necesite

## Local Storage

Se puede hacer persistencia de datos en el frontend, sin necesidad del backend.

> No importa si cerramos la página. Recargamos, etc... Los datos siempre se van a guardar.

NOTE: Solo puede guardar texto.

Podemos apoyarnos de **JSON.stringify()** que nos sirve para convetir a texto, cualquier tipo de objeto y **JSON.parse()** nos sirve para regresar a sintaxis de Javascript, como si nunca la hubieramos transformado.

Para persistir datos, hacemos uso de **setItem("versión", string)**, que recibe dos argumentos:

1. la versión
2. un string.

Para insertar el string, debemos hacer uso de **JSON.stringify("data").**
Para obtener lo que está guardado en localStorage, hacemos uso de **getItem("versión")**, y solamente le debemos pasar la versión. **Y nos devolverá un string con los datos.**
Para convertir estos datos de nuevo en Javascript puro, **utilizamos JSON.parse();**

## Props: Comunicación entre Componentes

Las Props son la forma de enviar y recibir información en nuestros componentes. Son la forma de comunicar cada componente con el resto de la aplicación. Son muy parecidas a los parámetros y argumentos de las funciones en cualquier lenguaje de programación. Propiedades solo de lectura, y debemos instanciarlas para utilizarlas.

```js
// Button.jsx
import React from 'react';
const Button = props => {
return (

<div>
<button type="button">{props.text}</button>
</div>
);
};

export default Button;

// index.jsx
import React from 'react';
import Button from './components/Button';
ReactDOM.render(
<Button text="¡Hola!" />,
document.getElementByid('root'),
);

// Stateless
const ComponenteFuncional = (props) => { // <-- Las props son el único argumento que recibe nuestra función
}

// Stateful
class ComponenteClase extends React.Component {
const children = this.props; // <-- Una prop se llama con this.props
}
```

> Cuando creamos un componente propio en React, no se manejan los childrens, pero cuando creamos elementos de html, éstos se manejan tal cual como funciona html, así que es completamente posible que un componente que creemos y le pongamos hijos no renderice ninguno de éstos.

### Destructuración de los props

- Se puede tomar las props en constantes para ser utilizadas luego:

```js
import React from 'react';
const Button = (props) => {
  const { text } = props.text;
  return (
    <div>
      <button type='button'>{text}</button>
    </div>
  );
};
```

- Se puede también solo llamar a ciertas props que necesitamos:

```js
import React from 'react';

const Button = ({ value }) => {
  return (
    <div>
      <button type='button'>{value}</button>
    </div>
  );
};

export { Button };
```

## Métodos del Ciclo vida

> ¿Qué son los métodos del ciclo vida?

Todos los componentes en React pasan por una serie de fases que generalmente se denominan _Ciclo de Vida del componente_ es un proceso que React hace en cada componente, en algunos casos no podemos verlos como un bloque de código y en otros podemos llamarlos en nuestro componente para asignar una actividad según sea el caso necesario.

Los componentes en react pasan por un **Montaje, Actualización, Desmontaje y Manejo de errores.**

- Montaje:
  En esta fase nuestro componente se crea junto a la lógica y los componentes internos y luego es insertado en el DOM.

- Actualización:
  En esta fase nuestro componente está al pendiente de cambios que pueden venir a través de un cambio en “state” o “props” esto en consecuencia realizan una acción dentro de un componente.

- Desmontaje:
  En esta etapa nuestro componente “Muere” cuando nosotros no necesitamos un elemento de nuestra aplicación, podemos pasar por este ciclo de vida y de esta forma eliminar el componente de la representación que tiene en el DOM.

- Manejo de Errores:
  Cuando nuestro código se ejecuta y tiene un error, podemos entrar en una fase donde se puede entender mejor qué está sucediendo con la aplicación.

Algo que debemos tener en cuenta es que **un componente NO debe pasar por toda las fases**, un componente puede ser montado y desmontado sin pasar por la fase de actualización o manejo de errores.

Ahora que entendemos las fases que cumple el ciclo de vida en React vamos a entrar a detalle en cada uno de ellos para ver qué piezas de código se ejecutan y nos ayudarán a crear aplicaciones en React pasando por un ciclo de vida bien estructurado.

- NOTE: Montado:

Constructor()

> Este es el primer método al que se hace un llamado, aquí es donde se inicializan los métodos controladores, eventos del estado.

getDerivedStateFromProps()

> Este método se llama antes de presentarse en el DOM y nos permite actualizar el estado interno en respuesta a un cambio en las propiedades, es considerado un método de cuidado, ya que su implementación puede causar errores sutiles.

render()

> Si queremos representar elementos en el DOM en este método es donde se escribe esta lógica, usualmente utilizamos JSX para trabajar y presentar nuestra aplicación.

ComponentDidMount()

> Este método se llama inmediatamente que ha sido montado en el DOM, aquí es donde trabajamos con eventos que permitan interactuar con nuestro componente.

- NOTE: Actualización:

getDerivedStateFromProps()

> Este método es el primero en ejecutarse en la fase de actualización y funciona de la misma forma que en el montaje.

shouldComponentUpdate()

> Dentro de este método se puede controlar la fase de actualización, podemos devolver un valor entre verdadero o falso si queremos actualizar o no el componente y es utilizado principalmente para optimización.

render()

> Se llama el método render que representa los cambios en el DOM.

componentDidUpdate()

> Este método es invocado inmediatamente después de que el componente se actualiza y recibe como argumentos las propiedades y el estado y es donde podemos manejar nuestro componente.

- NOTE: Desmontado

componentWillUnmount()

> Este método se llama justo antes de que el componente sea destruido o eliminado del DOM.

- NOTE: Manejo de Errores:

getDerivedStateFromError()

> Una vez que se lanza un error este es el primer método que se llama, el cual recibe el error como argumento y cualquier valor devuelto en este método es utilizado para actualizar el estado del componente.

componentDidCatch()

> Este método es llamado después de lanzarse un error y pasa como argumento el error y la información representada sobre el error.

Ahora que entendemos cada una de las fases que tiene el ciclo de vida de react, podemos utilizarlas según sea necesario en nuestra aplicación y de esta forma crear las interacciones que necesitemos.

# Inicialización y Configuración de Entorno desde 0

Es importante inicializar el proyecto con node (npm init) para mostrar que tecnologías estoy usando, la descripción.

Iniciar un repositorio en GIT:
git init

Iniciar un proyecto de Node.js:
npm init -y

Instalar React:

> npm install react react-dom
> npm i react react-dom

- Crear una carpeta public que es donde se irá nuestro código para producción. **Crear también un index.html**
- Crear una carpet src para añadir dentro todo el código que ocupemos. **Crear un index.js y una carpeta para Components**
- Package-lock => sirve para manejar el versionado de los paquetes y las dependencias que estamos instalando.
- Package.jason => Configuraciones, scripts, dependencias
- node_modules => Paquetes y dependencias para el proyecto

## Agregar compatibilidad con Babel

### Pre-steps

> Babel sirve para **crear código Javascript moderno** y convertirlo a código que pueda ser entendido por todos los navegadores.

NOTE: Se necesita un punto de entrada y otro punto de salida => En el proyecto react-platzi-video, este punto de entrada es index.js. En ese archivo vamos a tener que importar react y reactDOM.

- import React from 'react';
- import ReactDOM from 'react-dom';

TODO: En el punto de entrada, vamos a tener un método Render que recibe 2 parámetros, el o los componentes y hacía donde voy a empujar el componente, puede ser llamado mediante document.getElementById. El ID debe estar presente ya en index.html:

- ReactDOM.render(<HelloWorld />, document.getElementById('main'));

En el HTML iría:

- <div id="main"></div>

### Steps

Para instalar babel:

> npm install --save-dev @babel/core babel-loader @babel/preset-env @babel/preset-react
> npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react

Después de la instalación, debemos crear un archivo llamado .babelrc que nos va a servir para configurar babel. El punto al inicio del nombre del archivo significa que no se debe tomar en cuenta.

Dentro del archivo creado, vamos a crear un objeto con las configuraciones instaladas:

@babel/core => Tiene todas las herramientas para transformar Javascript a código moderno.
babel-loader => Trabaja con webpack
Presets => Nos permite trabajar con Javascript y con react, ayuda a entenderlo

## Webpack: Empaquetación de módulos

Nos ayuda a preparar nuestro proyecto para un entorno de desarrollo local o para enviarlo a producción. Se encarga de todos los recursos de javascript, html, css, multimedia; los agrupa y los optimiza para enviarlos a producción.

Para instalar Webpack:

- npm i -D webpack webpack-cli html-webpack-plugin html-loader => El flag -D Sirve para instalar los paquetes para desarrollo.

webpack-cli => Sirve para manipular webpack desde la línea de comandos.
html-webpack-plugin => Sirve para manipular archivos html
html-loader => Sirve para cargar archivos HTML.

Después de la instalación debemos crear un archivo en la raíz del proyecto llamado => Webpack.config.js

Requerir path y el plugin:

> const path = require("path");
> const HtmlWebPackPlugin = require("html-webpack-plugin");

Luego, debemos crear un módulo para exportarlo:

module.exports = {
// El punto de entrada es el archivo que vamos a utilizar para hacer la compilación de webpack.
entry: "./src/index.js",
// El punto de salida lo vamos a utilizar para decirle a webpack que en este lugar nos cree esta carpeta con este nombre. Path.resolve sirve para crear la dirección y filename sirve para crear el nombre del archivo.
output: {
path: path.resolve(\_\_dirname, "dist"),
filename: "bundle.js",
},
resolve: {
extensions: [".js", ".jsx"],
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
},
},
{
test: /\.html$/,
use: {
loader: "html-loader",
},
},
],
},
plugins: [
new HtmlWebPackPlugin({
template: "./public/index.html",
filename: "./index.html",
}),
],
};

NOTE: Configuración final de webpack con las dependencias instaladas:

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
entry: "./src/index.js",
output: {
path: path.resolve(\_\_dirname, "dist"),
filename: "bundle.js",
},
resolve: {
extensions: [".js", ".jsx"],
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: "babel-loader",
},
},
{
test: /\.html$/,
use: {
loader: "html-loader",
},
},
],
},
plugins: [
new HtmlWebPackPlugin({
template: "./public/index.html",
filename: "./index.html",
}),
],
};

NOTE: Webpack es una herramienta que nos ayuda a compilar multiples archivos (JavaScript, HTML, CSS, imágenes) en uno solo (o a veces un poco más) que tendrá todo nuestro código listo para producción.

> Script para ejecutar las tareas de Webpack (package.json):

"build": "webpack --mode production" => Modo Producción
"build": "webpack --mode development" => Modo Desarrollo

### Webpack Dev Server: Reporte de errores y Cambios en tiempo real

Este plugin sirve para reportar errores y mostar cambios en tiempo real en el camino de desarrollo.

Instalación de Webpack Dev Server:

> Hay que tener instalado y actualizado node.

```bash
npm install --save-dev webpack-dev-server
```

Script para ejecutar el servidor de Webpack y visualizar los cambios en tiempo real (package.json):

```json
"start": "webpack serve --open --mode development"
```

## Trabajando con Sass

Los preprocesadores como Sass son herramientas que nos permiten escribir CSS con una sintaxis un poco diferente y más amigable que luego se transformará en CSS normal. Gracias a Sass podemos escribir CSS con variables, mixins, bucles, entre otras características.

Para instalar y trabajar con SASS vamos a instalar:

```bash
npm install --save-dev mini-css-extract-plugin css-loader node-sass sass-loader
npm i -D mini-css-extract-plugin css-loader node-sass sass-loader
```

- **mini-css-extract-plugin** => Va a servir para extraer el css del bundle resultante y crear un archivo aparte como css.
- **css-loader** => Sirve para trabajar con css
- **node-sass** => Sirve para trabajar con sass

Configuración (webpack.config.js):

- Crear una nueva regla:

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // Requerimos el plugin instalado

// Module

{
  test: /\.(s\*)css$/, // ojo aquí
  use: [
    { loader: MiniCssExtractPlugin.loader },
    'css-loader',
    'sass-loader',
  ],
},

// Plugins

new MiniCssExtractPlugin({
  filename: 'assets/[name].css',
})
```

## Eslint y .gitignore

**Git Ignore** es un archivo que nos permite definir qué archivos NO queremos publicar en nuestros repositorios.

- Debemos crear el archivo .gitignore y escribir los nombres de los archivos y/o carpetas que no queremos publicar.

Los linters como ESLint son herramientas que nos ayudan a seguir buenas prácticas o guías de estilo de nuestro código.

Se encargan de revisar el código que escribimos para indicarnos dónde tenemos errores o posibles errores. En algunos casos también pueden solucionar los errores automáticamente. De esta manera podemos solucionar los errores incluso antes de que sucedan.

Instalar Eslint:

```bash
npm install --save-dev eslint babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y
```

Debemos crear un archivo llamado .eslintrc, en donde vamos a crear la configuración de nuestro proyecto:

```json
{
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": ["airbnb"],
  "globals": {
    "document": false,
    "escape": false,
    "navigator": false,
    "unescape": false,
    "window": false,
    "describe": true,
    "before": true,
    "it": true,
    "expect": true,
    "sinon": true
  },
  "parser": "babel-eslint",
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "react/jsx-filename-extension": 0,
    "array-bracket-spacing": 2,
    "arrow-body-style": 0,
    "block-scoped-var": 2,
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    "comma-spacing": [2, { "before": false, "after": true }],
    "comma-style": [2, "last"],
    "complexity": 0,
    "consistent-return": 1,
    "consistent-this": 0,
    "curly": [2, "multi-line"],
    "default-case": 0,
    "dot-location": [2, "property"],
    "dot-notation": 0,
    "eol-last": 2,
    "eqeqeq": [2, "allow-null"],
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [2, "both"],
    "guard-for-in": 0,
    "handle-callback-err": [2, "^(err|error|anySpecificError)$"],
    "indent": [2, 2, { "SwitchCase": 1 }],
    "key-spacing": [2, { "beforeColon": false, "afterColon": true }],
    "linebreak-style": 0,
    "max-depth": 0,
    "max-len": [2, 1550, 4],
    "max-nested-callbacks": 0,
    "max-params": 0,
    "max-statements": 0,
    "new-cap": [2, { "newIsCap": true, "capIsNew": false }],
    "newline-after-var": [0, "never"],
    "new-parens": 2,
    "no-alert": 0,
    "no-array-constructor": 2,
    "no-bitwise": 0,
    "no-caller": 2,
    "no-catch-shadow": 0,
    "no-cond-assign": 2,
    "no-console": 0,
    "no-constant-condition": 0,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 0,
    "no-delete-var": 2,
    "no-div-regex": 0,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 0,
    "no-empty-character-class": 2,
    "no-labels": 2,
    "no-eq-null": 0,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 0,
    "no-extra-semi": 0,
    "no-extra-strict": 0,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": [2, "functions"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-iterator": 2,
    "no-label-var": 2,
    "no-lone-blocks": 0,
    "no-lonely-if": 0,
    "no-loop-func": 0,
    "no-mixed-requires": 0,
    "no-mixed-spaces-and-tabs": [2, false],
    "no-multi-spaces": 2,
    "no-multi-str": 0,
    "no-multiple-empty-lines": [2, { "max": 1 }],
    "no-native-reassign": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 0,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-path-concat": 0,
    "no-plusplus": 0,
    "no-process-env": 0,
    "no-process-exit": 0,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-reserved-keys": 0,
    "no-restricted-modules": 0,
    "no-script-url": 0,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 0,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 0,
    "no-ternary": 0,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 0,
    "no-undef-init": 2,
    "no-undefined": 0,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 0,
    "no-unused-vars": [2, { "vars": "all", "args": "none" }],
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": 0,
    "no-with": 2,
    "object-curly-newline": 0,
    "object-curly-spacing": [2, "always"],
    "one-var": 0,
    "operator-assignment": 0,
    "operator-linebreak": [2, "after"],
    "padded-blocks": 0,
    "prefer-const": 2,
    "quote-props": 0,
    "quotes": [2, "single", "avoid-escape"],
    "radix": 2,
    "jsx-quotes": [2, "prefer-single"],
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
    "jsx-a11y/media-has-caption": 0,
    "react/display-name": 0,
    "react/jsx-boolean-value": 0,
    "react/jsx-closing-bracket-location": 2,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-no-bind": [2, { "allowArrowFunctions": true }],
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-sort-prop-types": 0,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-did-mount-set-state": 2,
    "react/no-did-update-set-state": 2,
    "react/no-multi-comp": 0,
    "react/no-unknown-property": 2,
    "react/prop-types": 0,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 2,
    "react/self-closing-comp": 2,
    "react/sort-comp": 0,
    "react/jsx-wrap-multilines": 2,
    "semi-spacing": 0,
    "sort-vars": 0,
    "space-before-blocks": [2, "always"],
    "space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "keyword-spacing": 2,
    "space-unary-ops": [2, { "words": true, "nonwords": false }],
    "spaced-comment": [0, "always"],
    "strict": 0,
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 2,
    "wrap-iife": [2, "any"],
    "wrap-regex": 0,
    "yoda": [2, "never"]
  }
}
```

// La anterior es una configuración recomendada por el equipo de Platzi.
// También podemos utilizar:

```json
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "react/prop-types": 0,
    "no-underscore-dangle": 0,
    "import/imports-first": ["error", "absolute-first"],
    "import/newline-after-import": "error"
  },
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true
  },
  "parser": "babel-eslint"
}
```

## Forma de organizar carpetas

1. File Type First
   Creamos una carpeta por cada tipo de componentes o elementos de nuestra aplicación.

Tendremos una carpeta para los contenedores. Otra para los componentes presentacionales. Otra para la lógica de conexión a la API. Otra para los custom hooks. Otra para los reducers. Otra para los estilos. Una carpeta para cada todo.

- containers/
  - FeatureA.js
  - FeatureB.js
  - FeatureC.js
  - FeatureD.js
- components/
  - FeatureA.js
  - FeatureB.js
  - FeatureC.js
  - FeatureD.js
- styles/
  - FeatureA.css
  - FeatureB.css
  - FeatureC.css
  - FeatureD.css
- actions/
  - ...
- reducers/
  - ...
- hooks/
  - ...

Ó Feature First (Pods) => Cada feature de nuestra aplicación tendrá su propia carpeta.

En vez de crear una carpeta para cada tipo de componente, cada elemento (lógico o visual) de nuestra aplicación tendrá una carpeta. Y dentro de esa carpeta podemos organizar nuestros archivos como más nos guste, incluso de formas diferentes en cada feature.

- profile
  - index.js
  - api.js
  - hooks.js
  - Profile.js
  - styles/
- courses
  - index.js
  - api/
  - hooks/
  - components/
  - containers/
- jobs
  - index.js
  - firebase.js
  - JobsUI.js
  - JobsLogic.js
  - utils/
  - components/
- global
  - sharedHooks/
  - bodyStyles.css

Ó Apps of Apps

Creamos una carpeta para cada aplicación.

Esta estructura nos ayuda cuando nuestra aplicación no se divide solo por features, sino también por “subaplicaciones”. Cada subaplicación es independiente de las demás, así que puede manejar la estructura de carpetas que mejor se le adapte.

- Amazon

  - Ecommerce

    - containers/
    - components/
    - styles/
    - api/

  - PrimeVideo

    - Browse
      - index.js
      - MovieThumbnail.js
      - Category.js
      - SearchForm.js
      - containers/
        - BrowseByCategory.js
        - BrowseBySearch.js
      - MovieReproduction/
      - MoviePreview/
      - MovieAds/
    - shared/
      - thumbnails/
      - icons/
      - auth/

  - AWS
    - Analytics
      - CloudSearch/
      - RedShift/
      - Glue/
      - Kinesis/
    - Storage
      - S3/
      - EFS/
      - Gateway/
      - WindowsFileServer/
    - MediaServices
      - ElasticTranscoder/
      - ElementalVideConnect/

## Imágenes y alias en Webpack

Al momento de compilar, Webpack guardará las imágenes en una nueva carpeta junto al código para producción y actualizará nuestros componentes (o donde sea que usemos las imágenes) con los nuevos nombres y rutas de los archivos.

Para manejar imágenes con Webpack 5 no necesitamos ningún loader y directamento podemos editar el archivo webpack.config.js:

```js
{
  test: /\.(png|gif|jpg)$/,
  use: [
    {
      loader: 'file-loader',
      options: { name: 'assets/[hash].[ext]' },
    }
  ],
},
```

NOTE: Uso de File Loader con React:

```js
import React from 'react';
import nombreDeLaImagen from '../assets/static/nombre-del-archivo';

const Component = () => <img src={nombreDeLaImagen} />;

export default Component;
```

### Alias

Sirve para tener las rutas guardadas en variables y no tener que escribir rutas tan largas. para configurarlo con Webpack 5:

```js
// Config en el apartado resolve:

resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@container': path.resolve(__dirname, 'src/containers'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@icons': path.resolve(__dirname, 'src/assets/icons'),
      '@logos': path.resolve(__dirname, 'src/assets/logos'),
  },
},
```

## Imports, Variables y Fuentes de Google en Sass

Así como JavaScript, Sass nos permite almacenar valores en variables que podemos usar en cualquier otra parte de nuestras hojas de estilo.

Ejemplo:

```scss
$theme-font: 'Muli', sans-serif;
$main-color: #8f57fd;

body {
  background: $main-color;
  font-family: $theme-font;
}
```

Podemos guardar nuestras variables en un archivo especial e importarlo desde los archivos de estilo donde queremos usar estas variables.

Ejemplo:

```scss
//Vars.scss

$theme-font: 'Muli', sans-serif;
$main-color: #8f57fd;

//App.scss

@import './Vars.scss';

body {
  background: $main-color;
  font-family: $theme-font;
}
```

También podemos importar hojas de estilo externas a nuestra aplicación. Por ejemplo: las fuentes de Google.

```scss
@import url(https://fonts.googleapis.com/css?family=Muli&display-swap);
body {
  font-family: 'Muli', sans-serif;
}
```

## Crear una Fake API

Vamos a usar `JSON Server` para crear una Fake API: una API “falsa” construida a partir de un archivo JSON que nos permite preparar nuestro código para consumir una API de verdad en el futuro.

Vamos a crear un archivo llamado initialState.Json y dentro ponemos una API que queramos:

```json
{
  "initalState": {
    "mylist": [],
    "trends": [
      {
        "id": 3,
        "slug": "tvshow-3",
        "title": "Instinct",
        "type": "Adventure",
        "language": "English",
        "year": 2002,
        "contentRating": "16+",
        "duration": 137,
        "cover": "http://dummyimage.com/800x600.png/302140/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ],
    "originals": [
      {
        "id": 13,
        "slug": "tvshow-13",
        "title": "NCIS: Los Angeles",
        "type": "Drama",
        "language": "English",
        "year": 2010,
        "contentRating": "16+",
        "duration": 160,
        "cover": "http://dummyimage.com/800x600.png/5472FF/ffffff",
        "description": "Vestibulum ac est lacinia nisi venenatis tristique",
        "source": "https://mdstrm.com/video/58333e214ad055d208427db5.mp4"
      }
    ]
  }
}
```

Para instalar JSON Server:

```bash
sudo npm install json-server -g
```

> Debemos instalar el servidor de json globalmente y con permisos de administrador, caso contrario resultaria error.

### Para empezar con la Fake API

Para empezar la FAKE API debemos tener 2 pestañas en nuestra terminal y en una ventana vamos a correr:

```bash
json-server initialState.json
```

> Recuerda que en Windows debes correr tu terminal de comandos en modo administrador.
> Utilizar npx json-server --watch initialState.json para correr la fake API en windows 10.

## Conectando la información de la API

> Cuando no existen elementos en una parte de la API para comprobarlo y que no nos tire error, podemos utilizar "?".

```js
const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
```

Ejemplo de uso:

```js
const App = () => {
  // const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/initalState')
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />
      {videos.mylist?.length > 0 && (
        <Categorias title='My list'>
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categorias>
      )}

      <Categorias title='Tendencias'>
        <Carousel>
          {videos.trends?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>

      <Categorias title='Últimos Éxitos'>
        <Carousel>
          {videos.originals?.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categorias>
      <Footer />
    </div>
  );
};
```

## Debuggeando React con React DevTools

React DevTools es una herramienta muy parecida al Inspector de Elementos. Nos permite:

- Visualizar
- Analizar
- Interactuar con nuestros componentes de React desde el navegador.

Descargar desde: https://reactjs.org/blog/2015/09/02/new-react-developer-tools.html#installation

# Sass con Create-React-App

Para instalar sass con create-react-app vamos a hacer:

```bash
npm install node-sass
```

Luego de instalar, simplemente podemos añadir un archivo con extensión scss y listo, podemos empezar a trabajar.

# Hacer deploy en Github Pages

Instalamos un paquete para `github-pages`:

```bash
npm i -D gh-pages
```

Añadimos 2 scripts más al archivo `package.json`:

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Predeploy nos sirve para preparar el entorno y pasar el código a estático, ya que github pages solo soporta ese tipo de apps webs.
Deploy nos sirve para hacer el deploy en github pages, para completar el paso debemos hacer un commit y listo.

Podemos utilizar solo npm deploy, sin haber hecho antes el predeploy, ya que la palabra pre le dice al npm que ejecute primero ese comando y luego el comando que estoy llamando.

Debemos añadir un archivo a el archivo JSON con el siguiente formato:

```json
{
  "homepage": "https://leninner.github.io/react-platzi-video"
}
```

NOTE: Este método sirve para hacer deploy de apps hechas con create-react-app

# Metodología Atomic Design

Se empieza a desarrollar desde lo más pequeño hacia lo más grande.

> https://atomicdesign.bradfrost.com/images/content/html-periodic-table.png

1. **Átomos**
   Este es nuestro primer nivel de abstracción. Cuando diseñes un UI,**mira los botones, textos, imágenes o entradas de texto**. Son las partes más fundamentales y pequeñas que usamos.
   https://atomicdesign.bradfrost.com/images/content/atoms-form-elements.png

2. **Moléculas**
   Las moléculas son una unión de átomos. Todas estas moléculas, normalmente tienen una función específica para la cuál necesitan varios átomos. Por ejemplo, la glucosa C6H12O6, es la energía en carbohidratos del humanos.
   Ahora, pasemos al diseño.
   En interfaces, una parte como un comentario de twitter, una sección de youtube de ME GUSTA y NO ME GUSTA, o el menú en los videos de platzi para avanzar o retroceder en la clase, son todos moléculas.
   Estas están compuestas de algunos **componentes más pequeños** (como por ejemplo, de botón y cuadro de texto). Este es nuestro segundo nivel. Crear moléculas es simple, y recuerda que deberán tener una función única en nuestra UI
   https://atomicdesign.bradfrost.com/images/content/molecule-search-form.png

3. **Organismos**
   Los organismo están compuesto de muchas moléculas. Tienen vida propia, y pueden interactuar en una manera muy amplia con otros organismos.
   Imagina una abeja con una flor, ambos colaboran de una u otra manera a que el otro esté bien.
   **En nuestro diseño, imagina al header.** El header está compuesto de muchos elementos, y tienen un impacto muy grande en la app. O incluso, de una sección como una tienda de ropa en la paǵina web. Seguramente te das cuenta, que estos tienen muchos artículos, y todos constan de una imaǵen, precio, y un ordenamiento. Puedes verlo así:

   - Átomo⇒ imágen, precio, descripción
   - Molécula ⇒ el cuadro que contiene a la imágen, al precio y a la descripción.
   - Organismo ⇒ todos los cuadros ordenados en forma de tabla.

   - El organismo si te das cuenta, puede usar moléculas del mismo tipo o diferentes. El punto clave, es que no trates de abarcar tanto, y que pertenecen a una sección claramente definida en nuestra app.
     https://atomicdesign.bradfrost.com/images/content/organism-header.png

4. **Templates**
   Es la plantilla en la cual siempre organizarás los organismos. Es decir, el esqueleto que indica donde irá por ejemplo, el Header, el footer, grid y sección de comentarios.
   https://atomicdesign.bradfrost.com/images/content/template.png

5. **Pages**
   Las pages son en sí, toda la página funcionando con contenido interactúando entre ellas.
   https://atomicdesign.bradfrost.com/images/content/page.png

[NOTE]: Una recomendación. No pienses en forma secuencial el atomic design. Es decir, no pienses ⇒ primero hago los átomos, después hago las moléculas, tercero los organismos…
**Según el mismo autor de atomic design**, dependerá mucho de tu aplicación y de las necesidades que hay que cubrir. Más bien, es una manera mental de interpretar la UI

Es un método de desarrollo de UI que se puede usar en cualquier interfaz.

**Components**: pieza más pequeño (átomo).
**Containers**: Muestran la unión de uno o más componentes.
**Pages**: Son las secciones / rutas que vamos a tener.

NOTE: Es mejor añadir el nombre de las clases de manera similar al componente en el que estamos trabajando. También utilizar BEM.

## Creación de Servicio de Gravatar

1. En la carpeta **src** del proyecto vamos a crear una carpeta llamada utils y dentro añadimos un archivo llamado `gravatar.js`

2. Vamos a instalar md5, que es una dependencia que vamos a utilizar para crear este servicio:

```bash
npm install md5 --save
```

> MD5 es un algoritmo criptográfico que permite crear un hash a partir de un correo electrónico y de esta forma no se guarda el correo electrónico, si no solo el hash que hace referencia a una imagen

3. Para crear la función se hace de la siguiente manera:

```js
import md5 from 'md5';

const gravatar = (email) => {
  const base = 'https://gravatar.com/avatar/';
  const formateEmail = email.trim().toLowerCase();
  const hash = md5(formateEmail, { encoding: 'binary' });
  return `${base}${hash}`;
};
```

# Validaciones con Clases

Las validaciones nos va a servir de mucho para poder crear estados distintos, según el componente y el comportamiento con el que estemos involucrando este elemento.

Instalamos el paquete `classnames`:

```bash
npm install classnames --save
```

Para importarlo desde cualquier componente debemos hacerlo así:

```js
import classNames from 'classnames';
```

Para usarlo debemos hacerlo así:

```js
const headerClass = classNames('header', {
  isLogin,
  isRegister,
});
```

- Es primer parámetro de la función le dice a React que use esa clase en todos los componentes a los que se aplique esa lógica, sin importar el lugar donde se esté mostrando.
- El segundo parámetro, que es un objeto, nos va a servir para controlar la lógica del componente, se puede controlar la lógica de estilos, dependiendo el lugar en donde se presente el componente, ya sea login, register, etc...

> Es importante controlar la lógica de los estilos porque su posición pueden afectar a la presentación final.
> Es CSS los estilos de aplican en cascada o línea a línea.

# Automatización y Despliegue con Github Actions

1. Buscar en el Marketplace de Github:
   - Deploy con Github Actions
2. Copiar el código de "Get Started"

```yml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: build # The folder the action should deploy.
```

3. Crear una carpeta llamada github en la carpeta raíz del proyecto
4. Crear otra carpeta llamada workflows dentro de la carpeta de github
5. Crear un archivo llamado como queramos: deployToGp.yml y dentro pegamos:

```yml
name: Build and Deploy
on: [push]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2.3.1

      - name: Install and Build 🔧 # This example project is built using npm and outputs the result to the 'build' folder. Replace with the commands required to build your project, or remove this step entirely if your site is pre-built.
        run: |
          npm install
          npm run build

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@4.1.5
        with:
          branch: gh-pages # The branch the action should deploy to.
          folder: build # The folder the action should deploy.
```
