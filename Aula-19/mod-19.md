# Conhecendo outros símbolos usados na Regex.

### ^ - Inicio de uma String.

Vimos nas aulas anteriores que o caractere **^** é um caractere de **negação**, porém somente dentro de **listas** [].

```js
var tags =
  "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

tags.match(/^<p>/);
// null
```

Neste exemplo o mesmo tem como retorno se a tag **\<p>** encontra-se no início da String. Como ela não se encontra no início é retornado null.

Em outras palavras o caractere **^** não fará match se a expressão que passamos dentro da nossa regex não estiver no **início** da String.

### \$ - Fim de String.

Basicamente este caractere verifica se determinado caractere encontra-se no final da nossa String.

```js
tags.match(/>$/);

/*
[ '>',
  index: 73,
  input: '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>',
  groups: undefined ]
*/
```

Da mesma forma como o caractere **^** o mesmo não fará match se a expressão passada para nossa regex não estiver no **final** da nossa String.

PS: Podemos capturar o **início** e o **final** de uma String.

```js
text.match(/(^<).+(>$)/);

/*
[ '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>',
  '<',
  '>',
  index: 0,
  input: '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>',
  groups: undefined ]
*/
```

### Flag m - Multiline

Basicamente a flag **m** dentro de quebra de linhas faz match com a expressão passada.

Do contrário se a flag **m** o match é feito com a primeira ocorrência.

```js
var textMultiline =
  "<h1>Título da página</h1>" +
  "<p>Este é um parágrafo</p>" +
  "<footer>Rodapé</footer>";

textMultiline.match(/^</gm);
```

O retorno seria todos os caracteres que tem com o seu inicio o caractere **<**.

### ? - Repetição não gulosa (se usado após repetidores)

Basicamente é quando precisamos pegar o minimo de caracteres possíveis dentro da nossa regex.

```js
tags.match(/(<\w+>).+(<\/\w+>)/);

/*
[ '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>',
  '<h1>',
  '</footer>',
  index: 0,
  input: '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>',
  groups: undefined ]
*/
```

Neste exemplo queremos pegar cada tag de abertura e fechamento, porém o match é feito da tag **h1** até a tag **footer**. Porém já que a tag **h1** tem sua abertura e fechamento queremos fazer match dessa forma. Neste caso usamos o **?**.

Que faz um repetição não gulosa, a repetição gulosa basicamente seria quando o mesmo faz match com todos os caracteres. Já usando **?** dessa forma pegamos o minimo de caracteres necessários.

```js
tags.match(/(<\w+>).+?(<\/\w+>)/);

/*
[ '<h1>Título da página</h1>',
  '<h1>',
  '</h1>',
  index: 0,
  input: '<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>',
  groups: undefined ]
*/
```

PS: Quando usamos o caractere **?** fora de um repetidor estamos dizendo que um caractere pode ser incluido ou não. Ou quando usamos ele após um repetidor, o mesmo fará uma captura não gulosa.

### (?:) - Somente agrupamentos, sem capturar.

Basicamente usamos **(?:)** quando queremos fazer um agrupamento porém sem capturar.

```js
var months = "Junho e Julho";
months.match(/ju(?:n|l)ho/gi);

// [ 'Junho', 'Julho' ]
```

PS: Usamos o **(?:)** apenas dentro de **grupos ()**

### \1, \2 - Referência dentro de Regex.

Basicamente usamos **\\1 ou \\2** dentro da nossa regex, quando queremos que o mesmo faça uma referência à uma captura realizada.

```js
tags.match(/<(\w+)>(.+)<\/(\1)>/g);

/*
[ '<h1>Título da página</h1>',
  '<p>Este é um parágrafo</p>',
  '<footer>Rodapé</footer>' ]
*/
```

Semelhante ao **.replace()** onde pegamos (capturas) a referência atraves do **$1$2...** assim podemos passar usando **\\1 \\2...**.

# Métodos de String onde você pode usar Regex.

### .match(regex)

Basicamente usamos o método **match** passando uma regex para o mesmo retornando um **array** com o match, caso contrário retornará **null**.

```js
"Ruan Valente".match(/len/g);

//[ 'len' ]
```

### .replace(regex, string)

Usamos o método **.replace()** passando a regex e a string onde ocorrerá a substituição.

```js
"Ruan".replace(/Ru/g, "H").concat(" Solo");

// 'Han Solo'
```

O método replace também aceita uma função como parâmetro.

```js
"ruan".replace("ru", function(item) {
  return item.toUpperCase();
});

// 'RUan'
```

### .split(regex)

O método split() divide um objeto String em um array de strings ao separar a string em substrings.

```js
"111.333.222-44".split(".");

//[ '111', '333', '222-44' ]
```

Já que o mesmo suporta regex poderiamos retornar somente os números dentro de um Array.

```js
"111.333.222-44".split(/\D/);

//[ '111', '333', '222', '44' ]
```

### .search(regex)

Basicamente da mesma forma que funciona o método **indexOf()** assim é o método **.search()**. Com base na regex retorna o **index** do caractere e se não for encontrado retorna **-1**.

```js
"Ruan".search(/an/);
// 2

"Ruan".search(/js/);
// -1
```

PS: Independentemente do uso da flag **g** o mesmo retornará sempre a primeira ocorrência encontrada.

# O Objeto RegExp()

O construtor **RegExp()** funciona como os outros construtores, usando o operador **new** criamos um novo objeto do tipo **RegExp()**.

```js
var regex = new RegExp("\\an");
console.log("ruan".match(regex));
//[ 'an', index: 2, input: 'ruan', groups: undefined ]
```

PS: Precisamos usar o escape para formar a regex normalmente dentro do construtor. Caso contrário o conteúdo dentro da mesma será interpretado de forma literal.

## Métodos do objeto RegExp()

### .test(string)

Basicamente faz um teste dentro da String passada retornando **true** caso o teste passe dentro da String e retornando **false** caso o teste falhe.

```js
/\d/.test("Ruan1234");

// true

/\d/.test("Ruan");

// false
```

### .exec(string)

Basicamente enquanto ouver **matchs** o mesmo irá executar até que o resultado seja null.

```js
(function() {
  "use strict";

  var regex = /\d/g;
  var name = "Ruan1234";
  var result;

  while ((result = regex.exec(name) != null)) {
    console.log(result);
  }
})();

/*
true
true
true
true
*/
```

# Caracteres especiais de RegExp em Strings.

Alguns caracteres especiais que podemos usar dentro de Strings:

- \t: Tab
- \n: Quebra de linha

Podemos também escapar aspas utilizando \\.

```js
// console.log('Joana D\'ark');
// Joana D'ark
```
