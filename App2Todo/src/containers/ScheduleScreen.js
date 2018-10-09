import React, { Component } from 'react';
import {
  Text, SectionList,
  View, StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

import { calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';

import { connect } from 'react-redux'
import { addTask } from '../actions'

const listReference = 'listReference'

import { data } from '../database.json';

class ScheduleScreen extends Component {
  state = {}

  renderItem = ({ item, section }) => <ItemTask item={item} dayId={section.id}/>
  //renderSectionHeader = ({ section: { date } }) => {
  //  return < ItemDate date={date}/>
  //}
  renderSectionHeader = ({ section: { date, data } }) => (
    data.length !== 0 && < ItemDate date={date}/>
  )
  onDateSelected = (date) => {
    const dayId = Math.floor(date._d.getTime()/(24*60*60*1000))
    const index = this.props.tasks.map(item => item.id).indexOf(dayId)
    
    index !== -1 && this.refs.listReference.scrollToLocation({
      sectionIndex: index,
      itemIndex:0
    })
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

        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.props.tasks}
          keyExtractor={(item) => item.id}
          ref={listReference}
        />
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
  }
});

const mapStateToProps = ({tasks})=> ({tasks})

export default connect(mapStateToProps)(ScheduleScreen);