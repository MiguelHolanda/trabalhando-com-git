const readline = require("readline-sync")

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log("~~~~~~CONTADOR DE PASSOS~~~~~~~")
console.log("")

let passos = readline.question("Quantos passos você deu hoje?: ")
console.log("")
console.log("~~~~~~~~")
console.log("")

const meta = 10000
console.log(`meta diaria: ${meta} passos`)
console.log("")
console.log(`você deu: ${passos} passos `)
console.log("")

if(passos>=meta){
    console.log("meta diaria atingida")
    console.log("")
    console.log("~~~~~~~~")
    console.log("")
    let passaram = passos - meta
    console.log(`você utrapassou ${passaram} passos da sua meta `)
    console.log("")
    console.log("~~~~~~~")
    console.log("")
} else{
    console.log("meta não atingida")
    console.log("")
    console.log("~~~~~~~")
    console.log("")
    let faltam = meta - passos 
    console.log(`faltam ${faltam} passos para você atingir sua meta diaria`)
    console.log("")
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")