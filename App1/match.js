import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Match extends Component {
    render() {
        return (
            <View style={{
                margin: '2%',
                width: '80%',
                height: '22%',
                borderRadius: 12,
                backgroundColor: '#3E4659',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '30%'
                }}>
                    <Text style={{
                        fontSize: 12,
                        color: 'white'
                    }}>
                        {this.props.time}
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: '100%',
                    height: '60%'
                }}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            {this.props.team1}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}>
                        <Image
                            style={{
                                width: '30%',
                                height: '30%',
                                aspectRatio: 1
                            }}
                            source={{ uri: this.props.imageTeam1 }} />
                        <Image
                            style={{
                                width: '30%',
                                height: '30%',
                                aspectRatio: 1
                            }}
                            source={{ uri: this.props.imageTeam2 }} />
                    </View>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            fontSize: 15,
                            color: 'white'
                        }}>
                            {this.props.team2}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}
