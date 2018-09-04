import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Match from './match';

class App extends Component {
  state = {}
  render() {
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282F37',
      }}>
        <View style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 30,
            color: 'white',
            marginBottom: '8%'
          }}>Schedule</Text>
          <Image style={{
            width: '60%',
            height: '30%',
            aspectRatio: 1,
            margin: '2%',
            tintColor: 'white'
          }}
            source={{ uri: 'http://icons-for-free.com/free-icons/png/512/300768.png' }}
            />
          <Text style={{
            fontSize: 20,
            color: 'white',
            marginTop: '8%'
          }}>FIFA WORLDCUP 2018</Text>
        </View>
        <View style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#282F37'
        }}>
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

export default App;