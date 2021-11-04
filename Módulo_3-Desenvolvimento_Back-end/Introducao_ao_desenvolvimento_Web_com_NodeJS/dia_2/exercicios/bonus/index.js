const { question } = require('readline-sync');
const fs = require('fs').promises;

const resposta = question('Escreva o nome do arquivo, ou caminho que deseja abrir:  ');

const executaArquivo = (param) => {
  fs.readFile(`${param}`, 'utf-8')
    .then(response => console.log(response))
    .catch(err => console.log(`Erro ao executar o arquivo: ${err.message}`));
}

executaArquivo(resposta);