import {Operaciones} from './Operaciones';
import {Cadena} from './Cadena';

let cadena = new Cadena('hola mundo');
console.log(cadena.countVocals());
console.log(cadena.countWords());
console.log(cadena.countLetters());
console.log(cadena.isPalindrome());
let operaciones = new Operaciones(5,5);
console.log(operaciones.add());
console.log(operaciones.sub());
console.log(operaciones.factorial(6));
console.log(operaciones.isPrime(46));
