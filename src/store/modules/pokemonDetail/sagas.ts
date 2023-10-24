import {takeLatest, call, put, all, select} from 'redux-saga/effects';
import {PayloadAction} from '@reduxjs/toolkit';

import {AxiosResponse} from 'axios';
import {Api} from '~/services';

import {PokemonDetail, PokemonDetailState, PokemonDetailTypes} from './types';

import {pokemonDetailSuccess, pokemonDetailFailure} from './action';
// import {navigate} from '~/services/NavigationService';
import {formatId} from '~/utils';
import {Pokemon} from '../pokemons/types';

export function* getPokemonDetail({
  payload,
}: PayloadAction<{pokemon: Pokemon}>) {
  const {pokemon} = payload;
  const {pokemonDetailList}: PokemonDetailState = yield select(
    state => state.pokemonDetail,
  );

  try {
    if (!pokemonDetailList?.[pokemon.id]) {
      const {data: specie}: AxiosResponse = yield call(
        Api.get,
        `/pokemon-species/${pokemon.id}`,
      );

      //   let idEvolution = specie.evolution_chain.url.split('evolution-chain/')[1];

      //   const {data: evolution}: AxiosResponse = yield call(
      //     Api.get,
      //     `/evolution-chain/${idEvolution}`,
      //    );

      let specieType = specie.genera?.find(
        (el: any) => el.language.name === 'en',
      );

      const toSaveData: PokemonDetail = {
        id: pokemon.id,
        idText: formatId(pokemon.id),
        name: pokemon.name,
        specie: specieType?.genus?.replace('Pokémon', ''),
        sprite: pokemon.sprite,
        height: pokemon.height,
        weight: pokemon.weight,
        genderRate: specie?.gender_rate,
        catchRate: specie?.capture_rate,
        hatchCounter: specie.hatch_counter,
        growthRate: specie?.growth_rate?.name,
        description: specie?.flavor_text_entries?.[0]?.flavor_text?.replace(
          /(\r\n|\n|\r|\f)/gm,
          ' ',
        ),
        types: pokemon.types,
        eggGroups: specie?.egg_groups?.map((el: {name: string}) => el?.name),
        abilities: pokemon?.abilities,
        // evolutionChain: formatEvolutionChain(evolution),
      };
      yield put(pokemonDetailSuccess(toSaveData));
      //   navigate('PokemonDetail');
    }
  } catch (error) {
    yield put(pokemonDetailFailure());
  }
}

export default all([
  takeLatest(PokemonDetailTypes.POKEMON_DETAIL_REQUEST, getPokemonDetail),
]);
