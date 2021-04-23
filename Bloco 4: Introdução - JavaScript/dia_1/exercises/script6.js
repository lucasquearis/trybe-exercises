//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
//Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
//Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
//Exemplo: bishop (bispo) -> diagonals (diagonais)


//Peças:
//Rei >>  Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.
//Rainha >> Se move em diágonal e linhas retas
//Bispo >> Se movem apenas na diágonal, um fica na casa branca e outro na casa preta.
//Torre >> Se movem em linhas retas
//Cavalo >> Pula outras peças, se movimenta em L, captura na ultima posição
//Peão >> Primeira jogada anda 1 ou 2, 1 casa pra frente, captura na diagonal 1 casa, nunca anda pra trás.

let peca = 'BISPO'

let lowerCase = peca.toLowerCase();

switch (lowerCase) {
    case "rei":
        console.log('Se movimenta para qualquer lado ou direção, todavia somente de casa em casa.');
        break;

    case "rainha":
        console.log('Se move em diágonal e linhas retas');
        break;
    
    case "bispo":
        console.log('Se movem apenas na diágonal, um fica na casa branca e outro na casa preta.');
        break;

    case "torre":
        console.log('Se movem em linhas retas');
        break;
        
    case "cavalo":
        console.log('Pula outras peças, se movimenta em L, captura na ultima posição');
        break;

    case "peão":
        console.log('Primeira jogada anda 1 ou 2, 1 casa pra frente, captura na diagonal 1 casa, nunca anda pra trás.');
        break;

    default:
        break;
}

