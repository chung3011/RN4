import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList
} from 'react-native';
import ComicItem from './ComicItem';
import {data} from './database.json'

class ComicListSrc extends Component {
    state = {}
    renderItem = ({ item }) => <ComicItem comic={item}/>
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    numColumns={2}
                />
            </View>
        );
    }
}

export default ComicListSrc;