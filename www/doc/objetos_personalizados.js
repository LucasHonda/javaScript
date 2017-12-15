/*

  Objetos Personalizados

 */
Criando
  => function makePerson(First, Last) {
        First: First,
        Last: Last,
        completeName: function(){
            return this.First + " " + this.Last;
        },
        completeNameReversed: function () {
          return this.Last + " , " + this.First;
        }
    }

This
  => palavra reservada que chama o objeto corrente

Herança sem classe
  => ObjetoOriginal.prototype.NomeFunção = function () {};

Prototype
  => palavra reservada que cria a Herança
