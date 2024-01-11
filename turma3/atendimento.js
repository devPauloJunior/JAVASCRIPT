// DRY

function centralDeAtendimento(opcao) {
    switch(opcao) {
        case 1: 
            console.log('Planos')
            break
        case 2:
            console.log('Renovação de assinatura')
            break
        case 3:
            console.log('Cancelamento.')
            break
        case 4:
            console.log('Boletos de pagamento')
            break
        case 5:
            console.log('Falar com um de nossos atendentes')
            break
        case 6:
            console.log('Ouvidoria')
            break
        default: 
            console.log('Opção não existente.')
            break
    }
}

const prompt = require('prompt-sync')()

console.log(`
Escolha: (1) para Planos
         (2) para Renovação de assinatura
         (3) para Cancelamento
         (4) para Boletos de pagamento
         (5) para Falar com um de nossos atendentes
         (6) para Ouvidoria
`)
let opcao = Number(prompt('Escolha uma das opões acima: '))
centralDeAtendimento(opcao)

opcao = Number(prompt('Escolha uma das opões acima: '))
centralDeAtendimento(opcao)

opcao = Number(prompt('Escolha uma das opões acima: '))
centralDeAtendimento(opcao)