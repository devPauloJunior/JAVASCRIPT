function somar(a, b) {
    console.log(a + b) 
}

somar(2, 4)
somar(3, 9)
somar(5, 6)
somar(6, 3)
somar('7', '5')
somar('Paulo', ' Junior')


function deMaior(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
}

const prompt = require('prompt-sync')()
let idade = Number(prompt('Informe sua idade: '))
deMaior(idade)

idade = Number(prompt('Informe sua idade: '))
deMaior(idade)

idade = Number(prompt('Informe sua idade: '))
deMaior(idade)

idade = Number(prompt('Informe sua idade: '))
deMaior(idade)

idade = Number(prompt('Informe sua idade: '))
deMaior(idade)