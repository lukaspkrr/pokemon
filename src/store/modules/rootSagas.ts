import {all} from 'redux-saga/effects';

import pokemons from './pokemons/sagas';

export default function* rootSaga(): Generator {
  return yield all([pokemons]);
}
