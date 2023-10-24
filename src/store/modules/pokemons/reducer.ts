import {useSelector, TypedUseSelectorHook} from 'react-redux';

import {PokemonsState, PokemonsActionTypes} from './types';

export interface RootState {
  pokemons: PokemonsState;
}

export const PokemonsTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector;

const INITIAL_STATE: PokemonsState = {
  data: {
    currentPage: 0,
    totalPages: 0,
    pokemonQtd: 0,
    pokemonList: [],
    paginatedPokemonDetailedList: {},
  },
  loading: false,
  error: false,
};

export default function pokemons(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case PokemonsActionTypes.POKEMON_LIST_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PokemonsActionTypes.POKEMON_LIST_SUCCESS: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.data,
        },
      };
    }
    case PokemonsActionTypes.POKEMON_LIST_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case PokemonsActionTypes.POKEMON_PAGE_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PokemonsActionTypes.POKEMON_PAGE_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          paginatedPokemonDetailedList: {
            ...state.data.paginatedPokemonDetailedList,
            [action.payload.page]: action.payload.data,
          },
        },
      };
    }
    default:
      return state;
  }
}
