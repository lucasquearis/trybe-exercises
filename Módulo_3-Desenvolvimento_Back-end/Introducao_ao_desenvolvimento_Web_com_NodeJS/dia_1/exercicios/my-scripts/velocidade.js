const { questionInt } = require('readline-sync')

console.log('eu sou a velocidade')

const metros = questionInt('Qual a distância em metros?  ');
const tempo = questionInt('Qual é o tempo até chegar ao destino?  ');

const calculaVelocidadeMedia = () => metros / tempo;

console.log(calculaVelocidadeMedia());