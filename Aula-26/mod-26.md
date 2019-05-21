# O que é DOM ? E como pecorrer os elementos da árvore.

### API DOM.

O **'Modelo de Objeto de Documento (DOM)'** é uma interface de programação para documentos HTML e XML. Ele provê uma representação estruturada do documento e define um meio pelo qual a estrutura pode ser acessada por programas permitindo-os alterar a estrutura do documento, estilo e conteúdo. O DOM provê uma representação do documento como um conjunto estruturado de **nós** e objetos que têm propriedades e métodos. Essencialmente ele conecta páginas de internet a scripts ou linguagens de programação.

![DOM API](https://www.w3schools.com/js/pic_htmltree.gif)

_Representação da API DOM._

PS: Com outras linguagem podemos também consultar a a API DOM.

Nesta imagem temos o elemento **\<html>** como o elemento **pai** do documento. Seguido dos elementos **\<head>** e **\<body>** que por sua vez são **filhos** do elemento pai. Dentro dos elementos podemos ter **atributos** como no elemento **\<a>** que tem como atributo **\<href>** e podemos também ter elementos que são **irmãos**, pois são filhos diretos de um elemento. Como neste caso o elemento **\<body>** tem como filhos os elementos **\<a>** e **\<h1>** estes que por sua vez são **irmãos**. Pois são filhos diretos de **\<body>** !

Agora como podemos pecorrer estes elementos ? Para isso temos algumas **propriedades** para nos ajudar !

## .parentNode

É uma propriedade DOM somente leitura que retorna o nó (node) parente de um Node referenciado na árvore DOM. No caso o pai.

Ex:

```html
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>DOM - API</title>
  </head>
  <body>
    <div class="main">
      <header class="main-header">
        <h1 class="main-header__title">Título da Página</h1>
      </header>

      <section class="main-content">
        Texto 1
        <div class="entry">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            molestiae. Error consectetur quae delectus quod doloribus asperiores
            nobis. Iure nobis assumenda nemo reprehenderit labore voluptatibus
            illum vero illo deserunt obcaecati.
          </p>
        </div>
        Texto 2
      </section>

      <footer class="main-footer">
        <small class="main-footer__copyright">
          2018 &copy; Todos os direitos reservados.
        </small>
      </footer>
    </div>

    <script src="js/main.js"></script>
  </body>
</html>
```

E o nosso arquivo JS ficará dessa forma.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.parentNode); // Body
})(document);
```

PS: _A forma que estamos selecionando o elemento via Javascript é apenas para exemplificar, pois sempre iremos usar o atributo **data-js** para fazer a manipulação dos elementos._

Neste exemplo é retornado o nó (elemento pai) do elemento que estamos pecorrendo nesse caso o _.main._

## .childNodes

É uma coleção ordenada de objetos node que **são filhos do elemento corrente**. Se o elemento não tem filhos, então a nodeList não contém nenhum nó.

A nodeList é uma variável que armazena a lista de nós de **childNodes**. O tipo dessa lista é **NodeList**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.childNodes);
})(document);

// NodeList(7) [ #text, header.main-header, #text, section.main-content, #text, footer.main-footer, #text]
```

Neste exemplo temos uma nodeList que mostra todos os filhos de **.main**. Porém precisamos nos atentar que quando usamos a propriedade _.childNodes_ ela retorna também **espaços em branco** e também **quebra de linha**.

Se tirarmos as quebras de linhas e os espaçamentos teriamos o header como primeiro elemento filho.

## .firstChild

É uma propriedade do tipo somente leitura que retorna o node (nó) do primeiro elemento filho de uma árvore DOM ou null no caso do elemento não ter filhos (children).

**node:** elemento node (nó pai) de referência para busca do seu primeiro filho (firstChild) considerada a estrutura DOM.

**childNode:** elemento node (nó filho) considerado como primeiro filho (firstChild) de node (pai).

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.firstChild);
})(document);

// #text
```

Como o nome diz retorna o primeiro filho do elemento .main. Vimos que é retornado um **#text**, devido ao espaços/quebras de linhas que contém no nosso documento. Porém se removemos esses espaçamentos é retornado o elemento **\<header class="main-header">** como primeiro filho de main.

## .lastChild

É uma propriedade do tipo somente leitura (read-only) que retorna **o último elemento filho** (node) de uma estrutura DOM. Se seu parentNode for um Element, ele retornará um Element node, um text node, ou um comment node. Retornará null se o elemento de referência não tiver elementos filhos child.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.lastChild);
})(document);

// #text
```

Assim como os demais se tivessimos removido os espaçamentos entre os elementos teriamos como o ultimo filho no caso **\<footer class="main-footer">**.

PS: Precisamos sempre contar os espaçamentos quando formos utilizar as propriedades da API DOM.

## .nextSibling

Retorna o nó seguinte ao especificado dentro do lista de filhos do seu pai(childNodes), ou null se o nó especificado for o último nó da lista.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.nextSibling);
})(document);

//#text
```

É me retornado o irmão de main. Como temos espaçamentos e quebras de linha se removemos isso teremos a tag **\<script>** como irmão direto de main.

## .previousSibling

Retorna o nó que precede o nó especificado na lista de childNodes do nó pai, retorna null se o nó especificado é o primeiro desta lista. Caso contrário retorna o anterior.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.previousSibling);
})(document);
// #text
```

É retornado um **#text** por conta dos espaçamentos e agora se removemos os espaçamentos é retornado **null**.

## .nodeType.

A propriedade somente leitura do **Node.nodeType** é um número inteiro que identifica o que é o nó. Distingue diferentes tipos de nós, do outro, como elementos, texto e comentários.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.nodeType); // 1
})(document);
```

Basicamente cada elemento representa um valor numérico que o identifica dentro do DOM. Alguns valores para cada elemento são:

- Document = 9
- Element = 1
- Text = 3
- Comments = 8
- DocumentFragment = 22

PS: Raramente iremos usar dessa forma pois não iremos decorar cada número o qual identifica cada elemento, usaremos variáveis para facilitar o entendimento do nosso código.

## .nodeValue.

Basicamente representa o conteúdo textual de **Text** e **Comment**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main-content');

  console.log($main.firstChild.nodeValue); // Texto 1
})(document);
```

## .nodeName

A propriedade **.nodeName** mostra o nome do no atual.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main-content');

  console.log($main.nodeName); // SECTION
  console.log($main.firstChild.nodeName); // #text
  console.log($main.firstChild.nextSibling.nodeName); // #comment
})(document);
```

## .children ( Não padronizada )

**.children** retorna uma coleção de elementos filho do elemento determinado.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.childNodes); // NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]

  console.log($main.children); // HTMLCollection(3) [header.main-header, section.main-content, footer.main-footer]
})(document);
```

PS: Similar ao _childNodes_ a propriedade _children_ retorna somente os nos que são elementos _html_ no caso uma **HTMLCollection** em quanto o _childNodes_ retorna uma **nodeList**.

## .firstElementChild

Assim como a propriedade _firstChild_ a propriedade _firstElementChild_ retorna o primeiro no que é um elemento **HTML**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main-content');

  console.log($main.firstChild.nextSibling); // <!-- Comentário -->
  console.log($main.firstElementChild); // <div class="entry">..</div>
})(document);
```

E neste exemplo a usando a propriedade _firstElementChild_ o Javascript pula os demais nos e trás somente o no correspondente ao um elemento **HTML**.

## .lastElementChild

Basicamente funciona da mesma forma que o _firstElementChild_ porém retornando o último elemento **HTML**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.lastChild); // #text
  console.log($main.lastElementChild); // <footer class="main-footer">..</footer>
})(document);
```

## .nextElementSibling

Basicamente assim como a propriedade _nextSibling_ ela devolve o irmão direto do no do elemento **HTML**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.firstChild.nextSibling); // <header class="main-header">..</header>
  console.log($main.firstElementChild.nextElementSibling); // <section class="main-content">..</section>
})(document);
```

## .previousElementSibling

A propriedade _previousElementSibling_ retorna o elemento anterior do elemento especificado, no mesmo nível de árvore.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main-content');

  console.log($main.lastChild.previousSibling); // <div class="entry">..</div>
  console.log($main.previousElementSibling); // <header class="main-header">..</header>
})(document);
```

A diferença entre essa propriedade e _previousSibling_, é aquele _previousSibling_ retorna o nó **irmão anterior como um nó de elemento, um nó de texto ou um nó de comentário**, enquanto _previousElementSibling_ retorna **o nó irmão anterior como um nó de elemento (ignora o texto e nós de comentário)**.

## childElementCount

Basicamente a propriedade conta quantos elementos HTML estão presentes.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.childElementCount); // 3
})(document);
```

Podemos fazer o mesmo usando a propriedade _children.length_ :smile:

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.children.length); // 3
})(document);
```

O mesmo retorno mostrando quantos elementos contêm dentro de um no.

# Métodos ( Para a manipulação do DOM )

## .hasAttribute(name)
