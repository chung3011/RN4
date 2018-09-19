import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import WeatherItem from './WeatherItem';


export default class ListWeathers extends Component {

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.weathers}
                    renderItem={({ item }) => <WeatherItem weather={item} />}
                    keyExtractor={(item, index) => item.dt.toString()}
                />
            </View>
        )
    }
}