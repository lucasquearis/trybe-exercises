const { questionInt } = require('readline-sync');

const numeroEscolhido = questionInt('Qual seu número favorito?  ');
const numeroAleatorio = parseInt(Math.random() * 10)

const sorteio = () => numeroAleatorio === numeroEscolhido ? 'Você acertou' : `Você errou o numero certo é ${numeroAleatorio}`;

console.log(sorteio());