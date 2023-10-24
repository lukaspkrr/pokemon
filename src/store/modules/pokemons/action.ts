import {Pokemon, PokemonsActionTypes, PokemonsData} from './types';

export function pokemonListRequest() {
  return {
    type: PokemonsActionTypes.POKEMON_LIST_REQUEST,
  };
}

export function pokemonListSuccess(data: PokemonsData) {
  return {
    type: PokemonsActionTypes.POKEMON_LIST_SUCCESS,
    payload: {
      data,
    },
  };
}

export function pokemonListFailure() {
  return {
    type: PokemonsActionTypes.POKEMON_LIST_FAILURE,
  };
}

export function pokemonPageRequest(page: number) {
  return {
    type: PokemonsActionTypes.POKEMON_PAGE_REQUEST,
    payload: {
      page,
    },
  };
}

export function pokemonPageSuccess(page: number, data: Pokemon[]) {
  return {
    type: PokemonsActionTypes.POKEMON_PAGE_SUCCESS,
    payload: {
      page,
      data,
    },
  };
}

export function pokemonPageFailue() {
  return {
    type: PokemonsActionTypes.POKEMON_PAGE_FAILURE,
  };
}
