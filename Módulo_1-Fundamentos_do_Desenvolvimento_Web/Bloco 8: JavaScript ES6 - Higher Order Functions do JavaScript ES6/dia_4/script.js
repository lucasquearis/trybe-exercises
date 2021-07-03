const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = numbers.filter((number) => number % 2 === 0);
console.log(numerosPares.reduce((acc, current) => acc + current, 0));

console.log(numbers
  .reduce((acc, current) => (current % 2 === 0) ? current + acc : acc ,0));