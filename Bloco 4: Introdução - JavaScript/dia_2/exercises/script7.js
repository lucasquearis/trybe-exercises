let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let menorNumero = numbers[0];

for(index=0; index < numbers.length; index+=1){
  if(numbers[index]< menorNumero){
    menorNumero=numbers[index];
  }
}
console.log(menorNumero);