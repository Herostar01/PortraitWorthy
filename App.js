import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/auth/Home';

const Stack = createStackNavigator();
export default function App() {

  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="home" 
            component={Home} 
            options={{  headerShown: false  }}

        />

      </Stack.Navigator>


    
    </NavigationContainer>
  );
}
