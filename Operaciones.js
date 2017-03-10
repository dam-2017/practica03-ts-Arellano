"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Operaciones = (function () {
    function Operaciones(op1, op2) {
        this.op1 = op1;
        this.op2 = op2;
    }
    Operaciones.prototype.add = function () {
        return this.op1 + this.op2;
    };
    Operaciones.prototype.sub = function () {
        return this.op1 - this.op2;
    };
    Operaciones.prototype.factorial = function (num) {
        var ret = 1;
        if (num == 0 || num == 1) {
            return 1;
        }
        for (var i = num; i > 0; i--) {
            ret *= i;
        }
        return ret;
    };
    Operaciones.prototype.isPrime = function (num) {
        var help = num - 1;
        while (help >= 2 && num != 2) {
            if (num % help == 0)
                return false;
            help--;
        }
        return true;
    };
    return Operaciones;
}());
exports.Operaciones = Operaciones;
