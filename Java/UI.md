# Ventana

Para crear una ventana, se debe crear una clase que extienda de la clase `JFrame`.

- Ventana.java

```java
package UI;

import javax.swing.JFrame;

public class Ventana extends JFrame {

}
```

En el constructor de la clase, podemos hacer las configuraciones de la ventana. Por ejemplo,

```java
public Ventana() {
    this.setTitle("Ventana");
    this.setSize(400, 300);
    setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    setVisible(true);
}
```

# Paneles
