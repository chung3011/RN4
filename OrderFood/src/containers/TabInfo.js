import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { primaryColorRed } from '../styles'
class TabInfo extends Component {
    state = {}
    render() {
        return (
            <View>
                <Text style={styles.titleStyle}>Infomation</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: primaryColorRed
    }
});
export default TabInfo;