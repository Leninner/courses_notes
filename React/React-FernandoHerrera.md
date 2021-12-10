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

# Notas Interesantes

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
