import React from "react";
import Home from "../Screens/Home";
import UnitPage_1 from "../Screens/UnitPage_1";
import UnitPage_2 from "../Screens/UnitPage_2";
import PdfView from "../Screens/PdfView";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UnitPage_1" component={UnitPage_1} />
      <Stack.Screen name="UnitPage_2" component={UnitPage_2} />
      <Stack.Screen name="PdfView" component={PdfView} />
    </Stack.Navigator>
  );
};
