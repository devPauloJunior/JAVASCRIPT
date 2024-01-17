// função literal anonima
let dobro = function(a) {
    return 2 * a    
}
console.log(dobro(200))

// arrowFunction padrão
dobro = (a) => {
    return 2 * a
}
console.log(dobro(600))

// arrowFunction com return implicito
dobro = a => 2 * a
console.log(dobro(Math.PI))

let ola = function() { // função anonima
    return 'Ola'
}

ola = () => { // forma PADRÃO
    return 'Ola'
}

ola = () => 'Ola' // forma de return implicito

ola = _ => 'Ola'
console.log(ola())


// ATV - Funções
// 01. crie um codigo utilizando função que leia um array de 12 elementos e mostre-os

const minhaLista = [ 'a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6 ]

function mostrar(umaLista) {
    for (let i = 0; i < minhaLista.length; i++) {
        console.log(minhaLista[i])
    }
}

mostrar(minhaLista)





