import {PokemonTypesEnum} from '~/styles/types';

/**
 * Action types
 */
export enum PokemonsActionTypes {
  POKEMON_LIST_REQUEST = '@pokemons/POKEMON_LIST_REQUEST',
  POKEMON_LIST_SUCCESS = '@pokemons/POKEMON_LIST_SUCCESS',
  POKEMON_LIST_FAILURE = '@pokemons/POKEMON_LIST_FAILURE',

  POKEMON_PAGE_REQUEST = '@pokemons/POKEMON_PAGE_REQUEST',
  POKEMON_PAGE_SUCCESS = '@pokemons/POKEMON_PAGE_SUCCESS',
  POKEMON_PAGE_FAILURE = '@pokemons/POKEMON_PAGE_FAILURE',
}

/**
 * Data Types
 */
export interface PokemonAbilities {
  name: string;
  isHidden: boolean;
}

export interface PokemonIdentifier {
  id: number;
  idText: string | null;
  name: string;
}
export interface Pokemon extends PokemonIdentifier {
  sprite: string;
  types: PokemonTypesEnum[];
  height: number;
  weight: number;
  abilities: PokemonAbilities[];
}

export interface PaginatedPokemonDetailedList {
  [page: number]: Pokemon[];
}

export interface PokemonsData {
  currentPage: number;
  totalPages: number;
  pokemonQtd: number;
  pokemonList: PokemonIdentifier[];
  paginatedPokemonDetailedList?: PaginatedPokemonDetailedList;
}

/**
 * State types
 */
export interface PokemonsState {
  data: PokemonsData;
  loading: boolean;
  error: boolean;
}
