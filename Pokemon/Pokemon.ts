class Pokemon {
  private id: number
  private name: string
  private type: Array<string>
  private moves: Array<string>
  private hp: number
  private attack: number
  private defense: number
  private speed: number

  constructor(id: number,
              name: string,
              type: Array<string>,
              moves: Array<string>,
              hp: number,
              attack: number,
              defense: number,
              speed: number) {
    this.id = id
    this.name = name
    this.type = type
    this.moves = moves
    this.hp = hp
    this.attack = attack
    this.defense = defense
    this.speed = speed
  }

  public toString(): string[] {
    return [
    `Pokemon ID: ${this.id}`,
    `Pokemon Name: ${this.name}`,
    `Pokemon Type: ${this.type}`,
    `Pokemon Moves: ${this.moves}`,
    `Pokemon HP: ${this.hp}`,
    `Pokemon Attack: ${this.attack}`,
    `Pokemon Defense: ${this.defense}`,
    `Pokemon Speed: ${this.speed}`
    ]
  }

  get pokemonId(): number {
    return this.id
  }
  set pokemonId(id: number) {
    this.id = id
  }

  get pokemonName(): string {
    return this.name
  }
  set pokemonName(name: string) {
    this.name = name
  }

  get pokemonType(): Array<string> {
    return this.type
  }
  set pokemonType(type: Array<string>) {
    this.type = type
  }

  get pokemonMoves(): Array<string> {
    return this.moves
  }
  set pokemonMoves(moves: Array<string>) {
    this.moves = moves
  }

  get pokemonHp(): number {
    return this.hp
  }
  set pokemonHp(hp: number) {
    this.hp = hp
  }

  get pokemonAttack(): number {
    return this.attack
  }
  set pokemonAttack(attack: number) {
    this.attack = attack
  }

  get pokemonDefense(): number {
    return this.defense
  }
  set pokemonDefense(defense: number) {
    this.defense = defense
  }

  get pokemonSpeed(): number {
    return this.speed
  }
  set pokemonSpeed(speed: number) {
    this.speed = speed
  }

  public Attack(moves: Array<string>){
    let random = Math.round(Math.random() * 3);
    console.log(`${this.pokemonName} used ${moves[random]}!`);
  }

  public Run_Fly(type: Array<string>){
    if (type[0] === "flying" || type[1] === "flying") {
      console.log(`${this.pokemonName} is flying at speed of ${this.pokemonSpeed}`);
    } else {
      console.log(`${this.pokemonName} is running at speed of ${this.pokemonSpeed}`);
    }
  }

  public AttackType(type: string) {
    console.log(`Type of the attack is ${type}`);
  }

}

export default Pokemon;