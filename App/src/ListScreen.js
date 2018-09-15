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
        axios.get(`https://www.food2fork.com/api/search?key=18f2490acab432b1b292d281c510ff42`)
            .then(res =>
                this.setState({
                    data: res.data.recipes,
                    loading: false
                })
            )
            .catch(err => console.log(err))
    }
    renderItem = (data) => {
        return <Item
            recipe={data.item}
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
                            return item.recipe_id
                        }}
                    />
                }
            </View>
        );
    }
}

export default ListScreen;