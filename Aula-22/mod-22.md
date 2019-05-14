# Propriedades e métodos de funções - parte 1

O construtor Function cria um novo objeto Function. Em JavaScript cada função é, na verdade, um objeto Function.

## .name

Indica o nome da função criada ou "anônimo" para uma função anônima.

Ex:

```js
function myFunction() {}

console.log(myFunction.name);
// 'myFunction'

new Function().name;
// 'anonymous'
```

## .length

A propriedade length dentro da função ela conta **quantos parâmetros** a função pode receber.

Ex:

```js
function myFunction(a, b, c) {}

console.log(myFunction.length);
// 3
```

Sempre incrementando o tamanho dependendo da quantidade de parâmetros passados para a função.

OBS: _Isso pode se tornar interessante quando precisarmos fazer uma validação, dependendo do limite de parâmetros passados para a função._

## .toString()

Em Javascript todos os objetos tem o seu método .toString. Porém a forma é variada de acordo com o objeto.

Por exemplo:

Ex:

```js
var arr = [1, 2, 3, 4, 5];
var obj = { course: 'JS-Ninja' };
var regex = new RegExp();

console.log(arr.toString()); // '1,2,3,4,5'
console.log(obj.toString()); // '[object Object]' ?  Lá na frente isso terá um bom uso ;)
console.log(regex.toString()); // '/(?:)/'
```

E como fica em funções ?

Ex:

```js
console.log(myFunction.toString());
// 'function myFunction(a,b,c) {}'
```

A função é mostra de forma literal/textual em formato de String.

## .call()

O método **call()** invoca uma função com um dado valor **this** e **argumentos** passados individualmente.

> fun.call(thisArg[, arg1[, arg2[, ...]]])

**thisArg**

- O valor de this proveu a chamada para fun. Note que this pode não ser o valor atual visto pelo método: se esse método é uma função em non-strict mode code, null e undefined serão reescritos com o objeto global, e valores primitivos serão encaixados.

**arg1, arg2, ...**:

- Argumentos para o objeto.

Quando criamos um novo objeto apartir do **new** estamos criando um novo objeto apartir de um construtor onde o _this_ faz referência ao objeto criado.

Porém se usarmos o método **call** e passar o _this_ para o mesmo, dessa forma podemos dizer quem será o _this_ para aquela função.

Ex:

```js
(function() {
  'use strict';
  var myName = { name: 'Ruan Valente' };

  function myFunction() {
    return this.name;
  }

  console.log(myFunction.call(myName)); // Ruan Valente
})();
```

O que acontece é que dentro da função **myFunction** temos o **this.name.** onde até o momento o **this**, aponta para **undefined**.

Porém quando usamos o método **.call(this)** passando _this_ como argumento, podemos dizer quem será o this dessa função, no caso **myName**.

E podemos referênciar outros objetos também, que contenham a propriedade _name_.

Ex:

```js
(function() {
  'use strict';
  var myName = { name: 'Ruan Valente' };
  var myNameTwo = { name: 'João da Silva' };

  function myFunction() {
    return this.name;
  }
  console.log(myFunction.call(myNameTwo)); // 'João da Silva
  // console.log(myFunction.call()); // TypeError: Cannot read property 'name' of undefined
})();
```

Assim, dessa forma temos o valor do _this_ sendo váriado de acordo como ele é referenciado.

# Propriedades e métodos de funções - parte 2

Da mesma forma que passamos argumentos para funções o método **.call()** também aceita, porém o seu primeiro parâmetros é o _this_ da função seguido dos respectivos parâmetros.

> .call(this, arg1, arg2, arg3...)

Ex:

```js
(function() {
  'use strict';

  var myName = { name: 'Ruan Valente' };

  function myFunction(a, b, c) {
    console.log(this.name, a, b, c);
  }

  myFunction.call(myName, 1, 2, 3); // Ruan Valente 1 2 3
})();
```

OBS: Quando não for preciso dizer quem é o this da função, podemos passar a própria função como parâmetro do método call. Na verdade, pode ser qualquer tipo de objeto, mas por boa prática passamos a própria função.

Ex:

```js
(function() {
  'use strict';

  var myName = { name: 'Ruan Valente' };

  function myFunction(a, b, c, d) {
    console.log(a, b, c, d);
  }

  myFunction.call(myFunction, 1, 2, 3, 4); // 1 2 3 4
})();
```

## .apply()

O método **apply()** chama uma função com um dado valor **this** e **arguments** providos como uma **array** (ou um objeto parecido com um array).

Ex:

```js
(function() {
  'use strict';

  var myName = { name: 'Ruan Valente' };
  var arr = [1, 2, 3, 4];

  function myFunction(a, b, c, d) {
    console.log(this.name, a, b, c, d);
  }

  myFunction.apply(myName, [1, 2, 3, 4]); // Ruan Valente 1 2 3 4
  myFunction.apply(myName, arr); // Ruan Valente 1 2 3 4
})();
```

A sintaxe desta função é quase idêntica a essa da call(), a diferença é que call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos.

Um pouco da diferença de ambos:

Ex:

```js
(function() {
  'use strict';

  var myName = { name: 'Ruan Valente' };

  function myFunction(a, b, c, d) {
    console.log(this.name, a, b, c, d);
  }

  myFunction.call(myName, 1, 2, 3, 4); // Ruan Valente 1 2 3 4
  myFunction.apply(myName, [1, 2, 3, 4]); // Ruan Valente 1 2 3 4
})();
```

# Prototype

Prototype são o mecanismo pelo qual objetos JavaScript herdam características um do outro.

Em outras palavras apartir do Prototype podemos extender objetos e realizar herança.

Ex:

```js
(function() {
  'use strict';

  function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  Person.prototype.fullName = function fullName() {
    return this.name + ' ' + this.lastName;
  };

  var ruan = new Person('Ruan', 'Valente');

  console.log(ruan.fullName()); // Ruan Valente
})();
```

Neste exemplo criamos uma função construtora que tem as propriedades **name** e **lastName**.

Após isso, **extendemos** a função construtora e criamos apartir do seu protótipo o método **fullName**. Que retorna a propriedade _this.name_ e _this.lastName._

Podemos também adicionar propriedades mesmo após de criar os nossos objetos.

Ex:

```js
(function() {
  'use strict';

  function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  Person.prototype.age = 23;

  var ruan = new Person('Ruan', 'Valente');
  console.log(ruan.age); // 23
})();
```

Percebemos que não temos a propriedade **age** dentro da nossa instância, porém podemos criar essa propriedade utilizando o **prototype** do objeto.

Podemos também sobrescrever própriedades que definimos através do **prototype**.

Ex:

```js
(function() {
  'use strict';

  function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
  }

  Person.prototype.age = 23;

  var ruan = new Person('Ruan', 'Valente');

  Person.prototype.age = 25;

  console.log(ruan.age); // 25
})();
```

Outro caso interessante, é a maneira como a linguagem se comporta com propriedades de objetos. Se uma determinada propriedade existir a mesma não será modificada através do prototype, caso contrário podemos modificar.

Ex:

```js
(function() {
  'use strict';

  function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
    this.age = 23;
  }

  var ruan = new Person('Ruan', 'Valente');

  Person.prototype.age = 25;

  console.log(ruan.age); // 23
})();
```

Se a propriedade age não existir, o Javascript irá procurar dentro do protótipo da função, e dessa forma podemos modificar o valor da propriedade como no exemplo anterior.

# Array-like, editorconfig.

Dentro do prototype temos diversos métodos importantes, e quando precisamos desses métodos ?

> Lembra do arguments ?

Um exemplo legal é quando precisamos usar algum método que está no objeto _Array_ como: _reduce_, _forEach_, _map_ etc..

Porém como podemos usar esses métodos em Array-like ? ( você pensou no arguments ) Já que eles não herdam do objeto _Array_ ?

Aí entra o prototype :smile:

> Array.prototype.forEach.call();

Dessa forma estamos chamando o método _forEach_ do objeto _Array_. Assim, podemos interar sobre objetos array-like.

Só que antes disso, precisamos entender que cada método como, _forEach_, _map_, _reduce_ etc.. eles aceitam um segundo parâmetro. Que é o **this**.

Ex:

```js
(function() {
  'use strict';

  function myFunction() {
    var arr = [1, 2, 3, 4];

    arr.forEach(function(item) {
      console.log(this);
    }, arguments);
  }

  myFunction(1, 2, 3, 4);
  /*
    [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
    [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
  */
})();
```

Porém nesta abordagem a interação vai de acordo com o tamanho do array.

Porém temos outra forma de interar o arguments usando os métodos de array.

Ex:

```js
(function() {
  'use strict';

  function myFunction() {
    Array.prototype.map.call(arguments, function(item, index) {
      console.log(item, index);
    });
  }

  myFunction(1, 2, 3, 4, 5);

  /*
    1 0
    2 1
    3 2
    4 3
    5 4
  */
})();
```

Dessa forma podemos usar métodos do Objeto _Array_ de forma simples e invocando através do método call.

Onde passamos o this, que nesse caso é o próprio arguments seguido da função que irá realizar a interação.

OBS: Da mesma forma podemos usar o apply, porém a forma que passamos o segundo parâmetro é como um Array.

Ex:

```js
(function() {
  'use strict';

  function myFunction() {
    Array.prototype.map.apply(arguments, [
      function(item, index) {
        console.log(item, index);
      }
    ]);
  }

  myFunction(1, 2, 3, 4, 5);
  /*
    1 0
    2 1
    3 2
    4 3
    5 4
  */
})();
```

Dessa forma podemos extender métodos do objeto _Array_ de forma simples.

## Links:

### MDN

- [Function](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function)

- [Array.prototype](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype)

- [prototype chain](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)

- [Object prototypes](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)

## Outros:

###

- [EditorConfig](https://editorconfig.org/)
