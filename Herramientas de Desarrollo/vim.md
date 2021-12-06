**ÍNDICE**

- [Vim](#vim)
  - [Salir de Vim o de Neovim](#salir-de-vim-o-de-neovim)
  - [Para añadir texto](#para-añadir-texto)
  - [Modos](#modos)
  - [Atajos de teclado](#atajos-de-teclado)
  - [Moverse entre archivos](#moverse-entre-archivos)
  - [Eliminar palabras y deshacer la eliminación](#eliminar-palabras-y-deshacer-la-eliminación)
  - [Combinar operadores y eliminación](#combinar-operadores-y-eliminación)

# Vim

## Salir de Vim o de Neovim

Para salir de vim, debemos dar 2 veces a escape y luego escribir dos puntos y q (:q).
Si hacemos cambios que no queremos guardar debemos presionar: :q! (Para salir del editor de texto forzadamente y sin guardar)

## Para añadir texto

Para añadir texto en Vim debemos presionar la letra I cuando estemos en modo principal.

## Modos

2 veces escape para un modo => Modo normal
I para insertar texto => Modo Insert

## Atajos de teclado

h => Para moverse hacia atrás
j => Para moverse hacia abajo
k => Para moverse hacia arriba
l => Para moverse hacia adelante
w => Llevar el cursor al comienzo de la palabra siguiente
e => Llevar al final de la palabra siguiente
b => Llevar al cursor al comienzo de la palabra anterior
i => Para insertar texto al inicio de la letra
a => Para insertar texto al final de la letra
shift + A => Para insertar texto al final de línea
x => Eliminar texto (Funciona en modo normal, nos debemos colocar al inicio de lo que queremos eliminar)
:w => Sirve para guardar los cambios realizados en vim
:wq => Sirve para guardar los cambios realizados en vim y salir del archivo

## Moverse entre archivos

g + d => Sirve para identificar las funciones, variables, métodos, clases que se están usando. También sirve para acceder al contenido de una carpeta.
g + f => Sirve para navegar hacia el contenido de un archivo.
ctrl + o => Sirve para volver hacia el archivo o llamada anterior.
ctrl + y => Sirve para ir hacia adelante en la pila de ruta que se creó anteriormente

NOTE: => Mientras vamos navegando se va creando una pila de ruta.

## Eliminar palabras y deshacer la eliminación

En modo normal:

- Para eliminar palabras debemos situarnos al inicio de la linea e ir presionando d + w repetidas veces hasta borrar toda la línea.
- Para deshacer los cambios, simplemente utilizamos: U (undo)
- Para volver a hacer los cambios hechos anteriormente, podemos utilizar: ctrl + r

- Para eliminar una línea completa debemos situarnos al inicio de la linea y presionar: d + shift + 4 (d + $)

## Combinar operadores y eliminación

Se puede combinar la letra D + W, D + E, D + B, D + H, D + J, D + K, D + L.
También se puede multiplicar las acciones:

D + W + 9
W + 9
E + 9
D + E + 9
