import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import ComicItem from './ComicItem';
import ComicListSrc from './ComicListSrc';

import Orientation from 'react-native-orientation';

class App extends Component {
  state = {}
  render() {
    Orientation.lockToPortrait();
    return (
      <View style={{
        backgroundColor: 'rgb(230,230,230)',
      flex:1}}>
        <ComicListSrc></ComicListSrc>
      </View>
      
    
    );
  }
}

export default App;