import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))


const firebaseConfig = {
  apiKey: "AIzaSyCIRy08UPFXVAtAgzMHJ-2adVd3TOnhf24",
  authDomain: "portraitworthy.firebaseapp.com",
  projectId: "portraitworthy",
  storageBucket: "portraitworthy.appspot.com",
  messagingSenderId: "1036890874490",
  appId: "1:1036890874490:web:597a79c40bd6d8034d91c3",
  measurementId: "G-LPKE9HF207"
};

const app = initializeApp(firebaseConfig)


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './components/auth/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';



const Stack = createStackNavigator();
export default function App() {

  return (

    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
            component={Home} 
            options={{  headerShown: false  }}
        />

        <Stack.Screen name="Register" 
            component={Register} 
            options={{  headerShown: true  }}
        />

      </Stack.Navigator>


    
    </NavigationContainer>
  );
}

