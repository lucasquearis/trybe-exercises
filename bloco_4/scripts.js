const name = "Lucas";

const birthCity = "Curitiba";

let birthYear = 1996;

console.log(name);
console.log(birthCity);
console.log(birthYear);

birthYear=2030;

console.log(birthYear)

birthCity="SJP"

console.log(birthCity);

// Parte 4

let nota = 1000

if (nota >= 80 ){

    console.log('Parabéns, você foi aprovada(o)')
} else if (nota < 80 && nota >= 60) {

    console.log('Você está na nossa lista de espera')
} else if (nota < 60)  {
    
    console.log('Você foi reprovada(o)')
} else {
    return;
}