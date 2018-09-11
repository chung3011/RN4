import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import CakeInfo from './CakeInfo';

export default class CakeDetailScreen extends Component {
    render() {
        const cake = this.props.navigation.getParam('cake');
        return (
            <View>
                <CakeInfo cake={cake} />
                <FlatList
                    style={styles.CakeListScreen}
                    data={cake.names}
                    renderItem={({ item }) => <Text style={{ color: cake.color, paddingTop: 3, paddingLeft: 10, fontWeight: 'bold', fontSize: 20 }}>{item}</Text>}
                    keyExtractor={(item) => item}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CakeListScreen: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,

    }

})