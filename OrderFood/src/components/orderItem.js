import React, { Component } from 'react';
import {
  Text,
  View, TouchableOpacity,
} from 'react-native';
import { backgroundColor, primaryColorRed, primaryColorGreen, primaryColorBrown } from '../styles'
import Icon from 'react-native-vector-icons/FontAwesome'

import { delOrder } from '../actions'
import { connect } from 'react-redux'

class OrderItem extends Component {
  state = {  }
  render() {
    return (
        <View style={{ flexDirection: 'row', marginVertical: 5 }}>
            {!this.props.historyMode &&
                <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => this.props.delOrder(this.props.item.name)}
            >
                <Icon
                    name='trash'
                    size={25}
                    color= {primaryColorGreen}
                />
            </TouchableOpacity>
            }
            
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 8, color: primaryColorGreen }}>{this.props.item.amount}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 8, flex: 1 ,color: primaryColorBrown }}>{this.props.item.name}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginHorizontal: 8, color: primaryColorGreen}}>{`${this.props.item.unitPrice * this.props.item.amount}$`}</Text>
        </View>
    );
  }
}

export default connect(null, { delOrder })(OrderItem)