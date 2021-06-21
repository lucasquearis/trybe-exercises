// Crie uma função que receba uma frase e retorne qual a maior palavra.

const longestWord = (frase) => {
  let resultado = ''
  let maior = 0;
  const palavra = frase.split(' ');
  for(let letra of palavra){
    if(letra.length > maior) {
      maior = letra .length;
      resultado = letra;
    }
  }
  return resultado;
}
longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
