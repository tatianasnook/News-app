import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './Home';
import { FullPostScreen } from './FullPost';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "News"}}/>
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{title: "Article"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}