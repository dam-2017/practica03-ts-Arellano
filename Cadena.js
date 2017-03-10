"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cadena = (function () {
    function Cadena(cadena) {
        this.cadena = cadena;
    }
    Cadena.prototype.isPalindrome = function () {
        var temp = new String(this.cadena);
        var pointer1 = 0;
        var pointer2 = temp.length - 1;
        while (pointer1 < pointer2) {
            if (temp.charAt(pointer1) != temp.charAt(pointer2)) {
                return false;
            }
            pointer1++;
            pointer2--;
        }
        return true;
    };
    Cadena.prototype.countVocals = function () {
        var temp = new String(this.cadena);
        temp = temp.toLowerCase();
        var arrayVocals = [0, 0, 0, 0, 0];
        for (var i = 0; i < temp.length; i++) {
            switch (temp.charAt(i)) {
                case 'a':
                    arrayVocals[0]++;
                    break;
                case 'e':
                    arrayVocals[1]++;
                    break;
                case 'i':
                    arrayVocals[2]++;
                    break;
                case 'o':
                    arrayVocals[3]++;
                    break;
                case 'u':
                    arrayVocals[4]++;
                    break;
                default:
                    break;
            }
        }
        return arrayVocals;
    };
    Cadena.prototype.countLetters = function () {
        var numLetters = 0;
        var temp = new String(this.cadena);
        temp = temp.toLowerCase();
        for (var i = 0; i < temp.length; i++) {
            var char = temp.charCodeAt(i);
            if (char > 96 && char < 123) {
                numLetters++;
            }
        }
        return numLetters;
    };
    Cadena.prototype.countWords = function () {
        var numWords = 0;
        var temp = new String(this.cadena);
        var flag = false;
        for (var i = 0; i < temp.length; i++) {
            var char = temp.charCodeAt(i);
            if ((char > 96 && char < 123) && !flag) {
                flag = true;
                numWords++;
                continue;
            }
            if (flag && char == 32) {
                flag = false;
            }
        }
        return numWords;
    };
    return Cadena;
}());
exports.Cadena = Cadena;
