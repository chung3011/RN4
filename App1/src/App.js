import React, { Component } from 'react'
import { Text, View, StyleSheet, Image , FlatList} from 'react-native'
import Match from './Match2';

import { data } from './Database.json'

class App extends Component {
  state = {}
  renderItem = ({ item }) => <Match match={item}/>
  render() {
    return (
      <View style={styles.box}>
        <View style={styles.headerBox}>
          <Text style={{
            fontSize: 35,
            color: 'white',
            marginBottom: '8%'
          }}>Schedule</Text>
          <Image style={styles.img}
            source={{ uri: 'http://icons-for-free.com/free-icons/png/512/300768.png' }}
            />
          <Text style={{
            fontSize: 20,
            color: 'white',
            marginTop: '8%'
          }}>FIFA WORLDCUP 2018</Text>
        </View>
        <View style={styles.matchBox}>
          <FlatList
            data={data}
            renderItem={this.renderItem}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  matchBox: {
    flex: 3.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282F37'
  },
  headerBox: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#282F37',
  },
  img: {
    width: '60%',
    height: '32%',
    aspectRatio: 1,
    margin: '2%',
    tintColor: 'white'
  },
});
export default App;
