/*

  Objetos

 */

Objeto vazio
  => declarando
    => var obj = new object();
    => var obj = {};

Acessando um Objeto
  => obj.nome = "Lucas"
  => var nome = obj.nome
  => ou
  => obj["nome"] = "Lucas"
    => possibilita a utilização de palavras reservadas
  => var nome = obj["nome"]
  => Utilizando palavras reservadas
    => obj.for
      => Leva a uma função
    => obj["for"]
      => chave de acesso

Criando um objeto complexo
  => var obj = {
    nome: "Lucas",
    "for": "Max",
    detalhes:{
      cor:"vermelho",
      tamanho:12
    }
  }

Acessando um objeto encadeado
  => obj.detalhes.cor
    => vermelho
  => obj["detalhes"]["tamanho"]
    => 12
