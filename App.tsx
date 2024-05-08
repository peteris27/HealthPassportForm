import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PersonalDataScreen from "./screens/PersonalData";
import FirstNameScreen from "./screens/FirstName";
import GenderScreem from "./screens/Gender";
import EmailScreen from "./screens/Email";
import BirthDateScreen from "./screens/BirthDate";
import HeightScreen from "./screens/Height";
import { PersonalDataProvider } from "./components/PersonalDataProvider";

type RootStackParamList = {
  PersonalDataScreen: { firstName?: string };
  FirstNameScreen: undefined;
  GenderScreen: undefined;
  EmailScreen: undefined;
  BirthDateScreen: undefined;
  HeightScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <PersonalDataProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PersonalDataScreen">
          <Stack.Screen
            name="PersonalDataScreen"
            component={PersonalDataScreen}
            options={{ title: "My Personal Data" }}
          />
          <Stack.Screen
            name="FirstNameScreen"
            component={FirstNameScreen}
            options={{ title: "First Name" }}
          />
          <Stack.Screen
            name="GenderScreen"
            component={GenderScreem}
            options={{ title: "Gender" }}
          />
          <Stack.Screen
            name="BirthDateScreen"
            component={BirthDateScreen}
            options={{ title: "BirthDate" }}
          />
          <Stack.Screen
            name="HeightScreen"
            component={HeightScreen}
            options={{ title: "Height" }}
          />
          <Stack.Screen
            name="EmailScreen"
            component={EmailScreen}
            options={{ title: "Email" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PersonalDataProvider>
  );
};

export default App;
