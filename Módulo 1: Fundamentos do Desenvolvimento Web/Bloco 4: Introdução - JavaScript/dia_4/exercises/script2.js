ehPelindromo('oie')

function ehPelindromo(palavra){
let separarPalavra = palavra.split('');
for(let index in separarPalavra){
  console.log(separarPalavra[index])
}

}

console.log(ehPelindromo())
