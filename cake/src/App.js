import React, { Component } from 'react';
import { Text, View, } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';

import CakeListScreen from './CakeListScreen'
import CakeDetailScreen from './CakeDetailScreen'

const Navigation = createStackNavigator({
  CakeList: {
    screen: CakeListScreen,
    navigationOptions: () => {
      return {
        title: 'Cakes',
      };
    }
  },
  CakeDetail: {
    screen: CakeDetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('cake').type,
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


