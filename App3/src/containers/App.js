import React, { Component } from 'react';
import {  Text,  View,} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../reducers'

import ListScreen from './ListScreen';
import DetailScreen from './DetailScreen';
import ListFilmScreen from './ListFilmScreen';

const Navigation = createStackNavigator({
  List: {
    screen: ListScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Film',
      }
    }
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        title: navigation.getParam('film').title,
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
      <Provider store={store} style={{ backgroundColor: 'rgb(230, 230, 230)', flex: 1 }}>
        <Navigation />
      </Provider>
    );
  }
}

export default App;