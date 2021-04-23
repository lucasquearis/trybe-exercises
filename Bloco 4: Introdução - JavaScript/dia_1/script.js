let name ='Lucas';

const birthCity ='Curitiba';

let birthYear =1996;

birthYear = 2030

birthCity = 'São Paulo'

console.log(name);

console.log(birthCity);

console.log(birthYear);


let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

let base = 5;

let altura = 8;

let area = (base*altura);

console.log(area);

let perimetro = ((2*altura)+(2*base))

console.log(perimetro)

let nota = 60;

if (nota>=80){
    console.log('Parabéns, você foi aprovada(o)!');
} else if (nota<80&&nota>=60){
    console.log('Você está na nossa lista de espera')
} else if (nota <60){
    console.log('Você foi reprovada(o)')
} else {
    return;
}

let estado = "batata";

switch (estado){
    case"aprovada":
        console.log('Parabéns, você foi aprovada(o)!');
        break;

    case"lista":
        console.log('Você está na nossa lista de espera')
        break;

    case"reprovada":
        console.log('Você foi reprovada(o)')
        break;

    default:
        console.log('Não se aplica')
        break;
}