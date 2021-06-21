const fatorial = (numero) => {
  let resultado = numero;
  let primeiroMultiplicador = numero -1;
  for (let index = primeiroMultiplicador; index > 1; index --){
    resultado = resultado * index;
  }
  console.log(resultado);
}

fatorial(5);