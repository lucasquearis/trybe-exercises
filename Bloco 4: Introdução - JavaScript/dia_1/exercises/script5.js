//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
//Um ângulo será considerado inválido se não tiver um valor positivo. 

let anguloUm = 60;
let anguloDois = 60;
let anguloTres = 60;

let somaAngulos= (anguloUm+anguloDois+anguloTres);

console.log(somaAngulos)

if(somaAngulos===180){
    console.log('true')
} else if(somaAngulos < 0) {
    console.log('Ângulo inválido')
} else {
    console.log('false')
}