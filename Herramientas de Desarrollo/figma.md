**ÍNDICE**

- [Figma](#figma)
  - [Diferencias entre los planes de figma](#diferencias-entre-los-planes-de-figma)
- [Importar archivos desde otras apps](#importar-archivos-desde-otras-apps)
  - [Restricciones](#restricciones)
- [Box Model](#box-model)
  - [Auto Layout](#auto-layout)
- [Componentes](#componentes)
- [Librerías de estilos y componentes](#librerías-de-estilos-y-componentes)

# Figma

Figma es una herramienta de edición de vectores online, enfocado en el diseño de interfaces, pero en si lo puedes usar hasta para hacer diapositivas, infografías y hasta ilustraciones.

El curso busca enseñar

1. Funcionalidades de Figma
2. Colaborar en tiempo real con un equipo de co-creación
3. Prototipar conceptos con interacciones reales
4. Optimizar el flujo de trabajo con nuevas herramientas
5. Darle vida a las ideas

## Diferencias entre los planes de figma

¿Qué plan es el mejor para mi equipo?

Si trabajas en un equipo, deberías escoger el plan que más sentido le haga a todos tus colaboradores. Las opciones son las siguientes:

1. Starter Team

Gratis.
Puede tener hasta 2 editores.
Usuarios ilimitados con permisos para: visualizar, comentar, exportar y ver guías.
Se pueden agregar hasta 3 proyectos simultáneos.
El versionamiento se limitará a los últimos 30 días. 2. Professional

$12 dólares por editor con pago anual, $15 dólares si se paga mensual.
Usuarios ilimitados con permisos para: visualizar, comentar, exportar y ver guías.
Proyectos ilimitados.
Versionamiento ilimitado.
Team library con estilos y componentes ilimitados.
Integración automatizada con Slack.
Permisos avanzados por proyecto. 3. Educación

Si eres un estudiante o profesor, puedes calificar para un plan de Figma Education. Hay varios criterios específicos que se deben cumplir para ser parte del programa, y puedes aplicar aquí.

Los equipos en el plan de Education permiten acceso a todas las funcionalidades del plan Professional de manera gratuita, a la vez que también se accede a comunidades y recursos para las aulas de clase.

Los planes de Education son válidos por hasta 2 años consecutivos. Si todavía eres estudiante o profesor luego de esos dos años, puedes volver a aplicar para reactivar tu status de Education.

Aprende más sobre Figma for Education aquí.

¿Cuál es la diferencia entre un editor y alguien que solo puede visualizar?

Editor: cualquiera que tiene acceso de “edición” a un archivo, es decir que puede manipular los elementos dentro del espacio de trabajo: cambiar el tamaño, propiedades, contenido, etc.

Visualización: alguien que tiene permiso de visualización puede ver las propiedades de los elementos a través de la vista de “Code” y exportar los mismos por medio del panel de propiedades a la derecha de cada selección. También pueden dejar comentarios sobre el diseño.

# Importar archivos desde otras apps

Figma soporta archivos .fig y .sketch. Puedes importar archivos enteros desde Sketch (.sketch) a Figma y esto creará un nuevo archivo de Figma desde tu archivo importado, pero en la nube de tu cuenta.

Cualquier cambio adicional que hagas al archivo de Sketch original no se verá reflejado en Figma si vuelves a importar el archivo y viceversa.

Funcionalidades de Sketch que soporta Figma
Figma soporta y es capaz de convertir las siguientes funcionalidades traídas desde Sketch:

Pages
Symbols
Fonts
Pages

Al igual que Sketch, en Figma se pueden almacenar diferentes páginas de capas dentro de un solo archivo. Cualquier cantidad de páginas que existan dentro de un archivo de Sketch serán importadas como páginas separadas dentro de tu nuevo archivo de Figma.

Puedes cambiar entre estas diferentes páginas utilizando el panel izquierdo dentro del editor. Puedes aprender más sobre la visualización de páginas en este artículo.

Symbols

Cuando importes archivos de Sketch hacia Figma, cualquier símbolo incluido en el archivo será convertido en un componente de Figma. Los símbolos en la página independiente de símbolos en Sketch será convertida a una página igual en Figma que contendrá todos los componentes maestros (Master Components).

Styles

Los estilos no serán agregados en el proceso de importación. Cualquier estilo que quieras aplicar en tu diseño deberá ser creado dentro de Figma. Mira este artículo sobre la creación de estilos para más información sobre la creación y edición de estilos.

Trayendo elementos individuales desde otras apps
Figma soporta archivos en .png, .jpg y .svg para edición. Por lo cual, si copias archivos desde otros programas que tengan habilitada la edición como vectores, puedes hacer copy/paste de elementos individuales desde el programa original y pegarlos en Figma.

Aplica para Adobe XD, Adobe Illustrator, Framer y más.

NOTE:
T => Sirve para crear Texto
F => Sirve para crear un frame
Ctrl + b => Negrita
Ctrl + i => Itálica
Shortcuts
ctrl + b: negrita / bold

ctrl + u: linea bajo el texto

ctrl + i: Italica, inclinar texto

ctrl + r: crear rectangulo o cuadro

shift + r: regla

T: Escribir texto

R: crear rectangulo o cuadro

I: pincel y lupa de captura de color

O: Crear Ovalo o circulo

L: Crear linea

F: Crear frame (artboard)

R | O | L y luego shift: mantiene las proporciones del Cuadrado | Circulo | Linea

crtl + shift + e: mostrar archivos a exportar

Para ocultar columnas:
MacOS: [Control] + [G]
Windows: [Ctrl] + [Shift] + [4]

## Restricciones

Los objetos dentro de un elemento tienen restricciones de acuerdo a su padre.

# Box Model

Margin, Border, Paddin y content

## Auto Layout

Hay que tener en cuenta la diferencia entre pading y margin.
Padding: es la distancia que existe del borde del elemento hacia adentro.
Margin: es la distancia que existe del borde del elemento hacia afuera.
Visualmente pueden tener el mismo resultado si no se tienen bordes, pero es importante conocer estas diferencias.

# Componentes

Elementos reutilizables para lograr mayor consistencia. Optimizar valocidades a loa cambios

Ctrl + shift + k

Otro tip: Nombren los componentes con nombres en ingles con (\_) en vez de espacios y que no se repitan. El frontend podrá usar estos nombres para poner las clases en el CSS. (Se lo agradecerán)

Ctrl + shift + b => Sirve para separar la instancia de su padre.

Contexto:
Para hacer este ejercicio opte por convertir a mi grupo de imagenes de contactos en un Frame, darle un tamaño y permitirle hacer scrolling horizontal.
Instrucciones:

Tomé todos los objetos con imagen de contacto y los hice un grupo.
Click derecho en el grupo y presioné el la opcion de frame selection con esto meto el grupo en un frame.
Seleccionando el contenedor frame recien creado lo delimito hasta donde llega mi frame mayor, el tamaño de la vista.
Le doy permiso a mi nuevo frame de hacer scroll horizontal, yendo al menu derecho, en la pestaña de prototype, en Overflow Behavior pongo la opción de Horizontal Scrolling.
Listo para mandar

# Librerías de estilos y componentes

Colores, grillas.
Componentes => Botones, formularios, etc.
