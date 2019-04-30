# Continuação sobre Regex I.

O que vimos na aula passada ?

### Listas [].

Um conjunto de caracteres que corresponde a **qualquer um dos caracteres cercados**. Você pode especificar uma **extensão de caracteres usando um hífen**.

Ex:

```js
var text =
  'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

console.log(text.match(/[ab]/gi));
/* 
[ 'a',
  'a',
  'a',
  'A',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'b',
  'a',
  'a',
  'a',
  'b',
  'a' ]
*/
```

### Grupo ().

Corresponde ao **item capturado** e **memoriza a correspondência**. Esses são chamados **parênteses de captura**.

Ex:

```js
console.log(text.match(/(1875)/g));
// ['1875']
```

### \w.

Corresponde a **qualquer caractere alfanumérico do alfabeto**, incluindo o **underline**.

Ex:

```js
// /[A-Za-z0-9_]/;
```

### \d.

Corresponde a um caractere de dígito no alfabeto.

Ex:

```js
// /[0-9]/;
console.log(text.match(/\d/g));
// [ '1', '3', '1', '8', '0', '4', '1', '8', '1', '8', '7', '5' ]
```

E agora vamos ver alguns novos.

### \s

Corresponde um único caractere de espaço em branco, incluindo espaço, **tabulação** (tab), **quebra de página**, **nova linha** (LF) e outros espaços **Unicode**.

Ex:

```js
'Um texto  com espaço '.match(/\s/g);
// [ ' ', ' ', ' ', ' ', ' ' ]
```

Assim me retornando todos os espaços que contém no texto.

### \n.

Representa a **quebra de linha** ( nova linha ).

> \n

### . (ponto)

Representa **qualquer caractere** ( exceto quebra de linha ).

> .

# Continuação sobre Regex II.

## Negação.

### [^abc].

O match deve ser feito com qualquer item, **menos** com os da **lista** por exemplo: a,b,c.

PS: Precisamos usar **^** sempre dentro da lista [].

### \W.

Qualquer caractere menos os alfanumérico.

### \D.

Qualquer caractere menos os digitos (números).

### \S

Qualquer caractere menos espaços em branco.

## Repetidores.

Basicamente o item anterior que vem antes desse intervalo vai se repetir no minimo **n** vezes e no máximo **m** vezes.

> {n,m}
> **intervalo** - item anterior ao menos **n** vezes, e no **máximo m** vezes.

> \d{2, 4}

Neste exemplo passamos para a regex que queremos que no minimo tenha 2 digitos e no máximo 4 digitos.

# Continuação sobre Regex III.

### Intervalo aberto de repetidores

**{n,} intervalo aberto** - item anterior **n** ou mais vezes.

### Intervalo

**{n}** item anterior exatamente **n** vezes.

### ?. Opcional.

Opcional - **zero ou uma ocorrência do item anterior**.

> \s\d?

PS: Neste exemplo sobre o caractere **\\s** estamos pedindo que ele faça uma match com um espaço + um digito ou qualquer outro caractere, pois é opcional.

### +

**Uma ou mais ocorrência do item anterior**.

> s+

Neste exemplo queremos uma ou mais ocorrências que contenham a letra s.

### \*

Zero ou mais ocorrências do item anterior.

> \w\*

Retorna qualquer palavra seguido de qualquer caractere alfanumérico.

## Alguns exemplos de uso.

### Validação de uma url.

Ex:

```js
var url =
  'http://www.google.com.br https://meusite.org, hstps//site.site, hts//outro.site';

console.log(url.match(/https?:\/\/\w+\w[.\w]+/g));

//[ 'http://www.google.com.br', 'https://meusite.org' ]
```

Este exemplo usamos a regex para validar algumas urls.

Queremos qualquer caractere que começe com **http** seguido **s** de forma opcional. Seguida de **:** e **//** que dentro da regex precisamos escapar usando a **\\**.

Após isso dizemos que queremos qualquer caractere uma ou **+** mais ocorrências do caractere anterior.

E passamos dentro de uma lista que queremos que também contenham um **.** (ponto) seguido de qualquer caractere uma ou mais ocorrência do caractere anterior.

E por fim usamos a flag **g** global, para trazer todas as ocorrências dentro da String de URLS.

### Validação de um e-mail.

Temos um novo exemplo, agora para validação de um e-mail.

Ex:

```js
var emails =
  'ruan@email.com jose@hotmail.com, maria+arroz@gmail.com.br maria+arroz@gmail.com.br.lu.a';

console.log(emails.match(/[\w+]+@\w+\.\w+.?([\w]{2})?/g));

/*
[ 'ruan@email.com jo',
  'se@hotmail.com ma',
  'ria+arroz@gmail.com.br',
  'maria2+arroz@gmail.com.br' ]
*/
```

### QueryString

Imagine que precisamos pegar uma queryString da nossa url.

Ex:

> ?s=lala&b=bebe&c=cce

```js
var queryString = '?s=lala&b=bebe&c=cce';

console.log(queryString.match(/[?&](\w+)=(\w+)/g));
//[ '?s=lala', '&b=bebe', '&c=cce' ]
```

Se precisarmos verificar o conteúdo retornado por essa regex ? Poderiamos usar o método .replace().

Ex:

```js
console.log(
  queryString.replace(/[?&](\w+)=(\w+)/g, function(regex, key, valeu) {
    console.log(key, value);
  })
);
/*
s lala
b bebe
c cce
undefinedundefinedundefined
*/
```

### Links

- [Regex - MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

- [Desvendando a linguagem JavaScript - #10 - Expressões Regulares - Rodrigo Branas](https://www.youtube.com/watch?v=9r48XuOB4DA&list=PLQCmSnNFVYnT1-oeDOSBnt164802rkegc&index=10)
