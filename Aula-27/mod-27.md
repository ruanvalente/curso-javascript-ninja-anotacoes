# Revisão API DOM.

O **'Modelo de Objeto de Documento (DOM)'** é uma interface de programação para documentos HTML e XML. Ele provê uma representação estruturada do documento e define um meio pelo qual a estrutura pode ser acessada por programas permitindo-os alterar a estrutura do documento, estilo e conteúdo. O DOM provê uma representação do documento como um conjunto estruturado de **nós** e objetos que têm propriedades e métodos. Essencialmente ele conecta páginas de internet a scripts ou linguagens de programação.

![DOM API](https://www.w3schools.com/js/pic_htmltree.gif)

> Representação da API DOM

Cada elemento da árvore do DOM pode ser um nó de: texto, comentário, documento etc.

E quando manipulamos esses nós temos uma _nodeList_ e quando temos um grupo de elementos HTML temos uma _HTMLCollection_.

Assim temos como um retorno desses elementos um Array-like onde podemos verificar o _length_ por exemplo porém, esses elementos não são considerados como arrays de verdade.

## DOM - Propriedades.

### Que incluem nós de texto e comentários:

- .**childNodes**:
  - A propriedade _childNodes_ retorna uma coleção de nós de um nó filho, como um objeto de NodeList.
- .**firstChild**:
  - A propriedade _firstChild_ retorna o primeiro nó filho do nó especificado, como um objeto do nó.
- .**lastChild**:
  - A propriedade _lastChild_ retorna o último nó filho do nó especificado, como um objeto do nó.
- .**nextSibling**:
  - A propriedade nextSibling retorna o nó imediatamente após o nó especificado, no mesmo nível de árvore.
- .**previousSibling**:
  - A propriedade previousSibling retorna o nó anterior do nó especificado, no mesmo nível de árvore.
- .**nodeName**:
  - A propriedade _nodeName_ retorna o nome do nó especificado.
- .**nodeType**:
  - O nodeType propriedade retorna o tipo de nó, como um número, de nó especificado.
- .**nodeValue**:
  - A propriedade _nodeValue_ define ou retorna o valor do nó do nó especificado.

### Somente Elementos:

- .**children** (Não padronizada):
  - O _children_ propriedade retorna uma coleção de elementos filho de um elemento, como um objeto _HTMLCollection_.
- .**paranteNode**:
  - A propriedade _parentNode_ retorna o nó pai do nó especificado, como um objeto do nó.
- .**firstElementChild**:
  - A propriedade _firstElementChild_ retorna o primeiro elemento filho do elemento especificado.
- .**lastElementChild**:
  - A propriedade _lastElementChild_ retorna o último elemento filho do elemento especificado.
- .**nextElementSibling**:
  - A propriedade _nextElementSibling_ retorna o elemento imediatamente após o elemento especificado, no mesmo nível de árvore.
- .**previousElementSibling**:
  - A propriedade _previousElementSibling_ retorna o elemento anterior do elemento especificado, no mesmo nível de árvore.
- .**childElementCount** = children.length:
  - A propriedade _childElementCount_ retorna o número de elementos filho que tem um elemento.

### DOM - Métodos:

- .**hasAttribute(attr)**:
  - O método _hasAttribute()_ retorna true se o atributo especificado existe, caso contrário retorna false.
- .**hasAttributes()**:
  - O método _hasAttributes()_ retorna true se o nó especificado tem todos os atributos, caso contrário, false.
- .**appendChild(child)**:
  - O método _appendChild()_ acrescenta um nó como o último filho de um nó.
- .**insertBefore(node, beforeWhom)**:
  - O método _insertBefore()_ insere um nó como uma criança, antes de uma criança existente que você especificar.
- .**cloneNode(cloneChildren? (boolean))**:
  - O método _cloneNode()_ cria uma cópia de um nó e retorna o clone.
- .**hasChildNodes()**:
  - O método _hasChildNodes()_ retorna true se o nó especificado tiver quaisquer nós filho, caso contrário, false.
- .**removeChild()**:
  - O método _removeChild()_ remove um nó filho especificado do elemento especificado.
- .**replaceChild(new, old)**:
  - O método _replaceChild()_ substitui um nó filho com um novo nó.

### Métodos de Document:

- .**document.createTextNode(text)**:
  - O método _createTextNode()_ cria um nó de texto com o texto especificado.
- .**document.createElement(tagName)**:
  - O método _createElement()_ cria um nó de elemento com o nome especificado.

### DOM - Atributos HTML válidos.

- **element.id**:
  - Recupera o id do elemento.
- **element.className**:
  - Recupera a classe do elemento.
- **element.value**:
  - Recupera o valor do elemento.
- **element.href (para links)**:
  - Recupera o valor do href.
- **element.title**:
  - Recupera o título.
- **element.src**:
  - Recupera o src.

E podemos usar outra anotação para conseguir qualquer atributo HTML.

- **.getAttribute(attr)**:
  - Retorna o atributo passado por uma String como parâmetro do método.
- **.setAttribute(attr, value)**:
  - Altera o valor do atributo passado por parâmetro como String onde informamos o atributo e o novo valor do mesmo.

# DOM - Manipular com performance.

### document.createDocumentFragment():

O método _createDocumentFragment()_ cria um objeto imaginário de nó, com todas as propriedades e métodos do objeto de nó.

O método _createDocumentFragment()_ é útil quando você deseja extrair partes do seu documento, alterar, adicionar, ou excluir, parte do conteúdo e inseri-lo de volta ao seu documento.

Você também pode usar o objeto de documento para realizar essas mudanças, mas para evitar destruir a estrutura do documento, pode ser mais seguro extrair somente partes do documento, faça as alterações e inserir a parte volta para o documento.

PS: O _document.createDocumentFragment()_ não tem a propriedade _.parentNode_. Pois já que estamos criando um documento em branco, o mesmo aponta para **null** neste caso.

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

enquanto o Javascript.

Ex:

```js
(function(doc) {
  'use stritct';
  var fragment = doc.createDocumentFragment();
  var childP = doc.createElement('p');
  var textChildP = doc.createTextNode('Texto da tag p');

  childP.appendChild(textChildP);
  fragment.appendChild(childP);

  doc.body.appendChild(fragment);
})(document);
```
