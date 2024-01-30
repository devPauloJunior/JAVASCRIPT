// Obter Input
const inputElement = document.querySelector('#input')
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const outputElement = document.querySelector('#output')
const converterElement = document.querySelector('#converter-btn')
const mensagemElement = document.querySelector('#mensagem')

// função de conversão de unidades
function converter() {
    // receber os valor das unidades de entrada
    const fromValue = fromElement.value
    const toValue = toElement.value

    // verificar se elas são iguais
    if (fromValue === toValue) {
        outputElement.value = inputElement.value
        mensagemElement.textContent = ""
        return
    }

    // conversão para metros
    let metros
    switch (fromValue) {
        case 'm':
            metros = inputElement.value
            break;
        case 'km':
            metros = inputElement.value * 1000
            break;
        case 'cm':
            metros = inputElement.value / 100
            break
        case 'mm':
            metros = inputElement.value / 1000
            break
    }

    // conversão para as unidades de saida
    let resultado

    switch (toValue) {
        case 'm':
            resultado = metros
            break
        case 'km':
            resultado = metros / 1000
            break
        case 'cm':
            resultado = metros * 100
            break
        case 'mm':
            resultado = metros * 1000
            break
    }

    // exibir resultado na output
    output.value = resultado.toFixed(2)

    // exibir as mensagens
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text
    const mensagem = `
    ${ inputElement.value } ${fromLabel} 
    equivale a 
    ${ resultado.toFixed(2) } ${toLabel} `
    mensagemElement.textContent = mensagem
}

// adicionar uma escuta de enventos
converterElement.addEventListener('click', converter)