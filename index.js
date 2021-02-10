// contador regressivo para aulas da 
// turma 2021/1 FullStack Node.js - Digital House
const readlineSync = require('readline-sync'); // modulo sync usado para aguardar resposta do user antes de iniciar o contador
const timer = require('./timerConsole.js');

// recebe entrada do user
const entrada = readlineSync.question('Informe (em segundos) o tempo inicial do timer?\n');
console.log(entrada + " Segundos");


//executa timer
timer(entrada);



