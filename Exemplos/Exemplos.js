//interpolação
let nome = "jão";
console.log(`ola ${nome}`);

//operador ternario

function calcularidade(idade)
{
    //return fica subentendido
    return idade <= 18 ? 'menor de idade' : 'maior de idade'
}
console.log(calcularidade(20))


//arrow function

// se for mais de uma linha, vai ter que abrir um escopo "{}""
const func = (a, b) => a + b;
console.log(func(2, 4))


//array
const array = ["oi", "ola", "hello"]

//operador spread (...)
//ele pega o conteudo de um array e adiciona em outro
const array2 = [...array, "world"]
console.log(array2)


//metodo de interação
for(let i = 0; i < array2.length; i++)
    console.log(array2[i])

//usando outro metedo do array/ usando arrow function
array2.forEach(element => console.log(element)) 











