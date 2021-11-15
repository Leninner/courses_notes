# Redux

> Flux: https://carlosazaustre.es/como-funciona-flux

Redux es una librería escrita en JavaScript, basada en la arquitectura Flux, creada con Facebook y creada por Dan Abramov, se basa en 3 principios fundamentales:

1. Solamente hay una fuente de la verdad.
2. El estado es de solo lectura.
3. Solamente podemos utilizar funciones puras.

Nuestra UI va a activar una action, esta action va a ejecutar un reducer para modificar la información del store, y al actualizarse el store la UI se va a modificar.

![Alt text](../utils/images/redux-img-dos.png)
![Alt text](../utils/images/redux-img-three.png)
![Alt text](../utils/images/redux-img-two.png)
