function convertToCelsius() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    
    if (celsiusInput.value !== "") {
      const celsius = parseFloat(celsiusInput.value);
      const fahrenheit = (celsius * 9/5) + 32;
      fahrenheitInput.value = fahrenheit.toFixed(2);
      displayResult(`${celsius} Celsius = ${fahrenheit.toFixed(2)} Fahrenheit`);
    }
  }
  
  function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    
    if (fahrenheitInput.value !== "") {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5/9;
      celsiusInput.value = celsius.toFixed(2);
      displayResult(`${fahrenheit} Fahrenheit = ${celsius.toFixed(2)} Celsius`);
    }
  }
  
  function displayResult(result) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerText = `Result: ${result}`;
  }
  