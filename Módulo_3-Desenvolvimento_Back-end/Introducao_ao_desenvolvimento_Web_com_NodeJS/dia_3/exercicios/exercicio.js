const verificaNumero = (param) => {
  if(param > 0) return 'positivo';
  if(param < 0) return 'negativo';
  if(param === 0) return 'neutro';
  if(typeof param !== 'number') return 'por favor insira um número'
  return 'insira algum número';
}

module.exports = verificaNumero;