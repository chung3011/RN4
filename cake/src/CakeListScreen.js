import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'


import { data } from './Database.json'
import CakeItem from './CakeItem';

export default class CakeListScreen extends Component {

    renderItem = ({ item }) => <CakeItem cake={item} navigation={this.props.navigation} />

    render() {
        return (
            <FlatList
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item) => item.type}
            />
        )
    }
}

const styles = StyleSheet.create({})