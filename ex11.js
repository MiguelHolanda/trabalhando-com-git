const readline = require("readline-sync")

let arquivo = 20
console.log("")
console.log("_________________________________________________________")
console.log("")
console.log("~~~~~carregando arquivo de 20Gb")
console.log("")
let baixado = readline.questionFloat("quantos  GB foram instaldos?:")

let porcentagem = (baixado/arquivo)*100
console.log("~~~~~~~~~")
console.log("")
console.log(`foram carregados ${porcentagem.toFixed(2)}% do arquivo `)
console.log("")
if(porcentagem==100){
    console.log("   ~arquivo carregado por completo~")
}else{
    console.log(`faltam ${100-porcentagem.toFixed(2)}% para o carregamento completo`)
}
console.log("_________________________________________________________")