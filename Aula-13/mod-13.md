# Métodos De Arrays.

O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

### toString() - Não modifica o Array.

O método _toString()_ retorna uma string representando um array específico e seus elementos.

O objeto Array substitui o método toString() de Object. Para objetos do tipo Array, o método toString() concatena todos os valores em apenas uma string.

Ex:

```js
var numbers = [1, 2, 3, 4];

numbers.toString();
// "1,2,3,4"
```

### concat() - Não modifica o Array.

O método _concat()_ retorna um novo array contendo todos os arrays ou valores passados como parâmetro

concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus elementos (se o elemento passado for um array).

concat não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si mesmo e dos argumentos passados. Os elementos copiados são:

- Referência aos objetos (e não o objeto): concat copia a referência aos objetos para o novo array. Tanto o original quanto a cópia apontam para o mesmo objeto. Ou seja, se o objeto foi modificado, tais mudanças serão visíveis no objeto original e no array.

- Strings e numbers (diferente dos objetos String e Number): concat copia os valores de strings e numbers para o novo array. Qualquer alteração no novo array não refletirá no original, e vice versa.

Ex:

```js
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
```

### unshift() - Modifica o Array.

O método _unshift()_ adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.

O método unshift insere os valores fornecidos no início de um objeto do tipo array.

unshift é intencionalmente genérico; este método pode ser called ou applied em objetos que se assemelham aos arrays. Objetos que não contêm uma propriedade length que reflete a última de uma série consecutiva de propriedades numéricas, iniciada por 0, podem não comportar-se de maneira significativa.

Ex:

```js
numbers;
// [1, 2, 3, 4]

numbers.unshift(0);
// 5
numbers;
// [0, 1, 2, 3, 4]
```

### shift() - Modifica o Array.

O método _shift()_ remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.

O método shift remove o elemento de índice zero, diminuí em 1 os indices dos demais valores e retorna o valor removido. Se a propriedade length for 0, então undefined é retornado.

shift é intencionalmente genérico; esse método pode ser chamado ou aplicado para objetos parecidos com arrays. Objetos que não contém a propriedade length representando o tamanho de uma série consecutiva, começando em zero, podem não se comportar de maneira correta.

Ex:

```js
numbers;
// [0, 1, 2, 3, 4]

numbers.shift();
//0

numbers;
// [1, 2, 3, 4]
```

# Métodos De Arrays II.

### slice() - Não modifica o Array.

O método _slice()_ retorna uma cópia rasa de parte de um array em um novo objeto array.

slice não altera o array original. Retorna uma cópia de elementos do array original.

Elementos do array original são copiados para o array retornado da seguinte maneira:

- Para referências de objeto (e não o objeto real), slice copia referências de objeto em um novo array. Ambos, o original e o novo array referem-se ao mesmo objeto. Se um objeto referenciado é alterado, as alterações são visiveis em ambos, no novo array e no array original.

- Para strings e números (não objetos String e Number), slice copia strings e números em um novo array. Alterações na string ou número em um array não afetam o outro array.

Se um novo elemento é adicionado a qualquer array, o outro não é afetado.

Ex:

```js
numbers;
// [ 1, 2, 3, 4 ]

numbers.slice(0, 2);
// [ 1, 2 ]
```

### splice() - Modifica o Array.

O método _splice()_ altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

#### indice

- Índice o qual deve iniciar a alteração da lista. Se for maior que o tamanho total da mesma, nenhum elemento será alterado. Se negativo, irá iniciar a partir daquele número de elementos a partir do fim.

#### deleteCount

- Um inteiro indicando o número de antigos elementos que devem ser removidos.

- Se o parâmetro deleteCount não é especificado, ou se é maior que o número de elementos restantes na lista iniciando pelo índice, então todos os elementos até o fim da lista serão deletados.

- Se deleteCount é 0, nenhum elemento é removido. Neste caso você deve especificar pelo menos um novo elemento.

#### elemento1, ..., elementoN

- Os elementos a adicionar na lista. Se você não especificar nenhum elemento, splice simplesmente removerá elementos da mesma.

#### Retorno

Uma lista contendo os elementos removidos. Se apenas um elemento é removido, por exemplo, uma lista contendo apenas um elemento é retornada. Se nenhum elemento é removido, uma lista vazia é retornada.

Se você especificar um número diferente de elementos a inserir comparado ao número de elementos que você está removendo, a lista terá um tamanho diferente no final da execução.

Ex:

```js
numbers;
// [ 1, 2, 3, 4 ]

numbers.splice(2);
// [ 1, 2 ]
```

Quando passamos apenas um valor por parâmetro para o método **splice** ele apenas irá remover o items apartir do index que foi passado.

Porém podemos especificar de onde isso deve começar a terminar.

Ex:

```js
numbers = [1, 2, 3, 4];

numbers.splice(1, 2);
// [ 1, 4 ]
```

Neste exemplo que foi feito a cima passamos para o método **splice** o index onde ele deve começar e quantos elementos ele deve remover.

Porém podemos ir além, podemos adicionar elementos usando o método **splice**.

Ex:

```js
numbers = [1, 2, 3, 4];

numbers.splice(1, 0, "a", "b", "c");
// [ 1, 'a', 'b', 'c', 2, 3, 4 ]
```

Neste exemplo passamos o index onde irá começar a adição dos items e também dizemos que não queremos remover nenhum item, e sim que queremos passar os valores que iremos adicionar apartir do index que passamos no primeiro parâmetro.

E também podemos substituir esses novos elementos que passamos para o nosso array ;)

Ex:

```js
numbers.splice(1, 3); // podemos passar mais elementos se quisermos adicionar dentro do array.
// [ 1, 2, 3, 4 ]
```

# Métodos De Array III.

### forEach()

O método _forEach()_ executa uma dada função em cada elemento de um array.

> arr.forEach(callback[, thisArg])

E esse método recebe alguns parâmetros são eles:

#### callback

- Função para executar em cada elemento, recebendo três argumentos:

  - **currentValue**
  - O valor atual do elemento sendo processado no array.

  - **index**
  - O índice do elemento atual sendo processado no array.

  - **array**
  - O array que **forEach()** está sendo aplicado.

- **thisArg**
  - Opcional. Valor a ser usado como this quando executar callback.

forEach() executa a a função callback uma vez para cada elemento do array – diferentemente de map() ou reduce(), ele sempre retorna o valor undefined e não é encadeável. O caso de uso típico é alterar o array no final do loop.

Ex:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(function(item, index, arr) {
  console.log(item, index, arr);
});

/*
1 0 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
2 1 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
3 2 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
4 3 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
5 4 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
6 5 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
7 6 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
8 7 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
9 8 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
10 9 [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
*/
```

Usamos o método **forEach** quando precisamos fazer alguma interação dentro array. Usando uma função de callback para manipular o mesmo.

Podemos usar para somar todos os elementos de um array por exemplo.

Ex:

```js

// arr - > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var sum = 0;
arr.forEach(function(item) {
  sum += item;
});

console.log(sum);

// 55
```

### every()

O método _every()_ testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

**true** se a função de callback retorna um valor truthy para cada um dos elementos do array; caso contrário, **false**.

Ex:

```js
// arr -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var every = arr.every(function(item) {
  return item < 5;
});

console.log(every);
// false
```

Neste exemplo o método every verifica se todos os items são menores do que 5. O método somente retornará **true** se todos items forem menores do que 5, do contrário retornará **false**.

### some()

O método _some()_ testa se alguns dos elementos no array passam no teste implementado pela função atribuída.

Esta função retorna **true** se a função callback retornar true **para qualquer elemento** do array; caso contrário, **false**.

Ex:

```js
// arr -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var some = arr.some(function(item) {
  return item % 2 === 0;
});

console.log(some);
// true
```

Neste exemplo o método **some** verificou se apenas um item do nosso array for divisível por 2 e tiver resto zero, o mesmo já terá como se retorno **true**. Só retornaria **false** se todos não atendesse a condição passada para a função de callback.

### Map

O método _map()_ invoca a função de callback passada por argumento para cada elemento do Array e devolve um **novo Array** como resultado.

O método map chama a função callback recebida por parâmetro para cada elemento do Array original, em ordem, e constrói um novo array com base nos retornos de cada chamada.

Ex:

```js
// arr -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var map = arr.map(function(item, index) {
  return { id: index, item: item };
});

console.log(map);
/*
[ { id: 0, item: 1 },
  { id: 1, item: 2 },
  { id: 2, item: 3 },
  { id: 3, item: 4 },
  { id: 4, item: 5 },
  { id: 5, item: 6 },
  { id: 6, item: 7 },
  { id: 7, item: 8 },
  { id: 8, item: 9 },
  { id: 9, item: 10 } ]
*/
```
Temos como retorno um array de objetos com os items do array.

### Filter

O método _filter()_ cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

E retorna um novo array com os elementos que passaram no teste pela nossa função.

```js
// arr -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var filter = arr.filter(function(item) {
  return item > 6;
});

console.log(filter);

// [ 6, 7, 8, 9, 10 ]
```

PS: Podemos encadear os métodos ;) assim retornando um único valor.

Ex:

```js
var map = arr
  .map(function(item) {
    return item * 2;
  })
  .filter(function(item) {
    return item % 2 === 0;
  });

console.log(map);
//[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]
```

[Arrays - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)
