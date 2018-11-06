import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet, FlatList
} from 'react-native';
import { backgroundColor, primaryColorRed, primaryColorGreen, commonStyles, primaryColorBrown } from '../styles'
import Accordion from 'react-native-collapsible/Accordion';
import OrderItem from '../components/orderItem'


class HistoryItem extends Component {
    state = {
        activeSections: []
    }
    renderHeader(sections) {
        const total = sections.orders
            .reduce((acc, curV) => acc + curV.amount * curV.unitPrice, 0)
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10, marginHorizontal: 15 }}>
                <Text style={{ flex: 1, color: primaryColorBrown, fontSize: 15 }}>{sections.date}</Text>
                <Text style={{ color: primaryColorRed, fontWeight: 'bold', fontSize: 15 }}>{`${total}$`}</Text>
            </View>
        )
    }

    renderContent(sections) {
        return (
            <FlatList
                style={{ flexGrow: 0, }}
                data={sections.orders}
                renderItem={({ item }) => <OrderItem item={item} historyMode={true}></OrderItem>}
                keyExtractor={(item) => item.name}
            />
        )

    }

    render() {
        return (
            <View>
                <Text style={styles.title}>{this.props.title}</Text>
                <Accordion
                    underlayColor={'white'}
                    activeSections={this.state.activeSections}
                    sections={this.props.data}
                    renderHeader={this.renderHeader}
                    renderContent={this.renderContent}
                    onChange={(activeSections) => this.setState({ activeSections })}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        color: primaryColorGreen,
        marginStart: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },
})

export default HistoryItem;