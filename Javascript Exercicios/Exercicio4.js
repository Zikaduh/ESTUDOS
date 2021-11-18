/*Crie um programa que me diga como lucrar nesta situação: 
quero vender uma bicicleta que 60% do 
seu valor é R$300, por quanto devo vendê-la para lucrar 25%?*/


let porc = 60;
let bicicleta = 300;
let lucro = 25;

let totalbike = (bicicleta * 100) / porc;
let lucrobike = totalbike * lucro / 100;

console.log(`Para você tirar ${lucro}% de lucro do total de ${totalbike},
você precisa vende a ${lucrobike + totalbike}, ganhando ${lucrobike} de lucro!`);