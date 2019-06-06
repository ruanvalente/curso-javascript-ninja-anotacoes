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

Seguindo a premissa do TDD/BDD entendemos que:

### Red:

Escrevemos um teste que falhe.

### Green

Escrevemos um teste que passe, com minimo de código possível.

### Blue:

Seria a refatoração, onde refatoramos o nosso código com alguma melhoria.

Voltando ao ciclo, vamos agora fazer um teste que falhe.

Ex:

```js
'use strict';

var sum = require('../src/sum');
var expect = require('chai').expect;

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', function() {
    expect(sum(1, 9)).to.be.equal(10);
  });
});
```

Fazemos mais um teste, onde dizemos que estamos esperando que sum, recebendo dois valores, no caso do exemplo 1 e 9 e esperamos que o seu retorno seja igual a 10.

Rodamos o teste e o nosso teste falha.

```
  # SUM
    ✓ Should SUM module to be a function
    1) Should SUM return 10 when I pass 1 and 9


  1 passing (9ms)
  1 failing

  1) # SUM
       Should SUM return 10 when I pass 1 and 9:
     AssertionError: expected undefined to equal 10
      at Context.<anonymous> (test/sum.test.js:12:29)
```

Onde o erro diz que era esperado que _undefined_ fosse igual a 10. O retorno é _undefined_ pois a nossa função não está retornando nada. Então vamos fazer com que o nosso teste passe da forma mais simples possível usando o conceito de **baby steps**.

### Baby steps.

Basicamente baby steps é um termo utilizado em XP que em excência significa realizar **pequenas mudanças**, ter então a certeza de que ela esteja madura e segura ao máximo e só então realizar a próxima.

Sabendo disso, vamos começar a implementar a o minimo de código possível para que o teste passe.

Ex:

```js
'use strict';

function sum() {
  return 10;
}

module.exports = sum;
```

Agora o nosso teste está passando !

```
  # SUM
    ✓ Should SUM module to be a function
    ✓ Should SUM return 10 when I pass 1 and 9


  2 passing (8ms)
```

Mas se você for perceber não estamos somando nada, estamos apenas retornando o valor 10. Mas isso é o fim ? Podemos melhorar isso é claro. Mas para isso vamos fazer mais um teste.

Ex:

```js
'use strict';

var sum = require('../src/sum');
var expect = require('chai').expect;

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', function() {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', function() {
    expect(sum(2, 3)).to.be.equal(5);
  });
});
```

Com isso temos o seguinte resultado:

```
  # SUM
    ✓ Should SUM module to be a function
    ✓ Should SUM return 10 when I pass 1 and 9
    1) Should SUM return 5 when I pass 2 and 3


  2 passing (10ms)
  1 failing

  1) # SUM
       Should SUM return 5 when I pass 2 and 3:

      AssertionError: expected 10 to equal 5
      + expected - actual

      -10
      +5

      at Context.<anonymous> (test/sum.test.js:16:29)
```

O erro mostra que no teste que fizemos estamos dizendo que estamos esperando que o resultado seja 5, porém o seu valor atual é 10.

Podemos melhorar isso de forma simples.

Ex:

```js
'use strict';

function sum(number1, number2) {
  return number1 + number2;
}

module.exports = sum;
```

```
  # SUM
    ✓ Should SUM module to be a function
    ✓ Should SUM return 10 when I pass 1 and 9
    ✓ Should SUM return 5 when I pass 2 and 3


  3 passing (8ms)
```

Com isso temos o nosso teste passando e dentro da função sum, passamos duas variáveis por parâmetro que irão realizar o processo de soma.

Agora vamos fazer mais um teste onde vamos verificar se somente um parâmetro for passado irá ser retornado um **erro**.

Ex:

```js
'use strict';

var sum = require('../src/sum');
var expect = require('chai').expect;

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', function() {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', function() {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just onde parameter', function() {
    expect(sum(1)).to.be.an('error');
  });
});
```

```
# SUM
    ✓ Should SUM module to be a function
    ✓ Should SUM return 10 when I pass 1 and 9
    ✓ Should SUM return 5 when I pass 2 and 3
    1) Should SUM return an error if it receive just onde parameter


  3 passing (9ms)
  1 failing

  1) # SUM
       Should SUM return an error if it receive just onde parameter:
     AssertionError: expected NaN to be an error
      at Context.<anonymous> (test/sum.test.js:20:26)
```

O erro mostra que _NaN_ era esperado que fosse um erro, pois já que passamos apenas um valor como parâmetro da função o segundo valor é _undefined_ logo a soma irá resultar em _NaN_.

Agora vamos fazer com que o nosso teste passe.

Ex:

```js
'use strict';

var sum = require('../src/sum');
var expect = require('chai').expect;

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', function() {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', function() {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just onde parameter', function() {
    expect(sum(1)).to.be.an('error');
  });
});
```

```
  # SUM
    ✓ Should SUM module to be a function
    ✓ Should SUM return 10 when I pass 1 and 9
    ✓ Should SUM return 5 when I pass 2 and 3
    ✓ Should SUM return an error if it receive just onde parameter


  4 passing (9ms)
```

Agora vamos fazer mais um teste onde vamos testar se os números passados são realmente números para poder realizar a soma. Caso contrário é retornado um erro.

Ex:

```js
'use strict';

var sum = require('../src/sum');
var expect = require('chai').expect;

describe('# SUM', function() {
  it('Should SUM module to be a function', function() {
    expect(sum).to.be.a('function');
  });

  it('Should SUM return 10 when I pass 1 and 9', function() {
    expect(sum(1, 9)).to.be.equal(10);
  });

  it('Should SUM return 5 when I pass 2 and 3', function() {
    expect(sum(2, 3)).to.be.equal(5);
  });

  it('Should SUM return an error if it receive just onde parameter', function() {
    expect(sum(1)).to.be.an('error');
  });

  it('Should SUM return an error if the parameter has not number', function() {
    expect(sum('a', 'b')).to.be.an('error');
  });
});
```

```
  # SUM
    ✓ Should SUM module to be a function
    ✓ Should SUM return 10 when I pass 1 and 9
    ✓ Should SUM return 5 when I pass 2 and 3
    ✓ Should SUM return an error if it receive just onde parameter
    1) Should SUM return an error if the parameter has not number


  4 passing (10ms)
  1 failing

  1) # SUM
       Should SUM return an error if the parameter has not number:
     AssertionError: expected 'ab' to be an error
      at Context.<anonymous> (test/sum.test.js:24:33)
```

Agora é mostrado que a String a e b passadas por parâmetro foram concatenadas, com isso era esperado um error.

Agora vamos fazer com que o nosso teste venha passar.

# Escrevendo mais testes.
