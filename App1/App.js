import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Match from './match';

class App extends Component {
  state = {}
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
          <Match
            time={'Jul 6 2018 - 21:00'}
            team1={'Uruguay'}
            team2={'France'}
            imageTeam1={'https://png.icons8.com/color/100/000000/uruguay.png'}
            imageTeam2={'https://png.icons8.com/color/100/000000/france.png'}
          />
          <Match
            time={'Jul 7 2018 - 01:00'}
            team1={'Brazil'}
            team2={'Belgium'}
            imageTeam1={'https://png.icons8.com/color/100/000000/brazil.png'}
            imageTeam2={'https://png.icons8.com/color/100/000000/belgium.png'}
          />
          <Match
            time={'Jul 8 2018 - 01:00'}
            team1={'Russia'}
            team2={'Croatia'}
            imageTeam1={'https://png.icons8.com/color/100/000000/russian-federation.png'}
            imageTeam2={'https://png.icons8.com/color/100/000000/croatia.png'}
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
    flex: 3,
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
