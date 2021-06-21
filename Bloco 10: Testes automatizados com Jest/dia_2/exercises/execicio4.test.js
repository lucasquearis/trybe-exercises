const { getRepos, API_URL } = require('./exercicio4');

describe('Testa a função getRepos', () => {
  it('retorna o nome do projeto', async () => {
    expect.assertions(2);

    const data = await getRepos(API_URL)
    expect(data).toContain('sd-01-week4-5-project-todo-list')
    expect(data).toContain('sd-01-week4-5-project-meme-generator')
  })
});