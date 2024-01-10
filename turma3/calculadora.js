// Calculadora de operações básicas

const prompt = require('prompt-sync')()

const valor1 = Number(prompt('Informe o primeiro valor: '))
const valor2 = Number(prompt('Informe o segundo valor: '))
const operador = prompt('Informe o operador: ')

switch (operador){
    case '+':
        console.log(`${valor1} + ${valor2} = ${valor1+valor2}`)
        break
    case '-':
        console.log(`${valor1} - ${valor2} = ${valor1-valor2}`)
        break
    case 'x':
        console.log(`${valor1} x ${valor2} = ${valor1*valor2}`)
        break
    case '/':
        console.log(`${valor1} / ${valor2} = ${valor1/valor2}`)
        break
}