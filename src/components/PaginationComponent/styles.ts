import {rgba} from 'polished';
import Icons from 'react-native-vector-icons/FontAwesome6';
import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => rgba(theme.secundary, 0.9)};
  flex-direction: row;
  align-items: center;
  border-radius: 50px;
  padding: 5px;
  border-width: ${({theme}) => (theme.title === 'dark' ? '0px' : '0.5px')};
  border-color: ${({theme}) => theme.highlight};
`;

export const ItemsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const PageIndicatorText = styled.Text`
  flex: 1;
  text-align: center;
  color: ${({theme}) => theme.text};
  font-size: 18px;
  font-weight: bold;
`;

export const ActionButton = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  min-height: 30px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.text};
  font-weight: bold;
`;

interface FontAwesomeProps {
  readonly disabled?: boolean;
}
export const FontAwesome = styled(Icons).attrs({
  size: 18,
})<FontAwesomeProps>`
  color: ${({theme, disabled}) =>
    disabled ? rgba(theme.text, 0.3) : theme.text};
`;

export const Separator = styled.View`
  background-color: ${({theme}) => theme.highlight};
  width: 1px;
  border-radius: 1px;
  height: 20px;
`;
