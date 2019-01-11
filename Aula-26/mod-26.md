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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae. Error consectetur quae delectus quod doloribus asperiores nobis. Iure nobis assumenda nemo reprehenderit labore voluptatibus illum vero illo deserunt obcaecati.
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

```js
(function(doc) {
  'use strict';

  var $main = doc.querySelector('.main');
  console.log($main.parentNode); // Body
})(document);
```

PS: _A forma que estamos selecionando o elemento via Javascript é apenas para exemplificar, pois sempre iremos usar o atributo **data-js** para fazer a manipulação dos elementos._

Neste exemplo é retornado o nó (elemento pai) do elemento que estamos pecorrendo nesse caso o .main.

## .childNodes

É uma coleção ordenada de objetos node que são filhos do elemento corrente. Se o elemento não tem filhos, então listaNos não contém nenhum nó.

A listaNos é uma variável que armazena a lista de nós de childNodes. O tipo dessa lista é NodeList.

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

É uma propriedade do tipo somente leitura (read-only) que retorna o último elemento filho (node) de uma estrutura DOM. Se seu parentNode for um Element, ele retornará um Element node, um text node, ou um comment node. Retornará null se o elemento de referência não tiver elementos filhos child.

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