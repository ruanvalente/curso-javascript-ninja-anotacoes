# JS no browser

Para executar o Javascript dentro do nosso navegador podemos usar a tag **script** dentro do nosso arquivo **HTML**.

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
  </body>
</html>
```

OBS: Podemos incluir o nosso arquivo de **script** em qualquer lugar do nosso arquivo **HTML**. Porém é uma boa prática colocar o nosso arquivo dentro da tag **body**.

Pois antigamente era incluido o arquivo de script antes de iniciar a página, isto é dentro da nossa tag **head**. Sendo assim tendo um arquivo muito grande quando era aberto o navegador. O mesmo baixava todo o **script** criado para depois renderizar a página para o usuário, e isso era um processo bem lento.

Então vamos usar os nossos scripts dentro da tag **body** como boa prática.

### Escopo

Até aqui usamos as IIFE para controlar o nosso escopo. E no browser não é diferente, um exemplo simples é: Temos um arquivo **index.js** com uma **variável** chamada **name** com o valor **Ruan** e criarmos outro arquivo contendo apenas uma chamada do método **console.log(name)** passando a variável criada a cima.

Mesmo estando em dois arquivos diferentes a variável **name** tem como seu escopo **global** e mesmo usando o método **console.log** dentro de outro arquivo e passando a variável **name** para o mesmo, é possível chama-lá. Pois a mesma encontra-se no seu contexto global.

E se ainda dentro do arquivo dois modificarmos a variável **name** a variável criada no primeiro arquivo (index.js) será alterada por conta do seu escopo.

Pois isso a importância do escopo dentro do Javascript.

E ainda temos um problema bem grande em relação a escopo pois estas variáveis ainda ficam dentro da memória do navegador. Ao menos que fechamos o navegador as mesmas irão continuar lá.

### IIFE

Para resolver esse problema podemos usar as IIFE. Para manter um escopo local em nosso código.

```js
(function() {
  var name = "Ruan";
  console.log("Estou em um escopo local");
})();
```

# O objeto this.

JavaScript tem uma palavra-chave especial, _this_, que você pode usar dentro de um método para referenciar o objeto corrente.

Encontramos o this e alguns lugares:

- Em métodos de objetos:
  - Refêrencia ao objeto.

```js
(function() {
  var myObject = {
    myProp: 1,
    init: function init() {
      return this;
    }
  };
})();

// Rereênciando o próprio objeto.
```

Neste caso o **this** está referênciando o próprio objeto, então podemos muito bem dentro da função _init_ retornar o valor da propriedade _myProp_ usando o _this_.

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

Outro lugar que podemos vero o this é:

- Em funções:
  - Podendo ter 2 valores.
  - Referênciar ao **objeto global**.
  - Refereênciar ao o **próprio objeto**.

Dentro do browser temos um objeto global chamado **window**, no **node** temos o **global**.

```js
(function() {
  function myFun() {
    return this;
  }
  console.log(myFun());
})();

// Window or Global
```

Sempre que temos uma função e ela não é um método de um objeto. O **this** aponta para o objeto **global**.

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

```js
(function() {
  function MyConstructor() {
    this.prop1 = "prop1";
    this.prop2 = "prop2";
  }

  var myConstru = new MyConstructor();
  console.log(MyConstructor());
})();
//
```

E se não passamos o new quando criamos um novo objeto, o objeto será criado de forma **global**, pois o _this_ aponta para **window** quando é chamado dentro de um **contexto de função**.

### Arguments

O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma função.

O objeto arguments é uma variável local disponível dentro de todas as funções. Você pode referênciar os argumentos de uma função dentro da função usando o objeto arguments. Esse objeto contém um registro para cada argumento fornecido para a função, com o índice do primeiro registro começando em 0.

```js
(function() {
  function func() {
    return arguments;
  }

  console.log(func(1, 2, 3, 4));
})();
// [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
```

Para saber mais:

- [Arguments](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Functions/arguments)

- [this](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this)

- [Trabalhando com Objetos - Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos)
