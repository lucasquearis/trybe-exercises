const aleatorio = () => Math.ceil(Math.random()*5);

const sorteio = (numero, funcao) => {
  if (funcao === numero) {
    return 'PARABENS você fanhou!!'
  }
  return 'Tente outra vez!'
}
console.log(sorteio (5, aleatorio));