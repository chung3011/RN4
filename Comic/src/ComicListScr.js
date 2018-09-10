import React, { Component } from 'react';
import {
    Text,
    View,
    FlatList,
    Button
} from 'react-native';


import ComicItem from './ComicItem';
import {data} from './database.json'

class ComicListSrc extends Component {
    state = {}
    // renderItem = ({ item }) => <ComicItem comic={item}/>
    renderItem = (data) => {
        console.log('data:.......')
        console.log(data)
        return
        <ComicItem
            comic={data.item}
            navigation={this.props.navigation}
        />

    }
    render() {
        return (
            <View>
                <FlatList
                    data={data}
                    renderItem={this.renderItem}
                    numColumns={2}
                    // keyExtractor={(item) => item.id.toString()}
                    keyExtractor={(item) => {
                            console.log('key:....')
                            console.log(item)
                            return item.id
                        }
                    }
                />
                {/* <Button
                    title='Press me'
                    onPress={() => this.props.navigation.navigate('ComicDetail')}
                /> */}
            </View>
        );
    }
}

export default ComicListSrc;
