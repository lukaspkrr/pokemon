import React, {memo} from 'react';
import {
  Card,
  CardBackGroundImage,
  CardContent,
  CardHeader,
  CardImageContainer,
  PokemonId,
  PokemonIdContainer,
  PokemonImage,
  PokemonName,
  PokemonNameContainer,
  TypeContainer,
  TypeContent,
  TypeText,
} from './styles';

import PokeballOutline from '~/assets/images/pokeball-outline.png';
import {Pokemon} from '~/store/modules/pokemons/types';

interface PokemonCardComponentProp {
  pokemon: Pokemon;
  onSelectPokemon: (pokemon: Pokemon) => void;
}

const PokemonCardComponent: React.FC<PokemonCardComponentProp> = ({
  pokemon,
  onSelectPokemon,
}) => {
  return (
    <Card
      onPress={() => onSelectPokemon(pokemon)}
      pokemonType={pokemon.types?.[0]}>
      <CardBackGroundImage source={PokeballOutline}>
        <CardHeader>
          <PokemonNameContainer>
            <PokemonName>{pokemon.name || ''}</PokemonName>
          </PokemonNameContainer>
          <PokemonIdContainer>
            <PokemonId pokemonType={pokemon.types[0]}>
              {pokemon.idText}
            </PokemonId>
          </PokemonIdContainer>
        </CardHeader>
        <CardContent>
          <TypeContainer>
            {pokemon.types.map((type, i) => (
              <TypeContent key={String(i)}>
                <TypeText>{type}</TypeText>
              </TypeContent>
            ))}
          </TypeContainer>
          <CardImageContainer>
            <PokemonImage source={{uri: pokemon?.sprite}} />
          </CardImageContainer>
        </CardContent>
      </CardBackGroundImage>
    </Card>
  );
};

export default memo(PokemonCardComponent);
