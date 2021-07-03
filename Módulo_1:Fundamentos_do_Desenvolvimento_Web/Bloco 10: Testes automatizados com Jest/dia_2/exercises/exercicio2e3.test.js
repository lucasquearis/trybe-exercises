const { users, findUserById, getUserName } = require('./exercicio2e3');

describe('Testa funcao getUserName', () => {
  test('Verifica resultado da funcao' , () => {
    expect.assertions(1);
    return getUserName(4).then((data) => expect(data).toEqual('Mark'))
  })

  test('Verifica erro na funcao', () => {
    expect.assertions(1);
    return getUserName(1).catch((error) => expect(error).toEqual({ error: 'User with 1 not found.' }))
  })
  
  test('Verifica resultado da funcao' , async () => {
    expect.assertions(1);
    const data = await getUserName(4);
    expect(data).toEqual('Mark')
  })

  test('Verifica erro na funcao Async/Await', async () => {
    expect.assertions(1);
    try {
      await getUserName(2)
    } catch(error) {
      expect(error).toEqual({ error: 'User with 2 not found.' });
    }
  })
});