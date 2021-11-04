const fs = require('fs').promises;
const simpsons = require('./simpsons.json')

fs.readFile('./simpsons.json', 'utf-8')
  .then((file) => {
    return JSON.parse(file)
  })
  .then((simpsons) => simpsons.forEach(({id, name}) => console.log(`${id} - ${name}`)));

const verificaId = (id) => {
  const promise = new Promise((resolve, reject) => {
    const resposta = simpsons.find((simpson) => simpson.id === id);
    if(!resposta) reject(new Error('nenhum personagem encontrado'))
    resolve(resposta);
  });
  return promise;
}

// verificaId('10')
//   .then(response => console.log(response))
//   .catch(err => console.log(err.message))

const tiraSimpsons = (id1, id2) => {
  const filteredSimpsons = simpsons.filter(({id}) => id !== id1 && id !== id2);
  fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons))
    .then(() => console.log('Arquivo escrito com sucesso!!'))
    .catch(err => console.log(`Erro ao escrever o arquivo ${err.message}`));
};

const criaFamily = () => {
  const filteredSimpsons = simpsons.filter(({id}) => id <= 4);
  fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredSimpsons))
    .then(() => console.log('Arquivo escrito com sucesso!'))
    .catch(err => console.log(`Erro ao escrever o arquivo ${err.message}`))
};

const addNelson = async () => {
  const arquivo = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((file) => JSON.parse(file));
  arquivo.push({id: '5', name: 'Nelson Muntz'})
  fs.writeFile('./simpsonFamily.json', JSON.stringify(arquivo))
    .then(console.log('Arquivo escrito com sucesso!!'))
    .catch(err => console.log(`Erro ao escrever o arquivo: ${err.message}`))
}

const replaceNelson = async () => {
  const familyArray = await fs
    .readFile('./simpsonFamily.json', 'utf-8')
    .then((file) => JSON.parse(file));
  const filteredArray = familyArray.filter(({ id }) => id !== '5');
  filteredArray.push({id: '5', name: 'Maggie Simpson'});
  fs.writeFile('./simpsonFamily.json', JSON.stringify(filteredArray))
    .then(console.log('Arquivo escrito com sucesso!!'))
    .catch(err => console.log(`Erro ao escrever o arquivo : ${err.message}`))
}

const functionArrayPromise = async () => {
  const arrayString = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  const createPromises = arrayString.map((string, index) => {
    fs.writeFile(`file${index + 1}.txt`, string)
  });
  const files = ['file1.txt', 'file2.txt', 'file3.txt', 'file4.txt', 'file5.txt'];

  const fileReader =  await Promise.all(
    files.map((name) => fs.readFile(name, 'utf-8'))
  );
  const newFile = fileReader.join(' ');
  await fs.writeFile('./fileAll.txt', newFile);
}

