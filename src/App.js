import 'react-native-gesture-handler';
import React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { appRoutes, appInitialRoutes } from './routes';

// create stack
const Stack = createStackNavigator();

// root component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={appInitialRoutes} screenOptions={{
        headerShown: false
      }}>
        {appRoutes.map((route, index) => (
          <Stack.Screen key={index} name={route.name} component={route.component} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default registerRootComponent(App);