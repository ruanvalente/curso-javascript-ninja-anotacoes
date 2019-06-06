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

var expect = require('chai').expect;
var sum = require('../src/sum.js');

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {});
});
```

### Behaviour Driven Development.

**Behaviour Driven Development** ou BDD, serve para criar testes e integrar regras de negócios com a linguagem de programação, focando no comportamento do software.

Está é a forma que iremos seguir a escrita do nossos testes !

Ex:

```js
'use strict';

var expect = require('chai').expect;
var sum = require('../src/sum.js');

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });
});
```

## Red:

### Escreva testes que falhem.

Neste teste estamos dizendo que esperamos que o nosso módulo _SUM_ seja uma **função**.

Com isso temos o seguinte resultado:

```
  # SUM
    1) Should SUM module to be a function


  0 passing (9ms)
  1 failing

  1) # SUM
       Should SUM module to be a function:
     AssertionError: expected {} to be a function
      at Context.<anonymous> (test/sum.test.js:8:23)
```

Nosso teste falhou, onde é dito que esperavamos que o nosso módulo fosse uma função. Com isso o nosso teste falha e precisamos escrever o minimo de código para que esse mesmo teste passe, isso é uma das premissa do BDD/TDD.

![Ciclo do TDD](https://i2.wp.com/165.227.206.32/wp-content/uploads/2017/04/09-1.png?resize=1920%2C1080)

> Ciclo do TDD.

## Green:

### Faça o teste funcionar.

Agora vamos fazer com que o nosso teste passe.

Ex:

> _sum.js_

```js
'use strict';

module.exports = function() {};
```

```
  # SUM
    ✓ Should SUM module to be a function

  1 passing (8ms)
```

Pronto :smile: agora o nosso teste passou :smile:

## Blue:

### Elimine redundâncias.

Como não temos nada para refatorar podemos fazer algo simples, criar a função sum e exportar-la ao invés de exportar uma função direta.

Ex:

```js
'use strict';

function sum() {}

module.exports = sum;
```

E o nosso teste **precisa continuar passando** mesmo com as pequenas alterações.

```
  # SUM
    ✓ Should SUM module to be a function


  1 passing (7ms)
```

Com isso voltamos ao ciclo, só que agora faremos novas funcionalidades para a nossa calculadora.

# Entendendo o escopo Red, Green e Blue.
