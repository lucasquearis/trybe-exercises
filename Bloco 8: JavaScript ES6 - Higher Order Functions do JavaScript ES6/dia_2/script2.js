const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => { 
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
}
console.log(findDivisibleBy3And5())