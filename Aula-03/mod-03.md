## Tipos de dados e objetos
Tipos em Javascript podemos separá-los ou dividi-los em duas categorias.

### Tipos primitivos:
+ Number
+ String
+ Boolean
+ Undefined e Null

### Tipos de Objeto.
- São todos os outros ;)

Pois tudo que não for primitivo será considerado um **Objeto** dentro do Javascript.

## Objeto
Um objeto é um **conjunto de propriedades**, esse conjunto de propriedades deve ser seguida de um **nome** e de um **valor**. Este podendo ser um valor **primitivo** ou um **objeto**.
Podemos crirar um objeto usando **{}** com a **propriedade** seguida de **:** para setar o seu respectivo **valor**.
```js
  { propriedade: 'valor' };
```
Ou podemos colocar isso dentro de uma variável.
```js
  var objeto = { propriedade: 'valor' };

  objeto
  { propriedade: 'valor' }
```
OBS: Podemos acessar os objetos apartir da anotação de **objeto** usando o ponto **( * )** ou usando a anotação de array com os **['propriedade']** seguida da sua propriedade.

Onde podemos aplicar o conceito de objetos ? Basicamente quando precisamos organizar o nosso código da nossa aplicação. Objetos também refletem aos objetos da vida real.
#### Criando objeto
```js
  var pessoa = {
    nome: 'Ruan',
    sobrenome: 'Valente',
    idade: 23,
    estudando: true
  };

  pessoa
  { nome: 'Ruan', sobrenome: 'Valente', idade: 23, estudando: true }
```
#### Usando anotação de objeto e de array.
```js
  pessoa.nome
  'Ruan'
  pessoa.estudando
  true

  pessoa['sobrenome']
  'Valente'
  pessoa['idade']
  23
```

## Métodos de objeto.
Em Javascript podemos atribuir um função a uma variável, e assim podemos invocar a função usando a variável que a função foi atribuida.
```js
  var myFunction = function () {
    return 'Hello'
  };
```
Agora com a função criada e atribuida a *myFunction* podemos simplesmente invocar a função usando o operador **()**.
```js
  myFunction();
  'Hello'
```
Sabendo este conceito podemos fácilmente atribuir uma função como uma propriedade de um **objeto**, porém quando uma função é atribuida como propriedade para um objeto a mesma se torna-se um **método de um objeto**.
Métodos basicamente são ações que o nosso objeto irá ter.

[Para saber mais sobre o assunto](https://developer.mozilla.org/pt-PT/docs/Javascript_orientado_a_objetos)

OBS: Quando precisamos adicionar mais uma propriedade dentro do Objeto, não podemos usar o operador de atribuição **( = )**. Precisamos informa o objeto a sua nova propriedade com seu respectivo valor que desejamos atribuir.
```js
  var pessoa = { nome: 'Ruan', idade: 23 };
  pessoa = { sobrenome: 'Valente'};

  pessoa
  { sobrenome: 'Valente' }
```
Desta forma sobreescrevemos todo o conteúdo de dentro do objeto, para atribuir de forma correta chamamos o objetos usamos a anotação de **.** e passamos a sua propriedade seguida do seu respetivo valor.
```js
  var pessoa = { nome: 'Ruan', idade: 23 };
  pessoa.sobrenome = 'Valente';

  pessoa
  { nome: 'Ruan', idade: 23, sobrenome: 'Valente' }
```
Dessa forma o nosso objeto é atribuido sem sobreescrever os valores anteriores.

#### Criando um método de objeto.
Agora vamos criar um método de um objeto, assim como na atribuição de uma função a uma variável vamos atribuir uma função a uma propriedade de um objeto.
```js
  var pessoa = { nome: 'Ruan', sobrenome: 'Valente', idade: 23 };
  pessoa.nomeCompleto = function() {
    return 'Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome;
  };
```
Agora se formos verificar o objeto pessoa temos um método chamado **nomeCompleto** que retorna o nome completo da pessoa definida dentro do objeto.
```js
  pessoa.nomeCompleto();
  'Meu nome é Ruan Valente'
```
Assim como em uma função normal, podemos invocar o método usando o operador **()** de dentro do objeto.

## Métodos de objetos ( continuação )
Em resumo um **método** é uma ação que o objeto irá realizar.
Ex:
```js
  pessoa.nomeCompleto();
  'Meu nome é Ruan Valente'
```
Apenas dentro de objetos as funções são chamadas de **métodos**. Quando usamos uma variável e atribuimos ela uma função a mesma ainda continua sendo uma **função** e não um objeto.

### Links:

- ['Desvendando a linguagem JavaScript - #6 - Object - Rodrigo Branas'](https://www.youtube.com/watch?v=A_E-K69j93Q)

- ['Desvendando a linguagem JavaScript - #7 - Function - Parte 1 - Rodrigo Branas'](https://www.youtube.com/watch?v=OqR0hE-DQn4)

- ['Desvendando a linguagem JavaScript - #8 - Function - Parte 2 - Rodrigo Branas'](https://www.youtube.com/watch?v=m9uPpURTI0c)