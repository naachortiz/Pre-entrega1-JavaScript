document.addEventListener('DOMContentLoaded', function () {
    const inputData = document.getElementById('inputData');
    const submitButton = document.getElementById('submitButton');
    const outputResult = document.getElementById('outputResult');
    const scoreDisplay = document.getElementById('score');
    const alertMessage = document.getElementById('alertMessage');
    const restartButton = document.getElementById('restartButton');
    const difficultySelect = document.getElementById('difficulty');

    const game = {
        score: 0,
        maxAttempts: 3,
        minNumber: 1,
        maxNumber: 10,
        targetNumber: 0,
    };

    submitButton.addEventListener('click', function () {
        const userGuess = parseInt(inputData.value);

        if (!isNaN(userGuess)) {
            checkGuess(userGuess);
        } else {
            displayAlert('Por favor, ingresa un número válido.');
        }
    });

    restartButton.addEventListener('click', function () {
        startGame();
    });

    function startGame() {
        const selectedDifficulty = difficultySelect.value;
        setDifficultyRange(selectedDifficulty);

        game.targetNumber = generateRandomNumber(game.minNumber, game.maxNumber);
        game.maxAttempts = 3;
        outputResult.innerHTML = '';
        scoreDisplay.textContent = `Puntuación: ${game.score}`;
        displayAlert(`Nivel ${selectedDifficulty}: Adivina el número entre ${game.minNumber} y ${game.maxNumber}`);
    }

    function setDifficultyRange(difficulty) {
        switch (difficulty) {
            case '1':
                game.minNumber = 1;
                game.maxNumber = 10;
                break;
            case '2':
                game.minNumber = 1;
                game.maxNumber = 50;
                break;
            case '3':
                game.minNumber = 1;
                game.maxNumber = 100;
                break;
            default:
                game.minNumber = 1;
                game.maxNumber = 10;
        }
    }

    function checkGuess(userGuess) {
        game.maxAttempts--;

        if (userGuess === game.targetNumber) {
            game.score += game.maxAttempts + 1;
            outputResult.innerHTML += `<p class="success">¡Felicidades! Has adivinado el número correcto: ${userGuess}</p>`;
            alert(`¡Felicidades! Has adivinado el número correcto: ${userGuess}`);
            startGame();
            return;
        }

        const message = userGuess < game.targetNumber ? 'El número es mayor.' : 'El número es menor.';
        displayAlert(`${message} Intentos restantes: ${game.maxAttempts}`);

        outputResult.innerHTML += `<p>Intento ${3 - game.maxAttempts}: ${userGuess}</p>`;

        if (game.maxAttempts === 0) {
            displayAlert(`¡Agotaste tus intentos! El número correcto era ${game.targetNumber}.`);
            alert(`¡Agotaste tus intentos! El número correcto era ${game.targetNumber}.`);
            startGame();
        }

        console.log(`Puntuación acumulativa: ${game.score}`);
    }

    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function displayAlert(message) {
        alertMessage.textContent = message;
        setTimeout(() => {
            alertMessage.textContent = '';
        }, 5000);
    }

    startGame();
});

  

