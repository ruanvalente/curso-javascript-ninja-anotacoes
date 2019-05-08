# Sync vs Async

Dentro do Javascript podemos programar de forma **síncrona** e **assíncrona**, mas o que seria tudo isso ?

## Sync:

É basicamente quando o programa se comporta de forma **síncrona** isto é executando um comando após o outro.

Vamos imaginar o seguinte código de exemplo:

Ex:

```js
(function() {
  'use strict';
  console.log(1);
  console.log(2);
  console.log(3);
  // 1 2 3
})();
```

Tendo como sua saída cada console.log seguido, um de cada vez, independentemente de ordem de chamada.

Ex:

```js
(function() {
  'use strict';

  console.log(3);
  console.log(1);
  console.log(2);

  // 3 1 2
})();
```

## Async:

É basicamente quando precisamos trabalhar com eventos, aguarda alguma ação do usuário etc..

Pois o Javascript trabalha em **Single thread**. Imagine o nosso processador com 4 ou mais cores e o Javascript está executando em um desses cores.

Já que o Javascript trabalha em apenas single thread, se tivermos uma tarefa que está sendo executada e a mesma bloquei toda a ação nesta thread, **somente após o termino da tarefa** que a thread **será liberada**.

Ex:

```js
(function() {
  'use strict';
  console.log(0);
  for (var i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log(11);
})();
```

Após mostrar o primeiro console.log com valor 0, o Javascript irá executar o laço **for** de 1-10 e somente depois disso que irá **até o último console.log** mostrando o valor 11.

Mas se formos além, se pedimos para fazer uma interação de 10000 itens ?

Dessa forma vamos bloquear a nossa thread que só será liberada após o termino dessa interação. Aí entra o **assíncrono** dentro da linguagem.

## Event Loop.

Event driven é um fluxo de controle determinado por eventos ou alterações de estado, a maioria das implementações possuem um core (central) que escuta todos os eventos e chama seus respectivos callbacks quando eles são lançados (ou têm seu estado alterado). Esse basicamente é o resumo do Event Loop do Node.js.

![Event Loop](https://i.stack.imgur.com/BTm1H.png)
_Link: [What function gets put into EventLoop in NodeJs and JS](https://stackoverflow.com/questions/21596172/what-function-gets-put-into-eventloop-in-nodejs-and-js)_

Ex:

```js
(function() {
  'use strict';

  console.log('inicio');

  document.addEventListener(
    'click',
    function() {
      console.log('Click');
    },
    false
  );

  console.log('fim');
  // inicio / fim
})();
```

Neste exemplo as menssagems dentro do console/inicio e fim irão executar primeiro antes do addEventListener. Pois o evento que criamos está dentro do **Event loop** em uma thread separada. O event loop coloca o **evento dentro de uma fila** e somente depois de executar o **evento de click** que o javascript executará a função de callback, assim executando dentro da thread principal.

## setTimeout().

O método **setTimeout** define um timer que executa uma função ou especificado o pedaço de código uma vez depois que o timer expira.

Ex:

```js
(function() {
  'use strict';

  console.log('Inicio do console.log');

  // Podemos chamar o setTimeout usando window ou não já que o mesmo é um método global.

  setTimeout(function() {
    console.log('executa o setTimeout');
  }, 1000);

  console.log('Fim do console.log');
})();
```

Neste exemplo é executado as duas menssagens dentro do console.log com as Strings _Inicio do console.log_ e com _Fim do console.log_ e somente após 1000 milissegundos irá executar o método **setTimeout** e executando a função de callback mostrando no console a menssagem: _executa o setTimeout_.

Simulando algo com uma programação multithreading.

## setInterval().

O método **setInterval()** repetidamente chama uma função ou executa um trecho de código, com um atraso de tempo fixo entre cada chamada.

Ex:

```js
(function() {
  'use strict';

  console.log('Inicio do console.log');

  setInterval(function() {
    console.log('Executa setInterval()');
  }, 1000);

  console.log('Fim do console.log');
})();
```

Neste exemplo diferente do método setTimeout, o método setInterval executa a mesma função de callback inúmeras vezes apartir de um determinado intervalo em milissegundos passado. Jogando isso dentro da fila do event loop e passando para thread principal.

E com este exemplo simples não travaria a thread do navegador mas se fosse uma intereção como fizemos com o for, certamente poderiamos bloquear a thread.

Podemos similar algo parecido usando o setTimeout.

Ex:

```js
(function() {
  'use strict';

  var count = 0;

  function timer() {
    console.log('Time', count++);
    setTimeout(timer, 1000);
  }
  timer();
})();
```

Neste exemplo temos um comportamente similar ao método setInterval.

Criamos uma variável chamada **count** inciando com o valor 0. Logo depois criamos uma função chamada **timer** onde passamos uma menssagem para o console.log fazendo o incremento da variável **count**.

Depois passamos para o método **setTimeout** a função que criamos, **timer** que irá ser chamada a cada **1000 milissegundos**. E por fim invocamos a nossa função **timer**. Isto é chamado de **recursividade**.

### O que é recursão ?

Em desenvolvimento de software, recursão é quando você tem uma chamada para um método ou função dela para ela mesma.

Só que temos um problema, isso ficará executando infinitamente.

Podemos utilizar um **if** para parar a recursividade.

Ex:

```js
(function() {
  'use strict';

  var count = 0;

  function timer() {
    console.log('Time', count++);
    if (count > 10) {
      return;
    }
    setTimeout(timer, 1000);
  }
  timer();
})();
```

Mas no final qual escolher ?

## setTimeout() vs setInterval().

A diferença básica entre os dois é que usando o setTimeout podemos parar sua execução já o setInterval executa infinitamente.

Dentro do event loop o setTimeout será executado uma vez a cada x de milissegundos definidos dentro da função. Já o setInterval executará inúmeras vezes dentro do event loop.
independentemente se algo ou mais processos estiverem para serem executados dentro da nossa thread.

## clearInterval() e clearTimeout().

Retorna um intervalo ID que identifica exclusivamente o intervalo, então você pode removê-lo.

Vamos imaginar o seguinte código:

Ex:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Exemplo</title>
  </head>
  <body>
    <button data-js="button">Parar cronômetro</button>
    <script src="index.js"></script>
  </body>
</html>
```

PS: Podemos usar a propriedade data dentro do html para dizer que estamos selecionando aquele elemento atráves do Javascript.

Agora dentro do Javascript:

Ex:

```js
(function(win, doc) {
  'use strict';

  var count = 0;
  var $button = doc.querySelector('[data-js="button"]');
  var temp;

  function timer() {
    console.log('time', count++);

    if (count > 20) {
      return;
    }

    temp = setTimeout(timer, 1000);
  }

  timer();
})(window, document);
```

Neste exemplo criamos algo parecido com um cronômetro. Criamos uma variável **count** com valor 0, e selecionamos o elemento button do nosso documento dentro da variável **\$button**.

Criamos uma variável **temp** com o valor vázio por hora.

Definimos a mesma função **time** que criamos anteriormente porém com apenas uma modificação, passamos o valor da função setTimeout para temp. Neste caso pegamos o ID.

Toda vez que criamos uma variável e atribuimos ela o valor de setTimeout, essa variável irá receber o **ID de setTimeout**. Para que assim possamos limpar o time que foi gerado dentro da função setTimeout.

Ex:

```js
(function(win, doc) {
  'use strict';

  var count = 0;
  var $button = doc.querySelector('[data-js="button"]');
  var temp;

  function timer() {
    console.log('time', count++);

    if (count > 20) {
      return;
    }

    temp = setTimeout(timer, 1000);
  }

  timer();

  $button.addEventListener(
    'click',
    function() {
      clearTimeout(temp);
    },
    false
  );
})(window, document);
```

Temp agora tem o id de setTimeout que quando executamos o evento de 'click' podemos parar sua execução.

Da mesma forma podemos usar para o setInterval.

Ex:

```js
(function(win, doc) {
  'use strict';

  var count = 0;
  var $button = doc.querySelector('[data-js="button"]');
  var temp;

  function timer() {
    console.log('time', count++);
  }
  temp = setTimeout(timer, 1000);

  $button.addEventListener(
    'click',
    function() {
      clearInterval(temp);
    },
    false
  );
})(window, document);
```

## Links:

### Talks:

- [Talk #27 - JavaScript Event Loop (Parte 1) - Pagar.me Talks](https://www.youtube.com/watch?v=va8-xdxTywU)
- [Philip Roberts: What the heck is the event loop anyway? | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

### MDN:

- [setTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout)
- [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
- [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval)
- [clearTimeout()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout)

## Artigos:

- [Stackoverflow](https://pt.stackoverflow.com/questions/94851/por-que-as-vezes-%C3%A9-necess%C3%A1rio-o-settimeout-com-valor-0-zero)
- [Node.js: V8, Single thread e I/O não bloqueante - iMasters](https://imasters.com.br/front-end/node-js-v8-single-thread-e-io-nao-bloqueante)
- [Node.js: o que é esse Event Loop, afinal?-iMasters](https://imasters.com.br/front-end/node-js-o-que-e-esse-event-loop-afinal)
- [Fluxo de execução assíncrono em JavaScript – Callbacks - tableless](https://tableless.com.br/fluxo-de-execucao-assincrono-em-javascript-callbacks/)
- [JavaScript assíncrono: callbacks, promises e async functions - medium](https://medium.com/@alcidesqueiroz/javascript-ass%C3%ADncrono-callbacks-promises-e-async-functions-9191b8272298)
- [Javascript - como funcionam as funções recursivas - blog.da2k](https://blog.da2k.com.br/2015/02/27/javascript-como-funcionam-as-funcoes-recursivas/)
