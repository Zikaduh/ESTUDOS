//Metedos de array

// array.map = 
//retorna uma nova array sem alterar a array original, criando uma copia
//com as alterações que desejamos


const alunas = ["Paula", "Maria", "Estela", "clara"];

alunas.map(aluna => console.log(aluna));


//array.filter
const numeros = [34, 35, 60, 200, 70, 80, 130, 20];


//numeros.filter(numero => numero % 2 != 0 ? console.log(`${numero} impar`) : console.log(`${numero} par`))

const numimpar = numeros.filter(numero => numero % 2 != 0)
console.log(numimpar)

//array.find
// ele encontra e retorna o primeiro elemento achado

const produtos = ["geladeira", "mesa", "fogão", "cama"];

const buscar = produtos.find(find => find == "cama")

console.log(buscar)


//array.sort
//ordernar um array;
console.log(numeros.sort())
//[130, 20, 200, 34, 35, 60,  70, 80]
const numeroorder = numeros.sort((a, b) => a - b)
console.log(numeroorder)

//array.reduce 
//ele reduz o array a um resultado de operação matematica

const soma = numeros.reduce((a, b) => 
{ return a + b})

console.log(soma)

