import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Button from 'react-native-button'

export default class WeatherDetail extends Component {
    state = {
        uriImage: "https://github.com/chung3011/RN4/blob/master/App2/img/clear.png?raw=true",
        temp: Math.floor(this.props.weather[0].main.temp) - 273,
        doC: true
    }
    _changeTemp = () => {
        this.state.doC ? this.setState({ temp: Math.floor(this.state.temp * 1.8 + 32), doC: false }) : this.setState({ temp: Math.floor(this.state.temp / 1.8 - 32 / 1.8), doC: true })
    }
    componentWillMount() {
        switch (this.props.weather[0].weather[0].main) {
            case 'Clear':
                this.setState({ uriImage: "https://github.com/chung3011/RN4/blob/master/App2/img/clear.png?raw=true" })
                break;
            case 'Rain':
                this.setState({ uriImage: "https://github.com/chung3011/RN4/blob/master/App2/img/rain.png?raw=true" })
                break;
            case 'Clouds':
                this.setState({ uriImage: "https://github.com/chung3011/RN4/blob/master/App2/img/clouds.png?raw=true" })
                break;
            case 'Snow':
                this.setState({ uriImage: "https://github.com/chung3011/RN4/blob/master/App2/img/snow.png?raw=true" })
                break;
        }
    }
    render() {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Image
                        style={{ width: 140, height: 140 }}
                        source={{ uri: this.state.uriImage }}
                    />
                    <Text style={{ fontSize: 30, color: 'white' }}>{this.props.weather[0].weather[0].description}</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column', alignItems: "center" }}>

                    <Text style={{ fontWeight: '400', fontSize: 110, color: 'white' }}>{this.state.temp}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Button style={{ backgroundColor: '#39354C', color: 'gray', fontSize: 22, fontWeight: '100', marginRight: 5 }}
                            onPress={this._changeTemp}
                            disabled={this.state.doC}
                            styleDisabled={{ color: 'white' }}
                        >°C</Button>
                        <Button style={{ backgroundColor: '#39354C', color: 'gray', fontSize: 22, fontWeight: '100', marginLeft: 5 }}
                            onPress={this._changeTemp}
                            disabled={!this.state.doC}
                            styleDisabled={{ color: 'white' }}
                        >°F</Button>
                    </View>
                </View>
            </View>
        )
    }
}
