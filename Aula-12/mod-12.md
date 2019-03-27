# Criação de objetos.

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis ou funções, que são chamadas de propriedades e métodos quando estão dentro de objetos).

Em javascript objetos são:

- Mutáveis.
- Manipulados por referência.

### Mutável.

**Mutável** é o tipo da variável que pode ser **alterada**. Em JavaScript, somente objetos e arrays são mutáveis, valores **primitivos não**.

Ex:

```js
var obj = { prop1: "1", prop2: "2" };
```

Com o objeto criado podemos muito bem modificar a sua propriedade.

Ex:

```js
obj.prop1 = "outro valor";
```

Agora a propriedade do objeto _prop1_ tem seu valor modificado.

Podemos também _deletar objetos_, usando o operador **delete**.

Ex:

```js
delete obj.prop1;
// true
```

### Manipulados por referência.

A cada vez que você cria um novo objeto, o JavaScript reserva um espaço para esse objeto na memória. Sim, alguns bytes da memória do seu computador são reservados para guardar as informações desse novo objeto criado.

Usar as chaves _{}_ é o mesmo que _new Object()_, só que mais rápido.

Então é que, sempre que você faz isso no seu código: _{}_; você está criando um novo objeto.

E a cada novo objeto criado, um **novo espaço na memória é ocupado**.

Ex:

```js
var obj = { prop1: "1", prop2: "2" };
var obj2 = { prop1: "1", prop2: "2" };

obj === obj2;

// false
```

Apesar dos dois objetos terem as **mesmas propriedades**, o mesmo **não são iguais**. Isso se dá o que foi dito a cima que quando usamos a anotação literal de objetos _{}_ estamos fazendo por debaixo dos panos a mesma coisa que _new Object()_. Por isso o resultado do exemplo acima deu **false**, porque são dois objetos diferentes! Cada um foi criado em um **espaço diferente da memória**!

O que acontece quando você cria um novo objeto e o atribui à uma variável ?

Ex:

```js
var objCopy = obj;

obj === objCopy;

// true
```

O que acontece nesse caso é que não estamos passando o valor do _obj_ para a váriavel _objCopy_, e sim estamos **referenciando** o seu **endereço de memória** ! Assim temos a váriavel **objCopy apontando para o mesmo endereço de memória de obj**.

E como objetos são mutáveis, significa que, mesmo após ter criado o objeto, você pode modificá-lo, adicionando ou removendo propriedades e métodos.

Ex:

```js
objCopy.prop3 = "3";

obj
{ prop1: '1', prop2: '2', prop3: '3' };
```

Por temos modificado o objCopy que apontava para o mesmo endereço de memória de obj, **o mesmo também foi alterado**.

### Criação de objetos.

- Literais.
- Como construtor(new).
- Com Object.create.

### Literais

É forma padrão que estamos usando até o momento, usando _{}_ para criar um novo objeto.

```js
var obj = {};
```

### Como construtores(new)

É a forma que vimos usando os **Wrapper Objects**. Que no final é basicamente a mesma coisa que usarmos o formato literal de criação de objeto.

```js
var obj = new Object();
```

### Object.create()

Objetos podem também ser criados usando-se o método **Object.create()**. Esse método pode ser muito útil, pois permite que você escolha o objeto **protótipo** para o objeto que você quer criar, sem a necessidade de se definir uma função construtora.

Todo o objeto tem como uma propriedade chamada **prototype** que ela é o **protótipo do objeto que está sendo** criado. Que herdam do seu próprio protótipo

# Criação de Objetos II - Object.create()

JavaScript é um pouco confuso para desenvolvedores com experiência em linguagens baseadas em classes (como Java ou C++), porque é dinâmico e não dispõe de uma implementação de class (através da palavra-chave reservada class e não pode ser usada com um nome de variável).

Quando se trata de herança, JavaScript tem somente **um construtor: objetos**. Cada objeto tem um **link interno** para um outro objeto chamado **prototype**. Esse objeto prototype também tem um atributo prototype, e assim por diante até que o null seja encontrado como em prototype. null 1 que, por definição, não tem prototype, e age como um link final nesta cadeia de protótipos **(prototype chain)**.

Ex:

```js
var obj = { prop1: "prop1", prop2: "prop2" };
var obj2 = Object.create(obj);
```

Neste exemplo criamos um objeto com algumas propriedades e logo a baixo criamos um outro objeto, porém usando o método _Object.create()_ que **herda de obj**, suas propriedades.

Porém, diferente do que vimos anteriomente os objetos criados **são diferentes**, **não compartilham o mesmo endereço de memória**. Sendo assim se formos modificar o obj2 passando alguma outra propriedade o obj ( objeto pai ) **não será** modificado !

Porém podemos modificar o objeto pai ( obj ) e isso irá refletir no objeto filho ( obj2 ).

Ex:

```js
obj.prop1 = 'prop modificada';
obj2.prop1; // 'prop modificada'
```
PS: Quando criamos um objeto usando o _Object.create()_ o mesmo herda do prototype.

### Object.hasOwnProperty().

Quando precisamos pecorrer um objeto usando o for in, temos um seguinte problema.

Ex:

```js
for (var prop in obj2) {
  console.log(prop);
}
// prop1
// prop2
```

Neste exemplo usamos o for in para pecorrer o _obj2_, porém o mesmo não tem propriedades próprias e sim, as herdadas de _obj_.

E aí é que entra o método **hasOwnProperty** que verifica se a propriedade passada é especifica ao objeto. Retornando _true_ ou _false_.

Ex:

```js
obj.hasOwnProperty("prop1");
// true
```

```js
for (var prop in obj2) {
  if (obj2.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// x
```

PS: O método **hasOwnProperty** verifica apenas por propriedades especificas e **não propriedades herdadas**.

# Métodos De Objetos.

### Object.keys(obj)

Object.keys() **retorna um array** cujo os elementos são strings correspondentes para a propriedade enumerável encontrada no objeto. A ordenação das propriedades é a mesma que a dada pelo loop sobre as propriedades do objeto manualmente.

Ex:

```js
Object.keys(obj);

['prop1', 'prop2'];
```

### obj.isPrototypeOf(obj)

O método isPrototypeOf() checa **se um objeto existe em na cadeia de protótipos de um outro objeto**.

```js
obj.isPrototypeOf(obj2);
// true
```

### JSON.stringify()

O método JSON.stringify() **converte valores em javascript para uma String JSON**. Esses valores podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades específicas, quando o array do replacer for especificado.

Ex:

```js
JSON.stringify(obj);

// '{"prop1":"prop1","prop2":"prop2"}'
```

PS: Podemos voltar o objeto que convertemos para String em objeto novamente, usando o **JSON.parse(obj)**.

Temos também o método **JSON.parse() que converte uma string para JSON**, opcionalmente transformando o valor produzido por conversão.

Ex:

```js
JSON.parse('{}'); // {}
JSON.parse('true'); // true
JSON.parse('"foo"'); // "foo"
JSON.parse('[1, 5, "false"]'); // [1, 5, "false"]
JSON.parse('null'); // null
```

# Métodos de Array.

### Push() - Modifica o Array.

Adiciona um item ao final do array, retornando o tamanho atual do array.

Ex:

```js
var arr = [1, 2, 3, 4, 5];
arr.push(6);

// [1, 2, 3, 4, 5, 6]
```

Podemos também remover items do array usando o método _pop()_

### Pop() - Modifica o Array.

Remove o último item do array, retornando o valor removido.

```js
arr.pop();
// 6
```

# Métodos de Array II.

### Join() - Não modifica o Array.

O método _join()_ junta todos os elementos de uma array (ou um array-like object) em uma string e retorna esta string.

Sintaxe:

> arr.join([separador = ','])

Separador:

Específica uma string para separar cada elemento adjacente do array. O separador é convertido em uma string se necessário. Se omitido, os elementos do array são separados com uma vírgula (","). Se o separador for uma string vazia, todos os elementos são juntados sem nenhum caracter entre eles.

Ex:

```js
arr.join("-");

// '1-2-3-4-5-6'
```

### Reverse() - Modifica o Array.

O método _reverse()_ inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.

Ex:

```js
arr.reverse();

// [6, 5, 4, 3, 2, 1]
```

### Sort() - Modifica o Array.

O método _sort()_ ordena os elementos do próprio array e retorna o array. A ordenação não é necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.

```js
arr.sort();

// [1, 2, 3, 4, 5, 6]
```

### Links para saber mais

#### MDN

- [Object](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Herança e cadeia de protótipos](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [O básico sobre objetos JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico)
- [Introdução a objetos em Javascript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos)
- [Object.keys()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [JSON.parse()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
- [Array](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

#### Da2k

- [Objetos - Referências de valores em JavaScript](https://blog.da2k.com.br/2017/01/25/objetos-referencias-de-valores-em-javascript/)

#### TreinaWeb
- [JavaScript: Métodos De Arrays Que Você Precisa Conhecer](https://www.treinaweb.com.br/blog/javascript-metodos-de-arrays-que-voce-precisa-conhecer/)

#### Issues Do Curso
- [Criar objetos com conteúdo igual mas com referência diferente #1075](https://github.com/da2k/curso-javascript-ninja/issues/1075)
- [Wrapper Objects #882](https://github.com/da2k/curso-javascript-ninja/issues/882)

#### Youtube - Lives Fernando Daciuk.

- [JavaScript: métodos de array - Fernando Daciuk](https://www.youtube.com/watch?v=GDZswgpSYQg)
- [JavaScript: métodos de array (parte 2) - Fernando Daciuk](https://www.youtube.com/watch?v=Dy1VDtPxCp0)