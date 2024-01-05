/* Fazer uma estrutura que calcule a media das 03 notas do aluno e informe se o mesmo, passou de ano ou vai repetir 

nota1, nota2 e nota3

media é 7
*/

const prompt = require('prompt-sync')()

const nota1 = prompt('Informe a primeira nota: ')
const nota2 = prompt('Informe a segunda nota: ')
const nota3 = prompt('Informe a terceira nota: ')

const media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3
console.log(media)
if ( media >= 7 ) {
    console.log('parabens você foi aprovado')
} else {
    console.log('Você está reprovado')
}