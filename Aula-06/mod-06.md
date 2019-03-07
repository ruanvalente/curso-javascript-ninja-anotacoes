# Operador virgula e estrutura condicional **switch**
o operador vírgula avalia o valor de seus operandos (da esquerda para a direita) e retorna o valor do último operando.

Ex:
> expr1, expr2, expr3...

Você pode usar o operador vírgula quando desejar incluir múltiplas **expressões** em um lugar que requer uma **única expressão**.

Ex:

```js
  var a = 1, b = 5, c;
  > a
  1
  > b
  5
  > c
  undefined
```

Neste exemplo definimos 2 valores para 3 variáveis usando o operador virgula.

Onde a variável **a** tem como seu valor **1** e a variável **b** tem como seu valor **5**. E já que não definimos um valor para a variável **c**, a mesma tem como seu valor **undefined**.

## Switch
A condicional switch avalia **uma expressão**, combinando o valor da expressão para uma **cláusula case, e executa as instruções  associadas ao case**.

Ex:

```js
switch (expressão) {
  case valor1:
    //Instruções executadas quando o resultado da expressão for igual á valor1
    [break;]
  case valor2:
    //Instruções executadas quando o resultado da expressão for igual á valor2
    [break;]
  ...
  case valueN:
    //Instruções executadas quando o resultado da expressão for igual á valorN
    [break;]
  default:
    //Instruções executadas quando o valor da expressão é diferente de todos os cases
    [break;]
}
```
### Expressão
Uma expressão que será comparada á cada cláusula case.
### Case expressãoN
Uma cláusula case que será comparada á expressão.

Se a condição for correspondida, o programa executa as instruções asssociadas. Se múltiplos casos corresponderem o valor, o primeiro caso que corresponder é selecionado, mesmo se os casos não forem iguais entre si.

O programa primeiro procura por um caso o qual a expressão avalie como tendo o mesmo valor que o input da expressão **(usando a comparação de igualdade estrita, ===)** transferindo assim o controle para a cláusula encontrada e em seguida execudando as instruções associadas. Caso nenhum caso seja correspondido, então o programa procura pela cláusula opcional **default**, que, se encontrado, tem o controle transferido à ele, executando suas instruções associadas. Se não ouver uma cláusula **default**, o programa continua a execução da instrução seguindo para o final do switch. Por convenção, a cláusula **default é a última**, mas não é algo obrigatório.

A instrução opcional **break** associada com cada case garante que o programa saia da condicional switch assim que a instrução correspondente for executada  e executa a instrução que segue logo após o switch. Caso **break** seja omitido, o programa continua a execução para a próxima instrução dentro de switch.

Ex:

```js
function convertToHex(color) {
  var hex;
  switch (color) {
    case 'red':
      hex = '#FF0000';
      return 'O hexadecimal para a cor ' + color + ' é ' + hex + '.';

    case 'blue':
      hex = '#0000FF';
      return 'O hexadecimal para a cor ' + color + ' é ' + hex + '.';

    case 'black':
      hex = '#000000';
      return 'O hexadecimal para a cor ' + color + ' é ' + hex + '.';

    case 'white':
      hex = '#FFFFFF';
      return 'O hexadecimal para a cor ' + color + ' é ' + hex + '.';

    case 'green':
      hex = '#008000';
      return 'O hexadecimal para a cor ' + color + ' é ' + hex + '.';
  }
  return 'Não temos o equivalente hexadecimal para ' + color + '.';
}
```

# Estrutura de repetição while

Uma declaração while executa suas instruções, desde que uma condição especificada seja avaliada **como verdadeira**.

```js
  while( condiçao ) {
    // faça algo
  }
```

Se a condição se tornar falsa, a declaração dentro do laço para a execução e o controle é passado para a instrução após o laço.

O teste da condição ocorre antes que o laço seja executado. Desta forma se a condição for verdadeira o laço executará e testará a condição novamente. Se a condição for falsa o laço termina e passa o controle para as instruções após o laço.


OBS: Podemos usar o while para fazer um **loop infinito** passando por parâmetro a ser avaliado o valor **true**. Isso significa que esse valor nunca será falso, realizando o loop infinito.

```js
  while( true ) {
    // vamos ficar aqui para sempre...
  }
```

Outros exemplos..

```js
  var count = 0;

  while( count <= 10 ) {
    console.log( count );
    count++;
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
  10
```

## Links:

#### MDN:
- [Operador Vírgula](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Virgula)

- [Switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch)