function buildAirplanes(color) {
  this.brand = 'Airbus';
  this.model = 'A380';
  this.utilLife = 25;
  this.extras = 0
  this.color = color || 'white';
  this.characteristics = function() {
    console.log(`Brand: ${this.brand}, Model: ${this.model}, Util Life: ${this.utilLife}, Color: ${this.color}`);
  }
}

const defaultAirplane = new buildAirplanes();
defaultAirplane.characteristics();

const airplaneBlue = new buildAirplanes('blue');
navegationSystem(airplaneBlue);
airplaneBlue.characteristics();
console.log(airplaneBlue);

const airplaneRed = new buildAirplanes('red');
sectionDeluxe(airplaneRed);
airplaneRed.characteristics();
console.log(airplaneRed);

// first Decorator
function navegationSystem(airplane) {
  airplane.navegationSystem = true;
  airplane.extras++;
}

// second Decorator
function sectionDeluxe(airplane) {
  airplane.sectionDeluxe = true;
  airplane.extras++;
}