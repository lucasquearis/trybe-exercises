const { questionInt, questionFloat } = require('readline-sync');

const altura = questionInt('Qual sua altura? em cm  ');
const peso = questionFloat('Qual seu peso? em kg  ');


const calculaImc = () => {
  const resultado = (peso / (Math.pow(altura / 100, 2))).toFixed(2);
  console.log(`Esse é seu IMC: ${resultado}`)
  switch (true) {
    case (resultado < 18.5):
      console.log('Você está abaixo do peso');
      break;
    case (resultado >= 18.5 && resultado < 24.9):
      console.log('Você está com peso normal');
      break;
    case (resultado >= 25 && resultado < 29.9):
      console.log('Você está acima do peso');
      break;
    case (resultado >= 30 && resultado < 24.9):
      console.log('Você está em obesidade grau I');
      break;
    case (resultado >= 35 && resultado < 39.9):
      console.log('Você está em obesidade grau II');
      break;
    default:
      console.log('Você está em obesidade graus III e IV')
  }
};

calculaImc();