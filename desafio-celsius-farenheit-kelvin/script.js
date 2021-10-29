

//Função Converter Celsius
function deCelsius(){

  //Variáveis
  let celsius = parseFloat(document.getElementById('celsius').value);
  let farenheit = document.getElementById('farenheit');
  let kelvin = document.getElementById('kelvin');

  //Formula Celsius para Farenheit
  let paraFarenheit = ((celsius*1.8)+32).toFixed(2);

  //Formula Celsius para Kelvin
  let paraKelvin = (celsius - 273.15).toFixed(2);

  // Mostrar valores
  farenheit.value = paraFarenheit;
  kelvin.value = paraKelvin;

}

//Função Converter Farenheit
function deFarenheit(){

  //Variáveis
  let celsius = document.getElementById('celsius');
  let farenheit = parseFloat(document.getElementById('farenheit').value);
  let kelvin = document.getElementById('kelvin');

  //Formula Farenheit para Celsius
  let paraCelsius = ((farenheit-32)/1.8).toFixed(2);

  // Formula Farenheit para Kelvin
  paraKelvin = ((farenheit + 459.67) * (5/9)).toFixed(2);

  celsius.value = paraCelsius;
  kelvin.value = paraKelvin;
  
}

//Função Converter Kelvin
function deKelvin(){

  //Variáveis
  let celsius = document.getElementById('celsius');
  let farenheit = document.getElementById('farenheit');
  let kelvin = parseFloat(document.getElementById('kelvin').value);

  //Formula para Celsius
  let paraCelsius = (kelvin + 273.15).toFixed(2);

  //Formula para Farenheit
  let paraFarenheit = ((kelvin-273) * 1.8 + 32).toFixed(2);

  celsius.value = paraCelsius;
  farenheit.value = paraFarenheit;

}
