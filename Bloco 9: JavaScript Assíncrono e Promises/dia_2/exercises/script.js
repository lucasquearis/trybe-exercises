const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array = [];
    for (let index = 1; index <= 10; index += 1) {
      array.push(Math.round(Math.random() * 50))
    }
    const novoArray = array
      .map((number) => Math.pow(number, 2))
        .reduce((acc, current) => acc + current,0);
        (novoArray > 8000) ? reject(novoArray) : resolve(novoArray)
  });

  const arrayCalculo = [2,3,5,10];
  promise
  .then((novoArray) => arrayCalculo.map((numb) => novoArray / numb))
  .then((novoArray) => novoArray.reduce((acc, current) => acc + current, 0))
    .catch((novoArray) => console
    .log(`É mais de oito mil! Essa promise deve estar quebrada! ${novoArray}`));
}

fetchPromise();