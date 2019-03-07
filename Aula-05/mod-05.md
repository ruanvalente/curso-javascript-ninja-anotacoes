## Retorno de funções com Arrays e Objetos
As funções em Javascript são muito poderosas, com isso podemos usufluir do que elas tem de melhor. E uma dessas funcionalidades que as funções tem, é o **tipo de retorno** onde elas podem retornar além dos **tipos primitivos**.

Por exemplo podemos usar uma função para retornar um Array. E já que a função retorna um array, podemos acessar seus valores através dos seus index de forma como um array normal.
```js
  function myFunction() {
    return [ 1, 2, 3, 4 ];
  }

  myFunction()[1];
  2

  myFunction()[0];
  1
```
Percebemos que agora a função retorna um array e podemos trabalhar com os seus valores sem se preocupar com o seu escopo, pois o escopo dos valores retornado não foi definido em um escopo global.

Podemos também retornar objetos.
```js
  function myFunction() {
    return pessoa = {
      nome: 'Ruan',
      sobrenome: 'Valente',
      idade: 23,
      info: function() {
        return 'Olá, eu me chamo ' + pessoa.nome + ' ' + pessoa.sobrenome + ' e minha idade é ' + pessoa.idade;
      },
    };
  }

  myFunction();
  { nome: 'Ruan',
  sobrenome: 'Valente',
  idade: 23,
  info: [Function: info] }
```
Agora o retorno da função é um objeto e podemos acessar as suas propriedades e métodos.
```js
  myFunction().info();
  'Olá, eu me chamo Ruan Valente e minha idade é 23'
```
## Parâmetros de função
Da mesma forma que retornamos objetos ou arrays em Javascript podemos também, passar esses valores por parâmetro.
```js
  function myFunction( param )  {
    return param;
  }

  myFunction( [ 1, 2, 3, 4 ] );
  [ 1, 2, 3, 4 ]

  myFunction( [ 1, 2, 3, 4 ] )[1];
  2
```
Neste caso foi passado diretamente um Array como parâmetro da função, porém podemos também passar uma variável por parâmetro que o resultado não será diferente.

```js
  var arr =  [ 1, 2, 3, 4 ];
  function myFunction( param )  {
    return param;
  }

  myFunction( arr );
  [ 1, 2, 3, 4 ]

  myFunction( arr )[1];
  2
```
Podemos fazer o mesmo com objetos.
```js
  var obj =  { nome: 'ruan', curso: 'JS Ninja' };

  myFunction( obj );
  { nome: 'ruan', curso: 'JS Ninja' }

  myFunction( obj ).nome;
  'ruan'

  myFunction( obj ).curso;
  'JS Ninja'
```

Links:

### MDN:
- [Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es)

### Braziljs Blog:

- [Você realmente entende as Funções em JavaScript?](https://braziljs.org/blog/funcoes-em-javascript/)

### Eloquente Javascript:

- [Funções](http://braziljs.github.io/eloquente-javascript/chapters/funcoes/)

### Rodrigo Branas:
- [Desvendando a linguagem JavaScript - #7 - Function - Parte 1 - Rodrigo Branas](https://www.youtube.com/watch?v=OqR0hE-DQn4&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=8&t=0s)

- [Desvendando a linguagem JavaScript - #8 - Function - Parte 2 - Rodrigo Branas](https://www.youtube.com/watch?v=m9uPpURTI0c&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=9&t=0s)

