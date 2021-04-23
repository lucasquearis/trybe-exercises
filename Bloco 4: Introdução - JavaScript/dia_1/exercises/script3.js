// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.

let valorA=3;
let valorB=3;
let valorC=3;

let maiorValor;

if (valorA>valorB&&valorA>valorC){
    maiorValor=valorA;
} else if(valorB>valorA&&valorB>valorC) {
    maiorValor=valorB;
} else {
    maiorValor=valorC;
}

console.log('O maior valor entre valorA, valor B, valor C é:')
console.log(maiorValor)