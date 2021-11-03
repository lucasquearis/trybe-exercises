const { questionInt, keyInYN } = require('readline-sync');

const sorteio = (numero, resposta) => resposta === numero ? console.log('Você acertou') : console.log(`Você errou o numero certo é ${resposta}`);

const game = () => {
  const numeroEscolhido = questionInt('Qual seu número favorito?  ');
  const numeroAleatorio = parseInt(Math.random() * 10);
  sorteio(numeroEscolhido, numeroAleatorio);
  const jogarNovamente = keyInYN('Você quer jogar novamente?')
  if(!jogarNovamente) {
    return console.log('Ok, até a próxima!')
  }
  game();
}

game();
