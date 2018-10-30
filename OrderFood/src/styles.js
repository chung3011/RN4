export const primaryColorGreen = "#5fa0ae";
export const primaryColorRed = "#c94c4d";
export const backgroundColor = "#f7f5ea";
export const primaryColorBrown = "#5a4946";

export const white = "#fff";

import { StyleSheet, Platform } from 'react-native'

export const commonStyles = StyleSheet.create({
    screenContainer: {
        backgroundColor: backgroundColor,
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
    },
    screenTitle: {
        color: primaryColorRed,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 15,
        marginHorizontal: 10
    }
})