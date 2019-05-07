# JS no browser - Selecionando elementos do DOM.

## Problemas com áudio no próximo video Seção 20, aula 118

Tivemos uma pequena falha de alguns minutos no áudio do próximo vídeo, dessa aula #20, entre **1min48s** e **6min53**s. Felizmente o assunto falado nesse tempo é bastante simples, por isso vou transcrevê-lo aqui. Se você ficar com alguma dúvida com relação a esse assunto, pode abrir uma issue no repositório do curso que eu vou tirar sua dúvida, ok?

## Vamos lá!

Basicamente estávamos falando sobre **passar parâmetros para a IIFE**. A ideia é que você possa passar parâmetros para a IIFE que são **globais** na sua aplicação, para acessá-los de forma **local**, **dentro da IIFE**. Já vimos que, em Javascript, **o escopo é a função em que o código está inserido**, correto?

Sempre que criarmos uma variável **fora de uma função**, **é possível acessá-la dentro de qualquer função que esteja no mesmo escopo**. O mesmo não acontece para variáveis **criadas dentro de funções**. Sempre que você cria uma variável **dentro de uma função**, essa variável **não está acessível fora dela**.

E qualquer variável **criada dentro de uma função**, que tenha o mesmo nome de uma variável criada fora dessa função (em escopo global), a variável **mais interna terá precedência sobre a variável externa**.

Um exemplo seria o seguinte:

Ex:

```js
var name = 'daciuk';
function myFunction() {
  var name = 'arroz';
  console.log(name); // 'arroz'
}
console.log(name); // 'daciuk'
```

Veja que, no código acima, temos duas variáveis name : uma criada dentro da função, e outra criada fora da função. Quando você usa o console.log dentro da função, é mostrado o valor da variável interna. E quando você chama o console.log fora da função, o valor é da variável externa. Ou seja: dentro da função, ainda que você crie uma variável com o mesmo nome da variável de fora, essa terá precedência. Simples, não?

Agora, sobre a **IIFE**: quando temos **objetos globais**, nós podemos passar por **parâmetro para a IIFE**, para que esses parâmetros sejam uma representação do **objeto externo (global)**, mas usados de forma **local**. Isso tem várias vantagens que veremos em alguma aula futura, como minificação de código, por exemplo :)

Mas a ideia é: sempre que você tiver **objetos globais**, e precisar usar dentro da IIFE, **não use diretamente o objeto global. Passe-o por parâmetro, e use-o como uma referência local**:

Um exemplo seria o objeto **Window**:

Ex:

```js
(function(win) {
  console.log(win === window); // true
})(window);
```

O código acima mostra uma mensagem no console true , pois **win é uma referência local ao objeto window global**.

O outro assunto do qual falamos nesses 5 minutos foi sobre como podemos utilizar **if's de uma única linha sem a necessidade das chaves**.

Nos nossos códigos, nós vamos procurar evitar ao máximo utilizar if's. E, sempre que necessário, vamos ao máximo evitar else, pois isso deixa o código mais complexo e difícil de entender.

E sempre que utilizarmos if, vamos tentar manter o código dentro do if pequeno, com no máximo uma única linha (não se preocupe, vou mostrar como podemos fazer isso na maior parte dos casos em breve :D).

E para esses casos, **sempre que usarmos ifs de uma única linha, nós podemos simplificar o seu uso, removendo as chaves**. O mesmo vale para **while e for**. Vou mostrar alguns exemplos:

Ex:

```js
(function(win) {
  if (win === window) console.log('win é uma referência local à window');
})(window);
```

Executando o código acima, você poderá ver que a mensagem win é uma referência local à window é mostrada no console, pois a condição é válida (é avaliada como true).

Para garantir que está realmente funcionando, inverta a condição:

Ex:

```js
(function(win) {
  if (win !== window) console.log('win é uma referência local à window');
})(window);
```

Agora nada é logado no console!

E para ver que, sem as chaves, só a primeira linha é avaliada, você pode testar o seguinte:

Ex:

```js
(function(win) {
  if (win !== window) console.log('win é uma referência local à window');
  console.log('Essa mensagem sempre é mostrada');
})(window);
```

Dê uma olhada na indentação: parece que os dois console.log estão dentro do if, mas na verdade, como ele está sem as chaves, somente o primeiro será avaliado dentro do if. A outra mensagem sempre será mostrada!

Vamos tomar muito cuidado ao utilizar if de uma única linha, por conta da dificuldade de leitura que isso pode causar, mas mantendo nossas funções pequenas, isso dificilmente será um problema. Tudo depende do código onde você irá aplicar essa regra. Se você tem uma função muito grande (mais de 8 linhas), então esse formato pode começar a se tornar um problema.

Bom, mas em breve vamos falar sobre boas práticas de como aplicar tudo o que estamos aprendendo em projetos reais! O restante do conteúdo você pode acompanhar normalmente nos vídeos :D

Peço mais uma vez desculpas pelo problema no áudio, e obrigado aos alunos que o reportaram!

E sempre que você encontrar um problema, por favor, me avise para que eu possa o quanto antes resolvê-lo, ok? Não se acanhe em reportar :D

Assim teremos um aprendizado muito melhor, juntos :D

Um grande abraço!

### Fernando Daciuk :heart:

# Objeto Window.

O objeto window **representa uma janela que contém um elemento DOM**; a propriedade **document aponta para o documento DOM**, carregado naquela janela. Uma janela para um dado documento pode ser obtido usando a **propriedade document.defaultView**.

Dentro do objeto **Window** temos alguns métodos são:

## **window.alert()**.

O método **Window.alert()** mostra uma **caixa de diálogo** de aviso com o conteúdo opcionalmente especificado e um botão OK.

Ex:

```js
(function(win) {
  'use strict';

  win.alert('Olá'); // Abre uma caixa de diálogo dentro do navegador mostrando o texto olá.
})(window);
```

PS: Todos os métodos dentro de **Window** podemos chamar sem a palavra **window.** seguido do método. Podemos fazer simplesmente **alert()**.

Dessa forma o Javascript irá entender que estamos chamando o método **global** de **window**.

## **window.prompt()**.

O **Window.prompt()** exibe uma caixa de diálogo com uma mensagem opcional **solicitando ao usuário a entrada de algum texto**.

Ex:

```js
(function(win) {
  'use strict';

  var name = win.prompt('Entre com o seu nome');

  // ou podemos apenas chamar a método prompt.
  // var name = prompt('Entre com o seu nome');

  console.log('Seja bem vindo', name);
})(window);
```

## **window.confirm()**.

O método **Window.confirm()** mostra uma janela modal com uma mensagem opcional e dois botões, OK e Cancelar.

Ex:

```js
(function(win) {
  'use strict';

  var del = win.confirm('Deseja realmente excluir ?');

  if (del) {
    console.log('Excluido com sucesso', del); // del === true
  } else {
    console.log('Ação cancelada!', del); // del === false
  }
})(window);
```

O método **window.confirm** retorna **true** quando clicamos em ok e **false** quando clicamos em cancelar.

## **window.document()**.

Retorna a **referência** para o documento contido na janela.

Mas onde é pega essa referência para o documento ?

## DOM.

O **Modelo de Objeto de Documento (DOM)**é uma interface de programação para documentos **HTML e XML**. Ele provê uma representação estruturada do documento e define um meio pelo qual a estrutura pode ser acessada por programas permitindo-os alterar a estrutura do documento, estilo e conteúdo. O DOM **provê uma representação do documento como um conjunto estruturado de nós e objetos que têm propriedades e métodos**. Essencialmente ele conecta páginas de internet a scripts ou linguagens de programação.

Uma página de internet é um documento. Este documento pode ser exibido numa janela de navegador, ou como código-fonte HTML. Mas é o mesmo documento em ambos os casos. O Document Object Model (DOM) provê uma outra forma de representar, armazenar e manipular o mesmo documento. O DOM é uma representação orientada a objeto completa da página, e pode ser modificada com uma linguagem de script como o JavaScript.

![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

_Imagem representativa do DOM by [w3schools](https://www.w3schools.com/js/pic_htmltree.gif)_

Em outras palavras seria algo representado dessa forma:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Title</title>
  </head>
  <body>
    <h1>My header</h1>
    <a href="#">My Link</a>
  </body>
</html>
```

Para cada página carregada no browser, existe um objeto Document. A interface Document serve como um ponto de entrada para o conteúdo da Página ( a árvore DOM, incluindo elementos como **\<body> e \<table>**) e provê funcionalidades globais ao documento **(como obter a URL da página e criar novos elementos no documento)**.

Podemos acessar esses elementos da seguinte forma:

### **document.getElementById('element')**

- Usamos quando queremos acessar **um elemento apartir de um id**.

### **document.getElementsByClassName('element')**

- Usamos quando queremos acessar **elementos apartir de uma classe**.

### **document.getElementsByTagName('tag')**

- Usamos quando queremos acessar **um elemento apartir de uma tag html**.

### **document.getElementByName('name')**

- Usamos quando queremos acessar **um elemento apartir de um nome**.

Exemplo de uma página html.

Ex:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Aula 20</title>
  </head>
  <body>
    <form action="/" method="get">
      <input
        type="text"
        name="name"
        class="myInput"
        id="userName"
        value="Ruan"
      />
      <input
        type="password"
        class="myInput"
        name="password"
        id="userPassword"
        value="124"
      />
      <button type="submit" id="btn">Enviar</button>
    </form>

    <script src="test.js"></script>
  </body>
</html>
```

```js
(function(win, doc) {
  'use strict';
  console.log(doc.getElementById('userName')); // retorna o elemento referente ao id userName.
  //
})(window, document);
```

```js
(function(win, doc) {
  'use strict';
  console.log(doc.getElementsByClassName('myInput')); // retorna um HTMLCollection(n) contendo o número de itens com a respectiva classe passada.
})(window, document);
```

PS: A interface HTMLCollection representa uma coleção genérica (objeto array) de elementos (na ordem em que aparecem no documento) e oferece métodos e propriedades para selecioná-los da lista.

```js
(function(win, doc) {
  'use strict';
  console.log(doc.getElementsByTagName('input')); // Da mesma forma que o getElementsByClassName retorna um HTMLCollection(n) contendo o número de items de acordo com a tag passada. Esse número pode mudar dinâmicamente, dependendo do número de tags, causando um efeito colateral.
})(window, document);
```

```js
(function(win, doc) {
  'use strict';
  console.log(doc.getElementsByName('name')); // Retorna o elemento correspondente ao nome passado.
})(window, document);
```

### **document.querySelector(element)**.

Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

Ex:

```js
(function(win, doc) {
  'use strict';
  console.log(doc.querySelector('input')); // retornando o primeiro input.
})(window, document);
```

### **document.querySelectorAll(element)**.

Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado. O objeto retornado é uma **NodeList**.

Ex:

```js
(function(win, doc) {
  'use strict';
  console.log(doc.querySelectorAll('input')); // retornando uma NodeList contendo os dois elementos de input.
})(window, document);
```

PS: A forma de acessar os elementos usando os métodos querySelector e querySelectorAll é através da anotação de css.

Ex:

```js
(function(win, doc) {
  'use strict';
  console.log(doc.querySelectorAll('.myInput')); // retornando uma NodeList contendo todos os items com a class .myInput
})(window, document);
```

PS: **O que é uma NodeList ?**

As funções que acessam e selecionam elementos HTML em um página web retornam sempre um **conjunto de elementos**. Esse conjunto é denominado **NodeList**.

# Formulários

### **.value**

Pega os valores de um input de um formulário.

Ex:

```js
(function(win, doc) {
  'use strict';

  var $userName = doc.querySelector('#userName');
  var $userPassword = doc.querySelector('#userPassword');

  console.log($userName.value, $userPassword.value);
})(window, document);
// Ruan 124
```

Usando a propriedade **value** podemos pegar cada valor de dentro dos **inputs**.

PS: A propriedade **value** pode ter dois comportamentos: Como um **Getter** ou um **Setter**.

### Getter.

- Pegar os valores do campo de input.

### Setter.

- Setar os valores que foram retornados de um campo de input.

Ex:

```js
(function(win, doc) {
  'use strict';
  // Quando atribuimos um novo valor através da propriedade value, estamos utilizando um setter.

  $userName.value = 'Ruan Valente';
  $userPassword.value = 'minhaNovaSenha';

  // E quando estamos querendo apenas o valor que irá ser retornando usamos a propriedade .value seguida do elemento. Estamos utilizando um getter.

  console.log($userName.value, $userPassword.value); // Ruan Valente minhaNovaSenha
})(window, document);
```

Setamos novos valores através do Javascript para o nome e para password. E recuperamos esses valores mostrados dentro do console.log.

# Introdução à eventos.

## **.addEventListener()**.

**addEventListener()** registra uma única espera de evento em um único alvo. O alvo do evento pode ser um único elemento em um **documento**, o documento em si, uma janela, ou um **XMLHttpRequest**.

Para registrar mais de uma espera de evento como alvo, chame **addEventListener()** para o mesmo alvo mas com diferentes tipos de evento ou captura de **parâmetros**.

> alvo.addEventListener(tipo, escuta[, usarCaptura]);
> alvo.addEventListener(tipo, escuta[, usarCaptura, seQuerNaoConfiavel ]);

**tipo**

- Uma linha de texto que representa o tipo de evento a ser esperado.

**escuta**

- O objeto que recebe uma notificação quando um evento do tipo especificado ocorre. Esse objeto precisa implementar a interface do EventListener, ou simplesmente executar uma função JavaScript.

**usarCaptura - Opcional**

- Se true, usarCaptura indica que o usuário deseja iniciar uma captura. Depois de iniciada a captura, todos os eventos do tipo especificado serão enviados à escuta registrada antes de serem enviados à qualquer EventTarget abaixo dela na hierarquia de DOMs. Eventos que borbulharem para cima na hierarquia não acionarão a escuta designada a usar a captura.

**seQuerNaoConfiavel**

Se true, o evento pode ser acionado por conteúdo não-confiável.

### Evento 'click'

**addEventListener('click')**

O evento click event é disparado quando o botão de um dispositivo apontador (normalmente o botão de um mouse) é pressionado e solto logo em seguida em um mesmo elemento.

### **preventDefault()**.

Cancela o evento se for cancelável, sem parar a propagação do mesmo.

Ou em outras palavras prevenimos a ação padrão que o navegador tem ao ter um evento.

Ex:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Aula-20</title>
  </head>
  <body>
    <form action="/" method="get">
      <input type="text" name="name" class="myInput" id="userName" />
      <input
        type="password"
        name="password"
        class="myInput"
        id="userPassword"
      />
      <button type="submit" id="button">Enviar</button>
    </form>

    <script src="test.js"></script>
  </body>
</html>
```

```js
(function(win, doc) {
  'use strict';

  var $inputUserName = doc.querySelector('#userName');
  var $inputPassword = doc.querySelector('#userPassword');
  var $button = doc.querySelector('#button');

  $button.addEventListener(
    'click',
    function(event) {
      // Dentro da função temos um objeto chamado event ( que pode ser nomeado com qualquer nome ) e esse objeto está relacionado ao evento de click do botão. Neste caso o evento que estamos passado.

      event.preventDefault(); // Previnimos a ação padrão do navegador ao executar um evento.

      console.log('click'); // Ao clicar no botão é executado o evento de click e mostrando no console a menssagem click.
    },
    false
  );
})(window, document);
```

PS: Podemos adicionar um Listener em qualquer lugar do nosso documento.

### **Links**

- [Referência de Eventos - MDN ](https://developer.mozilla.org/pt-PT/docs/Web/Eventos)

- [Element.addEventListener - MDN ](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/addEventListener)

- [Window - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Window)

- [Modelo de Objeto de Documento (DOM) - MDN](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM)

- [Introdução ao DOM - MDN](https://developer.mozilla.org/pt-PT/docs/Gecko_DOM_Reference/Introduction)

- [HTMLCollection - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCollection)

- [Document - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)

- [click - MDN](https://developer.mozilla.org/pt-BR/docs/Web/Events/click)

- [Event.preventDefault - MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Event/preventDefault)

- [Devfuria](http://www.devfuria.com.br/javascript/dom-nodelist/)
