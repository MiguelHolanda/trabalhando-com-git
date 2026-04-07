const readline = require("readline-sync")

let objetivo = 500

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log(">>>>>>>>>>>>>POUPANÇA<<<<<<<<<<<<")
console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")

let guardado = readline.questionFloat("quantos reais você gardou esse mês?: R$")

let diferenca = objetivo - guardado 

if(guardado >= objetivo ){
    console.log("você economizou o que esperava")
    console.log(`você guardou  R$${Math.abs(diferenca)} a mais do que esperava `)

} else {
    console.log("você não economizou o esperado")
    console.log(`você economizou R$${diferenca} a menos que o esperado`)
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")