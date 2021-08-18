import FirePokemon from "../Pokemon/TypeFire/FirePokemon";
import Types from "../PokeType/Types";

const TyphlosionMoves = ["Rollout","Double-Edge","Burn Up","Eruption"];
const TyphlosionTypes = [Types.TYPES.FIRE];

const Typhlosion: FirePokemon = new FirePokemon(157,"Typhlosion",TyphlosionTypes,TyphlosionMoves,78,84,78,100);

console.table(Typhlosion.toString());
console.table(Typhlosion);

console.log(Typhlosion.AttackType(Types.TYPES.FIRE));
console.log(Typhlosion.AttackType(Types.TYPES.GROUND));