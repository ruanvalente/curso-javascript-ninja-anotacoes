## Truthy e falsy
Em JavaScript, um valor **truthy** é um valor que se traduz em verdadeiro quando avaliado em um contexto Booleano.
E um valor **falsy** é um valor que se traduz em falso quando avaliado em um contexto Booleano.

Valores **Truthy**
+ if (true)
+ if ({})
+ if ([])
+ if (42)
+ if ("foo")
+ if (new Date())
+ if (-42)
+ if (3.14)
+ if (-3.14)
+ if (Infinity)
+ if (-Infinity)

Valores **Falsy**
+ if (false)
+ if (null)
+ if (undefined)
+ if (0)
+ if (NaN)
+ if ('')
+ if ("")
+ if (-0)

[Para saber mais sobre: Truthy](https://developer.mozilla.org/pt-BR/docs/Glossario/Truthy)
[e Falsy](https://developer.mozilla.org/pt-BR/docs/Glossario/Falsy)

Também podemos descobrir a representação booleana de um determinado valor usando o operador **!!** seguido do valor.
```js
  !!1
  true

  !!false
  false

  !!{}
  true

  !!-0
  false
```

## Condicional Ternário
O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.
Sua sintaxe:

*condition ? expr1 : expr2*

Sendo que **condition** é uma expressão que é avaliada como **true** ou **false**. E **expr1**, **expr2** são expressões com valores de qualquer tipo.

Se **condition** é **true**, o operador retornará o valor de **expr1;** se não, ele retorna o valor de **exp2**.
```js
  1 === 2 ? true : false;
  false
```
## Escopo de variáveis e funções.
A linguagem JavaScript tem dois escopos: **global e local**.  Uma variável declarada fora de uma **definição de função** é uma **variável global**, e seu valor será acessível e modificável em todo o seu programa.  Uma variável declarada dentro de uma **definição de função** é **local**.  Ela é criada e destruída sempre que a função é executada e **não pode ser acessada por qualquer código fora da função**.  O JavaScript não suporta escopo de bloco (no qual um conjunto de chaves {. . .} define um novo escopo), exceto em caso especial de variáveis com escopo em bloco.

Uma variável local pode ter o mesmo nome que uma variável global, mas é totalmente separada. A alteração do valor de uma variável não afeta a outra.  Somente a versão local tem significado dentro da função na qual ela é declarada.
```js
  var myVar = 1;

  myFunction() {
    return myVar;
  }

  myFunction();
  1
```
A variável **myVar** foi definida em **escopo global** sendo assim a mesma é visível tanto dentro da função quanto fora dela. Já do contrario, no caso quando declaramos uma variável dentro da função a mesma não pode ser acessada fora do **escopo da função** que onde foi criada.
```js
  function otherFunction() {
    var otherVar = true;
    return otherVar;
  }

  otherFunction();
  true
```

Dessa forma temos como retorno da função o valor contido dentro da variável **otherVar**. Porém formos acessar essa variável o interpretador do Javascript mostrar um erro, dizendo que a mesma não está **definida**.
```js
  otherVar;
  ReferenceError: otherVar is not defined
```
Isso significa que a variável **otherVar** só existe dentro do escopo onde ela foi criada, isso quer dizer dentro da função. Já fora dela a mesma não existe !

OBS: Para saber mais como o Javascript lida com o gerenciamento de memória.

[Garbage collection](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Memory_Management)

Podemos também criar uma variável sem utilizar a palavra chave **var** porém o Javascript entende que quando utilizamos essa abordagem, estamos dizendo que a mesma será criada dentro do escopo **global** mesmo estando dentro de um escopo de **função**
```js
  function myFunction() {
    globalVar = 'Global';
    return globalVar;
  }

  myFunction()
  'Global'

  globalVar;
  'Global'
```

Neste caso o Javascript não poderá usar o Garbage collection, pois a mesma estará no escopo global.

Use sempre a palavra chave **var**.

Argumentos de funções também são sempre locais.
```js
  function myArgs( a, b, c ) {
    return a;
  }

  myArgs( 1 );
  1
  myArgs( 1, 2 );
  1

  c
  ReferenceError: c is not defined
```

Neste exemplo os argumentos passados para a função **não estão definidos** fora do escopo de onde a mesma foi criada.