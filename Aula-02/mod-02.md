# Um giro pela linguagem.
## Operadores Lógicos.
Basicamente operadores lógicos combinam ou invertem valores booleanos.

### && ( and )
O operador **and** retorna **true** se as duas expressões forem **verdadeiras** caso ao contrário o mesmo será **falso**.

Exemplo:
```js
  2 > 1 && 5 > 2;
  true

  1 > 2 && 1 < 2;
  false
```
### || ( OR )
E quando precisamos testar apenas se uma das expressões satifaz a nossa codição ? Ai precisamos usar o operador **OR**.
O operador OR, verifica se **um ou outro valor** for **verdadeiro**, se isso for verdade é retornado **true**. Apenas se ambas forem falsas o mesmo retornara **falso**.
```js
  2 > 1 || 5 < 2;
  true

  3 < 3 || 2 > 10;
  false
```

### ! ( NOT )
Usamos o **NOT** quando precisamos inverter o valor de uma afirmação, isso resulta no inverso do seu valor booleano. Se uma afirmação for verdadeira a mesma será **falsa**, e se for falsa a mesma será **verdadeira**.
```js
  !2 > 1 && 5 > 2;
  false

  !2 < 1;
  true
```

### Operadores Unários
Um operador unário é uma operação com apenas um operando.
- ( + )

Quando usamos o operador unário **( + )** o mesmo faz a auto conversão de um valor para o tipo **Number**.
```js
  +'1';
  1

  +'node';
  NaN
```

Se tentamos converter uma string, ele converterá para o tipo **NaN** a propriedade global NaN é um valor especial que significa **Not-A-Number** (não é um número).

Usando também o operador unário + podemos concatenar ( juntar ), strings.

```js
  'ru' + 'an';
  'ruan'

  3 + '3';
  '33'
```
- ( - )

Assim como no operador **( + )** o operador **( - )** converte para um tipo **Number** com o seu valor negativo.
```js
  var negativo = 3;
  -negativo;
  -3

  -'5';
  -5
```

### Estrutura Léxica
Basicamente é um conjuto de regras definidas de como vamos escrever os nosso códigos dentro da linguagem. Como definir variáveis, funções, comentários etc.

### Case sensitive
Isso significa que o Javascript diferencia letras **Maiúsculas** de letras **Minúsculas**.

```js
  var nome = 'Um nome';
  var NOME = 'Um nome';
```
Neste exemplo a variável **nome** ( com letras minúsculas ) é diferente da variável **NOME** com letras maiúsculas.

### Comentários
São partes do codigo onde o interpretador do Javascript não irá interpretar aquele determinado trecho de código.
Temos duas formas de definir os nosso comentários:
- Comentários de blocos: /* */
- Comentários de linha: //
```js
  var nome = 'Meu nome';
  // Essa parte do código não será interpretada.
  console.log( nome );
  /*
    Essa parte também não.
  */
  'Meu nome'
```
Usamos comentários quando precisamos comentar determinado trecho que você julga necessário para compreendimento seu ou do outro programador.

É uma má pratica usar comentários onde não for necessário dentro do código.

### Literais
São basicamente valores que aparecem direto no programa. São valores que não mudam e que fazem parte do core do Javascript.

#### Exemplo de literais.
- 12
- 1.2
- 'ninja'
- "ninja"
- true
- null
- { a: 1 }
- [ 1, 2 ]

### Indentificadores
São nomes que podemos usar em nossas variáveis ou funções.
Podem iniciar com:
+ ( - ) ou $
+ Letras de a a z
+ Letras de A a Z

E também podem conter:
+ Digitos 0 a 9

E qualquer caractere unicode, porém não devemos utilizar.

### Palvras reservadas
São palavras nomeadas já utilizadas pela linguagem.

[Link para saber mais.](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar#Palavras-chave_reservadas_para_uso_futuro)

### Instruções condicionais IF
A condicional **if**  é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira.
```js
  var x = 10;
  var y = 20;

  if( x === 10 && y === 20 ) {
    x = 5;
    y = 10;
  }

  x
  5

  y
  10
```

Se for falsa, executa as afirmações dentro do bloco **else**.
```js
  var x = 5;
  var y = 10;

  if ( x === 10 || y === 1 ) {
    x = 2;
    y = 1;
  } else {
    x = 50;
    y = 10;
  }

  x
  50

  y
  10
```
### ELSE IF
Perceba que não existe sintaxe de elseif em JavaScript. Entretanto, você pode escrevê-la com um espaço entre o **if** e o **else**. Que serve pra verificar mais condições.
```js
  var nota1 = 7.0;
  var nota2 = 7.0;
  var nota3 = 7.0;
  var nota4 = 7.0;
  var media = ( nota1 + nota2 + nota3 + nota4 ) / 4;

  if( media === 7 ) {
    console.log( 'Você passou' );
  } else if ( media <= 6 ) {
    console.log( 'Você está em recuperação' );
  } else {
    console.log( 'Você tirou uma boa nota' );
  }

  'Você paassou'
```

### Bônus Adicionando o repositório do curso.
Primeiro precisamos fazer o fork do projeto principal [Link do repositório princial](https://github.com/da2k/curso-javascript-ninja)

Após isso precisamos rodar o comando **git clone** do repositório principal que foi realizado fork para a nossa conta.
```git
  git clone git@github.com:ruanvalente/curso-javascript-ninja.git
```

Após o repositório ser clonado precisamos entrar dentro da pasta que foi clonada e adicionar o repositório principal remotamente para ter os desafios atualizados.
```git
   git remote add upstream git@github.com:da2k/curso-javascript-ninja.git
```

Onde o nome **upstream** será o nome deste repositório que adicionamos remotamente.
```git
  git remote -v
origin git@github.com:ruanvalente/curso-javascript-ninja.git (fetch)
origin	git@github.com:ruanvalente/curso-javascript-ninja.git (push)
upstream	git@github.com:da2k/curso-javascript-ninja.git (fetch)
upstream	git@github.com:da2k/curso-javascript-ninja.git (push)
```
Podemos verificar os repositórios que foram adicionados remotamente usando o comando **git remote -v**

Agora precisamos baixar as atualizações.

```git
  git fetch upstream
remote: Enumerating objects: 1, done.
remote: Counting objects: 100% (1/1), done.
remote: Total 4 (delta 1), reused 1 (delta 1), pack-reused 3
Unpacking objects: 100% (4/4), done.
From github.com:da2k/curso-javascript-ninja
 * [new branch]      master     -> upstream/master
```

Agora atualizar o nosso repositório local com o remoto do curso.

```git
  git merge upstream/master
Updating ed057e5..9b569b7
Fast-forward
 .github/ISSUE_TEMPLATE.md        |  2 +-
 .github/PULL_REQUEST_TEMPLATE.md | 11 +++++++++++
 challenge-05/challenge-05.js     |  6 +++---
 challenge-17/challenge-17.js     |  4 ++--
 4 files changed, 17 insertions(+), 6 deletions(-)
 create mode 100644 .github/PULL_REQUEST_TEMPLATE.md
```
Para realização do nossos desafios precisamos criar uma branch correspondente ao desafio em si.
```git
  git checkout -b challenge-01
```
Depois que fizemos a alteração precisamos commitar e enviar as nossas alterações para a branch que criamos.
```git
  git add .
  git commit -m 'Minhas alterações'
  git push origin challenge-01
```

Dentro do github, irá aparecer um botão com a menssagem **Compare && Pull Request** e é só correr pro abraço !!!