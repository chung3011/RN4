import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import data from '../data.json'
import { fillData } from '../actions'

class TypeScreen extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={[styles.box, { backgroundColor: '#ffa64d' }]}
                    onPress={() => {
                        this.props.fillData(data.lenght)
                    }}
                >
                    <Text style={{color:'white'}} >Lenght</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.box, { backgroundColor: '#ff8000' }]}
                    onPress={() => {
                        this.props.fillData(data.weight)
                    }}
                >
                    <Text style={{color:'white'}} >Weight</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    }
})
export default connect(null, { fillData })(TypeScreen)