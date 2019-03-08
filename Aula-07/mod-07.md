# O operador módulo ( % ).
O operador binário ( % ) retorna o inteiro restante da divisão dos dois operandos.
```js
  12 % 5
  2
```
Um exemplo simples é que podemos também usar o operador para retornar apenas números pares entre 0 e 20.

Ex:

```js
var num = 0;

while( num <= 20 ) {
  num % 2 === 0 ? console.log( num ) : '';
  num++;
}

0
2
4
6
8
10
12
14
16
18
20
```

# Arrays - A propriedade length.
Arrays em Javascript não existem. O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

[Para saber mais sobre Arrays](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Length
Basicamente conta a quantidade de itens que o array possui.
```js
var arr = [ 1, 'a', { prop: 'JS Ninja' }, function() {} ];

arr.length;
4
```

Podemos pecorrer o array usando o while. Mas temos formas melhores para isso ;).

Ex:

```js
var qtd = arr.length;

while( qtd > 0 ) {
    console.log( arr[ qtd-- ] );
  }

undefined
[Function]
{ prop: 'JS Ninja' }
a
undefined
```

```js
while( qtd > 0 ) {
  console.log( arr[ --qtd ] );
}

[Function]
{ prop: 'JS Ninja' }
a
1
undefined
```
Desta forma temos todos os elementos do nosso array :smile:

E ainda podemos ir além, acessando um objeto dentro do nosso array.

```js
while( qtd > 0 ) {
  console.log( arr[ --qtd ] );
  if( qtd === 2 ) {
    console.log( arr[ qtd ].prop );
  }
}

[Function]
{ prop: 'JS Ninja' }
JS Ninja
a
1
undefined
```
Neste exemplo verificamos se o qtd é igual a 2, se isso for verdade o código mostrar no console do node a propriedade 'JS Ninja', que é uma propriedade de um objeto que está no index 2 do array.

# O método Push do array.

Basicamente o método push do array, adicionar um item ao final do Array modificando o mesmo.

Ex:

```js
var frutas = [];
frutas.push('banana', 'maça', 'pêssego');

3
```

E automaticamente ele já retorna o length do array.

Podemos passar dentro do método push qualquer tipo de valor.
- String
- Objeto
- Função
- Array ( sim outro array :smile: )

E por ai vai...

# Estrutura de repetição ( Loop ) For.

A instrução for cria um loop que consiste em **três expressões opcionais**, dentro de **parênteses** e separadas por **ponto e vírgula**, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

Ex:

```js
for ([inicialização]; [condição]; [expressão final])
  declaração
```
**Inicialização**

Uma expressão **(incluindo expressões de atribuição)** ou declarações variáveis. Geralmente usada para **iniciar o contador de variáveis**. Esta expressão pode, opcionalmente, declarar novas variáveis com a palavra chave var. Essas variáveis são **não locais** no loop, isto é, elas estão no **mesmo escopo** que o loop for está. O resultado desta expressão é descartado.

**Condição**

Uma expressão para ser avaliada antes de cada iteração do loop. Se esta expressão for avaliada para true, statement será executado. Este teste da condição é opcional. Se omitido, a condição sempre será avaliada como verdadeira. Se a expressão for avaliada como falsa, a execução irá para a primeira expressão após a construção loop for.

**Expressão final**

Uma expressão que será avaliada no final de cada iteração de loop. Isso ocorre antes da próxima avaliação da condição. Geralmente usado para atualizar ou incrementar a variável do contador, declaração

Uma declaração que é executada enquanto a condição for verdadeira. Para executar múltiplas condições dentro do loop, use uma instrução de bloco ({...}) para agrupar essas condições. Para não executar declarações dentro do loop, use uma instrução vazia (;).

Ex:

```js
  for( var i = 0; i < 10; i++ ) {
    console.log( i );
  }

0
1
2
3
4
5
6
7
8
9
```
Neste exemplo o loop **for** se inicializa com o valor da variável **i** com **0**.
Usamos o loop for para verificar se a variável **i** for menor que o valor **10** isto é a **condição do loop**, e **incrementamos** ela dentro ainda do loop for. E a saída é a mesma quando usamos o loop while.