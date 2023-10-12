import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokedexHome, PokemonDetail} from '~/pages';
import {useTheme} from 'styled-components/native';
import {DarkModeButtonComponent} from '~/components';
import {Pokemon} from '~/store/modules/pokemons/types';

export type PokedexStackParamList = {
  PokedexHome: undefined;
  PokemonDetail: {
    pokemon?: Pokemon;
  };
};

const Stack = createNativeStackNavigator<PokedexStackParamList>();

const HomeStack: React.FC = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.secundary,
        },
        headerShadowVisible: false,
        headerTintColor: theme.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <DarkModeButtonComponent />,
        headerBackTitleVisible: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="PokedexHome"
        component={PokedexHome}
        options={{
          headerTitle: 'Pokedex',
        }}
      />
      <Stack.Screen
        name="PokemonDetail"
        component={PokemonDetail}
        options={({route}) => ({
          headerTitle: '',
          headerStyle: {
            backgroundColor:
              theme[route.params?.pokemon?.types?.[0] || theme.normal],
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
