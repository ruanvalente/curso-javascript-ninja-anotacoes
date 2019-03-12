# Escopo de funções.

As variáveis definidas no interior de uma função não podem ser acessadas de **nenhum lugar fora da função**, porque a variável está definida apenas no **escopo da função**. No entanto, uma função pode acessar **todas variáveis e funções definida fora do escopo onde ela está definida**. Em outras palavras, a função definida no escopo global pode acessar todas as variáveis definidas no escopo global. A função definida dentro de outra função também pode acessar todas as variáveis definidas na função hospedeira e outras variáveis ao qual a função hospedeira tem acesso.

Ex:

```js
// As seguintes variáveis são definidas no escopo global
var num1 = 20;
var num2 = 3;
var nome = "Chamahk";

// Esta função é definida no escopo global
function multiplica() {
  return num1 * num2;
}

multiplica(); // Retorna 60

// Um exemplo de função aninhada
function getScore() {
  var num1 = 2;
  var num2 = 3;

  function add() {
    return nome + " scored " + (num1 + num2);
  }

  return add();
}

getScore(); // Retorna "Chamahk scored 5"
```

E como fica uma função dentro de outra função ? Como fica o escopo ?

Ex:

```js
function myFunction() {
  function sum() {
    return 1 + 2;
  }

  return sum();
}

console.log(myFunction());
// 3
```

Neste exemplo temos a função _myFunction_ que dentro dela temos outra função chamada _sum_ que dentro desta função é retornado a soma de dois números. E no final da função _myFunction_, é retornado a invocação de _sum_ retornando o valor _3_.

Porém se formos invocar a função _sum_ ?

Ex:

```js
console.log( sum() );

// ReferenceError: sum is not defined
```

A função _sum_ **não está definida**, da mesma forma que acontece com o escopo da váriaveis assim também acontece com as funções. A função _sum_ **só existe dentro do escopo da função** _myFunction_, fora dele a **mesma deixa de existir**.

### Funções aninhadas e closures.

Você pode aninhar uma função dentro de outra. A função aninhada **(interna)** é **acessível apenas para a função que a contém (exterior).** Isso constitui também em uma _closure_. Uma _closure_ é uma expressão (tipicamente uma função) que **pode ter variáveis livres em conjunto com um ambiente que conecta estas variáveis** (que "fecha" a expressão).

Uma vez que uma função aninhada é uma _closure_, isto significa que uma **função aninhada pode "herdar" os argumentos e variáveis de sua função de contenção.** Em outras palavras, a **função interior contém o escopo da função exterior.**

Em resumo:

- A função interna só pode ser acessada a partir de declarações em função externa.

- A função interna forma uma closure: a função interna pode usar os argumentos e variáveis da função externa, enquanto a função externa não pode usar os argumentos e variáveis da função interna.

O exemplo a seguir mostra as funções aninhadas:

Ex:
```js
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
var a = addSquares(2, 3); // retorna 13
var b = addSquares(3, 4); // retorna 25
var c = addSquares(4, 5); // retorna 41
```

Uma vez que a função interna forma uma closure, você pode chamar a função externa e especificar argumentos para a função externa e interna:

Ex:
```js
function fora(x) {
  function dentro(y) {
    return x + y;
  }
  return dentro;
}
var fn_inside = fora(3);

// Pense nisso como: Receba uma função que adicionará 3 ao que quer que você repasse para ela

var result = fn_inside(5); // retorna 8
var result1 = fora(3)(5); // retorna 8
```

E quando alteramos a ordem das declarações e chamadas de dentro da função ?

Ex:

```js
function myFunction() {
  var number1 = 1;
  var number2 = 2;
  return sum();
  function sum() {
    return number1 + number2;
  }
}
console.log(myFunction());

// 3
```

Neste exemplo temos _myFunction_ e dentro da função temos duas váriaveis. E ainda dentro da função temos um **retorno de uma função ainda não criada** a função _sum_. Logo após criamos a função _sum_ retorna a soma das duas váriaveis criadas a cima na função.

Porém, olhando bem para este exemplo, poderiamos dizer que a função _myFunction_ retornaria **undefined**. Pois estamos retornando uma função que ainda não existe dentro de _myFunction_. Porém, para nossa surpresa, a função retorna o valor 3. Da soma realizado pela função _sum_.

E como o Javascript faz isso ? Chamamos isto de **Hoisting**.

# Hoisting.

Em JavaScript, funções e variáveis são hoisted (ou "levados ao topo"). **Hoisting** é um comportamento do JavaScript de mover declarações para o topo de um escopo (o escopo global ou da função em que se encontra).

Isso significa que você é capaz de usar uma função ou variável antes mesmo de tê-las declaradas, ou em outras palavras: uma função ou variável podem ser declaradas depois de já terem sido utilizadas.

Em outra palavras está função.

Ex:

```js
function myFunction() {
  var number1 = 1;
  var number2 = 2;
  return sum();
  function sum() {
    return number1 + number2;
  }
}
console.log(myFunction()); // 3
```

O Javascript interpreta este código basicamente dessa forma.

Ex:

```js
function myFunction() {
  function sum() {
    return number1 + number2;
  }
  var number1 = 1;
  var number2 = 2;
  return sum();
}

console.log(myFunction());

// 3
```

Funções literais e váriaveis, são elevadas ( Hoisting ) até o topo do escopo onde foram criadas. Isso significa que você é capaz de usar uma função ou variável antes mesmo de tê-las declaradas.

Porém, para uma **Function Expression** isso não acontece da mesma maneira.

Ex:

```js
function myFunction() {
  var number1 = 1;
  var number2 = 2;
  return sum();
  var sum = function sum() {
    return number1 + number2;
  };
}

console.log(myFunction());

// TypeError: sum is not a function
```

O Javascrit não consegue fazer o processo de Hoisting, pois já que _sum_ foi atribuida para uma váriavel o processo de hoisted é feito e a mesma tem como seu valor **undefined**.

Ex:

```js
function myFunction() {
  var number1 = 1;
  var number2 = 2;
  var sum = undefined;
  return sum();
  sum = function sum() {
    return number1 + number2;
  };
}

console.log(myFunction());
```

Basicamente é está a forma que o Javascript faz o hoisted de váriaveis. E já que a nossa função foi atribuida a uma, ela ganha como seu valor **undefined**, pois o Javascript só faz a atribuição no exato momento onde está sendo feita a atribuição. Que neste exemplo é após ela ser chamada.

Ex:

```js
function myFunction() {
  console.log("Antes de declarar", number1);
  var number1 = 1;
  console.log("Depois de declarar", number1);
}
```

Temos como retorno da função.

Ex:

```js
/*
  Antes de declarar undefined
  Depois de declarar 1
  undefined
*/
```

Basicamente o que aconteceu foi isso.

Ex:

```js
function myFunction() {
  var number1;
  console.log("Antes de declarar", number1);
  number1 = 1;
  console.log("Depois de declarar", number1);
}
```

Em outras palavras, a váriavel number1 sofre o processo de hoisted e fica no topo da nossa função **myFunction**. Sendo assim a mesma tem como seu valor **undefined**. Depois temos a nossa chamada no console. Somente após isso e extamente onde a mesma foi criada é onde acontece a atribuição do seu valor, e assim na última linha temos o que acontece depois que declaramos a nossa váriavel.

# IIFE (Immediately Invoked Function Expression).

É uma função em JavaScript que é executada assim que definida.

A função se torna uma expressão que é imediatamente executada. A variável definida dentro da expressão não pode ser acessada fora de seu escopo.

```js
(function() {
  return "Ola";
})();
```

As IIFE faz com que uma função se torne uma expressão que é imediatamente executada. E as vantagens disso ? É que tudo que for declarado dentro da IIFE tem como seu **escopo local**.

Links:

- [Entendendo o uso de escopo no JavaScript - Medium](https://medium.com/weyes/entendendo-o-uso-de-escopo-no-javascript-3669172ca5ba)

- [Escopo e Hoisting, como funciona isso no JavaScript? - Medium](https://medium.com/opensanca/hoisting-em-javascript-9f22b1f78448)

- [Funções - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)

- [Hoisting - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/Hoisting)

- [IIFE - MDN](https://developer.mozilla.org/pt-BR/docs/Glossario/IIFE)

- [Sobre funções imediatas JavaScript (IIFE) - iMasters](https://imasters.com.br/front-end/sobre-funcoes-imediatas-javascript-iife)

- [Da2k](https://blog.da2k.com.br/2015/02/20/os-segredos-da-iife/)
