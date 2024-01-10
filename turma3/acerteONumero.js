// crie um game para o usuario ficar tentando acertar o numero oculto. Quando ele acertar o game deve finalizar e informar a quantidade de tentativas.
// 1. Detectei que é uma repetição
// 2. usar while pois não sabemos quantas vezes iremos repetir
// 3. Vou precisar de prompt
// 4. preciso de uma valor padrão para o numero oculto.
// 5. while infinito
// 6. preciso de valor para armazenar a quantidade de tentativas

const prompt = require('prompt-sync')()

const numeroOculto = 29
let qtdTentativas = 0
while(numeroOculto === numero) {
    const numero = Number(prompt('Informe um numero: '))
    qtdTentativas = qtdTentativas + 1
    if (numeroOculto === numero) {
        console.log(`Parabéns você acertou e teve ${qtdTentativas} tentativa(s)`)
        break
    }
    if (numeroOculto > numero) {
        console.log(`O seu numero ${numero} é MENOR que o numero oculto. Tente novamente`)
    } else {
        console.log(`O seu numero ${numero} é MAIOR que o numero oculto. Tente novamente`)
    }
}

