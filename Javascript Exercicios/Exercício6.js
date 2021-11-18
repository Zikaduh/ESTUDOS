/*Crie um programa que me diga quanto cobrar para vender um notebook usado:
 o seu custo foi R$3000, por quanto devo vendê-lo descontando 25%?*/



 let valor = 3000;
 let desconto = 25;

 let calc = valor - (valor * desconto / 100)

 console.log(`Deve ser vendido a ${calc}!`)