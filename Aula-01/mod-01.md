## Um giro pela linguagem Javascritpt

### Variáveis

É um nome simbólico para atribuir um tipo de valor. Dentro do javascript usamos a palavra chave **var** para declarar uma variável.

```js
var x;
x
undefined;
```

Quando não definimos um valor para a variável a mesma tem como seu valor **undefined**, que seria um valor _indefinido_.

Declaramos a variável x e não atribuimos nenhum valor para a mesma. Para realizar o processo de atribuição usamos o operador **( = )** igual, seguido do valor a ser atribuido para a variável.

```js
var x = 10;
x
10
```

Agora a variável x tem como valor 10. Porém podemos atribuir outro valor para x por exemplo:

```js
var x = 100;
x
100
```

Agora a variável x tem como valor 100 e não mais 10. Dai o nome variável, algo que pode mudar conforme for necessário.

### Tipos de dados ( Primitivos )

Javascript aceita alguns tipos de dados, por exemplo:

- Number : São números tanto reais ou com casas decimais.

```js
var x = 100;
x
100
x = 190.0;
x
190.0
```

- String : São cadeia de caracteres envolvidas em uma aspas dupla / simples.

```js
var x = 'Javascript';
x
'Javascript'
x = "Javascript Ninja";
x
'Javascript'
```

- Boolean : São valores verdadeiro ou falso. No caso true ou false.

```js
var x = true;
x
true
x = false;
x
false
```

- Null : O valor null é um literal em JavaScript que representa um valor nulo ou "vazio" (p/ex: que aponta para um objeto inexistente).

```js
var x = null;
x
null
```

- Undefined : O valor global undefined representa um valor indefinido.

```js
var x;
x
undefined
```

Também temos outros tipos de dados, que são os **Objetos** em Javascript.

- Object : Em JavaScript, um objeto é uma entidade independente, com propriedades e valores.

```js
var pessoa = {
  nome: 'Ruan Valente',
  idade: 23
};
```

Neste exemplo temos o objeto **pessoa** com algumas propriedades: nome e idade.

Podemos também acessar as propriedades do objeto usando a anotação de objeto **( pronto )** + a **propriedade** ou a anotação de array **[propriedade]**.

```js
pessoa.nome;
'Ruan Valente'

pessoa['idade'];
23
```

- Array : São usados para armazenar vários valores em uma única variável. Seguida de seu respectivo index.

```js
var numeros = [1, 2, 3, 4, 5];
```

Para acessar os valores contidos dentro do array números, usamos o index correspondente ao valor desejado.

```js
numeros[0];
1
numeros[2];
3
```

Os index começam sempre apartir do **0** dentro do array.

### Operadores Aritméticos

Como na matemática o Javascript nos fornece os principais operadores aritméticos:

- Adição : +
- Subtração : -
- Multiplicação : \*
- Divisão : /
- Módulo : %

```js
1 + 2;
3

3 - 2;
1

3 * 3;
9

10 / 2;
5

10 % 2;
0
```

Também temos os operadores aritméticos abreviados.

- Pré-incremento / Pós incremento ( ++ )
- Pré-decremento / Pós incremento ( -- )

```js
var soma = 10 + 10;

soma;
20

soma++;
20

soma;
21

++soma;
22
soma;
22

soma--;
22
soma;
21

--soma;
20
soma;
20
```

Também podemos usar os operadores artméticos abreviados da mesma forma para os outros operadores.

- += Mais igual.
- -= Menos igual.
- \*= Vezes igual.
- /= Divisão igual.
- %= Módulo igual

Exemplo:

```js
var soma = 10;
soma += 20;
30
```

### Operadores de igualdade / Relacionais.

Usamos os operadores de igualdade / relacionais quando precisamos comparar se valores são iguais ou diferentes de outros. Sempre retornando true ou false.

- == : Igual à.
- != : Diferente de.

Exemplo:

```js
1 == 1;
true

1 == 2;
false

1 != 1;
false

1 != 2;
true
```

Porém também podemos verificar pelo tipo do dado. Usando a seguinte anotação.

- === : Igual à testando o tipo.
- !== : Diferente de testando o tipo.

```js
1 == '1';
true
```

Como assim retornou true ? Sendo que são tipos diferentes ? Bom, pelo fato do Javascript ter sua tipagem dinâmica e também ter sua tipagem fraca. A tipagem dinâmica nos permite atribuir os valores sem ter a necessidade de definir um tipo. Porém pela mesma ter sua tipagem fracamente tipada a linguagem faz a **conversão** de tipos de forma automática. Assim o interpretador do Javascript entende que o valor da direita do exemplo a cima precisa ser convertido para o valor da esquerda. Assim retornando true. Porém podemos mudar esse comportamento testando também pelo **tipo de dado**.

```js
1 === '1';
false

1 !== '1';
true
```

Também temos os operadores relacionais. Um operador relacional compara seus operando e retorna um valor booleano baseando-se na comparação, retornando um valor **true ou false**.

- ( > ) Maior que
- ( < ) Menor que
- ( >= ) Maior igual a
- ( <= ) Menor igual a

```js
1 > 1;
false

1 < 2;
true

1 >= 1;
true

2 <= 2;
true
```

## Funções

São blocos de código Javascript nomeados, e que podem ser invocados usando o operador **()**

```js
var x = 1;
function soma() {
  x += 1;
}
```

Agora temos uma função chamada **soma** e usando o operador **()** podemos invocá-la.

```js
soma();
undefined

x;
2
```

A função em si não retornada nada neste caso um valor, porém quando verificamos a variável x percebemos que o seu valor foi alterado.

#### Funções criam escopo

Funções também criam **escopo**. O escopo em si seria um espaço onde declaramos uma variável e apenas nesse espaço onde ela foi criada a mesma pode existir, e fora desse escopo a mesma não existe dentro do nosso programa.

```js
function escopo() {
  var idade = 23;
}
idade;
// idade ReferenceError: idade is not defined
```

O interpretador do Javascript mostra um erro, dizendo que a variável idade não foi definida, neste caso a mesma não existe fora do escopo da função que foi criada, e a mesma só existe dentro dos **{ }**.

#### Funções retornam valores

Então para que possamos conseguir acessar o valor definido dentro da função escopo precisamos da instrução **return** que retorna um valor.

```js
function escopo() {
  var idade = 23;
  return idade;
}

escopo();
23
```

#### Funções podem receber argumentos ou parâmetros

Argumentos ou parâmetros de funções são valores ou variáveis que podemos passar dentro da função.

```js
function soma(x, y) {
  return x + y;
}

soma(10, 2);
12
```

Percebemos que definimos dois argumentos para a nossa função **x e y** e passamos dois valores para que quando invocamos essa função ela retorne a soma dos mesmos.

Links:

- [JavaScript básico - MDN](https://developer.mozilla.org/pt-BR/docs/Aprender/Getting_started_with_the_web/JavaScript_basico)

- [Guia JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide)

- [Desvendando a linguagem JavaScript - Rodrigo Branas](https://www.youtube.com/playlist?list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc)
