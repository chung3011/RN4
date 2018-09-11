import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'

export default class CakeInfo extends Component {
    render() {
        return (
            <View style={[styles.overview, { backgroundColor: this.props.cake.color }]}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.cake.photo }}
                />
                <Text style={styles.text}>{this.props.cake.type}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    overview: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 20,
        height: 180,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        fontFamily: 'Ink Free',
        color: "white",
        fontWeight: 'bold',
        fontSize: 30,
    }
})