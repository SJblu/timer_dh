const readlineSync = require('readline-sync'); // modulo sync usado para aguardar resposta do user antes de iniciar o contador

const entrada = readlineSync.question('Informe (em segundos) o tempo inicial do timer?\n');
console.log(entrada + " Segundos");

module.exports = entrada;

