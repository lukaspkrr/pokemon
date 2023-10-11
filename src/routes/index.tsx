import React from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pokedex} from '../pages';

const Tab = createBottomTabNavigator();

const Routes = () => (
  <Tab.Navigator>
    <Tab.Screen name="Pokedex" component={Pokedex} />
    {/* Moves
        Abilities
        Items
        Locations */}
  </Tab.Navigator>
);

export default Routes;
