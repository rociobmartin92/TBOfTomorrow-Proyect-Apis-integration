import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BeerDetail from '../screens/BeerDetail';

const Stack = createNativeStackNavigator();
const RootNav = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="beerDetail" component={BeerDetail} />
    </Stack.Navigator>
  );
};

export default RootNav;
