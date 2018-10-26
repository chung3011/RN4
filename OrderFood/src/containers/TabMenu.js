import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet, FlatList, TouchableOpacity
} from 'react-native';
import { backgroundColor, primaryColorRed, primaryColorGreen, commonStyles } from '../styles'
import firebase from 'react-native-firebase'
import data from '../data.json'

import MenuItem from '../components/menuItem'

class TabMenu extends Component {
    state = {
        currentCategory: 'Hamburger',
        dishes: []
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`dishes/${this.state.currentCategory}`)
            .on('value', res => this.setState({ dishes: res._value }))
    }

    renderItemCategory = ({ item }) => (
        <TouchableOpacity
            onPress={() => this.setState({ currentCategory: item },()=>this.loadData())}
        >
            <Text style={[styles.textCategory, { color: this.state.currentCategory === item ? primaryColorRed : primaryColorGreen }]}>{item}</Text>
        </TouchableOpacity>
    )

    renderItemMenu = ({ item }) => <MenuItem item={item}></MenuItem>

    renderCategory = () => (
        <FlatList
            style={{ flexGrow: 0 ,}}
            data={['Hamburger', 'Pizza', 'Spaghetti', 'Salad', 'Drink', 'Snack']}
            renderItem={this.renderItemCategory}
            horizontal={true}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
        />
    )

    renderMenu = () =>
        <FlatList
            data={this.state.dishes}
            renderItem={this.renderItemMenu}
            keyExtractor={(item) => item.key}
            numColumns={2}
        />

    render() {
        return (
            <View style={commonStyles.screenContainer}>

                {this.renderCategory()}
                {this.renderMenu()}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        marginVertical: 10,
    }
})

export default TabMenu;