// Crie um codigo que solicite 10 numeros para o usuario e ao final informe quantos foram pares e quantos foram impares.
// 4 / 2 = 2
// 4 % 2 = 0
// 7 / 2 = 3
// 7 % 2 = 1

const prompt = require('prompt-sync')()

let numPares = 0
let numImpares = 0

for (i=0; i < 10; i++) {

    const numero = Number(prompt('Informe seu numero: '))
    if ( numero % 2 === 0 ) {
        numPares++
    } else {
        numImpares++
    }
}

console.log(`Você digitou ${numPares} numero(s) PAR(ES) e ${numImpares} numero(s) IMPARE(S)`)
