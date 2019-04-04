# JS no browser

Para executar o Javascript dentro do nosso navegador podemos usar a tag **script** dentro do nosso arquivo **HTML**.

Ex:

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <title>JS Ninja</title>
  </head>
  <body>
    <!-- Aqui vai o nosso script -->
    <script src="index.js"></script>
    <script>
      console.log('Outra forma de executar o script');
    </script>
  </body>
</html>
```

Dessa forma podemos escrever os nossos scripts todos dentro da tag **script** ou adicionar um script de um arquivo externo dentro do nosso HTML.

OBS: Podemos incluir o nosso arquivo de **script** em qualquer lugar do nosso arquivo **HTML**. Porém é uma boa prática colocar o nosso arquivo dentro da tag **body**.

Pois antigamente era incluído o arquivo de script antes de iniciar a página, isto é dentro da nossa tag **head**. Sendo assim tendo um arquivo muito grande quando aberto o navegador. O mesmo baixava todo o **script** criado para depois renderizar a página para o usuário, e isso era um processo bem lento.

Então vamos usar os nossos scripts dentro da tag **body** como boa prática.

### Escopo

Até aqui usamos as IIFE para controlar o nosso escopo. E no browser não é diferente, um exemplo simples é: Temos um arquivo **main.js** com uma **variável** chamada **name** com o valor **Ruan** e criarmos outro arquivo **main2.js** contendo apenas uma chamada do método de **console.log(name)** passando a variável **name**.

Ex:

```js
// main.js
var name = 'Ruan';
```
```js
// main2.js
console.log(name);
```
```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="utf-8" />
    <title>JS Ninja</title>
  </head>
  <body>
    <!-- Aqui vai o nosso script -->
    <script src="main.js"></script>
    <script src="main2.js"></script>
  </body>
</html>
```

Mesmo estando em dois arquivos diferentes a variável **name** tem como seu escopo **global** e mesmo usando o método **console.log** dentro de outro arquivo e passando a variável **name** para o mesmo, é possível chama-lá. Pois a mesma encontra-se no seu contexto global.

E se ainda dentro do arquivo **main2.js** modificarmos a variável **name** a variável criada no primeiro arquivo **(main.js)** será **alterada** por conta do seu **escopo**.

Pois isso a importância do escopo dentro do Javascript.

E ainda temos um problema bem grande em relação a escopo pois estas variáveis ainda ficam dentro da memória do navegador. Ao menos que fechamos o navegador as mesmas irão continuar lá.

### IIFE

Para resolver esse problema podemos usar as IIFE. Para manter um escopo local em nosso código.

Ex:

```js
(function() {
  var name = "Ruan";
  console.log("Estou em um escopo local");
})();
```

# O objeto this.

JavaScript tem uma palavra-chave especial, _this_, que você pode usar dentro de um método para referenciar o objeto corrente.

Encontramos o this e alguns lugares:

### 1 - Em métodos de objetos:
- ### Refêrencia ao objeto.

Ex:

```js
(function() {
  var myObject = {
    myProp: 1,
    init: function init() {
      return this;
    }
  };
  console.log(myObject.init());
})();
// { myProp: 1, init: [Function: init] }
// Rereênciando o próprio objeto.
```

Neste caso o **this** está referênciando o próprio objeto, então podemos muito bem dentro da função _init_ retornar o valor da propriedade _myProp_ usando o _this_.

Ex:

```js
(function() {
  var myObject = {
    myProp: 1,
    init: function init() {
      return this.myProp;
    }
  };
})();
// 1
```

Outro lugar que podemos ver o _this_ é em:

### 2 - Funções:
 - ### Podendo ter 2 valores.
 - ### Referênciar ao **objeto global**.
 - ### Refereênciar ao o **próprio objeto**.

Dentro do browser temos um objeto global chamado **window**, no **node** temos o **global**.

Ex:

```js
(function() {
  function myFun() {
    return this;
  }
  console.log(myFun());
})();

// Window or Global
```

Sempre que temos uma função e ela não é um método de um objeto. O **this** aponta para o objeto **global**. Do contrário o mesmo irá apontar para o próprio objeto.

Ex:

```js
(function() {
  function myFunc() {
    return this;
  }

  console.log(myFun()); // Windows or Global.

  var myObject = {
    myProp: 1,
    init: function init() {
      return this;
    }
  };

  console.log(myObject.init()); // myObject or O próprio objeto.
})();
```

Outra forma de encontra o _this_ em **funções**:

- Referência ao objeto instanciado.

Usando o operador **new** podemos criar novos objetos dentro do Javascript e podemos criar os nosso próprios construtores de objetos dentro da linguagem.

E o _this_ irá apontar para o objeto criado.

Ex:

```js
(function() {
  function MyConstructor() {
    this.prop1 = "prop1";
    this.prop2 = "prop2";
  }

  var myConstructor = new MyConstructor();
  console.log(MyConstructor()); // undefined
//
```

E se não passamos o operador **new** quando criamos um novo objeto, o objeto será criado de forma **global**, pois o _this_ aponta para **window** quando é chamado dentro de um **contexto de função**.

Ex:

```js
prop1; // prop1
prop2; // prop2
```

### Arguments

O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.

O objeto arguments é uma variável local disponível dentro de todas as funções. Você pode referênciar os argumentos de uma função dentro da função usando o objeto arguments. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0.

Ex:

```js
(function() {
  function func() {
    return arguments;
  }

  console.log(func(1, 2, 3, 4));
})();
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
```

### Links:

- [Arguments](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)

- [this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)

- [Trabalhando com Objetos - Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos)
