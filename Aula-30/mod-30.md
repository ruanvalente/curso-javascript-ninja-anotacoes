# Module Pattern

O Module Pattern é muito utilizado porque ele permite organizar melhor o código, sem expor variáveis globais de modo promíscuo. Como ainda não temos uma sintaxe de módulos do próprio JavaScript **( agora temos no es6 )**, usamos os módulos para garantir que o escopo de variáveis seja fechado, além de simular a privacidade de atributos e funções.

Este pattern pode envolver uma combinação de diversas técnicas como closures e funções auto-executáveis.

## Closure

Closure se refere à forma como funções são definidas dentro de um **"contexto léxico"**(o corpo de uma função, um bloco, um arquivo fonte) acessam variáveis definidas nesse contexto.

Em JavaScript, apenas funções definem um novo contexto léxico (outras linguagens têm regras diferentes - algumas sequer suportam o conceito de closure):

Temos o seguinte HTML:

Ex:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Module Pattern | Closure</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

E o nosso arquivo Javascript está da seguinte maneira:

Ex:

```js
(function() {
  'use strict';
  var scope = 'Global scope';

  console.log(scope);
})();
```

Se executarmos essa função e chamando o _console.log_ fora do _escopo_ da IIFE, a variável scope não estará definida. Até ai nada de mais. Isso mostra que temos um escopo e que nada que foi criado fora dele pode ser acessado de fora dele.

Agora vamos a outro exemplo.

Ex:

```js
(function() {
  'use strict';

  var scope = 'Global scope';

  function checkScope() {
    var scope = 'local scope';
    function func() {
      return scope;
    }
    return fun();
  }

  console.log(scope); // 'Global scope'
  console.log(checkScope()); // 'local scope'
})();
```

Neste exemplo temos uma _Closure_ onde a função _fun_ consegue guardar os valores tanto dela quanto a da função pai _checkScope_.

Agora um outro exemplo.

Ex:

```js
(function() {
  'use strict';

  var counter = 0;

  function increment() {
    return counter++;
  }

  function otherFunction() {
    counter = 150;
  }

  console.log(otherFunction());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  /*
    150
    151
    152
    153
    154
    155
  */
})();
```

Neste exemplo bem simples vimos que apartir da execução da função _otherFunction_ ela altera o valor de _counter_, e com base neste novo valor é que a função _increment_ se baseia para fazer o incremento. Pois a variável _counter_ está compartilhando o seu escopo com as duas funções.

Podemos fazer o mesmo exemplo porém com escopo restrito (encapsulado)

Ex:

```js
(function() {
  'use strict';

  var counter = 0;

  var increment = (function() {
    var counter = 0;
    return function() {
      return counter++;
    };
  })();

  function otherFunction() {
    counter = 150;
  }

  console.log(otherFunction());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());
  console.log(increment());

  /*
    0
    1
    2
    3
    4
*/
})();
```

Neste exemplo vimos que o comportamento agora mudou porque passamos para _increment_ uma _IIFE_ que é auto executada, onde **ela cria um escopo**. E também criamos uma variável chamada _counter_ e retornamos uma função que incrementa a nossa variável _counter_ assim tendo o comportamento esperado.

# Manipulando CSS

### element.style

A propriedade _element.style_ retorna um objeto **CSSStyleDeclaration**, que representa um atributo do elemento style inline.

A propriedade _style_ é usado para obter ou definir um estilo específico de um elemento usando diferentes propriedades CSS.

Ex:

```html
<div></div>
```

Ex:

```js
(function() {
  'use strict';

  var $div = document.querySelector('div');

  $div.style.backgroundColor = 'red';
})();
```

Neste exemplo básico estamos dizendo que queremos que a nossa _\$div_ tenha o seu plano de fundo vermelho.

### element.classList

A propriedade _classList_ retorna os nomes de classe de um elemento, como um objeto DOMTokenList.

Esta propriedade é útil para adicionar, remover e alternar entre classes CSS em um elemento.

A propriedade classList é somente leitura, no entanto, você pode modificá-lo usando os métodos _add()_ e _remove()_.

- add(class1, class2, ...)

  - Adiciona um ou mais nomes de classe para um elemento. Se a classe especificado já existir, não será adicionada a classe

- contains(class)

  - Retorna um valor booleano, indicando se um elemento tem o nome de classe especificado.
  - Valores possíveis:

  - true - o elemento contém o nome da classe especificada
  - falso - o elemento não contiver o nome da classe especificada

- item(index)

  - Retorna o nome da classe com um determinado número de índice de um elemento. Índice começa em 0. Retorna null se o índice está fora do intervalo

- remove(class1, class2, ...)

  - Remove um ou mais nomes de classe de um elemento.

- toggle(class, true|false)

  - Alterna entre um nome de classe para um elemento.

  - O primeiro parâmetro remove a classe especificada de um elemento e retorna false.
    Se a classe não existir, ele é adicionado ao elemento e o valor de retorno é true.

  - O segundo parâmetro opcional é um valor booleano que força a classe a ser adicionado ou removido, independentemente se ele já existia ou não. Por exemplo:

  - Remover uma classe: Element. classList. toggle ( "classToRemove ", false);
    Adicionar uma classe: Element. classList. toggle ( "classToAdd ", true);

Ex:

```html
<div class="red blue green black"></div>
```

```js
(function() {
  'use strict';

  var $div = document.querySelector('div');
  $div.addEventListener(
    'click',
    function() {
      this.classList.toggle('blue');
    },
    false
  );
})();
```

Neste exemplo usamos o método _toogle_ que a cada vez que a nossa div for clicada e a _classe_ **blue** existe ela será removida se ela não existe ela será adiciona.

### Links:

- [Javascript: Mas afinal, o que são closures? - Medium](https://medium.com/@stephanowallace/javascript-mas-afinal-o-que-s%C3%A3o-closures-4d67863ca9fc)

- [classList - w3schools](https://www.w3schools.com/jsref/prop_element_classlist.asp)

- [Closures - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures)

- [Desvendando a linguagem JavaScript - #7 - Function - Parte 1 - Rodrigo Branas](https://www.youtube.com/watch?v=OqR0hE-DQn4&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=7)

- [Desvendando a linguagem JavaScript - #8 - Function - Parte 2 - Rodrigo Branas](https://www.youtube.com/watch?v=m9uPpURTI0c&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=8)
