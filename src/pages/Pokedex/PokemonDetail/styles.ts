import {rgba} from 'polished';
import {TabBar} from 'react-native-tab-view';
import styled from 'styled-components/native';
import {PokemonTypesTheme} from '~/styles/types';

interface ContainerProps {
  pokemonType?: keyof PokemonTypesTheme;
}
export const Container = styled.SafeAreaView<ContainerProps>`
  flex: 1;
  background-color: ${({theme, pokemonType}) =>
    theme[pokemonType || theme.normal]};
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const View = styled.View``;

export const PokemonName = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: 30px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TypeContainer = styled.View`
  flex-direction: row;
`;

export const TypeContent = styled.View`
  align-self: flex-start;
  background-color: ${({theme}) => rgba(theme.white, 0.3)};
  padding: 2px 10px;
  border-radius: 10px;
  margin: 5px 5px 0 0;
`;

export const PokemonType = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const PokemonId = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: 16px;
  font-weight: bold;
`;

export const PokemonContainer = styled.View`
  align-items: center;
  height: 150px;
  z-index: 10;
`;

export const PokeballImage = styled.ImageBackground.attrs(({theme}) => ({
  imageStyle: {
    resizeMode: 'cover',
    height: 290,
    width: 290,
    top: -35,
    left: '13%',
    transform: [{rotate: '20deg'}],
    tintColor: rgba(theme.white, 0.3),
  },
}))`
  overflow: hidden;
  height: 150px;
  width: 100%;
`;

export const PokemonSprite = styled.Image`
  position: absolute;
  width: 220px;
  height: 220px;
  top: -20px;
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.secundary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 30px 0 0 0;
`;

export const RNTabBar = styled(TabBar).attrs(({theme}) => ({
  indicatorStyle: {
    backgroundColor: theme.text,
  },
  labelStyle: {
    color: theme.text,
    fontSize: 13,
    textTransform: 'capitalize',
    fontWeight: 'bold',
  },
  activeColor: theme.text,
  inactiveColor: rgba(theme.text, 0.4),
}))`
  background-color: transparent;
`;
