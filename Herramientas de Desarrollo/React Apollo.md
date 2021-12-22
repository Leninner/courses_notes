**ÍNDICE:**

- [React Apollo](#react-apollo)
  - [Setup](#setup)
  - [Initialize **ApolloClient**](#initialize-apolloclient)
  - [Conectar el cliente Apollo con la aplicación de React](#conectar-el-cliente-apollo-con-la-aplicación-de-react)
  - [Fetching Data con useQuery](#fetching-data-con-usequery)
  - [¿Cómo utilizar el hook React Apollo?](#cómo-utilizar-el-hook-react-apollo)
  - [¿Cómo utilizar el hook useMutation de @apollo/client?](#cómo-utilizar-el-hook-usemutation-de-apolloclient)

# React Apollo

> https://www.apollographql.com/docs/react/

Es un cliente que nos va a permitir conectarnos a los servidores de Graph QL y tiene una gran conexión con **React**

## Setup

```bash
npm install @apollo/client graphql
```

- **@apollo / client:** este paquete único contiene prácticamente todo lo que necesita para configurar Apollo Client. Incluye el caché en memoria, la administración del estado local, el manejo de errores y una capa de vista basada en React.
- **graphql:** este paquete proporciona lógica para analizar consultas GraphQL.

> Revisar la Documentación de GraphQL

## Initialize **ApolloClient**

En el entry point necesitamos importar todo lo necesario para nuestro proyecto:

```js
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
```

Luego vamos a inicializar el Apollo Client pasando a su constructor un objeto de configruación con su `uri` y `cache`:

```js
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});
```

- **uri** especifica la URL de nuestro servidor GraphQL.
- **cache** es una instancia de InMemoryCache, que Apollo Client usa para almacenar en caché los resultados de las consultas después de obtenerlos.

> Ahora estamos listos para hacer `fetching de datos`

```js
// const client = ...

client
  .query({
    query: gql`
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `,
  })
  .then((result) => console.log(result));
```

## Conectar el cliente Apollo con la aplicación de React

- Lo que hace el siguiente código es entregar la data a toda la aplicación

```js
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
```

## Fetching Data con useQuery

- `Use Query` es un hook de React que nos va a facilitar la vida al momento de hacer fetching de datos

```js
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;
```

- Se puede controlar los estados de cargando y de error:

```js
function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}
```

> El componente anterior ahora puede ser usado por el componente `App` padre

## ¿Cómo utilizar el hook React Apollo?

- Para traer los datos custom y renderizado condicional:

```js
export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);

  const detailId = urlParams.get('detail');

  console.log(detailId);

  return (
    <>
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategories />
          <ListOfPhotoCards categoryId={2} />
        </>
      )}
    </>
  );
};
```

- Para hacer fetching de datos con propiedades custom:

```js
import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { gql, useQuery } from '@apollo/client';

const query = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      liked
      userId
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => {
  console.log(id);
  // Aquí se usar el hook useQuery para hacer fetching de datos custom
  const { loading, error, data } = useQuery(query, {
    variables: {
      id: id,
    },
  });

  if (error) {
    return <h2>Internal Server Error</h2>;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <PhotoCard {...data.photo} />;
};
```

## ¿Cómo utilizar el hook useMutation de @apollo/client?

Para utilizarlo, debemos hacer lo siguiente:

```js
import { gql, useMutation } from '@apollo/client';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id
      liked
      likes
    }
  }
`;

export const useToggleLikeMutation = () => {
  const [mutation, { data, loading, error }] = useMutation(LIKE_PHOTO);
  return { mutation, data, loading, error };
};
```

- Este hook son sirve de mucho para hacer cambios en la base de datos de nuestra aplicación

Para ejecutar una mutación, primero llama a useMutation dentro de un componente de React y le pasa la mutación que desea ejecutar, así:

```js
import { gql, useMutation } from '@apollo/client';

// Define mutation
const INCREMENT_COUNTER = gql`
  # Increments a back-end counter and gets its resulting value
  mutation IncrementCounter {
    currentValue
  }
`;

function MyComponent() {
  // Pass mutation to useMutation
  const [mutateFunction, { data, loading, error }] = useMutation(INCREMENT_COUNTER);
}
```

**useMutation** nos regresa una función para mutar el contenido de nuestra base de datos y también nos retorna un objeto con los datos, loading y error para poder controlar esos aspectos:

```js
const { mutation, mutationLoading, mutationError } = useToggleLikeMutation();

const handleFavClick = () => {
  !liked &&
    mutation({
      variables: {
        input: { id },
      },
    });
  setLiked(!liked);
};
```

>
