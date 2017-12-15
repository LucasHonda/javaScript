/*

  Funções extras

 */

Função interna
  => Definição
    => Uma função dentro de outra função
  => Criando
    => function testar() {
        var nome = "Lucas"
        function testarNome() {
          if(nome.length < 5){
            return "Yes";
          }
        }
    }

Arrow Function
  => Definição
    => Utilização mais rápida de funções anônimas
  => Criando
    =>  var a = ["hidrogênio", "helio", "litio", "berilio"];
        var a2 = a.map(function (s) { return s.length});
        var a3 = a.map(s => s.length);
