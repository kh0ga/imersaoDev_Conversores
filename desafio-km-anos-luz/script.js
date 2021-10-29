
 function mostrarResultado(kmEmAnoLuz,valorKmFinal){

  let mes = kmEmAnoLuz*12;
  let dia = mes*30;
  let hora = dia*24;
  let minuto = hora*60;
  let segundo = minuto*60;
  
  //Se o valor for maior que 1 só mostra 1 casa decimal
  if(kmEmAnoLuz < 1){

    document.getElementById('resultado').innerHTML = valorKmFinal.toLocaleString('pt-br') + " km é igual a " + kmEmAnoLuz.toFixed(8).replace('.',',') + " anos-luz";

  } else  {

    document.getElementById('resultado').innerHTML = valorKmFinal.toLocaleString('pt-br') + " km é igual a " + kmEmAnoLuz.toFixed(1).replace('.',',') + " anos-luz";

  }
  
  //Mostra o resultado em anos, meses, dias, horas ou segundos dependendo do valor

  if(kmEmAnoLuz < 1){
  
    if(mes < 1){
  
      if(dia < 1){
  
        if(hora < 1){
  
          if(minuto < 1){  

            document.getElementById('resultado2').innerHTML = "A luz percorre toda essa distância em " + segundo.toFixed(2).replace('.',',')+ " segundos ";

          }else{  
            document.getElementById('resultado2').innerHTML = "A luz percorre toda essa distância em " + minuto.toFixed(2).replace('.',',') + " minutos ";  
          }
          
        }else{  
          document.getElementById('resultado2').innerHTML = "A luz percorre toda essa distância em " + hora.toFixed(2).replace('.',',') + " horas ";    
        }
          
      }else{
        document.getElementById('resultado2').innerHTML = "A luz percorre toda essa distância em " + dia.toFixed(2).replace('.',',') + " dias ";
      }
       
       
    } else{      
      document.getElementById('resultado2').innerHTML = "A luz percorre toda essa distância em " + mes.toFixed(2).replace('.',',') + " meses ";    
    }
    
  } else {  
      document.getElementById('resultado2').innerHTML = "A luz percorre toda essa distância em " + kmEmAnoLuz.toFixed(2).replace('.',',') + " anos";    
    }

}


function calcular(base){

  let inputValorKm = parseFloat(document.getElementById('input-valor').value);
  let valorKmFinal = inputValorKm * base;
  let anoLuz = 9460536207068.016;  
  let kmEmAnoLuz = (valorKmFinal/anoLuz);

  mostrarResultado(kmEmAnoLuz, valorKmFinal);

}


function selectUnidade(){

    let listaUnidade = document.getElementById('lista-unidade').value;
    let arrayUnidade = ['mil','mi', 'bi', 'tri'];
    var base;

    if(listaUnidade == arrayUnidade[0]){

    base = Math.pow(10,3);

    }else if(listaUnidade == arrayUnidade[1]){

      base = Math.pow(10,6);

    }else if(listaUnidade == arrayUnidade[2]){

      base = Math.pow(10,9);

    }else if(listaUnidade == arrayUnidade[3]){

      base = Math.pow(10,12);
    }
    else{
      
    base = 1;
    
  }
 
  calcular(base);

}
