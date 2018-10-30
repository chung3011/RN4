import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    FlatList, TouchableOpacity
} from 'react-native';
import { backgroundColor, primaryColorRed, primaryColorGreen, primaryColorBrown, commonStyles } from '../styles'

import OrderItem from '../components/orderItem'
import { connect } from 'react-redux'
class TabOrder extends Component {
    state = {

    }

    renderTitle = () => <Text style={commonStyles.screenTitle}>Order</Text>

    renderOrders = () =>
        <FlatList
        style={{ flexGrow: 0, }}
        data={this.props.order}
        renderItem={({ item }) => <OrderItem item={item}></OrderItem>}
        keyExtractor={(item) => item.name}
    />

    total() {
        let total = 0
        this.props.order.forEach(item => {
            total = total + item.unitPrice * item.amount
        });
        return total
    }

    renderTotal = () => <View>
        <View style={{ marginVertical: 12, borderBottomWidth: 1, borderBottomColor: primaryColorBrown, marginHorizontal: 7 }}>

        </View>
        <View style={{ flexDirection: 'row' }}>
            <Text style={[commonStyles.screenTitle, { flex: 1 }]}>Total</Text>
            <Text style={commonStyles.screenTitle}>{this.total()}$</Text>
        </View>

    </View>

    

    renderConfirm = () => <TouchableOpacity
        style={{
            position: 'absolute',
            bottom: 16,
            alignSelf: 'center',
            backgroundColor: primaryColorRed,
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginVertical: 10
        }}
        onPress={this.confirmOrder}
    >
        <Text style={{ color: 'white' }}>Confirm</Text>
    </TouchableOpacity>

    render() {
        return (
            <View style={commonStyles.screenContainer}>
                {this.renderTitle()}
                {this.renderOrders()}
                {this.renderTotal()}
                {this.renderConfirm()}


            </View>
        );
    }
}

// export default TabOrder;
const mapStateToProps = ({ order }) => ({ order })
export default connect(mapStateToProps)(TabOrder);