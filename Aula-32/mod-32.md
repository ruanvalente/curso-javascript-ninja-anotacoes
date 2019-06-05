# Ajax

AJAX significa _Asynchronous JavaScript e XML_. Em poucas palavras, é o uso do objeto _XMLHttpRequest_ para se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo **JSON, XML, HTML, e até mesmo arquivos de texto**. Porém a característica mais atraente do AJAX, é a sua natureza _"assíncrona"_, o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. Isso permite a você atualizar partes de uma página com base em eventos do usuário.

Em aulas passadas vimos como funciona o Ajax e como fazemos requisições e como manipulamos essas repostas mas como isso funciona do lado do servidor ?

### REST

**Representational State Transfer (REST)**, em português **Transferência de Estado Representacional**, é um estilo de arquitetura de software que define um conjunto de restrições a serem usados para a criação de web services (serviços Web). Os Web services que estão em conformidade com o estilo arquitetural REST, denominados Web services RESTful), fornecem interoperabilidade entre sistemas de computadores na Internet. Os Web services RESTful permitem que os sistemas solicitantes acessem e manipulem representações textuais de recursos da Web usando um conjunto uniforme e predefinido de operações sem estado.

PS: Para exemplificar como é o funcionamento de uma _REST-API_ vamos utilizar o _express_ que é um: framework web rápido, flexível e minimalista para **Node.js**, segundo o próprio site.

Neste exemplo teremos duas aplicações uma para o **front** e outra para o **back**.

No front vamos usar o que já sabemos sobre o Javascript do lado do cliente, e vamos utilizar o Ajax para fazer requisições ao servidor ( back ) que irá devolver esses dados.

No back vamos precisar o _express_ que é um framework web para Nodejs para que possamos criar a nossa rest api.

Vamos ter a seguinte estrutura de pastas:

Ex:

```
front
|--
  |-- index.js
  |-- index.html

back
| --
  | -- node_module
  | -- package.json
  | -- index.js
```

# REST API

Agora vamos exemplificar o uso de uma _REST-API_ usando _express_, mas para isso precisamos do módulo.

```
npm install --save express
```

Relizando a instalação podemos começar.

Dentro do arquivo _index_ iremos colocar o seguinte código.

PS: Dentro do Node não precisamos usar a _IIFE_, pois não temos o problema do escopo **global** no qual temos com Javascript do lado do cliente. E para que isso aconteça precisamos **força** para que a variável esteja em escopo global.
Mas faremos isso somente no Node :smile:

Ex:

```js
'use strict';

var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('<h1>Hello Word</h1>');
});

app.listen(3000, function() {
  console.log('Server listen on port 3000');
});
```

Vamos entender o código a cima.

Primeiro utilizamos a diretiva 'use strict' a qual estamos bem acostumados e logo depois temos a declaração de duas variáveis: _express_ e _app_.

A variável express é seguida de uma função chamada _require_ onde passamos em uma String _express_ isso diz para o node carregar o módulo do _express_ que foi instalado usando o _npm_, e com isso ele faz a sua busca dentro da pasta _node_modules_ e ao encontrar o módulo o mesmo é carregado.

Logo depois temos a variável _app_ que recebe _express_ assim podemos usar apenas a variável _app_ pois ela contém tudo que precisamos para utilizar o _express_.

Logo depois temos as definições das rotas das nossas requisições. Onde _app_ fará um _get_ na rota passada em String, nesse caso a '/'. Logo depois é executado uma função de _callback_, e dentro dessa função é recebido dois parâmetros muito importantes. O _resquest_ e o _response_. Onde o request é a nossa **requisição para aquela rota** e o response **é a resposta que iremos enviar para quem chamou aquela requisição**.

PS: Dentro do Node é usado um padrão nos parâmetros, onde _request_ e _response_ são abreviados por **req e res**. Apartir daqui vamos utilizar esse padrão de escrita.

Agora vamos ver como isso vai ficar no Front.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Front</title>
  </head>
  <body>
    <h1>Front</h1>

    <script src="index.js"></script>
  </body>
</html>
```

Apenas temos um HTML básico e uma chamada para o nosso script, agora vamos ver como ficará o nosso script para fazer as nossas chamadas Ajax para o nosso Backend.

Ex:

```js
(function() {
  'use strict';
  var ajax = XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000', true);
  ajax.send();

  ajax.addEventListener(
    'readystatechange',
    function(e) {
      if (ajax.readyState === 4 && ajax.status === 200) {
        console.log(ajax.responseText);
      }
    },
    false
  );
})();
```

Agora dentro do nosso arquivo Javascript temos o nosso exemplo para fazer a nossa requisição Ajax ao nosso servidor.

Criamos uma variável _ajax_ que será uma nova instância do objeto _XMLHttpRequest_, criamos uma conexão usando o método _open_ e dizemos o verbo HTTP que iremos usar, neste caso será o verbo _GET_ e logo depois a url a onde será feita a requisição neste caso a url do nosso servidor backend. Passamos o parâmetro _true_ para dizer que essa requisição será assíncrona.

O parâmetro para o método _send_ pode ser qualquer dado que você deseja enviar para o servidor, neste caso não estamos enviando nada.

E por fim adicionamos um listener de evento _readystatechange_ que é ativado quando o atributo _readyState_ de um documento é alterado. E dentro desse _callback_ fazemos uma pequena verificação se o readyState tem como status onde 4 é: solicitação concluída e a resposta está pronta. e 200 é OK.

# REST API - Cors

Cross-Origin Resource Sharing (Compartilhamento de recursos com origens diferentes) é um mecanismo que usa cabeçalhos adicionais HTTP para informar a um navegador que permita que um aplicativo Web seja executado em uma origem (domínio) com permissão para acessar recursos selecionados de um servidor em uma origem distinta. Um aplicativo Web executa uma requisição cross-origin HTTP ao solicitar um recurso que tenha uma origem diferente (domínio, protocolo e porta) da sua própria origem.

Na nossa aplição precisamos instalar um módulo chamado _cors_ usando _npm_. Então dento da nossa pasta de backend vamos instalar esse módulo.

Ex:

```
npm install --save cors
```

Um exemplo de requisição cross-origin: o código JavaScript frontend de um aplicativo web em um servidor http://domain-a.com usa XMLHttpRequest para fazer uma requisição em http://api.domain-b.com/data.json.

Por motivos de segurança, navegadores restringem requisições cross-origin HTTP a partir de scripts.

Assim, um aplicativo web que faz uso dessas APIs só poderá fazer requisições HTTP da mesma origem da qual o aplicativo foi carregado, a menos que a resposta da outra origem inclua os cabeçalhos CORS corretos.

E como podemos usa-lo dentro do nosso projeto ?

Ex:

```js
'use strict';

var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function(request, response) {
  response.send('<h1>Hello Word</h1>');
});

app.listen(3000, function() {
  console.log('Server listen on port 3000');
});
```

Simples assim :smile:

Agora se quisermos pegar um usuário apenas passando a seguinte rota: /user/nome-do-usuário ? Como poderiamos fazer ?

Dentro do _express_ podemos passar na nossa rota uma variável que é acessível dentro de _req.params.nome-da-variável_. Assim podemos retornar algo conforme o nome de um usuário por exemplo for passado para essa rota.

Ex:

```js
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function(req, res) {
  res.send('Home');
});

app.get('/user/:username', function(req, res) {
  res.send(req.params.username);
});

app.listen(3000, function() {
  console.log('Server listen on port 3000');
});
```

Conseguimos pegar esses dados da requisição através de req.params que são os **parâmetros da requisição**.

Agora vamos supor que temos um objeto chamado _users_ que contém vários usuários e de acordo com a requisição do cliente ( front ) esses dados serão devolvidos parseados para JSON.

Ex:

```js
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var users = {
  joao: {
    name: 'João',
    lastName: 'Silva',
    age: 30
  },
  maria: {
    name: 'Maria',
    lastName: 'Souza',
    age: 23
  },
  jose: {
    name: 'José',
    lastName: 'Oliveira',
    age: 35
  },
  silvana: {
    name: 'Silvana',
    lastName: 'Silva',
    age: 19
  }
};

app.get('/', function(req, res) {
  res.send('Home');
});

app.get('/user/:username', function(req, res) {
  var username = req.params.username;
  res.json(users[username]);
});

app.listen(3000, function() {
  console.log('Server listen on port 3000');
});
```

A resposta será devolvida no formato JSON de acordo com o nome passado por parâmetro mas se o nome não existir ? Será retornado um objeto em branco. Mas o que podemos fazer para deixar isso um pouco mais claro.

Ex:

```js
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

var users = {
  joao: {
    name: 'João',
    lastName: 'Silva',
    age: 30
  },
  maria: {
    name: 'Maria',
    lastName: 'Souza',
    age: 23
  },
  jose: {
    name: 'José',
    lastName: 'Oliveira',
    age: 35
  },
  silvana: {
    name: 'Silvana',
    lastName: 'Silva',
    age: 19
  }
};

app.get('/', function(req, res) {
  res.send('Home');
});

app.get('/user/:username', function(req, res) {
  var username = req.params.username;
  if (users[username]) {
    return res.json(users[username]);
  }
  res.status(404).json({ erro: 'Usuário não encontrado' });
});

app.listen(3000, function() {
  console.log('Server listen on port 3000');
});
```

Agora estamos fazendo uma pequena verificação onde se username passado existir dentro de users é retornado o usuário e suas informações.

Se ele não for encontrado mandamos um erro, e através do método _status_ podemos manipular o status do erro, assim enviando o erro conforme a requisição.

E por fim retornamos a messagem dizendo que o usuário não foi encontrado.

# Ajax - sync - POST

Já falamos bastante sobre Ajax mas vamos ver alguns outros métodos e parâmetros que ainda não conhecemos.

```
ajax.send(<GET>, <url>, <async>)
```

Podemos usar o Ajax de forma síncrona, dentro do método _send_ no terceiro parâmetro definimos como **false** isso quer dizer que a nossa requisição será feita de forma síncrona.

Ex:

```js
(function() {
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/users/ruan', false);
  ajax.send();
  console.log(ajax.responseText);
})();
```

Dessa forma já pegamos a resposta diretamente sem o uso de algum listener de evento, porém isso pode prejudicar a experiência do usuário.

### ajax.abort()

Cancela a solicitação atual.

Ex:

```js
(function() {
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('GET', 'http://localhost:3000/users/ruan', true);
  ajax.send();
  ajax.addEventListener(
    'readystatechange',
    function(e) {
      if (ajax.readyState === 2) {
        console.log('Headers OK!', ajax.status);
        ajax.abort();
      }
    },
    false
  );
})();
```

Neste exemplo dizemos para que quando os Headers da requisição estiverem OK dizemos que não queremos mais nada e abortamos a requisição através do método _ajax.abort()_

Dependendo da requisição a resposta pode ser gigante e usando o método _ajax.abort_ pode pegar apenas o que queremos e abortar a requisição quando esses dados já estiverem prontos.

### POST

Da mesma forma que usamos o verbo _GET_ dentro da abertura da requisição faremos o mesmo para o verbo _POST_ da seguinte maneira.

Ex:

```js
ajax.open('POST', url);
```

### ajax.setRequestHeader(<key>, <value>)

O método _ajax.setRequestHeader_ adiciona um rótulo/valor par ao cabeçalho para ser enviado.

Ex:

```js
ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
```

Basicamente quando precisamos mandar um _POST_ para o servidor precisamos dizer no _header_ o tipo do conteúdo que estamos mandando.

Feito isso iremos fazer um _send_ passando a nossa _chave_ e o _valor_ no formato de **query string**.

Ex:

```js
ajax.send('key1=value1&key2=value2');
```

# Ajax - POST parte 2.

Vamos continuar e agora vamos fazer um _POST_ para um nosso servidor.

Ex:

```js
(function() {
  'use strict';

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'http://localhost:3000/users');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=roberto&lastName=silva&age=23');

  ajax.onreadystatechange = function(e) {
    if (ajax.readyState === 4) {
      console.log('Usuário criado', ajax.responseText);
    }
  };
})();
```

Como vimos nas aulas anteriores estamos enviando um _POST_ para o nosso servidor e estamos dizendo o tipo do nosso conteúdo usando o método _ajax.setRequestHeader_ e logo abaixo enviamos o nosso conteúdo através do método _ajax.send_.

Agora dentro do backend precisamos pegar essas informações convertidas em objetos. Essa resposta vem no _body_ da requisição e para podemos converter essa resposta em objeto usamos o módulo _body-parser_.

```
npm install --save body-parser
```

Após a sua instalação podemos importar dentro do nosso projeto.

Ex:

```js
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var users = {
  ruan: {
    username: 'Ruan',
    lastName: 'Valente',
    age: 24
  },

  lorena: {
    username: 'Lorena',
    lastName: 'Torres',
    age: 26
  },

  victoria: {
    username: 'Victoria',
    lastName: 'Borralho',
    age: 14
  },

  carlos: {
    username: 'Carlos',
    lastName: 'Borralho',
    age: 53
  }
};

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.get('/users/:username', function(req, res) {
  var username = req.params.username;
  if (users[username]) {
    return res.json(users[username]);
  }
  res.status(404).json({ erro: 'User not found' });
});

app.post('/users', function(req, res) {
  var username = req.body.username;
  var lastName = req.body.lastName;
  var age = req.body.age;
  res.json({ username: username, lastName: lastName, age: age });
});

app.listen(3000, function() {
  console.log('Server listen 3000');
});
```

Com isso retornamos um JSON com os dados e dizendo que o usuário foi criado com sucesso.

Podemos melhor um pouco o nosso verbo _GET_

Ex:

```js
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

var users = [{ username: 'ruan', name: 'ruan', age: 23 }];

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

app.get('/users/:username', function(req, res) {
  var username = req.params.username;
  var hasUserName = users.some(function(user) {
    return user.username === username;
  });
  if (hasUserName) {
    return res.json(
      users.filter(function(user) {
        return user.username === username;
      })
    );
  }
  res.status(404).json({ erro: 'User not found' });
});

app.post('/users', function(req, res) {
  var username = req.body.username;
  var lastName = req.body.lastName;
  var age = req.body.age;
  res.json({ username: username, lastName: lastName, age: age });
});

app.listen(3000, function() {
  console.log('Server listen 3000');
});
```

:smile: Assim procuramos por cada usuário usando a função some e se esse usuário existir usando o método filter retornamos a reposta para o cliente.

# Ajax - POST parte 3.

Agora nesta útima etapa, vamos melhorar um pouco mais as coisas. Baseado no Array de objetos (usuários) que temos dentro da nossa aplicação vamos adicionar dinamicamente esse usuários atráves do verbo _POST_.

**Front**

Ex:

```js
(function() {
  'use strict';

  // POST - Para enviar os dados.

  var ajax = new XMLHttpRequest();
  ajax.open('POST', 'http://localhost/user');
  ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  ajax.send('username=joao&name=João&age=23');

  console.log('Criando usuário');

  ajax.addEventListener(
    'readystatechange',
    function(e) {
      if (ajax.readyState === 4 && ajax.status === 2000) {
        console.log(ajax.responseText);
      }
    },
    false
  );
})();

/// GET - Para pegar os dados.

(function() {
  'use strict';

  var get = XMLHttpRequest();
  get.open('GET', 'http://localhost/user/joao');
  get.send();
  get.addEventListener(
    'readystatechange',
    function(e) {
      if (get.readyState === 4 && get.status === 200) {
        console.log(get.responseText, get.status);
      }
    },
    false
  );
})();
```

Com base nisso enviamos ao backend os dados do usuário que desejamos criar. E dentro do backend vamos adicionar esse usuário dentro do nosso Array de (users).

**Back**

Ex:

```js
app.post('/user', function(req, res) {
  var username = req.body.username;
  var name = req.body.name;
  var age = req.body.age;
  var hasUserName = users.some(function(user) {
    return user.username === username;
  });

  if (!hasUserName) {
    users.push({
      username: username,
      name: name,
      age: age
    });
  }
  res.json({ users });
});
```

Como vimos pegamos os dados vindos do cliente através do _req.body_, criamos uma função _hasUserName_ que irá retornar **true** se o username passado estiver contido dentro objeto users. E por fim fazemos uma pequena verificação se o _hasUserName_ não existir dentro do nosso Array de objetos o mesmo será adicionado e por fim será retornado um _JSON_ com todos os users criados. :smile:

PS: Usamos a função _hasUserName_ para impedir que o mesmo usuário seja cadastrado novamente dentro do nosso objeto.

### Links:

- [Ajax - primeiros passos](https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started)

- [readystatechange](https://developer.mozilla.org/pt-BR/docs/Web/Events/readystatechange)

- [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Controle_Acesso_CORS)

- [AJAX - The XMLHttpRequest Object](https://www.w3schools.com/js/js_ajax_http.asp)

- [Content-Type](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Headers/Content-Type)
