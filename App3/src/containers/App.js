import React, { Component } from 'react';
import {  Text,  View,} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import ListFilmScreen from './ListFilmScreen';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Navigation = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Cinema',
        headerStyle: {
          backgroundColor: '#FAF6EA',
        },
      }
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        //title: navigation.getParam('film').title,
        title: 'Movie\'s Detail',
        headerStyle: {
          backgroundColor: '#FAF6EA',
        },
      };
    }
  },
  ListFilm: {
    screen: ListFilmScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Seen',
      };
    }
  }
})

const store = createStore(rootReducer)

class App extends Component {
  state = {}

  render() {

    return (
      <Provider store={store} style={{ backgroundColor: '#FAF6EA', flex: 1 }}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;