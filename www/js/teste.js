var numUni = ["","Um", "Dois" , "Três",
							"Quatro", "Cinco", "Seis",
              "Sete", "Oito", "Nove"];

var numUniDec = ["Dez", "Onze", "Doze",
"Treze", "Quatorze", "Quinze",
"Dezesseis", "Dezessete", "Dezoito",
"Dezenove"];

var numDec =  ["Vinte", "Trinta",
"Quarenta", "Cinquenta", "Sessenta",
"Setenta", "Oitenta", "Noventa"];

function testar(){
	var num = $("#num").val();
  var final;

  if(num >= 10){
    var uni = num.slice(1, 2);
    if(num >= 90){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[7];
      } else{
        final = numDec[7] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 80){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[6];
      } else{
        final = numDec[6] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 70){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[5];
      } else{
        final = numDec[5] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 60){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[4];
      } else{
        final = numDec[4] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 50){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[3];
      } else{
        final = numDec[3] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 40){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[2];
      } else{
        final = numDec[2] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 30){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[1];
      } else{
        final = numDec[1] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 20){
      if(numUni[testarUnidade(uni)] == ""){
        final = numDec[0];
      } else{
        final = numDec[0] + " e " + numUni[testarUnidade(uni)];
      }
    } else if(num >= 10){
      final = numUniDec[testarDecimal(num)];
    }
  } else{
    final = numUni[testarUnidade(num)];
  }
  return $("#result").text(final);
}

function testarDecimal(dec){
  if(dec == 10){
    return 0;
  } else if (dec == 11) {
    return 1;
  }else if (dec == 12) {
    return 2;
  }else if (dec == 13) {
    return 3;
  }else if (dec == 14) {
    return 4;
  }else if (dec == 15) {
    return 5;
  }else if (dec == 16) {
    return 6;
  }else if (dec == 17) {
    return 7;
  }else if (dec == 18) {
    return 8;
  }else if (dec == 19) {
    return 9;
  }
}

function testarUnidade(un){
  if(un == 0){
    return 0;
  } else if(un == 1){
    return 1;
  } else if(un == 2){
    return 2;
  } else if(un == 3){
    return 3;
  } else if(un == 4){
    return 4;
  } else if(un == 5){
    return 5;
  } else if(un == 6){
    return 6;
  } else if(un == 7){
    return 7;
  } else if(un == 8){
    return 8;
  } else if(un == 9){
    return 9;
  }
}

$("#testar").click(function(e){
	testar();
});
