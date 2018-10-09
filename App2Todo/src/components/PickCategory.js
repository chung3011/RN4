import React, { Component } from 'react';
import {
  Text, FlatList, StyleSheet,
  View, TouchableOpacity
} from 'react-native';
const categories = ['To do', 'Shopping', 'Birthday', 'Event', 'Personal']
import { categoryShopping, categoryTodo, categoryBirthday, categoryEvent, categoryPersonal} from '../styles'

import { connect } from 'react-redux'
import { pickCategory } from '../actions'

class PickCategory extends Component {
  state = {}
  renderItem = ({ item }) => (
    <TouchableOpacity
      //   style={[styles.container,{ backgroundColor: this.chooseColorByCategory() }]}>
      style={[styles.container, {  backgroundColor: this.chooseColorByCategory(item)  }]}
      onPress={()=>this.props.pickCategory(item)}
      // onPress={() => this.props.onPick(item)}
    >
      <Text style={{
        color: 'white',
        fontWeight: 'bold'
      }}>{item}</Text>
    </TouchableOpacity>
  )
  chooseColorByCategory = (item) => {
    switch (item) {
      case 'Shopping': return categoryShopping
      case 'To do': return categoryTodo
      case 'Birthday': return categoryBirthday
      case 'Event': return categoryEvent
      case 'Personal': return categoryPersonal
    }
  }
  render() {
    return (
      <View>
        <FlatList
          style={{ marginHorizontal: 20, marginVertical: 10 }}
          data={categories}
          keyExtractor={(index) => index.toString()}
          renderItem={this.renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
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


//1: state 2: action
export default connect(null,{pickCategory})(PickCategory);