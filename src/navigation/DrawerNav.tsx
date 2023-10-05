import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RootNav from './RootNav';
import Contact from '../screens/Contact';

const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerContentStyle: {backgroundColor: 'black'},
        headerTitle: '',
        headerTintColor: 'white',
        headerTransparent: true,
      }}>
      <Drawer.Screen
        options={{
          title: 'Home',
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: 'white',
          drawerInactiveBackgroundColor: 'black',
          drawerActiveBackgroundColor: 'black',
          drawerLabelStyle: {fontSize: 22},
        }}
        name="rootNav"
        component={RootNav}
      />
      <Drawer.Screen
        options={{
          title: 'Contacto',
          drawerInactiveTintColor: 'white',
          drawerActiveTintColor: 'white',
          drawerInactiveBackgroundColor: 'black',
          drawerActiveBackgroundColor: 'black',
          drawerLabelStyle: {fontSize: 22},
        }}
        name="contact"
        component={Contact}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNav;
