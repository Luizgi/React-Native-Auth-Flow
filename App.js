import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/Login';
import Register from './src/Register'
import RecoverPass from './src/RecoverPass';
import Home from './src/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
     <Stack.Screen name='Login' component={{Login}}/>
     <Stack.Screen name='Register' component={{Register}}/>
     <Stack.Screen name='RecoverPass' component={{Recover}}/>
     <Stack.Screen name = 'Home' component ={{Home}}/>
     </Stack.Navigator>
  </NavigationContainer>
  );
}

