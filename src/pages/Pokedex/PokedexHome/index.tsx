import React, {useEffect, useMemo, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {
  Card,
  CardBackGroundImage,
  CardImageColumn,
  CardTextColumn,
  Container,
  Flatlist,
  InputContainer,
  PokemonId,
  PokemonImage,
  PokemonName,
  MaterialIcon,
  SearchInput,
  TypeContainer,
  TypeText,
  CleanButton,
} from './styles';
import {useDispatch} from 'react-redux';
import {PokemonsTypedSelector} from '~/store/modules/pokemons/reducer';
import {pokemonsRequest} from '~/store/modules/pokemons/action';

import Pokeball from '~/assets/images/pokeball.png';
import {Pokemon} from '~/store/modules/pokemons/types';
import {NavigationProp} from '@react-navigation/native';
import {PokedexStackParamList} from '~/routes/pokedexStack';

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
    if (data.pokemons.length <= 0) {
      dispatch(pokemonsRequest());
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
        data={data.pokemons}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            onPress={() => openPokemonDetail(item)}
            pokemonType={item.types?.[0]}>
            <CardBackGroundImage
              source={Pokeball}
              pokemonType={item.types?.[0]}>
              <CardTextColumn>
                <PokemonName>{item.name || ''}</PokemonName>
                {item?.types.map((type: string, i: number) => (
                  <TypeContainer key={String(i)}>
                    <TypeText>{type}</TypeText>
                  </TypeContainer>
                ))}
              </CardTextColumn>
              <CardImageColumn>
                <PokemonId pokemonType={item.types?.[0]}>
                  {item.idText}
                </PokemonId>
                <PokemonImage source={{uri: item?.sprite}} />
              </CardImageColumn>
            </CardBackGroundImage>
          </Card>
        )}
      />
    </Container>
  );
};

export default PokedexHome;
