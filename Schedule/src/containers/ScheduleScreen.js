import React, { Component } from 'react';
import {
  Text, SectionList,
  View, StyleSheet
} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip'

import { calendarBackground, calendarHighlight } from '../styles';
import ItemDate from '../components/ItemDate';
import ItemTask from '../components/ItemTask';

import { data } from '../database.json';

class ScheduleScreen extends Component {
  state = {}

  renderItem = ({ item }) => <ItemTask item={item}/>
  renderSectionHeader = ({ section: { date } }) => {
    return < ItemDate date={date}/>
  }
  render() {
    return (
      <View style={styles.container}>
        <CalendarStrip
          style={styles.calendar}
          calendarColor={calendarBackground}
          highlightDateNumberStyle={{ color: calendarHighlight }}
          highlightDateNameStyle={{ color: calendarHighlight }}
        />

        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={data}
          keyExtractor={(item) => item.id} />
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

export default ScheduleScreen;