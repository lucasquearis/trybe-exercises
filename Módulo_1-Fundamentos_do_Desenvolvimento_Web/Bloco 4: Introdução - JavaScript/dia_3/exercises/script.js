let n = 5

let linha = '';

for(let index = 0; index < n; index += 1){
  linha = linha + '*'
}

for(index = 0; index < n ; index += 1){
  if (n > 1){
    console.log(linha)
  }
}