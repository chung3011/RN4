import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, FlatList, Dimensions } from 'react-native'

import Item from '../components/Item.js';
import { connect } from 'react-redux'

class ConvertScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            varLeft: 0,
            varRight: 0,
            change: true
        }
    }

    renderItem1 = (item) => <Item object={item} type='left' />
    renderItem2 = (item) => <Item object={item} type='right' />
    
    render() {

        var resutltRight = Number(this.state.varLeft) * this.props.currentValue.left / this.props.currentValue.right
        var resutltLeft = Number(this.state.varRight) * this.props.currentValue.right / this.props.currentValue.left

        return (
            <View style={{ flexDirection: 'row' }}>
                <View>
                    <TextInput
                        keyboardType='numeric'
                        textAlign={'center'}
                        style={styles.text}
                        onChangeText={(text) => this.setState({
                            varLeft: text,
                            change: true
                        })}

                        value={this.state.change ? this.state.varLeft.toString() : resutltLeft.toString()}
                    />
                    <FlatList
                        data={this.props.currentData}
                        renderItem={this.renderItem1}
                        keyExtractor={(item) => item.value}
                    />
                </View>
                <View>
                    <TextInput
                        keyboardType='numeric'
                        textAlign={'center'}
                        style={styles.text}
                        onChangeText={(text) => this.setState({
                            varRight: text,
                            change: false

                        })}
                        value={this.state.change ? resutltRight.toString() : this.state.varRight.toString()}
                    />
                    <FlatList
                        data={this.props.currentData}
                        renderItem={this.renderItem2}
                        keyExtractor={(item) => item.value}
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        width: Dimensions.get('window').width / 2,
        alignItems: 'center',
        marginTop: 20
    }
})
const mapStateToProps = ({ currentValue, currentData }) => ({ currentValue, currentData });
export default connect(mapStateToProps)(ConvertScreen);