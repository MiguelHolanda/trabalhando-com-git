const readline = require("readline-sync")

let meta = 40
console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
let estudado = readline.questionFloat("quantas horas você estudou esse mês?:")
let diferenca = meta - estudado

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log(">>>>>>>>>>>>>>>>>>PLANILHA DE ESTUDOS<<<<<<<<<<<<<<")
console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log(`sua meta mensal é de ${meta} hoaras`)
console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log(`você estudou ${estudado} horas esse mês`)
console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")






if(estudado>=meta){
    console.log("você atingiu sua meta de estudos!!")
    console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")

    console.log(`você estudou ${Math.abs(diferenca)} horas a mais que sua meta`)
}else{
    console.log("você não atingiu sua meta de estudos")
    console.log("")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
    console.log(`faltam ${diferenca}  horas para atingir sua meta`)
    console.log("")
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")