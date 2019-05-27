# Introdução ao Ajax.

### O que é AJAX?

AJAX significa **Asynchronous JavaScript e XML**. Em poucas palavras, é o uso do objeto **XMLHttpRequest** para se comunicar com os scripts do lado do servidor. Ele pode **enviar** bem como **receber informações** em uma variedade de formatos, incluindo: **JSON, XML, HTML, e até mesmo arquivos de texto**. Porém a característica mais atraente do AJAX, é a sua natureza **"assíncrona"**, o que significa que ele pode fazer tudo isso sem a **necessidade de atualizar a página**. Isso permite a você atualizar partes de uma página com base em **eventos do usuário**.

Os dois recursos em questão que você pode utilizar são:

- **Fazer requisições para o servidor sem recarregar a página**.
- **Receber e trabalhar com dados do servidor.**

> window.XMLHttpRequest()

Para fazer a requisição funcionanar precisamos de alguns passos:

- 1: Instanciar o método _XMLHttpRequest()_

Ex:

```js
var ajax = new XMLHttpRequest();
```

- 2: Abri uma conexão que irá dizer o tipo de _método_ e a _url_ que iremos acessar. Os método são referentes ao protocolo _HTTP_ válido.

### Protocolos HTTP:

O protocolo HTTP define oito métodos **(GET, HEAD, POST, PUT, DELETE, TRACE, OPTIONS e CONNECT)** que indicam a ação a ser realizada no recurso especificado, o método determina o que o servidor deve fazer com o URL fornecido no momento da requisição de um recurso.

Uma solicitação HTTP, ou HTTP Request é uma maneira do navegador mostrar uma página da internet utilizando um dos oito métodos de solicitação do protocolo HTTP.

Além de solicitar um determinado arquivo, envia várias informação para o servidor, sendo elas: o seu IP, a versão do navegador que está usando, que página utilizou para pedir a HTTP Request e a idioma que você usa, entre outros.

### GET

O método GET requisita uma representação do recurso especificado. Requisições usando GET **devem apenas recuperar dados** e não devem ter qualquer outro efeito.

### HEAD

Variação do GET em que o recurso não é retornado. **É usado para obter metainformações por meio do cabeçalho da resposta**, sem ter que recuperar todo o conteúdo.

### POST

Envia dados para serem processados (por exemplo, dados de um formulário HTML) para o recurso especificado. **Os dados são incluídos no corpo do comando**. Sua utilização em uma requisição **ocorre quando é necessário enviar dados ao servidor para serem processados, geralmente por um programa script identificado no Request-URI**. Uma requisição por meio desse método sempre requer que as informações submetidas **sejam incluídas no corpo da mensagem e formatadas como uma query string, além de conter cabeçalhos adicionais especificando seu tamanho (Content-Length) e seu formato (Content-Type)**. Por isso, esse método oferece uma maior segurança em relação aos dados transferidos, ao contrário do método GET que os dados são anexados a URL, ficando visíveis ao usuário.

### PUT

O método PUT envia os dados de forma semelhante ao POST, **através do corpo do HTTP** a diferença entre os 2 métodos é **semântica**. Por exemplo:

Caso você necessite atualizar os dados de um usuário, **utilizando o método PUT você pode os atualizar diversas vezes, pois o PUT vai sobrescrever os dados com isso ficará somente com um único registro atualizado**.

Se você executasse este mesmo procedimento utilizando o método POST, você criaria diversos registros para cada requisição realizada.

### DELETE

Exclui o recurso.

### TRACE

Ecoa o pedido, de maneira que o cliente possa saber o que os servidores intermediários estão mudando em seu pedido.

### OPTIONS

Recupera os métodos HTTP que o servidor aceita.

### CONNECT

Serve para uso com um proxy que possa se tornar um túnel SSL e TLS (um túnel pode ser usado, por exemplo, para criar uma conexão segura).

Ex:

```js
ajax.open(<method>, <url>);
```

- 3: Enviar os dados para o servidor.

Ex:

```js
ajax.send(<data>);
```

Agora vamos ver isso um pouco na prática :smile:

Ex:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Ajax Example</title>
  </head>
  <body>
    <script src="index.js"></script>
  </body>
</html>
```

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'index.js');
  ajax.send();
})();
```

Neste pequeno exemplo fazemos uma requisição do tipo **GET** para o arquivo _index.js_ que está na nossa máquina. E com essa requisição feita com o tipo _xhr_ que seria _XMLHttpRequest_ temos como resposta o conteúdo desse arquivo.

# Ajax parte 2.

### Evento onreadystatechange.

Define uma função a ser chamada quando a propriedade _readyState_ **é alterada**.

Podemos utilizar esse mesmo evento de duas formas:

Ex:

```js
ajax.onreadystatechange = function() {
  // ....
};
```

Ou podemos usar listeners de evento.

Ex:

```js
ajax.addEventListener(
  'readystatechange',
  function() {
    console.log('Terminou a requisição'); // Terminou a requisição.
  },
  false
);
```

Neste momento quando o evento é disparado e entrando no console.log, é mostrado a menssagem 3 vezes dentro do console do navegador. Mas porque é mostrado 3 vezes a mesma menssagem ? Sendo que foi realizada apenas uma única requisição. Porque o evento _onreadystatechange_ verifica exatamente quando o estado mudou.

E quando precisamos verificar o estado atual da nossa requisição ? Usamos a propriedade _ajax.readyState_

### ajax.readyState

Detém o status do _XMLHttpRequest_.

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'index.js');
  ajax.send();
  ajax.addEventListener('readystatechange', function() {
    console.log('Terminou a requisição.', ajax.readyState);
  });
  /* 
  Terminou a requisição. 2
  Terminou a requisição. 3
  Terminou a requisição. 4
  */
})();
```

E o que seriam esses números ??

- 0: pedido não inicializado.

  - Acontece quando o _ajax.open_ não é chamado.

- 1: conexão de servidor estabelecida.

  - Acontece quando abrimos a conexão usando o _ajax.open_.

- 2: pedido recebido.

  - Acontece quando temos os _Headers_ recebidos da nossa conexão.

- 3: processamento de pedido.

  - Acontece quando o corpo da requisição está sendo carregado, e carregando o conteúdo para manipulção do mesmo.

- 4: solicitação concluída e a resposta está pronta.
  - Acontece quando o conteúdo está concluído com sucesso.

Também podemos verificar cada _status_ de cada requisição feita usando a propriedade _ajax.status_.

### ajax.status

Retorna o **número de status** de uma solicitação.

**Status**:

- 200:
  - Status: ok.
- 403:
  - Status: Proibido.
- 404:
  - Status: Não encontrado.
- 500:
  - Status: Erro interno do servidor.

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'index.js');
  ajax.send();
  ajax.addEventListener('readystatechange', function() {
    console.log('Terminou a requisição.', ajax.readyState, ajax.status);
  });
  /*
  Terminou a requisição. 2 200 
  Terminou a requisição. 3 200 
  Terminou a requisição. 4 200
  */
})();
```

Se for passado algo diferente e a conexão não consiga estabelecer uma conexão o _status_ irá mudar indicando o problema na hora da conexão.

# Ajax parte 3.

### Manipulando a resposta

Vimos que quando a nossa requisição termina a propriedade _ajax.readyState_ tem como valor _4_ e a propriedade _ajax.status_ tem como valor _200_. Isso indica que está tudo ok !

Vamos criar uma função com base na requisição manipulamos a resposta e caso der errado mostramos uma menssagem de erro.

E para pegar os dados dessa reposta usamos a propriedade _ajax.responseText_, que devolve a resposta no formato de String.
Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', '/');
  ajax.send();

  console.log('Carregando....');

  ajax.addEventListener(
    'readystatechange',
    function() {
      if (isRequestOk()) {
        console.log('Requisição Ok!!', ajax.responseText);
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
  /*
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Ajax Example</title>
    </head>
    <body>
      <script src="index.js"></script>
    </body>
  </html>
  */
})();
```

Agora vamos imaginar uma outra forma de manipular essa resposta, digamos que temos alguns dados vindo de um arquivo _json_. E precisamos fazer a manipulação desses dados, seria basicamente:

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'data/data.json');
  ajax.send();

  console.log('Carregando...');
  ajax.addEventListener(
    'readystatechange',
    function() {
      if (isRequestOk()) {
        var data = JSON.parse(ajax.responseText);
        console.log('Requisição ok', data);
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();
```

Neste exemplo temos como retorno um _Array_ com os objetos contindos dentro do nosso arquivo _data.json_ :smile:

A forma padrão de manipulação da resposta é usando _ajax.responseXML_

### ajax.responseXML

Retorna os dados de resposta como dados XML.

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'data/data.xml');
  ajax.send();

  console.log('Carregando...');
  ajax.addEventListener(
    'readystatechange',
    function() {
      if (isRequestOk()) {
        console.log('Requisição ok', ajax.responseXML);
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();
```

# Ajax parte 4, try catch.

### Tratamento de erros.

Por diversas vezes dentro da nossas aplicações lidamos com erros. E vamos imaginar o seguinte cenário.

Estamos fazendo uma requisição para uma um arquivo _data.xml_, até ai nada de mais, porém se aplicarmos um método de parse nesses dados ? Estamos de alguma forma tentando transformar esses dados em objeto _JSON_ o que isso pode acarretar ?

> Uncaught SyntaxError: Unexpected token <

O erro é bem claro o _JSON.parse_ não conseguiu fazer o parse para _JSON_ dos dados xml.

Dentro do Javascript temos como trabalhar com tratamento de erros usando _throw_.

### throw

A instrução _throw_ permite criar erros personalizados.

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'data/data.xml');
  ajax.send();

  console.log('Carregando...');
  ajax.addEventListener(
    'readystatechange',
    function() {
      if (isRequestOk()) {
        throw new Error('Messagem de erro');
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();
```

> Uncaught Error: Messagem de erro

Dessa forma temos uma messagem de erro um pouco mais amigável e personalizável :smile:.

E agora como podemos capturar esses erros ? Usando _try/catch_.

### try/catch

A instrução _try_ permite testar um bloco de código para erros.

A instrução _catch_ permite manipular o erro.

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'data/data.xml');
  ajax.send();

  console.log('Carregando...');
  ajax.addEventListener(
    'readystatechange',
    function() {
      if (isRequestOk()) {
        try {
          throw new Error('Messagem de erro');
        } catch (error) {
          console.log(error);
        }
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();
```

Neste exemplo a instrução _try/catch_ funciona basicamente da seguinte maneira. Quando o erro é disparado dentro da cláusula _try_ esse erro não será mostrado para o usuário. O erro em questão será passado para cláusula _catch_, com o erro que foi disparado no seu parâmetro e assim tendo como sua saida no console.

Ou poderiamos fazer dessa forma:

Ex:

```js
(function() {
  'use strict';
  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'data/data.xml');
  ajax.send();

  console.log('Carregando...');
  var response = '';
  ajax.addEventListener(
    'readystatechange',
    function() {
      if (isRequestOk()) {
        try {
          response = JSON.parse(ajax.responseText);
        } catch (error) {
          response = ajax.responseText;
        }
        console.log(response);
      }
    },
    false
  );

  function isRequestOk() {
    return ajax.readyState === 4 && ajax.status === 200;
  }
})();
```

Dessa forma se não conseguimos fazer o _parse_ é retornado o próprio xml como uma String no lugar do erro.

### Links

- [Ajax - MDN](https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started)

- [HTTP - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP)

- [Códigos de status de respostas HTTP - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

- [AJAX Introduction](https://www.w3schools.com/js/js_ajax_intro.asp)

- [Hypertext Transfer Protocol](https://pt.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

- [AJAX - The XMLHttpRequest Object](https://www.w3schools.com/js/js_ajax_http.asp)

- [O que é o HTTP? Como funcionam requests e responses?.](http://gabsferreira.com/o-que-e-o-http-como-funciona-request-respose/)

- [Error - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error)

- [JSON vs XML](https://www.w3schools.com/js/js_json_xml.asp)

- [JavaScript Errors - Throw and Try to Catch](https://www.w3schools.com/js/js_errors.asp)
