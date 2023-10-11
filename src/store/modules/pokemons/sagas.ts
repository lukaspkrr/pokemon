import {takeLatest, call, put, all} from 'redux-saga/effects';

import {AxiosResponse} from 'axios';
import {Api} from '~/services';

import {PokemonsData, PokemonsActionTypes} from './types';

import {pokemonsSuccess, pokemonsFailure} from './action';
import {idToText} from '~/utils';

export function* getPokemonList() {
  try {
    const pokemonsList: AxiosResponse = yield call(Api.get, '/pokemon');
    console.tron.log('POKE DATA', pokemonsList);
    let dataToSave: PokemonsData = {
      next: pokemonsList.data.next,
      previous: pokemonsList.data.previous,
      pokemons: [],
    };

    const value: AxiosResponse[] = yield all(
      pokemonsList.data?.results.map((e: {url: string}) => {
        let pokeId = e.url.split('pokemon/')[1];
        return call(Api.get, `/pokemon/${pokeId}`);
      }),
    );

    const pokeData = value?.map(element => ({
      id: element.data.id,
      idText: idToText(element.data.id),
      name: element.data.name,
      sprite: element.data.sprites.other['official-artwork'].front_default,
      types: element.data.types.map((el: {type: {name: any}}) => el.type.name),
    }));

    dataToSave.pokemons = pokeData;

    yield put(pokemonsSuccess(dataToSave));
  } catch (error) {
    yield put(pokemonsFailure());
  }
}

export default all([
  takeLatest(PokemonsActionTypes.POKEMONS_REQUEST, getPokemonList),
]);
