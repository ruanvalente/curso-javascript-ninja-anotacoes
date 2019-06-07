# Bônus

Apenas um módulo onde vamos ver alguns conteúdos de assuntos especificos que talvez ficaram para trás, onde vamos reforçar tal conteúdo !

## Deprecated Methods

Toda linguagem tem funcionalidade que ao passar do tempo ficam depreciadas, são removidas por diversos motivos. Dentro do Javascript o uso da diretiva _use strict_ foi exatamente para remove os problemas que existiam nas versões anteriores do Javascript mas que ainda sim manter a compatibilidade com a antiga versão.

## Performance

Algumas dicas de performance.

### UglifyJS

**UglifyJS** é um toolkit de analisador, minificador, compressor e embelezador de código para JavaScript.

Agora vamos instalar o módulo do Uglify para fazer a minificação do nosso código.

Ex:

```
npm install uglify-js -g
```

Agora com o nosso módulo instalado vamos ter a seguinte estrutura:

Ex:

```
performance
.
├── index.html
└── main.js
```

E dentro do arquivo index.html, temos uma estrutura HTML simples chamando o nosso script. E dentro de main.js, apenas uma _IIFE_ contendo uma função init que mostra uma messagem no console do navegador.

Agora quando executamos o uglify o mesmo mostra o nosso arquivo de forma **minificada** istoé, sem espaçamentos, quebras de linhas etc..

Ex:

```
(function(){"use strict";function init(){console.log("Hey")}init()})();
```

Nosso arquivo sem uglify.

Ex:

```js
(function() {
  'use strict';

  function init() {
    console.log('Hey');
  }

  init();
})();
```

Como podemos ver o uglify minifica o nosso código e isso é aceito em nosso navegador ? Sim ! Mas para isso precisamos dizer para o uglify o nosso output e qual arquivo que queremos que seja minificado.

Ex:

```
uglifyjs --output main.min.js -- main.js
```

Dessa forma estamos dizendo ao uglify que o nosso arquivo de _output_ será o _main.min.js_ que será o nosso arquivo minificado. E passamos em seguida após os -- o arquivo que desejamos que seja minificado, que seria o _main.js_.

Ex:

```
ls

index.html  main.js  main.min.js
```

Com isso, agora temos o nosso arquivo _main.min.js_ contendo os mesmos arquivos de _main.js_ porém minificados, gerando melhor performance dentro das nossas aplicações.

E agora podemos modificar a chamada do nosso script dentro do nosso arquivo _index.html_ agora apontando para o arquivo minificado. :smile:

Podemos deixar o nosso arquivo ainda menor passando a _flag_ _--compress_, isso irá comprimir ainda mais o nosso arquivo.

Ex:

```
uglifyjs --output main.min.js --compress -- main.js
```

## Uglify parte 2.

Vimos que o uglify pode nos ajudar com a minificação do nosso código assim fazendo com que a performance da nossa aplicação seja melhorada.

Mas será que podemos minificar ainda mais esse nosso código ? Sim !!

Vamos utilizar a _flag_ _--mangle_. Que basicamente substitui os nomes das variáveis que podem ser substituíveis.

Ex:

```
uglifyjs --mangle -- main.js
```

Dessa forma o uglify irá substitui os nomes de variáveis possíveis dentro da nossa aplicação.

Então podemos deixar o nosso arquivo simplesmente menor usando:

Ex:

```
uglifyjs --output main.min.js --mangle --compress -- main.js
```

Com isso o nosso arquivo fica ainda menor e melhorando ainda mais a nossa performance :smile:

Mas com isso temos um problema, como podemos debugar um código minificado ? Imagine que na nossa aplicação aconteceu um bug mas pelo código está minificado fica um pouco difícil de saber onde esse bug ocorreu.

Dentro do navegador temos uma função chamada _pretty print_ que pode ajuda um pouco nesses casos, mas ainda não é o suficiente. Pois na nossa minificação o uglify altera os nomes das variáveis/funções e com isso vamos supor que ocorreu um erro dentro da nossa aplicação na função _n_ ? Como podemos debugar e tentar entender o que está acontecendo ? Ai entra o sourcemaps.

# Sourcemaps

Quando você tem um código minificado, e adiciona a ele uma referência a um sourcemap, o sourcemap faz uma varredura no arquivo, e gera todas as referências ao número de linhas, nomes de variáveis e funções, etc., para que você possa debugar no arquivo “desminificado”.

O uglify nos fornece uma _flag_ para configurar o nosso sourcemap, a _flag_ --source-map.

Ex:

```
uglify --source-map main.source.map --output main.min.js --mangle --compress -- main.js
```

Com isso o uglify irá fazer uma mapa do nosso código que quando o navegador detectar irá mostrar esse mapa, assim deixando muito simples o processo de debugger.

# Uso correto do ternário.

O uso do ternário **não é uma estrutura condicional** e sim, uma **expressão** que retorna um valor.

Ex:

```js
(function() {
  'use strict';

  var ninja = false;

  ninja === true ? console.log('Ninja') : console.log('Ainda não é Ninja');
})();
```

O uso do ternário dentro do nosso código geralmente é dentro de funções, dentro de variáveis ou diretamente no console.log.

Ex:

> Função

```js
(function() {
  'use strict';
  var ninja = false;
  function hasNinja() {
    return ninja === true ? 'Sim, é ninja' : 'Ainda não é ninja';
  }

  console.log(hasNinja());
})();
```

Ex:

> Variável

```js
(function() {
  'use strict';
  var ninja = false;
  var result = ninja === true ? 'Sim, é ninja' : 'Ainda não é ninja';
  console.log(result);
})();
```

Ex:

> Console

```js
(function() {
  'use strict';

  var ninja = false;

  console.log(ninja === true ? 'Sim, é ninja' : 'Ainda não é ninja');
})();
```

# Diferenças entre console.log e return.

Basicamente a diferença entre os dois é que o _return_ **retorna um valor** já o _console.log_ apenas **mostra uma messagem** na tela.

Vamos para um exemplo.

Ex:

```js
(function() {
  'use strict';

  function isNumber(value) {
    console.log(Object.prototype.toSting.call(value) === '[object Number]');
  }

  isNumber(2); // true
  isNumber('js-ninja'); // false
})();
```

Até aí nada de mais, temos o nosso resultado esperado. Agora vamos supor que queremos atribuir o resultado da função em uma variável chamada _result_.

Ex:

```js
(function() {
  'use strict';

  function isNumber(value) {
    console.log(Object.prototype.toSting.call(value) === '[object Number]');
  }

  isNumber(2); // true
  isNumber('js-ninja'); // false

  var result = isNumber(5);
  console.log('Is Number ?', result); // Is number? undefined
})();
```

Como assim _undefined_ ? A nossa função _isNumber_ **não está retornando nenhum valor** ela apenas está **mostrando uma messagem na tela** através do método log de console. Quando a função não tem um retorno a mesma retorna **undefined**.

Para retornar o valor da função usamos o _return_.

Ex:

```js
(function() {
  'use strict';

  function isNumber(value) {
    return Object.prototype.toSting.call(value) === '[object Number]';
  }

  console.log(isNumber(2)); // true
  console.log(isNumber('js-ninja')); // false

  var result = isNumber(5);
  console.log('Is Number ?', result); // Is number? true
})();
```

# Objetos e Encerramento.

Vamos entender um pouco mais sobre Objetos em Javascript.

Objetos são passados por referência, e são mutáveis.

Vamos entender melhor isso:

Ex:

```js
(function() {
  'use strict';

  var a = { prop: '1' };
  var b = a;

  console.log(a === b); // true
})();
```

Neste exemplo a variável a tem uma propriedade chamada prop com o valor '1'. Depois criamos a variável b atribuindo a ela a variável a.

Depois fazemos uma comparação, e o resultado é true. Mas o resultado é true por conta do valor contido que são iguais ou por serem o mesmo objeto ?

Agora vamos dizer que que a variável b tem uma propriedade chamada _prop2_ com o valor '2', isso irá afetar o objeto a ?

Ex:

```js
(function() {
  'use strict';

  var a = { prop: '1' };
  var b = a;

  b.prop2 = '2';

  console.log(a, b);
  // {prop: "1", prop2: "2"} {prop: "1", prop2: "2"}
})();
```

Como pudemos ver modificamos o objeto _a_ através do objeto _b_. Isso significa que quando atribuimos o valor de _a_ para _b_ fizemos uma **referência** (ponteiro) ao objeto _a_. Com isso o objeto _b_ tem uma **referência** ao objeto _a_ e assim quando modificamos o objeto _b_, o objeto _a_ também é modificado.

Ex:

```js
(function() {
  'use strict';

  var a = { prop: '1' };
  var b = { prop: '1' };

  console.log(a, b, a === b);

  // {prop: "1"} {prop: "1"} false
})();
```

Veja que apesar do objeto _a_ e objeto _b_ terem os mesmos valores é a sua comparação é **false**. Pois, quando usamos **{}** estamos criando um novo objeto em memória assim como **new Object()**.

# Garbage collection

Linguagens de baixo nível, como C, tem primitivas de gerenciamento de memória de baixo nível como malloc() e free(). Em contrapartida, os valores do JavaScript são alocados quando coisas (objetos, strings, etc.) são criadas e "automaticamente" liberadas quando não são mais usadas. Este último processo se chama garbage collection.

Como foi mencionado acima, em geral o problema de automaticamente descobrir se a memória "não é mais necessária" é indecidível. Como consequência, os garbage collections implementam uma limitação de uma solução ao problema em geral.

## Links:

- [Uglify - NPM](https://www.npmjs.com/package/uglify-js)

- [Deprecated and obsolete features - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features)

- [Sourcemaps - Debugando JS e CSS minificados - Blog Da2k](https://blog.da2k.com.br/2015/02/21/sourcemaps-debugando-js-e-css-minificados/)

- [Objetos - Referências de valores em JavaScript - Blog Da2k](https://blog.da2k.com.br/2017/01/25/objetos-referencias-de-valores-em-javascript/)

- [Gerenciamento de Memória - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_Management)

## Livros:

- [Functional JavaScript: Introducing Functional Programming with Underscore.js 1st Edition](https://www.amazon.com/Functional-JavaScript-Introducing-Programming-Underscore-js/dp/1449360726)

- [Código limpo](https://www.amazon.com.br/C%C3%B3digo-limpo-Robert-C-Martin/dp/8576082675?tag=goog0ef-20&smid=A1ZZFT5FULY4LN&ascsubtag=go_726685122_54292137521_242594579893_aud-519888259198:pla-398510646161_c_)

- [JavaScript: O Guia Definitivo](https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X)

- [JavaScript de Alto Desempenho](https://novatec.com.br/livros/javascript-de-alto-desempenho/)

- [Segredos do Ninja JavaScript](https://novatec.com.br/livros/ninja-javascript/)

- [ Estruturas de dados e algoritmos com JavaScript - 2ª edição](https://novatec.com.br/livros/estruturas-de-dados-algoritmos-em-javascript-2ed/)

- [Construindo aplicações com NodeJS - 2ª edição](https://novatec.com.br/livros/nodejs-2ed/)

- [Expressões Regulares - 5ª Edição](https://novatec.com.br/livros/expressoes-regulares-5ed/)

- [Princípios de Orientação a Objetos em JavaScript](https://novatec.com.br/livros/orientacaoobjetosjavascript/)

# FIM :heart:

Isso é apenas o começo de uma bela jornada :smile:

#RumoAoNívelJSNinja :smile:
