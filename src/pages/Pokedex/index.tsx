import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {PokemonsTypedSelector} from '~/store/modules/pokemons/reducer';
import {pokemonsRequest} from '~/store/modules/pokemons/action';

const Pokedex: React.FC = () => {
  const dispatch = useDispatch();

  const {data} = PokemonsTypedSelector(state => state.pokemons);

  useEffect(() => {
    if (data.pokemons.length <= 0) {
      dispatch(pokemonsRequest());
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text>Pokedex</Text>
    </View>
  );
};

export default Pokedex;
