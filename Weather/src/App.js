import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, Dimensions, ActivityIndicator, Image } from 'react-native'

import axios from 'axios'
import Button from 'react-native-button'

import ListWeathers from './ListWeathers';
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
    axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.location}&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then((res) => {
        this.setState({ data: res.data, loading: false })

      })
      .catch((error) => {
        console.log(error);
      });
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#39354C', alignItems: 'center' }}>
        <View style={{ flexDirection: "row", width: Dimensions.get('window').width - 35, marginTop: 10 }}>
          <TextInput
            style={{ flex: 6, borderColor: 'black', backgroundColor: 'white', color: 'black', borderRadius: 7 }}
            onChangeText={(text) => { textLocation = text }}
            placeholder="Enter your location"
            underlineColorAndroid="white"
          />
          <View style={{ flex: 0.5 }}></View>
          <Button

            style={{ flex: 3, backgroundColor: 'white', color: 'black', fontWeight: '100', borderRadius: 5, paddingTop: 7 }}
            onPress={this._onPressSearch}
          >Search</Button>
        </View>
        {this.state.loading ? <ActivityIndicator />
          : <View style={{ marginTop: 10 }}>
            {/* place and time */}
            <View style={{ flexDirection: "column", flex: 3, marginTop: 10, alignItems: 'center' }}>
              <Text style={{ fontWeight: '300', fontSize: 40, color: 'white' }}>{this.state.data.city.name}</Text>
              <Text style={{ fontSize: 20, color: 'white' }}>{this.state.data.list[0].dt_txt}</Text>
            </View>

            {/* image and temp */}
            <View style={{ flex: 7, marginTop: 40 }}>
              <WeatherDetail weather={this.state.data.list} />
            </View>

            <View style={{ flex: 10 }}>
              <ListWeathers weathers={this.state.data.list} />
            </View>
          </View>
        }


      </View>

    )
  }
}