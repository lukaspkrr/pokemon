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

const Pokedex: React.FC = () => {
  const dispatch = useDispatch();

  const {data} = PokemonsTypedSelector(state => state.pokemons);

  const searchInputRef = useRef<TextInput>(null);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (data.pokemons.length <= 0) {
      dispatch(pokemonsRequest());
    }
  }, []);

  const existSearchText = useMemo(() => {
    return searchText?.length > 0;
  }, [searchText]);

  // Clean InputValue if exist
  const onCleanInput = () => {
    if (existSearchText) {
      setSearchText('');
    }
  };

  const onTouchInputContainer = () => {
    searchInputRef.current?.focus();
  };

  return (
    <Container>
      <InputContainer onPress={onTouchInputContainer}>
        <>
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
        </>
      </InputContainer>
      <Flatlist
        data={data.pokemons}
        numColumns={2}
        renderItem={({item}) => (
          <Card pokemonType={item.types?.[0]}>
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

export default Pokedex;
