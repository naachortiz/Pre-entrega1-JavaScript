document.addEventListener('DOMContentLoaded', function () {
    const inputData = document.getElementById('inputData');
    const submitButton = document.getElementById('submitButton');
    const outputResult = document.getElementById('outputResult');
    const scoreDisplay = document.getElementById('score');
    const alertMessage = document.getElementById('alertMessage');
    const restartButton = document.getElementById('restartButton');
    const difficultySelect = document.getElementById('difficulty');
  
    // Pregunta el nombre del usuario
    const userName = prompt('¡Hola! Ingresa tu nombre:');
  
    // Muestra el mensaje de bienvenida en la alerta y el cuadro de texto
    if (userName) {
      const welcomeMessage = `Bienvenido, ${userName}!`;
      displayAlert(welcomeMessage);
      alert(welcomeMessage);  
    }
  
    let score = 0;
    let maxAttempts = 3;
    let minNumber = 1;
    let maxNumber = 10;
    let targetNumber;
  
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
        targetNumber = generateRandomNumber(minNumber, maxNumber);
        maxAttempts = 3;
        outputResult.innerHTML = '';
        scoreDisplay.textContent = `Puntuación: ${score}`;
        displayAlert(`Nivel ${maxNumber - minNumber + 1}: Adivina el número entre ${minNumber} y ${maxNumber}`);
    }
  
    function checkGuess(userGuess) {
        maxAttempts--;
  
        if (userGuess === targetNumber) {
            displayAlert(`¡Adivinaste! Has ganado ${maxAttempts + 1} puntos.`);
            score += maxAttempts + 1;
            startGame();
        } else {
            const message = userGuess < targetNumber ? 'El número es mayor.' : 'El número es menor.';
            displayAlert(`${message} Intentos restantes: ${maxAttempts}`);
            outputResult.innerHTML += `<p>Intento ${maxAttempts + 1}: ${userGuess}</p>`;
  
            if (maxAttempts === 0) {
                displayAlert(`¡Agotaste tus intentos! El número correcto era ${targetNumber}.`);
                startGame();
            }
        }
  
        console.log(`Puntuación acumulativa: ${score}`);
    }
  
    function generateRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    function displayAlert(message) {
        alertMessage.textContent = message;
        setTimeout(() => {
            alertMessage.textContent = '';
        }, 4000); // Ocultar el mensaje después de 4 segundos
    }
  
    startGame();
  });
  

