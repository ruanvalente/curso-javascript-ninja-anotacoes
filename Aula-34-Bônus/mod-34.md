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
