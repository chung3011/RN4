import React, { Component } from 'react';
import {  Text,  View,} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';

const Navigation = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Food',
      }
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('food').title,
      };
    }
  }
})

class App extends Component {
  state = {}

  render() {

    return (
      <View style={{ backgroundColor: 'rgb(230, 230, 230)', flex: 1 }}>
        <Navigation />
      </View>
    );
  }
}

export default App;