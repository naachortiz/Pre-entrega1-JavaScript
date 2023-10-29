// Variables
let score = 0;
const maxAttempts = 3;
const minNumber = 1;
const maxNumber = 10;

// Función - número aleatorio
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función del juego
function playGame() {
  for (let attempts = 0; attempts < maxAttempts; attempts++) {
    const randomNumber = generateRandomNumber(minNumber, maxNumber);
    const userGuess = parseInt(prompt(`Intento ${attempts + 1} - Adivina el número entre ${minNumber} y ${maxNumber}:`));

    if (userGuess === randomNumber) {
      alert('¡Adivinaste! Has ganado un punto.');
      score++;
      break;
    } else if (userGuess < randomNumber) {
      alert('El número es mayor. Inténtalo de nuevo.');
    } else {
      alert('El número es menor. Inténtalo de nuevo.');
    }
  }

  if (score > 0) {
    console.log(`Has ganado ${score} punto(s).`);
  } else {
    console.log('No has ganado puntos en este juego.');
  }
}

confirm('Bienvenido al juego de adivinanza. ¿Deseas comenzar?') ? playGame() : alert('Hasta luego.');