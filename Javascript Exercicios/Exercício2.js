//Concater x Interpolar
/*Vamos criar variaveis usando let, const e var, 
atribuir strings e vamos concatenar e interpolar.*/

//Aspas simples ' '
//Aspas duplas " "
//Template literals ``


let ola = "hello";
var mundo = "world";
const a = "!";


//concatenando
let conc = "x " + ola + mundo + a + " x";
console.log(conc);
//interpolando
let inter = `x ${ola}${mundo}${a} x`;
//let inter = `x ${ola + mundo + a} x`
console.log(inter);

