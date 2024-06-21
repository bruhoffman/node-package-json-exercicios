const escolhaUser = process.argv[2];
const numeroEscolhido = parseInt(process.argv[3]);

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const numeroComputador = getRndInteger(0, 5);

const soma = numeroEscolhido + numeroComputador;
const divisao = soma % 2;

switch (somaDivisao) {
    case (somaDivisao === 0 && escolhaUser === "par")
        console.log("Você escolheu par e o computador escolheu ímpar. o resultado") 

}