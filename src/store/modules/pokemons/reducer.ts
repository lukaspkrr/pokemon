import {useSelector, TypedUseSelectorHook} from 'react-redux';

import {PokemonsState, PokemonsActionTypes} from './types';

interface RootState {
  pokemons: PokemonsState;
}

export const PokemonsTypedSelector: TypedUseSelectorHook<RootState> =
  useSelector;

const INITIAL_STATE: PokemonsState = {
  data: {
    next: null,
    previous: null,
    pokemons: [],
  },
  loading: false,
  error: false,
};

export default function pokemons(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case PokemonsActionTypes.POKEMONS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case PokemonsActionTypes.POKEMONS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    }
    case PokemonsActionTypes.POKEMONS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
}
