import React, { Component } from 'react';
import {
  Text, StyleSheet, Platform,
  View, TextInput, TouchableOpacity,Button
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import TimePicker from 'react-native-modal-datetime-picker';
import { calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import { categoryShopping, categoryTodo, categoryBirthday, categoryEvent, categoryPersonal } from '../styles';
import PickCategory from '../components/PickCategory';
import { connect } from 'react-redux'
import { addTask } from '../actions'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
class AddTaskScren extends Component {
  state = {
    selectedDate: this.getDateStringFromDateObj(new Date()),
    isTimePickerVisible: false,
    selectedTime: new Date().toTimeString().substring(0, 5),
    currentCategory: 'To do'
  }

  getDateStringFromDateObj(date) {
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
  }

  onDateSelected = (date) => {
    this.setState({ selectedDate: this.getDateStringFromDateObj(date._d) })
  }
  render() {

    return (
      <View style={styles.container}>
        <CalendarStrip
          style={styles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
          onDateSelected={this.onDateSelected}
        />
        <ItemDate date={this.state.selectedDate} />
        <Text style={styles.title}>Content</Text>
        <TextInput underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.input} />
        <Text style={styles.title}>Time</Text>
        <TouchableOpacity
          onPress={() => this.setState({ isTimePickerVisible: true })}>
          <Text style={styles.time}>{this.state.selectedTime}</Text>
        </TouchableOpacity>
        <TimePicker
          isVisible={this.state.isTimePickerVisible}
          onConfirm={(time) => {
            this.setState({
              isTimePickerVisible: false,
              selectedTime: time.toTimeString().substring(0, 5)
            })
          }}
          onCancel={() => this.setState({ isTimePickerVisible: false })} />
        <Text style={styles.title}>Category</Text>
        <PickCategory
          onPick={(currentCategory) => this.setState({
            currentCategory
          })}
        />
        <Text>{`This task ${this.props.currentCategory}`}</Text>
        <Button
          title='add'
          onPress={() => this.props.addTask({
            id: 1,
            date: "Friday 22 June 2018",
            task: {
              id: 1234,
              category: "Personal",
              content: "Go to New York",
              time: "09:00"
            }          
          })}
        >

        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  calendar: {
    height: 100,
    paddingTop: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
    marginStart: 20
  },
  input: {
    fontSize: 16,
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 15,
    //for ios
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: 'gray',
    //for android
    elevation: 5,
  },
  time: {
    fontSize: 18,
    color: calendarHighlight,
    fontWeight: 'bold',
    marginStart: 20
  },
  task: {
    backgroundColor: categoryShopping,
    borderRadius: 10,
    padding: 15,
    marginStart: 20,
    flex: 1
  },
});

// tạo 1 props cho AddTaskScreen
// props 'category', giá trị bằng store.currentCategory
//const mapStateToProps = (store) => ({category: store.currentCategory})
const mapStateToProps = ({ currentCategory }) => ({ currentCategory })


export default connect(mapStateToProps, { addTask })(AddTaskScren);