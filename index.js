const { registrar, leer, ayuda, tip } = require('./operaciones');

const argumentos = process.argv.slice(2);

if(argumentos[0] != null) {
  if(argumentos[0] === 'leer') {
    leer();
  }
  if(argumentos[0] === 'registrar') {
    if(argumentos.length === 6 ){
      registrar(argumentos);
    } else {
      tip();
    }
  }
} else {
  ayuda();
}