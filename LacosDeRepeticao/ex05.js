var prompt = require('prompt-sync')();
let num = 0;

do {
    console.log("+----------------+")    
    console.log("|                |")    
    console.log("| 1) Musica      |")    
    console.log("| 2) Jogo        |")    
    console.log("| 0) Sair        |")    
    console.log("|                |")    
    console.log("+----------------+")    
    num = Number(prompt(""))
} while (num !== 0);

console.log("Você escolheu a opção de sair")