import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
class App extends Component {
    state = {
        bgColor: 'red'
    }
    onPressButton = (color) => {
        this.setState( {bgColor: color} )
    }
   
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor : this.state.bgColor
            }}>
                <Button
                    title='yellow'
                    color='yellow'
                    onPress={() => this.onPressButton('yellow')}
                />
                <Button
                    title='red'
                    color='red'
                    onPress={() => this.onPressButton('red')}
                />
            </View>
        );
    }
}

export default App;