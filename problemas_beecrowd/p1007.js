var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do 
 produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um 
espaço em branco antes e depois da igualdade.
 */

let a = parseInt(lines[0])
let b = parseInt(lines[1])
let c = parseInt(lines[2])
let d = parseInt(lines[3])

let primeiroPeso = a * b
let segundoPeso = c * d

let diferenca = primeiroPeso - segundoPeso

console.log(`DIFERENCA = ${diferenca}`)