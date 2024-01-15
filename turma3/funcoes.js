// function somar(a, b) {
//     console.log(a + b) 
// }

// somar(2, 4)
// somar(3, 9)
// somar(5, 6)
// somar(6, 3)
// somar('7', '5')
// somar('Paulo', ' Junior')


// function deMaior(idade) {
//     if (idade >= 18) {
//         console.log('Você é maior de idade.')
//     } else {
//         console.log('Você é menor de idade.')
//     }
// }

// const prompt = require('prompt-sync')()
// let idade = Number(prompt('Informe sua idade: '))
// deMaior(idade)

// idade = Number(prompt('Informe sua idade: '))
// deMaior(idade)

// idade = Number(prompt('Informe sua idade: '))
// deMaior(idade)

// idade = Number(prompt('Informe sua idade: '))
// deMaior(idade)

// idade = Number(prompt('Informe sua idade: '))
// deMaior(idade)

// criar uma função de forma literal
function func01() { return 'Função 1' }

// armazenar uma função em uma variavel
const func02 = function() { return 'Função 2'}

// armazenar uma função em um array
const meuArray = [ function(a, b) { return a + b}, func01, func02 ]

console.log(meuArray[0](4, 7))
console.log(meuArray[1]())
console.log(meuArray[2]())

// armazenar uma função em atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa, to aqui' }

console.log(obj.falar())