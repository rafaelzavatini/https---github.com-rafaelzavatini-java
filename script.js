function verificarPar(numero){
    if(numero % 2 === 0) {
        // === é estritamente igual, é igual em tipo e conteudo
        console.log('par');
    }else{
        console.log('impar');
    }
}

verificarPar (4);
verificarPar (11);

function calcular(n1,n2){
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1 / n2: 'Nao pode dividir por zero';
    const multiplicacao = n1 * n2

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);
}
   

let n1 = parseFloat(prompt("Digite seu primeiro numero:"));
let n2 = parseFloat(prompt("Digite seu segundo numero:"));
