const { expect } = require('chai');

const testFunction = require('./exercicio.js')

describe('executa a função', () => {
  it('verifica se retorna uma string', () => {
    const resposta = testFunction();
    expect(resposta).to.be.a('string');
  })
  it('verifica numero neutro', () => {
    const resposta = testFunction(0);
    expect(resposta).to.be.equal('neutro')
  })
  it('verifica numero positivo', () => {
    const resposta = testFunction(1);
    expect(resposta).to.be.equal('positivo')
  })
  it('verifica numero negativo', () => {
    const resposta = testFunction(-1);
    expect(resposta).to.be.equal('negativo')
  })
  it('verifica se aceita algo além de números', () => {
    const resposta = testFunction('Trybe');
    expect(resposta).to.be.equal('por favor insira um número')
  })
})