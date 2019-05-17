# Scripts inline

Scripts inline é basicamente adicionar um script de evento dentro de tags que pode ter uma ação.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ex 01</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <a href="javascript:boom()">BOOOOMMMM!!!</a>

    <script>
      function bomm() {
        alert('Boom!!!');
      }
    </script>
  </body>
</html>
```

O código do exemplo mostra um _alert_ para o usuário apartir do momento que ocorre o click dentro do elemento **a**(link) do html. Assim atrelado ao link temos uma função chamada **boom** que é chamada no momento do click do link.

PS: Esse tipo de evento inline não é um boa prática dentro do nossos projetos e deve ser evitado!
É apenas para conhecimento.

Em alguns casos temos o seguinte código.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ex 02</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <a href="javascript:void(0)"></a>
  </body>
</html>
```

Mas o que significa o **void** dentro do Javascript ?

Basicamente em linguagem fortemente tipadas o void significa que a função não irá **retornar nada**. No caso dentro do Javascript, era usado para que não fosse executado determinado comportamento na página. Hoje podemos usar o **preventDefault** para manipular tal ação dentro da nossa página.

Até hoje temos esse tipo de techo de código dentro de alguns software. Porém não há a necessidade de ter em nossos projetos.

## Eventos

### Uma vasta lista de eventos que podemos encontrar.

- [Events - MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events)

## Eventos Inline.

Podemos também utilizar eventos inline, **mas isso é uma má prática !!**

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ex 03</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <a href="#" onclick="boom()">Booom!!!</a>

    <script>
      function boom() {
        alert('BOOOOOMMMMM');
      }
    </script>
  </body>
</html>
```

Dessa forma usamos o eventos de click dentro da nossa tag. Onde basicamente o elemento **\<a>** apartir que for clicado irá executar a função **boom**. Porém temos um comportamento diferente nesse caso. Primeiro irá ser executado o método **boom** e somente depois o elemento **\<a>** irá redirecionar para **#** na nossa url, isso definido dentro do _href_.

Agora se fosse usado dentro do _href_ **javascript:**, isso iria prevenir a ação padrão do elemento **\<a>** e assim não teria o redirecionamento para **#**.

Poderiamos fazer o mesmo da seguinte maneira:

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ex 03</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <a href="#">Booom!!!</a>

    <script>
      var $a = document.querySelector('a');
      $a.addEventListener('click', boom, false);

      function boom(event) {
        event.preventDefault();
        alert('BOOOOOMMMMM');
      }
    </script>
  </body>
</html>
```

Porém dessa forma a cima, estamos separando as **responsabilidades** e deixando o código simples de **manter** e de **utilizar** !

# Eventos

Vamos ver um pouco mais sobre dado a seguinte estrutura.

Vamos separar o nosso HTML dentro de um arquivo separado, e o nosso arquivo JS também. Para termos mais controle sobre o nosso código.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ex 01</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div data-js="div">
      <a href="#" data-js="link"
        >Link
        <span data-js="span">Span</span>
      </a>
    </div>

    <script src="main.js"></script>
  </body>
</html>
```

Agora o JS.

```js
(function(win, doc) {
  'use strict';

  var $a = doc.querySelector('[data-js="link"]');

  $a.addEventListener(
    'click',
    function(event) {
      event.preventDefault();
      alert('Clicou no a');
    },
    false
  );
})(window, document);
```

Até ai nada de mais, porém se tivermos também um evento de click em nossa div ?

Ex:

```js
(function(win, doc) {
  'use strict';

  var $a = doc.querySelector('[data-js="link"]');
  doc.querySelector('[data-js="div"]').addEventListener(
    'click',
    function(event) {
      event.preventDefault();
      alert('Clicou na div');
    },
    false
  );

  $a.addEventListener(
    'click',
    function(event) {
      event.preventDefault();
      alert('Clicou no a');
    },
    false
  );
})(window, document);
```

PS: O parâmetro false dentro **addEventListener** significa **useCapture**, se true, useCapture indica que o usuário deseja iniciar uma captura. Depois de iniciada a captura, todos os eventos do tipo especificado serão enviados à listener registrada antes de serem enviados à qualquer EventTarget abaixo dela na hierarquia de DOMs. Eventos que borbulharem para cima na hierarquia não acionarão a escuta designada a usar a captura. Esse parâmetro não é opcional em todos os navegadores. Se não for especificado, useCapture é **false**.

PS: Podemos realizar um pequena melhora nesse código. :tada:

Ex:

```js
(function(win, doc) {
  'use strict';

  function on(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  on('[data-js="link"]', 'click', function(event) {
    event.preventDefault();
    alert('Clicou no a');
  });

  on('[data-js="div"]', 'click', function() {
    alert('Clicou na div');
  });

  on('[data-js="span"]', 'click', function() {
    alert('Clicou na span');
  });
})(window, document);
```

Fizemos um processo de refatoração dentro do nosso código, onde a função **on** recebe: Um _elemento_, o tipo de _evento_ e a função de _callback_. E isso faz lembrar um pouco de como o jQuery funciona. :smile:

Dessa forma o nosso useCapture está como false, o evento irá propagar até o evento pai. Em outras palavras executando o evento um após o outro até o evento mais a cima, ou seja o evento pai.

Com o valor true o mesmo acontece porém de forma contraria. :smile:

# Mais eventos, eventos por elemento.

E se atrelar dois ou mais eventos ao mesmo elemento ? Como o Javascript se comporta ? Vamos descobrir.

Ex:

```js
(function(win, doc) {
  'use strict';

  var $a = doc.querySelector('[data-js="link"]');

  $a.onclick = function(event) {
    event.preventDefault();
    alert('clicou no a');
  };

  $a.onclick = function(event) {
    event.preventDefault();
    alert('clicou no a novamente de outra forma');
  };
})(window, document);
```

Usando está forma o evento trabalha de forma acumulativa, executando um após o outro, porém temos outra forma, atrelando como um _'setter'_.

Porém se logo após o evento que criamos atrelamos novamente outro evento para ele, dessa forma estamos sobrescrevendo o evento. E executando o segundo evento atrelado a ele logo estamos sobrescrevendo o primeiro evento.

Sendo assim não podemos atrelar dois ou mais eventos. Porém podemos fazer da forma como uma _'fila'_.

Ex:

```js
(function(win, doc) {
  'use strict';

  function $(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  $('[data-js="link"]', 'click', function(event) {
    event.preventDefault();
    alert('clicou no a');
  });

  $('[data-js="link"]', 'click', function(event) {
    event.preventDefault();
    alert('clicou novamente no a');
  });
})(window, document);
```

Dessa forma o evento irá ser executado mostrando o **alert** com a menssagem: _'clicou no' a_ e logo depois a messagem: _'clicou novamente no a'_. Assim de forma enfileirada.

Da mesma forma que podemos adicionar um evento usando o _addEventListener_, também podemos também remover um determinado evento usando o _removeEventListener_

Ex:

```js
(function(win, doc) {
  'use strict';

  function $add(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function $remove(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  function handleClick(event) {
    event.preventDefault();
    alert('clicou no a');
  }

  $add('[data-js="link"]', 'click', handleClick);
  $add('[data-js="link"]', 'click', handleClick);
  $remove('[data-js="link"]', 'click', handleClick);
})(window, document);
```

Neste exemplo ao clicar no elemento a o evento será disparado executando apenas o primeiro evento de click, o segundo evento será **removido**, usando a nossa função \$remove.

PS: Se não fosse passado a função de **callback** para a função \$remove **o mesmo não iria remover o evento dentro do elemento** a. Assim executando os **dois eventos**.

PS: O evento _removeEventListener_ só remove quando passamos o **objeto da função** que desejamos remover.

## Outros eventos:

### input

O evento de input é usado dentro de formulários quando queremos pegar os valores do que foi entrado pelo usuário.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Ex 02</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <input type="text" data-js="input" />
  </body>
</html>
```

Agora vamos atrelar o evento de input ao nosso elemento.

Ex:

```js
(function(win, doc) {
  'use strict';

  function $add(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function $remove(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  $add('[data-js="input"]', 'input', function(event) {
    console.log(this.value);
  });
})(window, document);
```

Quando o evento é disparado conforme digitamos dentro do campo de input temos os v**alores digitados sendo mostrados** dentro do console.

PS: O _this_ está se referênciando ao **elemento de input**.

## Keyup

Basicamente é quando precionamos uma tecla por **determinado tempo e depois soltamos**, o evento é disparado.

Ex:

```js
(function(win, doc) {
  'use strict';

  function $add(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function $remove(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  $add('[data-js="input"]', 'keyup', function(event) {
    console.log(this.value);
  });
})(window, document);
```

Neste exemplo depois de termos pressionando qualquer tecla e depois soltamos essa tecla o evento será disparado e mostrando o seu valor dentro do console do navegador.

## KeyDown

Da mesma forma como Keyup, porém funciona **quando precionamos uma determinada tecla**, entrando dentro da função de callback.

Ex:

```js
(function(win, doc) {
  'use strict';

  function $add(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function $remove(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  $add('[data-js="input"]', 'keydown', function(event) {
    console.log(this.value);
  });
})(window, document);
```

Neste exemplo depois de termos pressionando qualquer tecla o evento será disparado e mostrando o seu valor dentro do console do navegador.

## Change

Basicamente quando **mudamos o valor do elemento** que o eventos está atrelado.

Ex:

```html
<label
  >Choose an ice cream flavor:
  <select data-js="select">
    <option value="">Select One …</option>
    <option value="chocolate">Chocolate</option>
    <option value="strawberry">Strawberry</option>
    <option value="vanilla">Vanilla</option>
  </select>
</label>
```

```js
(function(win, doc) {
  'use strict';

  function $add(element, event, callback) {
    doc.querySelector(element).addEventListener(event, callback, false);
  }

  function $remove(element, event, callback) {
    doc.querySelector(element).removeEventListener(event, callback, false);
  }

  $add('[data-js="input"]', 'change', function(event) {
    doc.querySelector('[data-js="input"]').value = this.value;
  });
})(window, document);
```

Neste exemplo conforme alteramos o valor do **\<select>** o evento **change** é disparado e assim o valor que foi alterado é atribuido ao **input**.

## Links:

- [Events - MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events)
- [MDN - Introdução a eventos](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Elementos_construtivos/Events)
- [Eloquente Javascript](http://braziljs.github.io/eloquente-javascript/chapters/manipulando-eventos/)
- [Devmedia](https://www.devmedia.com.br/trabalhando-com-eventos-em-javascript/28521)
