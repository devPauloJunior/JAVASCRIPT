const somar = require("./funcoes.js")

somar(2, 4)
somar(3, 9)
somar(5, 6)
somar(6, 3)
somar('7', '5')
somar('Paulo', ' Junior')

const prompt = require('prompt-sync')()
const deMaior = require("./funcoes.js")

const idade = Number(prompt('Informe sua idade: '))
deMaior(idade)