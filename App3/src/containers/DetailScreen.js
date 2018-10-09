import React, { Component } from 'react';
import {
    Text, ImageBackground, Button,
    View, Image, Dimensions, StyleSheet
} from 'react-native';
import { connect } from 'react-redux'
import Dash from 'react-native-dash';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

class DetailScreen extends Component {
    state = {}
    render() {
        return (
            <ImageBackground
                style={styles.background}
                resizeMode='cover'
                source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('film').poster_path}` }}
                blurRadius={50}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.box}>
                        <Image
                            style={styles.image}
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('film').backdrop_path}` }}
                            resizeMode={'stretch'}
                        />
                        <Text style={styles.title}>{this.props.navigation.getParam('film').title}</Text>
                    </View>
                    <View style={styles.movieDetail}>

                        <Text style={styles.text1}>Vote average</Text>
                        <Text style={styles.text2}>{this.props.navigation.getParam('film').vote_average}</Text>

                        <Text style={styles.text1}>Vote count</Text>
                        <Text style={styles.text2}>{this.props.navigation.getParam('film').vote_count}</Text>

                        <Text style={styles.text1}>Popularity</Text>
                        <Text style={styles.text2}>{this.props.navigation.getParam('film').popularity}</Text>

                    </View>
                    <View style={{ width: Dimensions.get('window').width * 0.5, marginTop: 10 }}>
                        <Button
                            title="Overview"
                            onPress={() => {
                                this.popupDialog.show();
                            }}
                            color="#7C7C7C"
                        />
                    </View>

                    <PopupDialog
                        ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                    >
                        <ImageBackground
                            style={styles.background}
                            resizeMode='cover'
                            source={{ uri: `https://image.tmdb.org/t/p/w500/${this.props.navigation.getParam('film').poster_path}` }}
                            blurRadius={50}
                        >
                            <Text style={{ marginHorizontal: 20, fontSize: 20, marginVertical: 20,color: '#FCF3E8', }}>{this.props.navigation.getParam('film').overview}</Text>
                        </ImageBackground>
                    </PopupDialog>


                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    box: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.28,
        borderRadius: 5,
        marginTop: 10,
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    container: {
        width: 100,
        height: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 10,
        marginLeft: 10,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 10,
        marginLeft: 10
    },
    movieDetail: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    text1: {
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5,
        color: '#FCF3E8',
    },
    text2: {
        fontWeight: 'bold',
        marginTop: 3,
        fontSize: 30,
    },
})

// export default DetailScreen;
const mapStateToProps = ({ film }) => ({ film })
export default connect(mapStateToProps)(DetailScreen);
