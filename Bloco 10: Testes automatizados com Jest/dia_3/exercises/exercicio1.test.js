const math = require('./exercicio1');

describe('testando operacoes matematicas', () => {
  test('requisito 1', () => {
    expect.assertions(2);

    math.random = jest.fn()
      .mockReturnValueOnce(0.1)
    expect(math.randomNumberBetween100(math.random)).toBe(10);
    expect(math.random).toHaveBeenCalledTimes(1);
  })

  // Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.
  test('requisito 2', () => {
    expect.assertions(4);
    math.random = jest.fn().mockImplementationOnce((a, b) => a / b);
    expect(math.random(10, 5)).toBe(2);
    expect(math.random).toHaveBeenCalledWith(10, 5);
    expect(math.random).toHaveBeenCalled();
    expect(math.random).toHaveBeenCalledTimes(1);
  })
})