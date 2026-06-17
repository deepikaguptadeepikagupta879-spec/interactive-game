let secretNumber = Math.floor(Math.random() * 10) + 1;

let lives = 3;
let attempts = 0;
let score = 0;

const guessInput = document.getElementById("guess");
const checkBtn = document.getElementById("checkBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");

const livesDisplay = document.getElementById("lives");
const attemptsDisplay = document.getElementById("attempts");
const scoreDisplay = document.getElementById("score");

checkBtn.addEventListener("click", () => {

    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 10) {
        message.textContent = "Enter a number between 1 and 10";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess === secretNumber) {

        score += 10;
        scoreDisplay.textContent = score;

        message.textContent = "🎉 Correct! You Win!";
        message.style.color = "green";

        checkBtn.disabled = true;

    } else {

        lives--;
        livesDisplay.textContent = lives;

        if (lives === 0) {

            message.textContent =
                `💀 Game Over! Number was ${secretNumber}`;
            message.style.color = "red";

            checkBtn.disabled = true;

        } else if (guess < secretNumber) {

            message.textContent = "📈 Too Low! Try Again";
            message.style.color = "orange";

        } else {

            message.textContent = "📉 Too High! Try Again";
            message.style.color = "orange";
        }
    }

    guessInput.value = "";
});

restartBtn.addEventListener("click", () => {

    secretNumber = Math.floor(Math.random() * 10) + 1;

    lives = 3;
    attempts = 0;
    score = 0;

    livesDisplay.textContent = lives;
    attemptsDisplay.textContent = attempts;
    scoreDisplay.textContent = score;

    message.textContent = "Start guessing...";
    message.style.color = "black";

    guessInput.value = "";

    checkBtn.disabled = false;
});