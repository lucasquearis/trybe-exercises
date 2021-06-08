const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce((acc, current) => 
    acc + current.split('').reduce((acumulador, atual) => {
      if(atual.toLowerCase() === 'a'){
        return acumulador + 1;
      }
      return acumulador;
    },0),0);
}

assert.deepStrictEqual(containsA(), 20);