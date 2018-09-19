import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, ActivityIndicator, Image } from 'react-native'

import axios from 'axios'
import Button from 'react-native-button'

import WeatherList from './WeatherList';
import WeatherDetail from './WeatherDetail';

let textLocation = 'hanoi'
export default class App extends Component {

  state = {
    data: [],
    location: 'hanoi',
    loading: true
  }
  _onPressSearch = () => {
    this.setState({ location: textLocation })
  }
  render() {
    axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.location}&appid=c8926bfc3bdf925e5191bf7f8f1e6e40`)
      .then((res) => {
        this.setState({ data: res.data, loading: false })

      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#39354C', alignItems: 'center' }}>
        <View style={{ flexDirection: "row", width: Dimensions.get('window').width * 0.9, marginTop: 20, justifyContent: "space-around", height: 40 }}>
          <TextInput
            style={{ width: Dimensions.get('window').width * 0.6, borderColor: 'black', backgroundColor: 'white', color: 'black', borderRadius: 7 }}
            onChangeText={(text) => { textLocation = text }}
            placeholder="Enter your location"
            underlineColorAndroid="white"
          />
          <Button
            style={{ width: Dimensions.get('window').width * 0.2, backgroundColor: 'white', color: 'black', fontWeight: '100', borderRadius: 5, paddingTop: 7, height: 40 }}
            onPress={this._onPressSearch}
          >Search</Button>
        </View>
        {this.state.loading ? <ActivityIndicator />
          : <View style={{ marginTop: 10 }}>
            <View style={{ flexDirection: "column", flex: 3, marginTop: 10, alignItems: 'center' }}>
              <Text style={{ fontWeight: '300', fontSize: 40, color: 'white' }}>{this.state.data.city.name}</Text>
              <Text style={{ fontSize: 20, color: 'white' }}>{this.state.data.list[0].dt_txt.substring(0, 10)}</Text>
            </View>
            <View style={{ flex: 7, marginTop: 40 }}>
              <WeatherDetail weather={this.state.data.list} />
            </View>

            <View style={{ flex: 10 }}>
              <WeatherList weathers={this.state.data.list} />
            </View>
          </View>
        }


      </View>

    )
  }
}
