import {combineReducers} from '@reduxjs/toolkit';

import pokemons from './pokemons/reducer';

export default combineReducers({
  pokemons,
});
