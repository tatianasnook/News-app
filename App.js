import { HomeScreen } from './screens/Home';
import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FullPostScreen } from './screens/FullPost';
import { Navigation } from 'react-native-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppNavigation } from './screens/AppNavigation';

export default function App() {
  
  return <AppNavigation/>
}
