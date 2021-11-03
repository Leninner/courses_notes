# Scope

Alcance que va a tener una variable en el código.
Scope se encargará de decidir a que bloques de código va a acceder una variable.

## Global Scope

No están dentro de funciones o bloques, por lo tanto se puede acceder a ellas de manera global.
Con var podemos re-asignar una variable pero es una mala práctica.
Con let y const no podemos, aparecerá un error.
Es una mala práctica crear una variable sin las palabras reservadas: var, let y const.
Si se asigna una variable dentro de una función sin las palabras reservadas será una variable global.
La doble asignación de una variable también es una mala práctica.

## Local Scope

El Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.

## Function Scope

Las variables escritas con la palabra clave var pueden ser redeclaradas, pero esto a futuro puede darnos problemas, así que es mejor no usarla.

Las variables escritas con la palabra clave let no pueden ser redeclaradas, si lo haces mostrara un “error: esta variable ya ha sido declarada”, pero su valor puede ser reasignado:

Las variables escritas con la palabra clave const no pueden ser redeclaradas o reasignadas, ya que const quiere decir que su valor será constante, es decir que no va a cambiar.

## Block Scope

Con este scope no se puede acceder desde fuera del bloque que puede ser un if, un for, etc.

NOTE: Con var si se puede acceder.

# Closures

Es la combinación de una función y el ámbito léxico en la cual a sido declarada esa función.

Un closure recuerda el ámbito en la cuál ha sido creado.

## Ámbito Léxico en Closures

Si te llegaste a preguntar ¿Por qué si le mandamos como parámetro inicial 1, al momento de llamar el closure por primera vez me imprime 1 si lo estoy incrementando?
Bueno, pues yo te lo explico.

Si vemos la estructura de la función

const buildCount = (i)=>{
let count = i;
const displayCount = () =>{
console.log(count++);
}
return displayCount;
};
Podemos notar que el console.log() está de de la siguiente manera

console.log(count++);
Y como ves, aparece count++, lo que quiere decir que estamos incrementando en 1 el valor de count, pero de la manera que está escrita, primero va a imprimir el count con el valor antes de incrementarlo
Esto se debe a que count++ es lo equivalente a decir count = count + 1 pero el momento en el que se hará ese incremento, está dado por la posición del ++, en éste caso, se hará después.
Si quisieramos que se muestre el valor de count después de hacerle el incremento, podríamos hacer ésto:

count++;
console.log(count);
O, de una manera más elegante, y aprendiendo como funciona el ++, así:

console.log(++count);

## ¿Cómo crear variables privadas con closures?

Al retornar valores, es cuando podemos crear variables privadas.

## Loops

Debemos estar muy atentos a la manera en la que creamos loops porque es probable que creemos closures sin querer.

# Hoisting

Levantamiento de las declaraciones.

# Debugger

Sirve para debuggear el código.
