import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
import firebase from 'react-native-firebase'

import LoginScreen from './LoginScreen';
import SplashScreen from './SplashScreen';
import HomeScreen from './HomeScreen';

const SwitchNavigation = createSwitchNavigator({
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
  HomeScreen: HomeScreen
})

class App extends Component {
  state = {}

  componentDidMount() {
    console.log(firebase)
  }

  render() {
    return (
      <SwitchNavigation />
    );
  }
}

export default App;