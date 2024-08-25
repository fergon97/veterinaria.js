const fs = require('fs');

const registrar = (argumentos) =>{
    const content =fs.readFileSync('citas.json');
    const nuevaCita = JSON.parse(content)
    nuevaCita.push({
        nombre: argumentos[1],
        edad:argumentos[2],
        tipo:argumentos[3],
        color: argumentos[4],
        enfermedad: argumentos[5]
    });
    fs.writeFileSync('citas.json', JSON.stringify(nuevaCita));
};

const leer = () => {
   const content =JSON.parse(fs.readFileSync('citas.json', 'utf8'));
   console.log(content);
};

const ayuda = () => {
    console.log(`
   En este desafio puedes ejecutar las siguientes operaciones:
   node index.js leer
   o
   node index.js registrar 
   `);
};

const tip = () => {
  console.log(`
    Debes registrar la cita agregando el nombre del animal, edad, tipo de animal, color del animal y enfermedad
    como en el siguiente ejemplo:
    node index.js registrar Benito "2 años" perro blanco vomitos
  `);
};

module.exports = { registrar, leer, ayuda, tip };