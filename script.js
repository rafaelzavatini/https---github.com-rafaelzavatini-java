function verificarPar(numero){
    if(numero % 2 === 0){
        console.log("par");

    }else{
        console.log("impar");

    }

}

verificarPar(4)
verificarPar(7)


function calcular(n1, n2){
    const soma = n1 + n2;
    const subtracao = n1 - n2;
    const divisao = n2 !== 0 ? n1/n2: "nao dive";
    const multiplicacao = n1 * n2;

    console.log(soma);
    console.log(subtracao);
    console.log(divisao);
    console.log(multiplicacao);
}

let n1 = parseFloat(prompt("digite o n1"));
let n2 = parseFloat(prompt("digite o n2"));

calcular(n1,n2);

let numero = 10;
let delay =0;
while (numero >=1){
    console.log(numero);
    numero--;
}





function inverterTexto(texto) {
    return texto.split('').reverse().join('');
}

console.log(inverterTexto("JavaScript")); 






function contarCaracteres(texto) {
    return texto.length;
}

console.log(contarCaracteres("Eai_bom"));





const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

console.log(carro.marca);
console.log(carro.ano);
console.log(carro.modelo);






function mensagemPersonalizada(nome, mensagem = "Olá!") {
    console.log(`${mensagem} ${nome}`);
}


mensagemPersonalizada("Éwerton"); 

mensagemPersonalizada("Éwerton", "Boa noite!"); 






function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

console.log(media(7, 8, 9));






for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        console.log(`${i}: Múltiplo de 3`);
    } else {
        console.log(`${i}: Não múltiplo de 3`);
    }
}





function verificarPalindromo(palavra) {
    let invertida = palavra.split('').reverse().join('');
    return palavra === invertida;
}


console.log(verificarPalindromo("hello")); 

console.log(verificarPalindromo("arara")); 







function atividade14(){

    console.log

    let texto = prompt('Digite texto palavra azul');

    console.log(texto.replace)
}





let myString = "campainhas";

myString.length = 4;
console.log(myString);

console.log(myString.length);

