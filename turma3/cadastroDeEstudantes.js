// Crie um codigo que implemente um cadastro de estudante. Utilizando Objetos.

const prompt = require('prompt-sync')()
let estudante = {}

while(true) {
    const nomeEstudante = prompt('Informe o nome do Estudante: ')
    estudante.nomeEstudante = nomeEstudante

    const sobrenomeEstudante = prompt('Informe o Sobrenome do Estudante: ')
    estudante.sobrenomeEstudante = sobrenomeEstudante

    const idade = Number(prompt('Informe a idade do Estudante: '))
    estudante.idade = idade

    const turma = prompt('Informe a turma do Estudante: ')
    estudante.turma = turma

    const serie = Number(prompt('Informe a Serie do Estudante: '))
    estudante.serie = serie

    const turno = prompt('Informe o turno do Estudante: ')
    estudante.turno = turno

    const saida = prompt('Digite S para SAIR: ')
    if (saida.toLowerCase() === 's') {
        console.log('Fim do cadastro')
        break
    }
}

console.table(estudante)