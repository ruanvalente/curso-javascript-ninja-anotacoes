# Métodos de Array IV.

### Reduce() - Não modifica o array.

O método reduce() executa uma função reducer (provida por você) para cada membro do array, resultando num único valor de retorno.

A função reducer é alimentada por quatro parâmetros:

- 1 Acumulador (acc)
- 2 Valor Atual (cur)
- 3 Index Atual (idx)
- 4 Array Original (src)

O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará o valor resultante, único, final.

```js
var arr = [1, 2, 3, 4, 5];
var reduce = arr.reduce(function(acc, cur, indx, src) {
  return acc + cur;
}, 0);

console.log(reduce);
/* 15
1 -  0 + 1 = 1
2 -  1 + 2 = 3
3 -  3 + 3 = 6
4 -  6 + 4 = 10
5 -  10 + 5 = 15 
*/
```

Temos no exemplo a cima:

**callback**

- Função que é executada em cada valor no array, recebe quatro argumentos:

**Acumulador**

- O valor retornado na última invocação do callback, ou o argumento Valor Inicial, se fornecido.

**valorAtual**

- O elemento atual que está sendo processado no array.

**indice**

- O índice do elemento atual que está sendo processado no array.

**array**

- O array ao qual a função reduce() foi chamada.

**valorInicial**

- Opcional. Objeto a ser usado como o primeiro argumento da primeira chamada da função callback. Chamar reduce() em uma array vazia sem valor inicial é um erro.

E no final temos o nosso valor **reduzido** com base no que passamos dentro da função de callback.

### reduceRight() - Não modifica o array.

O método reduceRight() aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.

Da mesma forma como **reduce** trabalha o método reduceRight executa a função callback uma vez para cada elemento presente no array, excluindo buracos no array, recebendo quatro argumentos: o valor inicial (ou o valor da chamada anterior do callback), o valor do elemento atual, o índice do elemento atual, e o array onde a operação está acontecendo.

```js
var myName = ["R", "u", "a", "n"];
var reduce = myName.reduceRight(function(acc, cur, indx, src) {
  return acc + cur;
});

console.log(reduce);
// nauR
```

Da mesma forma como reduce trabalha o método reduceRight apenas faz a execução da direita para esquerda. Já que concatenamos as nossas Strings dentro do Array usando o reduceRight, pelo seu comportamento padrão o resultado acaba mostrando a nossa String reduzida da direita para esquerda.

# indexOf()

O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

indexOf() compara o elementoDePesquisa com os elementos do Array usando igualdade estrita (o mesmo método usado pelo ===, ou triple-equals operator).

```js
console.log(myName.indexOf("R"));
// 1
```

O método indexOf retorna o index do elemento que pesquisamos e se não for encontrado o elemento, o mesmo retorna -1.

```js
console.log(myName.indexOf("z"));
// -1
```

Podemos também passar um segundo parâmetro para o método, dizendo de onde ele deve partir a sua pesquisa.

```js
console.log(myName.indexOf("R", 2));
// -1
```

Neste caso a letra "R" está no index 1 e foi passado que queriamos realizar a pesquisa apartir do index 2. Por isso o mesmo retorna -1. E se você não especificar de onde queremos que começe a busca pelo elemento, o mesmo irá buscar do início do Array.

# lastIndexOf()

O método lastIndexOf() retorna o ultimo índice que um certo elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente. O array é pesquisado de traz para frente, começando pelo fromIndex.

Em outras palavras, faz basicamente a mesma função do indexOf(), porém o mesmo começa a sua busca pelo ultimo item.

```js
console.log(myName.lastIndexOf("a", 2));
// 2
```

# Array.isArray()

O método Array.isArray() retorna true se um objeto é uma array, e false se não é.

```js
console.log(Array.isArray([]));
```

Podemos usar o método **isArray** quando precisamos verificar se um array passado é realmente um array. Visto que usando o operador **typeof** e verificar se um Array é realmente um Array, o mesmo retorna um **object**. ( Que não é uma mentira ;).

Porém se quisermos ter uma segurança ainda maior podemos usar o método **isArray**.

[Para saber mais: Arrays - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
