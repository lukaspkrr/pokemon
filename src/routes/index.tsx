import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pokedex, Moves, Abilities, Items, Locations} from '~/pages';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {DarkModeButtonComponent} from '~/components';

import {useTheme} from 'styled-components/native';

const Tab = createBottomTabNavigator();

const Routes = () => {
  const {secundary, text} = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: secundary,
        },
        headerShadowVisible: false,
        headerTintColor: text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerRight: () => <DarkModeButtonComponent />,

        tabBarStyle: {
          backgroundColor: secundary,
          borderTopWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
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
