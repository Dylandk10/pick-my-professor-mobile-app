/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainPage from './components/mainPage';
import SignUp from './components/signup';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
        name="Signup"
        component={SignUp}
        />
      <Stack.Screen 
        name="MainPage"
        component={MainPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
