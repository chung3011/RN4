import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import { backgroundColor, primaryColorRed, primaryColorGreen, commonStyles } from '../styles'
import InfoItem from '../components/infoItem';
class TabInfo extends Component {
    state = {}
    render() {
        return (
            <View style={commonStyles.screenContainer}>
                <Text style={commonStyles.screenTitle}>Infomation</Text>
                <InfoItem type={'displayName'} iconName={'user'} />
                <InfoItem type={'address'} iconName={'location-arrow'} />
                <InfoItem type={'phoneNumber'} iconName={'phone'}/>
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