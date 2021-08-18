import Pokemon from "../Pokemon";
import Types from "../../PokeType/Types"

class FirePokemon extends Pokemon {

  constructor(
    id: number,
    name: string,
    type: Array<string>,
    moves: Array<string>,
    hp: number,
    attack: number,
    defense: number,
    speed: number
  ) {
    super(
      id,
      name,
      type,
      moves,
      hp,
      attack,
      defense,
      speed,
    );
  }

  AttackType(type: string) {
    if (type === Types.TYPES.FIRE) {
      return `${this.pokemonName} has burned the opponent! 🔥🔥`;
    } else {
      return `${this.pokemonName} attacked the opponent`;
    }
  }
}

export default FirePokemon;