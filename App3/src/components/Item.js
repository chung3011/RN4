import React, { Component } from 'react';
import {
    Text, StyleSheet, Dimensions,
    View, Image, TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'
import { addFilm } from '../actions'

class Item extends Component {
    state = {}
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={() => this.props.navigation.navigate('Detail', {
                    film: this.props.film
                })}
                onLongPress={() => this.props.navigation.navigate('ListFilm', {
                    films: this.props.films
                })
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
        height: Dimensions.get('window').height*0.3,
        width: Dimensions.get('window').width,
        padding: 8
    },
    image: {
        flex: 4,
        borderRadius: 5,
        marginHorizontal:5
    },
    box: {
        flex: 1,
        marginLeft: 8
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    text2: {
        fontSize: 8,
    }
})

//export default Item;
export default connect(null, { addFilm })(Item);
