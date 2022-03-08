class Car {
  constructor(doors, engine, color) {
    this.doors = doors;
    this.engine = engine;
    this.color = color;
  }

  carStats() {
    return `This car has ${this.doors} doors, a ${this.engine} engine and ${this.color} color.`;
  }

  static totalDoors(car1, car2) {
    const doors1 = car1.doors;
    const doors2 = car2.doors;

    return doors1 + doors2;
  }
}

class SUV extends Car {
  constructor(doors, engine, color, brand) {
    super(doors, engine, color);
    this.brand = brand;
  }

  myBrand() {
    return `This SUV is a ${this.brand}`;
  }
}

const civic = new SUV(4, 'V6', 'grey', 'Honda');
const mondeo = new SUV(5, 'V6', 'blue', 'Ford');

const textArea = document.getElementsByTagName('div')[0];

textArea.innerHTML = `${civic.carStats()}<br>${mondeo.carStats()}`;
textArea.innerHTML += `<br>${Car.totalDoors(civic, mondeo)}`;
textArea.innerHTML += `<br>${civic.myBrand()}`;
