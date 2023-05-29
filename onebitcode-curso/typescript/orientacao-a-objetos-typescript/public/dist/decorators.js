var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log() {
    return function (target, key, descriptor) {
        var originalMethod = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log('--------------------------------');
            console.log("Chamando o m\u00E9todo ".concat(key, " com os par\u00E2metros: ").concat(JSON.stringify(args)));
            var result = originalMethod.apply(this, args);
            console.log("O m\u00E9todo ".concat(key, " retornou o valor: ").concat(JSON.stringify(result)));
            console.log('--------------------------------');
            return result;
        };
    };
}
var Planet = /** @class */ (function () {
    function Planet(name) {
        this.name = name;
    }
    Planet.prototype.calculate = function (value) {
        // ...
        console.log("Calculando ".concat(value, " vezes dois"));
        return value * 2;
    };
    Planet.prototype.invertName = function () {
        return this.name.split('').reverse().join('');
    };
    __decorate([
        Log()
    ], Planet.prototype, "calculate", null);
    __decorate([
        Log()
    ], Planet.prototype, "invertName", null);
    return Planet;
}());
var planet = new Planet('Terra');
var result = planet.calculate(5);
console.log("Resultado: ".concat(result));
planet.invertName();
