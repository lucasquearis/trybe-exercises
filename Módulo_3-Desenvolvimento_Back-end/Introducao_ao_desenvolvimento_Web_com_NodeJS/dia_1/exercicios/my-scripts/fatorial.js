const { questionInt } = require('readline-sync');

const fatorial = (num) => {
  if(num === 0) return 'insira um número inteiro';
  if(num === 1) return 1;
  const resposta = num * fatorial(num - 1)
  return resposta;
}

const pergunta = questionInt('Você precisa saber o fatorial de qual número? ')
console.log(fatorial(pergunta));