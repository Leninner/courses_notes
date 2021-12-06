**ÍNDICE**

- [Linux](#linux)
  - [Textos](#textos)
  - [Comandos básicos en la terminal:](#comandos-básicos-en-la-terminal)

# Linux

> Línea de Comandos

pwd => Para indicarnos en donde nos estamos
mkdir <Carpet>=> Hacer una nueva carpeta
sudo mkdir <carpet> => Sudo sirve para darle permisos de administrador a la carpeta
mv <archivo> <destino> => Sirve para organizar los archivos
touch <index.html> => Sirve para crear archivos
ls => Sirve para consultar todos los elementos dentro de una carpeta

NOTE: Para hacer el símbolo de la virgulilla (~) pueden usar:
ALT+126

code . => Sirve para correr los archivos dentro de una carpeta con Visual Studio Code
cat <archivo> => Sirve para mostrar en la consola el contenido de ese archivo
man cat => Sirve para mostrar el manual de uso de cat
sudo apt-get update => Sirve para actualizar nuestra distribución de Linux.
npx create-react-app <test> => Sirve para crear una app con React
npm start => Sirve para correr la aplicación de React en el navegador.
rm <archivo> => Sirve para borrar un archivo
rm -d <carpeta> => Sirve para borar un directorio vacío
rm -rf <carpeta> => Sirve para borrar todos los elementos y la carpeta contenedora
sudo apt-get update => Sirve para hacer una comprobación de actualizaciones del sistema operativo
sudo apt-get upgrade => Sirve para hacer las actualizaciones del sistema operativo

NOTE: Para compartir archivos entre Linux y Windows debemos buscar con PWD en la parte inicial la carpeta de nuetro proyecto y copiar allí nuestros archivos.

En la powershell: wsl --shutdown => Para cerrar y menorar la cantidad de uso de memoria.

## Textos

Tipos de archivos y sus diferencias:

Archivos de Texto (.txt): Texto plano normal y sin nada especial. Lo vemos igual sin importar dónde lo abramos, ya sea con el bloc de notas o con editores de texto avanzados.
Archivos RTF (.rtf): Podemos guardar texto con diferentes tamaños, estilos y colores. Pero si lo abrimos desde un editor de código, vamos a ver que es mucho más complejo que solo el texto plano. Esto es porque debe guardar todos los estilos del texto y, para esto, usa un código especial un poco difícil de entender y muy diferente a los textos con estilos especiales al que estamos acostumbrados.
Archivos de Word (.docx): Podemos guardar imágenes y texto con diferentes tamaños, estilos o colores. Al abrirlo desde un editor de código podemos ver que es código binario, muy difícil de entender y muy diferente al texto al que estamos acostumbrados. Esto es porque Word está optimizado para entender este código especial y representarlo gráficamente.

## Comandos básicos en la terminal:

pwd: Nos muestra la ruta de carpetas en la que te encuentras ahora mismo.
mkdir: Nos permite crear carpetas (por ejemplo, mkdir Carpeta-Importante).
touch: Nos permite crear archivos (por ejemplo, touch archivo.txt).
rm: Nos permite borrar un archivo o carpeta (por ejemplo, rm archivo.txt). Mucho cuidado con este comando, puedes borrar todo tu disco duro.
cat: Ver el contenido de un archivo (por ejemplo, cat nombre-archivo.txt).
ls: Nos permite cambiar ver los archivos de la carpeta donde estamos ahora mismo. Podemos usar uno o más argumentos para ver más información sobre estos archivos (los argumentos pueden ser -- + el nombre del argumento o - + una sola letra o shortcut por cada argumento).

- ls -a: Mostrar todos los archivos, incluso los ocultos.
- ls -l: Ver todos los archivos como una lista.
  cd: Nos permite navegar entre carpetas.
- cd /: Ir a la ruta principal:
- cd o cd ~: Ir a la ruta de tu usuario
- cd carpeta/subcarpeta: Navegar a una ruta dentro de la carpeta donde estamos ahora mismo.
- cd .. (cd + dos puntos): Regresar una carpeta hacia atrás.
- Si quieres referirte al directorio en el que te encuentras ahora mismo puedes usar cd . (cd + un punto).
  history: Ver los últimos comandos que ejecutamos y un número especial con el que podemos repetir su ejecución.
  ! + número: Ejecutar algún comando con el número que nos muestra el comando history (por ejemplo, !72).
  clear: Para limpiar la terminal. También podemos usar los atajos de teclado Ctrl + L o Command + L.
  Todos estos comandos tiene una función de autocompletado, o sea, puedes escribir la primera parte y presionar la tecla Tab para que la terminal nos muestre todas las posibles carpetas o comandos que podemos ejecutar. Si presionas la tecla Arriba puedes ver el último comando que ejecutamos.

Recuerda que podemos descubrir todos los argumentos de un comando con el argumento --help (por ejemplo, cat --help).

ctrl + l => Sirve para borrar la consola de windows.
