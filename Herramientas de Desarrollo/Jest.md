**ÍNDICE**

- [Testing Basics](#testing-basics)
  - [¿Por qué los desarrolladores deberían preocuparse por las pruebas unitarias automatizadas?](#por-qué-los-desarrolladores-deberían-preocuparse-por-las-pruebas-unitarias-automatizadas)
  - [¿Cómo lleva TDD el desarrollo al siguiente nivel?](#cómo-lleva-tdd-el-desarrollo-al-siguiente-nivel)
- [Instalación de Jest](#instalación-de-jest)
  - [Usando Matchers](#usando-matchers)
    - [Comparadores Comunes](#comparadores-comunes)
    - [Veracidad](#veracidad)
    - [Números](#números)
    - [Strings](#strings)
    - [Arrays and iterables](#arrays-and-iterables)
    - [Excepciones](#excepciones)
  - [Instalación de Babel para Jest](#instalación-de-babel-para-jest)
  - [Aislamiento](#aislamiento)
    - [¿Qué son funciones puras?](#qué-son-funciones-puras)
      - [¿Qué son los efectos secundarios observables?](#qué-son-los-efectos-secundarios-observables)
  - [Mocking](#mocking)
- [Pruebas asíncronas](#pruebas-asíncronas)
- [Pruebas sobre componentes de React](#pruebas-sobre-componentes-de-react)
- [Enzyme - Testing Unit](#enzyme---testing-unit)
  - [Configuraciones y notas para evitar errores](#configuraciones-y-notas-para-evitar-errores)
  - [Para comprobar si un elemento se encuentra dentro de un componente](#para-comprobar-si-un-elemento-se-encuentra-dentro-de-un-componente)

# Testing Basics

> ¿Cuál es la importancia de Test Driven Development? TDD

Aquí escribe una prueba antes de escribir el código de producción suficiente para cumplir con esa prueba y luego refactoriza el código.

El objetivo principal de TDD es la especificación y no la validación.

En otras palabras, TDD es una forma de pensar en sus requisitos o diseño antes de escribir su código funcional (lo que implica que TDD es tanto un requisito ágil importante como una técnica de diseño ágil). Otro punto de vista es que TDD es una técnica de programación. El objetivo de TDD es escribir código limpio que funcione.

1. El primer paso es agregar rápidamente una prueba, básicamente la prueba suficiente para que su código falle

## ¿Por qué los desarrolladores deberían preocuparse por las pruebas unitarias automatizadas?

¡Te mantiene fuera del depurador (hambriento de tiempo)!
Reduce errores en nuevas funciones y en funciones existentes.
Reduce el costo del cambio
Mejora el diseño
Fomenta la refactorización
Crea una red de seguridad para defenderse de otros programadores
Es divertido
Te obliga a reducir la velocidad y pensar
Acelera el desarrollo al eliminar el desperdicio
Reduce el miedo

## ¿Cómo lleva TDD el desarrollo al siguiente nivel?

Mejora la productividad al:

- Minimizando el tiempo dedicado a la depuración
- reduce la necesidad de verificación manual (mono) por parte de desarrolladores y tester ayudando a los desarrolladores a mantener el enfoque
- reducir el desperdicio: traspasos
- Mejora la comunicación
- Creación de especificaciones vivas y actualizadas
- Comunicar decisiones de diseño
- Aprendizaje: escucha tu código
- Pasos de bebé: disminuya la velocidad y piense
- Mejora la confianza
- Código comprobable por diseño + red de seguridad
- Diseño de acoplamiento flexible
- Refactorización

# Instalación de Jest

Para instalas Jest ejecutamos lo siguiente en la terminal:

```bash
npm i -D jest
```

Para instalar de manera global, utilizamos:

```bash
sudo npm install jest --global
```

## Usando Matchers

Jest usa "comparadores" para permitirle probar valores de diferentes maneras.

### Comparadores Comunes

Similitud exacta:

```js
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```

En el ejemplo anterior, .toBe(4) es el Matcher
Si desea verificar el valor de un objeto, use toEqual en su lugar:

```js
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

toEqual comprueba de forma recursiva todos los campos de un objeto o matriz.
También puede probar lo opuesto a un comparador:

```js
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

### Veracidad

A veces necesitamos ver si algo es null, undefined o false. Jest nos ayuda con eso:

- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

Ejemplo:

```js
test('null', () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});
```

### Números

Feature muy conveniente:

```js
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

Para la igualdad de punto flotante, use toBeCloseTo en lugar de toEqual, porque no desea que una prueba dependa de un pequeño error de redondeo.

```js
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;
  //expect(value).toBe(0.3);           This won't work because of rounding error
  expect(value).toBeCloseTo(0.3); // This works.
});
```

### Strings

Puede comparar cadenas con expresiones regulares con toMatch:

```js
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

### Arrays and iterables

Puede verificar si una matriz o iterable contiene un elemento en particular usando toContain:

```js
const shoppingList = ['diapers', 'kleenex', 'trash bags', 'paper towels', 'milk'];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

### Excepciones

Si desea probar si una función en particular arroja un error cuando se llama, use toThrow.

```js
function compileAndroidCode() {
  throw new Error('you are using the wrong JDK');
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);

  // You can also use the exact error message or a regexp
  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');
  expect(() => compileAndroidCode()).toThrow(/JDK/);
});
```

## Instalación de Babel para Jest

Jest no reconoce la manera de importar de ES6, por esa razón debemos instalar Babel:

```bash
npm i -D @babel/preset-env
```

Archivo .babelrc para configuración:

```js
{ "presets": ["@babel/preset-env"] }
```

## Aislamiento

Solo debe probar un método a la vez, y sus pruebas para una función no deben depender de que una función externa se comporte correctamente, especialmente si esa función se está probando en otro lugar.

La razón principal de esto es que cuando sus pruebas fallan, desea poder delimitar la causa de esta falla lo más rápido posible. Si tiene una prueba que depende de varias funciones, puede ser difícil saber exactamente qué está fallando.

### ¿Qué son funciones puras?

1. La función siempre devuelve el mismo resultado si se pasan los mismos argumentos. No depende de ningún cambio de estado o de datos durante la ejecución de un programa. Solo debe depender de sus argumentos de entrada.

2. La función no produce ningún efecto secundario observable, como solicitudes de red, dispositivos de entrada y salida o mutación de datos.

#### ¿Qué son los efectos secundarios observables?

- Es cualquier interacción con el mundo exterior desde dentro de una función. Eso podría ser cualquier cosa, desde cambiar una variable que existe fuera de la función, hasta llamar a otro método desde dentro de una función.

NOTE: Si una función pura llama a una función pura, esto no es un efecto secundario y la función que llama sigue siendo pura.

Los efectos secundarios incluyen, entre otros:

- Hacer una solicitud HTTP
- Mutando datos
- Imprimir en una pantalla o consola
- Consulta / manipulación DOM
- Math.random ()
- Obtener la hora actual

> En sí mismos no son malos y a menudo son necesarios.

No todas las funciones deben ser puras

Ejemplo de función pura:

```
function priceAfterTax(productPrice) {
 return (productPrice * 0.20) + productPrice;
}
```

Ejemplo de función impura:

```
let tax = 20;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice;
}
```

NOTE: Uno de los beneficios más grandes de usar funciones puras es que son testeables.

## Mocking

Hay dos soluciones al problema del "código estrechamente acoplado":

1. The first, and best option is to simply remove those dependencies from your code as we did above, but that is simply not always possible.
2. La segunda opción es Mocking: escribir versiones "falsas" de una función que siempre se comporta exactamente como usted quiere. Por ejemplo en el uso de inputs por parte del usuario.

Un Unit es un módulo, componente o función. Unit test hace tests de ese módulo, componente o función.

Las afirmaciones de pruebas simples proporcionan:

- Mejor legibilidad.
- Menos código.
- Menos mantenimiento.

# Pruebas asíncronas

Para hacer pruebas asíncronas con promesas debemos hacer lo siguiente:

- Al cada test se le pasa un callback llamado `done` que le va a indicar a jest que en ese punto terminamos la prueba asíncrona y no tiene que evaluar más.

```js
import { getHeroeByIdAsync } from '../base/09-promesas';
import heroes from '../data/Heroes';

describe('Funciones asíncronas', () => {
  test('Debe retornar un heroe por ID async', (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toBe(heroes[0]);
      done();
    });
  });

  test('Error si el heroe no existe', (done) => {
    const id = 10;

    getHeroeByIdAsync(id).catch((error) => {
      // eslint-disable-next-line jest/no-conditional-expect
      expect(error).toBe('No se pudo encontrar el héroe');
      done();
    });
  });
});
```

También se puede utilizar `async` y `await`:

```js
import { getImagen } from '../base/11-async-await';

describe('Async and await', () => {
  test('Debe retornar el URL de una imagen', async () => {
    const url = await getImagen();

    console.log(url);

    expect(url.includes('https')).toBe(true);
  });
});
```

# Pruebas sobre componentes de React

Para hacer pruebas sobre componentes debemos configurar nuestro entorno de desarrollo así:

- Crear un archivo `setupTests.js` en la raíz de la carpeta `src`:

```js
import '@testing-library/jest-dom/extend-expect';
```

- Crear los tests en otro archivo de la siguiente manera:

```js
import { render } from '@testing-library/react';
import React from 'react';
import CounterApp from '../CounterApp';

describe('Debe estar en el documento', () => {
  const title = 'CounterApp';

  it(`Debe tener el titulo ${title}`, () => {
    // render sirve para simular el render del componente que estamos probando
    const { getByText } = render(<CounterApp />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(title)).toBeInTheDocument();
  });
});
```

# Enzyme - Testing Unit

> Desarrollada por AirBnb. Documentación para versiones menores a la 17 de react: https://enzymejs.github.io/enzyme/

> Documentación para versiones 17 y superior: (Beta) https://github.com/wojtekmaj/enzyme-adapter-react-17

- Para instalar Enzyme:

```bash
npm install --save-dev @wojtekmaj/enzyme-adapter-react-17
```

- Agregamos la configuración en `setupTest.js`:

```js
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });
```

## Configuraciones y notas para evitar errores

1. Vamos a instalar un paquete para convertir enzyme a JSON:

```bash
npm install --save-dev enzyme-to-json
```

2. En el archivo de `setupTest.js` añadimos:

```js
import { createSerializer } from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
```

> Al momento de lanzar pruebas, nos va a pedir que actualicemos el snapshot generado con la letra U o si es el caso, debemos refactorizar el código y mejorarlo

## Para comprobar si un elemento se encuentra dentro de un componente

Podemos hacer uso de esto:

```js
import React from 'react';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Debe estar en el documento', () => {
  // Esta prueba nos sirve para analizar si el componente coincide con el snapshot
  test('Debe mostrar el componente correctamente', () => {
    const wrapper = shallow(<CounterApp value={45} />);

    expect(wrapper).toMatchSnapshot();
  });

  // Esta prueba nos ayuda a ver si algún texto está dentro de un elemento en nuestro componente
  test('Debe mostrar el subtitulo enviado por props', () => {
    const value = 100;
    const wrapper = shallow(<CounterApp value={value} />);

    const valueText = wrapper.find('h2').text();

    expect(valueText).toBe(value.toString());
  });
});
```

- Para reinicializar el componente antes de cada prueba, podemos hacer uso del método `beforeEach()`, así:

```js
describe('Debe estar en el documento', () => {
  // podemos esta asignación porque caso contrario perdemos el intellisense
  let wrapper = shallow(<CounterApp value={45} />);

  // Aquí estamos reinicializando el componente antes de cada prueba
  beforeEach(() => {
    wrapper = shallow(<CounterApp value={45} />);
  });

  test('Debe mostrar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe incrementar el contador', () => {
    wrapper.find('button').at(0).simulate('click');

    const valueText = wrapper.find('h2').text();

    expect(valueText).toBe('46');
  });

  test('Debe menorar el contador', () => {
    wrapper.find('button').at(1).simulate('click');

    const valueText = wrapper.find('h2').text();

    expect(valueText).toBe('44');
  });
});
```

- Para simular clicks, podemos hacer:

```js
test('Debe incrementar el contador', () => {
  wrapper.find('button').at(0).simulate('click');

  const valueText = wrapper.find('h2').text();

  expect(valueText).toBe('46');
});
```
