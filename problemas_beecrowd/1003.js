var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre
  elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "SOMA" com todas as letras maiúsculas, com um espaço em branco antes e depois
 da igualdade seguido pelo valor correspondente à soma de A e B. Como todos os problemas, não
 esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá
 "Presentation Error".
 */

 let A = parseInt(lines[0])
 let B = parseInt(lines[1])

 let SOMA = A + B

 console.log(`SOMA = ${SOMA}`)
