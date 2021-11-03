const { questionInt } = require('readline-sync');

console.log(
  `
    Olá bem vindos ao meu script, escolha o que quer ver:
    1- Calcule seu IMC.
    2- Calculadora Velocidade Média.
    3- Sorteio.

  `
)
const questao = questionInt('Qual a sua opção?  ');

switch (questao) {
  case 1:
    require('./imc.js')
    break;
  case 2:
    require('./velocidade.js')
    break;
  case 3:
    require('./sorteio')
    break;
  default:
    console.log('escolha uma opção valida!')
}