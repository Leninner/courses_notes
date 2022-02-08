<h1 align="center">React Hooks</h1>

<div align="center">
   Notas del Curso Profesional de React Hooks de <a href="https://platzi.com/cursos/react-hooks/">Platzi</a>
</div>

<div align="center">
  <h3>
    <a href="https://www.linkedin.com/in/leninner/">
       @leninner
    </a>
    <span> | </span>
    <a href="https://story-hook-app.vercel.app/">
      Proyecto del Curso
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Introducción a los Hooks](#introducción-a-los-hooks)
- [Use State](#use-state)
- [Use Effect](#use-effect)

## Introducción a los Hooks

Son una forma de tener estado y ciclo de vida en nuestros componentes funcionales y así, prescindir de los componentes de clase.

Están disponibles a partir de la versión [16.8.0 de React](https://reactjs.org/docs/hooks-intro.html).

## Use State

El hook [useState](https://reactjs.org/docs/hooks-reference.html#usestate) sirve para controlar el estado de nuestro componente, su implementación en muy fácil.

Ejemplo de contador con uso de `useState`:

```jsx
import { useState } from 'react';

export const SomeComponent = () => {
  const [state, setState] = useState(0); // useState Hook

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <div>
      <h1>Contador: {state}</h1>
      <button onClick={handleClick}>Aumentar</button>
    </div>
  );
};
```

Por convención, a la segunda posición del arreglo de `useState` empieza por `set`, y eso nos quiere decir que algo va a cambiar.

## Use Effect

El hook [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect) nos ayuda a ejecutar un efecto cuando alguna de las variables que le pasamos como segundo parámetro a este hook cambia.

- Ejemplo de `useEffect` para un evento de escucha de `mousemove` en el documento:

```jsx
import { useEffect } from 'react';

export const SomeComponent = () => {
  const handleMouseMove = (event) => {
    console.log(event);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <h1>Este es un efecto cool</h1>
    </div>
  );
};
```

Este hook retorna una función de `limpieza`, que se va a ejcutar cuando un componente muera. En el caso anterior, cuando el componente se destruya, se va a eliminar el evento de escucha de `mousemove`.
