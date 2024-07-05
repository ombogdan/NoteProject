import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SettingsScreen } from "screens/app-user/settings";
import { HomeScreen } from "screens/app-user/home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppUserRoutes } from "./app-user.navigator.enums";
import { AppUserRoutesParamList } from "./app-user.navigator.types";
import { AddNoteScreen } from "screens/app-user/add-note";

const Stack = createStackNavigator<AppUserRoutesParamList>();
const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
    <Tab.Screen name={AppUserRoutes.Home} component={HomeScreen} />
    <Tab.Screen name={AppUserRoutes.Settings} component={SettingsScreen} />
  </Tab.Navigator>
);

export const AppUserNavigator = () => (
  <Stack.Navigator
    initialRouteName={AppUserRoutes.HomeTab}
    screenOptions={{ headerShown: false }}>
    <Stack.Screen
      component={MainTabNavigator}
      name={AppUserRoutes.HomeTab}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={AddNoteScreen}
      name={AppUserRoutes.AddNote}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
