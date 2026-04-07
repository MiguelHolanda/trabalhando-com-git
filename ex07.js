const readline = require("readline-sync")

let aprovado = 7

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
console.log("")
console.log("==============FECHAMENTO DE NOTAS==============")
console.log("")
console.log("~~~~~~~~~~~~~~~")
console.log("")

let nota = readline.questionFloat("qual foi sua  nota final?:")
console.log("")
console.log("~~~~~~~~~~~~~~~")
console.log("")


if(nota>=aprovado){
    console.log("aluno aprovado")
    console.log("")

}else{
    console.log("aluno reprovado")
    console.log("")
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
