/*

  Arquivo sobre o básico de números

 */

var number = 0;

var val = "0";

var stringNan = "hello";

Função => Math
        => Função complexa que explande o universo matemático do JavaScrit

parseInt(val, base);
  => converte uma string em um inteiro
  => parametro: BASE defina uma base para converter

parseFloat(val);
  => base sempre 10

+ val
  => converte para número também

NaN => Not as Number
  => parseInt(stringNan, 10);
    => NaN

NaN + 5 => NaN

isNaN(val);
  => True or False

Infinity => valor especial
  => 1 / 0
    => Infinity
  => -1 / 0
    => -Infinity

isFinite(val); => Tem fim ?
  => True or False
