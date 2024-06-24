const choices = ["pedra", "papel", "tesoura"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);

const userChoice = process.argv[2];

if (userChoice === "pedra" && computerChoice === "tesoura") {
  console.log(
    `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você ganhou!`
  );
} else if (userChoice === "tesoura" && computerChoice === "papel") {
  console.log(
    `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você ganhou!`
  );
} else if (userChoice === "papel" && computerChoice === "pedra") {
  console.log(
    `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você ganhou!`
  );
} else if (userChoice === computerChoice) {
  console.log(
    `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Empate!`
  );
} else {
  console.log(
    `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você perdeu!`
  );
}

/* switch (userChoice) {
  case userChoice === "pedra" && computerChoice === "tesoura":
    console.log(
      `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você ganhou!`
    );
    break;
  case userChoice === "tesoura" && computerChoice === "papel":
    console.log(
      `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você ganhou!`
    );
    break;
  case userChoice === "papel" && computerChoice === "pedra":
    console.log(
      `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você ganhou!`
    );
    break;
  case userChoice === computerChoice:
    console.log(
      `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Empate!`
    );
    break;
  default:
    console.log(
      `Você escolheu ${userChoice} e o computador escolheu ${computerChoice}. Você perdeu!`
    );
} */
