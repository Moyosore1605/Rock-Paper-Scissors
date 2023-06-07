const buttons = document.querySelectorAll('button');
const resultEl= document.querySelector('#result');
const showIcons1 = document.getElementById('showIcon1')
const showIcons2 = document.getElementById('showIcon2')
let playerScore = 0;
let computerScore = 0;
const playerScoreEl = document.querySelector('#userScore');
const computerScoreEl = document.querySelector('#computerScore');

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        const result = playRound(button.id, computerPlay());
        // displayChoice(button.id,computerPlay());
        resultEl.textContent = result;
    });
});

const computerPlay = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
};

const playRound = (playerSelection, computerSelection) => {
        if (playerSelection == 'rock') {
            showIcons1.innerHTML = '&#x1F44A;'
        }
        else if (playerSelection == 'paper') {
            showIcons1.innerHTML = '&#x1F590;'
        }
        else if (playerSelection == 'scissors') {
            showIcons1.innerHTML = '&#x270c;'
        }
        if (computerSelection == 'rock') {
            showIcons2.innerHTML = '&#x1F44A;'
        }
        else if (computerSelection == 'paper') {
            showIcons2.innerHTML = '&#x1F590;'
        }
        else if (computerSelection == 'scissors') {
            showIcons2.innerHTML = '&#x270c;'
        }
    if (playerSelection == computerSelection) {
        return 'It\'s a tie!';
    }
    else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'paper' && computerSelection == 'rock') || 
        (playerSelection == 'scissors' && computerSelection == 'paper')){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return `You win! Computer chose ${computerSelection} and ${playerSelection} beats ${computerSelection}.`;
    }
    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return `You lose! Computer chose ${computerSelection} and ${computerSelection} beats ${playerSelection}.`;
    }
}

