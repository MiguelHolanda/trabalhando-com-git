const readline = require("readline-sync")

let nick = readline.question("digite seu nickname:")
let jogoFavorito = readline.question(" qual seu jogo favorito:")
let  score = readline.questionInt("pontuação atual nele: ")
console.log('')
console.log('~~~~~GAME LOUNCHER~~~~~')
console.log('')
console.log(`apelido do player: ${nick}`)
console.log(`jogo favorito: ${jogoFavorito}`)
console.log(`pontuação atual: ${score}`)
console.log('')
console.log("_____GOOD GAME_____")

