import {PokemonsActionTypes, PokemonsData} from './types';

export function pokemonsRequest() {
  return {
    type: PokemonsActionTypes.POKEMONS_REQUEST,
  };
}

export function pokemonsSuccess(data: PokemonsData) {
  return {
    type: PokemonsActionTypes.POKEMONS_SUCCESS,
    payload: {
      data,
    },
  };
}

export function pokemonsFailure() {
  return {
    type: PokemonsActionTypes.POKEMONS_FAILURE,
  };
}
