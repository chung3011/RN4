import React, { Component } from 'react'
import { Text, StyleSheet, View, Slider, Dimensions } from 'react-native'
import { changeColor } from '../actions'

import { connect } from 'react-redux'

class ColorSlider extends Component {
    constructor(props) {
        super(props)
    }

    onValueChange = (value) => {
        this.props.changeColor({
            id: this.props.color.id,
            color: this.props.color.color,
            number: value
        })
    }

    render() {
        return (
            <View style={{ marginVertical: 15, marginHorizontal: 20 }}>
                <Text style={{ left: this.props.color.number, color: this.props.color.color }}>{this.props.color.number}</Text>
                <View>
                    <Slider
                        style={{ width: Dimensions.get('window').width*0.9 }}
                        step={1}
                        thumbStyle={this.props.color.color}
                        minimumTrackTintColor={this.props.color.color}
                        thumbTintColor={this.props.color.color}
                        minimumValue={0}
                        maximumValue={255}
                        onValueChange={this.onValueChange}
                    />
                </View>
            </View>
        )
    }
}

export default connect(null, { changeColor })(ColorSlider);