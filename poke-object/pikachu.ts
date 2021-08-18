import Pokemon from "../Pokemon/Pokemon";
import Types from "../PokeType/Types";

const pikachuMoves: string[] = ['Thunderbolt','Quick Attack','Zip Zap','Thunder'];
const pikachuType: string[] = [Types.TYPES.ELECTRIC];

const pikachu: Pokemon = new Pokemon(25, 'Pikachu', pikachuType, pikachuMoves, 35, 55, 40, 90);

console.log(pikachu);
console.table(pikachu);

pikachu.Attack(pikachuMoves);
pikachu.Run_Fly(pikachuType);