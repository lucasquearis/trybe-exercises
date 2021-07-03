const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// 1
assert.deepStrictEqual(obj1, obj2);
// 2
assert.notDeepStrictEqual(obj1, obj3);
// 3
assert.notDeepStrictEqual(obj2, obj3);