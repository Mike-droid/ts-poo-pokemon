"use strict";
exports.__esModule = true;
var FirePokemon_1 = require("../Pokemon/TypeFire/FirePokemon");
var Types_1 = require("../PokeType/Types");
var TyphlosionMoves = ["Rollout", "Double-Edge", "Burn Up", "Eruption"];
var TyphlosionTypes = [Types_1["default"].TYPES.FIRE];
var Typhlosion = new FirePokemon_1["default"](157, "Typhlosion", TyphlosionTypes, TyphlosionMoves, 78, 84, 78, 100);
console.table(Typhlosion.toString());
console.table(Typhlosion);
console.log(Typhlosion.AttackType(Types_1["default"].TYPES.FIRE));
console.log(Typhlosion.AttackType(Types_1["default"].TYPES.GROUND));