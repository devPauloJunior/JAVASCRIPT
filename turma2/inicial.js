var texto = "Um texto";
console.log(typeof(texto));
function mudarTexto() {
    document.getElementById('teste').innerHTML = "Segundo Teste de Impressão";
}
if (a == 2) {
    let mensagem = 'Acesso 01';
    console.log(mensagem);
    mensagem = 'Novo acesso';
    console.log(mensagem);
} else {
    let mensagem = 'Acesso 02';
    console.log(mensagem);
    mensagem = 'Novo acesso 02';
    console.log(mensagem);
}

//null
var teste = null;
console.log(teste);

//undefined
var teste2
console.log(teste2);

var cpf = 12312377;
console.log(cpf);

var a = 2;
console.log(typeof(a));
var b = '2';
console.log(typeof(b));

console.log(a == b);
console.log(a === b);
console.log(a != b);

// and && ***** or ||
// verdade && verdade -  verdade || falso
console.log(a == b && b > a);
console.log(a == b || b > a);

var c = 5;
console.log(c = c + 1);
console.log(--c);
console.log(++c);

function somaNumeros(a, b, c) {
    // let soma = 4 +  3;
    console.log(`a soma de 4 + 3 é igual a ${a+b+c}`);
}
somaNumeros(7, 7, 8, 10, 20);

const testeArrow = () => {
    return `a subtação de 4 - 3 é igual a ${4-3}`;
};
console.log(testeArrow());

const numeros = [1,2,3,4,5];
const somaMaisUm = numeros.map(n => n +1);
console.log(somaMaisUm);
