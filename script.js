// § FIRST and LAST step: wrapping the code into a for loop
// § step 1: get computer choice and defining global scoring variable

// player and computer score variables to store score
let computerScore = 0;
let playerScore = 0;

for (let i = 1; i <= 5; i++) {
  function computer(choices) {
    // get random index from array
    const randomIndex = Math.floor(Math.random() * choices.length);
    // get random item from array
    const item = choices[randomIndex];

    return item;
  }

  // defining the array and saving computer choice
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = computer(choices);

  // § step 2: get player choice

  // prompting the user to choose
  let player = prompt('Please make your choice!');
  // saving player choice and making it case-insensitive
  let playerChoice = player.toLowerCase();

  // § step 3: game logic

  // simple if logic to determine winner and incrementing score
  const round = (computerChoice, playerChoice) => {
    if (computerChoice === 'rock') {
      if (playerChoice === 'rock') {
        return 'Draw!';
      }

      if (playerChoice === 'paper') {
        return 'Player has won the round!' && playerScore++;
      }

      if (playerChoice === 'scissors') {
        return 'Computer has won the round!' && computerScore++;
      }
    }

    if (computerChoice === 'paper') {
      if (playerChoice === 'rock') {
        return 'Computer has won the round!' && computerScore++;
      }

      if (playerChoice === 'paper') {
        return 'Draw!';
      }

      if (playerChoice === 'scissors') {
        return 'Player has won the round!' && playerScore++;
      }
    }

    if (computerChoice === 'scissors') {
      if (playerChoice === 'rock') {
        return 'Player has won the round!' && playerScore++;
      }

      if (playerChoice === 'paper') {
        return 'Computer has won the round!' && computerScore++;
      }

      if (playerChoice === 'scissors') {
        return 'Draw!';
      }
    }
  };

  // logging the chosen artifact after scoring to avoid cheating
  console.log(`The Computer chose ${computerChoice}.`);
  console.log(`The player chose ${playerChoice}.`);

  // calling on the round function to play a round
  // ! removed clg for round, it logged a 0 or a 1, don't know why
  round(computerChoice, playerChoice);
  console.log(`Player score is ${playerScore}, computer score is ${computerScore}.`);
}
// § step 4: logging and comparing player and computer score and announcing winner

if (playerScore > computerScore) {
  console.log('The player has won the game!');
} else if (playerScore < computerScore) {
  console.log('The computer has won the game!');
} else {
  console.log("It's a draw!");
}
