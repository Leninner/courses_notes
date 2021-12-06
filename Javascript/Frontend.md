**ÍNDICE**

- [HTML Y CSS](#html-y-css)
  - [DOM, CSSOM, Render Tree y el proceso de renderizado de la Web](#dom-cssom-render-tree-y-el-proceso-de-renderizado-de-la-web)
  - [Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos](#anatomía-de-un-elemento-html-atributos-anidamiento-y-elementos-vacíos)
    - [La importancia del código semántico](#la-importancia-del-código-semántico)
    - [Tipos de errores en HTML, debugging y servicio de validación de etiquetas](#tipos-de-errores-en-html-debugging-y-servicio-de-validación-de-etiquetas)
  - [Anatomía de una declaración CSS: Selectores, Propiedades y Valores](#anatomía-de-una-declaración-css-selectores-propiedades-y-valores)
    - [Tipos de selectores, pseudo-clases y pseudo-elementos](#tipos-de-selectores-pseudo-clases-y-pseudo-elementos)
      - [**\*(asterisco)**](#asterisco)
      - [**Tipo**](#tipo)
      - [**Clase**](#clase)
      - [**ID**](#id)
      - [Pseudo-clases y Pseudo-elementos](#pseudo-clases-y-pseudo-elementos)
    - [Modelos de Caja](#modelos-de-caja)
    - [Valores relativos y absolutos](#valores-relativos-y-absolutos)
    - [Display CSS](#display-css)
    - [¿Qué son y para qué nos sirven las arquitecturas CSS?](#qué-son-y-para-qué-nos-sirven-las-arquitecturas-css)
- [OOCSS, BEM, SMACSS, ITCSS y Atomic Design](#oocss-bem-smacss-itcss-y-atomic-design)
  - [OOCSS](#oocss)
  - [BEM](#bem)
  - [SMACSS](#smacss)
  - [ITCSS](#itcss)
- [¿Qué es un componente? Analicemos nuestros diseños](#qué-es-un-componente-analicemos-nuestros-diseños)
- [Tips para CSS](#tips-para-css)
- [Media Queries](#media-queries)
  - [Preprocesador de Css](#preprocesador-de-css)
- [Hablemos de variables, herencia, anidamiento, operadores y más](#hablemos-de-variables-herencia-anidamiento-operadores-y-más)
- [La accesibilidad y nuestra responsabilidad como desarrolladores](#la-accesibilidad-y-nuestra-responsabilidad-como-desarrolladores)
- [Notas Interesantes](#notas-interesantes)
  - [Para HTML](#para-html)
  - [Para CSS](#para-css)

# HTML Y CSS

> Internet: Interconnected y Network => Red de computadoras conectadas en todo el mundo.

Tim Berners-Lee Inventó World Wide Web.
Fundo el consorcio W3C para estandarizar el desarrollo de las tecnologías base Internet

- HTTP (Hyper Text Transfer Protocol): Permite la comunicación de datos entre dispositivos
- URL (Uniform Resource Locator): Dirección de un sitio web
- HTML (Hyper Text Markup Language): Lenguaje para describir la estructura de una sitio web

En 1994 apareció CSS Cascade Style Sheets.

> https://htmlreference.io/ > https://cssreference.io/

## DOM, CSSOM, Render Tree y el proceso de renderizado de la Web

- **DOM (Document Object Model)**: Es una transformación del código HTML escrito por nosotros a objetos entendibles para el navegador.
- **CSSOM**: así como el DOM para el HTML, EL CSSOM es una representación de objetos de nuestros estilos en CSS.
- **Render Tree**: es la unión entre el DOM y el CSSOM para renderizar todo el código de nuestra página web.

Pasos que sigue el navegador para construir las páginas web:

1. Procesa el HTML para construir el DOM.
2. Procesa el CSS para construir el CSSOM.
3. El DOM se une con el CSSOM para crear el Render Tree.
4. Se aplican los estilos CSS en el Render Tree.
5. Se **pintan** los nodos en la pantalla para que los usuarios vean el contenido de la página web.

## Anatomía de un Elemento HTML: Atributos, Anidamiento y Elementos vacíos

Nuestros elementos HTML se componen de:

1. **Etiqueta de apertura:** el nombre de nuestra etiqueta encerrado entre símbolos de mayor o menor

```html
<h1></h1>
<!-- <h1> es nuestra etiqueta de apertura -->
```

2. **Contenido:** dentro de nuestras etiquetas podemos añadir texto u otros elementos HTML, lo que conocemos como anidamiento:

```html
<div>
  <h1>Esto es un texto</h1>
</div>
<!-- Dentro de la etiqueta div podemos añadir otra etiqueta h1 y dentro de esta podemos añadir texto u otras etiquetas de ser el caso -->
```

3. **Etiqueta de cierre**: son casi iguales que las etiquetas de apertura, pero también necesitan un slash (/) antes del nombre de la etiqueta. Por ejemplo: </h1>:

```html
<h1></h1>
<!-- </h1> es nuestra etiqueta de cierre -->
```

- Las etiquetas de apertura también pueden tener atributos. Los atributos nos permiten definir características especiales para nuestros elementos: <etiqueta atributo=""valor del atributo="">:

```html
<etiqueta atributo="" valor del atributo="">
  <img src="path/to/image" alt="alternative_text" />
</etiqueta>
```

También existen elementos vacíos. Estos elementos no tienen contenido ni etiqueta de cierre, solo etiqueta de apertura y atributos:

```html
<input type="text" placeholder="Name" />
```

o

```html
<img src="puppy.png" alt="puppy" />
```

### La importancia del código semántico

Es importante que como desarrolladores tengamos claro el significado de escribir código.
Debes ser consciente de que la manera en la que codeas tenga sentido.

La semántica HTML no es más que darle sentido y estructura a lo que estas escribiendo. Muy importante para el navegador.
Es muy importante darle un sentido coherente:

- No es lo mismo:

```html
<header>
  <section>
    <img src="path/to/image" alt="alternative_text" />
    <h1>Title Site</h1>
  </section>
  <section>
    <nav>
      <ul>
        <li>Some link</li>
        <li>Some link</li>
      </ul>
    </nav>
  </section>
</header>
```

- A esto:

```html
<div>
  <div>
    <img src="path/to/image" alt="alternative_text" />
    <h1>Title Site</h1>
  </div>
  <div>
    <div>
      <ul>
        <li>Some link</li>
        <li>Some link</li>
      </ul>
    </div>
  </div>
</div>
```

### Tipos de errores en HTML, debugging y servicio de validación de etiquetas

1. **Errores sintácticos:** Son errores de escritura en el código y evitan que el programa funcione. Pueden ser errores de tipado.

2. **Errores lógicos:** En estos la sintaxis es correcta, pero el código no hace lo que debería. El programa funciona, pero de forma incorrecta.

## Anatomía de una declaración CSS: Selectores, Propiedades y Valores

Nuestros estilos con CSS se componen de:

- **Selector**: son la referencia a los elementos HTML que queremos estilizar. Los nombres de estas etiquetas van seguidas de una llave de apertura y otra de cierre ({}):

```css
h1 {
}
```

- **Propiedades**: son el tipo de estilo que queremos darle a nuestros elementos. Van seguidas de dos puntos (:). Las propiedades deben estar dentro de las llaves del selector que definimos anteriormente. Podemos escribir diferentes propiedades en un mismo selector:

```css
h1 {
  color: white;
  background-color: black;
  font-weight: bold;
}
```

- **Valores**: son el estilo que queremos que tomen nuestros elementos HTML con respecto a una propiedad. Van seguidas de un punto y coma (;). Son los valores después de la propiedad:

```css
h1 {
  color: white;
  background-color: black;
  font-weight: bold;
}
```

### Tipos de selectores, pseudo-clases y pseudo-elementos

#### **\*(asterisco)**

Es el selector universal. Las propiedades se aplicaran a todos los elementos de nuestro HTML:

```css
* {
  background-color: red;
  box-sizing: border-box;
}
```

#### **Tipo**

Son selectores que se aplican a cierto elemento HTML en específico. Las propiedades se aplicaran a la etiqueta que queremos, por ejemplo p, body, html, div, etc:

```css
div {
  color: white;
}
h2 {
  font-size: 25px;
}
```

#### **Clase**

Si nuestras etiqueta de HTML tienen un atributo de class podemos usar ese valor o identificador para que los cambios en el CSS afecten únicamente a ese elemento:

> Las clases se identifican, tanto en Javascript como en CSS con un (.) punto.

- Elemento HTML

```html
<div class="contenedor"></div>
```

- Estilos en CSS

```css
/* div con la clase contenedor */
.contenedor {
  width: 100%;
  height: 100vh;
  background-color: red;
}
```

#### **ID**

Es similar al anterior, si la etiqueta HTML tiene un ID podemos afectar solo ese elemento:

> A los IDs tanto en Javascript como en CSS se los identifica con un # (hashtag).

- Elemento HTML

```html
<div id="contenedor"></div>
```

- Estilos en CSS

```css
/* div con el ID contenedor */
#contenedor {
  width: 100%;
  height: 100vh;
  background-color: red;
}
```

#### Pseudo-clases y Pseudo-elementos

Nos permiten ser aún más específicos con qué elemento o partes de nuestros elementos deben recibir los estilos.
Para usarlas debemos definir el selector base (por ejemplo, p) seguido de dos puntos y la pseudo-clase que queremos estilizar (por ejemplo: p:first-child):

```css
/* estilos al primer hijo de la etiqueta HTML p que hace referencia a un párrafo */
p:first-child {
  color: white;
}
p:last-child {
  color: purple;
}
```

En el caso de los pseudo-elementos debemos usar el dos puntos 2 veces (p::first-letter):

```css
/* estilos a la primera letra de la etiqueta HTML p que hace referencia a un párrafo */
p::first-letter {
  color: white;
}
```

Para darle estilos a varios hijos, podemos hacer uso de la fórmula:

```css
p:nth-child(2n) {
  color: red;
}
```

### Modelos de Caja

Todos los elementos de HTML tienen un modelo de caja y esta compuesto por cuatro elementos:

1. Contenido
2. Padding
3. Border
4. Margin

### Valores relativos y absolutos

Los valores absolutos son:

- centímetros
- milímetros
- pixeles
- pulgadas

**Se llaman de esta forma porque no tienen en cuenta a nadie más, no depende de la medida de otra unidad**.

Los valores relativos:

- vmx
- em
- poverntajes(%)

**Llevan este nombre porque depende de otra unidad de medida o elemento.**

Si queremos darle estilos a la imagen que está dentro de la etiqueta Header, podemos hacer esto:

```css
header img {
  width: 50%;
}
```

### Display CSS

1. **Width**: Define el ancho de un elemento:

   ```css
   img {
     width: 20px;
   }
   ```

2. **Height**: Define el alto de un elemento:

   ```css
   div {
     height: 20px;
   }
   ```

3. **Background**: Puede definir el color de fondo o la url de fondo de un elemento:

   ```css
   * {
     background: url('puppy.png';);
   }
   ```

4. **Background-color**: Define el color de fondo de un elemento:

   ```css
   section {
    background-color: red;.
   }
   ```

5. **Color**: Define el color de nuestros textos.

   - Estos colores los podemos escribir de 3 formas en CSS:

   1. Con los nombres de los colores:

      ```css
      div {
        color: green;
        background-color: red;
      }
      ```

   2. Sistema hexadecimal: Donde blanco se define como #FFFFFF y negro como #000000:

      ```css
      div {
        color: #ffffff;
        background-color: #000000;
      }
      ```

   3. RGB: Donde la R significa Red, G significa Green y B significa Blue:

      ```css
      div {
        color: rgb(red, green, blue);
      }
      ```

      - Cada uno de ellos es un valor de 0 a 255 que describe la intensidad de ese color. Por ejemplo, para denotar el color verde:

        ```css
        div {
          color: rgb(0, 255, 0);
        }
        ```

      - También a estos valores se les puede agregar una opacidad (transparencia) que va de 0 a 1, por ejemplo: rgba(0, 255, 0, 0.5) lo que quiere decir que el color verde lo queremos con una transparencia del 50%:

        ```css
        div {
          color: rgba(0, 255, 0, 0.5);
        }
        ```

6. **Border**: Define el tamaño, estilo y color del borde de un elemento:

   ```css
   div {
     border: 2px solid yellow;
   }
   ```

7. **Border-radius**: Define qué tan redondeado quiero mi elemento:

   ```css
   div {
     border-radius: 20px;
   }
   ```

8. **Margin**: Define la margen de un elemento:

   ```css
   div {
     margin: 2px;
   }
   ```

   - Si quiero que mi elemento tenga margen superior de 2px, margen inferior de 4px, margen derecha de 3px y margen izquierda de 5px, lo escribiría de la siguiente forma:

   ```css
   div {
     margin: 2px 3px 4px 5px;
   }
   ```

> El primer valor es la margen superior y siempre va en sentido de las manecillas del reloj.

> Si solo quiero que mi elemento tenga una margen a la derecha de 10px, escribiría _margin-right: 10px;_ Y para los demás valores sería _margin-top: 10px;_ para la margen superior, _margin-bottom: 10px;_ para la margen inferior y _margin-left: 10px;_ para la margen izquierda.

9.  **Padding**: Define la distancia del borde de un elemento hasta su contenido, _margen interno_:

    ```css
    div {
      padding: 2px 3px 4px 5px;
    }
    ```

    - Los valores del padding a cada lado funciona similar a los margenes, empieza en TOP y se mueve en sentido de las manecillas del reloj.

10. **Opacity**: Determina la transparencia del elemento. Tiene valores entre 0 y 1, que pueden verse como un porcentaje:

    ```css
    div {
      /*Opacidad del 50%*/
      opacity: 0.5;
    }
    ```

11. **Outline**: Un término algo desconocido es el esquema de los elementos HTML. Un esquema es una línea (por defecto, de color azúl) que se dibuja alrededor de los elementos que hace que se “destaquen”

Lo anterior sucede mucho en elementos como los <input>s y los <button>s. Si no queremos ver esa línea, lo que hacemos es outline: none;. Aunque también podemos decirle que tenga determinado estilo, color, tamaño, entre otras. Por ejemplo:

```css
div {
  outline-style: solid;
  outline-color: red;
  outline-width: 5px;
}
```

12. **Box-sizing**: Cuando trabajamos con paddings, por ejemplo, veremos que el tamaño de nuestro elemento crece. Es decir, si tengo:

```css
div {
  background: pink;
  width: 20px;
  height: 20px;
}
```

Y luego le agrego un padding de 20px, veré en el navegador que mi div ya no tiene un ancho y un alto de 20px, sino de 40px cada uno. Lo que quiere decir que el padding hizo que creciera mi elemento. Sin embargo, si yo no quiero que el padding afecte los 20px originales, le agrego la propiedad box-sizing para que el tamaño total del elemento incluya el padding también y no se vea afectado por él.

### ¿Qué son y para qué nos sirven las arquitecturas CSS?

UTILIZAR: DIVIDE Y VENCERÁS

Los objetivos son:

Predecible > Escribir reglas claras.
Reutilizable > No escribir codigo redundante.
Mantenible > Que sea facil de leer y adaptarnos a los estandares.
Escalable > Que pueda crecer facilmente pero sin afectar el rendimiento.
Buenas practicas

Establecer reglas para que el equipo se entienda.
Explicar la estructura base o dar los fundamentos del proyecto a un nuevo integrante.
Evitar hojas de estilo muy extensas
Tener una buena documentación explicando ciertos aspectos del codigo.

# OOCSS, BEM, SMACSS, ITCSS y Atomic Design

## OOCSS

css orientado a objetos. Separa el diseño del contenido, así podemos reutilizar nuestro código

// ejemplo, en vez de para cada elemento una clase.
.globalWidth {
width: 100%;
}

## BEM

Block Element Modifier. Separa los elementos y los modificadores

.header {} // bloque
.header\_\_button--red {} // block, element, modifier

## SMACSS

Scalable and Modular Arquitecture for CSS. Arquitectura de css escalable y modular. PAra eso se realizan cinco pasos

Dividir nuestro css en componentes base
Definir Layout. Elementos que se utilizan solo una vez. ej. Footer, Header
Definir Modulos. Componentes que se usan mas de una vez
Definir Estados. Estos estados definen los cambios que existen en nuestros elementos/componentes. ej. Cambio de color cuando hacen hover
Definir Temas. Separar los temas y sus cambios. Si tuvieras temas

## ITCSS

Inverted Triangle CSS. Triangulo Invertido de CSS. Lo que nos indica esta metodologia es poder dividir todos nuestros archivos de css en ciertas partes para que no se mezclen.
Triangulo invertido, desde arriba hacia abajo:

Ajustes
Herramientas
Generico
Elementos
Objetos
Componentes
Utilidades
Especificidad: elementos o clases con mayor peso que otros.
Magnitud
Claridad

Atomic Design
Basados en la quimica.
Atomos < Moleculas < Organismos < Templates < Paginas

La eleccion de la metodologia depende del proyecto y del equipo

Anotacion: No es tan buena practica usar !important

# ¿Qué es un componente? Analicemos nuestros diseños

Un componente, tanto en diseño como desarrollo web, es un elemento muy pequeño que tiene la capacidad de ser reutilizado en diferentes partes de una aplicación. Por ejemplo: botones, iconos, cards, entre otras. Puedes apreciarlos en las plataformas que visitas todos los días: Twitter, Facebook, Platzi, YouTube y muchas más.

# Tips para CSS

El selector ~ de CSS nos permite dar estilos a todos que cumplan los requisitos y sean “hermanos directos”, es decir, que tengan el mismo elemento padre.

También existe el selector +. Solo aplica los estilos al primer hermano directo de nuestros elementos.

Nuevamente, utiliza justify-content para ayudar a esas ranas a llegar a sus hojas de lirio. Recuerda que esta propiedad CSS alinea elementos horizontalmente y acepta los siguientes valores:

flex-start: Alinea elementos al lado izquierdo del contenedor.
flex-end: Alinea elementos al lado derecho del contenedor.
center: Alinea elementos en el centro del contenedor.
space-between: Muestra elementos con la misma distancia entre ellos.
space-around: Muestra elementos con la misma separación alrededor de ellos.

# Media Queries

Los media queries nos ayudan a ajustar nuestros diseño a dispositivos más pequeños como tablets y celulares.

Es recomendable seguir la metodología de Mobile First: comenzar a diseñar para el dispositivo más pequeño e ir creando las media queries para las pantallas más grandes.

## Preprocesador de Css

CSS es un lenguaje de hojas de estilo que nos permite crear sitios web agradables para el usuario, sin embargo, nuestros archivos de CSS suelen ser bastante extensos, lo que produce una demanda significativa de nuestro tiempo y puede generar un trabajo menos productivo.

Una de las cosas que puedes hacer para evitar tantas líneas de código es utilizar los preprocesadores de CSS, los cuales extienden las funcionalidades de CSS común, permitiéndonos tener variables, funciones, mixins, reutilización de código, flexibilidad en el desarrollo, etc.

Pero, ¿cómo es que funcionan los preprocesadores?

Un preprocesador se escribe con una sintaxis especial que nosotros le indicamos y debe compilarse a CSS para ser comprendido por el navegador. En sí lo que estamos haciendo es CSS pero con esteroides.

Que es un preprocesador.png
Esta sintaxis que te menciono depende de cada preprocesador. Los más conocidos y usados son: LESS, SASS y Stylus. ¿Cuál usar? En mi opinión personal, esta decisión depende más de tus gustos personales y de qué tan cómodo o cómoda te sientas con una sintaxis o con otra, sin embargo, es también importante que dialogues con tu equipo y evalúen con qué preprocesador quieren trabajar dependiendo de las necesidades del proyecto.

# Hablemos de variables, herencia, anidamiento, operadores y más

Variables => Elementos o clases predeterminadas para utilizar en varias lugares del archivo.

Anidamiento => Sirve para darle estilos a los hijos de una clase.

Herencia => Sirve para heredar estilos de otra clase arbitraria. Utilizamos @extend para heredar.

Para los que se hayan confundido o quieran saber la diferencia entre extend y el include es la siguiente:
Los Mixins de Sass, hacen algo parecido a lo que hemos visto con Extend. Encapsulan varias líneas de código que posteriormente podemos llamar dentro de un selector.
Sin embargo, los Mixins incorporan una novedad. Permiten pasarles un argumento que podrá tener un valor distinto cada vez que lo usemos.

# La accesibilidad y nuestra responsabilidad como desarrolladores

Debemos pensar en esas personas con una discapacidad visual que no tienen la posibilidad de ver lo mismo que la mayoría de nosotros. Estas personas no siempre usan el mouse, sino lectores de pantalla.

Un Lector de Pantalla se encarga de leer toda la aplicación elemento por elemento. Que los lectores de pantalla funcionen es responsabilidad de las y los desarrolladores: debemos tener muy buena semántica, usar las etiquetas y atributos adecuados entre otras.

https://developer.mozilla.org/es/docs/Web/HTML/Global_attributes/tabindex

# Notas Interesantes

## Para HTML

<!-- TODO: Cambiar texto -->

1. El atributo **Meta** con el atributo viewport en el head de la estructura básica HTML sirve para escalar el sitio a responsive. Si defines también el atributo content después del atributo viewport en la misma etiqueta meta con el valor:

```html
<meta width="device-width," initial-scale="1" />
```

le estamos diciendo a nuestro sitio web con el atributo **width** que el ancho máximo de nuestra
página web será el ancho del dispositivo desde donde se esté aperturando el sitio web (móvil, tablet, pc).

## Para CSS

```

```
