const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
const novoEmail = (fullname) => {
  let emailNovo = `${fullname}@trybe.com.br`.toLowerCase()
  const resposta =
   {
    nome: fullname,
    email: emailNovo.replace(' ', '_'),
  }
  return resposta;
}
console.log(newEmployees(novoEmail));


// const gerarEmail = (fullname) => {
//   let email =`${fullname}@trybe.com.br`.toLowerCase()
//   let emailNovo = []
//   const resposta = {
//     nome: fullname,
//     email : emailNovo.join('')
//   }
//   for(let index = 0; index < email.length; index += 1){
//     if (email[index] === ' '){
//       continue;
//     } else {
//       emailNovo.push(email[index])
//     }
//   }
  
// }
