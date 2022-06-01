**Índice**

- [Conceptos Básicos de POO](#conceptos-básicos-de-poo)
- [Creación de clases y objetos en Java con Visual Studio Code](#creación-de-clases-y-objetos-en-java-con-visual-studio-code)
- [Métodos](#métodos)
  - [Parámetros y argumentos](#parámetros-y-argumentos)
  - [Retorno de valores](#retorno-de-valores)
  - [Método Constructor](#método-constructor)
  - [Sobrecarga de Métodos](#sobrecarga-de-métodos)
- [Modificadores de Acceso](#modificadores-de-acceso)
  - [Tipos de Modificadores de Acceso](#tipos-de-modificadores-de-acceso)
- [Encapsulamiento y métodos accesores (Getters y Setters)](#encapsulamiento-y-métodos-accesores-getters-y-setters)
  - [Encapsulamiento](#encapsulamiento)
  - [Métodos Accesores (Getters y Setters)](#métodos-accesores-getters-y-setters)
- [Constantes](#constantes)
- [Miembros estáticos de una clase](#miembros-estáticos-de-una-clase)
- [Diagrama de Clases (UML)](#diagrama-de-clases-uml)
- [Ejercicios de Lógica](#ejercicios-de-lógica)

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

Ejemplos con sobrecarga de métodos constructores:

```java
// Método Constructor
public Coche(String _nombre, String _color, int _km) {
  color = _color;
  marca = _nombre;
  km = _km;
}

// Método Constructor sobrecargado
public Coche(String nombre, String color, int km, String combustible) {
  this.color = color;
  this.marca = nombre;
  this.km = km;
  this.combustible = combustible;
}
```

# Modificadores de Acceso

Es una palabra especial que va antes de la definición de un atributo o de un método y nos va a servir para conocer cuál es la visibilidad de ese atributo o método respecto a otras clases o paquetes.

Cuando dejamos la declaración de un atributo o método por defecto, es decir, sin especificar el modificador de acceso, va a ser visible para **todas las clases dentro de ese paquete, pero no para clases de otros paquetes**:

Ejemplo:

- Clase1.java (PaqueteUno)

```java
package PaqueteUno;

public class Clase1 {
  // Atributo
  int atributo1;
}
```

- Clase2.java (PaqueteUno)

```java
package PaqueteUno;

public class Clase2 {
  public static void main(String[] args) {
    Clase1 objeto1 = new Clase1();

    objeto1.atributo1 = 15; // Funciona correctamente y sin errores
  }
}
```

- Clase3.java (PaqueteDos)

> Para crear un objeto de un paquete, dentro de otro, debemos importarlo

```java
package PaqueteDos;

import PaqueteUno.Clase1; // Importamos el paquete PaqueteUno junto con la clase Clase1

public class Clase3 {
  public static void main(String[] args) {
    Clase1 objeto1 = new Clase1();

    objeto1.atributo1 = 15; // Salta un error que nos dice que ese atributo no está visible.
  }
}
```

Para solucionar el problema de la Clase3 vamos a hacer el atributo de la clase Clase1 público con la palabra **public**:

- Clase1.java (PaqueteUno)

```java
package PaqueteUno;

public class Clase1 {
  public int atributo1;
}
```

Al hacer eso, ya podemos acceder a ese atributo desde cualquier clase y desde cualquier paquete.

## Tipos de Modificadores de Acceso

- **public**: Se usa para declarar un atributo o método público, el cuál va a ser accesible desde cualquier clase o paquete.
- **protected**: Se usa para declarar un atributo o método protegido, el cuál va a ser accesible desde cualquier clase o paquete, pero no desde clases de otros paquetes.
- **private**: Se usa para declarar un atributo o método privado, el cuál va a ser accesible sólo desde la clase en la que está definido.
- **default**: Se usa para declarar un atributo o método por defecto, el cuál va a ser accesible desde cualquier clase del mismo paquete, pero no desde otro paquete.

# Encapsulamiento y métodos accesores (Getters y Setters)

## Encapsulamiento

El encapsulamiento es una técnica que nos permite ocultar los detalles, atributos o métodos de la clase, para que solo puedan ser accedidos desde esa misma clase y no cualquiera pueda modificar esos atributos o métodos a su antojo, sino más bien, a través de **métodos accesores.**

Ejemplo de encapsulamiento (ocultar atributos o métodos de la clase):

```java
package PaqueteUno;

public class Clase1 {
  private int atributo1;
}
```

## Métodos Accesores (Getters y Setters)

Para poder acceder a estos atributos y métodos encapsulados, desde otras clases, vamos a utilizar los métodos accesores (Getters y Setters).

Ejemplo:

```java
  private int edad;

  // Método getter
  int getEdad() {
    return edad;
  }

  // Método setter
  public void setEdad(int edad) {
    this.edad = edad;
  }
```

- Un **método getter** es un método que nos va a permitir obtener el valor de un atributo, y que va a ser llamado desde otras clases.
- Un **método setter** es un método que nos va a permitir modificar el valor de un atributo, y que va a ser llamado desde otras clases.

# Constantes

Espacio de memoria en donde se almacena algún valor, y ese valor no va a variar en ningún momento.

Para crear una constante, debemos usar la palabra **final**:

```java
final int constante1 = 15;
public final int constante2 = 15;
private final int constante3 = 15;
```

Ejemplo en una clase:

```java
package PaqueteUno;

public class Clase1 {
  private final String nombre;
  private int edad;

  public Clase1(String nombre) {
    this.nombre = nombre;
  }

  public int getEdad() {
    return edad;
  }

  public void setEdad(int edad) {
    this.edad = edad;
  }

  public String getNombre() {
    return nombre;
  }
}
```

# Miembros estáticos de una clase

Son métodos o atributos que **no pertenecen a un objeto, sino a la clase misma.**

Al crearse un nuevo objeto de una clase, se crean copias de los métodos y atributos **no** estáticos de la clase. Esto se debe a que **los métodos y atributos no estáticos son atributos o métodos de objetos,** y no de la clase misma.

Un `atributo o método estático` va a ser accesible desde cualquier clase, pero no desde un objeto.

> Se hace uso de la palabra reservada **static**

Ejemplo:

- **Método estático**:

```java
package PaqueteUno;

  public class Clase1 {
    public static void metodoEstatico() {
      System.out.println("Método estático");
    }
  }
```

- **Atributo estático**:

```java
  public class Clase1 {
    public static int atributoEstatico;
  }
```

Ejemplo de uso:

```java
package PaqueteUno;

public class Static {
    private static String frase2 = "Segunda frase";

    public static void main(String[] args) {
        Static objeto = new Static();
        Static objeto2 = new Static();

        objeto.frase2 = "Cambio de frase";

        System.out.println(objeto.frase2); // Cambio de frase
        System.out.println(objeto2.frase2); // Cambio de frase
    }
}
```

Otra forma de utilizar:

```java
package PaqueteUno;

public class Static {
    static String frase2 = "Segunda frase";

    public static void main(String[] args) {
        System.out.println(Static.frase2); // Segunda frase
    }
}
```

# Diagrama de Clases (UML)

Nos va a ayudar en la organización de clases.

<img src="../utils/images/uml.png">

- Se usa el menos (-) para atributos y métodos privados.
- Se debe añadir el tipo de atributo

# Ejercicios de Lógica

1. Crear un programa que calcule el área y perímetro de un cuadrilátero.

 <img src="../utils/images/uml.png">

Cuadrilatero.java:

```java
public class Cuadrilatero {
  // Atributos
  private float lado1;
  private float lado2;

    // Constructor 1 (Cuadrilátero)
    public Cuadrilatero(float lado1, float lado2){
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    // Constructor 2 (Cuadrado)
    public Cuadrilatero(float lado1) {
        this.lado1 = this.lado2 = lado1;
    }

    // Getters
    public float getPerimetro(){
        return (lado1 + lado2) * 2;
    }

    public float getArea(){
        return lado1 * lado2;
    }

}
```

Main.java:

```java
import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        Cuadrilatero cuadrilatero;

        float lado1 = Float.parseFloat(JOptionPane.showInputDialog("Ingrese el lado 1: "));
        float lado2 = Float.parseFloat(JOptionPane.showInputDialog("Ingrese " +
                "el lado 2: "));

        if(lado1 == lado2){ // Cuadrilatero cuadrado
            cuadrilatero = new Cuadrilatero(lado1);
        } else { // Cuadrilatero rectángulo
            cuadrilatero = new Cuadrilatero(lado1, lado2);
        }

        JOptionPane.showMessageDialog(null, "El perímetro es: " + cuadrilatero.getPerimetro() +
                "\nEl área es: " + cuadrilatero.getArea());

    }
}
```

2. Construir un programa que permita dirigir el movimiento de un objeto dentro de un tablero y actualice su posición dentro del mismo. Los movimientos posibles son: arriba, abajo, izquierda y derecha.
   Tras cada movimiento el programa mostrará la nueva dirección elegida y las coordenadas de situación del objeto dentro del tablero.

Tablero.java:

```java
public class Tablero {
    // Atributos
    private final int widthTable;
    private final int heightTable;
    private int[] currentPosition = {0, 0};

    // Constructor
    public Tablero(int widthTable, int heightTable) {
        this.widthTable = widthTable;
        this.heightTable = heightTable;
    }

    // Getter
    public String getCurrentPosition(String direction) {
        return "(" + (currentPosition[0] + 1)+ ", " + (currentPosition[1] + 1) + ")" +
                "\nDirección: " + direction;
    }

    // Métodos de movimiento privados
    private void moveRight() {
        if(currentPosition[0] < widthTable - 1) {
            currentPosition[0]++;
        } else {
            System.out.println("No se puede mover hacia la derecha");
        }
    }

    private void moveLeft() {
        if(currentPosition[0] > 0) {
            currentPosition[0]--;
        } else {
            System.out.println("No se puede mover hacia la izquierda");
        }
    }

    private void moveUp() {
        if(currentPosition[1] > 0) {
            currentPosition[1]--;
        } else {
            System.out.println("No se puede mover hacia arriba");
        }
    }

    private void moveDown() {
        if(currentPosition[1] < heightTable - 1) {
            currentPosition[1]++;
        } else {
            System.out.println("No se puede mover hacia abajo");
        }
    }

    // Setter
    public void setCurrentPosition(String direction) {
        switch (direction) {
            case "ARRIBA":
                moveUp();
                break;
            case "ABAJO":
                moveDown();
                break;
            case "IZQUIERDA":
                moveLeft();
                break;
            case "DERECHA":
                moveRight();
                break;
        }
    }
}
```

Main.java:

```java
package POOChallenge;

import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        Tablero tablero = new Tablero(2, 2);

        do {
            String direction = JOptionPane.showInputDialog(null, "Dirección: " +
                    "\n1. Arriba" +"\n2. Abajo" + "\n3. Izquierda" + "\n4. Derecha");

            switch (direction) {
                case "1":
                    tablero.setCurrentPosition("ARRIBA");
                    JOptionPane.showMessageDialog(null, tablero.getCurrentPosition("ARRIBA"));
                    break;
                case "2":
                    tablero.setCurrentPosition("ABAJO");
                    JOptionPane.showMessageDialog(null, tablero.getCurrentPosition("ABAJO"));
                    break;
                case "3":
                    tablero.setCurrentPosition("IZQUIERDA");
                    JOptionPane.showMessageDialog(null, tablero.getCurrentPosition("IZQUIERDA"));
                    break;
                case "4":
                    tablero.setCurrentPosition("DERECHA");
                    JOptionPane.showMessageDialog(null, tablero.getCurrentPosition("DERECHA"));
                    break;
                default:
                    System.out.println("Dirección no válida");
                    break;
            }

        } while (JOptionPane.showConfirmDialog(null,
                "¿Desea continuar moviendo la ficha?", "", JOptionPane.YES_NO_OPTION) == JOptionPane.YES_OPTION);
    }
}
```

3. Construir un programa que dada una serie de vehículos caracterizados por su marca, modelo y precio, imprima las propiedades del vehículo más barato. Para ello, se deberán leer por teclado las características de cada vehículo y crear una clase que represente a cada uno de ellos.

Diagrama de clases:

<img src="../utils/images/thirdJava.png">

Vehicle.java:

```java
public class Vehicle {
    private String vehicleBrand;
    private String vehicleModel;
    private double vehiclePrice;

    public Vehicle(String vehicleBrand, String vehicleModel, double vehiclePrice) {
        this.vehicleBrand = vehicleBrand;
        this.vehicleModel = vehicleModel;
        this.vehiclePrice = vehiclePrice;
    }

    public Double getVehiclePrice() {
        return vehiclePrice;
    }

    public String showVehicleInfo() {
        return "Vehicle brand: " + vehicleBrand + "\nVehicle model: " + vehicleModel + "\nVehicle price: " + vehiclePrice;
    }
}
```

Main.java:

```java
import java.util.Scanner;

public class Main {
    public static int getCheapestVehicleIndex(Vehicle[] vehicles){
        int cheapestVehicleIndex = 0;

        for (int i = 1; i < vehicles.length; i++) {
            if (vehicles[i].getVehiclePrice() < vehicles[cheapestVehicleIndex].getVehiclePrice()) {
                cheapestVehicleIndex = i;
            }
        }

        return cheapestVehicleIndex;
    }

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String vehicleBrand;
        String vehicleModel;
        double vehiclePrice;

        System.out.println("Digita la cantidad de vehiculos que deseas agregar: ");
        System.out.print("-> ");
        int vehiclesQuantity = scan.nextInt();

        Vehicle[] vehicles = new Vehicle[vehiclesQuantity];

        System.out.println("Ingresa los datos de los vehiculos: ");

        for (int i = 0; i < vehicles.length; i++) {
            System.out.println("\nDigita la marca del vehiculo: ");
            System.out.print("-> ");
            vehicleBrand = scan.next();

            System.out.println("\nDigita el modelo del vehiculo: ");
            System.out.print("-> ");
            vehicleModel = scan.next();

            System.out.println("\nDigita el precio del vehiculo: ");
            System.out.print("-> ");
            vehiclePrice = scan.nextDouble();

            vehicles[i] = new Vehicle(vehicleBrand, vehicleModel, vehiclePrice);
        }

        System.out.println("\nEl coche mas barato es: ");
        System.out.println(vehicles[getCheapestVehicleIndex(vehicles)].showVehicleInfo());
    }
}
```
