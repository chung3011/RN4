import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Match extends Component {
    state = {}
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.timeBox}>
                    <Text style={{
                        fontSize: 12,
                        color: 'white'
                    }}>
                        {this.props.match.time}
                    </Text>
                </View>
                <View style={styles.matchBox}>
                    <View style={styles.teamBox}>
                        <Text style={styles.teamText}>
                            {this.props.match.name[0]}
                        </Text>
                    </View>
                    <View style={styles.flagBox}>
                        <Image
                            style={styles.flagImage}
                            source={{ uri: this.props.match.image[0] }} />
                        <Image
                            style={styles.flagImage}
                            source={{ uri: this.props.match.image[1] }} />
                    </View>
                    <View style={styles.teamBox}>
                        <Text style={styles.teamText}>
                            {this.props.match.name[1]}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    matchBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '60%'
    },
    timeBox: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '30%'
    },
    teamBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    teamText: {
        fontSize: 15,
        color: 'white'
    },
    flagBox: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    flagImage: {
        width: '30%',
        height: '30%',
        aspectRatio: 1
    },
    box: {
        margin: '2%',
        width: 300,
        height: 70,
        borderRadius: 12,
        backgroundColor: '#3E4659',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });
