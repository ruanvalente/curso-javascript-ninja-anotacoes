# A importância de nomear funções.
Relembrando: Funções são blocos de construção fundamentais em JavaScript. Uma função é um procedimento ou um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

A **definição da função** (também chamada de declaração de função) consiste no uso da palavra chave function, seguida por:
+ Nome da Função.
+ Lista de argumentos para a função, entre parênteses e separados por vírgulas.
+ Declarações que definem a função, entre chaves { }.

Por exemplo, o código a seguir define uma função simples chamada square:

Ex:
```js
function square(number) {
  return number * number;
}
```
[Para saber mais](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)

Precisamos sempre nomear funções ao invés disso:

Ex:
```js
var func = function() {
  // corpo da função.
};
```
No exemplo a cima definimos uma função anônima que será chamada apartir da variável *func*. Onde não é uma boa prática definir funções anônimas em nossos códigos.

Podemos nomeá-las.

Ex:
```js
var func = function func(){
  // corpo da função.
};
```

Agora não temos mais uma função anônima e sim uma função nomeada. Que facilita e muito precisarmos depurar nosso código.

Funções em Javascript são muito importantes assim como os objetos as funções também possuem propriedades e métodos.

Ex:
```js
var func = function() {
  return 'Hi';
};

func(); // 'Hi'
func.name; // ''
```

No exemplo temos uma função anônima atribuida a uma variável *func*, e essa função retorna a String *'Hi'*. Porém quando não invocamos a função ela é um objeto que contém métodos. Um desses métodos é o *name* que retorna o nome da função. Já que a mesma é uma função anônima é retornado uma string em branco.


Agora usando o mesmo exemplo, quando nomeamos uma função e usamos o método name, será impresso o nome da função.

Ex:
```js
var func = function func() {
  return 'Hi';
};

func(); // 'Hi'
func.name; // 'func'
```

# Introdução à programação funcional I

A programação funcional é um paradigma de programação que trata a computação como uma avaliação de funções matemáticas e que evita estados ou dados mutáveis. Ela enfatiza a aplicação de funções, em contraste da programação imperativa, que enfatiza mudanças no estado do programa.

E em Javascript para podemos usufluir desses conceitos até então, a linguagem oferece alguns "super poderes".

+ Objetos de primeira classe. Ou cidadões de primeira classe.

Isso basicamente significa que as funções tem o **mesmo tratamento** que os **objetos** tem em Javascript.

> {} :heart: function () {}

Uma pequena ideia de como vamos trabalhar com programação funcional.

Ex:
```js
var car = {
  brand: 'Chevrolet',
  model: 'Silverado'
};
```
Neste exemplo criamos um objeto literal.

Da mesma forma podemos fazer com funções :heart: {}

Exemplo de **funções literais**.

Ex:
```js
function sum( x, y ) {
  return x + y;
}
```

Assim como no exemplo com o objeto *car* podemos atribuir **uma variável à um objeto.**

Ex:
```js
var obj = {};
```

**E com funções também** :heart: {}

Ex:
```js
var func = function func() {};
```

Obs: Podendo ser uma função nomeada ou anônima.

Da mesma forma podemos **retornar um objeto dentro de uma função**.

Ex:
```js
function person() {
  return {
    name: 'Ruan',
    lastName: 'Valente'
  };
}
```
Neste exemplo temos como o retorno da função um **Objeto** retornado diretamente pela função :heart:

Ou podemos fazer algo ainda mais simples, atribuindo as propriedades do objeto usando uma variável. E retornando a mesma.

Ex:
```js
function person() {
  var info: {
    name: 'Ruan',
    lastName: 'Valente'
  };
  return info;
}
```

E com o retorno da função podemos pegar as **propriedades do objeto retornado**.
```js
console.log( person().name );

'Ruan'

console.log( person().lastName );

'Valente'
```
Bem simples não é ? ;)

# Introdução à programação funcional II

Vimos que podemos retornar objetos de dentro de funções. E também podemos **retornar funções de dentro de funções** {} :heart:

Ex:

```js
function adder( x ) {
  return function( y ) {
    return x + y;
  };
}
```
No exemplo a cima temos uma função chamada *adder* que recebe um valor por parâmetro e o seu retorno é uma outra **função** que também recebe um valor por parâmetro. E retorna a **soma dos valores** passados para está função.

Usando outra abordagem teriamos o mesmo resultado mas a forma de escrita diferente. Agora criariamos uma outra função dentro da função *adder* e dentro dessa nova função chamada *addOther* retornamos a soma dos valores. E por fim retornamos a função *addOther*.

Ex:
```js
function adder( x ) {
  function addOther( y ) {
    return x + y;
  }
  return addOther;
}
```

E por fim podemos executá-la da seguinte maneira:

Ex:
```js
var add2 = adder( 2 );
add2( 3 ); // 5

adder( 2 )( 3 ); // 5
```

No primeiro exemplo temos uma variável *add2* **recebendo a função adder** e passando o valor *2* por parâmetro. Agora *add2* é uma função e lembrando bem que a função *adder* tem como seu retorno outra função. Passamos outro valor para a função *add2* que por fim retorna a **soma dos valores.**

Assim também acontece no segundo exemplo invocamos a função *adder* passando o primeiro valor por parâmetro e invocamos novamente mas agora a outra função e passando outro valor. E assim retornando a soma dos mesmos.

# Introdução à programação funcional III

Vimos que podemos retornar objetos de dentro de funções. E também podemos retornar funções de dentro de funções {}

E agora vamos ver que também podemos passar objetos por parâmetros.
:heart:

Ex:
```js
var car = {
  color: 'Blue';
};

function getCarColor( mycar ) {
  return mycar.color;
};

getCarColor(); // 'Blue'
```

E nem preciso dizer que podemos fazer o mesmo com funções :heart:

```js
function showOtherFunction( func ) {
  return func();
}

showOtherFunction( function () {
  return 'Functional JS Ninja!';
});

// 'Functional JS Ninja'
```

Neste exemplo bem louco :smile: temos uma função chamada *showOtherFunction* que recebe por parâmetro uma função anônima/*callback*.

OBS: Uma função de **callback** é uma função passada a **outra função como argumento**, que é então invocado dentro da função externa para completar algum tipo de rotina ou ação.

[Para saber mais sobre callback](https://developer.mozilla.org/pt-BR/docs/Glossario/Callback_function)

que por sua vez retorna uma string *'Functional JS Ninja!'*.

Complementando os estudos.

### Links:
+ [Funções - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)
+ [Entendendo Programação Funcional em JavaScript de uma vez - Medium](https://medium.com/tableless/entendendo-programa%C3%A7%C3%A3o-funcional-em-javascript-de-uma-vez-c676489be08b)
+ [Programação funcional com JavaScript - DevMedia](https://www.devmedia.com.br/programacao-funcional-com-javascript/34377)
+ [Introdução a Programação Funcional com Javascript - Tableless](https://tableless.com.br/introducao-programacao-funcional-functional-programming-em-javascript/)
+ [Javascript - como invocar funções - O mestre Sz Da2k](https://blog.da2k.com.br/2015/01/30/javascript-como-invocar-funcoes/)