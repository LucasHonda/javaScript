/*

  Tipos de variáveis

 */

Existem 3 Tipos para definição, porém não há tipagem das mesmas
  => var
  => const
  => let

  var
    => variável global
    => declarando
      => var a;

  const
    => variável imutável durante todo o processo
    => declarando
      => const a;

  let
    => variável que tem seu escopo reduzido
    => declarando
      => let a;
    => utilização prática
      => var a = 5, b = 10
      =>
      => if(a<b){
      =>    let a = 1
      =>    let b = 2
      =>
      =>    console.log(a)
      =>      => 1
      => }
      =>
      =>  console.log(a)
      =>     => 5
