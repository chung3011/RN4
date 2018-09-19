import React, { Component } from 'react';
import {
    Text, FlatList,
    View, Button, ActivityIndicator
} from 'react-native';
import Item from './Item';

import axios from 'axios'

class ListScreen extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount() {
        axios.get(`https://latte.lozi.vn/v1.2/topics/1/photos?t=popular&cityId=1`)
            .then(res =>
                this.setState({
                    data: res.data.data,
                    loading: false
                })
            )
            .catch(err => console.log(err))
    }
    renderItem = (data) => {
        return <Item
            food={data.item}
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
                        numColumns={2}
                        keyExtractor={(item) => {
                            return item._id
                        }}
                    />
                }
            </View>
        );
    }
}

export default ListScreen;