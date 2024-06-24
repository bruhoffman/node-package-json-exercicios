const escolhaUser = process.argv[2];
const numeroEscolhido = parseInt(process.argv[3]);

let escolhacomputador = "";

if (escolhaUser === "par") {
  escolhacomputador = "ímpar";
} else {
  escolhacomputador = "par";
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const numeroComputador = getRndInteger(0, 5);

const soma = numeroEscolhido + numeroComputador;
const divisao = soma % 2;

/* console.log(`EscolhaComputador: ${escolhacomputador}`);
console.log(`NumeroComputador: ${numeroComputador}`);
console.log(`Resto da divisão: ${divisao}`); */

if (divisao === 0 && escolhaUser === "par") {
  console.log(
    `Você escolheu par e o computador escolheu ímpar. O resultado foi ${soma}, você ganhou!`
  );
} else if (divisao === 1 && escolhaUser === "ímpar") {
  console.log(
    `Você escolheu ímpar e o computador escolheu par. O resultado foi ${soma}, você ganhou!`
  );
} else {
  console.log(
    `Você escolheu ${escolhaUser} e o computador escolheu ${escolhacomputador}. O resultado foi ${soma}, você perdeu!`
  );
}
