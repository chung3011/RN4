import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import CakeInfo from './CakeInfo';

export default class CakeItem extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('CakeDetail', {
                        cake: this.props.cake
                    })}>

                    <CakeInfo cake={this.props.cake} />

                </TouchableOpacity>
            </View>
        )
    }
}