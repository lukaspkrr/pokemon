import {darken, rgba} from 'polished';
import styled from 'styled-components/native';
import {PokemonTypesTheme} from '~/styles/types';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.primary};
`;

export const InputContainer = styled.Pressable`
  flex-direction: row;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  align-items: center;
  background-color: ${({theme}) => theme.secundary};
`;

export const SearchInput = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.highlight,
  selectionColor: theme.text,
}))`
  flex: 1;
  margin-left: 5px;
  font-size: 18px;
  color: ${({theme}) => theme.text};
`;

export const MaterialIcon = styled(MaterialIcons)`
  color: ${({theme}) => theme.highlight};
`;

interface CleanButtonProp {
  readonly visible?: boolean;
}
export const CleanButton = styled.TouchableOpacity<CleanButtonProp>`
  display: ${({visible}) => (visible ? 'flex' : 'none')};
`;

export const Flatlist = styled.FlatList.attrs({
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
})``;

interface CardProp {
  pokemonType?: keyof PokemonTypesTheme;
}
export const Card = styled.TouchableOpacity<CardProp>`
  flex: 1;
  margin: 5px;
  border-radius: 10px;
  background-color: ${({theme, pokemonType}) =>
    theme[pokemonType || theme.normal]};
`;

export const CardBackGroundImage = styled.ImageBackground.attrs(({theme}) => ({
  imageStyle: {
    resizeMode: 'cover',
    height: 120,
    width: 120,
    top: 25,
    left: '45%',
    transform: [{rotate: '20deg'}],
    tintColor: rgba(theme.white, 0.3),
  },
}))`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  border-radius: 10px;
  min-height: 120px;
`;

export const CardTextColumn = styled.View`
  justify-content: flex-start;
  padding: 25px 0 0px 5px;
`;

export const PokemonName = styled.Text`
  color: ${({theme}) => theme.white};
  text-transform: capitalize;
  font-size: 16px;
  font-weight: bold;
`;

export const TypeContainer = styled.View`
  align-self: flex-start;
  background-color: ${({theme}) => rgba(theme.white, 0.3)};
  padding: 2px 10px;
  border-radius: 10px;
  margin: 2px 0px;
`;

export const TypeText = styled.Text`
  color: ${({theme}) => theme.white};
  text-transform: capitalize;
  font-weight: bold;
`;

export const CardImageColumn = styled.View`
  justify-content: space-between;
`;
interface PokemonIdProps {
  pokemonType?: keyof PokemonTypesTheme;
}
export const PokemonId = styled.Text<PokemonIdProps>`
  color: ${({pokemonType, theme}) =>
    darken(0.2, theme[pokemonType || theme.white])};
  font-size: 14px;
  font-weight: bold;
  align-self: flex-end;
  padding: 10px 5px 0 0;
`;

export const PokemonImage = styled.Image`
  width: 80px;
  height: 80px;
`;
