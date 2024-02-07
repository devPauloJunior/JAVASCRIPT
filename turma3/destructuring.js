let saudacoes = ['ola', 'oi', 'e ai', 'la ele', 'opa', 'aeeeee']
let saudacao4 = saudacoes[4]
console.log(saudacao4)
let [saudacao1, saudacao2, saudacao3] = saudacoes

console.log(saudacao1)
console.log(saudacao2)
console.log(saudacao3)


// Exemplo 2

let pronome1, pronome2
[pronome1, pronome2]  = ['eu', 'tu', 'la ele', 'nós', 'vos', 'la eles']
console.log(pronome1)
console.log(pronome2)

//  Exemplo 3

const usuario = {
    nome: 'Paulo',
    cargo: 'Professor',
    idade: 29,
}

const { nome, idade } = usuario

console.log(`${nome} - ${idade}`)