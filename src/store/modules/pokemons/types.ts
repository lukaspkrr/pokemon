/**
 * Action types
 */
export enum PokemonsActionTypes {
  POKEMONS_REQUEST = '@pokemons/POPKEMONS_REQUEST',
  POKEMONS_SUCCESS = '@pokemons/POPKEMONS_SUCCESS',
  POKEMONS_FAILURE = '@pokemons/POPKEMONS_FAILURE',
}

/**
 * Data Types
 */
export interface Pokemon {
  id: number;
  idText: string | null;
  name: string | null;
  sprite: string | null;
  types: string[];
}

export interface PokemonsData {
  next: string | null;
  previous: string | null;
  pokemons: Pokemon[];
}

/**
 * State types
 */
export interface PokemonsState {
  data: PokemonsData;
  loading: boolean;
  error: boolean;
}
