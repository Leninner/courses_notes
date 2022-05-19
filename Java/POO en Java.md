**Índice**

- [Conceptos Básicos de POO](#conceptos-básicos-de-poo)
- [Creación de clases y objetos en Java con Visual Studio Code](#creación-de-clases-y-objetos-en-java-con-visual-studio-code)
- [Métodos](#métodos)
  - [Parámetros y argumentos](#parámetros-y-argumentos)
  - [Retorno de valores](#retorno-de-valores)
  - [Método Constructor](#método-constructor)
  - [Sobrecarga de Métodos](#sobrecarga-de-métodos)
- [Modificadores de Acceso](#modificadores-de-acceso)

# Conceptos Básicos de POO

Es una forma especial de programar, es más cercana a como se expresan los objetos en la vida real.

> Un objeto tiene atributos y métodos

**¿Cómo se piensa en Objetos?**

- Un objeto es aquel que tiene `atributos`, características o propiedades y también `métodos`, acciones, comportamientos o funciones que pueden ser ejecutadas sobre él.

**¿Qué son las clases en POO?**

Es un conjunto de **Objetos** con características similares

- Una clase va a empezar con **mayúscula** y siempre se va a llamar en **singular**.
- Un objeto **se crea** a partir de una clase. Se puede crear cualquier cantidad de objetos que se requieran.

# Creación de clases y objetos en Java con Visual Studio Code

Para crear una clase en Java vamos a tener una sintaxis similar a esta:

```java
public class NombreClase {
    // Atributos
    // Métodos
}
```

- **public** es un modificador de acceso. Le dice al compilador de Java que cualquier objeto o isntancia puede usar esa clase o ese método.

Para crear una nueva instancia o un nuevo objeto en Java, vamos a utilizar una sintaxis similar a esta:

```java
NombreClase nombreObjeto = new NombreClase(params);
NombreClase nombreObjetoTwo = new NombreClase(params);
```

¿Qué es un **package**?

Es un conjunto de clases que están relacionadas. En un proyecto pueden haber muchos `packages` y en un `package` pueden haber muchas clases.

- Ejemplo de clase en un `package`

```java
// Esta línea nos dice a qué `package` pertenece esta clase
package POO.src.ClasesYMetodos;

public class Coche {
  // Atributos
  String color;
  String marca;
  int km;

  // Métodos
  public void arrancar() {
    System.out.println("Arrancando el coche");
  }

  public void acelerar() {
    km += 10;
  }

  public void frenar() {
    km -= 10;
  }

  public void mostrarKm() {
    System.out.println("El coche tiene " + km + " km");
  }

  // Podemos crear nuevas instancias de mi clase en el método main. El método main puede ser creado en la misma clase o en otra clase.

  public void main (String[] args) {
    Coche miCoche = new Coche();

    miCoche.arrancar();
    miCoche.acelerar();
    miCoche.acelerar();
    miCoche.acelerar();
    miCoche.mostrarKm();
  }
}
```

# Métodos

Acción o comportamiento de los objetos

Para poder crearlos:

- Declaramos el tipo de **modificador de acceso** (public, private, protected)
- Definimos el tipo de retorno del **método** (void, int, String, etc...)

```java
public void arrancar() {
  System.out.println("Arrancando el coche");
}
```

Al compilar el proyecto, el IDE va a leer el método `main` y va a ejecutar las instrucciones que le hayamos pasado:

- Ejemplo instanciando la clase `Coche` dentro de otra clase llamada `Main`

```java
package POO.src.ClasesYMetodos;

public class Main {
  public static void main(String[] args) {
    // Instancia 1
    Coche c1 = new Coche();

    // Propiedades
    c1.color = "Rojo";
    c1.marca = "Ferrari";
    c1.km = 0;

    // Métodos
    c1.arrancar();
    c1.acelerar();

    // Instancia 2
    Coche c2 = new Coche();

    // Propiedades
    c2.color = "Azul";
    c2.marca = "Audi";
    c2.km = 0;

    // Métodos
    c2.arrancar();
    c2.acelerar();
  }
}
```

## Parámetros y argumentos

- **Parámetros**: Es una declaración de variable o declaración de variable que se va a usar en un método.
- **Argumentos**: Son los valores que se pasan a un método.

Para crear un parámetro en un método:

- Debemos definir el tipo de dato que va a recibir el parámetro (String, int, etc...)
- Además debemos darle un nombre al parámetro

```java
// Declaración del método arrancar.
// Parámetros: String color, String marca

public void arrancar(String color, String marca) {
  System.out.println("Arrancando el coche de color " + color + " y marca " + marca);
}

// Invocación de un objeto.
// Argumentos: "Rojo", "Ferrari"
Objeto.arrancar("Rojo", "Ferrari");
// Output: Arrancando el coche de color Rojo y marca Ferrari
```

## Retorno de valores

Tenemos un método que nos retorna un valor int:

```java
public int sumar(int numberOne, int numberTwo) {
  return numberOne + numberTwo;
}
```

- Para poder usarlo:

```java
int suma = Objeto.sumar(1, 2);
```

Tenemos un método que nos retorna un valor String:

```java
public String saludar(String nombre) {
  return "Hola " + nombre;
}
```

- Para poder usarlo:

```java
String saludo = Objeto.saludar("Juan");
```

## Método Constructor

Es un método especial de una clase, que se invoca siempre que se **crea un objeto de una clase**. Este método va a ser llamado automáticamente cuando se crea un objeto de la clase, asímismo va a configurar nuestra instancia con las propiedades y métodos que tenemos en la clase y pertenecen a una instancia.

Ejemplo de como usar el **método constructor:**

- `Coche()` es el método constructor

```java
Coche c1 = new Coche();
```

Cuando se crea un objeto ocurren 3 cosas:

1. Se asigna memoria para el objeto.
2. Se inicializan los atributos de ese objeto
3. Se invoca al constructor de la clase que puede ser uno entre varios

El **constructor** nos va a ayudar con la inicialización de los atributos de un objeto.

Características del constructor:

1. Tienen el mismo nombre de la clase
2. No devuelven nada
3. Debe declararse como `public`
4. No se le debe poner un valor de retorno, ni siquiera `void`

Para crear el constructor de una clase existen dos caminos:

- **Primer caso:** Los parámetros del constructor tienen nombre distintos a los atributos de la clase.

```java
  // Método Constructor

public Coche(String _nombre, String _color, int _km) {
  color = _color;
  marca = _nombre;
  km = _km;
}
```

- **Segundo caso:** Los parámetros del constructor tienen el mismo nombre que los atributos de la clase.

```java
  // Método Constructor
public Coche(String nombre, String color, int km) {
  this.color = color;
  this.marca = nombre;
  this.km = km;
}
```

> `this` es una palabra reservada que le indica a Java que ese atributo tiene el mismo nombre que el parámetro.

Para instanciar un nuevo objeto, vamos a tener:

```java
Coche c1 = new Coche("Ferrari", "Rojo", 0);
Coche c2 = new Coche("Audi", "Azul", 0);
Coche c3 = new Coche("Ford", "Blanco", 0);
```

## Sobrecarga de Métodos

Cuando escribimos más de un método con el mismo nombre, pero con distintos parámetros, podemos decir que es una sobrecarga de método.

Ejemplo:

```java
// Método arrancar
public void arrancar(String color, String marca) {
  System.out.println("Arrancando el coche de color " + color + " y marca " + marca);
}

// Otro método arrancar
public void arrancar(String color, String marca, int km) {
  System.out.println("Arrancando el coche de color " + color + " y marca " + marca + " con " + km + " km");
}

// Otro método arrancar
public void arrancar(String color, String marca, int km, String combustible) {
  System.out.println("Arrancando el coche de color " + color + " y marca " + marca + " con " + km + " km y " + combustible);
}
```

**Java** detecta que hay más de un método con el mismo nombre, pero sabe que son métodos sobrecargados por los tipos de datos de los parámetros y también la cantidad de parámetros que tenga cada método.

Otros ejemplos de la sobrecarga de métodos:

```java
// Método saludar
public String saludar(String nombre) {
  return "Hola " + nombre;
}

// Otro método saludar sobrecargado
public String saludar(String nombre, String apellido) {
  return "Hola " + nombre + " " + apellido;
}

// Otro método saludar con la misma cantidad de parámetros pero con distintos tipos de datos
public String saludar(String nombre, int edad) {
  return "Hola " + nombre + " tu edad es " + edad;
}
```

# Modificadores de Acceso
