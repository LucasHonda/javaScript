/*

  Vetor, array

 */

Básico sobre criar arrays
  => Forma tradicional para criar
    => var a = new Array();
    => a[0] = "cão";
    => a[1] = "gato";
    => a[3] = "galinha";
  => Forma simples
    => var a = ["cão", "gato", "galinha"];

Métodos para arrays
  => array.length
    => retorna o tamanho de um array
    => não é a quantidade de itens
      => var a = ["cão", "gato", "galinha"];
      => a[100] = "raposa";
      => a.length;
        => 101
    => o tamanho de um array é o maior índice mais 1
    => procurar um índice sem valor
      => typeof a[99];
        => undefined

Percorrendo um array
  => Método Eficiente
    => for(var i = 0, len = a.length; i < len; i++){
      a[i]
    }
  => Outros métodos
    => for...in
      => for (var i in a) {
        a[i]
      }

Adicionando itens a um array
  => a[a.length] = item;
  => a.push(item);

Métodos para utilizar nos arrays
  => a.toString();
    => retorna uma string com o toString() de cada item separado por uma vírgula
  => a.toLocaleString();
    => retorna uma string com o toString() de cada item separado por uma vírgula
  => a.concat(item[,itemN]);
    => retorna um novo array com os novo itens
  => a.join(sep);
    => retorna uma string com a separação definida pelo parâmetro "sep"
  => a.pop();
    => remove e retorna o último item
  => a.push(item);
    => adiciona items no final do array
  => a.reverse();
    => inverte o array
  => a.shift();
    => remove e retorna o primeiro item do array
  => a.sort([cmpfn]);
    => "Sorteia" os itens do array, ou seja, retorna o array organizado, uma função pode especificar essa organização
  => a.slice(ínicio, fim);
    => retorna um novo array, a partir dos parâmetros passados
  => a.unshift([item]);
    => adiciona itens no começo do array
  => a.splice(start, delcount[,itemN]);
    => adiciona itens apartir da posição passada

  
