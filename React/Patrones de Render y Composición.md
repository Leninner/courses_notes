**ÍNDICE**

- [Patrones de Render y Composición](#patrones-de-render-y-composición)
  - [Composición de Componentes](#composición-de-componentes)

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
