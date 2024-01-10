for ( i=1; i <= 1; i = i + 1 ) {
    console.log(i)
}

// faça uma estrutura de repetição que indique qual é o numero maior digitado pelo usuario. Obs: você deve repetir no maximo 5 vezes.

let maior = 0
const prompt = require('prompt-sync')()
for(i=1; i <= 5; i = i + 1){
    const numero = Number(prompt('Informe um numero: '))
    if (maior < numero) {
        maior = numero
    }
}

console.log(`O numero ${maior} é o maior informado.`)