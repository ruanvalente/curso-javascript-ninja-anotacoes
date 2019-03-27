# Laços ( Loops ).

A instrução do...while repetirá até que a condição especificada seja falsa.

Ex:

```js
do
  // declaracao
while (condicao);
```

A instrução será executada uma vez antes da condição ser verificada. Para executar multiplas instruções utilize uma declaração de bloco ({ ... }) para agrupá-las. Caso a condicao seja verdadeira, então o laço será executado novamente. Ao final de cada execução, a condicao é verificada. Quando a condição contida no while for falsa a execução do laço é terminada e o controle é passado para a instrução seguinte a do...while.

Ex:

```js
do {
  i += 1;
  console.log(i);
} while (i < 5);
/*
2
3
4
5
*/
```

Neste exemplo o laço é executado pelo menos **uma vez** e irá executar até que i seja menor que 5.

# For in

A declaração for...in executa iterações a partir de uma variável específica, percorrendo todas as propriedades de um objeto.
Para cada propriedade distinta, o JavaScript executará uma iteração. Segue a sintaxe:

Ex:

```js
for (var prop in myObject) {
  // ....
}
```

```js
var car = {
  brand: "Fiat",
  model: "Uno",
  year: 2014
};
```

Agora com o objeto criado podemos pecorrer as suas propriedades usando o for in.

```js
for (var prop in car) {
  console.log(prop);
}

/*
brand
model
year
*/
```
Podemos também acessar as propriedades do nosso objeto:

Ex:

```js
for (var prop in car) {
  console.log(prop, ":", car[prop]);
}
/*
brand: Fiat
model: Uno
year: 2014
*/
```

Basicamente criamos uma váriavel dentro do nosso loop chamada **prop** ( podendo ter qualquer nome ). E pecorremos todas as propriedades do objeto car.

Podemos também usar o **in** para verificar se determinada propriedade existe dentro do nosso objeto retornando **true** ou **false**.

Ex:

```js
console.log("brand" in car); // true
console.log("new" in car); // false
```

# Saltos

Saltos em Javascript são basicamente instruções que usamos para _"pular"_ determinado trecho de código.

## Return

A instrução **return** faz o interpretador saltar uma chamada de função de volta ao código que a chamou e também fornecer o valor para a chamada.

Ex:

```js
function myFunction() {
  var number = 5;
  if (number === 10) {
    return true;
  }
  return false;
}

console.log(myFunction()); // false
```

Neste caso é verificado dentro do if se o number é igual a 10. Caso for verdade, o valor retornado será true caso contrário será false.

Nesse exemplo é retornado false, pois o valor da váriavel number é 5 e não 10. Sendo assim é retornado o valor false e terminando a instrução.

## Break

A instrução **break** faz o interpretador saltar para o final de um laço ou para outra instrução.

Ex:

```js
var number = 10;
switch (number) {
  case 1:
    console.log(1);
    break;

  case 2:
    console.log(2);
    break;

  case 10:
    console.log(10);
    break;

  default:
    console.log("Nenhuma das anteriores");
}
```

Neste caso é verificado qual caso _( case )_ tem como seu valor 10, caso seja verdadeiro é retornado o valor 10 e terminado a instrução switch através da instrução **break**.

OBS: Em casos como o da instrução switch, sem o uso do **break**, será passado por todas as instruções a serem verificadas dentro do switch. Gerando um retorno não esperado.

## Continue

O **continue** faz o interpretador pular o restante do corpo de um laço e voltar ao início de um laço para começar uma nova interação.

Javascript permitem que as instruções sejam nomeadas _( rotuladas )_, sendo que **break** e **continue** podem indentificar o laço de destino ou rótulo de instrução.

Ex:

```js
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= arr.length; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i); //1 3 5 7 9
}
```

Neste exemplo dentro do if é perguntado se i tem como resto igual a zero. Se isso for verdade a instrução **continue** passará para a próxima instrução válida, ou seja retornando os valores ímpares.
