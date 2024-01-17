let comparaThis = function(params) {
    console.log( this === params)    
}
comparaThis(global)
const objeto = {}
// bind = cria uma nova função, ele tem sua propria palavra this especificada
comparaThis = comparaThis.bind(objeto)
comparaThis(global)
comparaThis(objeto)