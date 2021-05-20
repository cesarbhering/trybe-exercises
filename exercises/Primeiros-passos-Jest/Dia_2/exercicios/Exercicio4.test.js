const getRepos = require('./Exercicio4');
const { test, expect } = require('@jest/globals');

describe('Testes solicitados exercício 4', () => {
  test('verifique que os repositórios "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" se encontram nessa lista.', async () => {
    return getRepos('https://api.github.com/orgs/tryber/repos').then((reposList) => {
      expect(reposList).toContain('sd-01-week4-5-project-todo-list');
      expect(reposList).toContain('sd-01-week4-5-project-meme-generator');
    })
  })
})