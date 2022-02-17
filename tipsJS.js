const Hola = (name, callback) => {
  setTimeout(() => {
    console.log(`Hola ${name}`);
    callback(name);
  }, 1500);
};

const Hablar = (callback) => {
  setTimeout(() => {
    console.log('Hablar');
    callback();
  }, 1000);
};

const Adios = (name, callback) => {
  setTimeout(() => {
    console.log(`Adios ${name}`);
    callback();
  }, 1500);
};

//------------------------------------------------------

Hola('Carlos', (nombre) => {
  Hablar(() => {
    Hablar(() => {
      Hablar(() => {
        Adios(nombre, () => {
          console.log('Proceso finalizado');
        });
      });
    });
  });
});
