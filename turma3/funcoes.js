function somar(a, b) {
    console.log(a + b) 
}

module.exports = somar

function deMaior(idade) {
    if (idade >= 18) {
        console.log('Você é maior de idade.')
    } else {
        console.log('Você é menor de idade.')
    }
}

module.exports = deMaior

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
// function func01() {
//     this.numero = 0
// }

// func01()
// console.log(numero)

// // armazenar uma função em uma variavel
// const func02 = function() { return 'Função 2'}
// console.log(func02())

// // armazenar uma função em um array
// const meuArray = [ function(a=null, b=null) { return a + b},]

// console.log(meuArray[0](4, 7))
// console.log(meuArray[0]())

// // armazenar uma função em atributo de objeto
// const objeto = {}
// objeto.falar = function() { return 'Opa, to aqui' }

// console.log(objeto.falar())

// //função como parametro de uma função
// function qualquerCoisa(funcao) {
//     funcao()
// }

// qualquerCoisa(function() { console.log('Executando....') })


// function calculaSalario(funcoes, valor) {
//     funcoes(valor)
// }
// calculaSalario(function(valor) {
//     let imposto = valor * 0.03
//     let valorComImposto = valor - imposto
//     console.log(valorComImposto)
// }, 1200)

// calculaSalario(function(valor) {
//     let imposto = valor * 0.05
//     let valorComImposto = valor - imposto
//     console.log(valorComImposto)
// }, 1500)

// // função retornando uma função
// function calculadora() {
//     return function (a, b) {
//         console.log(a + b)
//     }
// }

// let recebe = calculadora()
// recebe(5, 4)

// Retornos são opcionais

// function area(largura, altura) {
//     const area = largura * altura
//     if (area > 20) {
//         console.log(`Valor acima do permitido: ${area}m2`)
//     } else {
//         return area
//     }
// }

// console.log(area(2, 2))
// console.log(area(2))
// console.log(area(5,5))

// Parametros variaveis nas funções JS
// arguments é uma lista criada automaticamente com os valores passados para uma função sem parametros
// function soma() {
//     let soma = 0
//     for (i in arguments) {
//         soma += arguments[i]
//     }
//     return {soma, arguments}
// }

// console.log(soma())
// console.log(soma(1))
// console.log(soma(1, ' Ola'))
// console.log(soma(1, 5, 9, 6, 3, 2, 1, 4))
// console.log(soma('Paulo ', 'Junior'))

// funções com parametros e com valores padrões
// antes do es2015
// function multiplicacao(a, b, c) {
//     a = a || 1 
//     b = b || 1
//     c = c || 1
//     return a * b * c
// }
// console.log(multiplicacao())

// // valor padrão do es2015
// function multiplicacao2015(a=1, b=1, c=1) {
//     return a * b * c
// }
// console.log(multiplicacao2015())
// console.log(multiplicacao2015(2))
// console.log(multiplicacao2015(4, 6))
// console.log(multiplicacao2015(8, 10, 12))

