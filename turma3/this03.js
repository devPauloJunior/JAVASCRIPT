// const pessoa = {
//     saudacao1: 'Bom dia!',
//     saudacao2: 'Bom tarde!',
//     falar() {
//         console.log(this.saudacao1)
//     },
// }
// pessoa.falar()
// const falar = pessoa.falar
// falar() // conflito entre paradgimas: Estruturada e O.O.
// // cria uma nova função que, quando chamada, tem sua palavra-chave this definida com o valor fornecido
// const falaPessoa = pessoa.falar.bind(pessoa)
// falaPessoa()

function pessoaFunc() {
    this.idade = 0
    
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new pessoaFunc

