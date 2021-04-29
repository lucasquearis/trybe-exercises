let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};
//Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
//Valor esperado no console: Bem-vinda, Margarida

console.log('Bem-vinda, ' + info.personagem);

//Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.
//Valor esperado no console:

for(key in info){
  console.log(key + ':' + info[key]);
}

for(index in info){
  console.log(info.index);
}