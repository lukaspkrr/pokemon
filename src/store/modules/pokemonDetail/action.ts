import {Pokemon} from '../pokemons/types';
import {PokemonDetailTypes, PokemonDetail} from './types';

export function pokemonDetailRequest(pokemon: Pokemon) {
  return {
    type: PokemonDetailTypes.POKEMON_DETAIL_REQUEST,
    payload: {
      pokemon,
    },
  };
}

export function pokemonDetailSuccess(data: PokemonDetail) {
  return {
    type: PokemonDetailTypes.POKEMON_DETAIL_SUCCESS,
    payload: {
      data,
    },
  };
}

export function pokemonDetailFailure() {
  return {
    type: PokemonDetailTypes.POKEMON_DETAIL_FAILURE,
  };
}
