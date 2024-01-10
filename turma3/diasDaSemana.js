// crie um codigo que informe o dia da semana atraves de seu numero.
const prompt = require('prompt-sync')()

const numero = Number(prompt('Informe qual numero deseja informação: '))

/* 1 a 7

if ( numero == 1 ) {
    console.log('Domingo')
} else if ( numero == 2 ) {
    console.log('Segunda-feira')
} else if ( numero == 3 ) {
    console.log('Terça-feira')
} else if ( numero == 4 ) {
    console.log('Quarta-feira')
} else if ( numero == 5 ) {
    console.log('Quinta-feira')
} else if ( numero == 6 ) {
    console.log('Sexta-feira')
} else if ( numero == 7 ) {
    console.log('Sabado')
} else {
    console.log('Não é um dia da Semana')
}
*/

switch (numero) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda-feira')
        break
    case 3:
        console.log('Terça-feira')
        break
    case 4:
        console.log('Quarta-feira')
        break
    case 5:
        console.log('Quinta-feira')
        break
    case 6:
        console.log('Sexta-feira')
        break
    case 7:
        console.log('Sabado')
        break
}