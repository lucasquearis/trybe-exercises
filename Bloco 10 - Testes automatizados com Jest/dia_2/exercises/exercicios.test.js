const { uppercase } = require('./exercicios');

describe('Testes exercicio 1', () => {
  test('Testar se retorna uma funcao', () => {
    expect.assertions(1);
    expect (typeof uppercase).toEqual('function');
  })

  test('Testar se retorna UPPERCASE', () => {
    expect.assertions(2);
    uppercase('lasanha é muito bom', (str) =>{
      expect(str).toBe('LASANHA É MUITO BOM');
    })
    uppercase('jon snow', (str) => {
      expect(str).toBe('JON SNOW');
    })
  })  
})