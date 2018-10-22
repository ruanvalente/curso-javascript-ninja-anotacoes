/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [ 1, true, 'false', { curso: 'JS-NINJA'}, 90.0 ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function arrParam( param ) {
  return param; 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( arrParam( arr )[1] );

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrParam2( arr, index ) {
  return arr[ index ];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = [ function() {}, 'Ninja', { curso: 'JS-NINJA' }, [ 1, 2, 3 ], 100 ];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log( arrParam2( arr2, 0 ) );
console.log( arrParam2( arr2, 1 ) );
console.log( arrParam2( arr2, 2 ) );
console.log( arrParam2( arr2, 3 ) );
console.log( arrParam2( arr2, 4 ) );
/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book( bookName ) {
  var books = {
    'Estruturas de dados e algoritmos em JavaScript' : {
      quantidadePaginas: 304,
      autor: 'Loiane Groner',
      editora: 'Novatec',
    },

    'Segredos do Ninja JavaScript' : {
      quantidadePaginas: 488,
      autor: 'John Resig & Bear Bibeault',
      editora: 'Novatec',
    },

    'Padrões JavaScript' : {
      quantidadePaginas : 240,
      autor: 'Stoyan Stefanov',
      editora: 'Novatec',
    },
  };
  return !bookName ? books : books[ bookName ]; 
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log( book() );

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'Segredos do Ninja JavaScript';
console.log( 'O livro '+ bookName +' tem '+ book( bookName ).quantidadePaginas +' páginas!' );
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( 'O autor do livro '+ bookName +' é '+ book( bookName ).autor +'.');

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( 'O livro '+ bookName +' foi publicado pela editora '+ book( bookName ).editora+'.' );
