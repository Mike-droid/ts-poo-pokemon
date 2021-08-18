import Pokemon from "../Pokemon/Pokemon";
import Types from "../PokeType/Types";

const mewtwoMoves: string[] = ['Recover','Psychic','Barrier','Amnesia'];
const mewtwoTypes: string[] = [Types.TYPES.PSYCHIC];

const Mewtwo: Pokemon = new Pokemon(150, 'Mewtwo', mewtwoTypes, mewtwoMoves, 106, 110, 90, 130);

console.table(Mewtwo);

Mewtwo.Attack(mewtwoMoves);
Mewtwo.Run_Fly(mewtwoTypes);