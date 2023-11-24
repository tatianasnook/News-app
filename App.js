import { HomeScreen } from './screens/Home';
import React from 'react';
import { FullPostScreen } from './screens/FullPost';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "News"}}/>
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{title: "Article"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
