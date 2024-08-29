import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import KeyboardBlock from './src/KeyboardBlock';
import TrackpadBlock from './src/TrackpadBlock';
import TouchBlock from './src/TouchBlock';
import BlockAll from './src/BlockAll';
//import { BlockProvider } from '@context/BlockContext';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="KeyboardBlock" 
            component={KeyboardBlock} 
            options={{ headerShown: false }} 
          />
          <Stack.Screen
            name="TrackpadBlock"
            component={TrackpadBlock}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="TouchBlock"
            component={TouchBlock}
            options={{ headerShown: false}}
          />
          <Stack.Screen
            name="BlockAll"
            component={BlockAll}
            options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
