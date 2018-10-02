import React, { Component } from 'react';
import {
    Text,
    View, Image, Dimensions, StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import Dash from 'react-native-dash';

class DetailScreen extends Component {
    state = {}
    render() {
        return (
            <View >

                <Image
                    style={styles.image}
                    source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('film').backdrop_path}` }} />
                <Text style={styles.text}>Release date: {this.props.navigation.getParam('film').release_date}</Text>
                <Text style={styles.text}>Vote average: {this.props.navigation.getParam('film').vote_average}</Text>
                <Text style={styles.text}>Vote count: {this.props.navigation.getParam('film').vote_count}</Text>
                <Text style={styles.text}>Popularity: {this.props.navigation.getParam('film').popularity}</Text>
                <Dash style={{width: Dimensions.get('window').width , height:2, marginTop: 10}}/>
                <Text style={styles.text}>Overview: {this.props.navigation.getParam('film').overview}</Text>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height*0.4
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10
    }
})

// export default DetailScreen;
const mapStateToProps = ({ film }) => ({ film })
export default connect(mapStateToProps)(DetailScreen);
