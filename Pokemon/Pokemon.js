"use strict";
exports.__esModule = true;
var Pokemon = /** @class */ (function () {
    function Pokemon(id, name, type, moves, hp, attack, defense, speed) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.moves = moves;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }
    Pokemon.prototype.toString = function () {
        return [
            "Pokemon ID: " + this.id,
            "Pokemon Name: " + this.name,
            "Pokemon Type: " + this.type,
            "Pokemon Moves: " + this.moves,
            "Pokemon HP: " + this.hp,
            "Pokemon Attack: " + this.attack,
            "Pokemon Defense: " + this.defense,
            "Pokemon Speed: " + this.speed
        ];
    };
    Object.defineProperty(Pokemon.prototype, "pokemonId", {
        get: function () {
            return this.id;
        },
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonName", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonType", {
        get: function () {
            return this.type;
        },
        set: function (type) {
            this.type = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonMoves", {
        get: function () {
            return this.moves;
        },
        set: function (moves) {
            this.moves = moves;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonHp", {
        get: function () {
            return this.hp;
        },
        set: function (hp) {
            this.hp = hp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonAttack", {
        get: function () {
            return this.attack;
        },
        set: function (attack) {
            this.attack = attack;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonDefense", {
        get: function () {
            return this.defense;
        },
        set: function (defense) {
            this.defense = defense;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pokemon.prototype, "pokemonSpeed", {
        get: function () {
            return this.speed;
        },
        set: function (speed) {
            this.speed = speed;
        },
        enumerable: false,
        configurable: true
    });
    Pokemon.prototype.Attack = function (moves) {
        var random = Math.round(Math.random() * 3);
        console.log(this.pokemonName + " used " + moves[random] + "!");
    };
    Pokemon.prototype.Run_Fly = function (type) {
        if (type[0] === "flying" || type[1] === "flying") {
            console.log(this.pokemonName + " is flying at speed of " + this.pokemonSpeed);
        }
        else {
            console.log(this.pokemonName + " is running at speed of " + this.pokemonSpeed);
        }
    };
    Pokemon.prototype.AttackType = function (type) {
        console.log("Type of the attack is " + type);
    };
    return Pokemon;
}());
exports["default"] = Pokemon;
