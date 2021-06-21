const { somar, subtrair, multiplicar, dividir } = require('./exercicioFixar');
const math = require('./exercicioFixar');
describe('testando as funcoes de operacoes matemáticas', () => {
  // Faça o mock da funcão subtrair e teste sua chamada.
  test('subtrair', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

  // Faça o mock da função multiplicar e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
  test('multiplicar', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);
    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  })

  // Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
  test('somar', () => {
    const mockSomar = jest.spyOn(math, "somar");
    mockSomar.mockResolvedValue(20);

    mockSomar(10, 10);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(10, 10);
    expect(mockSomar(10, 10)).resolves.toBe(20);
  })

    // Faça o mock da função dividir e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
    test('dividir', () => {
      math.dividir = jest.fn().mockReturnValue(15);
    })
})