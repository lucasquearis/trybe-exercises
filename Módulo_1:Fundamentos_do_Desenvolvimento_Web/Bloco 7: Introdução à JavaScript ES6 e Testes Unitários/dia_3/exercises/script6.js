const assert = require('assert');
// escreva a função addOne aqui
const addOne = (myArray) => {
  let resposta = [];
  for(let index = 0; index < myArray.length; index += 1){
    const elemento = myArray[index] + 1
    resposta.push(elemento);
  }
  return resposta;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);
