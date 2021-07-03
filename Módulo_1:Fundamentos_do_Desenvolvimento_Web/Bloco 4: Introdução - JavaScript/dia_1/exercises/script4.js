//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let valor=0

if(valor>0){
    console.log('O valor é positivo.');
} else if(valor<0){
    console.log('O valor é negativo');
} else if(valor==0){
    console.log('O valor é zero');
} else {
    return;
}