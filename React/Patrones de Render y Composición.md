**ÍNDICE**

- [Patrones de Render y Composición](#patrones-de-render-y-composición)
  - [Composición de Componentes](#composición-de-componentes)
  - [Render Props y Render Functions](#render-props-y-render-functions)

# Patrones de Render y Composición

Escribir código limpio y fácil de mantener es muy importante, pero es difícil llegar a hacerlo. Sin embargo, existen patrones creados por el equipo de Facebook para poder hacer este trabajo más fácil

> React prefiere el código aburrido en lugar del código elegante

- Links de interés:
  - https://es.reactjs.org/docs/design-principles.html
  - https://reactjs.org/docs/composition-vs-inheritance.html
  - https://kentcdodds.com/blog/colocation
  - https://platzi.com/blog/paradigmas-programacion/

## Composición de Componentes

Piensa en esto: El elemento padre va a estar controlando que va a ir dentro el componente hijo, en lugar de que lo haga el componente hijo, así, podemos evitar un hell de props:

<img src="../utils/images/todoMachine.png" alt="imagen" >
<hr/>

```js
import { TodoCounter } from 'path/to/TodoCounter';
import { TodoSearch } from 'path/to/TodoSearch';
import { TodoList } from 'path/to/TodoList';

const TodoApp = () => {
  <TodoList>
    <TodoCounter />
    <TodoSearch />
  </TodoList>;
};
```

## Render Props y Render Functions

1. Render Props

   - Son funciones que se le envian a un componente a través de propiedades y dependiendo de lógica que nosotros hagamos, podemos renderizar algo.

2. Render Functions
   - Son funciones que se crean en la propiedad children de un componente y son similares a las funciones de las **render props**.

- Ejemplo con Render Props

```js
<TodoList
  onError={(error) => <TodoError error={error} />}
  onLoading={() => <TodoLoading />}
  onEmptyTodos={() => <EmptyTodos />}
  render={(todo) => <RenderTodos {...todo} />}
/>
```

- Ejemplo con Render Functions

```js
<TodoList>
  {(todos) => {
    <RenderTodos {...todos} />;
  }}
</TodoList>
```
