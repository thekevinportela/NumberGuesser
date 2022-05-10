import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import GameScreen from "../screens/GameScreen";
import StartGame from "../screens/StartGame";

interface MainProps {}

const Stack = createNativeStackNavigator();

export const Main: React.FC<MainProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="StartGame"
        component={StartGame}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameScreen"
        component={GameScreen}
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack.Navigator>
  );
};
