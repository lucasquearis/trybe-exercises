const wakeUp = () => 'Arcodando!!'
const coffeTime = () => 'Bora tomar café!!'
const sleep = () => ('Partiu dormir')

const doingThings = (func) => func();
// Ao chamar a função doingThings:
console.log(doingThings(sleep));

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!