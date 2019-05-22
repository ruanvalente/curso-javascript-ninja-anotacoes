# O que é DOM ? E como pecorrer os elementos da árvore.

### API DOM.

O **'Modelo de Objeto de Documento (DOM)'** é uma interface de programação para documentos HTML e XML. Ele provê uma representação estruturada do documento e define um meio pelo qual a estrutura pode ser acessada por programas permitindo-os alterar a estrutura do documento, estilo e conteúdo. O DOM provê uma representação do documento como um conjunto estruturado de **nós** e objetos que têm propriedades e métodos. Essencialmente ele conecta páginas de internet a scripts ou linguagens de programação.

![DOM API](https://www.w3schools.com/js/pic_htmltree.gif)

> Representação da API DOM

PS: Com outras linguagem podemos também consultar a a API DOM.

Nesta imagem temos o elemento **\<html>** como o elemento **pai** do documento. Seguido dos elementos **\<head>** e **\<body>** que por sua vez são **filhos** do elemento pai. Dentro dos elementos podemos ter **atributos** como no elemento **\<a>** que tem como atributo **\<href>** e podemos também ter elementos que são **irmãos**, pois são filhos diretos de um elemento. Como neste caso o elemento **\<body>** tem como filhos os elementos **\<a>** e **\<h1>** estes que por sua vez são **irmãos**. Pois são filhos diretos de **\<body>** !

Agora como podemos pecorrer estes elementos ? Para isso temos algumas **propriedades** para nos ajudar !

## .parentNode

É uma propriedade DOM somente leitura que **retorna o nó** (node) parente de um Node referenciado na árvore DOM. No caso o pai.

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

Neste exemplo temos uma **nodeList** que mostra todos os filhos de **.main**. Porém precisamos nos atentar que quando usamos a propriedade _.childNodes_ ela retorna também **espaços em branco** e também **quebra de linha**.

Se tirarmos as **quebras de linhas** e os **espaçamentos** teriamos o **header** como primeiro elemento filho.

## .firstChild

É uma propriedade do tipo somente leitura que retorna o node (nó) do **primeiro elemento filho de uma árvore DOM** ou null no caso do elemento não ter filhos (children).

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.firstChild);
})(document); // #text
```

Como o nome diz retorna o primeiro filho do elemento .main. Vimos que é retornado um **#text**, devido ao espaços/quebras de linhas que contém no nosso documento. Porém se removemos esses espaçamentos é retornado o elemento **\<header class="main-header">** como primeiro filho de main.

## .lastChild

É uma propriedade do tipo somente leitura (read-only) que retorna **o último elemento filho** (node) de uma estrutura DOM. Se seu parentNode for **um Element, ele retornará um Element node, um text node, ou um comment node**. Retornará null se o elemento de referência não tiver elementos filhos child.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.lastChild);
})(document); // #text
```

Assim como os demais se tivessimos removido os espaçamentos entre os elementos teriamos como o ultimo filho no caso **\<footer class="main-footer">**.

PS: Precisamos sempre contar os espaçamentos quando formos utilizar as propriedades da API DOM.

## .nextSibling

Retorna o nó **seguinte ao especificado** dentro do lista de filhos do seu pai(childNodes), ou null se o nó especificado for o último nó da lista.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.nextSibling);
})(document); //#text
```

É me retornado o irmão de main. Como temos espaçamentos e quebras de linha se removemos isso teremos a tag **\<script>** como irmão direto de main.

## .previousSibling

Retorna o nó que **precede o nó especificado** na lista de childNodes do nó pai, retorna null se o nó especificado é o primeiro desta lista. Caso contrário **retorna o anterior**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.previousSibling);
})(document); // #text
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
- DocumentFragment = 11

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

A propriedade **.nodeName** mostra o nome do nó atual.

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

**.children** retorna uma **coleção de elementos filho** do elemento determinado.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.childNodes); // NodeList(7) [text, header.main-header, text, section.main-content, text, footer.main-footer, text]

  console.log($main.children); // HTMLCollection(3) [header.main-header, section.main-content, footer.main-footer]
})(document);
```

PS: Similar ao _childNodes_ a propriedade _children_ retorna somente os nó que são elementos _html_ no caso uma **HTMLCollection** em quanto o _childNodes_ retorna uma **nodeList**.

## .firstElementChild

Assim como a propriedade _firstChild_ a propriedade _firstElementChild_ retorna o primeiro nó que é um elemento **HTML**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main-content');

  console.log($main.firstChild.nextSibling); // <!-- Comentário -->
  console.log($main.firstElementChild); // <div class="entry">..</div>
})(document);
```

E neste exemplo a usando a propriedade _firstElementChild_ o Javascript pula os demais nó atrás somente do nó correspondente ao elemento **HTML**.

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

Basicamente assim como a propriedade _nextSibling_ ela devolve o irmão direto do nó do elemento **HTML**.

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

A propriedade _previousElementSibling_ **retorna o elemento anterior do elemento especificado**, no mesmo nível de árvore.

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

## .childElementCount

Basicamente a propriedade **conta quantos elementos HTML estão presentes**.

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

O mesmo retorno mostrando quantos elementos contêm dentro de um nó.

# Métodos ( Para a manipulação do DOM )

## .hasAttribute(name)

O método _Element.hasAttribute()_ retorna um valor booleano indicando se o elemento especificado tem o atributo especificado ou não.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');

  console.log($main.hasAttribute('class')); // true
  console.log($main.hasAttribute('data-js')); // false
})(document);
```

## .hasAttributes()

O método _hasAttributes()_ da interface do elemento retorna um Boolean indicando se o **elemento atual tem quaisquer atributos ou não**.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main-content');

  console.log($main.firstElementChild.firstElementChild.hasAttributes()); // false

  console.log($main.firstElementChild.hasAttributes()); // true
})(document);
```

## .appendChild(child)

Adiciona um nó ao final da lista de filhos de um nó pai especificado. **Se o nó já existir no documento, ele é removido de seu nó pai atual** antes de ser adicionado ao novo pai.

Ex:

```js
(function(doc) {
  'use strict';

  var $mainContent = doc.querySelector('.main-content');
  var $mainHeader = doc.querySelector('.main-header');

  $mainContent.appendChild($mainHeader);
})(document);
```

Neste exemplo estamos selecionando _\$mainContent_ e _\$mainHeader_. Após está seleção dos elementos adicionamos o _\$mainHeader_ dentro de _\$mainContent_, assim basicamente removemos todo o conteúdo contido dentro de _\$mainHeader_ para dentro de _\$mainContent_. Isso com elementos já existentes.

## .insertBefore(node, beforeWhom)

O método _insertBefore()_ insere um nó como uma child, antes de uma child existente que você especificar.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var $mainContent = doc.querySelector('.main-content');
  var $mainHeader = doc.querySelector('.main-header');
  var $firstText = $mainContent.firstChild;
  $mainContent.appendChild($mainHeader);
  $mainContent.inserBefore($mainHeader, $firstText);
})(document);
```

Com este exemplo adicionamos a _\$mainHeader_ antes do conteúdo contido dentro da variável _\$firstText_.

## .cloneNode(boolean)

O método _cloneNode()_ **cria uma cópia de um nó** e retorna o clone.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var $mainContent = doc.querySelector('.main-content');
  var $mainHeader = doc.querySelector('.main-header');
  var $firstText = $mainContent.firstChild;
  var $cloneMainHeader = $mainHeader.cloneNode(true);

  $mainContent.appendChild($cloneMainHeader);
  console.log(doc.querySelectorAll('.main-header').length); // 2
})(document);
```

O método _cloneNode()_ clona todos os atributos e seus valores.

PS: Se for passado **false** como parâmetro para o método _cloneNode_, no momento da clonagem do elemento o mesmo virá sem nenhuma propriedade. Utilizando o parâmetro **true**, isto já é o inverso. Pois irá acontecer a clonagem com cada propriedade e conteúdo do elemento.

## .hasChildNodes()

O método _hasChildNodes()_ retorna **true** se o nó especificado tiver quaisquer nós filho, caso contrário, **false**.

Ex:

```js
(function(doc) {
  'use strict';
  var $main = doc.querySelector('.main');
  var $mainHeader = doc.querySelector('.main-header');
  var $h1 = $mainHeader.firstElementChild;
  console.log($h1.hasChildNodes()); // true
})(document);
```

Neste caso já que temos um nó de texto que é o conteúdo contido dentro da variável _\$h1_, se esse conteúdo de texto não estivesse presente o mesmo iria retorna **false**.

## .removeChild(child)

O método _removeChild()_ remove um nó filho especificado do elemento passado.

Ex:

```js
(function(doc) {
  'use strict';
  var $main = doc.querySelector('.main');
  var $mainHeader = doc.querySelector('.main-header');
  var $h1 = $mainHeader.firstElementChild;
  $mainHeader.removeChild($h1);
})(document);
```

Neste exemplo removemos o nó filho de _\$mainHeader_, e quando nosso página é carregada o mesmo já não está dentro do DOM.

PS: Retorna o nó removido como um objeto de nó, ou null se o nó não existe.

## .replaceChild(new, old)

O método _replaceChild()_ substitui um nó filho com um novo nó.
O novo nó pode ser um nó existente no documento, ou você pode criar um novo nó.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var $mainHeader = doc.querySelector('.main-header');
  var $cloneMainHeader = $mainHeader.cloneNode(true);
  var $mainFooter = doc.querySelector('.main-footer');

  $main.replaceChild($cloneMainHeader, $mainFooter);
})(document);
```

Neste exemplo temos um clone de _\$mainHeader_, e com esse clone fazemos o replace no lugar de _\$mainFooter_. Assim temos dois _\$mainHeader_ dentro da nossa página.

## document.createTextNode(text)

O método _createTextNode()_ cria um nó de texto com o texto especificado.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var newMyText = doc.createTextNode('Curso JS Ninja');
  $main.appendChild(newMyText); // Curso JS Ninja
})(document);
```

Usando o método _createTextNode()_ criamos um nó de texto dentro da nossa página e adicionamos ela ao final, usando o método _appendChild()_.

## document.createElement(tagName)

O método _document.createElement()_ cria um nó de elemento com o nome especificado.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  var $newP = doc.createElement('p');
  var newMyText = doc.createTextNode('Curso JS Ninja');

  $newP.appendChild(newMyText);
  $main.appendChild($newP); // <p>Curso JS Ninja</p>
})(document);
```

Neste exemplo pegamos o nó de texto do exemplo anterior e agora criamos uma tag \<p> e adicionamos o conteúdo do nó de texto dentro da tag. E por fim adicionamos ela ao final da página usando o _appendChild_. Assim criamos um elemento simples como exemplo.

# Atributos

Basicamente podemos manipular os atributos dentro do DOM usando os atributos padrão dentro do HTML.

## element(.)id

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.className); // main
  console.log(($main.id = 'meu-id')); // meu-id
})(document);
```

Usando a propriedade _className_ podemos ter como retorno qualquer propriedade HTML.

Quando não passamos uma propriedade que não existe não é retornado nada, porém essas propriedade se comportam como **getters** e **setters**. Como no exemplo a cima não temos o id _'meu-id'_, criamos isso dinamicamente através de um setters.

Porém temos outra forma que podemos pegar os nossos atributos.

## .getAttribute(attr)

_getAttribute()_ retorna o valor de um argumento específico do elemento. Se o atributo não existir, o valor retornado será null ou "" (string vazia).

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.getAttribute('class')); // main
})(document);
```

PS: O retorno do getAttribute sempre será uma **String**.

## setAttribute(attr, value)

O método _setAttribute()_ adiciona o atributo especificado para um elemento e atribui o valor especificado.

Se o atributo especificado já existir, somente o valor é conjunto/alterado.

Ex:

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.setAttribute('class', 'data-js')); // data-js
})(document);
```

Dessa forma alteramos o atributo de main, alteramos a **class="main"** para **data-js**, usando o método _setAttribute_.

### Links:

- [w3schools - DOM](https://www.w3schools.com/jsref/dom_obj_all.asp)

- [Web API - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API)
