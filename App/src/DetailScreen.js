import React, { Component } from 'react';
import {
    Text,
    View, Image, Dimensions,StyleSheet
} from 'react-native';

class DetailScreen extends Component {
    state = {}
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: "center" }}>    
                
                <Image
                    style={styles.image}
                    source={{ uri: this.props.navigation.getParam('recipe').image_url }} />
                <Text style={styles.text}>{this.props.navigation.getParam('recipe').publisher}</Text>
                <Text style={styles.text}>Social Rank:{this.props.navigation.getParam('recipe').social_rank}</Text>
                <Text style={styles.text}>Detail: {this.props.navigation.getParam('recipe').f2f_url}</Text>
            
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
