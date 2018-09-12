import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
//import LinearGradient from 'react-native-linear-gradient';

export default class CakeInfo extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: "center" }}>
                <View style={[styles.box, { backgroundColor: this.props.cake.color }]}>
                    <Image
                        style={styles.image}
                        source={{ uri: this.props.cake.photo }}
                    />
                    <Text style={styles.text}>{this.props.cake.type}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        width: "90%",
        height: 180,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    text: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 30,
    }
})