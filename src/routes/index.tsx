import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Moves, Abilities, Items, Locations} from '~/pages';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useTheme} from 'styled-components/native';
import PokedexStack from './pokedexStack';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const {secundary} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: secundary,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="PokedexStack"
        component={PokedexStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="catching-pokemon" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Moves"
        component={Moves}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="wind-power" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Abilities"
        component={Abilities}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="thunderstorm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Items"
        component={Items}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="all-inbox" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="location-pin" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
