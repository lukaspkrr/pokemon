import React, {useEffect, useMemo, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {
  Container,
  Flatlist,
  InputContainer,
  MaterialIcon,
  SearchInput,
  CleanButton,
  Pagination,
} from './styles';
import {useDispatch} from 'react-redux';
import {PokemonsTypedSelector} from '~/store/modules/pokemons/reducer';
import {
  pokemonListRequest,
  pokemonPageRequest,
} from '~/store/modules/pokemons/action';

import {Pokemon} from '~/store/modules/pokemons/types';
import {NavigationProp} from '@react-navigation/native';
import {PokedexStackParamList} from '~/routes/pokedexStack';
import {PokemonCardComponent} from './components';

interface PokedexHomeProps {
  navigation: NavigationProp<PokedexStackParamList>;
}
const PokedexHome: React.FC<PokedexHomeProps> = ({navigation}) => {
  const dispatch = useDispatch();

  const {data} = PokemonsTypedSelector(state => state.pokemons);

  const searchInputRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // Get pokemons if dont exist in redux persist
    if (data.pokemonList.length <= 0) {
      dispatch(pokemonListRequest());
    } else {
      dispatch(pokemonPageRequest(data.currentPage));
    }
  }, []);

  // Verify if user typed in the search input
  const existSearchText = useMemo(() => {
    return searchText?.length > 0;
  }, [searchText]);

  // Clean InputValue if exist
  const onCleanInput = () => {
    if (existSearchText) {
      setSearchText('');
    }
  };

  // If user click outside Input
  const onTouchInputContainer = () => {
    searchInputRef.current?.focus();
  };

  // When select pokemon
  const openPokemonDetail = (pokemon: Pokemon) => {
    navigation.navigate('PokemonDetail', {pokemon});
  };

  const onPreviousPage = () => {
    dispatch(pokemonPageRequest(data.currentPage - 1));
  };

  const onNextPage = () => {
    dispatch(pokemonPageRequest(data.currentPage + 1));
  };

  return (
    <Container>
      <InputContainer onPress={onTouchInputContainer}>
        <MaterialIcon name="search" size={25} />
        <SearchInput
          ref={searchInputRef}
          onChangeText={setSearchText}
          value={searchText}
          maxLength={40}
          placeholder="Search Pokemon"
        />
        <CleanButton
          onPress={onCleanInput}
          visible={existSearchText}
          disabled={!existSearchText}>
          <MaterialIcon name="close" size={25} />
        </CleanButton>
      </InputContainer>
      <Flatlist
        data={data.currentPageData}
        extraData={data.currentPageData}
        keyExtractor={item => String(item.id)}
        numColumns={2}
        renderItem={({item}) => (
          <PokemonCardComponent
            pokemon={item}
            onSelectPokemon={openPokemonDetail}
          />
        )}
      />
      <Pagination
        page={data.currentPage}
        totalPages={data.totalPages}
        onPreviousPage={onPreviousPage}
        onNextPage={onNextPage}
      />
    </Container>
  );
};

export default PokedexHome;
