function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
return getInput();
}
function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
return randomPlay();
}

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
if (playerMove === computerMove)
{
return 'Tie';
} else if (playerMove === 'rock' && computerMove === 'scissors')
{
return 'Player Wins';
} else if (playerMove === 'paper' && computerMove === 'rock')
{
return 'Player Wins';
} else if (playerMove === 'scissors' && computerMove === 'paper')
{
return 'Player Wins';
} else
return 'Computer Wins';
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors\n");
    var playerWins = 0;
    var computerWins = 0;
    var result;

    while (playerWins < 5 && computerWins < 5) {
        result = getWinner(getPlayerMove(), getComputerMove());

    if (result === 'Player Wins') {
        playerWins++;
        console.log('Player Wins!');
    }
    else if (result === 'Computer Wins') {
        computerWins++;
        console.log('Computer Wins!');
    }
    else {
        console.log('Tie!');
    }

    console.log([playerWins, computerWins]);

    }
    return [playerWins, computerWins];
}

playToFive();
