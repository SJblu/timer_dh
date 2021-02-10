// modulo para contagem regressiva
// parametro de entrada deve ser em segundos
const timerConsole = (tempo) => {

    //variaveis para calcular o tempo
    let tempoEmSegundos = tempo;
    let minutos = 0;
    let segundos = tempoEmSegundos;

    // validador para manter os minutos e segundos dentro da margem esperada
    if (tempoEmSegundos > 59) {
        minutos = Math.floor(tempoEmSegundos / 60);
        segundos = tempoEmSegundos % 60;
    }

    // funcao de temporizador regressivo
    const temporizador = setInterval(() => {
        //imprime o tempo atual
        console.log(`. . . . . ${minutos}m ${segundos}s . . . . .`);

        // valida SE ainda há minutos a serem contados, reduz o contator
        // dos minutos e reseta o contador dos segundos
        if (segundos === 0 && minutos > 0) {
            minutos--;
            setTimeout(() => {
                segundos = 59;
            }, 1000);
        }
        segundos--;
        
        tempoEmSegundos--; //reduz o contador principal para validar o final do tempo total

        //valida SE o contador principal zerar, finaliza a funcao de temporizador
        if (tempoEmSegundos < 0) {
            clearInterval(temporizador)
            console.log("     **bip** **bip**")
            console.log(" == DE VOLTA PRA AULA ==")
        }
    }, 1000);
}

module.exports = timerConsole;