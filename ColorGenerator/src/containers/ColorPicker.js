import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'

import ColorSlider from '../components/ColorSlider'
import ColorBlock from '../components/ColorBlock';

import { connect } from 'react-redux'

class ColorPicker extends Component {
  renderItem = ({ item }) => (
    <ColorSlider color={item} />
)
  render() {
    return (
      <View>
        <ColorBlock/>
        <FlatList
            data ={this.props.currentColor}
            renderItem = {this.renderItem}
            keyExtractor={(item) => item.color}
            showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

const mapStateToProps = ({currentColor}) => ({currentColor}) 
export default connect(mapStateToProps)(ColorPicker)