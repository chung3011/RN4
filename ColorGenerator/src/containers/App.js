import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from '../reducers'
import ColorPicker from './ColorPicker';

const store = createStore(rootReducer)

export default class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <View>
          <ColorPicker />
        </View>
      </Provider>
    )
  }
}
