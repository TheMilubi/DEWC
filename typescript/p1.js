var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var n = 3;
var s = 'adios';
var arrayNumerico = [1, 2, 3];
var arrayNum = [1, 2, 3];
var arrayString = ['a', 'b', 'c'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
    Color[Color["Purple"] = 3] = "Purple";
    Color[Color["Brown"] = 4] = "Brown";
    Color[Color["Black"] = 5] = "Black";
})(Color || (Color = {}));
function alertUser() {
    console.log('Alert booleano');
    return true;
}
var Animal = /** @class */ (function () {
    function Animal(nombre, edad, colorPiel) {
        this.nombre = nombre;
        this.edad = edad;
        this.colorPiel = colorPiel;
    }
    Animal.prototype.saludo = function (saludo) {
    };
    return Animal;
}());
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.saludo = function () {
        return "Guau! Guau! " + this.nombre;
    };
    return Perro;
}(Animal));
function EscribeMensaje(mensaje) {
    console.log(mensaje.titulo);
}
var mensaje = { titulo: 'Prueba', mensaje: 'Esto es una prueba' };
EscribeMensaje(mensaje);
var Coleccion = /** @class */ (function () {
    function Coleccion() {
        this.elementos = [];
    }
    Coleccion.prototype.Add = function (elemento) {
        this.elementos.push(elemento);
    };
    return Coleccion;
}());
