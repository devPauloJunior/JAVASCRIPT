/* operadores do ternario: ? e o :

let meuBoleano = true

if (meuBoleano) {
    console.log('É verdade')
} else {
    console.log('É falso')
}

meuBoleano ? console.log('É verdade') : console.log('É falso')

*/

// let vendas = 3000

// if ( vendas >= 2500 ) {
//     console.log('Você vai receber sua gratificação')
// } else {
//     console.log('Você não vai receber a gratificação')
// }
// let vendas = 1200
// const gratificacao = vendas >= 2500 ? 'Você vai receber sua gratificação' : 'Você NÃO vai receber sua gratificação'

//console.log(gratificacao)

// let nota = 9.0
// const resultado = nota >= 7.0 ? 'Aprovado' : nota < 5.0 ? 'Reprovado' : 'Recuperação' 

// console.log(resultado)

const prompt = require('prompt-sync')()

const nome = prompt('Informe seu nome: ').toLowerCase()

const funcao = nome === 'paulo' ? 'Professor' : nome === 'aline' ? 'aluna' : nome === 'mateus' ? 'aluno' : nome === 'marcelo'? 'Atrasado': 'Não identificado'

console.log(funcao)

