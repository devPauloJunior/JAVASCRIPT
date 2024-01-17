// this - é uma palavra reservada que faz referencia ao PAI de um elemento. Quando o this é utilizado fora de uma função ou objeto, seu PAI será o elemento do contexto GLOBAL.

function aluno(nomeAluno, notaAluno) {
    this.nomeAluno = nomeAluno
    this.notaAluno = notaAluno
    
    notaAluno = notaAluno * 3
    this.notaAluno =  this.notaAluno * 7

    console.log(this.nomeAluno)
    console.log(notaAluno)
    console.log(this.notaAluno)

    this.dadosAnonimos = function () {
        setTimeout(function() {
            console.log(this.nomeAluno)
            console.log(this.notaAluno)
        }, 3000)
    }

    this.dadosArrow = function () {
        setTimeout(() => {
            console.log(this.nomeAluno)
            console.log(this.notaAluno)
        }, 3000)
    }
}

const aluno1 = new aluno('Andre', 7.0)
aluno1.dadosAnonimos()
aluno1.dadosArrow()