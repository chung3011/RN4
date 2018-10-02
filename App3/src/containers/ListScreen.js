import React, { Component } from 'react';
import {
    Text, FlatList,
    View, Button, ActivityIndicator
} from 'react-native';
import Item from '../components/Item';

import axios from 'axios'

class ListScreen extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=a5753dd20d8bf169dbcdff9e7d730148`)
            .then(res =>
                this.setState({
                    data: res.data.results,
                    loading: false
                })
            )
            .catch(err => console.log(err))
    }
    renderItem = ({ item }) => {
        return <Item
            film={item}
            navigation={this.props.navigation} />
    }

    render() {
        return (
            <View>
                {this.state.loading
                    ? <ActivityIndicator></ActivityIndicator>
                    : <FlatList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        numColumns={1}
                        keyExtractor={(item) => item.id.toString()}
                    />
                }
            </View>
        );
    }
}

export default ListScreen;