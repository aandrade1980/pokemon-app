type PokemonSpecial = {
  name: string;
  damage: number;
};

type PokemonAttack = {
  name: string;
  damage: string;
  special: PokemonSpecial[];
};

export type Pokemon = {
  id: string;
  name: string;
  maxHP: number;
  maxCP: number;
  image: string;
  attacks: PokemonAttack;
};
