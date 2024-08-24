import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './src/Home'

export default class App extends Component {
    render() {
        return (
          <NavigationContainer>
            <Home />
          </NavigationContainer>
        )
      }
}