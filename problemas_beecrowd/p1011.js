/**
 Timelimit: 1
Faça um programa que calcule e mostre o volume de uma esfera sendo fornecido o valor de 
seu raio (R). A fórmula para calcular o volume é: (4/3) * pi * R3. Considere (atribua) 
para pi o valor 3.14159.

Dica: Ao utilizar a fórmula, procure usar (4/3.0) ou (4.0/3), pois algumas linguagens 
(dentre elas o C++), assumem que o resultado da divisão entre dois inteiros é outro inteiro.

Entrada
O arquivo de entrada contém um valor de ponto flutuante (dupla precisão), correspondente
 ao raio da esfera.

Saída
A saída deverá ser uma mensagem "VOLUME" conforme o exemplo fornecido abaixo, com um espaço
 antes e um espaço depois da igualdade. O valor deverá ser apresentado com 3 casas após o ponto.
 */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines[0])
let pi = 3.14159
let esfera = (4.0/3) * pi * Math.pow(raio, 3)

console.log(`VOLUME = ${esfera.toFixed(3)}`)