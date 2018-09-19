import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, Image, TouchableOpacity
} from 'react-native';

class Item extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('Detail', {
                    food: this.props.food
                })}>
                <Image
                    style={styles.image}
                    source={{ uri: this.props.food.image}} />
                <Text style={styles.text}
                    numberOfLines={2}>{this.props.food.dish.foodName}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 210,
        width: Dimensions.get('window').width / 2,
        padding: 10
    },
    image: {
        height: 150
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    }
})

export default Item;
