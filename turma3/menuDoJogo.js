/* crie um codigo com as pricipais funcionalidades do menu inicial de um game
• New Game, Load Game, Settings, Quit
*/

const prompt = require('prompt-sync')()

const options = Number (prompt('Escolha: 1(new game), 2(Load game), 3(Settings) e 4 para ( Quit): '))
switch (options)
{case 1:
    console.log('Bem vindo ao novo jogo')
    break
case 2:
    console.log('Aguarde um pouco, jogo em andamento...')
    break
case 3:
    console.log('Controle / som / dicas / voltar ao jogo')
    break
case 4:
    console.log('Bem vindo ao jogo. Você deseja: Continuar / novo jogo')
    break}
