//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = -22;
let notaLetra;

if(nota < 0 || nota > 100){
  console.log('Erro nota inválida, utilize uma nota entre 0 e 100');
}else if(nota>=90){
  notaLetra='A';
}else if(nota >= 80){
  notaLetra='B';
}else if(nota >= 70){
  notaLetra='C';
}else if(nota >= 60){
  notaLetra='D';
}else if(nota >= 50){
  notaLetra='E';
}else if(nota < 50){
  notaLetra='F';
}else {
  return;
}

console.log(notaLetra);