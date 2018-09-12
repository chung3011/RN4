import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet } from 'react-native'
import CakeInfo from './CakeInfo';

export default class CakeDetailScreen extends Component {
    render() {
        const cake = this.props.navigation.getParam('cake');
        return (
            <View>
                <CakeInfo cake={cake} />
                <View style={{ justifyContent: 'center', alignItems: "center" }}>
                    <FlatList
                        style={styles.CakeListScreen}
                        data={cake.names}
                        renderItem={({ item }) => <Text style={[styles.Text, { color: cake.color }]}>{item}</Text>}
                        keyExtractor={(item) => item}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    CakeListScreen: {
        backgroundColor: 'white',
        borderRadius: 10,
        margin: 10,
        width: "90%"
    },
    Text: {
        paddingTop: 3,
        paddingLeft: 10,
        fontWeight: 'bold',
        fontSize: 20
    }

})