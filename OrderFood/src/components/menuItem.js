import React, { Component } from 'react';
import {
    Text,
    View, StyleSheet, Dimensions, Image, TouchableOpacity
} from 'react-native';
import { backgroundColor, primaryColorRed, primaryColorGreen, primaryColorBrown } from '../styles'

import {connect} from 'react-redux'
import {addOrder} from '../actions'

class MenuItem extends Component {
    state = {}
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.image}
                    source={{ uri: this.props.item.image }}
                />
                <View style={{height: 30}}>
                    <Text style={styles.name}>{this.props.item.name}</Text>
                </View>

                <Text style={styles.price}>{this.props.item.price}</Text>
                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.addOrder({
                        name: this.props.item.name,
                        unitPrice: this.props.item.price
                    })}
                    >
                    <Text>Add to cart</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width / 2,
        padding: 5,
        alignItems: 'center'

    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    name: {
        marginTop: 5,
        color: primaryColorBrown,
        textAlign: 'center'
    },
    price: {
        marginTop: 5,
        color: primaryColorBrown,
        fontWeight: 'bold',
        fontSize: 20,
    },
    button: {
        backgroundColor: primaryColorRed,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10
    }
})

//export default MenuItem;
export default connect(null, { addOrder })(MenuItem);