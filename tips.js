class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and ${this.color} color.`;
  }
}

const civic = new Car(4, 'V6', 'grey');
const mondeo = new Car(5, 'V6', 'blue');

const textArea = document.getElementsByTagName('div')[0];

textArea.innerHTML = `${civic.carStats()}<br>${mondeo.carStats()}`;

doSome();
doOtherThing();

function doSome() {
  console.log('Hola, soy una función con hosting');
}

const doOtherThing = () => {
  console.log('Hola, soy una función con hosting');
};
