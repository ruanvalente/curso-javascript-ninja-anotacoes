# Ajax

AJAX significa _Asynchronous JavaScript e XML_. Em poucas palavras, é o uso do objeto _XMLHttpRequest_ para se comunicar com os scripts do lado do servidor. Ele pode enviar bem como receber informações em uma variedade de formatos, incluindo **JSON, XML, HTML, e até mesmo arquivos de texto**. Porém a característica mais atraente do AJAX, é a sua natureza _"assíncrona"_, o que significa que ele pode fazer tudo isso sem a necessidade de atualizar a página. Isso permite a você atualizar partes de uma página com base em eventos do usuário.

Em aulas passadas vimos como funciona o Ajax e como fazemos requisições e como manipulamos essas repostas mas como isso funciona do lado do servidor ?

### REST

**Representational State Transfer (REST)**, em português **Transferência de Estado Representacional**, é um estilo de arquitetura de software que define um conjunto de restrições a serem usados para a criação de web services (serviços Web). Os Web services que estão em conformidade com o estilo arquitetural REST, denominados Web services RESTful), fornecem interoperabilidade entre sistemas de computadores na Internet. Os Web services RESTful permitem que os sistemas solicitantes acessem e manipulem representações textuais de recursos da Web usando um conjunto uniforme e predefinido de operações sem estado.

PS: Para exemplificar como é o funcionamento de uma _REST-API_ vamos utilizar o _express_ que é um: framework web rápido, flexível e minimalista para **Node.js**, segundo o próprio site.

Neste exemplo teremos duas aplicações uma para o **front** e outra para o **back**.

No front vamos usar o que já sabemos sobre o Javascript do lado do cliente, e vamos utilizar o Ajax para fazer requisições ao servidor ( back ) que irá devolver esses dados.

No back vamos precisar o _express_ que é um framework web para Nodejs para que possamos criar a nossa rest api.

Vamos ter a seguinte estrutura de pastas:

Ex:

```
front
|--
  |-- index.js
  |-- index.html

back
| --
  | -- node_module
  | -- package.json
  | -- index.js
```
