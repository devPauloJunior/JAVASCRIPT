const lista1 = ['a', 'b', 'c', 'd', 'e']
// INDICES       0    1    2    3    4
let lista2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// INDICES    0  1  2  3  4

console.log(typeof(lista1))
console.log(lista1.length)

// for (i=0; i < lista1.length; i++) {
//     console.log(lista1[i])
// }


let lista3 = lista1

console.log(lista3)
console.log(lista1)


lista3.push('f')
lista1.push('g')
lista3.pop()
lista1.pop()

lista1.unshift('z')
lista3.unshift('x')
let primeiroDaLista = lista1.shift()
lista3.shift()

console.log(primeiroDaLista)
console.log(lista3)
console.log(lista1)

console.log(lista2[1])
console.log(lista2.length)

