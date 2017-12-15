/*

  Funções

 */

Declarando
  => function "nome"(parâmetros) {
      faça...();
  }

Acessando valores sem parâmetros
  => Utilize a variável arguments
    => function add() {
      var sum = 0;
      for(var i = 0, j = arguments.length; i< j; i++){
        sum += arguments[i];
      }
      return sum;
    }
    => function avg() {
      var sum = 0;
      for(var i = 0, j = arguments.length; i< j; i++){
        sum += arguments[i];
      }
      return sum / arguments.length;
    }
    => Função apply
      => definição de override
        => avg.apply(null, [2,3,4,5]);
          => 3.5
            => substitui a recriação do mesmo método

Funções anônimas
  => var avg = function () {
    var sum = 0;
    for(var i = 0, j = arguments.length; i< j; i++){
      sum += arguments[i];
    }
    return sum / arguments.length;
  }

  
