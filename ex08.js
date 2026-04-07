const readline = require("readline-sync")

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log(">>>>>>>>CADRASTO DE ENTRADA<<<<<<<<<")
console.log("")
console.log("~~~~~~~~~~~")
console.log("")
let idade = readline.questionInt("informe sua idade:")
console.log("")
console.log("~~~~~~~~~~~")
console.log("")
if(idade>=18){
    console.log("entrada permitida")
    console.log("")
    
}else{
    console.log("entrada negada")
    console.log("")
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")