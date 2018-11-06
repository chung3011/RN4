import React, { Component } from 'react';
import {
    Text,
    View, StyleSheet, TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { backgroundColor, primaryColorRed, primaryColorGreen, primaryColorBrown, commonStyles } from '../styles'
import firebase from 'react-native-firebase'


class InfoItem extends Component {
    state = {}

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        firebase.database().ref(`users/`)
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .once('value', res => this.setState({
                info: res._value
            }))
    }

    // onSubmit = (event) => {
    //     firebase.database().ref(`users/`)
    //         .child(firebase.auth().currentUser.uid)
    //         .child(this.props.type)
    //         .set(event.nativeEvent.text)
    // }

    onSubmit (event) {
        firebase.database().ref(`users/`)
            .child(firebase.auth().currentUser.uid)
            .child(this.props.type)
            .set(event.nativeEvent.text)
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon
                    name={this.props.iconName}
                    size={40}
                    color={primaryColorGreen}
                />
                <TextInput
                    underlineColorAndroid={'rgba(0,0,0,0)'}
                    placeholder={'Enter your info'}
                    style={styles.txtInput}
                    returnKeyType={'done'}
                    onSubmitEditing={(event) => console.log(event.nativeEvent.text)}
                    defaultValue={this.state.info}
                    onSubmitEditing={this.onSubmit.bind(this)}
                />


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 15,
        marginVertical: 10,
    },
    txtInput: {
        flex: 1,
        color: primaryColorBrown,
        marginStart: 15,
        fontSize: 20
    },
})

export default InfoItem;