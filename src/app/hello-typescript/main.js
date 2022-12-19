// intro typescript para angular.
// ts e js, semelhanças e diferenças.
// tsc main.ts no terminal > gera arquivo main.js
// usando transpiler/compiler para compilar e gerar js a apartir de ts.
//
// basicamente typescript é 90% javascript com melhoras e novas funcionalidades mais modernas
//
var n1 = 6;
var n2 = 'seis';
var n3 = true;
var n4 = 12 + 'doce';
//
var minhaVar = 'minha variavel';
// ts > js
function minhaFunc(x, y) {
    return x + y;
}
// ts > js
var num = 2;
var PI = 3.14;
// js
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
// ts / ecmascript
numeros.map(function (valor) { return valor * 2; });
//
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
