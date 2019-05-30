# DOM - innerHTML

A propriedade _innerHTML_ define ou retorna o conteúdo HTML (HTML interno) de um elemento.

E vamos supor que queremos pegar o conteúdo dessa div usando a propriedade _innerHTML_.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mod-31</title>
  </head>

  <body>
    <div class="main" data-js="main">
      <h1>Título</h1>
      <p>Parágrafo</p>
    </div>
    <script src="main.js"></script>
  </body>
</html>
```

```js
(function() {
  'use strict';
  var $div = document.querySelector('[data-js="main"]');
  console.log($div.innerHTML);
  /*
    <h1>Título</h1>
    <p>Parágrafo</p>
  */
})();
```

Temos uma _String_ como retorno com o conteúdo do nosso elemento selecionado.

Dessa forma estamos usando a propriedade _innerHTML_ como _getter_ mas também podemos usa-lo como um _setter_.

Ex:

```js
(function() {
  'use strict';
  $div.innerHTML = '<h1>Novo conteúdo</h1>';
})();
```

Dessa forma estamos substituindo todo o conteúdo contido dentro da nossa div pelo valor que estamos passando.

Poderiamos fazer da forma que estamos acostumados, que é criar um elemento, adicionar o seu conteúdo de texto e adicionar a nossa página esse novo elemento criado.

Ex:

```js
(function() {
  'use strict';
  var $div = document.querySelector('[data-js="main"]');
  var $h2 = document.createElement('h2');

  $div.innerHTML = '<h1>Novo conteúdo</h1>';
  $h2.textContent = 'Título do h2';
  $div.appendChild($h2);
})();
```

Dessa forma estamos fazendo algo similar porém usando a criação, inserção de conteúdo e a adição do elemento na nossa página.

# DOM - innerHTML - Problemas de Segurança.

Vamos imaginar que estamos esperando a entrada de dados de um usuário via formulário.

Ex:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mod-31</title>
    <style>
      textarea {
        display: block;
        margin-bottom: 10px;
      }
      form,
      div {
        margin: 0;
        float: left;
        width: 50%;
      }
    </style>
  </head>

  <body>
    <form action="/" method="GET" data-js="form">
      <textarea rows="10" cols="30" data-js="textarea"></textarea>
      <button type="submit" data-js="button">Enviar</button>
    </form>

    <div class="main" data-js="main"></div>
    <script src="src/main.js"></script>
  </body>
</html>
```

Ex:

```js
(function() {
  'use strict';
  var $div = document.querySelector('[data-js="main"]');
  var $textarea = document.querySelector('[data-js="textarea"]');
  var $form = document.querySelector('[data-js="form"]');

  $form.addEventListener(
    'submit',
    function(e) {
      e.preventDefault();
      $div.innerHTML = $textarea.value;
    },
    false
  );
})();
```

Neste exemplo criamos um textarea onde o usuário pode entrar com qualquer tipo de dado. Ao clicar no botão enviar o conteúdo que foi entrado dentro da textarea é renderizado como conteúdo HTML.

Porém, sabemos que se esses dados não forem tratados o usuário pode entrar com qualquer tipo de script e isso pode perjudicar a nossa aplicação.

# DOM - insertAdjacentHTML(pos, text)

O método insertAdjacentHTML() insere um texto como HTML, para uma posição especificada.

Valores de posição jurídica são:

- "afterbegin":
  - Após o início do elemento (como o primeiro filho)
- "afterend":
  - Após o elemento.
- "beforebegin":
  - Antes do elemento.
- "beforeend":
  - Antes do final do elemento (como o último filho).

Ex:

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->

  foo

  <!-- beforeend -->
</p>

<!-- afterend -->
```

Ex:

```js
(function() {
  'use strict';
  var $form = document.querySelector('[data-js="form"]');
  $form.insertAdjacentHTML('beforebegin', '<h1>Meu formulário</h1>');
})();
```

Neste exemplo adicionamos o nosso elmento antes da tag _form_ a qual selecionamos dentro do nosso Javascript e passamos uma nova tag, a tag _h1_ com o um conteúdo.

E se quisermos adicionar a nossa tag dentro da tag de formulário usamos _afterbegin_

Ex:

```js
(function() {
  'use strict';
  var $form = document.querySelector('[data-js="form"]');
  $form.insertAdjacentHTML('afterbegin', '<h1>Meu formulário</h1>');
})();
```

E quando precisamos adicionar ao final da nossa tag usamos _beforeend_

Ex:

```js
(function() {
  'use strict';
  var $form = document.querySelector('[data-js="form"]');
  $form.insertAdjacentHTML('beforeend', '<h1>Meu formulário</h1>');
})();
```

E quando precisamos adicionar ao final usamos o _afterend_.

Ex:

```js
(function() {
  'use strict';
  var $form = document.querySelector('[data-js="form"]');
  $form.insertAdjacentHTML('afterend', '<h1>Meu formulário</h1>');
})();
```

A vantagem de se usar o _insertAdjacentHTML_ é dizer onde vamos setar os elementos dentro do nosso documento.

PS: O método _insertAdjacentHTML_ aceita apenas textos no formato de String e envolvidas por uma tag HTML. Sem isso o mesmo irá converter para String o elemento passado. Assim não retornando uma tag HTML.

Porém podemos usar a propriedade _outerHTML_ que é representação em String do nosso elemento.

Ex:

```js
(function() {
  'use strict';
  var $form = document.querySelector('[data-js="form"]');
  $form.insertAdjacentHTML('afterend', $form.outerHTML);
})();
```
