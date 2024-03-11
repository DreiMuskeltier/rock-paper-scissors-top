// player and computer score variables to store score
let computerScore = 0;
let playerScore = 0;

// get random choice from computer
function computer(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const choices = ['rock', 'paper', 'scissors'];

// § step: for loop for the game
for (let i = 1; i <= 5; i++) {
  // step: getting computer choice
  const computerChoice = computer(choices);

  // step: get player choice
  let playerChoice = prompt('Please make your choice!').toLowerCase();
  if (playerChoice !== 'rock' || 'paper' || 'scissors') {
    prompt('Please make a valid choice (rock, paper, scissors)!');
  }

  // § step: game logic

  // simple if logic to determine winner and incrementing score
  const round = (computerChoice, playerChoice) => {
    if (
      (computerChoice === 'rock' && playerChoice === 'paper') ||
      (computerChoice === 'paper' && playerChoice === 'scissors') ||
      (computerChoice === 'scissors' && playerChoice === 'rock')
    ) {
      console.log('Player has won the round!');
      playerScore++;
    } else if (
      (computerChoice === 'rock' && playerChoice === 'scissors') ||
      (computerChoice === 'paper' && playerChoice === 'rock') ||
      (computerChoice === 'scissors' && playerChoice === 'paper')
    ) {
      console.log('The Computer has won the round!');
      computerScore++;
    } else {
      console.log('Draw!');
    }
  };

  // logging the chosen artifact after scoring to avoid cheating
  console.log(`The Computer chose ${computerChoice}.`);
  console.log(`The player chose ${playerChoice}.`);

  // calling on the round function to play a round
  round(computerChoice, playerChoice);
  console.log(
    `Player score is ${playerScore}, computer score is ${computerScore}.`
  );
}
// § step: logging and comparing player and computer score and announcing winner

if (playerScore > computerScore) {
  console.log('The player has won the game!');
} else if (playerScore < computerScore) {
  console.log('The computer has won the game!');
} else {
  console.log("It's a draw!");
}
