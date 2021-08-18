"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pokemon_1 = require("../Pokemon");
var Types_1 = require("../../PokeType/Types");
var FirePokemon = /** @class */ (function (_super) {
    __extends(FirePokemon, _super);
    function FirePokemon(id, name, type, moves, hp, attack, defense, speed) {
        return _super.call(this, id, name, type, moves, hp, attack, defense, speed) || this;
    }
    FirePokemon.prototype.AttackType = function (type) {
        if (type === Types_1["default"].TYPES.FIRE) {
            return this.pokemonName + " has burned the opponent! \uD83D\uDD25\uD83D\uDD25";
        }
        else {
            return this.pokemonName + " attacked the opponent";
        }
    };
    return FirePokemon;
}(Pokemon_1["default"]));
exports["default"] = FirePokemon;
