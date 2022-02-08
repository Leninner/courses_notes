// Desestructuración de objetos

const person = {
  fullName: 'Juan Mata',
  age: 30,
  country: 'EC',
};

const { fullName, age, country } = person;

console.log(fullName, age, country);
// Juan Mata 30 EC

console.log(person.fullName, person.age, person.country);
// Juan Mata 30 EC
