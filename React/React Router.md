# ¿Qué es React Router y cómo instalarlo?

React Router nos permite manejar las rutas de la aplicación en la que estamos trabajando:

- www.prueba.com/home
- www.prueba.com/login
- www.prueba.com/blog

Para instalar dentro del proyecto de React:

```bash
npm i react-router-dom
```

Posteriormente crear una carpeta con las rutas y exportar lo siguiente desde el paquete de NPM instalado anteriormente:

```js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
```

Luego podemos empezar a trabajar de la siguiente manera:

```js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

export { App };
```

Si estamos trabajando sin Create-react-app debemos añadir una configuración para que pueda funcionar correctamente en el archivo de configuración de Webpack:

```js
  devServer: {
    historyApiFallback: true,
  },
```

> Si estamos trabajando trabajar con create-ract-app, no hace falta añadirlo.

## Atributos de React Router DOM

> Existe una nueva versión que cambia Switch por Routes y ya no necesita el atributo exact

1. **path**: la ruta en la que se renderizará el componente en forma de cadena de texto
2. **exact**: un booleano para definir si queremos que la ruta tiene o no que ser exacta para renderizar un componente. Eg: /index !== /index/all.
3. **strict**: un booleano para definir si queremos que el último slash sea tomado en cuenta para renderizar un componente. Eg: /index !== /index/.
4. **sensitive**: un booleano para definir si queremos distinguir entre minúsculas y mayúsculas, y tomar esto en cuenta para renderizar un componente. Eg: /index !== /Index
5. **component**: recibe un componente a renderizar. Crea un nuevo elemento de React cada vez. Esto causa que el componente se monte y desmonte cada vez (no actualiza).
6. **render**: recibe un método que retorna un componente. A diferencia de component no remonta el componente.

## Para controlar páginas no encontradas

Para controlar cuando no exista alguna URL podemos añadir a nuestras rutas lo siguiente:

```js
<Route path='*' element={<h1>No encontrado</h1>} />
```
