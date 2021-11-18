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
import { Home } from 'path-to-home';
import { Login } from 'path-to-login';
import { RecoveryPassword } from 'path-to-password';
import { Layout } from 'path-to-Layout';

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

## Para mantener componentes en todas las páginas del sitio

Podemos crear un archivo llamado Layout y darle el siguiente formato con todos los componentes que queremos mantener:

- Layout.jsx

```js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className='App'>
    <Header />
    {children}
    <Footer />
  </div>
);

export { Layout };
```

De esta manera, en el archivo de rutas, podemos controlar la lógica así:

```js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import { Login } from '../containers/Login';
import { Registro } from '../containers/Registro';
import { Layout } from '../containers/Layout';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='*' element={<h1>No encontrado</h1>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
```

## Manejando Enlaces y configuraciones

Debemos identificar los elementos dinámicos que nos pueden llevar a otras páginas, como el logo de la App, la sección de registro, la sección de login, etc...

Debemos importar un elemento de `react-router-dom`:

```js
import { Link } from 'react-router-dom';
```

Luego al elemento o a la palabra que queremos que nos lleve a otra página debemos envolverlo con `<Link to="path"></Link>`

```js
<Link to='/'>
  <img className='header__img' src={logo} alt='Platzi Video' />
</Link>
```

Otro ejemplo:

```js
<Link to='/login'>Login</Link>
```

- Al atributo `to` del componente importado `Link` le dice a React que nos debemos mover a ese path. En el ejemplo anterior, al darle click a la imagen vamos a irnos al home, porque el atributo `to` tiene ese path.

> Debemos evitar hacer uso de la etiqueta HTML a, ya que puede recargar la página y nosotros no queremos eso.

## History V5 | useNavigate() V6

En versiones actuales de React Router Dom tenemos que usar `useNavigate()` para movernos a alguna ruta después de hacer click en algún tipo de interacción con el usuario, como añadir datos a una DB, o iniciar sesión, antaño en la V5 se usaba `useHistory` que era un prop presente dentro de `BrowserRouter` para hacer lo mismo:

- V5

```js
props.history.push('path');
```

- V6

```js
import { useNavigate } from 'react-router-dom';

const App = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginRequest(form);
    navigate('/'); // aquí hacemos uso de useNavigate
  };
};
```
