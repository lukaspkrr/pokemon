import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pokedex, Moves} from '../pages';

import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Pokedex"
      component={Pokedex}
      options={{
        tabBarLabelStyle: {
          color: '#000',
        },
        tabBarIcon: () => (
          <Icon name="catching-pokemon" color="#000" size={24} />
        ),
      }}
    />
    <Tab.Screen
      name="Moves"
      component={Moves}
      options={{
        tabBarLabelStyle: {
          color: '#000',
        },
        tabBarIcon: () => <Icon name="thunderstorm" color="#000" size={24} />,
      }}
    />
    {/* Moves
        Abilities
        Items
        Locations */}
  </Tab.Navigator>
);

export default Routes;
