// intro typescript para angular.
// ts e js, semelhanças e diferenças.
// tsc main.ts no terminal > gera arquivo main.js
// usando transpiler/compiler para compilar e gerar js a apartir de ts.
//
// basicamente typescript é 90% javascript com melhoras e novas funcionalidades mais modernas
//
let n1: number = 6
let n2: string = 'seis'
let n3: boolean = true
let n4: any = 12 + 'doce'
//
var minhaVar = 'minha variavel';
// ts > js
function minhaFunc (x: any, y: any) {
  return x + y;
}
// ts > js
let num = 2;
var PI = 3.14;
// js
var numeros = [1,2,3];
numeros.map(function(valor){
  return valor *2;
});
// ts / ecmascript
numeros.map(valor => valor *2);
//
class Matematica {
  soma(x: any, y: any){
    return x + y;
  }
}
