import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Main } from '../screens';
import { Colors } from '../styles';

const Stack = createStackNavigator();



const MainNavigator = () => (
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
    </Stack.Navigator>
  </NavigationContainer>
    
)

export default MainNavigator