**ÍNDICE**

- [Patrones de Render y Composición](#patrones-de-render-y-composición)
  - [Composición de Componentes](#composición-de-componentes)
  - [Render Props y Render Functions](#render-props-y-render-functions)
  - [React.Children y React.cloneElement](#reactchildren-y-reactcloneelement)
  - [High Order Components](#high-order-components)
  - [Render props vs Render Functions vs React Hooks](#render-props-vs-render-functions-vs-react-hooks)

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
   - Las render props nos permiten ser más específicos sobre que vamos a renderizar, cuando y donde vamos a renderizar cada parte del contenido de nuestros componentes.

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

- Ejemplo de Mezclar Render Props y Render Functions

  - Punto de entrada

```js
<TodoList
  error={error}
  loading={loading}
  searchedTodos={searchedTodos}
  onError={() => <TodoError />}
  onLoading={() => <TodoLoading />}
  onEmptyTodos={() => <TodoEmpty />}>
  {(todo) => (
    <TodoItem
      key={todo.text}
      text={todo.text}
      completed={todo.completed}
      onComplete={() => {
        completeTodos(todo.text);
      }}
      onDelete={() => {
        deleteTodos(todo.text);
      }}
    />
  )}
</TodoList>
```

- Todo List

```js
export const TodoList = (props) => {
  const { error, loading, searchedTodos, onError, onLoading, onEmptyTodos, children, render } = props;

  const renderFunction = children || render;

  return (
    <section>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !searchedTodos.length && onEmptyTodos()}
      {searchedTodos.map(renderFunction)}
    </section>
  );
};
```

## React.Children y React.cloneElement

> https://es.reactjs.org/docs/react-api.html

- **React.Children**:

```js
React.Children.map(children, function[(thisArg)])
```

React.Children proporciona utilidades para lidiar con la estructura de datos opaca de this.props.children.

- **React.cloneElement**:

```js
React.cloneElement(element, [config], [...children]);
```

Clona y retorna un elemento React usando **element** como punto de partida. **config** debe contener todas las nuevas props, key, o ref.
El elemento resultante tendrá las props del elemento original con las nuevas props **combinadas superficialmente**.
Los nuevos hijos reemplazarán los hijos existentes.

> key y ref del elemento original serán preservadas si key y ref no están presentes en la configuración.

## High Order Components

> High Order Funcion => Son funciones que retornan otras funciones

<img src="./../utils/images/HOF.png">

Los HOC son componentes que retornan otros componentes, así:

```js
function withApi(WrapperComponent) {
  const apiData = fetchApi('url');

  return function WrapperComponentWithApi(props) {
    return <WrapperComponent data={apiData.json} />;
  };
}
```

<img src="../utils/images/muestra.png">

Al usar HOC vamos a pensar en lo siguiente:

1. Primero, la función padre es nuestro HOC y se pueden combinar varios HOCs.
2. Al llamar la ejecución de este HOC hay un orden de propiedades que se deben enviar. Primero se envía el argumento del HOC padre y luego se va en escalera enviando propiedades de la siguiente forma:

```js
const AppWithWathever = withWathever(App)('Hola')('Pepe')('some')(789);
```

3. La forma anterior, es la forma en la que se llama a los HOCs
4. Si un HOC renderiza un componente, y este recibe props, estas props se las envian al momento de renderizar el HOC, así:

```js
<AppWithWathever mensaje="Yo soy el aventurero" />
```

- Ejemplo de uso:

```js
function App({ saludo, name, mensaje }) {
  return (
    <h1>
      {saludo} {name}
      <p>{mensaje}</p>
    </h1>
  );
}

function withWathever(WrapperComponent) {
  return function ComponenteDeVerdad(saludo) {
    return function ComponentePro(nombre) {
      return function WrapperComponentWithSaludo(props) {
        return <WrapperComponent name={nombre} saludo={saludo} {...props} />;
      };
    };
  };
}

const AppWithWathever = withWathever(App)('Hola')('Pepe');

ReactDOM.render(<AppWithWathever mensaje="Yo soy el aventurero" />, document.getElementById('root'));
```

Otro Ejemplo de uso:

- HOC

```js
export function withChangeStorage(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [hasChanges, setHasChanges] = useState(false);

    window.addEventListener('storage', (change) => {
      if (change.key === 'TODOS_V1') {
        setHasChanges(true);
      }
    });

    return <WrappedComponent {...props} hasChanges={hasChanges} setHasChanges={setHasChanges} />;
  };
}
```

- Componente que usa el HOC

```js
import { withChangeStorage } from './withChangeStorage';
import './changeAlert.css';

function ChangeAlert({ hasChanges, setHasChanges, sincronizeTodos }) {
  return (
    <>
      {hasChanges && (
        <div className="alerta">
          <h3>You have unsaved changes.</h3>
          <button
            onClick={() => {
              setHasChanges(false);
              sincronizeTodos();
            }}>
            Refresh the page
          </button>
        </div>
      )}
    </>
  );
}

const ChangeAlertWithStorage = withChangeStorage(ChangeAlert);

export { ChangeAlertWithStorage };
```

## Render props vs Render Functions vs React Hooks

- Para enviar componentes, el claro ganador son las render props, por encima de los React Hooks. Es muy importante anañizar nuestro componente y ver qué se necesita y qué no

- Para enviar data o información, lo mejor es usar React hooks, ya que el código es totalmente vertical y fácil de leer
