# Module Pattern

Em JavaScript, a palavra _"módulos"_ refere-se a **pequenas unidades de código reutilizável**, independente. Eles são a base de muitos padrões de design JavaScript e são criticamente necessários ao criar qualquer aplicativo baseado em JavaScript não-trivial.

Mas antes de entramos a fundo o que é **Module Pattern**, vamos entender como podemos **importar** e **exportar** a nossa lib **DOM**.

Basicamente criamos um novo arquivo **dom.js** para que nesse arquivo tenha todo o conteúdo da nossa lib.

Ex:

```js
(function(doc) {
  'use strict';
  function DOM(elements) {
    this.element = doc.querySelectorAll(elements);
  }

  DOM.prototype.isArray = function(obj) {
    return Object.prototype.toString(obj) === '[object Array]';
  };

  DOM.prototype.on = function on(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.addEventListener(event, callback, false);
    });
  };

  DOM.prototype.off = function off(event, callback) {
    Array.prototype.forEach.call(this.element, function(element) {
      element.removeEventListener(event, callback, false);
    });
  };

  DOM.prototype.get = function get() {
    return this.element;
  };

  DOM.prototype.forEach = function forEach() {
    return Array.prototype.forEach.apply(this.element, arguments);
  };

  DOM.prototype.map = function map() {
    return Array.prototype.map.apply(this.element, arguments);
  };

  DOM.prototype.filter = function filter() {
    return Array.prototype.filter.apply(this.element, arguments);
  };

  DOM.prototype.reduce = function reduce() {
    return Array.prototype.reduce.apply(this.element, arguments);
  };

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.element, arguments);
  };

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.element, arguments);
  };

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.element, arguments);
  };

  DOM.isArray = function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  DOM.isObject = function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  };

  DOM.isFunction = function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
  };

  DOM.isNumber = function isNumber(obj) {
    return Object.prototype.toString.call(obj) === '[object Number]';
  };

  DOM.isString = function isString(obj) {
    return Object.prototype.toString.call(obj) === '[object String]';
  };

  DOM.isBoolean = function isBoolean(obj) {
    return Object.prototype.toString.call(obj) === '[object Boolean]';
  };

  DOM.isNull = function isNull(obj) {
    return (
      Object.prototype.toString.call(obj) === '[object Null]' ||
      Object.prototype.toString.call(obj) === '[object Undefined]'
    );
  };
})();
```

Agora precisamos chama-lá dentro do nosso arquivo _index.html_ porém sabemos que precisamos da nossa lib antes de qualquer outro script, pois estamos fazendo uso dela. Então dentro do nosso arquivo _html_.

Ex:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>challenge-28</title>
  </head>
  <body>
    <form data-js="form-cep">
      <input type="text" data-js="input-cep" />
      <button type="submit">Consultar CEP</button>
    </form>

    <div>
      <h2 data-js="status"></h2>
    </div>

    <div data-js="cpf-info">
      <p><strong> Logradouro:</strong> <span data-js="logradouro">-</span></p>
      <p><strong> Bairro:</strong> <span data-js="bairro">-</span></p>
      <p><strong> Estado:</strong> <span data-js="estado">-</span></p>
      <p><strong> Cidade:</strong> <span data-js="cidade">-</span></p>
      <p><strong> CEP:</strong> <span data-js="cep">-</span></p>
    </div>
    <script src="dom.js"></script>
    <script src="challenge-28.js"></script>
  </body>
</html>
```

Com isso temos a nossa lib importada, será que já podemos usa-lá ?

> Uncaught ReferenceError: DOM is not defined

Temos um erro dizendo que **DOM** não está definido. Isso acontece porque criamos a função **DOM** dentro de uma **IIFE**, e com isso seu **escopo é limitado a ela**, sendo assim nenhum código de fora **não pode acessar a lib DOM**.

E como poderiamos acessar a nossa lib ?

Neste caso precisamos _exportar_ a nossa lib **DOM como uma propriedade global do objeto Window**.

Ex:

```js
(function() {
  'use strict';
  window.DOM = DOM;
})();
```

Neste caso estamos criando uma propriedade **DOM** dentro do objeto **Window** recebendo a nossa lib **DOM**.

Agora podemos importar esta propriedade que criamos dentro do nosso projeto:

Ex:

```js
(function(DOM) {
  'use strict';
  /// código da lib ....
})(window.DOM);
```

Neste exemplo importamos na nossa **IIFE** a propriedade do objeto window, a propriedade **DOM**, e digo que localmente ela também se chamará **DOM**.

PS: Neste exemplo sabemos que parâmetros de funções tem como seu escopo **local** e quando chamamos **DOM** estamos referenciando **window.DOM**, só que de forma local.

Podemos ainda fazer com que a referência de window e document sejam local. :smile:

Ex:

```js
(function(win, doc) {
  'use strict';

  // win.DOM = DOM;
  //doc.querySelector();

})(window, document);
```

Agora vamos entender um pouco mais sobre como funciona o **Module Pattern** dentro do Javascript.

Se acontecer em um determinado momento do nosso projeto onde nós precisamos que o nosso código seja também um módulo para que possamos usar futuramente, como poderiamos fazer ?

Basicamente criaremos uma função chamada _app_ e essa função _app_ irá **retornar algumas funções** que precisamos que ela retorne.

Ex:

```js
(function(DOM) {
  'use strict';

  function app() {
    var $formCEP = new DOM('[data-js="form-cep"]');
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $estado = new DOM('[data-js="estado"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $cep = new DOM('[data-js="cep"]');
    var $status = new DOM('[data-js="status"]');
    var ajax = new XMLHttpRequest();
    $formCEP.on('submit', handleFormSubmit, false);

    function handleFormSubmit(event) {
      event.preventDefault();
      var url = getUrl();
      ajax.open('GET', url);
      ajax.send();
      getMessage('loading');
      ajax.addEventListener('readystatechange', handleReadyStateChange, false);
    }

    function getUrl() {
      return replaceCEP(
        'http://apps.widenet.com.br/busca-cep/api/cep/[CEP].json'
      );
    }

    function clearCEP() {
      return $inputCEP.get()[0].value.replace(/\D/g, '');
    }

    function isRequestOk() {
      return ajax.readyState === 4 && ajax.status === 200;
    }

    function handleReadyStateChange() {
      if (isRequestOk()) {
        getMessage('ok');
        fillCEPFields();
      }
    }

    function fillCEPFields() {
      var data = parseData();
      if (data.status === 0) {
        getMessage('error');
        data = clearData();
      }

      $logradouro.get()[0].textContent = data.address;
      $bairro.get()[0].textContent = data.district;
      $estado.get()[0].textContent = data.state;
      $cidade.get()[0].textContent = data.city;
      $cep.get()[0].textContent = data.code;
    }

    function clearData() {
      return {
        address: '-',
        district: '-',
        state: '-',
        city: '-',
        code: '-'
      };
    }

    function parseData() {
      var result;
      try {
        result = JSON.parse(ajax.responseText);
      } catch (error) {
        result = null;
      }
      return result;
    }

    function getMessage(typeMessage) {
      var messages = {
        loading: replaceCEP('Buscando informações para o CEP: [CEP]...'),
        ok: replaceCEP('Endereço referente ao CEP: [CEP]'),
        error: replaceCEP('Não encontramos o endereço para o CEP: [CEP].')
      };
      $status.get()[0].textContent = messages[typeMessage];
    }
    function replaceCEP(message) {
      return message.replace('[CEP]', clearCEP());
    }
  }

  app();
})(window.DOM);
```

Basicamente apenas criamos uma função que retorna as demais funções do nosso código que no caso seria a função _app_, porém isso é uma das forma de se trabalhar com **Module Pattern** mas existem, outras formas :smile:.

# Module Pattern parte 2.

O Module Pattern é muito utilizado porque ele permite organizar melhor o código, sem expor variáveis globais de modo promíscuo. Como ainda não temos uma sintaxe de módulos do próprio JavaScript **( agora temos no es6 )**, usamos os módulos para garantir que o escopo de variáveis seja fechado, além de simular a privacidade de atributos e funções.

Este pattern pode envolver uma combinação de diversas técnicas como closures e funções auto-executáveis.

## Revealing Module Pattern.

Essa técnica retornar uma interface pública à partir de um módulo.

Ex:

```js
var Counter = (function() {
  'use strict';

  var count = 0;

  return {
    count: function count() {
      return count;
    },

    increments: function increments() {
      return count++;
    }
  };
})();
```

Note que ambas as funções referenciam a variável _count_, que **não pode ser acessada diretamente de fora da função auto-executável**. Dessa forma, podemos **encapsular todo o comportamento**, sem termos que nos preocupar com modificações feitas sem ser pela função **Counter.increment()**.

Seguindo o conceito mostrado a cima, vamos dizer que queremos que alguns métodos sejam exportados e utilizados dentro de _app()_.

Ex:

```js
(function(DOM) {
  'use strict';

  function app() {
    // código da lib...
  }

  return {
    getMessage: getMessage,
    replaceCEP: replaceCEP
  };

  window.app = app;
  app();
})(window.DOM);
```

Dessa forma temos como retorno ao executar o _app_ um _objeto_ contendo os métodos que queremos _exportar_ que nesse caso seriam os métodos: _getMessage e replaceCEP_.

E neste exemplo temos o forte uso de **closure**, como já foi dito a cima, mas o que seria uma **closure** ?

## Closure

Uma closure (fechamento) é uma função que se "lembra" do ambiente ou escopo léxico em que ela foi criada.

Ex:

```js
(function() {
  function init() {
    var name = 'JS Ninja';
    function displayName() {
      console.log(name);
    }
    displayName();
  }
  init();
})();
```

A função _init()_ cria uma variável local chamada **name**, e depois define uma função chamada _displayName()_. _displayName()_ é uma função aninhada **(uma closure)**, ela é definida dentro da função _init()_, e está disponivel **apenas dentro do corpo daquela função**. Diferente de _init()_, _displayName()_ **não tem variáveis locais próprias**, e ao invés disso **reusa a variável name declarada na função pai**.

Seguindo o mesmo conceito a nossa função _replaceCEP_ tem o mesmo funcionamento, pois ainda que não tenhamos acessado o valor do _input_ a mesma guarda o valor da função _clearCEP_, e assim podendo acessar o valor que está fora do escopo dela e reutilizá-lo.

### Links

- [JavaScript Module Pattern (Padrão de Módulo) - DPW](https://desenvolvimentoparaweb.com/javascript/javascript-module-pattern-padrao-modulo/)

- [A JavaScript Module Pattern - yuiblog](https://yuiblog.com/blog/2007/06/12/module-pattern/)

- [Meu workflow Javascript com Module Pattern - Da2k](https://blog.da2k.com.br/2014/03/18/meu-workflow-javascript-com-module-pattern/)

- [Escrevendo JavaScript modular - Nando Vieira](https://nandovieira.com.br/escrevendo-javascript-modular)

- [Um pouco mais sobre JavaScript modular - Nando Vieira](https://nandovieira.com.br/um-pouco-mais-sobre-javascript-modular)

- [Só mais um pouco sobre JavaScript Modular - Nando Vieira](https://nandovieira.com.br/so-mais-um-pouco-sobre-javascript-modular)

- [Design Patterns no JavaScript – Module - Nando Vieira](https://nandovieira.com.br/design-patterns-no-javascript-module)

- [JavaScript Module Pattern - Medium](https://medium.com/@tkssharma/javascript-module-pattern-b4b5012ada9f)

- [Closures - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Closures)

- [Desvendando a linguagem JavaScript - #7 - Function - Parte 1 - Rodrigo Branas](https://www.youtube.com/watch?v=OqR0hE-DQn4&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=7)

- [Desvendando a linguagem JavaScript - #8 - Function - Parte 2 - Rodrigo Branas](https://www.youtube.com/watch?v=m9uPpURTI0c&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=8)
