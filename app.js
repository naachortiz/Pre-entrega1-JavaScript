document.addEventListener('DOMContentLoaded', function () {
  // Elementos del DOM
  const inputData = document.getElementById('inputData');
  const submitButton = document.getElementById('submitButton');
  const outputResult = document.getElementById('outputResult');

  // Evento al hacer clic en el botón
  submitButton.addEventListener('click', function () {
      const userInput = inputData.value;

      // Lógica de la aplicación
      const processedData = processData(userInput);

      // Mostrar resultado en el DOM
      outputResult.innerHTML = `<p>Resultado: ${processedData}</p>`;
  });

  // Función de procesamiento de datos
  function processData(data) {
      // Aquí implementa la lógica de procesamiento de datos
      // Puedes modificar esta función según las necesidades de tu aplicación
      return `Datos ingresados: ${data}`;
  }
});
