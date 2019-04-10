# Regex I.

Expressões regulares são padrões utilizados para selecionar combinações de caracteres em uma string. Em JavaScript, expressões regulares também são objetos. Elas podem ser utilizadas com os métodos **exec** e **test** do objeto **RegExp**, e com os métodos **match**, **replace**, **search**, e **split** do objeto **String**

### Criando uma Expressão Regular

Há duas maneiras de construir uma expressão regular:

Usando uma expressão literal, que consiste em um padrão fechado entre barras, como o exemplo a seguir:

Ex:

```js
var re = /ab+c/;
```

As expressões regulares na forma literal são compiladas quando o script é carregado. Esta forma de construção possui melhor performace quando a expressão regular utilizada é uma constante, ou seja, **não muda durante a execução**.

Quando precisamos encontrar algum tipo de caractere dentro da nossa regex, podemos contar com o auxilio das **flags**.

### g - Global.

A flag global é usada quando precisamos encontra em **toda** a **expressão** por um **caractere**.

Ex:

```js
var text = 'Este é um texto simples para exemplo';
console.log(text.match(/e/g));
// [ 'e', 'e', 'e', 'e', 'e' ]
```

Neste exemplo usando o método match, a minha regex procura pela letra _e_ de forma global _g_. E no final é retornado um **Array** com os elementos encontrados.

### i - Ignore Case.

A flag ignore case traz como resultado da regex por letras maiúsculas e minúsculas.

Ex:

```js
console.log(text.match(/e/gi));
// [ 'E', 'e', 'e', 'e', 'e', 'e' ]
```

Tendo como o mesmo resultado como no exemplo anterior agora porém retornando a letra _E_ maiúscula também.

## Objeto RegeExp()

Temos o método de String chamado **match()**.

O método **match()** recupera as correspondências ao testar uma string com uma expressão regular.

Ex:

```js
console.log(text.mach(/texto/));
/*
[ 'texto',
  index: 10,
  input: 'Este é um texto simples para exemplo',
groups: undefined ]
*/
```

PS: Quando não passamos nenhuma **flag** é retornado como saída da regex algumas informações importantes como:

- O texto retornado
- index
- o input
- e o grupo.

Ou podemos usar da forma que estamos trabalhando até o momento.

Ex:

```js
console.log(text.match(/simples/gi));
// [ 'simples' ]
```

# Regex II.

Vimos na aula anterior que podemos usar as regex com valores **primitivos** usando **(//)** e também podemos usar com o objeto **RegeExp()**. Também vimos que podemos usar literias, caracteres de A-z e números são caracteres alfanumérico.

Vimos também o uso de algumas flags:

- g: **Global**
- i: **Ignore Case**

Agora vamos ver alguns **termos**

- \w: **Caracteres alfanumérico e \_**
- \d: **números (digitos)**

### \w - Caracteres alfanumérico e \_

Ex:

```js
console.log(text.match(/\w/));
/*
[ 'E',
  index: 0,
  input: 'Este é um texto simples para exemplo',
  groups: undefined ]
*/
```

O exemplo a cima retorna para mim **o primeiro match** relizado dentro da nossa regex.

PS: Sempre que a regex não conseguir fazer um match, é **retornado null**.

### \d - Números (digitos).

Ex:

```js
text = "Este é um texto simples para exemplo em 21/11/2018";

console.log(text.match(/\d/g));
// [ '2', '1', '1', '1', '2', '0', '1', '8' ]
```
Da mesma forma como no exemplo anterior, se a regex não conseguir realizar o **match**, o seu retorno é **null**.

### Classes de caracteres - Listas[].

Usando os [] podemos passar os caracteres que queremos que a regex retorne. Porém cada elemento passado dentro dos [] seguirá o padrão lógico **OU**.

Ex:

```js
console.log(text.match(/[123]/g));
// [ '2', '1', '1', '1', '2', '1' ]
```

Neste exemplo estamos dizendo para regex encontrar os números(digitos) 1 ou 2 ou 3...

Poderiamos ainda escrever está forma.

Ex:

```js
console.log(text.match(/1|2|3/g));
// [ '2', '1', '1', '1', '2', '1' ]
```

Que irá retornar o mesmo resultado.

PS: O elemento da regex passado dentro de [] **não significa** que estamos procurando pelo valor **[123]** e sim por **qualquer um desses valores**.

### Agrupamento de caracteres - ().

Quando precisamos retornar um elemento agrupado podemos ultilizar os ().

Ex:

```js
console.log(text.match(/(2018)|(11)|(21)/g));
// [ '21', '11', '2018' ]
```

PS: Podemos também usar dentro das listas intervalos de valores que queremos que a nossa regex retorne.

Ex:

```js
console.log(text.match(/[A-Z]/g));
// [ 'E' ]
```
Ex:

```js
console.log(text.match(/[0-9]/g));
// [ '2', '1', '1', '1', '2', '0', '1', '8' ]
```

Nestes exemplos temos o retorno de um intervalo de A-Z e também de 0-9.

# Regex III.

Segundo a Wikipédia o Unicode é: um padrão que permite aos computadores representar e manipular, de forma consistente, texto de qualquer sistema de escrita existente.

o padrão consiste de pouco mais de 107 mil caracteres, um conjunto de diagramas de códigos para referência visual, uma metodologia para codificação e um conjunto de codificações padrões de caracteres, uma enumeração de propriedades de caracteres como caixa alta e caixa baixa, um conjunto de arquivos de computador com dados de referência, além de regras para normalização, decomposição, ordenação alfabética e renderização.

Voltando para as nossas regex, temos um seguinte problema. Usando os intervalos dentro das listas para fazer a seguinte regex:

Ex:

```js
console.log(text.match(/[A-z]/g));
```

Poderiamos esperar algo como, o retorno de todos o caracteres maiúsculos de A-Z e minúsculos de a-z.

Porém não é exatamente isso, dentro da tabela unicode temos alguns caracteres que aparecem entre esse intervalo de A-z.

PS: No final tem uma referência para o assunto ;)

### .replace()

Um método que executa uma **pesquisa** por uma **correspondência** em uma string, e **substitui** a **substring** **correspondênte** por uma **substring** de **substituição**.

o método _.replace()_ suporta regex :smile: podemos fazer muitas coisas dentro dele veja alguns exemplos :smile:

Ex:

```js
console.log(text.replace(/simples/g, "simplesmente"));
// 'Este é um texto simplesmente para exemplo em  21/11/2018'
```

Dentro do método _.replace_ também podemos fazer agrupamentos de caracteres e retornando a sua referente captura **(\$1)**.

Ex:

```js
console.log(text.replace(/(les)/g, "--$1--"));
// 'Este é um texto simp--les-- para exemplo em  21/11/2018'
```

PS: Se quisermos mais de uma captura, podemos utilizar $1$2 e assim sucessivamente.

Ou podemos usar o \$& onde ele irá pegar todas as capturas.

Ex:

```js
console.log(text.replace(/(te)|(le)/g, "--$&--"));
// Es--te-- é um --te--xto simp--le--s para exemplo em  21/11/2018
```

E podemos ir além, dentro do método .replace usando regex podemos usar funções :smile:

Ex:

```js
console.log(
  text.replace(/te/g, function() {
    return "ARGUMENTS" + arguments;
  })
);
/*
[Arguments] {
  '0': 'te',
  '1': 2,
  '2': 'Este é um texto simples para exemplo em  21/11/2018' }
[Arguments] {
  '0': 'te',
  '1': 10,
  '2': 'Este é um texto simples para exemplo em  21/11/2018' }
'Esundefined é um undefinedxto simples para exemplo em  21/11/2018'
*/
```

Em seu retorno temos um Array onde temos.

- O match
- O primeiro item da captura
- O segundo item da captura
- E o número de vezes que ele encontrou o item dentro do texto.

PS: A função retorna undefined pois não informamos o que a mesma deveria retornar.

Ex:

```js
var name = "Ruan Valente";
console.log(
  name.replace(/(\w)(\w)/g, function(capturaTotal, letra1, letra2) {
    return letra1.toLowerCase() + letra2.toUpperCase();
  })
);

//'rUaN vAlEnTe'
```

Regex é de mais :smile: ( literalmente )

### Links:

- [JavaScript RegExp Reference - w3schools](https://www.w3schools.com/jsref/jsref_obj_regexp.asp)

- [RegExp - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

- [Expressões Regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions)

- [String.prototype.match()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match)

- [Unicode - Wikipédia](https://pt.wikipedia.org/wiki/Unicode)

- [Tabela unicode](https://unicode-table.com/pt/#latin-1-supplement)

- [Regex 101](https://regex101.com/)

- [Desvendando a linguagem JavaScript - #10 - Expressões Regulares - Rodrigo Branas](https://www.youtube.com/watch?v=9r48XuOB4DA&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=10)