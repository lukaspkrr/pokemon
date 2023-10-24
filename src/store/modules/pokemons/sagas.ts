import {takeLatest, call, put, all, select} from 'redux-saga/effects';

import {AxiosResponse} from 'axios';
import {Api} from '~/services';

import {
  PokemonsActionTypes,
  PokemonIdentifier,
  Pokemon,
  PokemonsState,
} from './types';

import {
  pokemonListSuccess,
  pokemonListFailure,
  pokemonPageSuccess,
  pokemonPageFailue,
  pokemonPageRequest,
} from './action';
import {formatId} from '~/utils';
import {PayloadAction} from '@reduxjs/toolkit';

// Max qtd pokemons for search
const LIMIT_VALUE = 1500;

export const POKEMON_PAGE_SIZE = 20;

interface PokemonResponse {
  count: number;
  next: string;
  previous: string;
  results: [
    {
      name: string;
      url: string;
    },
  ];
}

export function* getPokemonList() {
  try {
    const {data: responseData}: AxiosResponse<PokemonResponse> = yield call(
      Api.get,
      '/pokemon',
      {
        params: {
          limit: LIMIT_VALUE,
        },
      },
    );

    const pokemonList: PokemonIdentifier[] = responseData.results?.map(
      result => {
        const splitUrl = result.url.split('/');
        const id = Number(splitUrl[splitUrl.length - 2]);
        return {
          id,
          idText: formatId(id),
          name: result.name,
        };
      },
    );

    const data = {
      currentPage: 0,
      totalPages: Math.ceil(responseData.count / POKEMON_PAGE_SIZE),
      pokemonQtd: responseData.count,
      pokemonList,
    };

    yield put(pokemonListSuccess(data));
    yield put(pokemonPageRequest(0));
  } catch (error) {
    yield put(pokemonListFailure());
  }
}

export function* getPokemonPage({payload}: PayloadAction<{page: number}>) {
  try {
    const {data: reducerData}: PokemonsState = yield select(
      state => state.pokemons,
    );

    if (!reducerData.paginatedPokemonDetailedList?.[payload.page]) {
      const firstId = payload.page * POKEMON_PAGE_SIZE;
      const lastId = firstId + POKEMON_PAGE_SIZE;

      const pokemonList = reducerData.pokemonList.slice(firstId, lastId);

      let detailedPokemonList: Pokemon[] = [];

      yield Promise.all(
        pokemonList.map(async pokemon => {
          const {data: detailPokemon}: AxiosResponse = await Api.get(
            `/pokemon/${pokemon.id}`,
          );

          const pokeData: Pokemon = {
            id: detailPokemon.id,
            idText: formatId(detailPokemon.id),
            name: detailPokemon.name,
            sprite:
              detailPokemon.sprites.other['official-artwork'].front_default,
            types: detailPokemon.types.map(
              (el: {type: {name: any}}) => el.type.name,
            ),
            height: detailPokemon.height,
            weight: detailPokemon.weight,
            abilities: detailPokemon.abilities?.map((el: any) => ({
              name: el?.ability.name,
              isHidden: el?.is_hidden,
            })),
          };

          detailedPokemonList.push(pokeData);
        }),
      );

      yield put(pokemonPageSuccess(payload.page, detailedPokemonList));
    } else {
      yield put(
        pokemonPageSuccess(
          payload.page,
          reducerData.paginatedPokemonDetailedList[payload.page],
        ),
      );
    }
  } catch (error) {
    yield put(pokemonPageFailue());
  }
}

export default all([
  takeLatest(PokemonsActionTypes.POKEMON_LIST_REQUEST, getPokemonList),
  takeLatest(PokemonsActionTypes.POKEMON_PAGE_REQUEST, getPokemonPage),
]);
