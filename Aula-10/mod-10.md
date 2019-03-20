# Wrapper Objects

Nós sabemos que valores primitivos **não** são objetos.

Temos na linguagem como valores primitivos:

- Number
- String
- Boolean
- Null
- Undefined

E temos os outros valores como objetos:

- Function
- Array
- Object

E como diferenciamos esses valores ? Simplesmente um objeto, tem consigo propriedades e métodos. Já um valor primitivo não.

Ex:

```js
var nome = "Ruan";
nome.length; // 4
```

Neste exemplo estamos atribuindo um valor primitivo para a váriavel nome, porém a váriavel nome tem a propriedade _length_. Como isso é possível ? Se tipos primitivos não tem **propriedades** e **métodos** ?

Aí entra em cena, os **construtores**. Mas o que são ?

Construtores basicamente são funções que criam novos objetos.
Onde internamente o Javascript **envolve a nossa declaração** transformando ela em um **objeto** do tipo **String**( como foi no exemplo a cima), assim podendo usar a propriedade _length_, e após realizado o processo o interpretador do Javascript cuida de tirar esse objeto de dentro da memória.

Ex:

```js
var nome = new String('Ruan');

nome
// [String: 'Ruan']

nome.length; // 4
nome.valueOf(); // 'Ruan'
```

Neste exemplo podemos consultar o valor literal do objeto usando a função **valueOf()**.


### Criando objetos.

Podemos criar o objetos dessa seguinte forma.

Ex:

```js
var name = new String('Ruan');
var age = new Number(23);
var ninja = new Boolean(false);
```

Quando usamos a palavra chave **new** estamos criando um novo objeto. Porém, se não usarmos a palavra chave **new** estamos apenas fazendo **uma conversão de tipos** basicamente.

Ex:

```js
var name = String(23);
var age = Number('23');
var ninja = Boolean(0);

name // '23'
age // 23
ninja // false
```

# Typeof

O operador **typeof** retorna uma string indicando o tipo de um operando.

O operador typeof pode ser utilizado da seguinte maneira

> typeof operando

O **operando** é a **string**, **variável**, **keyword** ou **objeto** para que o tipo do mesmo **seja retornado**. O uso de parênteses é opcional.

Ex:

```js
// Números - Numéricos
typeof 37 === "number"; // true

// Strings - Seqüências de caracteres
typeof "" === "string"; // true

// Booleans - Lógicos booleanos
typeof true === "boolean"; // true

// Undefined - Indefinidos
typeof undefined === "undefined"; // true

// Objetos
typeof { a: 1 } === "object"; // true
typeof [1, 2, 4] === "object"; // true

// use Array.isArray ou Object.prototype.toString.call para diferenciar os objetos das arrays ex:

Object.prototype.toString.call([]); // '[object Array]'
Object.prototype.toString.call({}); // '[object Object]'
Object.prototype.toString.call(function(){}); // '[object Function]'

// Funções
typeof function() {} === "function"; // true
// Desde os primóridos do JavaScript
typeof null === "object"; // true ?
```

Obs: Na primeira implementação do JavaScript, valores em JavaScript foram representados com uma tag (etiqueta) de tipo e um valor. A tag de tipo para objetos foi 0. null foi representada com o ponteiro NULL (0x00 na maioria das plataformas). Consequentemente, null teve 0 como sua tag de tipo, portanto o typeof retorna esse valor. (necessário referência).

Sendo assim podemos confiar no **typeof** ? Apenas para valores **primitivos**.

Ex:

```js
function sum(number1, number2) {
  if (typeof number1 === "number" && typeof number2 === "number") {
    return number1 + number2;
  }
  return "Entre apenas com números";
}

console.log(sum(1, "a"));
// 'Entre apenas com números'
```

Podemos testar os valores null usando o operado **strict equal** ( === ).

[Para saber mais sobre - Wrapper Objects](https://github.com/da2k/curso-javascript-ninja/issues/882)
