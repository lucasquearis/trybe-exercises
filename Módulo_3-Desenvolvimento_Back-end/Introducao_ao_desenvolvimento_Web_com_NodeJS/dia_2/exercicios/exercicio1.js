const functionExercise = (param1, param2, param3) => {
  const p = new Promise((resolve, reject) => {
    if(typeof param1 !== "number" || typeof param2 !== "number" || typeof param3 !== "number"){
      reject(new Error("Informe apenas números"))
    }
    const resposta = (param1 + param2) * param3;
    resposta > 50 ? resolve(resposta) : reject(new Error("Valor muito baixo"))
  });
  return p;
}

const random = Math.floor(Math.random() * 100 + 1)

functionExercise(random, random, random)
  .then(result => console.log(result))
  .catch(err => console.log(err.message));