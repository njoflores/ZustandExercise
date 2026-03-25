import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CounterScreen from './src/screens/CounterScreen';
import ThemeScreen from './src/screens/ThemeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Counter">
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Theme" component={ThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;