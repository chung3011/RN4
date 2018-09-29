import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions } from 'react-native'

import { connect } from 'react-redux'


class ColorBlock extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'column' ,backgroundColor: 'rgb(222, 226, 232)'}}>
                <View style={[styles.ColorBlock, {
                    backgroundColor: `rgb(${this.props.currentColor[0].number},${this.props.currentColor[1].number},${this.props.currentColor[2].number})`}]}>
                </View>
                <Text style={styles.text}>
                    {`rgb(${this.props.currentColor[0].number}, ${this.props.currentColor[1].number}, ${this.props.currentColor[2].number} )`}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    ColorBlock: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height / 2
    },
    text: {
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 20,
    }
})

const mapStateToProps = ({ currentColor }) => ({ currentColor })
export default connect(mapStateToProps)(ColorBlock)