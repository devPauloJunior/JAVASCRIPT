/* O que são estruturas de objetos no JS?

parametro: {}
Estrutura do objeto: chave: valor,

*/

let meuObjeto = {}

meuObjeto = {
    Nome: 'Paulo',
    Sobrenome: 'Junior',
    Idade: 29,
    Profissao: 'Dev Full Stack'
}

console.table(meuObjeto) // Imprime o OBJETO completo
console.log(meuObjeto['Nome']) // Imprime só um valor do OBJETO
console.log(meuObjeto.Nome) // Imprime só um valor do OBJETO
console.log(meuObjeto['Profissao']) // Imprime só um valor do OBJETO
console.log(Object.values(meuObjeto)) // Imprimi os valores do OBJETO
console.log(Object.keys(meuObjeto)) // Imprimi as chaves do OBJETO

delete meuObjeto.Profissao
delete meuObjeto.Sobrenome

console.log(meuObjeto) // Imprime o OBJETO completo

meuObjeto['Profissao'] = 'Super Mega Master Senior Ultra Giga Tom Dev Full Meta Stack'

meuObjeto.Sobrenome = 'Junior'

console.log(meuObjeto) // Imprime o OBJETO completo