# Pruebas Unitarias y de Integración

Pruebas Unitarias => Enfocadas en pequeñas funcionalidades
Pruebas de Integración => Enfocadas a probar varias piezas en conjunto

Características:

1. Fáciles de leer
2. Fáciles de escribir
3. Confiables
4. Rápidas
5. Principalmente Unitarias

## AAA:

- **Arrange => Arreglar**

  - Preparamos el estado inicial
  - Inicializamos variables
  - Importanciones necesarias

- **Act => Actuar**

  - Aplicamos acciones o estímulos
  - Llamar métodos
  - Simular clicks
  - Realizar acciones sobre el paso anterior

- **Assert => Afirmar**
  - Observar el comportamiento resultante
  - Esperar que el resultado es el esperado

Mitos:

- Hace que mi aplicación no tenga errores
- Las pruebas no pueden fallar
- Hacen más lenta mi aplicación => Las pruebas se corren en la máquina del desarrollador.
- Es una pérdida de tiempo
- Hay que probar todo

# Instalación y configuracion de Jest + React Testing Library

En proyectos Reat + Vite

1. Instalamos lo necesario

```bash
npm install --dev jest babel-jest @babel/preset-env @babel/preset-react
npm install --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:

```bash
npm install --dev whatwg-fetch
```

3. Actualizar los scripts del package.json

```json
"scripts: {
  ...
  "test": "jest --watchAll"
  }
```

4. Crear la configuración de babel babel.config.js

```js
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

   - jest.config.js

```js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
};
```

- jest.setup.js

```js
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

## Renderizando custom hooks

Se puede renderizar los hooks con una herramienta de **@testing-library/react**:

```js
import { renderHook } from '@testing-library/react'; // usamos renderHook

const { result } = renderHook(() => useCounter()); // Hacemos uso de renderHook
```

> El objeto result contiene el estado actual de nuestro hook y así poder probarlo

## Ejecutando funciones del custom hook

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

# Ejemplos de Pruebas con Jest

# Pruebas con Fetching de Datos

Para hacer pruebas con fetching de datos, simplemente utilizamos un código similar al siguiente:

```js
import { getData } from '../../helpers/getData';

describe('Debe entregarme correctamente los datos en el fetching', () => {
  test('Debe entregarme 10 elementos', async () => {
    const datos = await getData('Goku');

    expect(datos.length).toBe(10);
  });

  test('Debe entregarme 0 elementos', async () => {
    const datos = await getData('');

    expect(datos.length).toBe(0);
  });
});
```

# Simular clicks

Para simluar clicks, podemos hacer uso de la función `simulate("click")`, y para simular cambios en un input, podemos hacer uso de la función `simulate("change")`

- Puede ocurrir el caso de que el evento no se esté pasando y tengamos un error, para controlar eso, podemos hacer algo como esto:

```js
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente Add Category', () => {
  const setCategories = () => {};
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  test('Debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe funcionar el onChange en el input', () => {
    const input = wrapper.find('ForwardRef(TextField)'); // con esto se busca el input con MUI
    const value = 'Hola Mundo';

    input.simulate('change', { target: { value } }); // aquí hacemos uso de simulate para simular el evento
    const parent = wrapper.find('p');

    expect(parent.text().trim()).toBe(value);
  });
});
```

# Simular el Submit de un Formulario

Para simular el envío de un formulario podemos utilizar la función `simulate("submit")`, así:

```js
test('No debe postear la información al hacer submit', () => {
  const form = wrapper.find('form');

  form.simulate('submit', { preventDefault() {} });
});
s;
```

Para comprobar que estamos ejecutando una función, podemos hacer uso del siguiente método:

```js
expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
```

# Mock

Nos va a servir para simular el fetch de datos que un componente necesita, para lograrlo, debemos hacer una serie de pasos:

1. Debemos importar la función para hacer fetch.
2. Debemos crear un mock con el `path` de la función de fetch de datos que queremos simular:

```js
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Vamos a tener una buena prueba', () => {
  const category = 'One Punch';
  const gifs = [{ id: 'ABC', url: 'https://localhost/one-punch.gif', title: 'One Punch' }];

  useFetchGifs.mockReturnValue({ data: gifs, loading: true }); // El parámetro enviado debe ser igual a la data que retorna el hook.
  //Este método se debe escribir antes de hacer el wrapper para que pueda funcionar

  const wrapper = shallow(<GifGrid category={category} />);

  test('Debe coincidir con el snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar las imágenes cuando se va cargando', () => {});
});
```

# Pruebas con Hooks

Para poder hacer pruebas en custom hooks debemos instalar un paquete adicional, llamado [react-hooks-testing-library](https://react-hooks-testing-library.com/):

```bash
$ npm install --save-dev @testing-library/react-hooks
```

Para empezar con pruebas sencillas en hooks, debemos hacer uso de `renderHook`, de otro modo, vamos a experimentar un error. El código de ejemplo es el siguiente:

- Al llamar a `renderHook` debemos pasarle el hook que queremos probar, en este caso `useFetchGifs`. También hay que tener en cuenta que debemos hacer una destructuración de `renderHook` para poder acceder a los datos que retorna.

```js
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en Use Fetch Gifs', () => {
  test('Debe retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch')); // Destructuración de renderHook

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });
});
```

## Wait for next update

El método de `waitForNextUpdate` nos permite esperar a que se ejecute una cierta acción de nuestro hook. Este método es una promesa que no se resuelve hasta que la acción sea ejecutada.

Un ejemplo de uso:

```js
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en Use Fetch Gifs', () => {
  test('Debe retornar el estado inicial', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

    const { data, loading } = result.current;
    await waitForNextUpdate();

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test('Debe retornar un arreglo de imágenes y el arreglo en false', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));

    await waitForNextUpdate();

    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
```

# Notas importantes

Para reiniciar el componente antes de cada prueba, podemos hacer uso del método `beforeEach()`, así:

```js
beforeEach(() => {
  jest.clearAllMocks(); // sirve para limpiar todas las simulaciones que hicimos en el componente
  wrapper = shallow(<AddCategory setCategories={setCategories} />);
});
```
