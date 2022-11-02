/*1. Escreva um algoritmo que pergunte ao usuário se ele está com fome e se ele tem
dinheiro, guarde as respostas separadamente. Com base nas respostas do usuário:
a. Se ele estiver com fome E com dinheiro, exiba uma mensagem
recomendando uma lanchonete.
b. Se não estiver com fome OU não tiver dinheiro, exiba uma mensagem
informando que é melhor ele comer em casa.*/

var fome = prompt("Voce esta com fome? se sim 'S', se nao 'N'")
var dinheiro = prompt(" voce tem dinheiro? ")

if( fome == "s" && dinheiro == "s" ){
    console.log(" Vamos comer no mc lanche")
}if(fome == "n" || dinheiro == "n"){
console.log( " Melhor comer na casa ")    
}
