# TDD

**TDD** é o **Desenvolvimento Orientado por Testes** _(Test Driven Development)_. Isso mesmo! Desenvolvemos o nosso software baseado em **testes** que são escritos antes do nosso código de produção!

E como isso funciona na prática ? Mas antes, vamos ver como ficará a estrutura do nosso exemplo.

Ex:

```
src
|--
  | -- sum.js
test
| --
  | -- sum.test.js
```

Neste exemplo utilizaremos uma calculadora, o escopo pode ser bem simples e pequeno mas dará para entender cada conceito básico sobre como dar os primeiros passos usando _TDD_.

Para realizar os testes iremos utilizar uma ferramenta chamada **mocha** que é um framework para _test_ para node (backend ) e Javascript no lado do client (frontend) assíncrono simples e divertido.

Para fazer sua instalação usaremos o _npm_ nosso velho conhecido.

```
npm install -g mocha
```

Pronto ! Agora vamos começar !!!

Ex:

Dentro de _sum.test.js_

```js
'use strict';

describe('# SUM', function() {
  it();
});
```

**describe()**:

Descreve uma suite de teste com o **título** e **callback** de retorno contendo suites de teste aninhados.

**it()**:

Descreve uma **especificação** ou caso de **teste** com o retorno de chamada determinado. **O nome da função** é usado como o **nome do teste**.

# Escrevendo os primeiros testes.

Agora vamos escrever os nossos primeiros testes.

Ex:

```js
'use strict';

var sum = require('../src/sum.js');

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {});
});
```

Para ajudar no processo de asserção vamos usar o módulo _chai_.

```
npm install --save-dev chai
```

**Chai**

Chai é um BDD / biblioteca de afirmação de TDD para node e o navegador que pode ser deliciosamente emparelhado com qualquer teste em javascript.

Com isso vamos inclui-lo no nosso projeto para fazermos as nossas asserções.

Ex:

```js
'use strict';

var expect = require('chai');
var sum = require('../src/sum.js');

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {});
});
```
