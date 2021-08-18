"use strict";
exports.__esModule = true;
var Pokemon_1 = require("../Pokemon/Pokemon");
var Types_1 = require("../PokeType/Types");
var mewtwoMoves = ['Recover', 'Psychic', 'Barrier', 'Amnesia'];
var mewtwoTypes = [Types_1["default"].TYPES.PSYCHIC];
var Mewtwo = new Pokemon_1["default"](150, 'Mewtwo', mewtwoTypes, mewtwoMoves, 106, 110, 90, 130);
console.table(Mewtwo);
Mewtwo.Attack(mewtwoMoves);
Mewtwo.Run_Fly(mewtwoTypes);
