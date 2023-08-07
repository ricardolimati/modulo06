import * as React from 'react';
import {View, Text} from 'react-native';
import {
  NavigationContainer
} from '@react-navigation/native';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';

import Main, {OptionsMain} from './pages/Main';
import User, {OptionsUser} from "./pages/User";

const Stack = createNativeStackNavigator();
const optionsMain = OptionsMain();
const optionsUser = OptionsUser();
console.tron.log(optionsMain);

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Usuários" component={Main}
          options={optionsMain} />
        <Stack.Screen name="User" component={User}
          options={optionsUser}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
