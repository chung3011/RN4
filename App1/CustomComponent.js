import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

class CustomComponent extends Component {
  state = {}
  render() {
    return (
      <View>
        <Text style={{ color: this.props.color }}>
          {this.props.name}</Text>
        <Image
          style={{ width: 50, height: 50 }}
          source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
        />
      </View>
    );
  }
}

export default CustomComponent;