/*

  Arquivo para demonstrar o básico sobre strings em JavaScript

 */

var string = "hello world";

string.length;
    => 11

string.chartAt(position)
  => string.chartAt(0);
    => "h"

string.replace(Old_text, New_text);
  => string.replace("hello", "bye");
    => "bye world"

string.toUpperCase();
  => string.toUpperCase();
    => "HELLO WORLD"


/*

  Template strings

 */

Forma longa
  => var a = 5, b = 10;
     console.log("Quinze é" +(a+b)+ "e não" +(2*a+b)+ ".");

Forma simples
  => var a = 5, b = 10;
     console.log(`Quinze é ${a+b} e não ${2*a+b}.`)
