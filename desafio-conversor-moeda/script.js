
//Variaveis globais
var moeda1, moeda2, bitcoin;

function descricao(input){

  let lista1 = document.getElementById('lista1');
  let lista2 = document.getElementById('lista2');

  //Pegar o texto dentro da option selecionada
  let selected1 = lista1.options[lista1.selectedIndex].text;
  let selected2 = lista2.options[lista2.selectedIndex].text;

  var resultado = ((moeda2/moeda1)*input).toLocaleString('pt-br',{ minimumFractionDigits: 2, maximumFractionDigits: 2});


  //Mostrar descrição
  document.querySelector('.desc-moeda-1').innerHTML = input.toLocaleString('pt-br') + " " + selected1 + " igual a";
  document.querySelector('.desc-moeda-2').innerHTML = resultado + " " + selected2;

  //Bitcoin
  document.getElementById('bitcoin-resultado').innerHTML = "1 Bitcoin é equivale a " + bitcoin.toLocaleString('pt-br') + " " + selected1;
  document.getElementById('campoBitcoin').value = (input/bitcoin).toLocaleString('pt-br',{ minimumFractionDigits: 2, maximumFractionDigits: 7});

}


function calcular(moeda1, moeda2,input, output){

  output.value = ((moeda2/moeda1)*input).toFixed(2);

}

function setValue1(){  
  
  let input = parseFloat(document.getElementById('campoValor1').value);
  let output = document.getElementById('campoValor2');
   
  
  selectMoeda();

  calcular(moeda1, moeda2, input, output);
  
  descricao(input, output);

}

function setValue2(){

  let input = parseFloat(document.getElementById('campoValor2').value);
  let output = document.getElementById('campoValor1');

  selectMoeda();

  calcular(moeda2, moeda1, input, output);

  descricao(input, output);

}

function selectMoeda(){

  let moedaLista1 = document.getElementById('lista1').value;
  let moedaLista2 = document.getElementById('lista2').value;
    
  //Declaração da cotação das moedas
  let cotLibra = 0.84373;
  let cotEuro = 1;
  let cotDolar = 1.1593;
  let cotReal = 6.4798;
  

  //Array de moedas
  let arrayMoeda = ['real','dolar','libra','euro'];
  
  //Verifica qual a 1° moeda escolhida e atribui a ela o valor equivalente da cotação.
  if(moedaLista1 == arrayMoeda[0]){

    moeda1 = cotReal;
    bitcoin = 222203.22;
   
      
  }else if(moedaLista1 == arrayMoeda[1]){

    moeda1 =  cotDolar;
    bitcoin = 41889.20;
  
  }else if(moedaLista1 == arrayMoeda[2]){

    moeda1 =  cotLibra;
    bitcoin = 30693.68;

  }else{

    moeda1 =  cotEuro;
    bitcoin = 35744.26;
  
  }

  //Verifica qual a 2° moeda escolhida e atribui a ela o valor equivalente da cotação
  if(moedaLista2 == arrayMoeda[0]){

    moeda2 =  cotReal;

  }else if(moedaLista2 == arrayMoeda[1]){

    moeda2 =  cotDolar;

  }else if(moedaLista2 == arrayMoeda[2]){

    moeda2 =  cotLibra;
    
  }else{
    moeda2 =  cotEuro;
  }

}
