// const arr = [1, 2, 3, 4, 5];

// function getItem(arr) {
//   const randomIndex = Math.floor(Math.random() * arr.length);

//   const item = arr[randomIndex];

//   return item;
// }

// const result = getItem(arr);
// console.log(result);

// § step 1: get computer choice

function computer(choices) {
  // get random index from array
  const randomIndex = Math.floor(Math.random() * choices.length);
  // get random item from array
  const item = choices[randomIndex];

  return item;
}

const choices = ['rock', 'paper', 'scissors'];
const computerChoice = computer(choices);
console.log(computerChoice);

// § step 2: get player choice

let player = prompt('Please make your choice!');
let playerChoice = player.toLowerCase();
console.log(playerChoice);

// § step 3: game logic

const round = (computerChoice, playerChoice) => {
  if (computerChoice === 'rock') {
    if (playerChoice === 'rock') {
      return 'Draw!';
    }

    if (playerChoice === 'paper') {
      return 'Player won!';
    }

    if (playerChoice === 'scissors') {
      return 'Computer won!';
    }
  }

  if (computerChoice === 'paper') {
    if (playerChoice === 'rock') {
      return 'Computer won!';
    }

    if (playerChoice === 'paper') {
      return 'Draw!';
    }

    if (playerChoice === 'scissors') {
      return 'Player won!';
    }
  }

  if (computerChoice === 'scissors') {
    if (playerChoice === 'rock') {
      return 'Player won!';
    }

    if (playerChoice === 'paper') {
      return 'Computer won!';
    }

    if (playerChoice === 'scissors') {
      return 'Draw!';
    }
  }
};

console.log(round(computerChoice, playerChoice));
// if logic for incrementing player/computer score

// comparing player and computer score and announcing winner
