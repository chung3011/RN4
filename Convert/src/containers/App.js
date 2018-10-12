import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { createStore } from 'redux'
import rootReducer from '../reducers'
import { Provider } from 'react-redux'
import { createStackNavigator } from 'react-navigation'

import ConvertScreen from './ConvertScreen';
import TypeScreen from './TypeScreen';

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const Navigation = createStackNavigator({
  Convert: {
    screen: ConvertScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Convert",
      headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate("Type")}
        >
          <Text style={styles.text}>Type</Text>
        </TouchableOpacity>
    })
  },
  Type: {
    screen: TypeScreen,
    navigationOptions: ({ navigation }) => ({
      title: "Type",
      headerRight:
        <TouchableOpacity
          onPress={() => navigation.navigate("Convert")}
        >
          <Text style={styles.text}>Done</Text>
        </TouchableOpacity>
    })
  }


});
const store = createStore(rootReducer)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>

    );
  }
}
const styles = StyleSheet.create({
  text: {
    marginEnd: 20,
    fontWeight: 'bold',
  },

})
