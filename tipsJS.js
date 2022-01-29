const persona = {
  nombre: 'Juan',
  apellido: 'Perez',
  edad: 20,
  direccion: {
    calle: 'Calle falsa 123',
  },
};

// Copia en profundidad
const theSamePerson = JSON.parse(JSON.stringify(persona));

// Copia hasta el primer nivel
const theSamePerson2 = Object.assign({}, persona);
const theSamePerson3 = { ...persona };
