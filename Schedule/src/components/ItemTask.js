import React, { Component } from 'react';
import {
  Text, TouchableOpacity,
  View, StyleSheet
} from 'react-native';
import RoundCheckbox from 'rn-round-checkbox';

import { categoryShopping, categoryTodo, categoryBirthday, categoryEvent, categoryPersonal, calendarHighlight } from '../styles'

class ItemTask extends Component {
  state = {}

  chooseColorByCategory = () => {
    switch (this.props.item.category) {
      case 'Shopping': return categoryShopping
      case 'To do': return categoryTodo
      case 'Birthday': return categoryBirthday
      case 'Event': return categoryEvent
      case 'Personal': return categoryPersonal
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <RoundCheckbox
          checked={this.state.taskDone}
          onValueChange={(newValue) => this.setState({ taskDone: newValue })}
          backgroundColor={calendarHighlight} />
        <Text style={styles.time}>{this.props.item.time}</Text>
        <TouchableOpacity style={[styles.task, { backgroundColor: this.chooseColorByCategory() }]}>
          <Text style={styles.content}>{this.props.item.content}</Text>
          <Text style={styles.category}>{this.props.item.category}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  time: {
    color: 'gray',
    marginStart: 20,
    width: 40
  },
  task: {
    backgroundColor: categoryShopping,
    borderRadius: 10,
    padding: 15,
    marginStart: 20,
    flex: 1
  },
  content: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16
  },
  category: {
    color: 'white',
    marginTop: 5,
    fontSize: 12,
    opacity: 0.8
  }
})

export default ItemTask;