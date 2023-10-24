import {darken, rgba} from 'polished';
import styled from 'styled-components/native';
import {PokemonTypesEnum} from '~/styles/types';

interface CardProp {
  pokemonType?: PokemonTypesEnum;
}
export const Card = styled.TouchableOpacity<CardProp>`
  flex: 1;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({theme, pokemonType}) =>
    theme[pokemonType || theme.normal]};
`;

export const CardHeader = styled.View`
  flex-direction: row;
  padding: 5px;
  align-items: flex-start;
`;

export const PokemonNameContainer = styled.View`
  flex: 1;
`;

export const PokemonName = styled.Text`
  color: ${({theme}) => theme.white};
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

export const PokemonIdContainer = styled.View``;

interface PokemonIdProps {
  pokemonType?: PokemonTypesEnum;
}
export const PokemonId = styled.Text<PokemonIdProps>`
  color: ${({pokemonType, theme}) =>
    darken(0.2, theme[pokemonType || theme.white])};
  font-size: 14px;
  font-weight: bold;
`;

export const CardContent = styled.View``;

export const TypeContainer = styled.View`
  padding: 5px;
`;

export const TypeContent = styled.View`
  align-self: flex-start;
  background-color: ${({theme}) => rgba(theme.white, 0.2)};
  padding: 2px 10px;
  border-radius: 10px;
  margin: 5px 0px;
`;

export const TypeText = styled.Text`
  color: ${({theme}) => theme.white};
  text-transform: capitalize;
  font-weight: bold;
`;

export const CardImageContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PokemonImage = styled.Image`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 80px;
`;

export const CardBackGroundImage = styled.ImageBackground.attrs(({theme}) => ({
  imageStyle: {
    resizeMode: 'cover',
    height: 120,
    width: 120,
    top: 25,
    left: '45%',
    transform: [{rotate: '20deg'}],
    tintColor: rgba(theme.white, 0.2),
  },
}))`
  flex: 1;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
  height: 120px;
`;
