const repetentes = ['Felipe', 'Logam', 'Zidany']

repetentes.forEach( function(nome) {
    console.log(`Eu ${nome} sou repetente.`)
})

repetentes.forEach(nome => console.log(nome))

const exibirRepetentes = repetentes => console.log(`Exibir ${repetentes}`)
repetentes.forEach(exibirRepetentes)