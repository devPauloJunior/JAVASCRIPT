const prompt = require('prompt-sync')()

/* WHILE INFINITO
let i = 0
while (true) {
    console.log(i)
    i = i + 1
} 

faça um codigo que pergunta se a idade da pessoa caso a pessoa seja menor de idade o sistema é interompido

while(true) {
    const idade = Number(prompt('Informe sua idade: '))
    if (idade >= 0 && idade < 18) {
        console.log(`A idade de ${idade} não pode ter acesso ao sistema.`)
        break
    } else {
        console.log('Olá, seja bem-vindo ao nosso sistema')
    }
}*/

// Cria um codigo que peça as notas dos alunos e quando não houver mais notas para registrar o professor deve informar 'SAIR'

while(true) {
    const nome = prompt('Informe o nome do aluno:')
    const nota = Number(prompt('Informe a nota do aluno: '))
    console.log(`O aluno ${nome} ficou com a nota ${nota}`)
    const sair = prompt('Digite "SAIR" para sair do sistema: ')
    if (sair === 'SAIR'){
        console.log('Volte sempre')
        break
    }
}