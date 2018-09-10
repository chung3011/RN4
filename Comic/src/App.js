import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Orientation from 'react-native-orientation';

import ComicItem from './ComicItem';
import ComicListScr from './ComicListScr';
import ComicDetailScr from './ComicDetailScr';

const Navigation = createStackNavigator({
  ComicList: {
    screen: ComicListScr,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Comics',
      }
    }
  },
  ComicDetail: {
    screen: ComicDetailScr
  },

})

class App extends Component {
  state = {}
  render() {
    Orientation.lockToPortrait();
    return (
      <View style={{ backgroundColor: 'rgb(230,230,230)', flex: 1 }}>
        <Navigation />
      </View>


    );
  }
}

export default App;
