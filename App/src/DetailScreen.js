import React, { Component } from 'react';
import {
    Text,
    View, Image, Dimensions,StyleSheet
} from 'react-native';

class DetailScreen extends Component {
    state = {}
    render() {
        const food = this.props.navigation.getParam('food')
        return (
            <View style={{ justifyContent: 'center', alignItems: "center" }}>    
                
                <Image
                    style={styles.image}
                    source={{ uri: this.props.navigation.getParam('food').image }} />
                <Text style={styles.text}>{this.props.navigation.getParam('food').caption}</Text>
                
            
            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: 300
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})
  
export default DetailScreen;
