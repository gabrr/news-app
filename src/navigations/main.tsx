import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main, Details } from '../screens';
import { Colors } from '../styles';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="News"
          component={Main}
          options={{
            animationEnabled: true,
            headerTintColor: Colors.BLACK,
            headerTitleStyle: {
              fontWeight: "700",
              fontSize: 17,
            },
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
)}

export default MainNavigator