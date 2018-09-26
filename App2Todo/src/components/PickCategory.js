import React, { Component } from 'react';
import {
  Text, FlatList, StyleSheet,
  View, TouchableOpacity
} from 'react-native';
const categories = ['To do', 'Shopping', 'Birthday', 'Event', 'Personal']

class PickCategory extends Component {
  state = {}
  renderItem = ( {item} ) => (
    <TouchableOpacity
      //   style={[styles.container,{ backgroundColor: this.chooseColorByCategory() }]}>
      style={[styles.container, { backgroundColor: 'pink' }]}
    onPress={()=>this.props.onPick(item)}
    >
      <Text>{item}</Text>
    </TouchableOpacity>
  )
  render() {
    return (
      <View>
        <FlatList
          data={categories}
          keyExtractor={(index) => index.toString()}
          renderItem={this.renderItem}
          horizontal={true}
        />
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    marginEnd: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default PickCategory;