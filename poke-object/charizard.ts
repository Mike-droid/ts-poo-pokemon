import Pokemon from "../Pokemon/Pokemon";
import Types from "../PokeType/Types";

const charizardMoves = ["Flamethrower","Fire Spin","Inferno","Wing Atack"];
const charizardTypes = [Types.TYPES.FIRE, Types.TYPES.FLYING];

const Charizard: Pokemon = new Pokemon(6,"Charizard",charizardTypes,charizardMoves,78,84,78,100);

console.table(Charizard);

Charizard.Attack(charizardMoves);
Charizard.Run_Fly(charizardTypes);
Charizard.AttackType(Types.TYPES.FIRE);