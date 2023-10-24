import styled from 'styled-components/native';
import {FlatList} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Pokemon} from '~/store/modules/pokemons/types';

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
  border-width: 1px;
  border-color: ${({theme}) =>
    theme.title === 'light' ? theme.highlight : theme.primary};
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

export const Flatlist = styled(FlatList<Pokemon>).attrs({
  contentContainerStyle: {
    paddingBottom: 20,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
})``;
