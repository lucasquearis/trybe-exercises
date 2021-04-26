//Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (index=0; index < numbers.length; index+=1){
    console.log(numbers[index])
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma = 0;


for (index=0; index < numbers.length; index+=1){
    var soma = numbers[index] + soma;
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma =0;

for(index=0; index< numbers.length; index+=1){
    var soma = numbers[index] + soma;
}
var media = soma / numbers.length

console.log(media);

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var soma =0;

for(index=0; index< numbers.length; index+=1){
    var soma = numbers[index] + soma;
}
var media = soma / numbers.length

console.log(media);
if (media > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('valor menor ou igual a 20')
}
