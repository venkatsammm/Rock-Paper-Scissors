const computerChoiceDisplay = document.getElementById('comp-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button.choice');
const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resetButton = document.getElementById('reset');

const possibleComputerChoices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let compScore = 0;

possibleChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        const userChoice = e.target.id;
        const computerChoice = getComputerChoice();

        userChoiceDisplay.innerHTML = getEmoji(userChoice) + " " + userChoice;
        computerChoiceDisplay.innerHTML = getEmoji(computerChoice) + " " + computerChoice;

        const result = getResult(userChoice, computerChoice);
        resultDisplay.innerHTML = result.text;
        resultDisplay.className = result.class;

        if (result.class === "YouWin") userScore++;
        else if (result.class === "YouLose") compScore++;

        userScoreSpan.textContent = userScore;
        compScoreSpan.textContent = compScore;
    });
});

resetButton.addEventListener('click', () => {
    userScore = 0;
    compScore = 0;
    userScoreSpan.textContent = 0;
    compScoreSpan.textContent = 0;
    userChoiceDisplay.innerHTML = '';
    computerChoiceDisplay.innerHTML = '';
    resultDisplay.innerHTML = '';
    resultDisplay.className = '';
});

function getComputerChoice() {
    return possibleComputerChoices[Math.floor(Math.random() * 3)];
}

function getResult(user, comp) {
    if (user === comp) return { text: "It's a tie", class: "tie" };
    if (
        (user === 'rock' && comp === 'scissors') ||
        (user === 'scissors' && comp === 'paper') ||
        (user === 'paper' && comp === 'rock')
    ) {
        return { text: "You Win!", class: "YouWin" };
    }
    return { text: "You Lose!", class: "YouLose" };
}

function getEmoji(choice) {
    switch (choice) {
        case 'rock': return '🪨';
        case 'paper': return '📄';
        case 'scissors': return '✂️';
        default: return '';
    }
}
