const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((buscador => buscador === name));
}

console.log(hasName(names, 'Ana'));