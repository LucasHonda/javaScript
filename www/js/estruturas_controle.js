/*

  - Estrutura de condição
  - Estruturas de Repetição

 */

Básico condicional
  => if () {}
  => else {}
  => else if(){}

Construção da condição
  => Operadores
    => <
      => Menor
    => >
      => Maior
    => <=
      => Menor, Igual
    => >=
      => Maior, Igual
    => ==
      => Igual á
    => !=
      => Diferente
    => Coersão errada
      => "1" == true
        => true
    => Coersão correta
      => "1" === true
        => false
    => Coersão diferente
      => !==

Outras opções condicionais
  => var teste = (val > val) ? True : False;
  => Switch Case
    => switch (ação) {
      case "1":
          faça...();
        break;
      default:
        faça...();
    }

Estrutura de Repetição
  => while
    => while (condição) {
      => faça...();
    }
  => do-while
    => do {
      faça...();
    } while (condição);
  => for
    for (var i = 0; i < array.length; i++) {
      array[i];
    }
