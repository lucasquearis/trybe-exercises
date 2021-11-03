const { questionInt } = require('readline-sync');

const fibonacci = (num) => {
  if(num < 2) return num;
  const resposta = fibonacci(num - 1) + fibonacci(num - 2);
  return resposta;
}

const pergunta = questionInt('Qual o número você quer saber a sequencia de fibonacci? ');
if(pergunta <= 0) {
  console.log('Insira um número positivo');
}
for(let i = 0; i < pergunta; i += 1) {
  console.log(fibonacci(i))
}