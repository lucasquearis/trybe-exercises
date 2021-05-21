const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
// 1
assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
// 2
assert.strictEqual(myFizzBuzz(9), 'fizz');
// 3
assert.strictEqual(myFizzBuzz(10), 'buzz');
// 4
assert.strictEqual(myFizzBuzz(1), 1)
// 5
assert.strictEqual(myFizzBuzz('xablau'), false)
