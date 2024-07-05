import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SettingsScreen} from 'screens/app-user/settings';
import {HomeScreen} from 'screens/app-user/home';
import {AppUserRoutes} from './app-user.navigator.enums';
import {AppUserRoutesParamList} from './app-user.navigator.types';

const Stack = createStackNavigator<AppUserRoutesParamList>();

export const AppUserNavigator = () => (
  <Stack.Navigator
    initialRouteName={AppUserRoutes.Home}
    screenOptions={{headerShown: false}}>
    <Stack.Screen
      component={HomeScreen}
      name={AppUserRoutes.Home}
      options={{headerShown: false}}
    />
    <Stack.Screen
      component={SettingsScreen}
      name={AppUserRoutes.Settings}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
