**Índice:**

- [Material UI](#material-ui)
  - [Ejemplo Rápido de Uso de MUI](#ejemplo-rápido-de-uso-de-mui)

# Material UI

Es un React UI framework que nos va a ayudar a tener mejores estilos en nuestros componentes

Para instalar V5.2.3:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Para instalar la fuente Roboto:

- Por CDN

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

- Por npm

```bash
npm install @fontsource/roboto
```

- En el `entry point`:

```js
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

## Ejemplo Rápido de Uso de MUI

```js
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';

ReactDOM.render(<Button variant="contained">Hello World</Button>, document.getElementById('root'));
```

> Leer la documentación en: https://mui.com/
