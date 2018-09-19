import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'

export default class WeatherItem extends Component {
    state = {
        uriImage: "https://lh5.googleusercontent.com/Hz5aT5hjB56orfVnqwiMenex_4btX6SVJ-0EN8-VZEUyGpaCa7J6JzAzHihvRj2yqTYPLcIat8jcu-b-r0Ba=w1920-h943"
    }
    componentWillMount() {
        switch (this.props.weather.weather[0].main) {
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
            <View style={styles.overview}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>{this.props.weather.dt_txt}</Text>
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
        width: Dimensions.get('window').width - 35,
        height: 50,
        borderRadius: 5,
        marginTop: 12
    }
})