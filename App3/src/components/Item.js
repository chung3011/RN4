import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, Image, TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { addFilm } from '../actions'

class Item extends Component {
    state = {}
    addFilm = () => {
        this.props.addFilm({
            seen: this.props.film.title,
            image: this.props.film.poster_path
        })
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('Detail', {
                    film: this.props.film
                })}
                onLongPress={() => this.props.navigation.navigate('ListFilm')
                }
            >
                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.film.poster_path}` }}
                    resizeMode={'stretch'}
                />
                <View style={styles.box}>
                    <Text style={styles.text}
                        numberOfLines={2}>{this.props.film.original_title}</Text>
                    <Text style={styles.text2}>{this.props.film.release_date}</Text>
                </View>

            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 100,
        width: Dimensions.get('window').width,
        padding: 10
    },
    image: {
        flex: 1,
    },
    box: {
        flex: 3,
        marginLeft: 15
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold', 
    },
    text2: {
        fontSize: 10,
    }
})

//export default Item;
export default connect(null, { addFilm })(Item);
