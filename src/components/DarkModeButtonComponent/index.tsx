import React, {useContext} from 'react';

import {Container, DarkModeButton} from './styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {useTheme} from 'styled-components/native';
import {ThemeToggleContext} from '~/styles';

const DarkModeButtonComponent: React.FC = () => {
  const {toggleTheme} = useContext(ThemeToggleContext);
  const {title, text} = useTheme();

  return (
    <Container>
      <DarkModeButton onPress={toggleTheme}>
        <Ionicons
          name={title === 'dark' ? 'moon-outline' : 'sunny-outline'}
          size={25}
          color={text}
        />
      </DarkModeButton>
    </Container>
  );
};

export default DarkModeButtonComponent;
