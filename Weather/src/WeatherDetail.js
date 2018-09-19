import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import Button from 'react-native-button'

export default class WeatherDetail extends Component {
    state = {
        uriImage: "https://lh5.googleusercontent.com/Hz5aT5hjB56orfVnqwiMenex_4btX6SVJ-0EN8-VZEUyGpaCa7J6JzAzHihvRj2yqTYPLcIat8jcu-b-r0Ba=w1920-h943",
        temp: Math.floor(this.props.weather[0].main.temp) - 273,
        doC: true
    }
    _changeTemp = () => {
        this.state.doC ? this.setState({ temp: Math.floor(this.state.temp * 1.8 + 32), doC: false }) : this.setState({ temp: Math.floor(this.state.temp / 1.8 - 32 / 1.8), doC: true })
    }
    componentWillMount() {
        switch (this.props.weather[0].weather[0].main) {
            case 'Clear':
                this.setState({ uriImage: "https://lh5.googleusercontent.com/Hz5aT5hjB56orfVnqwiMenex_4btX6SVJ-0EN8-VZEUyGpaCa7J6JzAzHihvRj2yqTYPLcIat8jcu-b-r0Ba=w1920-h943" })
                break;
            case 'Rain':
                this.setState({ uriImage: "https://lh4.googleusercontent.com/WLYYs9THcbg50l4M3Yd_8JuJ8R--dCQI3HQ-2A-DeDNmjyJ2dYXm8PA4-1GzDhkbLcEfWkxBoxvwafPn84Mk=w1920-h943" })
                break;
            case 'Clouds':
                this.setState({ uriImage: "https://lh6.googleusercontent.com/wSQLgbK-0S7p6McYumSKB3Yy_FEtuiP08fXLVQGpJ3eXVan0PD9Efvti5Jidkjwsuslc3MuDSmi9Y29VZujh=w1920-h943" })
                break;
            case 'Snow':
                this.setState({ uriImage: "https://lh4.googleusercontent.com/yAfTn9Jq2UjFw_rdJvXDDF_mmzxJ0p5XijI6Gj6B-t8Onhz6c5x7zSlKfQ3nWV_9Fo4_ytLRmtUuU1UQys52=w1920-h943" })
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

const styles = StyleSheet.create({})