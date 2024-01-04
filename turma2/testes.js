// function verificaNum(num) {
//     if (num > 0)
//         console.log("Positivo")
//     else
//         if(num < 0)
//             console.log("Negativo");
//         else
//             console.log("Zero");
// }

// verificaNum(5)
// verificaNum(-2)
// verificaNum(0)

function verificaNum(a, b, decisao) {
    switch (decisao) {
        case 1:
            console.log(a + b);
            break;
        case 2:
            console.log(a - b);
            break;
        default:
            console.log(a * b);
    }
}
verificaNum(2, 5, 1)
verificaNum(5, 2, 2)
verificaNum(5, 2)
verificaNum(4, 4, 5)

