import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { LoginScreen } from "screens/auth/login";
import { AuthRoutes } from "./auth.navigator.enums";
import { AuthRoutesParamList } from "./auth.navigator.types";

const Stack = createStackNavigator<AuthRoutesParamList>();

export const AuthNavigator = () => {

  return (
    <Stack.Navigator
      initialRouteName={AuthRoutes.Login}
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid
      }}
    >
      <Stack.Screen
        component={LoginScreen}
        name={AuthRoutes.Login}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
