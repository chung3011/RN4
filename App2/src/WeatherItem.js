import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'

export default class WeatherItem extends Component {
    state = {
        uriImage: "https://github.com/chung3011/RN4/blob/master/App2/img/clear.png?raw=true"
    }
    componentWillMount() {
        switch (this.props.weather.weather[0].main) {
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
            <View style={styles.overview}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>{this.props.weather.dt_txt.substring(0, 10)}</Text>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "center" }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>{Math.floor(this.props.weather.main.temp) - 273}</Text>
                    <Image
                        style={{ width: 32, height: 32, marginLeft: 8 }}
                        source={{ uri: this.state.uriImage }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    overview: {
        flexDirection: 'row',
        backgroundColor: '#2E2B3E',
        width: Dimensions.get('window').width*0.8,
        height: 70,
        borderRadius: 5,
        marginTop: 12
    }
})