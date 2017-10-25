var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name) {
        this._name = name;
    }
    Animal.prototype.MakeSound = function (sound) {
        console.log("The animal is " + this._name + " who sounds like " + sound + " ");
    };
    return Animal;
}());
;
var Omnivores = /** @class */ (function (_super) {
    __extends(Omnivores, _super);
    function Omnivores(name) {
        return _super.call(this, name) || this;
    }
    Omnivores.prototype.MakeSound = function (sound) {
        if (sound === void 0) { sound = "Roar"; }
        _super.prototype.MakeSound.call(this, sound);
    };
    return Omnivores;
}(Animal));
var herbivores = /** @class */ (function (_super) {
    __extends(herbivores, _super);
    function herbivores(name) {
        return _super.call(this, name) || this;
    }
    herbivores.prototype.MakeSound = function (sound) {
        if (sound === void 0) { sound = "Trumphet"; }
        _super.prototype.MakeSound.call(this, sound);
    };
    return herbivores;
}(Animal));
var result = new Omnivores(" Tiger ");
result.MakeSound();
var result1 = new herbivores(" Elephant ");
result1.MakeSound();
