/**
 * Action types
 */
export enum PokemonDetailTypes {
  POKEMON_DETAIL_REQUEST = '@pokemonDetail/POKEMON_DETAIL_REQUEST',
  POKEMON_DETAIL_SUCCESS = '@pokemonDetail/POKEMON_DETAIL_SUCCESS',
  POKEMON_DETAIL_FAILURE = '@pokemonDetail/POKEMON_DETAIL_FAILURE',
}

/**
 * Data Types
 */
export type Ability = {
  name: string;
  isHidden: boolean;
};

export interface PokemonDetail {
  id: number;
  idText: string;
  name: string;
  specie: string;
  sprite: string;
  height: number;
  weight: number;
  genderRate: number;
  catchRate: number;
  hatchCounter: number;
  growthRate: number;
  description: string;
  types: string[];
  eggGroups: string[];
  abilities: Ability[];
}

export interface PokemonDetailList {
  [id: number]: PokemonDetail;
}

/**
 * State types
 */
export interface PokemonDetailState {
  pokemonDetailList: PokemonDetailList;
  loading: boolean;
  error: boolean;
}
