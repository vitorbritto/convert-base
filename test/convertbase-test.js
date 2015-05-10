'use strict';

var convertBase = function(num, from, to) {
    return parseInt(num, from).toString(to);
};

console.log('Test conversions: ');
console.log(convertBase('111', 2, 16));
console.log(convertBase('011', 2, 16));
console.log(convertBase('42', 10, 2));
console.log(convertBase('f8', 16, 10));
console.log(convertBase('22', 10, 2));
console.log(convertBase('f2', 16, 2));

