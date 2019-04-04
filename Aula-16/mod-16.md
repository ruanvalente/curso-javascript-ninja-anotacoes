# Use Strict

O strict mode do ECMAScript 5 é uma forma de optar por uma variante restrita do JavaScript. O strict mode não é apenas um subconjunto: ele intencionalmente tem semânticas diferentes do código normal.

O problemas que nos temos. **( Escopo global )**.

Ex:

```js
(function() {
  var name = "Name";
  console.log(name); // "Name"
})();

console.log(name); // ReferenceError: name is not defined
```

Neste exemplo temos o uso da IIFE para controlar o escopo das variáveis criadas dentro do nosso programa. Criamos uma variável chamada _name_ com o valor **'Name'**, e passamos ela para o console.log.

Isso não é nenhuma novidade até aqui, o código executa e mostra o valor **'Name'** na tela. Porém quando precisamos fazer isso fora da IIFE, o Javascript lança um **ReferenceError: name is not defined**. Dizendo que a nossa variável que não está definida !

Agora se formos criar o mesmo exemplo porém não usando a palavra **var** o que acontece ?

Ex:

```js
(function() {
  name = "Name";
  console.log(name); // Name
})();

console.log(name); // Name
```

Exatamente, a variável name agora se encontra no contexto Global ! E isso pode se tornar um problema.

E é ai que entra a diretiva **'use strict'**.

O **strict mode** faz várias mudanças nas semânticas normais do JavaScript. Primeiro, o strict mode elimina alguns erros **silenciosos** do JavaScript fazendo-os lançar exceções. Como por exemplo:

Ex:

```js
(function() {
  "use strict";
  name = "Name";
  console.log(name); // ReferenceError: name is not defined
})();
console.log(name);
```

Agora neste caso o erro é apresentando no console.log que está dentro da função. E assim usando o use strict certos erros silenciosos que acontece dentro do Javascript, podem ser amenizados.

O use strict neste exemplo está apenas executando dentro do escopo da função. Porém podemos fazer com que ele pegue todo o escopo Global. Apenas adicionando a instrução antes da criação de função.

Ex:

```js
'use strict';

(function(){
  name = 'Name';
  console.log(name);
})();
console.log(name); //ReferenceError: name is not defined
```

# Use Strict II

Vimos na aula anterior que a diretiva use strict **Não permite** declaração de variáveis sem o uso do **var**.

E também vamos ver que o use strict não permite o uso **with**.

### With

JavaScript procura por um nome não qualificado procurando em uma cadeia de escopo associada a execução do contexto do script ou função contendo um nome não qualificado. A declaração 'with' adiciona o dado objeto acima dessa cadeia de escopo durante a validação desse corpo de declarações. Se um nome não qualificado usado no corpo for igual ao de uma propriedade na cadeia de escopo, então o nome ficará ligado a propriedade e ao objeto contendo a propriedade. Se não um **ReferenceError** será invocado.

Ex:

```js
(function() {
  //'use strict'

  var obj = {
    prop1: {
      prop2: {
        prop3: {
          prop1: 'prop1',
          prop2: 'prop2',
          prop3: 'prop3'
        }
      }
    }
  };

  with (obj.prop1.prop2.prop3) {
    console.log(prop1, prop2, prop3);
  }
})();
```

Dessa forma temos como acessar o objeto de forma reduzida, evitando a busca por cadeias de objetos. Porém isso pode gerar um problema dentro do nosso código. Quando acessamos as propriedades do objeto dentro da instrução with, podemos fazer com isso se confunda com as variáveis criadas a cima.

Por isso quando usamos o use strict é nos lançada um erro.

> SyntaxError: Strict mode code may not include a with statement

### Funções.

Usando o use strict no escopo global dentro de funções o **this** === **undefined**.

Sabemos que quando usamos o **this** dentro de funções o mesmo aponta para um contexto global.

Ex:

Com o use strict.

```js
(function(){
  'use strict';
  console.log(this); // undefined
})();
```

Sem o use strict

```js
(function() {
  console.log(this); // Global or Window
})();
```

Temos algo similar quando precisamos criar um novo objeto de uma função construtora, porém sem o uso do operador **new**.

Ex:

```js
(function() {
  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  console.log(Person('Ruan', 'Valente', 23));
})();
```

Neste caso todos as propriedades passadas para a função construtora ficaram em escopo global já que o _this_ assume o escopo global quando não usamos o operador **new**. Do contrário, o **this** assume o contexto do **objeto** em si.

### Global

Ex:

```js
window.name; // Ruan -> navegador
global.name; // Ruan -> Node
```

PS: Dentro do navegador quando criamos uma variável global a mesma fica em memória e mesmo que ainda façamos o reload da página a variável ainda continuará em seu escopo global.

Agora usando o a diretiva use strict é retornado um erro.

Ex:

```js
(function() {
  'use strict';

  function Person(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  console.log(Person('Ruan', 'Valente', 23));
})();

// TypeError: Cannot set property 'name' of undefined
```

O Erro mostra bem claro que usando o use strict não podemos setar uma propriedade de **undefined** ou seja o **this** dentro da diretiva use strict tem como seu valor **undefined**.

Ex:

```js
(function() {
  'use strict';
  console.log(this === undefined); // true
})();
```

# Use Strict III

Vimos na aula anterior que quando usamos a diretiva use strict o **this** no contexto global tem como valor **undefined**.

E quando usamos o operador **delete** que remove uma propriedade de um objeto. Porém quando usamos a diretiva **use strict** é lançado um **SyntaxError** se não poder deletar.

Fora do use strict o operador **delete** não consegue remover e retorna **false**, porém dentro do use strict quando não podemos deletar algo, por exemplo uma variável é retornado uma **SyntaxError**.

Ex:

```js
(function() {
  var obj = {
    prop1: 'prop1',
    prop2: 'prop2'
  };

  console.log(delete obj.prop1); // true
})();
```

Retornando true quando removemos com sucesso já do contrário é retornado **false**.

Ex:

```js
(function() {
  'use strict';

  var myVar = 9;
  var obj = {
    prop1: 'prop1',
    prop2: 'prop2'
  };

  console.log(delete myVar);
})();
// SyntaxError: Delete of an unqualified identifier in strict mode.
```

Como vimos é lançado uma SyntaxErro dizendo que o operador delete não é qualificado no modo estrito.

PS: O operador **delete** apenas deleta **propriedades de objetos**.

E dentro do use strict propriedades com o mesmo nome não são permitidas, neste caso os mesmos tem que ter nomes diferentes !

Ex:

```js
(function() {
  var obj = {
    prop1: 1,
    prop2: 2,
    prop2: 3
  };

  console.log(obj);
  // { prop1: 1, prop2: 3 }
})();
```

Neste caso a prop2 tendo o mesmo nome é reatribuida e assim mostrando a sua saída dentro do console.log.

Porém dentro do use strict é lançado SyntaxError.

Ex:

```js
(function() {
  'use strict';
  var obj = {
    prop1: 1,
    prop2: 2,
    prop2: 3
  };

  console.log(obj); // SyntaxError
})();
```

Do mesmo modo argumentos de funções não podem ter nomes iguais.

Ex:

```js
(function() {
  function myFunction(a, a, b) {
    return a + b;
  }

  console.log(myFunction(1, 2, 2)); // 4
})();
```

É retornado o valor 4, sendo ignorado o primeiro parâmetro, já que temos dois parâmetros com o mesmo nome. O Javascript ignora o primeiro parâmetro e realiza a soma dos dois ultimos parâmetros.

Porém usando a diretiva use strict o mesmo retorna um erro.

Ex:

```js
(function() {
  'use strict';

  function myFunction(a,a,b) {
    return a + b;
  }

  console.log(myFunction(1,2,3));
})();
//Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```

Retornando o erro onde não podemos ter parâmetros duplicados. ( O mesmo erro que deveria aparecer com objetos :smile: )

# Objeto String.

O objeto global String é um construtor para strings, ou uma sequência de caracteres.

Temos algumas propriedades e métodos dentro desse objeto. :tada:

### length()

A length é a propriedade de um objeto String representa o comprimento de uma string no codigo.

Ex:

```js
'ruan'.length;
// 4
```

## Métodos

### .charAt(index)

O método charAt(index) retorna o caractere especificado a partir de uma string.

Ex:

```js
'Ruan'.charAt(0);
// R
```

E se for passado um index que não existe é retornado uma String em branco.

```js
'ruan'.charAt(20);
// ''
```

### .concat(str, str2, ...,strN)

O Método concat() combina o texto de duas ou mais strings e retorna uma nova string.

Ex:

```js
'ruan'.concat(' valente');
// ruan valente
```

### .indexOf(string, [,start])

O método indexOf() retorna o índice da primeira ocorrência do valor especificado em searchValue ( parâmetro ) dentro do objeto String para o qual foi chamado, começando a busca a partir de fromIndex ( início ). Retorna -1 se o valor não for encontrado

Ex:

```js
'ruan'.indexOf('a');
// 2

'ruan'.indexOf('z');
// -1
```

### .lastIndexOf(string, [,start])

O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado na String, pesquisando de trás para frente a partir de fromIndex( início ). Retorna -1 se o valor não for encontrado.

Ex:

```js
'ruan'.lastIndexOf('a');
// 2

'ruan'.lastIndexOf('z');
// -1
```

### .replace(string, newString)

O método replace() retorna uma nova string com algums ou todas as combinações do padrão substituído por um substituto. O padrão pode ser uma string ou uma RegExp, e o substituto pode ser uma string ou uma função a ser chamada por cada combinação.

Ex:

```js
'ruan'.replace('a', 'o');
// ruon
```

### .slice(start, [,end])

O método slice() extrai uma sessão de uma string e retorna uma nova string.

Ex:

```js
'ruan'.slice(1);
// uan

'ruan'.slice(2, 5);
// an
```

### .split([separator], [, limit])

O método split() divide um objeto String em um array de strings ao separar a string em substrings.

Ex:

```js
'ruan'.split('u');
// [ 'r', 'an' ]
```

Podemos fazer algo bem legal com que aprendemos até aqui :tada:

Ex:

```js
'ruan'
  .replace('u', '')
  .split('r')
  .join('H')
  .concat(' Solo');

// Han Solo
```

Neste exemplos a String _ruan_ usando o método _replace()_ substituindo a letra 'u' por uma string '' ( em branco). Logo depois temos o método _split()_ onde trasformamos a nossa string em um array apartir da letra 'r' ( onde acontece a quebra).

Logo depois usamos o método _join()_ para juntar no início da nossa String a letra 'H' e por fim usando o método _concat()_ para concatenar a palavra 'Solo' assim, temos no final a String 'Han Solo'. :smile:

# Objeto String II.

### .substring(start, [, end])

O método substring() retorna um subconjunto de uma string entre um indice e outro, ou até o final da string.

Ex:

```js
'valente'.substring(2);
// lente
```

Podemos fazer isso de forma reversa pegando do final para o início.

```js
'valente'.substring(7, 2);
// lente
```

### .toLowerCase()

O método toLowerCase() retorna a string chamada convertida para minúsculo.

Ex:

```js
'RUAN'.toLowerCase();
// ruan
```

### .toUpperCase()

O método toUpperCase() retorna o valor da string chamada convertida para maiúscula.

Ex:

```js
'ruan'.toUpperCase();
// RUAN
```

#### Links para saber mais:

- [Strings - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring)

- [Use Strict](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Strict_mode)
