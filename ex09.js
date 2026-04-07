const readline = require("readline-sync")
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log("~~~~~~~FRETE GRATIS~~~~~~~~")
console.log("")
console.log("~~~~~~~~~")
console.log("")
let compra = readline.questionFloat("valor da sua compra:")
console.log("")
console.log("~~~~~~~~~")
console.log("")
let gratis = 101
let faltam = gratis-compra
console.log("~~~FRETE GRATIS A PARTIR DE R$100")
console.log("")


if(compra >= gratis){
    console.log("você tem direito a frete gratis")
    console.log("")

}else{
    console.log("você  ainda não tem  direito ao  frete gratis")
    console.log("")
    console.log("~~~~~~~~~")
console.log("")
    console.log(`adicione mais R$${faltam} a sua compra para ter direito ao frete gratis`)
    console.log("")
console.log("~~~~~~~~~")
console.log("")
}

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")