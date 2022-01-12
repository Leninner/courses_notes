**ÍNDICE**

- [Patrón de diseño](#patrón-de-diseño)
  - [Objetivos de los patrones](#objetivos-de-los-patrones)
  - [Historia](#historia)
  - [Categorías de Patrones de Diseño](#categorías-de-patrones-de-diseño)
    - [Creacionales](#creacionales)
    - [Estructurales](#estructurales)
    - [De Comportamiento](#de-comportamiento)
  - [Singleton (Creacional)](#singleton-creacional)
  - [Observer](#observer)
  - [Casos de Uso del patrón Observer: Redux](#casos-de-uso-del-patrón-observer-redux)
  - [Patrón Decorator](#patrón-decorator)

# Patrón de diseño

Los patrones de diseño son unas técnicas para resolver problemas comunes en el desarrollo de software y otros ámbitos referentes al diseño de interacción o interfaces.

Un patrón de diseño resulta ser una solución a un problema de diseño.

Para que una solución sea considerada un patrón debe poseer ciertas características. Una de ellas es que debe haber comprobado su efectividad resolviendo problemas similares en ocasiones anteriores.

Otra es que debe ser reutilizable, lo que significa que es aplicable a diferentes problemas de diseño en distintas circunstancias.

## Objetivos de los patrones

Los patrones de diseño pretenden:

- Proporcionar catálogos de elementos reusables en el diseño de sistemas software.
- Evitar la reiteración en la búsqueda de soluciones a problemas ya conocidos y solucionados anteriormente.
- Formalizar un vocabulario común entre diseñadores.
- Estandarizar el modo en que se realiza el diseño.
- Facilitar el aprendizaje de las nuevas generaciones de diseñadores condensando conocimiento ya existente.

Asimismo, no pretenden:

- Imponer ciertas alternativas de diseño frente a otras.
- Eliminar la creatividad inherente al proceso de diseño.
- No es obligatorio utilizar los patrones, solo es aconsejable en el caso de tener el mismo problema o similar que soluciona el patrón, siempre teniendo en cuenta que en un caso particular puede no ser aplicable.

"Abusar o forzar el uso de los patrones puede ser un error”.

Volver a aprender el diseño CSS

Si te encuentras luchando con el diseño CSS, es probable que estés tomando decisiones sobre los navegadores que deberían tomar ellos mismos. A través de una serie de diseños simples y componibles , cada diseño le enseñará cómo aprovechar mejor los algoritmos integrados que potencian los navegadores y CSS.

Emplear un diseño de diseño algorítmico significa eliminar los puntos de interrupción, los "números mágicos" y otros trucos para crear componentes de diseño independientes del contexto.
Sus futuros sistemas de diseño serán más consistentes, tendrán menos código y serán más maleables en manos de sus usuarios y sus dispositivos.

## Historia

En 1979 el arquitecto Christopher Alexander aportó al mundo de la arquitectura el libro The Timeless Way of Building; en él proponía el aprendizaje y uso de una serie de patrones para la construcción de edificios de una mayor calidad, en la que esa mayor calidad se refería a la arquitectura antigua y la menor calidad correspondía a la arquitectura moderna, que el romper con la arquitectura antigua había perdido esa conexión con lo que las personas consideraban que era calidad.

En palabras de este autor, "**Cada patrón describe un problema que ocurre infinidad de veces en nuestro entorno**, así como la solución al mismo, de tal modo que podemos utilizar esta solución un millón de veces más adelante sin tener que volver a pensarla otra vez."

Los patrones que Christopher Alexander y sus colegas definieron, publicados en un volumen denominado A Pattern Language, son un intento de formalizar y plasmar de una forma práctica generaciones de conocimiento arquitectónico.

Los patrones no son principios abstractos que requieran su redescubrimiento para obtener una aplicación satisfactoria, ni son específicos a una situación particular o cultural; son algo intermedio.

**Un patrón define una posible solución correcta para un problema de diseño dentro de un contexto dado**, describiendo las cualidades invariantes de todas las soluciones.

Dentro de las soluciones de Christopher Alexander se encuentran cómo se deben diseñar ciudades y dónde deben ir las perillas de las puertas.

Más tarde, en 1987, Ward Cunningham y Kent Beck, sobrepasados por el pobre entrenamiento que recibían los nuevos programadores en orientación a objetos, se preguntaban cómo se podían capturar las buenas ideas para, luego de alguna manera, traspasarlas a los nuevos programadores recién instruidos en herencia y polimorfismo.

Leyendo a Alexander se dieron cuenta del paralelo que existía entre la buena arquitectura propuesta por Alexander y la buena arquitectura OO, de modo que usaron varias ideas de Alexander para desarrollar cinco patrones de interacción hombre-ordenador (HCI) y publicaron un artículo en OOPSLA-87 titulado Using Pattern Languages for OO Programs.

No obstante, no fue hasta principios de la década de 1990 cuando los patrones de diseño tuvieron un gran éxito en el mundo de la informática a partir de la publicación del libro Design Patterns escrito por el grupo Gang of Four (GoF) compuesto por Erich Gamma, Richard Helm, Ralph Johnson y John Vlissides, en el que se recogían 23 patrones de diseño comunes.

## Categorías de Patrones de Diseño

### Creacionales

Proveen diferentes mecanismos para crear objetos.

- Abstract Factory
- Builder (Constructor)
- Factory Method
- Prototype
- Singleton

### Estructurales

Describen formas de componer objetos para formar nuevas estructuras flexibles y eficientes.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### De Comportamiento

Gestionan algoritmos y responsabilidades entre objetos.

- Chain of Responsibility
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

## Singleton (Creacional)

Te asegura que una clase solo tiene una instancia. Esta única instancia puede ser consumida por cualquier otro objeto.

“Single” en inglés es “sencillo” (o soltero ¬w¬) así que se puede recordar si se asocia con su significado “Singleton” vendría a ser un objeto o instancia “solterona”.

- Singlenton con TS

Uno de los patrones de diseño de creación más populares es el patrón Singleton que restringe la creación de instancias de una clase a un objeto.

TypeScript permite implementar el patrón Singleton gracias a las siguientes características:

- soporte para modificadores de acceso (privado, protegido, público),
- soporte para métodos estáticos,
- siendo un lenguaje estáticamente escrito.

En el siguiente ejemplo, creo la clase ActionsBus que se supone que se instancia solo una vez, ya que debería haber un único punto para enviar una acción.

Además, debe ser notificado sobre cada acción en el sistema simplemente suscribiéndose en un lugar.

```ts
import { BehaviorSubject } from 'rxjs';

interface Action {
  type: string;
}

class ActionsBus {
  private static instance: ActionsBus;
  private actionsSubject = new BehaviorSubject<Action>(null);

  get actions$() {
    return this.actionsSubject.asObservable();
  }

  private constructor() {}

  static getInstance(): ActionsBus {
    if (!ActionsBus.instance) {
      ActionsBus.instance = new ActionsBus();
    }

    return ActionsBus.instance;
  }

  dispatch(action: Action) {
    this.actionsSubject.next(action);
  }
}
```

Los puntos clave son:

- constructor con un modificador de acceso privado, para que no sea accesible fuera del cuerpo de la clase,
- instancia estática archivada que se supone que hace referencia a la instancia única de la clase,
- Método getInstance estático que se encarga de devolver la instancia de la clase. Además, sigue una estrategia de evaluación perezosa, por lo tanto, debe crear la instancia cuando se llama por primera vez.

Singleton en acción

Veamos si la clase ActionsBus es un singleton, es decir, si solo hay una instancia de la clase.

```ts
//illegal since the constructor is private
const illegalActionsBus = new ActionsBus();

const firstActionsBus = ActionsBus.getInstance();
const secondActionsBus = ActionsBus.getInstance();

//both constants reference the same object
console.log(firstActionsBus === secondActionsBus);

firstActionsBus.actions$.subscribe(console.log);
secondActionsBus.dispatch({ type: 'Fetch news' });

//console output
//{type: "Fetch news"}
```

Es ilegal crear la instancia de clase de forma tradicional fuera del cuerpo de la clase.

Para obtener una referencia a la instancia única de ActionsBus, debe llamar al método estático getInstance.

Ambas constantes ( primer / segundo ActionsBus ) hacen referencia al mismo objeto, por lo tanto, la comparación lógica produce verdadero.

Por último, pero no menos importante, si se suscribe a la acción$ stream con la ayuda de la referencia firstActionsBus, recibirá una acción enviada utilizando la referencia secondActionsBus.

Definitivamente confirma que solo hay una instancia de la clase ActionsBus en el sistema.

## Observer

> Definir una dependencia uno a muchos entre objetos, de tal forma que cuando el objeto cambie de estado, todos sus objetos dependientes sean notificados automáticamente.

El patrón observer se compone de un sujeto que ofrece mecanismos de suscripción y desuscripción a múltiples observadores que quieren ser notificados de los cambios en dicho sujeto.

Cada observador expone un método de update que es usado por el sujeto para notificar cualquier cambio a todos los suscritos.

Es uno de los patrones más utilizados, algunos ejemplos típicos son:

- Newsletter
- Sockets
- Listeners en páginas web

Observador (en inglés: Observer) es un patrón de diseño de software que define una dependencia del tipo uno a muchos entre objetos, de manera que cuando uno de los objetos cambia su estado, notifica este cambio a todos los dependientes.

Se trata de un patrón de **comportamiento**, por lo que está relacionado con algoritmos de funcionamiento y asignación de responsabilidades a clases y objetos.

Los patrones de comportamiento describen no solamente estructuras de relación entre objetos o clases sino también esquemas de comunicación entre ellos y se pueden clasificar en función de que trabajen con clases (método plantilla) u objetos (cadena de responsabilidad, comando, iterador, recuerdo, observador, estado, estrategia, visitante).

La variación de la encapsulación es la base de muchos patrones de comportamiento, por lo que cuando un aspecto de un programa cambia frecuentemente, estos patrones definen un objeto que encapsula dicho aspecto. Los patrones definen una clase abstracta que describe la encapsulación del objeto.

Este patrón también se conoce como el patrón de publicación-inscripción o modelo-patrón.

Estos nombres sugieren las ideas básicas del patrón, que son: el objeto de datos, que se le puede llamar Sujeto a partir de ahora, contiene atributos mediante los cuales cualquier objeto observador o vista se puede suscribir a él pasándole una referencia a sí mismo.

El Sujeto mantiene así una lista de las referencias a sus observadores.

Los observadores a su vez están obligados a implementar unos métodos determinados mediante los cuales el Sujeto es capaz de notificar a sus observadores suscritos los cambios que sufre para que todos ellos tengan la oportunidad de refrescar el contenido representado.

De manera que cuando se produce un cambio en el Sujeto, ejecutado, por ejemplo, por alguno de los observadores, el objeto de datos puede recorrer la lista de observadores avisando a cada uno.

Este patrón suele utilizarse en los entornos de trabajo de interfaces gráficas orientados a objetos, en los que la forma de capturar los eventos es suscribir listeners a los objetos que pueden disparar eventos.

El patrón observer es la clave del patrón de arquitectura Modelo Vista Controlador (MVC).

De hecho el patrón fue implementado por primera vez en el MVC de Smalltalk basado en un entorno de trabajo de interfaz.

Este patrón está implementado en numerosos bibliotecas y sistemas, incluyendo todos los toolkits de GUI.

Patrones relacionados: publicador-subscriptor, mediador, singleton.

FIXME: Objetivo

Se trata de desacoplar la clase de los objetos clientes del objeto, aumentando la modularidad del lenguaje, creando las mínimas dependencias y evitando bucles de actualización (espera activa o sondeo). En definitiva, normalmente, se usará el patrón observador cuando un elemento quiere estar pendiente de otro, sin tener que estar comprobando de forma continua si ha cambiado o no.

Motivación

Si se necesita consistencia entre clases relacionadas, pero con independencia, es decir, con un bajo acoplamiento.

Estructura

EstructuraPatronObservador.png
Participantes
Habrá sujetos concretos cuyos cambios pueden resultar interesantes a otros y observadores a los que al menos les interesa estar pendientes de un elemento y en un momento dado, reaccionar ante sus notificaciones de cambio. Todos los sujetos tienen en común que un conjunto de objetos quieren estar pendientes de ellos. Cualquier elemento que quiera ser observado tiene que permitir indicar:

“Estoy interesado en tus cambios”.
“Ya no estoy interesado en tus cambios”.
El observable tiene que tener, además, un mecanismo de aviso a los interesados.

A continuación se detallan a los participantes de forma desglosada:

Sujeto (subject):
El sujeto proporciona una interfaz para agregar (attach) y eliminar (detach) observadores. El Sujeto conoce a todos sus observadores.

Observador (observer):
Define el método que usa el sujeto para notificar cambios en su estado (update/notify).

Sujeto concreto (concrete subject):
Mantiene el estado de interés para los observadores concretos y los notifica cuando cambia su estado. No tienen porque ser elementos de la misma jerarquía.

Observador concreto (concrete observer):
Mantiene una referencia al sujeto concreto e implementa la interfaz de actualización, es decir, guardan la referencia del objeto que observan, así en caso de ser notificados de algún cambio, pueden preguntar sobre este cambio.

## Casos de Uso del patrón Observer: Redux

Redux:

- Una librería de manejo de estado
- Inicializas un store con un estado y un reducer
- Despachas acciones que modifican el estado
- El estore notifica que el estado cambió.

Redux es un contenedor predecible del estado de aplicaciones JavaScript.

Te ayuda a escribir aplicaciones que se comportan de manera consistente, corren en distintos ambientes (cliente, servidor y nativo), y son fáciles de probar. Además de eso, provee una gran experiencia de desarrollo, gracias a edición en vivo combinado con un depurador sobre una línea de tiempo.

Puedes usar Redux combinado con React, o cual cualquier otra librería de vistas. Es muy pequeño (2kB) y no tiene dependencias.

Conceptos básicos
Redux de por si es muy simple.

Imagine que el estado de su aplicación se describe como un simble objeto. Por ejemplo, el estado de una aplicación de tareas (TODO List) puede tener el siguiente aspecto:

{
todos: [{
text: 'Comer',
completed: true
}, {
text: 'Hacer ejercicio',
completed: false
}],
visibilityFilter: 'SHOW_COMPLETED'
}

Este objeto es como un “modelo” excepto que no hay setters. Esto es así para que diferentes partes del código no puedan cambiar el estado arbitrariamente, causando errores difíciles de reproducir.

Para cambiar algo en el estado, es necesario enviar una acción. Una acción es un simple objeto en JavaScript (observe cómo no introducimos ninguna magia) que describe lo que sucedió. A continuación mostramos algunos ejemplos de acciones:

{ type: 'ADD_TODO', text: 'Ir a nadar a la piscina' }
{ type: 'TOGGLE_TODO', index: 1 }
{ type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_ALL' }

Hacer valer que cada cambio sea descrito como una acción nos permite tener una claro entendimiento de lo que está pasando en la aplicación. Si algo cambió, sabemos por qué cambió. Las acciones son como migas de pan (el rastro) de lo que ha sucedido. Finalmente, para juntar el estado y las acciones entre si, escribimos una función llamada reductor (reducer). Una vez más, nada de magia sobre él asunto, es sólo una función que toma el estado y la acción como argumentos y devuelve el siguiente estado de la aplicación. Sería difícil escribir tal función para una aplicación grande, por lo que escribimos funciones más pequeñas que gestionan partes del estado:

function visibilityFilter(state = 'SHOW_ALL', action) {
if (action.type === 'SET_VISIBILITY_FILTER') {
return action.filter;
} else {
return state;
}
}

function todos(state = [], action) {
switch (action.type) {
case 'ADD_TODO':
return state.concat([{ text: action.text, completed: false }]);
case 'TOGGLE_TODO':
return state.map((todo, index) =>
action.index === index ?
{ text: todo.text, completed: !todo.completed } :
todo
)
default:
return state;
}
}

Y escribimos otro reductor que gestiona el estado completo de nuestra aplicación llamando a esos dos reductores por sus respectivas state keys:

function todoApp(state = {}, action) {
return {
todos: todos(state.todos, action),
visibilityFilter: visibilityFilter(state.visibilityFilter, action)
};
}

Esto es básicamente toda la idea de Redux. Tenga en cuenta que no hemos utilizado ninguna API de Redux. Ya se incluyen algunas utilidades para facilitar este patrón, pero la idea principal es que usted describe cómo su estado se actualiza con el tiempo en respuesta a los objetos de acción, y el 90% del código que se escribe es simplemente JavaScript, sin uso de Redux en si mismo, sus APIs, o cualquier magia.

## Patrón Decorator

Añade nuevas responsabilidades a un objeto de forma dinámica permitiendo así extender su funcionalidad sin tener que usar subclases.

Decorator (patrón de diseño)
El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera.

Motivación
Un ejemplo para poder ver la aplicabilidad del patrón decorador podría ser el siguiente:

Disponemos de una herramienta para crear interfaces gráﬁcas, que permite añadir funcionalidades como bordes o barras de desplazamiento a cualquier componente de la interfaz.
Una posible solución sería utilizar la herencia para extender las responsabilidades de la clase. Si optamos por esta solución, estaríamos haciendo un diseño inflexible (estático), ya que el cliente no puede controlar cuándo y cómo decorar el componente con esa propiedad.
La solución está en encapsular dentro de otro objeto, llamado Decorador, las nuevas responsabilidades. El decorador redirige las peticiones al componente y, además, puede realizar acciones adicionales antes y después de la redirección. De este modo, se pueden añadir decoradores con cualidades añadidas recursivamente.
decorador concreto
En este diagrama de clases, podemos ver que la interfaz decorador implementa la interfaz del componente, redirigiendo todos los métodos al componente visual que encapsula.
Las subclases decoradoras refinan los métodos del componente, añadiendo responsabilidades.
También se puede ver que el cliente no necesita hacer distinción entre los componentes visuales decorados y los sin decorar.
secuencia decorador
Aplicabilidad
Añadir responsabilidades a objetos individuales de forma dinámica y transparente
Responsabilidades de un objeto pueden ser retiradas
Cuando la extensión mediante la herencia no es viable
Hay una necesidad de extender la funcionalidad de una clase, pero no hay razones para extenderlo a través de la herencia.
Existe la necesidad de extender dinámicamente la funcionalidad de un objeto y quizás quitar la funcionalidad extendida.
Estructura
Decorador genérico
Participantes
Componente
Deﬁne la interfaz para los objetos que pueden tener responsabilidades añadidas.

Componente Concreto
Deﬁne un objeto al cual se le pueden agregar responsabilidades adicionales.

Decorador
Mantiene una referencia al componente asociado. Implementa la interfaz de la superclase Componente delegando en el componente asociado.

Decorador Concreto
Añade responsabilidades al componente.

Colaboraciones
El decorador redirige las peticiones al componente asociado.
Opcionalmente puede realizar tareas adicionales antes y después de redirigir la petición.
Consecuencias
Más flexible que la herencia. Al utilizar este patrón, se pueden añadir y eliminar responsabilidades en tiempo de ejecución. Además, evita la utilización de la herencia con muchas clases y también, en algunos casos, la herencia múltiple.
Evita la aparición de clases con muchas responsabilidades en las clases superiores de la jerarquía. Este patrón nos permite ir incorporando de manera incremental responsabilidades.
Genera gran cantidad de objetos pequeños. El uso de decoradores da como resultado sistemas formados por muchos objetos pequeños y parecidos.
Puede haber problemas con la identidad de los objetos. Un decorador se comporta como un envoltorio transparente. Pero desde el punto de vista de la identidad de objetos, estos no son idénticos, por lo tanto no deberíamos apoyarnos en la identidad cuando estamos usando decoradores.
Implementación
El patrón Decorator soluciona este problema de una manera mucho más sencilla y extensible.

Se crea a partir de Ventana la subclase abstracta VentanaDecorator y, heredando de ella, BordeDecorator y BotonDeAyudaDecorator. VentanaDecorator encapsula el comportamiento de Ventana y utiliza composición recursiva para que sea posible añadir tantas “capas” de Decorators como se desee. Podemos crear tantos Decorators como queramos heredando de VentanaDecorator.

NOTE: Algo curioso en javascript es el uso de la virguilla (el cosito de la Ñ). Se usa para decir que algo es distinto de -1. Entonces en esta clase podríamos escribir:

if(~value.indexOf('@')) {
...
}
