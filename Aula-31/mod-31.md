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

# O objeto Date

O objeto _Date_ é usado para trabalhar com datas e horas.

O objeto _Date_ são criados com a _new Date()_;

Ex:

```js
(function() {
  'use strict';
  var date = new Date();
  console.log(date);
  // Thu May 30 2019 11:39:18 GMT-0300 (Horário Padrão de Brasília)
})();
```

A variável date agora é uma instância do objeto _Date_, que por fim temos o horário atual, segundos e milisegundos o dia, mês e ano no seu retorno.

Podemos passar esses valores para o seu construtor.

Ex:

```js
(function() {
  'use strict';
  var year = 1995;
  var month = 1;
  var day = 15;
  var hour = 10;
  var min = 10;
  var sec = 0;
  var milliseconds = 0;
  var date = new Date(year, month, day, hour, min, sec, milliseconds);
  console.log(date);

  // Wed Feb 15 1995 10:10:00 GMT-0300 (Horário Padrão de Brasília)
})();
```

PS: O mês tem como base zero, e neste caso o mês 1 seria Fevereiro e não Janeiro.

Com isso temos a data alterada conforme os argumentos passados para o contrutor.

Ex:

```js
(function() {
  'use strict';
  var months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agost',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro'
  ];
  var year = 1995;
  var month = months.indexOf('Fevereiro');
  var day = 15;
  var hour = 10;
  var min = 10;
  var sec = 0;
  var milliseconds = 0;
  var date = new Date(year, month, day, hour, min, sec, milliseconds);
  console.log(date);
})();
```

Com base nos meses definidos a cima podemos pegar o o seu index usando o _indexOf_ retornando o index de acordo com o mês desejado.

# O Objeto Date - Propriedade e métodos

### Date.now()

_Date.now()_ é um método estático que retorne o número de milisegundos desde _1970/01/01._

Ex:

```js
(function() {
  'use strict';
  console.log(Date.now()); //1559230108425
})();
```

Alguns métodos básicos.

### getDate():

- Retorna o dia do mês (de 1 a 31)

### getDay():

- Retorna o dia da semana (de 0-6)

### getFullYear():

- Retorna o ano (2019)

### getHours():

- Retorna a hora (de 0-23)

Ex:

```js
(function() {
  'use strict';
  var date = new Date();
  console.log(
    date.getDate(),
    date.getDay(),
    date.getFullYear(),
    date.getHours()
  );
  // 30 4 2019 12
})();
```

# Conhecendo o Objeto Math.

O objeto _Math_ permite que você execute tarefas matemáticas.

O objeto _Math_ não é um construtor. Todas as propriedades/métodos de _Math_ pode ser chamados usando o _Math_ como um objeto.

### Math.PI

Retorna o valor de PI.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.PI);
  // 3.141592653589793;
})();
```

### Math.abs(x)

Retorna o valor absoluto de x.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.abs(-10));
  // 10
})();
```

### Math.ceil(x)

Retorna x, arredondado para cima até o inteiro mais próximo.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.ceil(1.1));
  // 2
})();
```

### Math.floor(x)

Retorna x, arredondado para baixo até o inteiro mais próximo.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.floor(1.1));
  // 1
})();
```

### Math.round()

Faz o aredondamento de x para o inteiro mais próximo.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.round(11.2));
  // 11
})();
```

### Math.sqrt(x)

Retorna a raiz quadrada de x.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.sqrt(25));
  // 5
})();
```

### Math.cbrt(x)

Retorna a raiz cúbica de x.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.cbrt(25));
  // 2.924017738212866
})();
```

### Math.max([x1, x2, x3])

Retorna o número com o valor mais alto.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.max(25, 2, 89, 2));
  // 89
})();
```

### Math.min([x1, x2, x3])

Retorna o número com o valor mais baixo.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.min(25, 2, 89, 2));
  // 2
})();
```

PS Podemos fazer de uma forma inda mais simples.

Ex:

```js
(function() {
  'use strict';
  var numbers = [2, 89, 29, -10, 2];
  console.log(Math.max.apply(Math, numbers)); // 89
  console.log(Math.min.apply(Math, numbers)); // -10
})();
```

### Math.random()

Retorna um número aleatório entre 0 e 1.

Ex:

```js
(function() {
  'use strict';
  console.log(Math.random());
  // 0.7413825105109522
})();
```

Ainda podemos fazer com arredondamento para cima usando o _Math.ceil_

Ex:

```js
(function() {
  'use strict';
  console.log(Math.ceil(Math.random() * 10)); // 1
})();
```

Assim temos números aleatórios de 1 até 10.

### Links:

- [HTML DOM insertAdjacentHTML() Method](https://www.w3schools.com/jsref/met_node_insertadjacenthtml.asp)

- [HTML DOM innerHTML Property](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

- [Data Object](https://www.w3schools.com/jsref/jsref_obj_date.asp)

- [Date.now()](https://www.w3schools.com/jsref/jsref_now.asp)

- [Math Object](https://www.w3schools.com/jsref/jsref_obj_math.asp)
